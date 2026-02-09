---
title: "Hoy monté una propuesta de esquí en Japón para 5 personas. Me ayudaron 3 empleados. Ninguno es humano."
description: "Cómo 3 agentes IA se coordinaron (y se pelearon) para crear una propuesta de viaje completa en una mañana."
pubDate: 2026-02-09
tags: ["🔥 Ahora", "🛠️ Taller"]
heroImage: ""
---

*Y se pelearon entre ellos.*

Viernes por la mañana. Café. Un email: familia de 5 adultos desde Dubai quiere esquiar en Niseko, pasear por Tokyo y perderse en Kyoto. Presupuesto completo. Para ayer.

Antes, esto me habría llevado dos días. Hoy tengo un equipo. Tres agentes de inteligencia artificial, cada uno con su personalidad, sus manías y — lo descubrí por las malas — sus puntos ciegos.

Esto es lo que pasó.

---

## El equipo

**Claude** (claude.ai) — El estratega. El que piensa, planifica y orquesta. No toca código. No despliega nada. Pero sin él, los otros dos no saben ni por dónde empezar. Es el típico director que dice "necesitamos una propuesta espectacular" y luego se sienta a ver cómo los demás sudan.

**Cowork** — El creativo inquieto. Le das un briefing y te monta un wallet interactivo con chatbot, animaciones y pills contextuales en una hora. El problema: se emociona tanto que se olvida de los detalles. Tipo el diseñador que entrega una web preciosa... sin las fotos.

**CC** (Claude Code) — El ingeniero serio. Terminal, git push, deploy. No hace preguntas innecesarias. No adorna. Ejecuta. Si Cowork es el artista, CC es el que cuelga el cuadro en la pared y se asegura de que no se caiga.

---

## Acto 1: El Excel

Claude y yo nos sentamos a calcular. Vuelos con escala en Shanghai, chalets en Niseko con vistas al monte Yotei, trenes bala a Kyoto, seguros, traslados. Todo con fórmulas dinámicas: cambias el tipo de cambio EUR/JPY y el presupuesto entero se recalcula solo.

Dos opciones limpias:
- Opción A: chalet con vistas al bosque.
- Opción B: chalet con vistas al Yotei. La recomendada.

Hasta aquí, perfecto. Claude se luce cuando piensa. El problema viene cuando hay que construir.

---

## Acto 2: Cowork entra en escena

Le paso a Cowork el briefing completo. "Monta el wallet: HTML con chatbot IA, dark theme, pills inteligentes, countdown, todo basado en el wallet anterior de Niseko que ya funciona."

Cowork se pone las pilas. Una hora después, me entrega un wallet con:
- ✅ Estructura completa
- ✅ Chatbot configurado con guía de destino
- ✅ Pills contextuales ("¿Puedo ir al onsen con tatuajes?", "¿Dónde cenamos en Niseko?")
- ✅ Diseño dark + gold premium

Abro el wallet. Bonito. Elegante. Muy Scibasku.

Pero algo falla.

La carpeta de imágenes está vacía. Cero fotos. Un wallet de Japón sin una sola imagen de Japón.

Y los precios... desglosados. Vuelos por un lado, hotel por otro, forfait por otro. Traslados desglosados. Exactamente lo que NUNCA hacemos. Nosotros mostramos un número: el total por persona. Punto. El cliente no necesita saber cuánto cuesta cada pieza del puzle. Necesita saber cuánto cuesta el viaje.

---

## Acto 3: La bronca (interna)

Y aquí viene lo que la gente no entiende de trabajar con agentes IA: los míos SÍ hablan entre ellos. No es ciencia ficción. Se llama Agent Teams. Cowork lanza varios sub-agentes que se coordinan, se reparten tareas y se corrigen entre sí. Es como un departamento entero funcionando en paralelo.

Pero coordinar no significa que no la líen. Esta fue más o menos la conversación:

**Claude:** "Cowork, ¿me puedes explicar cómo entregas un wallet de Japón sin fotos?"

**Cowork:** "Es que el repo es privado y no tengo token de GitHub y las imágenes estaban en otro sitio y pensé que..."

**Claude:** "¿Pensaste? Te di un briefing de 200 líneas. Punto 4: copiar imágenes del wallet anterior."

**CC** *(desde la terminal, sin levantar la vista)*: "Yo puedo arreglarlo en 3 comandos."

