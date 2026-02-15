import type { APIRoute } from 'astro';
import { getSupabase } from '../../lib/supabase';
import { Redis } from '@upstash/redis';

const VALID_EMOJIS = ['\u{1F525}', '\u{1F602}', '\u{1F92F}', '\u{1F4AA}', '\u{1F9E0}'];

function getRedis() {
	const url = import.meta.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_REST_URL;
	const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
	if (!url || !token) throw new Error('Redis config missing');
	return new Redis({ url, token });
}

export const GET: APIRoute = async ({ url }) => {
	try {
		const slugsParam = url.searchParams.get('slugs');
		if (!slugsParam) {
			return new Response(JSON.stringify({ error: 'slugs param required' }), { status: 400 });
		}

		const slugList = slugsParam.split(',').filter(Boolean);
		if (slugList.length === 0) {
			return new Response(JSON.stringify({}), {
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Fetch views from Supabase
		const supabase = getSupabase();
		const { data: viewsData } = await supabase
			.from('recableado_page_views')
			.select('slug, views')
			.in('slug', slugList) as { data: { slug: string; views: number }[] | null };

		// Fetch reaction totals from Redis
		const redis = getRedis();
		const keys = slugList.flatMap((slug) =>
			VALID_EMOJIS.map((emoji) => `reactions:${slug}:${emoji}`)
		);

		let reactionValues: (number | null)[] = [];
		if (keys.length > 0) {
			reactionValues = await redis.mget<(number | null)[]>(...keys);
		}

		// Build result
		const result: Record<string, { views: number; reactions: number }> = {};
		slugList.forEach((slug, slugIdx) => {
			const views = viewsData?.find((d) => d.slug === slug)?.views ?? 0;

			let reactions = 0;
			for (let i = 0; i < VALID_EMOJIS.length; i++) {
				reactions += reactionValues[slugIdx * VALID_EMOJIS.length + i] ?? 0;
			}

			result[slug] = { views, reactions };
		});

		return new Response(JSON.stringify(result), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=120',
			},
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
	}
};
