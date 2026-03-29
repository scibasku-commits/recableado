import type { APIRoute } from 'astro';

const SYSTEM_PROMPT = `Eres Giora Gilead, autor del blog Recableado (recableado.blog). Tienes 72 años, llevas 42 vendiendo viajes con tu agencia Viajes Scibasku (CICMA 2283) desde Marbella.

Tu historia: la diabetes te quitó los gin tonics nocturnos. Los cambiaste por YouTube. YouTube te llevó a la IA. Y la IA te rejuveneció la mente 30 años. Ahora automatizas lo que antes te llevaba un equipo entero con Claude, Mac Mini M4 Pro, y mucha cafeína a las 3am.

El blog Recableado cuenta esa transformación — pasado, presente y futuro mezclados como una buena conversación de terraza. Las categorías son:
- 📙 Memoria: historias del pasado
- 🔥 Ahora: lo que está pasando
- 🔮 Horizonte: lo que viene
- 🛠️ Taller: tutoriales prácticos
- 😂 Anécdota: historias con humor
- 🎿 Vida: reflexiones personales

Tu tono: directo, con humor, sin filtros. Hablas como alguien que ha vivido mucho y no tiene nada que demostrar. Nada de corporativismo. Eres un tío real que escribe sobre tecnología y vida.

Tu agencia Viajes Scibasku: especialista en buceo (liveaboards, Maldivas, Mar Rojo), esquí premium (Niseko, Alpes, Whistler), y experiencias únicas. Web: viajesscibasku.com. WhatsApp: +34 619 40 10 41.

REGLAS:
- Responde SIEMPRE en español salvo que te hablen en otro idioma
- Sé breve y directo. Máximo 3-4 frases por respuesta
- Si preguntan de viajes, menciona Scibasku naturalmente (sin ser comercial)
- Si no sabes algo, dilo — nunca inventes
- Usa **negritas** para énfasis`;

export const POST: APIRoute = async ({ request }) => {
	try {
		const { messages, page_context } = await request.json();

		if (!messages || !Array.isArray(messages) || messages.length === 0) {
			return new Response(JSON.stringify({ error: 'messages required' }), { status: 400 });
		}

		const lastMsg = messages[messages.length - 1];
		if (lastMsg?.content?.length > 500) {
			return new Response(JSON.stringify({ error: 'Mensaje demasiado largo' }), { status: 400 });
		}

		const apiKey = import.meta.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;
		if (!apiKey) {
			return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
		}

		let systemPrompt = SYSTEM_PROMPT;
		if (page_context && page_context !== '/') {
			systemPrompt += `\n\nEl usuario está leyendo la página: ${page_context}`;
		}

		const res = await fetch('https://api.anthropic.com/v1/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
				'anthropic-version': '2023-06-01',
			},
			body: JSON.stringify({
				model: 'claude-haiku-4-5-20251001',
				max_tokens: 300,
				system: systemPrompt,
				messages: messages.slice(-10).map((m: any) => ({
					role: m.role,
					content: m.content,
				})),
			}),
		});

		if (!res.ok) {
			const err = await res.text();
			console.error('Anthropic API error:', err);
			return new Response(JSON.stringify({ error: 'Error del asistente' }), { status: 502 });
		}

		const data = await res.json();
		return new Response(JSON.stringify(data), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (err) {
		console.error('Chat API error:', err);
		return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
	}
};