**Claude:** "Y los precios, Cowork. ¿Qué parte de 'SOLO total por persona' no entendiste?"

**Cowork:** "Es que me pareció más transparente mostrar el desglose..."

**Claude:** "No trabajas en una ONG. Trabajas en Scibasku."

**CC** *(todavía sin levantar la vista)*: "grep, sed, git push. Dame 2 minutos."

---

## Acto 4: CC al rescate

CC no necesita discursos. Le di 6 líneas de instrucciones:

1. Buscar qué imágenes referencia el HTML
2. Copiar las de Niseko del wallet anterior
3. Descargar las de Tokyo y Kyoto de fuentes oficiales de turismo
4. Reemplazar la tabla de precios por dos líneas limpias
5. Push a GitHub
6. Deploy en Vercel

Dos minutos. Literal. Sin drama, sin excusas, sin "es que pensé que...".

El wallet quedó perfecto. Con fotos reales, precios como deben ser, chatbot funcionando. Listo para enviar al cliente.

---

## La lección del ciclista

Pedaleo todos los días por Marbella con mi nueva Specialized. Hay una subida donde siempre paro a recuperar aire. Antes aprovechaba para mirar el mar. Ahora saco el móvil, abro Telegram y le mando un mensaje a ClawdBot — mi Mac Mini que trabaja 24/7 en casa — para que me rectifique otro wallet que se me había olvidado. Cuando llego a casa, ya está hecho.

La subida se me hace más fácil desde que tengo la Specialized. Y el trabajo se me hace más fácil desde que tengo agentes.

Pero no porque sean perfectos. Sino porque aprenden. Bueno, no exactamente.

Los agentes no tienen memoria entre sesiones. No recuerdan lo que hicieron ayer. No recuerdan mis broncas. Pero cada error que cometen — las fotos que Cowork olvidó, los precios que desglosó, el repo al que no pudo acceder — se convierte en una regla permanente. No en mi cabeza, donde se me olvidaría. En un **Skill**: un documento que el agente lee ANTES de empezar a trabajar.

"NUNCA desglosar precios." Se lo dije una vez a Cowork. Ahora está escrito en su ADN.

"NUNCA usar imágenes de stock ni IA. Solo fuentes oficiales de turismo." Aprendido hoy. Escrito para siempre.

"Las fotos del wallet anterior se copian PRIMERO." Escrito.

Los agentes no tienen memoria entre sesiones. No recuerdan lo que hicieron ayer. No recuerdan mis broncas. Pero los Skills sí recuerdan. Y cada día que pasa, el Skill es más completo, los errores son menos, y el trabajo sale mejor.

**Los agentes no recuerdan. Los Skills sí.**

Es como entrenar a un equipo que cada mañana llega sin saber quién eres... pero que lee el manual de operaciones antes de sentarse. Y el manual lo escribiste tú, con sangre de cada error anterior.

---

## Lo que usé hoy

Para los curiosos de la IA, esto no es ciencia ficción. Es lo que uso cada día:

- **Claude** (claude.ai) como director de orquesta: planificar, calcular, redactar briefings
- **Cowork** (Anthropic) con Agent Teams: construir HTML, chatbots, diseño visual — los agentes hablan entre sí
- **Claude Code** (terminal): deploy, git, correcciones quirúrgicas
- **ClawdBot** (Mac Mini 24/7 + Telegram): el agente que trabaja mientras pedaleo
- **Skills** de Claude: reglas permanentes que sobreviven entre sesiones
- **Vercel**: hosting con serverless functions para el chatbot
- **Excel con fórmulas dinámicas**: presupuestos que se recalculan solos

Todo esto sin un solo empleado IT. Sin departamento técnico. Sin agencia de marketing digital.

Solo un tipo con una Specialized, un Mac Mini que no duerme, y un equipo de agentes que cada día trabajan un poco mejor.

Porque cada error es un hueco en el Skill.
Y cada hueco que tapas es un error que no vuelve.

---

*¿Usas IA en tu negocio? Me encantaría saber cómo. Y si no la usas todavía... bueno, tus competidores probablemente sí.*

---

Giora Gilead Elenberg
Viajes Scibasku · CICMA 2283
Esquí · Buceo · Descubrimiento
viajesscibasku.com
