# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El lector principal es una persona de 50 a 70 años que siente curiosidad por la inteligencia artificial, pero no necesariamente sabe programar. Llega para entender una experiencia real y sacar una idea aplicable, no para leer un manual técnico ni una pieza de marketing.

## Product Purpose

Recableado es el blog personal de Giora Gilead sobre lo que descubre, construye y estropea al incorporar inteligencia artificial a su vida y a su trabajo. El lector debe poder seguir la historia, reconocer a la persona que la cuenta y llevarse algo concreto sin que se le hable como a un ingeniero.

## Positioning

La materia del blog es la experiencia vivida de un agente de viajes veterano que aprende IA sin presentarse como programador: escenas reales, errores propios, criterio humano y humor. No es un agregador de novedades ni una colección de tutoriales genéricos.

## Operating Context

- Lectura larga en móvil y escritorio.
- Publicación bilingüe en español e inglés.
- Portada para descubrir el artículo más reciente y continuar con el archivo.
- Artículos MDX con metadatos, etiquetas, fecha, tiempo de lectura, reacciones y opciones para compartir.

## Capabilities and Constraints

- El sitio usa Astro y conserva sus rutas, contenido, internacionalización y funciones actuales.
- La primera tanda es una demostración local de la portada y un artículo; no se publica ni se mezcla con el trabajo pendiente del formulario de suscripción.
- Las imágenes definitivas deben partir de material real de Giora. Hasta recibirlas, la interfaz necesita estados de imagen ausente que parezcan deliberados.
- El movimiento debe ser escaso, suave y prescindible; no hay vídeo ligado al desplazamiento, partículas ni bandas de tráiler.

## Brand Commitments

- Nombre: Recableado.
- Voz personal en primera persona, concreta, autoirónica y sin tono corporativo.
- El humor es parte esencial del blog.
- La nueva dirección aprobada es «Sala oscura»: casi negro, textura, imagen desaturada y un solo acento vivo, con ritmo de cambios de plano.
- Lo cinematográfico debe proceder de decisiones editoriales y de encuadre, no de efectos llamativos.

## Evidence on Hand

- Artículos reales en `src/content/blog/es/` y `src/content/blog/en/`.
- La biografía y el propósito editorial están expresados en `src/pages/about.astro`.
- Hay imágenes de artículo existentes en `src/assets/`; los nuevos retratos tratados están pendientes de entrega.

## Product Principles

1. La persona debe sentirse antes que la tecnología.
2. Cada recurso visual debe ayudar a leer, comprender o recordar.
3. La experiencia real y sus matices pesan más que una afirmación espectacular.
4. El artículo sigue siendo el producto: la portada abre la puerta y se aparta.

## Accessibility & Inclusion

El público incluye lectores de 50 a 70 años. El cuerpo de los artículos debe mantenerse en 18 px o más, con contraste alto, objetivos táctiles cómodos, navegación móvil sin desbordamientos y respeto por `prefers-reduced-motion`.
