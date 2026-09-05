---
name: Recableado
description: El cuaderno de campo digital para aprender inteligencia artificial desde el trabajo vivido.
colors:
  navy: "#0a1628"
  deep-blue: "#0d2847"
  field-gold: "#d4af37"
  signal-turquoise: "#1fb4d1"
  white: "#ffffff"
  muted-steel: "#b8c5d6"
  paper: "#f8f9fa"
  ink: "#2d3748"
  line: "#e2e8f0"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "clamp(3.4rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  hairline: "2px"
  compact: "8px"
  control: "12px"
  feature: "16px"
  pill: "999px"
spacing:
  xxs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-turquoise}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
    height: "50px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
    height: "50px"
  navigation-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "12px 0"
    height: "44px"
  language-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.2em 0.6em"
    height: "44px"
  course-door:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.feature}"
    padding: "clamp(2rem, 5vw, 4rem)"
---

# Design System: Recableado

## Overview

**Creative North Star: "El cuaderno de campo digital"**

Recableado se siente como un cuaderno de campo cuidado, abierto después de una jornada real: humano, preciso y editorial, con observaciones concretas en vez de una interfaz tecnológica genérica. La lectura manda; la tipografía de display ordena, las líneas finas clasifican y los acentos aparecen para orientar, no para decorar.

El sistema alterna papel luminoso y navy profundo para separar lectura, orientación y momentos de acción. Los contenedores permanecen limpios y legibles; el dorado dibuja estructura y el turquesa señala progreso, foco o acción. Las composiciones más expresivas del Learning Hub y AI Costa son expresiones de este mundo, no plantillas obligatorias para cada página.

**Key Characteristics:**

- Jerarquía editorial grande y legible.
- Contraste entre papel de lectura y superficies navy.
- Líneas doradas precisas y acentos turquesa funcionales.
- Espacio generoso, bordes limpios y sombras neutrales.
- Evidencia y orientación visual antes que ornamentación.

## Colors

La paleta combina un fondo nocturno sobrio con papel claro; el dorado estructura y el turquesa comunica acción, progreso y foco.

### Primary

- **Navy de cuaderno** (`#0a1628`): fondo oscuro principal y base de puertas o experiencias inmersivas.
- **Azul profundo** (`#0d2847`): segunda capa del degradado oscuro, superficies anidadas y estados seleccionados.

### Secondary

- **Dorado de anotación** (`#d4af37`): líneas, bordes, marcas y etiquetas de jerarquía; nunca sustituye al texto de lectura.

### Tertiary

- **Turquesa de señal** (`#1fb4d1`): llamadas a la acción, progreso, selección y foco visible.

### Neutral

- **Blanco nítido** (`#ffffff`): títulos y texto de máximo contraste sobre navy.
- **Acero apagado** (`#b8c5d6`): texto secundario sobre superficies oscuras.
- **Papel limpio** (`#f8f9fa`): superficies claras de apoyo y lectura estructurada.
- **Tinta editorial** (`#2d3748`): texto principal sobre fondos claros.
- **Línea fría** (`#e2e8f0`): divisores y bordes discretos sobre papel.

**The Two-Accent Rule.** El dorado construye la estructura; el turquesa pide atención o acción. No intercambies sus funciones.

**The Paper and Night Rule.** Toda superficie debe pertenecer con claridad al mundo papel o al mundo navy; no introduzcas grises decorativos intermedios sin una función comprobable.

## Typography

**Display Font:** Bricolage Grotesque (con `sans-serif`)
**Body Font:** Lora (con Georgia y `serif`)

**Character:** Bricolage Grotesque aporta una voz franca, contemporánea y reconocible a títulos, navegación y acciones. Lora sostiene la lectura larga con un ritmo editorial familiar para un público adulto.

### Hierarchy

- **Display** (700, `clamp(3.4rem, 8vw, 6rem)`, 0.94): títulos de entrada con máximo de unas 11–13 letras por línea visual.
- **Headline** (700, `clamp(2rem, 4vw, 3.5rem)`, 1): títulos de sección y cierres importantes.
- **Title** (700, `clamp(1.25rem, 2.4vw, 1.65rem)`, 1.2): títulos de recursos, tarjetas y bloques.
- **Body** (400, `18px`, 1.8): lectura editorial; mantener normalmente entre 57 y 68 caracteres por línea y bajar a `16–17px` en móvil cuando la superficie lo necesite.
- **Label** (700, `0.9rem`, 1.3, `0.02em`): navegación, acciones e índices breves.

**The Reading Voice Rule.** Los párrafos hablan en serif; la sans serif organiza, titula y acciona. No compongas textos largos en Bricolage Grotesque.

**The Tight Display Rule.** Los grandes titulares usan interlineado compacto y tracking negativo; el cuerpo conserva aire y nunca hereda esa compresión.

## Layout

