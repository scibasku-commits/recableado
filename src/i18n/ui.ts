export const ui = {
	es: {
		// Nav
		'nav.home': 'Home',
		'nav.blog': 'Blog',
		'nav.exercises': 'Ejercicios',
		'nav.cheatsheet': 'Cheat Sheet',
		'nav.about': 'About',

		// Footer
		'footer.tagline': 'CICMA 2283 | Marbella | En ruta desde 1954',

		// Blog listing
		'blog.latest': 'Último post',
		'blog.allPosts': 'Todos los posts',
		'blog.postCount': (n: number) => `${n} post${n !== 1 ? 's' : ''} publicado${n !== 1 ? 's' : ''}`,
		'blog.minRead': 'min de lectura',
		'blog.read': 'Leer',

		// Blog post
		'post.share': '¿Te ha gustado? Compártelo',
		'post.shareLinkedIn': 'Compartir en LinkedIn',
		'post.shareX': 'Compartir en X',
		'post.shareWhatsApp': 'Compartir por WhatsApp',
		'post.shareEmail': 'Compartir por email',
		'post.copyLink': 'Copiar enlace',
		'post.copied': 'Copiado',
		'post.whatDidYouThink': '¿Qué te ha parecido?',
		'post.updated': 'Actualizado',

		// Home
		'home.heroCaption': 'De los gin tonics a la inteligencia artificial — la odisea de un recableado',
		'home.years': 'años',
		'home.sellingTrips': 'vendiendo viajes',
		'home.finalGrade': 'nota final del curso',
		'home.itEmployees': 'empleados IT',
		'home.quote': '«Si este trabajo lo leyera alguien fuera del curso, pensaría que lo ha escrito un nativo digital de 30 años, no un señor de 72 que hace un año no sabía lo que era un prompt.»',
		'home.quoteAttribution': '— José Ródenas Montes, instructor DOMINA ChatGPT',
		'home.cta': '¿Tienes más de 50 y piensas que la IA no va contigo?',
		'home.ctaButton': 'Leer mi historia →',

		// Language toggle
		'lang.switchTo': 'English',
	},
	en: {
		// Nav
		'nav.home': 'Home',
		'nav.blog': 'Blog',
		'nav.exercises': 'Exercises',
		'nav.cheatsheet': 'Cheat Sheet',
		'nav.about': 'About',

		// Footer
		'footer.tagline': 'CICMA 2283 | Marbella | On the road since 1954',

		// Blog listing
		'blog.latest': 'Latest post',
		'blog.allPosts': 'All posts',
		'blog.postCount': (n: number) => `${n} post${n !== 1 ? 's' : ''} published`,
		'blog.minRead': 'min read',
		'blog.read': 'Read',

		// Blog post
		'post.share': 'Enjoyed this? Share it',
		'post.shareLinkedIn': 'Share on LinkedIn',
		'post.shareX': 'Share on X',
		'post.shareWhatsApp': 'Share on WhatsApp',
		'post.shareEmail': 'Share by email',
		'post.copyLink': 'Copy link',
		'post.copied': 'Copied',
		'post.whatDidYouThink': 'What did you think?',
		'post.updated': 'Updated',

		// Home
		'home.heroCaption': 'From gin & tonics to artificial intelligence — the odyssey of a rewired mind',
		'home.years': 'years old',
		'home.sellingTrips': 'selling trips',
		'home.finalGrade': 'final course grade',
		'home.itEmployees': 'IT employees',
		'home.quote': '"If someone outside the course read this work, they\'d think it was written by a 30-year-old digital native, not a 72-year-old man who a year ago didn\'t know what a prompt was."',
		'home.quoteAttribution': '— José Ródenas Montes, DOMINA ChatGPT instructor',
		'home.cta': 'Over 50 and think AI isn\'t for you?',
		'home.ctaButton': 'Read my story →',

		// Language toggle
		'lang.switchTo': 'Español',
	},
} as const;
