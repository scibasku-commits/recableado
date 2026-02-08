import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

const VALID_EMOJIS = ['🔥', '😂', '🤯', '💪', '🧠'];

function getRedis() {
	const url = import.meta.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_REST_URL;
	const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
	if (!url || !token) {
		throw new Error(`Redis config missing: url=${!!url}, token=${!!token}`);
	}
	return new Redis({ url, token });
}

export const GET: APIRoute = async ({ url }) => {
	try {
		const slug = url.searchParams.get('slug');
		if (!slug) {
			return new Response(JSON.stringify({ error: 'slug required' }), { status: 400 });
		}

		const redis = getRedis();
		const counts: Record<string, number> = {};
		const keys = VALID_EMOJIS.map((e) => `reactions:${slug}:${e}`);
		const values = await redis.mget<(number | null)[]>(...keys);

		VALID_EMOJIS.forEach((emoji, i) => {
			counts[emoji] = values[i] ?? 0;
		});

		return new Response(JSON.stringify(counts), {
			headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
	}
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const { slug, emoji, action } = body;

		if (!slug || !emoji || !action) {
			return new Response(JSON.stringify({ error: 'slug, emoji, and action required' }), { status: 400 });
		}

		if (!VALID_EMOJIS.includes(emoji)) {
			return new Response(JSON.stringify({ error: 'invalid emoji' }), { status: 400 });
		}

		if (action !== 'add' && action !== 'remove') {
			return new Response(JSON.stringify({ error: 'action must be add or remove' }), { status: 400 });
		}

		const redis = getRedis();
		const key = `reactions:${slug}:${emoji}`;

		if (action === 'add') {
			await redis.incr(key);
		} else {
			const current = (await redis.get<number>(key)) ?? 0;
			if (current > 0) {
				await redis.decr(key);
			}
		}

		const newCount = (await redis.get<number>(key)) ?? 0;
		return new Response(JSON.stringify({ emoji, count: newCount }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
	}
};
