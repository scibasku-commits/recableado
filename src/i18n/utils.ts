import { defaultLang, type Lang } from './languages';
import { ui } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang === 'en') return 'en';
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: string): string | ((...args: any[]) => string) {
		const val = (ui[lang] as Record<string, any>)[key] ?? (ui[defaultLang] as Record<string, any>)[key];
		return val;
	};
}

/** Maps ES route slugs to EN equivalents */
const routeMap: Record<string, string> = {
	ejercicios: 'exercises',
	exercises: 'ejercicios',
};

export function getLocalizedPath(lang: Lang, path: string): string {
	// Strip any existing /en/ prefix
	const cleanPath = path.replace(/^\/en(\/|$)/, '/');

	if (lang === defaultLang) {
		return cleanPath;
	}

	// Map slug if needed (e.g., /ejercicios → /en/exercises)
	const segments = cleanPath.split('/').filter(Boolean);
	if (segments.length > 0 && routeMap[segments[0]]) {
		segments[0] = routeMap[segments[0]];
	}

	return `/en/${segments.join('/')}`;
}

export function getAlternateUrl(lang: Lang, currentPath: string): string {
	const targetLang: Lang = lang === 'es' ? 'en' : 'es';
	return getLocalizedPath(targetLang, currentPath);
}

/** Strip /en/ prefix from pathname for active-state comparison */
export function stripLangPrefix(pathname: string): string {
	return pathname.replace(/^\/en(\/|$)/, '/');
}
