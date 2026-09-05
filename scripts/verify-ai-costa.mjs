import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const component = readFileSync(join(root, 'src/components/AICostaCourse.astro'), 'utf8');
const esRoute = readFileSync(join(root, 'src/pages/ai-costa.astro'), 'utf8');
const enRoute = readFileSync(join(root, 'src/pages/en/ai-costa.astro'), 'utf8');
const generator = readFileSync(join(root, 'scripts/generate-ai-costa-social.mjs'), 'utf8');
const header = readFileSync(join(root, 'src/components/Header.astro'), 'utf8');
const headerLink = readFileSync(join(root, 'src/components/HeaderLink.astro'), 'utf8');
const languageToggle = readFileSync(join(root, 'src/components/LanguageToggle.astro'), 'utf8');
const ui = readFileSync(join(root, 'src/i18n/ui.ts'), 'utf8');
const routes = readFileSync(join(root, 'src/i18n/utils.ts'), 'utf8');
const learningHub = readFileSync(join(root, 'src/components/LearningHub.astro'), 'utf8');
const learningPromo = readFileSync(join(root, 'src/components/LearningPromo.astro'), 'utf8');
const esLearningRoute = readFileSync(join(root, 'src/pages/aprender.astro'), 'utf8');
const enLearningRoute = readFileSync(join(root, 'src/pages/en/learn.astro'), 'utf8');
const footerLogo = readFileSync(join(root, 'public/logo-recableado.svg'), 'utf8');
const enLearningRedirect = readFileSync(join(root, 'src/pages/en/aprender.astro'), 'utf8');
const astroConfig = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
const designSystem = readFileSync(join(root, 'DESIGN.md'), 'utf8');
const designSidecar = JSON.parse(readFileSync(join(root, '.impeccable/design.json'), 'utf8'));

const fail = message => { throw new Error(message); };
const requireText = (text, pattern, label) => { if (!pattern.test(text)) fail(`Falta ${label}`); };

requireText(esRoute, /<AICostaCourse lang="es"\s*\/>/, 'ruta española');
requireText(enRoute, /<AICostaCourse lang="en"\s*\/>/, 'ruta inglesa');

