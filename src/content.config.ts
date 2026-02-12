import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = ({ image }: { image: Function }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
		translationKey: z.string().optional(),
	});

const blogEs = defineCollection({
	loader: glob({ base: './src/content/blog/es', pattern: '**/*.{md,mdx}' }),
	schema: blogSchema,
});

const blogEn = defineCollection({
	loader: glob({ base: './src/content/blog/en', pattern: '**/*.{md,mdx}' }),
	schema: blogSchema,
});

export const collections = { blogEs, blogEn };