El cuerpo editorial usa una columna centrada de hasta `680px`. Las puertas y hubs pueden ensancharse hasta `1040–1180px` cuando la jerarquía necesita dos columnas, siempre con relleno fluido y una sola columna clara al estrecharse la pantalla. El ritmo crece en múltiplos observados de `8px`, con separaciones de sección fluidas mediante `clamp()`.

La respuesta móvil ocurre alrededor de `720–780px`: rejillas de dos columnas pasan a una, los paneles laterales dejan de ser pegajosos y las acciones se apilan cuando no caben. Los objetivos interactivos conservan al menos `44px` de alto; el contenido no depende del hover.

**The Reading Column Rule.** El texto corrido no se estira para llenar una superficie ancha; el ancho extra pertenece a jerarquía, navegación o evidencia lateral.

**The Collapse with Meaning Rule.** En móvil se conserva el orden narrativo: promesa, acción principal, apoyo y prueba.

## Elevation & Depth

El sistema es plano por defecto y obtiene profundidad mediante contraste tonal, líneas finas y separación. Las sombras son neutrales y se reservan para una puerta destacada o un estado elevado; no se usan para convertir cada recurso en una tarjeta flotante.

### Shadow Vocabulary

- **Elevación de puerta** (`0 18px 44px rgba(0, 0, 0, 0.20)`): superficie principal que invita a entrar en una experiencia.
- **Elevación de puerta activa** (`0 24px 54px rgba(0, 0, 0, 0.28)`): respuesta de hover junto a un desplazamiento máximo de `-3px`.

**The Flat-by-Default Rule.** Si una línea, un cambio tonal o el espacio bastan para separar contenido, no añadas sombra.

## Shapes

Las formas son rectangulares y precisas, con curvas moderadas: `8px` para elementos compactos, `12px` para controles y `16px` para contenedores destacados. El radio píldora (`999px`) queda reservado a badges y selectores breves. Las líneas de `1px` organizan; un borde izquierdo de `3–4px` puede marcar una nota editorial.

**The Measured Corner Rule.** El radio responde a la escala y la importancia del objeto; evita acumular radios distintos en un mismo bloque.

## Components

### Buttons

- **Shape:** controles cómodos, moderadamente curvos (`12–14px`) y con altura mínima de `48–50px`.
- **Primary:** turquesa de señal sobre navy, tipografía Bricolage en negrita y relleno de `12px 18px`.
- **Hover / Focus:** cambio de elevación o contraste sin perder el color del texto; foco visible de `3px` con separación de `3–4px`.
- **Secondary:** transparente con borde turquesa o dorado; conserva el mismo tamaño y jerarquía tipográfica.

### Chips

- **Style:** píldora compacta con tipografía Bricolage, borde fino y fondo del contexto.
- **State:** el cambio de borde o fondo comunica hover/selección; nunca solo el color del texto.

### Cards / Containers

- **Corner Style:** `16px` en contenedores protagonistas y `8–12px` en bloques de apoyo.
- **Background:** papel limpio para lectura y navy/azul profundo para puertas o experiencias concentradas.
- **Shadow Strategy:** plano por defecto; usar la elevación de puerta solo para el elemento principal.
- **Border:** líneas frías sobre papel y doradas sobre navy.
- **Internal Padding:** `24–48px`, fluido en contenedores protagonistas.

### Navigation

La navegación compartida usa Bricolage Grotesque, enlaces de al menos `44px` de alto y estado activo subrayado. En fondos claros emplea tinta editorial; en fondos oscuros, blanco o acero con dorado/turquesa para el estado. El selector de idioma es una píldora compacta y claramente enfocada.

### Course Door

La puerta de curso combina el degradado navy, borde dorado, título blanco, apoyo en acero y acción turquesa. Puede separar una cifra o prueba en una segunda columna, pero ese reparto es propio de una puerta protagonista y no debe convertirse en la cuadrícula estándar de todo el sitio.

### Resource Rows

Los recursos secundarios se presentan como filas editoriales con índice, título, explicación y acción. Se separan con líneas en vez de cajas; en móvil la acción cae debajo del texto sin alterar el orden de lectura.

## Do's and Don'ts

### Do:

- **Do** usa Bricolage Grotesque para jerarquía y Lora/serif para lectura sostenida.
- **Do** conserva el reparto semántico: dorado para estructura, turquesa para acción y foco.
- **Do** construye primero con espacio, línea y contraste tonal; añade sombra solo si expresa una elevación real.
- **Do** conserva foco visible, objetivos de al menos `44px` y una secuencia comprensible sin hover.

### Don't:

- **Don't** conviertas todas las opciones en tarjetas iguales; la jerarquía editorial debe mostrar qué es principal y qué es apoyo.
- **Don't** introduzcas colores fuera de la paleta canónica en superficies nuevas; los valores crema y naranja de plantillas antiguas son legado, no tokens a extender.
- **Don't** uses Bricolage Grotesque para párrafos largos ni comprimas el interlineado de lectura.
- **Don't** eleves patrones exclusivos de AI Costa o del Learning Hub —tema, contador, pestañas o reparto de columnas— a reglas de todas las páginas.
