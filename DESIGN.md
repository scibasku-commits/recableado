---
name: "Recableado — Sala oscura"
description: "Un sistema editorial cinematográfico, sobrio y muy legible para contar la IA desde la experiencia vivida."
colors:
  ink: "#08090a"
  stage: "#0b0c0d"
  surface: "#111315"
  surface-raised: "#17191b"
  ivory: "#fffdf7"
  body-text: "#e9e6df"
  muted-text: "#aaa69e"
  border: "#303235"
  ember: "#ff5e24"
  ember-action: "#ff7a48"
  ember-soft: "#ff8a5e"
  ember-pale: "#ffb093"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(1.125rem, 1.08rem + 0.18vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.78
    letterSpacing: "normal"
  label:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  square: "0px"
  micro: "3px"
  panel: "12px"
  pill: "999px"
spacing:
  reading-gutter: "1rem"
  content-gap: "clamp(1.25rem, 2.5vw, 2.75rem)"
  page-inline: "clamp(1.25rem, 6vw, 6rem)"
  section-block: "clamp(4.5rem, 9vw, 9rem)"
  touch-target: "44px"
components:
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.body-text}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0"
    height: "44px"
  language-toggle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.body-text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.2em 0.7em"
    height: "44px"
  story-action:
    backgroundColor: "transparent"
    textColor: "{colors.ember-action}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0"
    height: "44px"
  story-card:
    backgroundColor: "transparent"
    textColor: "{colors.body-text}"
    rounded: "{rounded.square}"
    padding: "1rem 0 0"
  article-tag:
    backgroundColor: "rgba(8, 9, 10, 0.5)"
    textColor: "{colors.ember-pale}"
    typography: "{typography.label}"
    rounded: "{rounded.micro}"
    padding: "0.18rem 0.55rem"
  reaction-button:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5em 1em"
  reaction-button-active:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5em 1em"
---

# Design System: Recableado — Sala oscura

## Overview

**Creative North Star: "Sala oscura"**

Recableado se presenta como una sala de montaje editorial: negro tinta, textura mínima y fotografías reales tratadas como fotogramas casi monocromos. El marfil sostiene la lectura y una única brasa naranja señala lo que importa sin convertir el blog en un espectáculo tecnológico.

La composición crea los cambios de plano con escala, encuadre, espacio y cortes limpios. El movimiento es excepcional y prescindible; la voz personal, el humor y el texto largo siguen siendo el producto.

**Key Characteristics:**

- Ink-black surfaces with restrained texture and no decorative spectacle.
- Near-monochrome real imagery framed like selected editorial stills.
- Ivory long-form type at 18 px or larger.
- Ember orange as the sole chromatic accent.
- Scene-cut rhythm created by composition, spacing and rules rather than effects.

## Colors

La paleta trabaja como una proyección en penumbra: negros con ligeros cambios de superficie, texto marfil de alto contraste y una sola familia naranja para atención y estado.

### Primary

- **Naranja brasa:** acción, foco, líneas de corte y estados activos; su rareza conserva su autoridad.
- **Brasa de acción:** enlaces editoriales y contornos de foco sobre fondos oscuros.
- **Brasa suave y pálida:** metadatos, etiquetas y numeración de escenas, nunca como relleno decorativo dominante.

### Neutral

- **Negro tinta:** fondo continuo de la experiencia.
- **Escenario y superficies:** separan secciones y utilidades mediante cambios tonales mínimos, no mediante tarjetas claras.
- **Marfil y texto cálido:** títulos y lectura prolongada con contraste alto.
- **Texto apagado y borde carbón:** información secundaria, divisores y estructura silenciosa.

### Named Rules

**The One Ember Rule.** Ember orange is the only chromatic accent; keep imagery nearly monochrome and never introduce a competing hue.

## Typography

**Display Font:** Bricolage Grotesque (with Arial and sans-serif fallback)  
**Body Font:** Lora (with Georgia and serif fallback)

**Character:** Bricolage Grotesque aporta títulos compactos, humanos y directos; Lora mantiene el relato cálido y descansado. La tensión entre ambas distingue la voz editorial de una interfaz de software.

### Hierarchy

