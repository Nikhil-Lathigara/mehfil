#!/usr/bin/env node
// Uploads every audio file under public/songs/ to Cloudinary and prints a
// JSON mapping of relative path -> secure URL.
//
// Usage: node scripts/upload-songs.js
// Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in .env.local
//
// Idempotent: if a public_id already exists it is reused (no duplicate uploads).

const fs = require('fs')
const path = require('path')
const cloudinary = require('cloudinary').v2

function loadEnvFile(file) {
  const full = path.resolve(process.cwd(), file)
  if (!fs.existsSync(full)) return
  for (const line of fs.readFileSync(full, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!m || line.trim().startsWith('#')) continue
    let val = m[2]
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (!(m[1] in process.env)) process.env[m[1]] = val
  }
}

loadEnvFile('.env.local')
loadEnvFile('.env')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const SONGS_DIR = path.resolve(process.cwd(), 'public', 'songs')
const AUDIO_EXT = new Set(['.mp3', '.m4a', '.wav', '.ogg', '.flac', '.aac', '.opus'])

function walk(dir, base = '') {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full, rel))
    else if (AUDIO_EXT.has(path.extname(entry.name).toLowerCase())) out.push(rel)
  }
  return out
}

function sanitize(name) {
  return name
    .replace(/\.[^.]+$/, '')
    .replace(/[^A-Za-z0-9_-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function publicIdFor(rel) {
  const dir = path.posix.dirname(rel)
  const stem = sanitize(path.posix.basename(rel))
  return dir === '.' ? `songs/${stem}` : `songs/${dir}/${stem}`
}

async function main() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('ERROR: Cloudinary credentials not set. Fill in .env.local first.')
    process.exit(1)
  }

  const files = walk(SONGS_DIR)
  if (files.length === 0) {
    console.error('No audio files found under public/songs/')
    process.exit(1)
  }
console.log({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret_exists: !!process.env.CLOUDINARY_API_SECRET,
})
  const mapping = {}
  let uploaded = 0
  let reused = 0

  for (const rel of files) {
    const publicId = publicIdFor(rel)
    let secureUrl

    try {
      const existing = await cloudinary.api.resource(publicId, { resource_type: 'video' })
      secureUrl = existing.secure_url
      reused++
    } catch (err) {
      if (err?.http_code && err.http_code !== 404) {
        console.error(`SKIP ${rel}: ${err.message}`)
        continue
      }
      const result = await cloudinary.uploader.upload(path.join(SONGS_DIR, ...rel.split('/')), {
        public_id: publicId,
        resource_type: 'video',
        overwrite: false,
        use_filename: false,
      })
      secureUrl = result.secure_url
      uploaded++
    }

    mapping[rel] = secureUrl
    console.log(`${uploaded + reused}/${files.length} ${rel} -> ${secureUrl}`)
  }

  fs.writeFileSync(path.join(__dirname, 'uploaded-songs.json'), JSON.stringify(mapping, null, 2))
  console.log(`\nDone. ${uploaded} uploaded, ${reused} reused. Mapping written to scripts/uploaded-songs.json`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})