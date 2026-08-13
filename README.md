# Nostalgia Music Site (Next.js)

Single-page Next.js App Router site. To run:

```bash
npm install
npm run dev
```

Notes:
- Add tracks in `lib/tracks.js` — each track has a `src` pointing to an audio file.
- Drop song files in `public/songs/` (e.g. `public/songs/my-song.mp3`), then set `src: '/songs/my-song.mp3'`.
- Place background assets in `public/bg/scene-wide.webp` and `public/bg/scene-tall.webp`.
