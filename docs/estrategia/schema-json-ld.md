# Schema JSON-LD para recableado.blog

> Código listo para copiar en Hugo partials | Feb 2026

---

## Instrucciones de instalación

1. Guardar como `layouts/partials/seo-schema.html`
2. Incluir en `layouts/partials/head.html`: `{{ partial "seo-schema.html" . }}`
3. Las FAQ se definen en el front matter de cada post (ver ejemplo abajo)

---

## 1. BlogPosting (para cada artículo)

```html
{{ if .IsPage }}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ .Permalink }}"
  },
  "headline": "{{ .Title }}",
  "description": "{{ if .Description }}{{ .Description }}{{ else }}{{ .Summary | plainify | truncate 160 }}{{ end }}",
  "image": [
    {{ if .Params.featured_image }}
      "{{ .Params.featured_image | absURL }}"
    {{ else }}
      "{{ site.Params.default_social_image | absURL }}"
    {{ end }}
   ],
  "datePublished": "{{ .Date.Format "2006-01-02T15:04:05-07:00" }}",
  "dateModified": "{{ .Lastmod.Format "2006-01-02T15:04:05-07:00" }}",
  "author": {
    "@type": "Person",
    "name": "Giora Gilead Elenberg",
    "url": "{{ "about/" | absURL }}",
    "jobTitle": "Empresario Senior & Explorador de IA",
    "sameAs": [
      "https://www.linkedin.com/in/giora-gilead/",
      "https://recableado.blog"
    ],
    "description": "Viajero de 72 años y empresario desde 1982, documentando la adopción de la Inteligencia Artificial desde la experiencia vivida."
  },
  "publisher": {
    "@type": "Organization",
    "name": "Recableado.blog",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ site.Params.logo | absURL }}"
    }
  },
  "keywords": [
    {{ range $index, $element := .Params.tags }}{{ if $index }},{{ end }}"{{ $element }}"{{ end }}
  ],
  "articleBody": "{{ .Content | plainify | truncate 1000 }}",
  "inLanguage": "es-ES",
  "isAccessibleForFree": true
}
</script>
{{ end }}
```

---

## 2. FAQPage (condicional, si el post tiene FAQ)

### Front matter del post (ejemplo)

```yaml
faq:
  - question: "¿Es tarde para aprender Inteligencia Artificial a los 72 años?"
    answer: "Rotundamente no. Mi experiencia demuestra que la IA actúa como un multiplicador de la sabiduría acumulada. No requiere código, sino lógica y contexto, algo que sobra a nuestra edad."
  - question: "¿Qué utilidad tiene la IA para un empresario senior?"
    answer: "Desde automatizar la redacción de correos complejos hasta planificar rutas de viaje premium. La IA elimina la fricción técnica y nos permite centrarnos en la estrategia."
  - question: "¿Cómo se compara Claude con ChatGPT para tareas creativas?"
    answer: "En mis pruebas, Claude muestra una mayor sensibilidad para el matiz narrativo y el estilo personal, mientras que ChatGPT destaca en estructuración lógica."
```

### Partial Hugo

```html
{{ if .Params.faq }}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {{ range $index, $element := .Params.faq }}
    {{ if $index }},{{ end }}
    {
      "@type": "Question",
      "name": "{{ $element.question }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ $element.answer }}"
      }
    }
    {{ end }}
  ]
}
</script>
{{ end }}
```

---

## 3. Person (para la página About)

### Condición: solo carga en la página About

```html
{{ if eq .Type "about" }}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://recableado.blog/#giora",
  "name": "Giora Gilead Elenberg",
  "alternateName": "Giora Gilead",
  "nationality": "Spanish",
  "birthDate": "1952",
  "jobTitle": "Fundador & Autor",
  "worksFor": {
    "@type": "Organization",
    "name": "Viajes Scibasku"
  },
  "url": "{{ .Permalink }}",
  "image": "{{ "images/giora-profile.jpg" | absURL }}",
  "sameAs": [
    "https://www.linkedin.com/in/giora-gilead/",
    "https://recableado.blog"
  ],
  "knowsAbout": [
    "Inteligencia Artificial para Seniors",
    "Turismo de Lujo",
    "Automatización de Negocios (No-Code)",
    "Protocolos MCP",
    "Silver Economy"
  ],
  "description": "Empresario de viajes premium desde 1982 reconvertido en explorador digital. Ayudo a la generación 'Silver' a perder el miedo a la tecnología mediante la experimentación práctica y el humor."
}
</script>
{{ end }}
```

---

## Validación

Después de implementar, verificar con:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- Google Search Console > Mejoras > Datos estructurados
