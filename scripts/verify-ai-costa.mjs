import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = new URL('../', import.meta.url).pathname;
const files = {
  es: join(root, 'src/pages/ai-costa.astro'),
  en: join(root, 'src/pages/en/ai-costa.astro'),
};
const pages = Object.fromEntries(Object.entries(files).map(([lang, file]) => [lang, readFileSync(file, 'utf8')]));

function requireMatch(text, pattern, label) {
  if (!pattern.test(text)) throw new Error(`Falta ${label}`);
}

for (const [lang, text] of Object.entries(pages)) {
  requireMatch(text, new RegExp(`<html lang="${lang}"`), `html lang=${lang}`);
  requireMatch(text, /data-go="1"[\s\S]*data-go="2"[\s\S]*data-go="3"/, 'los tres bloques');
  requireMatch(text, /umami-scibasku\.vercel\.app\/script\.js/, 'Umami');
  requireMatch(text, /9b2bc6f2-f7a4-4099-8296-42091c2ba4bf/, 'website ID de Umami');
  requireMatch(text, /ai-costa-social\.png/, 'portada social');
  requireMatch(text, /Jon Hernández/, 'crédito a Jon Hernández');
  requireMatch(text, /recableado\.blog[\s\S]*ricordo\.blog[\s\S]*hablame\.blog/, 'firma de los tres proyectos');
  requireMatch(text, /Claude y Codex[\s\S]*Claude and Codex/, 'firma Claude y Codex');
  requireMatch(text, /@media/, 'media queries inline');
  requireMatch(text, /navigator\.clipboard[\s\S]*document\.execCommand\('copy'\)/, 'copiado con fallback');
  requireMatch(text, /class="wrap lang-(?:es|en) ses-1 hide-notes" id="root"/, 'notas ocultas en el HTML inicial');
  requireMatch(text, /id="notesToggle" aria-pressed="false"/, 'estado accesible inicial de notas');
  requireMatch(text, /var state=\{ses:'1',notes:false\}/, 'notas ocultas para visitantes nuevos');
  requireMatch(text, /\.note b\{[^}]*color:var\(--ink-3\)/, 'contraste de la etiqueta de notas');
  requireMatch(text, /\.copy\.err\{[^}]*color:var\(--ink-3\)/, 'contraste del error de copia');
  if (/googletagmanager|_vercel\/insights/.test(text)) throw new Error(`${lang}: analítica adicional no permitida`);
  if (/Romuald|BIG school/.test(text)) throw new Error(`${lang}: crédito no autorizado`);
  if (/\[(?:PENDIENTE|DESTINO|TODO|TBD|INSERTAR|RELLENAR)[^\]]*\]/i.test(text)) throw new Error(`${lang}: placeholder editorial`);
  if ((text.match(/class="copy"/g) || []).length !== 8) throw new Error(`${lang}: deben existir ocho botones de copia en el HTML bilingüe`);
}

requireMatch(pages.es, /canonical" href="https:\/\/recableado\.blog\/ai-costa\/"/, 'canonical ES');
requireMatch(pages.en, /canonical" href="https:\/\/recableado\.blog\/en\/ai-costa\/"/, 'canonical EN');

const social = await sharp(join(root, 'public/ai-costa-social.png')).metadata();
if (social.width !== 1200 || social.height !== 630 || social.format !== 'png') {
  throw new Error(`Portada social inválida: ${social.width}x${social.height} ${social.format}`);
}

console.log('AI_COSTA_OK · 2 rutas · 3 bloques · 8 copias · Umami · OG 1200x630');
