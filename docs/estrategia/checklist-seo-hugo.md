# Checklist Técnico SEO para Hugo — recableado.blog

> Generado desde NotebookLM (148 fuentes) | Feb 2026

---

## 1. Meta Tags Obligatorios

| Item | Qué hacer | Dónde en Hugo | Prioridad |
|------|-----------|---------------|-----------|
| **Title Tag Dinámico** | Home: `{{ .Site.Title }}` / Posts: `{{ .Title }} | {{ .Site.Title }}` | `layouts/partials/head.html` con condicional `{{ if .IsHome }}` | CRITICA |
| **Meta Description** | Fallback: front matter → descripción global del sitio | `{{ .Params.description | default .Site.Params.description }}` | CRITICA |
| **Canonical URL** | `<link rel="canonical" href="{{ .Permalink }}" />` | `layouts/partials/head.html` | CRITICA |
| **Viewport** | `<meta name="viewport" content="width=device-width, initial-scale=1">` | `layouts/partials/head.html` | CRITICA |
| **Charset** | `<meta charset="utf-8">` | `layouts/partials/head.html` | CRITICA |
| **Idioma** | `<html lang="{{ .Language.Lang }}">` | `layouts/_default/baseof.html` | ALTA |

## 2. Schema Markup (Datos Estructurados)

| Item | Qué hacer | Dónde en Hugo | Prioridad |
|------|-----------|---------------|-----------|
| **BlogPosting** | JSON-LD dinámico con headline, datePublished, author, image | `layouts/partials/schema.html` → incluir en head.html | ALTA |
| **Person (Autor)** | name, sameAs (LinkedIn/Twitter), jobTitle, description | `config.toml` params o `data/authors.yaml` → inyectar en BlogPosting | CRITICA |
| **FAQPage** | Si hay FAQ en el post, generar esquema desde front matter | Shortcode personalizado que genera HTML + JSON-LD | ALTA |
| **BreadcrumbList** | Jerarquía de navegación del sitio | `layouts/partials/breadcrumbs.html` | MEDIA |

## 3. Archivos de Control y Rastreo

| Item | Qué hacer | Dónde en Hugo | Prioridad |
|------|-----------|---------------|-----------|
| **Sitemap.xml** | Hugo lo genera nativo. Verificar que no esté deshabilitado | `config.toml`: NO tener `disableKinds = ["sitemap"]` | CRITICA |
| **Robots.txt** | Habilitar generación dinámica | `config.toml`: `enableRobotsTXT = true` o crear `layouts/robots.txt` | ALTA |
| **llms.txt** | Markdown en raíz para LLMs (GPTBot, ClaudeBot) | `static/llms.txt` → accesible en `recableado.blog/llms.txt` | ALTA |

## 4. Open Graph y Twitter Cards

| Item | Qué hacer | Dónde en Hugo | Prioridad |
|------|-----------|---------------|-----------|
| **og:title** | Título dinámico del post | `layouts/partials/head.html` | ALTA |
| **og:description** | Descripción con fallback | `layouts/partials/head.html` | ALTA |
| **og:image** | Imagen destacada del post o default del sitio | Condicional en head.html | ALTA |
| **og:type** | `article` para posts, `website` para home | `layouts/partials/head.html` | ALTA |
| **og:url** | `{{ .Permalink }}` | `layouts/partials/head.html` | ALTA |
| **twitter:card** | `summary_large_image` | `layouts/partials/head.html` | MEDIA |
| **twitter:creator** | Usuario desde config.toml o front matter | `layouts/partials/head.html` | MEDIA |

## 5. Core Web Vitals

| Item | Qué hacer | Dónde en Hugo | Prioridad |
|------|-----------|---------------|-----------|
| **LCP (Carga)** | Hugo Image Processing → WebP + `rel="preload"` para hero | `{{ $image.Resize "800x webp" }}` en templates + preload en head | CRITICA |
| **CLS (Estabilidad)** | Atributos `width` y `height` explícitos en TODAS las imágenes | Shortcodes de imagen: `layouts/shortcodes/img.html` | CRITICA |
| **INP (Interactividad)** | Minimizar JS bloqueante, usar `defer`, Asset Bundling | `config.toml`: `minify = true` + scripts en footer.html | ALTA |
| **Preconnect** | `<link rel="preconnect" href="https://fonts.googleapis.com">` | `layouts/partials/head.html` | MEDIA |

## 6. Estrategia de Contenido AEO

| Item | Qué hacer | Dónde en Hugo | Prioridad |
|------|-----------|---------------|-----------|
| **Estructura modular** | H2/H3 como preguntas, bloques de 40-60 palabras | Archivos `content/posts/*.md` | ALTA |
| **Fecha de actualización** | Mostrar `lastmod` visible. Automatizar con Git | `enableGitInfo = true` + `{{ .Lastmod.Format "2 Jan 2006" }}` en single.html | ALTA |
| **Caja de autor** | Bio + foto al final de cada post | `layouts/partials/author-box.html` → incluir en single.html | ALTA |

## 7. Configuración Base hugo.toml

```toml
baseURL = "https://recableado.blog/"
languageCode = "es-es"
title = "Recableado — IA desde la experiencia"
enableGitInfo = true
enableRobotsTXT = true

[minify]
  minifyOutput = true

[params]
  description = "Blog personal de Giora Gilead Elenberg: un empresario de 72 años explorando la Inteligencia Artificial desde la experiencia vital."
  author = "Giora Gilead Elenberg"
  images = ["images/recableado-og-default.jpg"]
  logo = "images/recableado-logo.png"
  default_social_image = "images/recableado-og-default.jpg"
```
