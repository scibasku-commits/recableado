// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://recableado.blog',
	output: 'server',
	adapter: vercel(),
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		fallback: { en: 'es' },
		routing: {
			prefixDefaultLocale: false,
			fallbackType: 'rewrite',
		},
	},
});
