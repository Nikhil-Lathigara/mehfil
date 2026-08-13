// Each playlist: { name, image, tint, tracks }
// tracks = [ { id, title, artist, film, year, duration, src } ]
// src points to an audio file in public/songs/, e.g. '/songs/my-song.mp3'.
// To add a track, drop the file in public/songs/ and insert a line into a playlist below.

export const playlists = {
  playlistA: {
    name: '90s OG songs',
    image: '/bg/scene-wide.webp',
    bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
    tracks: [
    { id: 1, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', duration: 315, src: '/songs/pal-pal-by-kishore-kumar.mp3' },
  { id: 2, title: 'Kisi Disco Mein Jaaye', artist: 'Udit Narayan', duration: 335, src: '/songs/Kisi-Disco-Mein-Jaaye-by-Udit-Narayan.mp3' },
  { id: 3, title: 'O Lal Dupatte Wali', artist: 'Govinda', duration: 306, src: '/songs/O-Lal-Dupatte-Wali.mp3' }

    ]
  },
  playlistB: {
    name: 'Safarnama',
    image: '/bg/safarnama-wide.webp',
    bg: { wide: '/bg/safarnama-wide.webp', tall: '/bg/safarnama-tall.webp' },
    tracks: [
      { id: 1, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', duration: 315, src: '/songs/pal-pal-by-kishore-kumar.mp3' },
  { id: 2, title: 'Kisi Disco Mein Jaaye', artist: 'Udit Narayan', duration: 335, src: '/songs/Kisi-Disco-Mein-Jaaye-by-Udit-Narayan.mp3' },
  { id: 3, title: 'O Lal Dupatte Wali', artist: 'Govinda', duration: 306, src: '/songs/O-Lal-Dupatte-Wali.mp3' }
   ]
  },
  playlistC: {
    name: 'Baarish aur Bateein',
    image: '/bg/baarish-wide.webp',
    bg: { wide: '/bg/baarish-wide.webp', tall: '/bg/baarish-tall.webp' },
    tracks: [
     { id: 1, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', duration: 315, src: '/songs/pal-pal-by-kishore-kumar.mp3' },
  { id: 2, title: 'Kisi Disco Mein Jaaye', artist: 'Udit Narayan', duration: 335, src: '/songs/Kisi-Disco-Mein-Jaaye-by-Udit-Narayan.mp3' },
  { id: 3, title: 'O Lal Dupatte Wali', artist: 'Govinda', duration: 306, src: '/songs/O-Lal-Dupatte-Wali.mp3' }
     ]
  },
  // playlistD: {
  //   name: 'Coffeehouse',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(160, 100, 220, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Hallelujah', artist: 'Jeff Buckley', film: '', year: 1994, duration: 413, src: '/songs/hallelujah.mp3' },
  //     { id: 2, title: 'Skinny Love', artist: 'Bon Iver', film: '', year: 2007, duration: 238, src: '/songs/skinny-love.mp3' },
  //     { id: 3, title: 'Holocene', artist: 'Bon Iver', film: '', year: 2011, duration: 336, src: '/songs/holocene.mp3' }
  //   ]
  // },
  // playlistE: {
  //   name: 'Retro Pop',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(255, 90, 120, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Dancing Queen', artist: 'ABBA', film: '', year: 1976, duration: 231, src: '/songs/dancing-queen.mp3' },
  //     { id: 2, title: 'Billie Jean', artist: 'Michael Jackson', film: '', year: 1982, duration: 294, src: '/songs/billie-jean.mp3' },
  //     { id: 3, title: 'I Want You Back', artist: 'Jackson 5', film: '', year: 1969, duration: 178, src: '/songs/i-want-you-back.mp3' }
  //   ]
  // },
  // playlistF: {
  //   name: 'Chill Waves',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(40, 170, 210, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Ocean Eyes', artist: 'Billie Eilish', film: '', year: 2016, duration: 200, src: '/songs/ocean-eyes.mp3' },
  //     { id: 2, title: 'Summertime Sadness', artist: 'Lana Del Rey', film: '', year: 2012, duration: 267, src: '/songs/summertime-sadness.mp3' },
  //     { id: 3, title: 'Runaway', artist: 'Aurora', film: '', year: 2015, duration: 268, src: '/songs/runaway.mp3' }
  //   ]
  // },
  // playlistG: {
  //   name: 'Rock Classics',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(200, 60, 60, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', film: '', year: 1975, duration: 354, src: '/songs/bohemian-rhapsody.mp3' },
  //     { id: 2, title: 'Hotel California', artist: 'Eagles', film: '', year: 1976, duration: 390, src: '/songs/hotel-california.mp3' },
  //     { id: 3, title: 'Back in Black', artist: 'AC/DC', film: '', year: 1980, duration: 255, src: '/songs/back-in-black.mp3' }
  //   ]
  // },
  // playlistH: {
  //   name: 'Soul Kitchen',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(230, 150, 60, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Respect', artist: 'Aretha Franklin', film: '', year: 1967, duration: 148, src: '/songs/respect.mp3' },
  //     { id: 2, title: 'Superstition', artist: 'Stevie Wonder', film: '', year: 1972, duration: 264, src: '/songs/superstition.mp3' },
  //     { id: 3, title: "Ain't No Mountain High Enough", artist: 'Marvin Gaye & Tammi Terrell', film: '', year: 1967, duration: 148, src: '/songs/aint-no-mountain.mp3' }
  //   ]
  // },
  // playlistI: {
  //   name: 'Indie Mix',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(90, 200, 120, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Dog Days Are Over', artist: 'Florence + The Machine', film: '', year: 2009, duration: 252, src: '/songs/dog-days.mp3' },
  //     { id: 2, title: 'Two Weeks', artist: 'Grizzly Bear', film: '', year: 2009, duration: 244, src: '/songs/two-weeks.mp3' },
  //     { id: 3, title: 'The Less I Know the Better', artist: 'Tame Impala', film: '', year: 2015, duration: 336, src: '/songs/less-i-know.mp3' }
  //   ]
  // },
  // playlistJ: {
  //   name: 'Summer Breeze',
  //   image: '/bg/scene-wide.webp',
  //   bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
  //   tint: 'rgba(120, 200, 90, 0.30)',
  //   tracks: [
  //     { id: 1, title: 'Kokomo', artist: 'The Beach Boys', film: '', year: 1988, duration: 215, src: '/songs/kokomo.mp3' },
  //     { id: 2, title: 'Soak Up the Sun', artist: 'Sheryl Crow', film: '', year: 2002, duration: 292, src: '/songs/soak-up-the-sun.mp3' },
  //     { id: 3, title: 'Island in the Sun', artist: 'Weezer', film: '', year: 2001, duration: 200, src: '/songs/island-in-the-sun.mp3' }
  //   ]
  // }
}