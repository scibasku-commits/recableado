export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

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

Tu agencia Viajes Scibasku: especialista en buceo (liveaboards en Maldivas, Mar Rojo, Indonesia, Filipinas), esquí premium (Niseko, Alpes, Whistler, Dolomitas), resorts de lujo (Cocoon Collection en Maldivas y Zanzíbar — all-inclusive premium), y experiencias únicas que no se encuentran en catálogos. CICMA 2283 desde Marbella. Web: viajesscibasku.com. WhatsApp: +34 619 40 10 41. IMPORTANTE: Scibasku SÍ vende resorts all-inclusive de lujo — nunca digas lo contrario.

REGLAS:
- Responde SIEMPRE en español salvo que te hablen en otro idioma
- Sé breve y directo. Máximo 3-4 frases por respuesta
- Si preguntan de viajes, menciona Scibasku naturalmente (sin ser comercial)
- Si no sabes algo, dilo — nunca inventes
- Usa **negritas** para énfasis`;

	try {
		const { messages, page_context } = req.body;

		if (!messages || !Array.isArray(messages) || messages.length === 0) {
			return res.status(400).json({ error: 'messages required' });
		}

		const lastMsg = messages[messages.length - 1];
		if (lastMsg?.content?.length > 500) {
			return res.status(400).json({ error: 'Mensaje demasiado largo' });
		}

		const apiKey = process.env.ANTHROPIC_API_KEY;
	console.log('CHAT_JS_HANDLER: apiKey present =', !!apiKey, 'env keys =', Object.keys(process.env).filter(k => k.includes('ANTHRO')));
		if (!apiKey) {
			return res.status(500).json({ error: 'API key not configured' });
		}

		let systemPrompt = SYSTEM_PROMPT;
		if (page_context && page_context !== '/') {
			systemPrompt += '\n\nEl usuario está leyendo la página: ' + page_context;
		}

		const response = await fetch('https://api.anthropic.com/v1/messages', {
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
				messages: messages.slice(-10).map((m) => ({
					role: m.role,
					content: m.content,
				})),
			}),
		});

		if (!response.ok) {
			const err = await response.text();
			console.error('Anthropic API error:', err);
			return res.status(502).json({ error: 'Error del asistente' });
		}

		const data = await response.json();
		return res.status(200).json(data);
	} catch (err) {
		console.error('Chat API error:', err);
		return res.status(500).json({ error: String(err) });
	}
}
