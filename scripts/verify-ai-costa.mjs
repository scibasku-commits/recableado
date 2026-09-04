import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const component = readFileSync(join(root, 'src/components/AICostaCourse.astro'), 'utf8');
const esPage = readFileSync(join(root, 'src/pages/ai-costa.astro'), 'utf8');
const enPage = readFileSync(join(root, 'src/pages/en/ai-costa.astro'), 'utf8');

function requireMatch(text, pattern, label) {
  if (!pattern.test(text)) throw new Error(`Falta ${label}`);
}

requireMatch(esPage, /AICostaCourse lang="es"/, 'ruta ES');
requireMatch(enPage, /AICostaCourse lang="en"/, 'ruta EN');
requireMatch(component, /Método SELLO[\s\S]*The SELLO method/, 'SELLO bilingüe');
requireMatch(component, /Borrador[\s\S]*Revisado[\s\S]*Terminado con evidencia/, 'estados ES');
requireMatch(component, /Draft[\s\S]*Reviewed[\s\S]*Finished with evidence/, 'estados EN');
requireMatch(component, /Usa la voz[\s\S]*Use voice/, 'módulo de voz');
requireMatch(component, /Documentos y oficina[\s\S]*Documents and office work/, 'módulo de documentos');
requireMatch(component, /Codex para trabajo real[\s\S]*Codex for real work/, 'módulo Codex');
requireMatch(component, /Skill:[\s\S]*Hook:[\s\S]*MCP:[\s\S]*Automatización:/, 'extensiones sin jerga ES');
requireMatch(component, /Skill:[\s\S]*Hook:[\s\S]*MCP:[\s\S]*Automation:/, 'extensiones sin jerga EN');
requireMatch(component, /navigator\.clipboard/, 'copiado moderno');
requireMatch(component, /document\.execCommand\('copy'\)/, 'fallback de copiado');
requireMatch(component, /localStorage/, 'persistencia local');
requireMatch(component, /progressBar/, 'barra de progreso');
requireMatch(component, /data-complete/, 'controles de progreso');
requireMatch(component, /umami-scibasku\.vercel\.app\/script\.js/, 'Umami');
requireMatch(component, /9b2bc6f2-f7a4-4099-8296-42091c2ba4bf/, 'website ID de Umami');
requireMatch(component, /ai-costa-social\.png/, 'portada social');

for (let id = 1; id <= 8; id += 1) {
  const count = (component.match(new RegExp(`id:${id}, path:`, 'g')) || []).length;
  if (count !== 2) throw new Error(`Módulo ${id}: esperado en ES y EN, encontrado ${count} veces`);
}

const forbidden = /youtube|thebigschool|BIG school|Jon Hernández|Romuald|\.pdf\b|GPT-6|chatgpt\.com\/[^'"\s<]*pricing|\b(?:Plus|Pro|Business)\s*(?:·|cost|cuesta|desde|from|€|\$)/i;
if (forbidden.test(component)) throw new Error('Material, atribución o precio prohibido en el curso');
if (/googletagmanager|_vercel\/insights/.test(component)) throw new Error('Analítica adicional no permitida');
if (/\[(?:PENDIENTE|DESTINO|TODO|TBD|INSERTAR|RELLENAR)[^\]]*\]/i.test(component)) throw new Error('Placeholder editorial');

for (const match of component.matchAll(/href=["'](https:\/\/[^"']+)["']/g)) {
  const host = new URL(match[1]).hostname;
  if (!['learn.chatgpt.com', 'developers.openai.com', 'platform.openai.com', 'recableado.blog'].includes(host)) {
    throw new Error(`Enlace externo no permitido: ${match[1]}`);
  }
}

const officialLinks = (component.match(/https:\/\/learn\.chatgpt\.com\/docs\//g) || []).length;
if (officialLinks !== 12) throw new Error(`Esperados 12 enlaces oficiales bilingües, encontrados ${officialLinks}`);

const social = await sharp(join(root, 'public/ai-costa-social.png')).metadata();
if (social.width !== 1200 || social.height !== 630 || social.format !== 'png') {
  throw new Error(`Portada social inválida: ${social.width}x${social.height} ${social.format}`);
}

console.log('AI_COSTA_OK · 2 rutas · 8 módulos ES/EN · SELLO · 16 copias · fuentes OpenAI · OG 1200x630');
