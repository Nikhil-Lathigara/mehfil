#!/usr/bin/env node
// Generates small center-cropped thumbnails of the playlist artwork for the
// playlist cards (which render at ~120px) so the page does not download the
// full 1672px backgrounds just to show a tiny thumbnail.
//
// Usage: node scripts/make-thumbs.js
// Requires the `sharp` package (already present in node_modules).

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const BG = path.resolve(process.cwd(), 'public', 'bg')
const OUT = path.join(BG, 'thumbs')

const CARDS = [
  ['scene', 'scene-wide.webp'],
  ['safarnama', 'safarnama-wide.webp'],
  ['baarish', 'baarish-wide.webp'],
  ['mehfil', 'mehfil-wide.webp'],
]

async function main() {
  fs.mkdirSync(OUT, { recursive: true })
  for (const [name, file] of CARDS) {
    const src = path.join(BG, file)
    const dest = path.join(OUT, `${name}.webp`)
    await sharp(src)
      .resize(240, 240, { fit: 'cover', position: 'centre' })
      .webp({ quality: 80 })
      .toFile(dest)
    console.log(`thumb ${dest} (${Math.round(fs.statSync(dest).size / 1024)} KB)`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})