- **Display:** títulos del primer fotograma, muy grandes, compactos y equilibrados; anchura habitual de 12–13 caracteres.
- **Headline:** comienzos de escena y manifiestos, con ritmo cerrado y espacio generoso antes de cada cambio.
- **Title:** titulares de la fila editorial y piezas subordinadas.
- **Body:** lectura larga dentro de una columna de 70–74ch, nunca por debajo de 18 px y con interlineado amplio.
- **Label:** fechas, tiempos de lectura, navegación y etiquetas; mayúsculas solo en metadatos breves, con tracking moderado.

### Named Rules

**The Reading First Rule.** Article body text never drops below 18 px, keeps a generous 1.78 line height and stays within about 70–74 characters.

## Layout

La portada usa un fotograma inicial a escala de viewport con el título abajo a la izquierda, seguido por una fila editorial subordinada y secciones separadas por grandes pausas. Los anchos máximos observados son 1440px para encuadres principales, 1320px para composición editorial y 74ch para lectura.

En escritorio, las historias recientes forman tres columnas. A 820px o menos pasan a una tira horizontal con `scroll-snap`, el sombreado del hero se vuelve vertical y los bloques de manifiesto se apilan. A 520px se reducen los márgenes, nunca el cuerpo del artículo. Los objetivos táctiles conservan al menos 44px.

## Elevation & Depth

El contenido editorial es plano: profundidad por exposición de imagen, gradientes de sombra, textura, bordes finos y cambios tonales. Solo las utilidades que flotan sobre el texto y el panel de conversación reciben sombra para explicar su superposición.

### Shadow Vocabulary

- **Panel profundo:** sombra amplia y difusa para el panel de conversación sobre el escenario.
- **Utilidad flotante:** sombra algo más compacta para compartir o reaccionar sin confundir la herramienta con el artículo.

### Named Rules

**The Flat Stage Rule.** Content stays flat; elevation is reserved for floating tools and the chat panel, where it clarifies overlap.

## Shapes

Los marcos editoriales, imágenes, tarjetas, citas y cortes conservan esquinas cuadradas. Las etiquetas de artículo admiten un micro-radio; las cápsulas pertenecen únicamente a controles compactos y el radio de 12px a paneles auxiliares flotantes. Los bordes son finos y estructurales.

## Components

### Opening Frame

La imagen ocupa el viewport, se desatura casi por completo y recibe una doble sombra direccional. Metadatos, título y acción se apoyan abajo a la izquierda. En móvil el recorte se desplaza para proteger al sujeto y el degradado se concentra en la base.

### Story Cards

No son cajas: una línea superior, una imagen 4:3 cuadrada y texto sobre el escenario. El hover solo devuelve una cantidad contenida de luz y color a la imagen.

### Scene Cuts and Quotes

Cada `h2` se numera como una escena. Los separadores cruzan la columna de lectura y las citas se ensanchan como una pausa editorial, con borde de brasa y fondo tonal, sin comillas ornamentales.

### Navigation and Controls

La navegación permanece tipográfica y con objetivos táctiles de 44px. El selector de idioma y las reacciones usan cápsulas; los enlaces editoriales usan texto y flecha, no botones rellenos. Hover y foco cambian a brasa, y `:focus-visible` conserva un contorno de 2px con 5px de separación.

### Missing-image Frame

Cuando falta una foto real, se usa un marco tipográfico oscuro con resplandor de brasa y línea inferior. Debe parecer un estado editorial deliberado y permitir sustituir la imagen de forma mecánica.

El único reveal de entrada dura 680ms con una curva suave y solo existe cuando el sistema permite movimiento. `prefers-reduced-motion: reduce` neutraliza animaciones, transiciones y scroll suave.

## Do's and Don'ts

### Do:

- **Do** protect long-form reading with warm high-contrast text, an 18px minimum and a 70–74ch measure.
- **Do** start from verified photographs of Giora; AI treatment may stylize the frame, but identity and authorship must stay anchored in the real source.
- **Do** create scene changes with scale, whitespace, hairlines and composition.
- **Do** preserve 44px touch targets, visible focus and a complete reduced-motion path.

### Don't:

- **Don't** introduce a second accent color, bright card palette or blue software-dashboard language.
- **Don't** round editorial frames or turn the archive into a generic grid of floating cards.
- **Don't** fabricate a documentary-looking hotel, room, route, device or workspace that the reader may compare with reality.
- **Don't** add scroll-tied video, particles, trailer bands or decorative motion that competes with reading.
