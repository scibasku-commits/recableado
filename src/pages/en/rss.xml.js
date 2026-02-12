export const prerender = true;
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';

export async function GET(context) {
	let posts = await getCollection('blogEn');
	// Fallback to ES if no EN posts
	if (posts.length === 0) {
		posts = await getCollection('blogEs');
	}
	return rss({
		title: `${SITE_TITLE} (English)`,
		description: 'A 72-year-old traveller discovering the last continent',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/en/blog/${post.id}/`,
		})),
	});
}