const promptCount = (component.match(/\bprompt:\s*`/g) || []).length;
if (promptCount !== 16) fail(`Se esperaban 16 ejercicios originales bilingües y hay ${promptCount}`);

requireText(component, /route: 'Episodio'/, 'nombre episodio en español');
requireText(component, /route: 'Episode'/, 'nombre episodio en inglés');
requireText(component, /Índice de episodios/, 'índice de episodios');
requireText(component, /Episode guide/, 'índice inglés de episodios');
requireText(component, /Conversar con ChatGPT\. Dictar con Háblame\./, 'comparación ChatGPT y Háblame');
requireText(component, /Si después envías ese texto a ChatGPT, el texto sí sale del equipo\./, 'límite de privacidad explicado');
requireText(component, /Partí de Handy, un proyecto abierto con licencia MIT\./, 'procedencia abierta de Háblame');
requireText(component, /storyUrl: '\/blog\/033-hablame-mi-app-de-dictado\/'/, 'artículo español de Háblame');
requireText(component, /storyUrl: '\/en\/blog\/033-i-built-my-own-dictation-app\/'/, 'artículo inglés de Háblame');
requireText(component, /productUrl: 'https:\/\/hablame\.blog\/'/, 'web de Háblame');

for (const topic of [
  'Empieza con una conversación real', 'Piensa y trabaja por voz', 'Encarga trabajo, no pidas magia',
  'Trabaja con documentos y oficina', 'Crea algo que se pueda ver', 'Usa Codex para trabajo real',
  'Haz que lo bueno se pueda repetir', 'Método SELLO: termina con evidencia',
  'Start with a real conversation', 'Think and work by voice', 'Assign work instead of asking for magic',
  'Work with documents and office files', 'Create something people can see', 'Use Codex for real work',
  'Make good work repeatable', 'The SELLO Method: finish with evidence',
]) {
  requireText(component, new RegExp(topic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `módulo ${topic}`);
}

const officialLinks = [...component.matchAll(/href:\s*'(https:\/\/[^']+)'/g)].map(match => match[1]);
if (officialLinks.length !== 22) fail(`Se esperaban 22 referencias oficiales bilingües y hay ${officialLinks.length}`);
for (const href of officialLinks) {
  if (!href.startsWith('https://learn.chatgpt.com/docs/')) fail(`Enlace de profundización no oficial: ${href}`);
}

for (const forbidden of [/youtube/i, /thebigschool/i, /typeform/i, /help\.openai\.com/i, /chatgpt\.com\/.*pricing/i, /href:\s*'[^']+\.pdf/i, /certificad/i, /replay/i, /GPT-6/i, /precio/i]) {
  if (forbidden.test(component)) fail(`Contenido de tercero, promocional o perecedero detectado: ${forbidden}`);
}

requireText(component, /navigator\.clipboard&&navigator\.clipboard\.writeText/, 'copiado con Clipboard API');
requireText(component, /document\.execCommand\('copy'\)/, 'fallback de copiado');
requireText(component, /data-complete[\s\S]*localStorage\.setItem/, 'progreso local');
requireText(component, /data-prev[\s\S]*data-next/, 'navegación anterior y siguiente');
requireText(component, /id="themeToggle"[\s\S]*document\.documentElement\.dataset\.theme/, 'selector de tema');
requireText(component, /const path = es \? '\/ai-costa\/' : '\/en\/ai-costa\/'[\s\S]*const alternatePath = es \? '\/en\/ai-costa\/' : '\/ai-costa\/'/, 'selector de idioma');
requireText(component, /const learnPath = es \? '\/aprender\/' : '\/en\/learn\/'/, 'regreso a Aprende');
requireText(component, /\.brand\{min-height:44px;display:inline-flex/, 'objetivo táctil mínimo de la marca');
requireText(component, /umami-scibasku\.vercel\.app\/script\.js/, 'Umami');
requireText(component, /9b2bc6f2-f7a4-4099-8296-42091c2ba4bf/, 'website ID de Umami');
if (/googletagmanager|_vercel\/insights/.test(component)) fail('Analítica adicional no permitida');
if (/\[(?:PENDIENTE|TODO|TBD|INSERTAR|RELLENAR)[^\]]*\]/i.test(component)) fail('Placeholder editorial detectado');

requireText(generator, /AI COSTA · CHATGPT \+ CODEX/, 'identidad social del curso');
requireText(generator, /8 self-paced episodes · ES \+ EN/, 'promesa social bilingüe');
if (/GPT-6|pricing|precio/i.test(generator)) fail('Afirmación perecedera en la portada social');

const social = await sharp(join(root, 'public/ai-costa-social.png')).metadata();
if (social.width !== 1200 || social.height !== 630 || social.format !== 'png') {
  fail(`Portada social inválida: ${social.width}x${social.height} ${social.format}`);
}

requireText(esLearningRoute, /<LearningHub lang="es"\s*\/>/, 'ruta Aprende española');
requireText(enLearningRoute, /<LearningHub lang="en"\s*\/>/, 'ruta Learn inglesa');
requireText(header, /getLocalizedPath\(lang, '\/aprender'\)[\s\S]*nav\.learn/, 'pestaña Aprende');
if (/nav\.exercises|nav\.cheatsheet/.test(header)) fail('Ejercicios y Cheat Sheet deben vivir dentro de Aprende, no duplicados en la navegación');
requireText(ui, /'nav\.learn': 'Aprende'[\s\S]*'nav\.learn': 'Learn'/, 'etiqueta Aprende bilingüe');
requireText(routes, /aprender: 'learn'[\s\S]*learn: 'aprender'/, 'rutas localizadas de Aprende');
requireText(headerLink, /min-height: 44px/, 'objetivo táctil en enlaces de navegación');
requireText(languageToggle, /min-height: 44px/, 'objetivo táctil en selector de idioma');
requireText(learningHub, /AI Costa[\s\S]*Cheat Sheet[\s\S]*22 ejercicios/, 'tres recursos de aprendizaje');
requireText(learningHub, /8 episodios[\s\S]*8 episodes/, 'curso de ocho episodios en el hub');
requireText(learningPromo, /Aprende con GPT[\s\S]*Learn with GPT/, 'promoción bilingüe en portada');
requireText(footerLogo, /<svg[\s\S]*recableado/i, 'logotipo local de Recableado');
requireText(learningHub, /footerText: 'Recableado · Aprender[\s\S]*footerText: 'Recableado · Learning/, 'pie bilingüe de Aprende');
if (/import Footer/.test(learningHub)) fail('Aprende no debe heredar el pie monolingüe');
requireText(enLearningRedirect, /http-equiv="refresh"[\s\S]*window\.location\.replace\('\/en\/learn\/'\)/, 'redirección de la ruta inglesa duplicada');
requireText(astroConfig, /sitemap\(\{ filter: page => page !== 'https:\/\/recableado\.blog\/en\/aprender\/' \}\)/, 'exclusión del alias inglés en el sitemap');
requireText(designSystem, /# Design System: Recableado[\s\S]*## Do's and Don'ts/, 'documentación del sistema visual');
if (designSidecar.schemaVersion !== 2) fail('El sidecar de diseño debe usar schemaVersion 2');

console.log('AI_COSTA_OK · Aprende ES/EN · 8 episodios por idioma · ChatGPT + Háblame distinguidos · 8 copias por idioma · solo OpenAI en profundización · progreso local · logotipo local · Umami · OG 1200x630');
