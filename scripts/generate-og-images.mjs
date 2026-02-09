import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Load fonts as base64 for SVG embedding
const fontBoldPath = join(root, 'public/fonts/BricolageGrotesque-Bold.ttf');
const fontRegularPath = join(root, 'public/fonts/BricolageGrotesque-Regular.ttf');
const fontBoldB64 = readFileSync(fontBoldPath).toString('base64');
const fontRegularB64 = readFileSync(fontRegularPath).toString('base64');

const posts = [
  {
    slug: 'la-noche-del-gin-tonic-y-el-prompt',
    tag: 'MEMORIA',
    title: 'La noche del gin tonic y el prompt',
    description: 'Como la diabetes me quito las copas, un curso me engancho a ChatGPT, y un tal Jose Rodenas no sabia lo que estaba desatando',
  },
  {
    slug: '003-tiburones-y-bases-de-datos',
    tag: 'AHORA',
    title: 'He buceado con tiburones martillo. Hoy luche con una base de datos.',
    description: 'O como un agente de viajes que perdio 20 kilos decidio tambien perder 2 bases de datos',
  },
  {
    slug: '004-agentes-oficina',
    tag: 'AHORA',
    title: 'Hoy monte una propuesta de esqui en Japon para 5 personas. Me ayudaron 3 empleados. Ninguno es humano.',
    description: 'Como 3 agentes IA se coordinaron (y se pelearon) para crear una propuesta de viaje completa en una manana.',
  },
];

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

// Simple word-wrap: split text into lines that fit within maxWidth chars
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

  // Layout positions
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

  <!-- Decorative quotes (right side) -->
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

  <!-- Footer: Author -->
  <text x="${padLeft}" y="${footerY}" font-family="Bricolage, sans-serif" font-weight="700" font-size="18" fill="white">Giora Gilead, 72 anos</text>
  <text x="${padLeft + 218}" y="${footerY}" font-family="Bricolage, sans-serif" font-weight="400" font-size="18" fill="#a0aec0">  ·  </text>
  <text x="${padLeft + 252}" y="${footerY}" font-family="Bricolage, sans-serif" font-weight="700" font-size="18" fill="#e8825c" font-style="italic">Recableado</text>
</svg>`;
}

async function main() {
  console.log('Generating OG images...\n');

  for (const post of posts) {
    const svg = generateSvg(post);
    const outPath = join(root, 'public/og', `${post.slug}.png`);

    await sharp(Buffer.from(svg))
      .png()
      .toFile(outPath);

    console.log(`  ✓ ${post.slug}.png`);
  }

  console.log('\nDone! Images saved to public/og/');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
