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
	redirects: {
		'/en/blog/019-dos-caras-misma-moneda/': '/en/blog/019-two-sides-same-coin-ai-agents-safety/',
		'/en/blog/018-limpieza-linkedin-ia/': '/en/blog/018-ai-cleaned-my-linkedin-identity-30-minutes/',
		'/en/blog/017-skill-creator-agencia-viajes/': '/en/blog/017-15-ai-skills-travel-agency-claude/',
		'/en/blog/016-cinco-cerebros/': '/en/blog/016-five-ai-brains-fixed-my-bicycle-tire/',
		'/en/blog/015-historia-recableado/': '/en/blog/015-how-i-built-bilingual-blog-72-no-coding/',
		'/en/blog/013-viaje-esqui-japon-ia/': '/en/blog/013-ski-trip-japan-12-people-ai-copilot-72/',
		'/en/blog/011-heliski-ia-operaciones/': '/en/blog/011-heliskiing-ai-operations-travel-agent/',
	},
});
