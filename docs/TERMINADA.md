# Contrato de terminación — recableado.blog

> Web: **recableado.blog** · repo `~/projects/recableado-web` · proyecto Vercel `recableado`
> (`prj_Pyt8jcExIxcAdsRQDQ66LSxNCcti`, organización `team_h4QaYuajKvslO536llI0E9Kw`, leído de
> `.vercel/project.json` el 4-sep-2026). Stack: Astro 5 con adaptador Vercel. Entrega por
> `vercel --prod --yes` desde el árbol candidato enlazado al proyecto existente.

## Alcance actual

- Mantener las portadas existentes en español e inglés.
- Publicar el taller AI Costa en `/ai-costa/` y `/en/ai-costa/`, con tres bloques, fuentes,
  precios fechados, aviso de Sites, FAQ, notas ocultables y ocho ejemplos copiables entre ambos idiomas.
- Servir una portada social 1200×630, con fuentes incrustadas, para WhatsApp y Facebook.
- Medir las dos rutas con el Umami ya usado por Recableado, sin añadir otra analítica a estas páginas.
- Acreditar a Jon Hernández y enlazar recableado.blog, ricordo.blog y hablame.blog como proyectos
  construidos con Claude y Codex.
- No incluir ni distribuir los PDF, transcripciones o párrafos literales del curso de origen.

## Rutas críticas

- `/` y `/en/` — portadas de Recableado, que no deben perderse ni devolver error tras el despliegue.
- `/ai-costa/` — taller en español.
- `/en/ai-costa/` — taller en inglés.
- `/ai-costa-social.png` — portada social de 1200×630 enlazada por Open Graph y Twitter.

## Jornadas críticas

- `J1-ai-costa-bilingue` — abrir cada ruta, comprobar el idioma y recorrer sus tres bloques; los
  enlaces ES/EN llevan a la otra ruta.
- `J2-copiar-notas-y-faq` — copiar los cuatro ejemplos visibles de cada idioma y compararlos byte a
  byte con su prompt; apagar y encender notas; desplegar una FAQ.
- `J3-movil-sin-desbordes` — en 390×844 y 360×800, ningún bloque desborda y todos los controles
  visibles miden al menos 44×44 píxeles.
- `J4-portada-social` — las dos rutas publican título, descripción e imagen absoluta; el PNG se abre
  sin texto cortado ni glifos ausentes.
- `J5-umami-sin-analytics-adicional` — cada ruta carga una vez el script de Umami y el identificador
  de Recableado; no carga Google Analytics ni Vercel Analytics.

## Criterios de aceptación

- Alcance completo, sin `[PENDIENTE]`, `TODO` ni contenido provisional en las páginas públicas.
- `node scripts/verify-ai-costa.mjs` y `npm run build` verdes para el mismo árbol.
- QA local con Ego Lite en escritorio y emulación móvil real, más apertura visual de las páginas y del PNG.
- Revisión independiente aprobada para el candidato exacto.
- Publicación solo con una autorización explícita y vigente de Giora ligada al run activo.
- Producción devuelve HTTP 200 en las cinco rutas, sirve la huella textual nueva y contiene Umami.
- Certificado operativo fuera del árbol publicado.

## Límites y acciones con coste

- El taller no envía formularios, correos, pagos ni datos personales.
- Los enlaces externos solo se abren por acción del visitante.
- No se crea un proyecto Vercel: se reutiliza exclusivamente `recableado`.
- La publicación se ejecuta solo después de la compuerta `pre-deploy` del método SELLO.
