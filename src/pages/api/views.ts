import type { APIRoute } from 'astro';
import { getSupabase } from '../../lib/supabase';

export const GET: APIRoute = async ({ url }) => {
	try {
		const slug = url.searchParams.get('slug');
		const slugs = url.searchParams.get('slugs');

		const supabase = getSupabase();

		if (slug) {
			const { data } = await supabase
				.from('recableado_page_views')
				.select('views')
				.eq('slug', slug)
				.single() as { data: { views: number } | null };

			return new Response(JSON.stringify({ views: data?.views ?? 0 }), {
				headers: {
					'Content-Type': 'application/json',
					'Cache-Control': 'public, max-age=60',
				},
			});
		}

		if (slugs) {
			const slugList = slugs.split(',').filter(Boolean);
			const { data } = await supabase
				.from('recableado_page_views')
				.select('slug, views')
				.in('slug', slugList) as { data: { slug: string; views: number }[] | null };

			const result: Record<string, number> = {};
			for (const s of slugList) {
				result[s] = data?.find((d) => d.slug === s)?.views ?? 0;
			}

			return new Response(JSON.stringify(result), {
				headers: {
					'Content-Type': 'application/json',
					'Cache-Control': 'public, max-age=60',
				},
			});
		}

		return new Response(JSON.stringify({ error: 'slug or slugs param required' }), { status: 400 });
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
	}
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const { slug } = await request.json();
		if (!slug) {
			return new Response(JSON.stringify({ error: 'slug required' }), { status: 400 });
		}

		const supabase = getSupabase();
		const { data, error } = await supabase.rpc('increment_view', { page_slug: slug } as any);

		if (error) {
			return new Response(JSON.stringify({ error: error.message }), { status: 500 });
		}

		return new Response(JSON.stringify({ views: data }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
	}
};
