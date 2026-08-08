// Reacciones de los posts.
//
// Antes vivían en un Redis de Upstash que YA NO EXISTE: el 8-ago-2026 su host
// (above-foxhound-50488.upstash.io) daba NXDOMAIN, así que cada clic moría con
// "TypeError: fetch failed" y el catch del navegador se lo tragaba en silencio.
// Por eso todos los contadores estaban a cero desde mayo.
//
// Ahora usan Supabase, la misma base que ya guarda las visitas (`views.ts`) y
// que funciona. Una fila por (slug, emoji).
import type { APIRoute } from 'astro';
import { getSupabase } from '../lib/supabase';

const VALID_EMOJIS = ['🔥', '😂', '🤯', '💪', '🧠'];
const TABLA = 'recableado_reactions';

const json = (body: unknown, status = 200, cache?: string) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json',
			...(cache ? { 'Cache-Control': cache } : {}),
		},
	});

export const GET: APIRoute = async ({ url }) => {
	try {
		const slug = url.searchParams.get('slug');
		if (!slug) return json({ error: 'slug required' }, 400);

		const { data } = (await getSupabase()
			.from(TABLA)
			.select('emoji, count')
			.eq('slug', slug)) as { data: { emoji: string; count: number }[] | null };

		const counts: Record<string, number> = {};
		for (const e of VALID_EMOJIS) {
			counts[e] = data?.find((d) => d.emoji === e)?.count ?? 0;
		}
		return json(counts, 200, 'public, max-age=30');
	} catch (e) {
		return json({ error: String(e) }, 500);
	}
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const { slug, emoji, action } = await request.json();

		if (!slug || !VALID_EMOJIS.includes(emoji)) {
			return json({ error: 'slug and a valid emoji are required' }, 400);
		}
		if (action !== 'add' && action !== 'remove') {
			return json({ error: 'action must be add or remove' }, 400);
		}

		const supabase = getSupabase();

		const { data: fila } = (await supabase
			.from(TABLA)
			.select('count')
			.eq('slug', slug)
			.eq('emoji', emoji)
			.maybeSingle()) as { data: { count: number } | null };

		// El voto real lo controla el localStorage del lector; aquí solo se
		// impide que el contador baje de cero si llegan dos "remove" seguidos.
		const actual = fila?.count ?? 0;
		const nuevo = action === 'add' ? actual + 1 : Math.max(0, actual - 1);

		const { error } = await supabase
			.from(TABLA)
			.upsert({ slug, emoji, count: nuevo, updated_at: new Date().toISOString() }, { onConflict: 'slug,emoji' });

		if (error) return json({ error: error.message }, 500);

		return json({ count: nuevo });
	} catch (e) {
		return json({ error: String(e) }, 500);
	}
};
