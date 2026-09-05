import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const bold = readFileSync(join(root, 'public/fonts/BricolageGrotesque-Bold.ttf')).toString('base64');
const regular = readFileSync(join(root, 'public/fonts/BricolageGrotesque-Regular.ttf')).toString('base64');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face{font-family:Bricolage;font-weight:700;src:url(data:font/truetype;base64,${bold})}
      @font-face{font-family:Bricolage;font-weight:400;src:url(data:font/truetype;base64,${regular})}
    </style>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1628"/>
      <stop offset="1" stop-color="#0d2847"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="18%" r="62%">
      <stop offset="0" stop-color="#1fb4d1" stop-opacity=".30"/>
      <stop offset="1" stop-color="#1fb4d1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <path d="M80 88H1120" stroke="#d4af37" stroke-width="3"/>
  <text x="80" y="67" font-family="Bricolage" font-weight="700" font-size="23" letter-spacing="5" fill="#d4af37">AI COSTA · CHATGPT + CODEX</text>
  <text x="80" y="226" font-family="Bricolage" font-weight="700" font-size="78" fill="#ffffff">TURN WORK</text>
  <text x="80" y="316" font-family="Bricolage" font-weight="700" font-size="78" fill="#1fb4d1">INTO RESULTS</text>
  <text x="84" y="384" font-family="Bricolage" font-weight="400" font-size="30" fill="#b8c5d6">Trabaja con la IA · Work with AI</text>
  <rect x="80" y="441" width="548" height="70" rx="8" fill="#ffffff" fill-opacity=".08" stroke="#d4af37"/>
  <text x="110" y="485" font-family="Bricolage" font-weight="700" font-size="24" fill="#ffffff">8 self-paced episodes · ES + EN</text>
  <circle cx="1018" cy="462" r="96" fill="none" stroke="#1fb4d1" stroke-width="2" opacity=".45"/>
  <circle cx="1018" cy="462" r="62" fill="none" stroke="#d4af37" stroke-width="2" opacity=".7"/>
  <path d="M977 462h82M1018 421v82" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
  <text x="80" y="578" font-family="Bricolage" font-weight="700" font-size="22" fill="#ffffff">recableado.blog/ai-costa</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(join(root, 'public/ai-costa-social.png'));

console.log('public/ai-costa-social.png · 1200x630 · 8 episodes · embedded Bricolage fonts');
