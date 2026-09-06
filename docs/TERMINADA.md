# Contrato de terminación — recableado.blog

> Web: **recableado.blog** · repo `~/projects/recableado-web` · proyecto Vercel `recableado`
> (`prj_Pyt8jcExIxcAdsRQDQ66LSxNCcti`, organización `team_h4QaYuajKvslO536llI0E9Kw`, leído de
> `.vercel/project.json` el 4-sep-2026). Stack: Astro 5 con adaptador Vercel. Entrega por
> `vercel --prod --yes` desde el árbol candidato enlazado al proyecto existente.

## Alcance actual

- Mantener las portadas existentes en español e inglés.
- Integrar una pestaña `Aprende` y un hub bilingüe en `/aprender/` y `/en/learn/` que reúna AI Costa,
  el Cheat Sheet y los ejercicios existentes sin romper sus URLs.
- Publicar el curso autónomo AI Costa en `/ai-costa/` y `/en/ai-costa/`, con ocho episodios:
  empezar, voz, encargos, oficina, creación, Codex, flujos reutilizables y Método SELLO.
- Ofrecer cada explicación, ejercicio y control en español e inglés mediante las dos rutas enlazadas.
- Incluir un ejercicio original copiable y una prueba de finalización por episodio, navegación entre
  episodios, progreso guardado localmente y selector de tema.
- En el episodio de voz, distinguir la conversación por voz de ChatGPT del dictado local con Háblame,
  explicar cuándo el texto sí sale del equipo y enlazar la historia publicada y la web del producto.
- Enlazar como profundización únicamente documentación oficial actual de OpenAI; no enlazar ni
  distribuir PDF, vídeos, prompts, certificados o materiales de terceros.
- Servir una portada social 1200×630 coherente con el curso, con fuentes incrustadas.
- Medir las dos rutas con el Umami ya usado por Recableado, sin añadir otra analítica.

## Rutas críticas

- `/` y `/en/` — portadas de Recableado, que no deben perderse ni devolver error tras el despliegue.
- `/aprender/` y `/en/learn/` — hub de aprendizaje y sus tres destinos.
- `/ai-costa/` — taller en español.
- `/en/ai-costa/` — taller en inglés.
- `/ai-costa-social.png` — portada social de 1200×630 enlazada por Open Graph y Twitter.

## Jornadas críticas

- `J0-aprende-con-gpt` — la navegación abre el hub correcto en cada idioma; desde él funcionan AI Costa,
  el Cheat Sheet y los ejercicios; las portadas también enlazan al hub.
- `J1-ai-costa-bilingue` — abrir cada ruta, comprobar el idioma y recorrer sus ocho episodios; los
  enlaces ES/EN llevan a la otra ruta.
- `J2-copiar-y-progresar` — copiar los ocho ejercicios de cada idioma y compararlos byte a byte con
  su texto; completar y desmarcar episodios; navegar adelante y atrás; cambiar el tema.
- `J3-movil-sin-desbordes` — en 390×844 y 360×800, ningún bloque desborda y todos los controles
  visibles miden al menos 44×44 píxeles.
- `J4-portada-social` — las dos rutas publican título, descripción e imagen absoluta; el PNG se abre
  sin texto cortado ni glifos ausentes.
- `J5-umami-sin-analytics-adicional` — cada ruta carga una vez el script de Umami y el identificador
  de Recableado; no carga Google Analytics ni Vercel Analytics.

## Criterios de aceptación

- Alcance completo, sin `[PENDIENTE]`, `TODO` ni contenido provisional en las páginas públicas.
- `node scripts/verify-ai-costa.mjs` y `npm run build` verdes para el mismo árbol.
- Todos los enlaces de profundización devuelven respuesta correcta desde `learn.chatgpt.com`.
- QA local con Ego Lite en escritorio y emulación móvil real, más apertura visual de las páginas y del PNG.
- Revisión independiente aprobada para el candidato exacto.
- Publicación solo con una autorización explícita y vigente de Giora ligada al run activo.
- Producción devuelve HTTP 200 en las siete rutas, sirve la huella textual nueva y contiene Umami.
- Certificado operativo fuera del árbol publicado.

## Límites y acciones con coste

- El taller no envía formularios, correos, pagos ni datos personales.
- Los enlaces externos solo se abren por acción del visitante.
- No se crea un proyecto Vercel: se reutiliza exclusivamente `recableado`.
- La publicación se ejecuta solo después de la compuerta `pre-deploy` del método SELLO.

## Intervención editorial 039 — 6-sep-2026

El alcance duradero de aprendizaje anterior se conserva. Esta intervención añade el artículo 039
en español e inglés, visible en ambos índices, con enlaces de idioma recíprocos y portadas sociales
en cada idioma. No modifica el curso, su progreso ni los ejercicios. Los recorridos J0–J5 anteriores
siguen siendo criterios del curso cuando este cambie; para este cambio editorial, la regresión se
cubre mediante su verificación completa y comprobación de sus rutas existentes.

### Rutas añadidas

- `/blog/`
- `/en/blog/`
- `/blog/039-mi-ia-clasifico-cliente-como-ruido/`
- `/en/blog/039-my-ai-labelled-a-customer-as-noise/`
- `/og/039-mi-ia-clasifico-cliente-como-ruido.png`
- `/og/039-my-ai-labelled-a-customer-as-noise.png`

### Jornadas de esta intervención

- `J6-blog039-bilingue`: abrir el artículo completo en cada idioma desde su índice; comprobar
  correspondencia ES ↔ EN, idioma del cuerpo y ausencia de información personal del visitante.
- `J7-blog039-lectura-y-social`: lectura visible en escritorio y móvil de 390 píxeles, sin
  desbordamiento horizontal; abrir las dos imágenes OG, comprobar texto y metadatos de idioma.
- `J8-regresion-aprende`: `node scripts/verify-ai-costa.mjs` completo en verde y respuesta correcta
  de las rutas existentes de portada, aprendizaje y curso.

### Aceptación editorial

- Mantener la distinción probada: el resumen reconoció la consulta, pero la regla la clasificó
  como ruido. No afirmar que se perdió una venta ni que se disponía del contacto del visitante.
- Build completo verde y QA local y público ligados al mismo candidato.
- Publicar ambas traducciones juntas en el proyecto Vercel existente `recableado`.
- Registrar el permiso explícito de Giora con su evento y hora originales. Si el motor no admite
  la secuencia temporal de ese permiso, conservar el bloqueo y no declarar certificado SELLO.
