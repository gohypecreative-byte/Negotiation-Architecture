// Regenerate the lightweight scroll sequence; originals remain untouched.
// Once published, never overwrite a version with changed content. Bump the
// output directory, component import/URL, and Next.js header route together.
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
const source = require('../public/Negotiation_Architecture_Hero_30FPS_WebP/manifest.json');
const output = path.join(__dirname, '../public/hero-scroll-v1');
async function main() {
  await fs.mkdir(output, { recursive: true });
  const frames = [];
  for (let i = 1; i < source.frameCount; i += 4) frames.push(i);
  frames.push(source.frameCount);
  for (let i = 0; i < frames.length; i++) {
    await sharp(path.join(__dirname, '../public/Negotiation_Architecture_Hero_30FPS_WebP/frames', `frame_${String(frames[i]).padStart(4, '0')}.webp`))
      .resize({ width: 960 }).webp({ quality: 72 }).toFile(path.join(output, `${i + 1}.webp`));
  }
  await fs.writeFile(path.join(output, 'manifest.json'), JSON.stringify({ frameCount: frames.length, width: 960, height: 540 }) + '\n');
  console.log(`Generated ${frames.length} scroll frames`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
