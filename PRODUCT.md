# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personas adultas, especialmente mayores de 50 años, que sienten curiosidad por la inteligencia artificial pero no quieren aprenderla mediante jerga técnica. Llegan buscando ejemplos reales, instrucciones comprensibles y una forma segura de empezar.

## Product Purpose

Recableado cuenta el aprendizaje real de Giora y lo convierte en historias, pruebas y recursos prácticos. La sección Aprende permite pasar de leer experiencias a practicar con ChatGPT y otras herramientas de IA.

## Positioning

El aprendizaje parte de trabajo vivido y resultados comprobables: artículos que cuentan decisiones y errores, ejercicios reales y un curso que termina cada episodio con una acción y una prueba visible.

## Operating Context

El sitio es bilingüe en español e inglés y está construido con Astro. La entrada principal de aprendizaje es `/aprender/` en español y `/en/learn/` en inglés. Aprende reúne el curso AI Costa, el Cheat Sheet de Claude Code y los ejercicios del curso DOMINA ChatGPT sin sustituir sus rutas actuales.

## Capabilities and Constraints

- AI Costa contiene ocho episodios autónomos, progreso guardado en el navegador, ejercicios copiables y enlaces de profundización.
- En el episodio de voz se diferencia la conversación en ChatGPT del dictado local con Háblame: el audio del dictado puede permanecer en el ordenador, pero cualquier texto enviado después a ChatGPT sí sale del equipo.
- No se publican cambios ni se realizan acciones externas sin autorización expresa de Giora.
- Las afirmaciones sobre Háblame deben verificarse en su web vigente y en el artículo que documenta cómo se construyó.

## Brand Commitments

Voz directa, autobiográfica y comprensible, con escenas reales, humor cuando corresponda y cero datos inventados. El diseño debe respetar la identidad existente de Recableado y la paleta canónica de los entregables de Scibasku.

## Evidence on Hand

- `src/content/blog/es/033-hablame-mi-app-de-dictado.mdx` y su traducción inglesa documentan el origen de Háblame, la base abierta Handy y el trabajo de decisión, planificación y revisión con IA.
- `src/pages/ejercicios.astro` y `src/pages/en/exercises.astro` contienen las pruebas del aprendizaje previo.
- `src/pages/cheatsheet.astro` y `src/pages/en/cheatsheet.astro` contienen la guía de consulta rápida.

## Product Principles

- Primero una situación real; después la herramienta.
- Cada episodio termina en una acción verificable.
- Explicar los límites con la misma claridad que las posibilidades.
- Reunir los recursos sin borrar su identidad ni romper sus enlaces actuales.

## Accessibility & Inclusion

La experiencia debe funcionar con teclado, conservar objetivos táctiles cómodos, mantener lectura clara y responder correctamente en móvil y escritorio.
