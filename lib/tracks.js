// Each playlist: { name, image, tint, tracks }
// tracks = [ { id, title, artist, film, year, duration, src } ]
// src points to the uploaded audio file (Cloudinary CDN URL).
// To add a track, drop the file in public/songs/, run `npm run upload:songs`,
// then paste the resulting URL from scripts/uploaded-songs.json into src below.

export const playlists = {
  playlistA: {
    name: '90s के OG गाने',
    nameHi: '90s के OG गाने',
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
    name: 'सफ़रNAMA',
    nameHi: 'सफ़रNAMA',
    image: '/bg/thumbs/safarnama.webp',
    bg: { wide: '/bg/safarnama-wide.webp', tall: '/bg/safarnama-tall.webp' },
    tracks: [
    { id: 1, title: 'Sooraj Dooba Hain', artist: 'Arijit Singh & Aditi Singh Sharma', film: 'Yeh Jawaani Hai Deewani', year: 2013, duration: 247, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710857/songs/safarnama/Sooraj_Dooba_Hain_FULL_VIDEO_SONG_Arijit_singh_Aditi_Singh_Sharma_T-SERIES.mp3' },
    { id: 2, title: 'Roobaroo', artist: 'A. R. Rahman & Naresh Iyer', film: 'Rang De Basanti', year: 2006, duration: 285, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710859/songs/safarnama/A_R_Rahman_-_Roobaroo_-_Audio_Rang_De_Basanti_Aamir_Khan_A_R_Rahman_Naresh_Iyer.mp3' },
    { id: 3, title: 'Deva Deva', artist: 'Arijit Singh & Jonita Gandhi', film: 'Brahmastra', year: 2022, duration: 351, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710862/songs/safarnama/Deva_Deva_-_Extended_Film_Version_Brahm_stra_Amitabh_B_Ranbir_aliabhatt_pritam7415_Arijit_Jonita.mp3' },
    { id: 4, title: 'Illahi', artist: 'Arijit Singh', film: 'Yeh Jawaani Hai Deewani', year: 2013, duration: 204, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710864/songs/safarnama/Illahi_-_Yeh_Jawaani_Hai_Deewani_Ranbir_Kapoor_Deepika_Padukone.mp3' },
    { id: 5, title: 'Jo Tere Sang', artist: 'Mustafa Zahid', film: 'Blood Money', year: 2012, duration: 289, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710866/songs/safarnama/Jo_Tere_Sang_-_Blood_Money_Kunal_Khemu_Amrita_Puri_Mustafa_Zahid_Jeet_Gannguli_4K.mp3' },
    { id: 6, title: 'Mehbooba O Mehbooba', artist: 'R. D. Burman', film: 'Sholay', year: 1975, duration: 224, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710868/songs/safarnama/Mehbooba_Oh_Mehbooba_-_Lyrical_RD_Burman_Sholay_1975_Helen_Amjad_Khan.mp3' },
    { id: 7, title: 'Sooraj Ki Bahoon Mein', artist: 'Farhan Akhtar & Hrithik Roshan', film: 'Zindagi Na Milegi Dobara', year: 2011, duration: 211, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710870/songs/safarnama/Sooraj_Ki_Bahoon_Mein_Zindagi_Na_Milegi_Dobara_Hrithik_Roshan_Katrina_Kaif_Farhan_Akhtar.mp3' },
    { id: 8, title: 'Tokyo Drift', artist: 'Teriyaki Boyz', film: 'The Fast and the Furious: Tokyo Drift', year: 2006, duration: 257, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710872/songs/safarnama/Tokyo_Drift_-_Teriyaki_Boyz_MUSIC_VIDEO_HD.mp3' },
    { id: 9, title: 'Tumhi Ho Bandhu', artist: 'Kavita Seth & Neeraj Shridhar', film: 'Cocktail', year: 2012, duration: 301, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710875/songs/safarnama/Tumhi_Ho_Bandhu_-_Full_Video_Song_Cocktail_Saif_Ai_Khan_Deepika_Padukone_Diana_Penty_Pritam.mp3' },
    { id: 10, title: 'Subha Hone Na De', artist: 'Mika Singh', film: 'Desi Boyz', year: 2011, duration: 272, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710877/songs/safarnama/Subha_Hone_Na_De_Full_Song_Desi_Boyz_Akshay_Kumar_John_Abraham_Pritam_Mika_Singh_Kumaar.mp3' }
   ]
  },
    playlistC: {
    name: 'एक और Peg, एक और Baat',
    nameHi: 'एक और Peg, एक और बात',
    image: '/bg/thumbs/mehfil.webp',
    bg: { wide: '/bg/mehfil-wide.webp', tall: '/bg/mehfil-tall.webp' },
    tracks: [
    { id: 1, title: 'One Bottle Down', artist: 'Yo Yo Honey Singh', year: 2015, duration: 188, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047003/songs/mehfil/One_Bottle_Down_FULL_VIDEO_SONG_Yo_Yo_Honey_Singh_T-SERIES.mp3' },
    { id: 2, title: '4MenDown', artist: 'Millind Gaba', year: 2014, duration: 224, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047014/songs/mehfil/4MenDown_Full_Video_-_Millind_Gaba_Latest_Punjabi_Songs_Speed_Records.mp3' },
    { id: 3, title: 'Chaar Botal Vodka', artist: 'Yo Yo Honey Singh & Sunny Leone', film: 'Ragini MMS 2', year: 2014, duration: 230, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047026/songs/mehfil/Chaar_Botal_Vodka_Full_Song_Feat_Yo_Yo_Honey_Singh_Sunny_Leone_Ragini_MMS_2.mp3' },
    { id: 4, title: 'Daru Badnaam', artist: 'Kamal Kahlon & Param Singh', year: 2016, duration: 240, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047037/songs/mehfil/Daru_Badnaam_Kamal_Kahlon_Param_Singh_Official_Video_Pratik_Studio_Latest_Punjabi_Songs.mp3' },
    { id: 5, title: 'Johnny Johnny', artist: 'Jigar Saraiya, Priya Panchal & Madhav Krishna', film: 'Entertainment', year: 2014, duration: 156, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047046/songs/mehfil/Johnny_Johnny_-_Entertainment_Akshay_Kumar_Tamannaah_-_Official_HD_Video_Song_2014.mp3' },
    { id: 6, title: 'Manali Trance', artist: 'Yo Yo Honey Singh & Neha Kakkar', film: 'The Shaukeens', year: 2014, duration: 220, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047055/songs/mehfil/Manali_Trance_Yo_Yo_Honey_Singh_Neha_Kakkar_The_Shaukeens_Lisa_Haydon_Akshay_Kumar.mp3' },
    { id: 7, title: 'Mercy', artist: 'Badshah feat. Lauren Gottlieb', year: 2017, duration: 176, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047064/songs/mehfil/Mercy_-_Badshah_Feat_Lauren_Gottlieb_Official_Music_Video_Latest_Hit_Song_2017.mp3' },
    { id: 8, title: 'Party All Night', artist: 'Yo Yo Honey Singh', film: 'Boss', year: 2013, duration: 240, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047071/songs/mehfil/Party_All_Night_Feat_Honey_Singh_Full_Video_Boss_Akshay_Kumar_Sonakshi_Sinha.mp3' },
    { id: 9, title: 'Pee Le Pee Le O More Raja', artist: 'Mohammed Aziz & Sudesh Bhosle', film: 'Tirangaa', year: 1993, duration: 302, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047085/songs/mehfil/Pee_Le_Pee_Le_O_More_Raja_Raaj_Kumar_Nana_Patekar_Tirangaa_1993_Party_Songs.mp3' },
    { id: 10, title: 'One Love', artist: 'Shubh', year: 2023, duration: 159, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047094/songs/mehfil/Shubh_-_One_Love_Official_Audio.mp3' },
    { id: 11, title: 'Thodi Si Daaru', artist: 'AP Dhillon & Shreya Ghoshal', year: 2025, duration: 180, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787047104/songs/mehfil/Thodi_Si_Daaru_Official_Music_Video_AP_Dhillon_Shreya_Ghoshal_Tara_Sutaria.mp3' }
         ]
  },
  playlistD: {
    name: 'बारिश Aur बातें',
    nameHi: 'बारिश Aur बातें',
    image: '/bg/thumbs/baarish.webp',
    bg: { wide: '/bg/baarish-wide.webp', tall: '/bg/baarish-tall.webp' },
    tracks: [
    { id: 1, title: 'Baarish', artist: 'Ash King & Sashaa', film: 'Half Girlfriend', year: 2017, duration: 286, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786709995/songs/baarish/Baarish_Half_Girlfriend_Arjun_Kapoor_Shraddha_Kapoor_Ash_King_Sashaa_Tanishk_Baarish_2024.mp3' },
    { id: 2, title: 'Mere Nishan', artist: 'Darshan Raval', duration: 251, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786709978/songs/baarish/Mere_Nishan_Full_Audio_Song_by_Darshan_Raval.mp3' },
    { id: 3, title: 'Be Intehaan', artist: 'Atif Aslam', film: 'Race 2', year: 2013, duration: 280, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710011/songs/baarish/Be_Intehaan_-_Atif_Aslam_lyrics_video.mp3' },
    { id: 4, title: 'Darkhaast', artist: 'Arijit Singh', film: 'Shivaay', year: 2016, duration: 373, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710033/songs/baarish/Darkhaast_Arijit_Singh_Full_Lyrics_Video_Shivaay.mp3' },
    { id: 5, title: 'Dooriyan', artist: 'Mohit Chauhan', film: 'Love Aaj Kal', year: 2009, duration: 335, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710052/songs/baarish/Dooriyan_-lyrics_Mohit_Chauhan_Love_Aaj_Kal_LYRICS.mp3' },
    { id: 6, title: 'Pani Da Rang', artist: 'Rochak Kohli', film: 'Vicky Donor', year: 2012, duration: 238, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710067/songs/baarish/Pani_Da_Rang_-_Lyrical_Video_Vicky_Donor_Ayushmann_Khurrana_Yami_Gautam_Rochak_Kohli.mp3' },
    { id: 7, title: 'Sach Keh Raha Hai Deewana', artist: 'K. K.', film: 'Rehnaa Hai Terre Dil Mein', year: 2001, duration: 310, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710085/songs/baarish/Sach_Keh_Raha_Hai_Deewana_Rehnaa_Hai_Terre_Dil_Mein_R_Madhavan_Dia_Mirza_K_K.mp3' },
    { id: 8, title: 'Teri Jhuki Nazar', artist: 'Shafqat Amanat Ali', film: 'Murder 2', year: 2011, duration: 278, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710101/songs/baarish/Shafqat_Amanat_Ali_-_Teri_Jhuki_Nazar_Lyrics.mp3' },
    { id: 9, title: 'Tera Hone Laga Hoon', artist: 'Atif Aslam & Alisha Chinai', film: 'Ajab Prem Ki Ghazab Kahaani', year: 2009, duration: 299, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710118/songs/baarish/Tera_Hone_Laga_Hoon_Lyrics_-_Ajab_Prem_Ki_Gazab_Kahaani_Pritam_Atif_Aslam_Alisha_Chinai.mp3' },
    { id: 10, title: 'Tera Mera Rishta Purana', artist: 'Mustafa Zahid', film: 'Awarapan', year: 2007, duration: 313, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710137/songs/baarish/TERA_MERA_RISHTA_PURANA_LYRICS_-_MUSTAFA_ZAHID_AWARAPAN_EMRAAN_HASHMI_PRITAM_SAYEED_QUADRI.mp3' },
    { id: 11, title: 'Beete Lamhe', artist: 'K. K.', film: 'The Train', year: 2007, duration: 299, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1786710155/songs/baarish/Beete_Lamhe_Lyrical_Video_Song_The_Train_K_K_Mithoon_Emraan_Hashmi_Geeta_Basra.mp3' }
         ]
  },
playlistE: {
    name: 'Beat बजेगी, Body बनेगी',
    nameHi: 'Beat बजेगी, Body बनेगी',
    image: '/bg/thumbs/pasina.webp',
    bg: { wide: '/bg/pasina-wide.png', tall: '/bg/pasina-tall.png' },
    tracks: [
    { id: 1, title: 'Aarambh hai Prachand', artist: 'Piyush Mishra', year: 2021, duration: 243, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222918/songs/gym/Aarambh_hai_Prachand_Piyush_Mishra_Full_Song_Lyrics_Video_2021_aarambh_motivationalsong_pw_mDIut43JhwI.mp3' },
    { id: 2, title: 'Rolling in the Deep', artist: 'Adele', year: 2010, duration: 234, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222920/songs/gym/Adele_-_Rolling_in_the_Deep_Official_Music_Video_rYEDA3JcQqw.mp3' },
    { id: 3, title: 'Believer', artist: 'Imagine Dragons', year: 2017, duration: 217, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222922/songs/gym/Imagine_Dragons_-_Believer_Official_Music_Video_7wtfhZwyrcc.mp3' },
    { id: 4, title: 'Industry Baby × Nagada Sang Dhol', artist: 'Sush & Yohan Mashup', duration: 258, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222924/songs/gym/Industry_Baby_Nagada_Sang_Dhol_Sush_Yohan_Mashup_fx4SUZqg8CY.mp3' },
    { id: 5, title: "Beggin'", artist: 'Måneskin', year: 2017, duration: 211, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222927/songs/gym/M_neskin_-_Beggin_Lyrics_Testo_W2MpGCL8-9o.mp3' },
    { id: 6, title: 'Shoorveer', artist: 'Trouper Records', duration: 248, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222929/songs/gym/Shoorveer_-_A_Tribute_to_Maharana_Pratap_Ji_Official_Music_Video_Trouper_Records_8h12ccQgnVU.mp3' },
    { id: 7, title: 'SHOORVEER 3', artist: 'Rapperiya Baalam Ft. Shambho', duration: 209, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222931/songs/gym/SHOORVEER_3_-_A_Tribute_to_Rapperiya_Baalam_Ft_Shambho_I_Meetu_Solanki_DXCd7Moy3to.mp3' }
      ]
  },
  playlistF: {
    name: 'अंग्रेज़ी Radio',
    nameHi: 'अंग्रेज़ी Radio',
    image: '/bg/thumbs/english.webp',
    bg: { wide: '/bg/english-wide.webp', tall: '/bg/english.webp' },
    tracks: [
    { id: 1, title: 'Faded', artist: 'Alan Walker', year: 2015, duration: 212, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222836/songs/Engilsh/Alan_Walker_-_Faded_60ItHLz5WEA.mp3' },
    { id: 2, title: 'Lily', artist: 'Alan Walker, K-391 & Emelie Hollow', year: 2018, duration: 196, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222839/songs/Engilsh/Alan_Walker_K-391_Emelie_Hollow_-_Lily_Lyrics_ox4tmEV6-QU.mp3' },
    { id: 3, title: 'Ordinary', artist: 'Alex Warren', year: 2024, duration: 187, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222847/songs/Engilsh/Alex_Warren_-_Ordinary_Official_Video_u2ah9tWTkmk.mp3' },
    { id: 4, title: 'bad guy', artist: 'Billie Eilish', year: 2019, duration: 206, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222851/songs/Engilsh/Billie_Eilish_-_bad_guy_DyDfgMOUjCI.mp3' },
    { id: 5, title: 'One Kiss', artist: 'Calvin Harris, Dua Lipa', year: 2018, duration: 223, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222856/songs/Engilsh/Calvin_Harris_Dua_Lipa_-_One_Kiss_Official_Video_DkeiKbqa02g.mp3' },
    { id: 6, title: 'End Of Beginning', artist: 'Djo', year: 2022, duration: 159, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222859/songs/Engilsh/Djo_-_End_Of_Beginning_Lyrics_B3Z4XGAxJB0.mp3' },
    { id: 7, title: 'Levitating', artist: 'Dua Lipa ft. DaBaby', year: 2020, duration: 230, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222861/songs/Engilsh/Dua_Lipa_-_Levitating_Featuring_DaBaby_Official_Music_Video_TUVcZfQe-Kw.mp3' },
    { id: 8, title: 'Arcade', artist: 'Duncan Laurence ft. FLETCHER', year: 2019, duration: 185, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222864/songs/Engilsh/Duncan_Laurence_-_Arcade_Lyric_Video_ft_FLETCHER_51u5fnyrGj4.mp3' },
    { id: 9, title: 'Perfect', artist: 'Ed Sheeran', year: 2017, duration: 282, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222867/songs/Engilsh/Ed_Sheeran_-_Perfect_Official_Music_Video_2Vv-BfVoq4g.mp3' },
    { id: 10, title: 'Love Me Like You Do', artist: 'Ellie Goulding', year: 2015, duration: 249, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222870/songs/Engilsh/Ellie_Goulding_-_Love_Me_Like_You_Do_Official_Video_AJtDXIazrMo.mp3' },
    { id: 11, title: 'Heat Waves', artist: 'Glass Animals', year: 2020, duration: 235, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222872/songs/Engilsh/Glass_Animals_-_Heat_Waves_Official_Video_mRD0-GxqHVo.mp3' },
    { id: 12, title: 'As It Was', artist: 'Harry Styles', year: 2022, duration: 166, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222875/songs/Engilsh/Harry_Styles_-_As_It_Was_Official_Video_H5v3kku4y6Q.mp3' },
    { id: 13, title: 'Watermelon Sugar', artist: 'Harry Styles', year: 2019, duration: 189, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222877/songs/Engilsh/Harry_Styles_-_Watermelon_Sugar_Official_Video_E07s5ZYygMg.mp3' },
    { id: 14, title: 'Thunder', artist: 'Imagine Dragons', year: 2017, duration: 204, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222879/songs/Engilsh/Imagine_Dragons_-_Thunder_fKopy74weus.mp3' },
    { id: 15, title: 'Peaches', artist: 'Justin Bieber ft. Daniel Caesar, Giveon', year: 2021, duration: 198, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222881/songs/Engilsh/Justin_Bieber_-_Peaches_ft_Daniel_Caesar_Giveon_tQ0yjYUFKAE.mp3' },
    { id: 16, title: 'Can We Kiss Forever?', artist: 'Kina ft. Adriana Proenza', year: 2019, duration: 190, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222884/songs/Engilsh/Kina_-_Can_We_Kiss_Forever_Official_Video_ft_Adriana_Proenza_3Soht3ISW-E.mp3' },
    { id: 17, title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars', year: 2024, duration: 252, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222886/songs/Engilsh/Lady_Gaga_Bruno_Mars_-_Die_With_A_Smile_Official_Music_Video_kPa7bsKwL-c.mp3' },
    { id: 18, title: '7 Years', artist: 'Lukas Graham', year: 2015, duration: 239, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222888/songs/Engilsh/Lukas_Graham_-_7_Years_Official_Music_Video_LHCob76kigA.mp3' },
    { id: 19, title: 'Memories', artist: 'Maroon 5', year: 2019, duration: 195, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222890/songs/Engilsh/Maroon_5_-_Memories_Official_Video_SlPhMPnQ58k.mp3' },
    { id: 20, title: 'drivers license', artist: 'Olivia Rodrigo', year: 2021, duration: 247, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222892/songs/Engilsh/Olivia_Rodrigo_-_drivers_license_Official_Video_ZmDBbnmKpqQ.mp3' },
    { id: 21, title: 'Snap', artist: 'Rosa Linn', year: 2022, duration: 195, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222894/songs/Engilsh/Rosa_Linn_-_Snap_-_Official_Eurovision_Music_Video_Lo4_K4relMg.mp3' },
    { id: 22, title: 'Dandelions', artist: 'Ruth B.', year: 2017, duration: 229, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222896/songs/Engilsh/Ruth_B_-_Dandelions_Lyrics_5gg17XXXiNo.mp3' },
    { id: 23, title: 'Espresso', artist: 'Sabrina Carpenter', year: 2024, duration: 201, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222898/songs/Engilsh/Sabrina_Carpenter_-_Espresso_eVli-tstM5E.mp3' },
    { id: 24, title: 'Señorita', artist: 'Shawn Mendes, Camila Cabello', year: 2019, duration: 205, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222900/songs/Engilsh/Shawn_Mendes_Camila_Cabello_-_Se_orita_Pkh8UtuejGw.mp3' },
    { id: 25, title: 'Cheap Thrills', artist: 'Sia ft. Sean Paul', year: 2016, duration: 262, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222902/songs/Engilsh/Sia_-_Cheap_Thrills_Official_Lyric_Video_ft_Sean_Paul_nYh-n7EOtMA.mp3' },
    { id: 26, title: 'Cradles', artist: 'Sub Urban', year: 2019, duration: 219, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222904/songs/Engilsh/Sub_Urban_-_Cradles_Official_Music_Video_KBtk5FUeJbk.mp3' },
    { id: 27, title: 'Closer', artist: 'The Chainsmokers ft. Halsey', year: 2016, duration: 262, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222907/songs/Engilsh/The_Chainsmokers_-_Closer_Lyric_ft_Halsey_PT2_F-1esPk.mp3' },
    { id: 28, title: 'STAY', artist: 'The Kid LAROI, Justin Bieber', year: 2021, duration: 158, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222909/songs/Engilsh/The_Kid_LAROI_Justin_Bieber_-_STAY_Official_Video_kTJczUoc26U.mp3' },
    { id: 29, title: 'Blinding Lights', artist: 'The Weeknd', year: 2019, duration: 263, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222911/songs/Engilsh/The_Weeknd_-_Blinding_Lights_Official_Video_4NRXx6U8ABQ.mp3' },
    { id: 30, title: 'Another Love', artist: 'Tom Odell', year: 2012, duration: 248, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222913/songs/Engilsh/Tom_Odell_-_Another_Love_Official_Video_MwpMEbgC7DA.mp3' },
    { id: 31, title: 'Dusk Till Dawn', artist: 'ZAYN ft. Sia', year: 2017, duration: 337, src: 'https://res.cloudinary.com/dx88drjvk/video/upload/v1787222916/songs/Engilsh/ZAYN_-_Dusk_Till_Dawn_Official_Video_ft_Sia_tt2k8PGm-TI.mp3' }
      ]
  },

  // playlistG: {
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
  // playlistH: {
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
  // playlistI: {
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
  // playlistJ: {
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
  // playlistK: {
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
  // playlistL: {
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