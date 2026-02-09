import sharp from 'sharp';
import { readFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Load fonts as base64 for SVG embedding
const fontBoldB64 = readFileSync(join(root, 'public/fonts/BricolageGrotesque-Bold.ttf')).toString('base64');
const fontRegularB64 = readFileSync(join(root, 'public/fonts/BricolageGrotesque-Regular.ttf')).toString('base64');

// Map emoji tags from frontmatter → uppercase label for OG image
const TAG_MAP = {
  'Memoria':  'MEMORIA',
  'Ahora':    'AHORA',
  'Horizonte':'HORIZONTE',
  'Taller':   'TALLER',
  'Anécdota': 'ANÉCDOTA',
  'Vida':     'VIDA',
  'Reseña':   'RESEÑA',
};

function parseTag(raw) {
  // "📙 Memoria" → "Memoria" → "MEMORIA"
  const cleaned = raw.replace(/^[\p{Emoji}\p{Emoji_Presentation}\s]+/u, '').trim();
  return TAG_MAP[cleaned] || cleaned.toUpperCase();
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const block = match[1];

  const title = block.match(/title:\s*"([^"]*)"/)?.[1] || '';
  const description = block.match(/description:\s*"([^"]*)"/)?.[1] || '';
  const tagsMatch = block.match(/tags:\s*\[([^\]]*)\]/);
  const tags = tagsMatch
    ? tagsMatch[1].match(/"([^"]*)"/g)?.map(t => t.replace(/"/g, '')) || []
    : [];

  return { title, description, tags };
}

// Strip accents for OG text (SVG/librsvg can't render all diacritics reliably)
function stripAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function discoverPosts() {
  const blogDir = join(root, 'src/content/blog');
  const files = readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = [];

  for (const file of files) {
    const content = readFileSync(join(blogDir, file), 'utf-8');
    const fm = parseFrontmatter(content);
    if (!fm || !fm.title) continue;

    const slug = basename(file, file.endsWith('.mdx') ? '.mdx' : '.md');
    const tag = fm.tags.length > 0 ? parseTag(fm.tags[0]) : 'BLOG';

    posts.push({
      slug,
      tag,
      title: stripAccents(fm.title),
      description: stripAccents(fm.description),
    });
  }

  return posts;
}

const WIDTH = 1200;
const HEIGHT = 630;

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text, maxCharsPerLine) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (test.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function generateSvg(post) {
  const titleLines = wrapText(post.title, 32);
  const titleFontSize = titleLines.length > 2 ? 46 : 54;
  const titleLineHeight = titleFontSize * 1.15;

  const descLines = wrapText(post.description, 65);

  const padLeft = 80;
  const tagY = 140;
  const lineY = tagY + 30;
  const titleStartY = lineY + titleFontSize + 15;
  const titleBlockHeight = titleLines.length * titleLineHeight;
  const descStartY = titleStartY + titleBlockHeight + 20;
  const descLineHeight = 30;
  const footerY = HEIGHT - 80;

  const titleTspans = titleLines
    .map((line, i) => `<tspan x="${padLeft}" dy="${i === 0 ? 0 : titleLineHeight}">${escapeXml(line)}</tspan>`)
    .join('\n      ');

  const descTspans = descLines
    .map((line, i) => `<tspan x="${padLeft}" dy="${i === 0 ? 0 : descLineHeight}">${escapeXml(line)}</tspan>`)
    .join('\n      ');

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'Bricolage';
        font-weight: 700;
        src: url('data:font/truetype;base64,${fontBoldB64}') format('truetype');
      }
      @font-face {
        font-family: 'Bricolage';
        font-weight: 400;
        src: url('data:font/truetype;base64,${fontRegularB64}') format('truetype');
      }
    </style>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1b2a"/>
      <stop offset="100%" stop-color="#1b2d4a"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative quotes -->
  <text x="${WIDTH - 140}" y="${HEIGHT / 2 + 20}" font-family="Georgia, serif" font-size="220" fill="rgba(255,255,255,0.06)" font-weight="700">&quot;&quot;</text>

  <!-- Tag -->
  <text x="${padLeft}" y="${tagY}" font-family="Bricolage, sans-serif" font-weight="700" font-size="18" fill="#e8825c" letter-spacing="3">${escapeXml(post.tag)}</text>

  <!-- Orange line -->
  <line x1="${padLeft}" y1="${lineY}" x2="${WIDTH - 80}" y2="${lineY}" stroke="#e8825c" stroke-width="2" opacity="0.5"/>

  <!-- Title -->
  <text y="${titleStartY}" font-family="Bricolage, sans-serif" font-weight="700" font-size="${titleFontSize}" fill="white">
      ${titleTspans}
  </text>

  <!-- Description -->
  <text y="${descStartY}" font-family="Bricolage, sans-serif" font-weight="400" font-size="20" fill="#a0aec0" font-style="italic">
      ${descTspans}
  </text>

  <!-- Footer -->
  <text x="${padLeft}" y="${footerY}" font-family="Bricolage, sans-serif" font-weight="700" font-size="18" fill="white">Giora Gilead, 72 anos</text>
  <text x="${padLeft + 218}" y="${footerY}" font-family="Bricolage, sans-serif" font-weight="400" font-size="18" fill="#a0aec0">  ·  </text>
  <text x="${padLeft + 252}" y="${footerY}" font-family="Bricolage, sans-serif" font-weight="700" font-size="18" fill="#e8825c" font-style="italic">Recableado</text>
</svg>`;
}

async function main() {
  const outDir = join(root, 'public/og');
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const posts = discoverPosts();
  console.log(`OG: found ${posts.length} posts\n`);

  let generated = 0;
  for (const post of posts) {
    const outPath = join(outDir, `${post.slug}.png`);

    // Skip if image already exists and --force not passed
    if (existsSync(outPath) && !process.argv.includes('--force')) {
      console.log(`  - ${post.slug}.png (exists, skipped)`);
      continue;
    }

    const svg = generateSvg(post);
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log(`  + ${post.slug}.png`);
    generated++;
  }

  console.log(`\nDone: ${generated} generated, ${posts.length - generated} skipped`);
}

main().catch(err => {
  console.error('OG Error:', err);
  process.exit(1);
});
