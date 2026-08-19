import type { APIRoute } from 'astro';

export const prerender = false;

const LISTMONK_URL = (import.meta.env.LISTMONK_URL || 'https://boletin.viajesscibasku.es').replace(/\/$/, '');
const LIST_NAMES = {
	'day-to-day': 'Recableado · IA en el día a día',
	building: 'Recableado · Lo que construyo',
	both: 'Recableado · Todo',
} as const;

type Interest = keyof typeof LIST_NAMES;
type Payload = { name?: unknown; email?: unknown; interest?: unknown; website?: unknown };
type PublicList = { uuid: string; name: string };
type RateLimitEntry = { count: number; resetAt: number };

let publicListsCache: { expires: number; lists: PublicList[] } | null = null;
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;
// Immediate application guard. This map is not shared across Vercel instances;
// production still needs an authorised WAF rule or another atomic shared store.
const rateLimits = new Map<string, RateLimitEntry>();
let nextRateLimitCleanup = 0;

function escapeHTML(value: string) {
	return value.replace(/[&<>'"]/g, (character) => ({
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		"'": '&#39;',
		'"': '&quot;',
	})[character] || character);
}

function fallbackPage(message: string, status: number, extraHeaders: HeadersInit = {}) {
	const title = status < 400 ? 'Revisa tu correo' : 'No he podido guardarlo';
	return new Response(`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{margin:0;padding:2rem;background:#fffaf0;color:#2d3748;font:18px/1.7 Georgia,serif}.box{max-width:42rem;margin:10vh auto;padding:2rem;border-radius:14px;background:#11111f;color:#fffaf0}.box h1{margin-top:0;font-family:system-ui,sans-serif}.box a{color:#ff9a76}</style></head><body><main class="box"><h1>${title}</h1><p>${escapeHTML(message)}</p><p><a href="/">Volver a Recableado</a></p></main></body></html>`, {
		status,
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
			'Cache-Control': 'no-store',
			...extraHeaders,
		},
	});
}

function respond(request: Request, message: string, status = 200, extraHeaders: HeadersInit = {}) {
	const acceptsJSON = request.headers.get('accept')?.includes('application/json');
	if (!acceptsJSON) return fallbackPage(message, status, extraHeaders);
	return new Response(JSON.stringify({ ok: status < 400, message }), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store',
			...extraHeaders,
		},
	});
}

function checkRateLimit(clientAddress: string, now = Date.now()) {
	if (now >= nextRateLimitCleanup) {
		for (const [key, entry] of rateLimits) {
			if (entry.resetAt <= now) rateLimits.delete(key);
		}
		nextRateLimitCleanup = now + RATE_LIMIT_WINDOW_MS;
	}

	const key = clientAddress.split(',')[0]?.trim() || 'unknown';
	const existing = rateLimits.get(key);
	const entry = !existing || existing.resetAt <= now
		? { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS }
		: existing;

	if (entry.count >= RATE_LIMIT_MAX) {
		return { allowed: false, retryAfter: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)) };
	}

	entry.count += 1;
	rateLimits.set(key, entry);
	return { allowed: true, retryAfter: 0 };
}

async function readPayload(request: Request): Promise<Payload> {
	const contentLength = Number(request.headers.get('content-length') || 0);
	if (contentLength > 10_000) throw new Error('invalid');

	const contentType = request.headers.get('content-type') || '';
	const payload = contentType.includes('application/json')
		? await request.json()
		: Object.fromEntries((await request.formData()).entries());
	if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('invalid');
	return payload as Payload;
}

async function listmonkFetch(path: string, init?: RequestInit) {
	return await fetch(`${LISTMONK_URL}${path}`, {
		...init,
		headers: { Accept: 'application/json', ...(init?.headers || {}) },
		signal: AbortSignal.timeout(10_000),
	});
}

async function getPublicLists() {
	if (publicListsCache && publicListsCache.expires > Date.now()) return publicListsCache.lists;

	const response = await listmonkFetch('/api/public/lists');
	if (!response.ok) throw new Error(`lists:${response.status}`);
	const lists = await response.json() as PublicList[];
	publicListsCache = { expires: Date.now() + 5 * 60_000, lists };
	return lists;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	const origin = request.headers.get('origin');
	if (!origin || origin !== new URL(request.url).origin) {
		return respond(request, 'Solicitud no válida.', 403);
	}

	const rateLimit = checkRateLimit(clientAddress);
	if (!rateLimit.allowed) {
		return respond(request, 'Demasiados intentos. Espera un minuto antes de volver a probar.', 429, {
			'Retry-After': String(rateLimit.retryAfter),
		});
	}

	let payload: Payload;
	try {
		payload = await readPayload(request);
	} catch {
		return respond(request, 'Revisa el nombre y el correo.', 400);
	}

	if (typeof payload.website === 'string' && payload.website.trim()) {
		return respond(request, 'Revisa tu correo para confirmar la suscripción.');
	}

	const name = typeof payload.name === 'string' ? payload.name.trim().replace(/\s+/g, ' ') : '';
	const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
	const interest: Interest = typeof payload.interest === 'string' && payload.interest in LIST_NAMES
		? payload.interest as Interest
		: 'both';

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	if (name.length < 2 || name.length > 80 || email.length > 254 || !emailPattern.test(email)) {
		return respond(request, 'Revisa el nombre y el correo.', 400);
	}

	try {
		const lists = await getPublicLists();
		const listName = LIST_NAMES[interest];
		const list = lists.find((candidate) => candidate.name === listName);
		if (!list) throw new Error(`missing-list:${listName}`);

		const response = await listmonkFetch('/api/public/subscription', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, list_uuids: [list.uuid] }),
		});

		if (!response.ok) {
			const detail = (await response.text()).slice(0, 300);
			console.error('Listmonk subscription failed', response.status, detail);
			return respond(request, 'Ahora mismo no he podido guardar tu suscripción.', response.status === 400 ? 400 : 502);
		}

		const result = await response.json() as { data?: { has_optin?: boolean } };
		if (result.data?.has_optin !== true) {
			console.error('Listmonk list is not configured for double opt-in', listName);
			return respond(request, 'La lista todavía no está preparada para confirmar altas.', 503);
		}

		return respond(request, 'Revisa tu correo. Te he enviado un enlace para confirmar que eres tú.');
	} catch (error) {
		console.error('Listmonk unavailable', error instanceof Error ? error.message : error);
		return respond(request, 'Ahora mismo no he podido guardar tu suscripción.', 503);
	}
};

export const ALL: APIRoute = async ({ request }) => respond(request, 'Método no permitido.', 405);
