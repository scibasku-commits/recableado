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
		'post.views': 'visitas',
		'cta.inline': '¿Te está gustando? Compártelo',

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
		'home.latestStories': 'Últimas historias',
		'home.viewAll': 'Ver todos los posts →',

		// Language toggle
		'lang.switchTo': 'English',

		// Chat — hero (homepage)
		'chat.hero.badge': 'Pregúntale a Giora',
		'chat.hero.tagline': 'De gin tonics a prompts. 5 IAs, 0 programadores, 1 agencia de viajes.\nPregúntame cómo.',
		'chat.hero.greeting': 'Buenas. 72 años, 5 IAs y un negocio que se gestiona casi solo. No programo — pido. Y funciona. Dispara.',
		'chat.hero.placeholder': 'Escríbeme algo...',
		'chat.hero.listening': 'Escuchando...',
		'chat.pill.fiveBrains': '🧠 Los 5 cerebros',
		'chat.pill.noCoding': '🔧 Sin programar',
		'chat.pill.agents': '🤖 Agentes autónomos',
		'chat.pill.ginTonic': '🍸 De gin tonic a prompt',

		// Chat — drawer (floating, all pages)
		'chat.drawer.greeting': '72 años, 42 vendiendo viajes, y 5 IAs que hacen el trabajo de un equipo entero. Pregúntame lo que quieras — sobre el blog, mi stack, o cómo pasé de un gin tonic a un prompt.',
		'chat.drawer.placeholder': 'Pregúntame lo que quieras...',
		'chat.drawer.listening': 'Escuchando...',
		'chat.drawer.pill.fiveBrains': 'Los 5 cerebros',
		'chat.drawer.pill.ginTonic': 'De gin tonic a prompt',
		'chat.drawer.pill.stack': 'Tu stack',
		'chat.drawer.pill.noCoding': 'Sin programar',

		// Chat — messages sent to model when pill clicked
		'chat.msg.fiveBrains': '¿Qué son los Cinco Cerebros y cómo los usas?',
		'chat.msg.noCoding': '¿De verdad construiste todo sin saber programar? ¿Cómo?',
		'chat.msg.agents': '¿Tienes agentes de IA que trabajan solos mientras duermes?',
		'chat.msg.ginTonic': '¿Cómo pasaste de no saber nada de IA a construir todo esto en 6 meses?',
		'chat.msg.stack': '¿Qué herramientas usas? Claude, Conductor, MCP...',

		// Chat — labels & errors
		'chat.aria.toggle': 'Pregunta a Giora',
		'chat.aria.close': 'Cerrar chat',
		'chat.aria.send': 'Enviar',
		'chat.aria.mic': 'Dictar por voz',
		'chat.error.connection': 'Error de conexión. Inténtalo de nuevo.',
		'chat.error.generic': 'Disculpa, ha habido un problema. Inténtalo de nuevo.',
		'chat.fallback': 'No he podido generar una respuesta.',
		'chat.drawer.signature': 'Recableado · Blog de Giora Gilead',
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
		'post.views': 'views',
		'cta.inline': 'Enjoying this? Share it',

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
		'home.latestStories': 'Latest stories',
		'home.viewAll': 'View all posts →',

		// Language toggle
		'lang.switchTo': 'Español',

		// Chat — hero (homepage)
		'chat.hero.badge': 'Ask Giora',
		'chat.hero.tagline': 'From gin tonics to prompts. 5 AIs, 0 developers, 1 travel agency.\nAsk me how.',
		'chat.hero.greeting': 'Hi. 72 years old, 5 AIs and a business that runs itself. I don\'t code — I ask. And it works. Fire away.',
		'chat.hero.placeholder': 'Type something...',
		'chat.hero.listening': 'Listening...',
		'chat.pill.fiveBrains': '🧠 The five brains',
		'chat.pill.noCoding': '🔧 No coding',
		'chat.pill.agents': '🤖 Autonomous agents',
		'chat.pill.ginTonic': '🍸 From gin tonic to prompt',

		// Chat — drawer (floating, all pages)
		'chat.drawer.greeting': '72, 42 years selling travel, and 5 AIs doing the work of a whole team. Ask me anything — about the blog, my stack, or how I went from a gin tonic to a prompt.',
		'chat.drawer.placeholder': 'Ask me anything...',
		'chat.drawer.listening': 'Listening...',
		'chat.drawer.pill.fiveBrains': 'The five brains',
		'chat.drawer.pill.ginTonic': 'Gin tonic to prompt',
		'chat.drawer.pill.stack': 'Your stack',
		'chat.drawer.pill.noCoding': 'No coding',

		// Chat — messages sent to model when pill clicked
		'chat.msg.fiveBrains': 'What are the Five Brains and how do you use them?',
		'chat.msg.noCoding': 'Did you really build everything without knowing how to code? How?',
		'chat.msg.agents': 'Do you have AI agents that work on their own while you sleep?',
		'chat.msg.ginTonic': 'How did you go from knowing nothing about AI to building all this in 6 months?',
		'chat.msg.stack': 'What tools do you use? Claude, Conductor, MCP...',

		// Chat — labels & errors
		'chat.aria.toggle': 'Ask Giora',
		'chat.aria.close': 'Close chat',
		'chat.aria.send': 'Send',
		'chat.aria.mic': 'Voice input',
		'chat.error.connection': 'Connection error. Try again.',
		'chat.error.generic': 'Sorry, something went wrong. Try again.',
		'chat.fallback': 'I couldn\'t generate a response.',
		'chat.drawer.signature': 'Recableado · Giora Gilead\'s blog',
	},
} as const;
