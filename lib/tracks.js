// Each playlist: { name, image, tint, tracks }
// tracks = [ { id, title, artist, film, year, duration, src } ]
// src points to the uploaded audio file (Cloudinary CDN URL).
// To add a track, drop the file in public/songs/, run `npm run upload:songs`,
// then paste the resulting URL from scripts/uploaded-songs.json into src below.

export const playlists = {
  playlistA: {
    name: '90s OG songs',
    nameHi: '90s के गाने',
    image: '/bg/thumbs/scene.webp',
    bg: { wide: '/bg/scene-wide.webp', tall: '/bg/scene-tall.webp' },
    tracks: [
    { id: 1, title: 'Pal Pal Dil Ke Paas', artist: 'Kishore Kumar', duration: 315, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641134/songs/90s/pal-pal-by-kishore-kumar.mp3' },
  { id: 2, title: 'Kisi Disco Mein Jaaye', artist: 'Udit Narayan', duration: 335, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641126/songs/90s/Kisi-Disco-Mein-Jaaye-by-Udit-Narayan.mp3' },
  { id: 3, title: 'O Lal Dupatte Wali', artist: 'Govinda', duration: 306, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641132/songs/90s/O-Lal-Dupatte-Wali.mp3' },
  { id: 4, title: 'O Mere Dil Ke Chain', artist: 'Kishore Kumar', duration: 273, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641130/songs/90s/O_Mere_Dil_Ke_Chain_Full_Lyrics_Video_Kishore_Kumar_Rajesh_Khanna_Eternal_Romantic_Classic_-_ChordCanvas_128k.mp3' },
  { id: 5, title: 'Yeh Ratein Yeh Mausam', artist: 'Asha Bhosle & Kishore Kumar', duration: 195, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641135/songs/90s/Yeh_Ratein_Yeh_Mausam_Dilli_Ka_Thug_1958_Nutan_Asha_Bhosle_Kishore_Kumar_Hit_Songs_-_Kishore_Kumar_Hit_Songs_128k.mp3' },
  { id: 6, title: 'Main Shayar To Nahin', artist: 'Kishore Kumar', duration: 445, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641139/songs/90s/-_Main_Shayar_To_Nahin_Full_Song_Rishi_Kapoor_Bobby_Old_Hindi_Evergreen_Song_-_Dard_Bhare_Songs_128k.mp3' },
  { id: 7, title: 'Ek Ajnabee Haseena Se', artist: 'Kishore Kumar', duration: 476, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641121/songs/90s/EK_AJNABEE_HASEENA_SE_4K_Rajesh_Khanna_Zeenat_Aman_Evergreen_70s_Hit_Song_Ajnabee_1974_-_SuperHit_Gaane_128k.mp3' },
  { id: 8, title: 'Hai Apna Dil To Awara', artist: 'Hemant Kumar', duration: 442, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641124/songs/90s/Hai_Apna_Dil_To_Awara_Dev_Anand_Waheeda_Rehman_Classic_Black_White_Hindi_Song_-_Dard_Bhare_Songs_128k.mp3' },
  { id: 9, title: 'Yeh Shaam Mastani', artist: 'Kishore Kumar', duration: 244, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641137/songs/90s/Yeh_Shaam_Mastani_4K_Kishore_Kumar_Rajesh_Khanna_Kati_Patang_Classic_Bollywood_4K_Video_Song_-_SuperHit_Gaane_128k.mp3' },
  { id: 10, title: 'Bekarar Karke Hume Yu Na Jaeye', artist: 'Kishore Kumar', duration: 178, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641114/songs/90s/Bekarar_Karke_Hume_Yu_Na_Jaeye_Purane_Gane_Old_Song_from_Jawan_Trailer_-_Retro_Hit_Songs_128k.mp3' },
  { id: 11, title: 'Chhu Kar Mere Manko', artist: 'Kishore Kumar', duration: 253, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641117/songs/90s/Chhu_Kar_Mere_Manko_Lyrical_Video_Kishore_Kumar_Rajesh_Roshan_Revibe_Hindi_Songs_-_Universal_Music_India_128k.mp3' },
  { id: 12, title: 'Neele Neele Ambar Par', artist: 'Kishore Kumar', duration: 348, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641128/songs/90s/Neele_neele_ambar_par_Chand_jab_aaye_kishorekumar_kishorekumarsong_beautiful_song_by_kishore_da_-_Nackishore_128k.mp3' },
  { id: 13, title: 'Chura Liya Hai Tumne Jo Dil Ko', artist: 'Asha Bhosle', duration: 278, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641119/songs/90s/Chura_Liya_Hai_Tumne_Jo_Dil_Ko_-_Yaadon_Ki_Baaraat_Zeenat_Aman_Vijay_Arora_-_BondTune_Hindi_128k.mp3' },
  { id: 14, title: 'Roop Tera Mastana', artist: 'Kishore Kumar', duration: 225, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641141/songs/90s/4K_Rajesh_Khanna_Sharmila_Tagore_Kishore_Kumar_Aradhana_1969_-_SuperHit_Gaane_128k.mp3' },
  { id: 15, title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu', duration: 266, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786641123/songs/90s/Ek_Ladki_ko_dekha_-_Full_Video_HD_1942_A_love_story_Anil_Kapoor_Manisha_Koirala_-_Vidhu_Vinod_Chopra_Films_128k.mp3' }

    ]
  },
  playlistB: {
    name: 'Safarnama',
    nameHi: 'सफ़रNAMA',
    image: '/bg/thumbs/safarnama.webp',
    bg: { wide: '/bg/safarnama-wide.webp', tall: '/bg/safarnama-tall.webp' },
    tracks: [
       
   ]
  },
  playlistC: {
    name: 'Baarish aur Bateein',
    nameHi: 'बारिश AUR बातें',
    image: '/bg/thumbs/baarish.webp',
    bg: { wide: '/bg/baarish-wide.webp', tall: '/bg/baarish-tall.webp' },
    tracks: [
         ]
  },
  playlistD: {
    name: 'Ek Aur Peg, Ek Aur Baat',
    nameHi: 'एक और PEG, एक और बात',
    image: '/bg/thumbs/mehfil.webp',
    bg: { wide: '/bg/mehfil-wide.webp', tall: '/bg/mehfil-tall.webp' },
    tracks: [
         ]
  },
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