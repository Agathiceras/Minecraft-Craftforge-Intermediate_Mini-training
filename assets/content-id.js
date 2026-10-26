/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2242 · ENG] · INDONESIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'id' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Pelatihan kursus EM',
  footer: 'kodland · Model Pendidikan Baru · Pelatihan kursus',
  devLink: '🛠 Pengembang',
  logoSub: 'Model Pendidikan Baru',
  navHome: '← Beranda',
  navBackModule: '← Kembali ke modul',
  moduleN: 'Modul {n}',
  badgeStart: 'Mulai →',
  badgeLocked: '🔒 Selesaikan Modul {n}',
  badgeDone: '✓ Selesai · {score}%',
  progLabel: 'modul selesai',
  progAllDone: 'Semua modul selesai 🎉',
  eyebrow: '{course} · Modul {n} dari {total}',
  ctaTitle: 'Evaluasi modul',
  ctaText: '{n} pertanyaan singkat. Raih skor 70% atau lebih untuk lulus.',
  lockSim: '🔒 Selesaikan simulasi di atas untuk membuka evaluasi.',
  startCheck: 'Mulai evaluasi →',
  retake: '🔁 Ulangi evaluasi',
  qmeta: '{e} Evaluasi Modul {n} · Pertanyaan {i} dari {total}',
  fbRight: '✅ <b>Benar!</b> ',
  fbWrong: '❌ <b>Belum tepat.</b> ',
  nextQuestion: 'Pertanyaan berikutnya →',
  seeResult: 'Lihat hasil saya →',
  passedTitle: 'Anda lulus!',
  failTitle: 'Sedikit lagi',
  scoreLine: 'Anda menjawab <b>{score} dari {n}</b> pertanyaan dengan benar.',
  failText: 'Anda memerlukan skor 70% atau lebih. Pelajari lagi modulnya, lalu coba kembali — Anda bisa mengulanginya sebanyak yang diperlukan.',
  nextUnlocked: '<b>Modul {n} · {title}</b> sekarang sudah terbuka.',
  goModule: 'Ke Modul {n} →',
  allDoneText: 'Anda sudah menyelesaikan kedua modul pelatihan ini.',
  seeNext: 'Lihat langkah selanjutnya →',
  reviewModule: '📖 Pelajari lagi modulnya',
  homeDoneTitle: 'Semua modul selesai!',
  homeDoneText: 'Satu langkah terakhir: tes DST di halaman pelatihan LMS.',
  homeDoneBtn: 'Lihat langkah selanjutnya →',
  doneBadge: '✓ Selesai',
  doneBack: 'Kembali ke modul',
  lockedTitle: 'Masih terkunci',
  lockedModule: 'Selesaikan Modul {n} terlebih dahulu.',
  lockedStep: 'Selesaikan langkah sebelumnya untuk membuka langkah ini.',
  ok: 'OK',
  linkOpen: 'Buka ↗',
  projPlay: '▶ Buka ↗',
  simOpen: '▶ Buka simulasi di sini',
  simClose: '✕ Tutup simulasi',
  simNewTab: 'Buka di tab baru ↗',
  simDone: '✅ Simulasi selesai',
  simTodo: '○ Simulasi belum dikerjakan',
  checkTag: 'Centang semuanya',
  mythTag: 'Mitos',
  mythTap: 'Ketuk untuk melihat faktanya →',
  mythReality: 'Faktanya ✓',
  sortWrong: '✗ Belum tepat.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2242';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Pelatihan kursus · [2242]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: 'Untuk siswa usia 10–12 tahun: mereka menulis hukum dunia Minecraft dengan data pack dan program Python yang membangun jembatan, menara, hingga dunia utuh. Dua modul: materi kursus dan sisi teknis pelajaran.',
  facts: [
    ['🧑‍💻', '<b>Sesuai kecepatan Anda.</b> Progres Anda tersimpan di browser ini. Setiap modul diakhiri dengan evaluasi singkat.'],
    ['⚡', '<b>Dilengkapi latihan.</b> Simulasi untuk berlatih cara memublikasikan data pack di Kodland Sparks dan mengatasi masalah yang paling sering muncul.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Sebelum mulai:</b> selesaikan dulu <b>pelatihan inti Model Pendidikan Baru (EM)</b>. Pelatihan kursus ini adalah lanjutannya dan dibangun di atas apa yang sudah Anda pelajari di sana: Backoffice dan Teacher Notes, Classroom dengan Follow Mode, tur Kodland Sparks, dan kualitas pelajaran.' },
  { kind:'warn', e:'🔄', html:'<b>Konten pelajaran di Backoffice terus diperbarui.</b> Pelajaran terus disempurnakan berdasarkan umpan balik dari siswa dan tutor. Jangan khawatir: setiap kali ada perubahan, Anda akan diberi tahu lebih dulu agar bisa menyiapkan pelajarannya.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'Materi kursus',
    desc:'Informasi umum kursus, apa yang dicapai siswa, dan pelajaran-pelajaran pertama Modul 1.',
    obj:'Bersiap mengajar pelajaran-pelajaran pertama Minecraft CraftForge Intermediate. Di dalamnya, siswa usia 10–12 tahun membuat hukum pertama mereka untuk dunia Minecraft di sebuah data pack — resep, drop, dan perintah saat masuk ke dunia — lalu memublikasikannya di Kodland Sparks.',
    offer:[['🧱','Mengetahui informasi umum kursus dan apa yang dicapai siswa.'],['📖','Mengetahui apa yang terjadi di setiap pelajaran pertama.'],['📦','Memahami apa itu data pack dan cara siswa bekerja dengannya.'],['📘','Mempelajari pelajaran-pelajaran dan Teacher Notes-nya di Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kursusnya', blocks:[
        { t:'meta', items:[['🧒','Usia','10–12 tahun'],['⏱️','Pelajaran','90 menit'],['📚','Program','40 pelajaran · 10 modul'],['🐍','Bahasa','Python']] },
        { t:'trio', items:[
          ['🎬','Hasil akhir lebih dulu','Setiap pelajaran dibuka dengan menunjukkan hasil akhir dan menyebutkan tujuannya dengan lantang. Lalu Anda menunjukkan seluruh langkahnya di layar Anda dan membimbing siswa selangkah demi selangkah.'],
          ['📜','Dari pemain menjadi kreator','Biasanya pemain mengikuti aturan dunia. Di sini siswa yang menulisnya: resep, drop, perintah, lalu program Python yang membangun.'],
          ['🔍','Kesalahan adalah bagian dari proses','Saat dunia tidak merespons: <i>Apa yang saya lihat? Kenapa begitu? Apa yang akan saya coba? Berhasil tidak?</i> Pelajaran berisi pengecekan yang disengaja agar siswa menemukan penyebabnya sendiri.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Siswa memublikasikan karya mereka di <b>Kodland Sparks</b>, portofolio mereka, di setiap pelajaran. <b>Sparks AI</b> memberi ide dan skenario pengujian, tetapi siswa yang memutuskan apa yang diambil.' }
      ]},
      { id:'goals', e:'🎓', title:'Apa yang dicapai siswa', blocks:[
        { t:'p', html:'Di akhir kursus, siswa akan meraih pencapaian berikut:' },
        { t:'cards', cols:2, items:[
          ['🧱','Membuat proyek','Lebih dari sembilan proyek di portofolio Kodland Sparks, ditambah proyek kelulusan yang orisinal.'],
          ['🐍','Python yang membangun','Menulis program Python yang memunculkan jembatan, menara, dan pola di dunia game. Perintah, argumen, variabel, tipe data, perulangan, kondisi, dan fungsi menjadi alat sehari-hari.'],
          ['📜','Aturan dunia','Dengan data pack, menetapkan hukumnya sendiri untuk Minecraft: resep, perintah khusus, timer, event, dan sistem skor.'],
          ['🌍','Generator dan game','Menulis algoritma yang membuat potongan dunia secara utuh, dan membangun mini-game untuk dimainkan orang lain.'],
          ['🚀','Membawa ide ke Demo Day','Mengembangkan proyek dari konsep hingga presentasi di depan grup, dan menjelaskan cara kerja kodenya.'],
          ['🧠','Keterampilan untuk hidup','Kreativitas, kerja sama (menguji proyek teman), komunikasi, dan berpikir kritis: menemukan bug dan menilai jawaban Sparks AI alih-alih menyalinnya.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Pelajaran-pelajaran pertama', blocks:[
        { t:'p', html:'Modul 1, <b>“Kode Dunia. Program Pertama dan Hukum Dunia”</b>, diakhiri dengan proyek <b>“Monumen Kode”</b>. Dua pelajaran pertama membahas <b>hukum dunia dalam data pack</b>; program Python dimulai tepat setelahnya. Buka setiap pelajaran dan baca apa yang perlu Anda ketahui, hasil utamanya, peran Anda, dan hal-hal yang perlu diperhatikan.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'📜', h:'Pelajaran 1 — Jejak Pertama di Kode Dunia', p:'Pelajaran pertama kursus (8 kartu dan PR). Siswa menjalankan launcher, berkenalan dengan grup, mencoba latihan hukum, masuk ke dunia melalui Nether, membuat hukum pertama mereka — sebuah resep — di data pack, mengujinya, lalu memublikasikannya di Sparks. Setelah itu mereka merencanakan markas bersama Sparks AI dan membangunnya.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li><b>Data pack</b> adalah kumpulan hukum untuk dunia. Hukum dibuat di luar dunia, di studio launcher, dan dunia menjalankannya setiap kali Anda masuk.</li><li>Jenis-jenis hukum: <b>resep</b>, <b>drop</b>, <b>perintah</b> saat masuk, <b>pencapaian</b>. Hari ini: resep.</li><li>Alurnya: <b>Esc</b> dan keluar dari dunia sambil menyimpan → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → crafting table, item, hasil → <b>Save</b>.</li><li>Kode dunia dimasukkan di tab <b>Play</b>. Siswa membangun dalam creative mode.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>Semua siswa sudah menyimpan data pack dengan resep mereka sendiri sekitar pukul 00:45.</li><li>🏁 Data pack sudah <b>dipublikasikan di Sparks dan tautannya ada di tugas</b> (kartu “Tanda tangan di bawah hukum”, sekitar pukul 01:00). Kartu ini tidak pernah dipersingkat.</li><li>Siswa memberi nama sendiri pada item-nya, dan membuatnya di crafting table di dalam dunia.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Kenali grupnya selagi game terunduh; panggil nama siswa sepanjang pelajaran.</li><li>Sebutkan tujuannya dengan lantang: “Hari ini setiap orang akan membuat hukumnya sendiri untuk Minecraft, mengujinya di game, dan memublikasikannya di portofolio.”</li><li>Jangan menentukan resepnya: idenya harus berbeda-beda — itulah yang membuat proyeknya personal. Tanyakan: “Kenapa item ini? Siapa yang akan membutuhkannya?”</li><li><b>Pengecekan yang disengaja:</b> ambil satu item dari crafting table → hadiahnya hilang. Tanyakan kenapa, lalu gunakan empat pertanyaan. Puji siswa yang menemukan penyebabnya, bukan hanya yang berhasil pertama kali.</li></ul>'],
                 ['📌','Perhatikan','<ul><li>Data pack tidak tersimpan → salah satu dari tiga bagian formulir masih kosong.</li><li>Hukum tidak berfungsi → disimpan saat dunia sedang terbuka: keluar lalu masuk lagi.</li><li>Resep tidak bisa di-craft → susunan item tidak sama dengan di formulir, atau di-craft di inventaris, bukan di crafting table.</li><li>Tautan tidak bisa dibuka → “Who can see it?” tidak diatur ke <b>Everyone</b>: publikasikan lagi.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Sehari sebelumnya, kirim tautan launcher ke chat grup.</li><li>Coba sendiri seluruh alurnya: kode dunia → pantai → keluar sambil menyimpan → data pack dengan resep → kembali ke dunia → crafting table → hadiah → publikasikan di Sparks.</li><li>Kode dunia: <b>Welcome to KodlandCraft</b>.</li><li>PR: tambahkan satu hukum lagi (ubah resepnya, resep baru, atau perintah/drop), uji, publikasikan pembaruannya, dan kirim tautannya.</li></ul>']] },
          { tab:'M1L2', e:'🏘️', h:'Pelajaran 2 — Jalan Menuju Alun-Alun', p:'Siswa mempelajari perbedaan antara <b>perintah</b> dan <b>hukum</b>. Perintah di chat langsung mengubah dunia, tetapi hanya sekali; hukum di data pack diingat dan dijalankan oleh dunia itu sendiri. Mereka menambahkan dua jenis hukum baru ke data pack yang sama: <b>drop</b> dan <b>perintah saat masuk ke dunia</b>.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li>Perintah chat diawali garis miring: <code>/time set day</code>, <code>/give @s diamond 4</code>, <code>/effect give @s speed 15 1</code>.</li><li>Eksperimennya: efek speed selama 15 detik berakhir, dan dunia “lupa” perintahnya. Perintah diucapkan sekali; hukum berlaku selamanya.</li><li><b>Drop</b>: Edit → Add → <b>+ Drop</b> → blok → apa yang dijatuhkan → Save. Di <b>creative mode tidak ada yang jatuh</b> (momen yang disengaja): uji dengan <code>/gamemode survival</code>, lalu kembali dengan <code>/gamemode creative</code>.</li><li><b>Perintah saat masuk</b>: Add → <b>+ Command</b>, ditulis <b>tanpa garis miring</b> dan dengan <b>@a</b>, bukan @s. Perintah ini berjalan setiap kali Anda masuk ke dunia.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>Dua perintah chat berhasil (siang dan berlian) dan siswa bisa menjelaskan kenapa efek speed berakhir.</li><li>🏁 <b>Tautan ke data pack yang diperbarui dengan drop yang berfungsi</b> sudah ada di tugas sekitar pukul 00:45.</li><li>Ritual masuk dengan setidaknya dua perintah, diuji dengan masuk lagi, dan siswa memutuskan apa yang diambil dari saran Sparks.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Mulai dengan PR: 2–3 siswa menunjukkan hukum yang mereka tambahkan dan cara mereka mengujinya.</li><li>Jangan langsung mendikte perintahnya: biarkan mereka mencoba dulu dengan petunjuk, lalu buka perintah lengkapnya.</li><li>Sebelum drop dan ritual, tunjukkan singkat di layar Anda dari mana harus memulai.</li><li>Beri satu menit untuk mencari tahu kenapa tidak ada yang jatuh; jika tidak ada yang menemukannya, tunjukkan jawabannya di layar Anda.</li></ul>'],
                 ['📌','Perhatikan','<ul><li>Perintah chat “diam saja” → tidak ada garis miring, atau tata letak keyboard salah.</li><li>Drop menggantikan loot normal blok — itu memang seharusnya.</li><li>Siswa harus terus bekerja di <b>satu</b> data pack (yang berisi resep).</li><li>Perintah ritual tidak berfungsi → hapus garis miring, gunakan @a, simpan, lalu masuk lagi ke dunia.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Dunia yang sama dengan Pelajaran 1: siswa membukanya di tab <b>Play</b> dan muncul di markas mereka. Jika dunianya hilang, dunia bisa dibuat lagi dengan kodenya.</li><li>Cek drop dan perintahnya di data pack Anda sendiri sebelum pelajaran — drop hanya di survival mode.</li><li>PR: satu hukum lagi di data pack yang sama, diuji, dipublikasikan, tautannya dikirim.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Teacher Note pertama di setiap pelajaran berisi rencana lengkapnya: ringkasan, hasil utama, durasi setiap kartu, peran Anda, dan risikonya. Pelajaran 1 juga dilengkapi video persiapan. <b>Baca semua Teacher Notes sebelum pelajaran.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Pelajari pelajarannya di Backoffice', blocks:[
        { t:'p', html:'Sebelum evaluasi, buka kursusnya di Backoffice dan baca pelajaran-pelajarannya sesuai kecepatan Anda — semua kartu aktivitas dan Teacher Notes ada di sana. Tidak ada batas waktu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2242', e:'📘', title:'Buka kursus di Backoffice', small:'[2242] Minecraft CraftForge Intermediate — pelajaran dan Teacher Notes-nya' },
        { t:'callout', kind:'warn', e:'🔄', html:'Konten pelajaran di Backoffice akan terus diperbarui berdasarkan umpan balik dari siswa dan tutor. Setiap kali ada perubahan, Anda akan diberi tahu lebih dulu agar bisa menyiapkan pelajarannya.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Sisi teknis pelajaran',
    desc:'Kodland Launcher, awal pelajaran yang kuat, publikasi data pack di Sparks, dan masalah yang paling sering muncul.',
    obj:'Pelajari apa yang membuat pelajaran Minecraft CraftForge berjalan lancar secara teknis: Kodland Launcher, pengecekan launcher sebelum materi, menit-menit terakhir untuk publikasi dan pamer karya, tempat siswa mendapatkan tautan data pack-nya, dan solusi untuk masalah yang paling sering muncul.',
    needs:['mcPublish'],
    offer:[['🟩','Mengunduh, menginstal, dan masuk ke Kodland Launcher.'],['🚀','Melakukan pengecekan launcher sebelum materi, dan memulai dengan hasil akhir.'],['📤','Memastikan setiap siswa memublikasikan data pack dan mengirim tautannya.'],['🛠️','Mengatasi masalah launcher, data pack, dan perintah yang paling sering muncul.']],
    sections:[
      { id:'focus', e:'🎯', title:'3 hal yang membuat pelajaran berhasil', blocks:[
        { t:'p', html:'Inilah fokus utama yang ditetapkan tim produk untuk kursus-kursus Minecraft. Buka satu per satu:' },
        { t:'acc', items:[
          ['🎬','Tunjukkan hasil akhir lebih dulu — dan kenapa membuat berbeda dari bermain','<p>Di menit-menit pertama, <b>tunjukkan hasil akhirnya</b> dan sebutkan apa yang akan dipelajari siswa hari ini.</p><ul><li>Sebutkan tujuannya dengan lantang, misalnya: “Hari ini setiap orang akan membuat hukumnya sendiri untuk Minecraft, mengujinya di game, dan memublikasikannya.”</li><li>Jelaskan bahwa membangun proyek <b>berbeda dari sekadar bermain</b>: biasanya semua aturan dibuat orang lain; di sini siswa yang membuatnya, dan dunia menjalankan ide mereka.</li><li>Tanyakan kepada satu atau dua siswa: “Pernahkah kalian mengubah aturan sebuah game? Bagaimana caranya?”</li></ul>'],
          ['🟩','Pengecekan login dan launcher dilakukan sebelum materi','<p>Lakukan pengecekan koneksi dan launcher <b>sebelum</b> bagian materi, agar game terunduh selagi Anda berkenalan dengan grup.</p><ul><li>Koneksi: satu menit — kamera, mikrofon, “Halo!”.</li><li>Launcher: kirim tautannya, tunjukkan cara masuk di layar Anda, minta siswa mengetik “+” di chat saat bilah hijau muncul.</li><li>Jangan menunggu unduhan selesai, dan jangan menahan grup karena satu atau dua “−”: bantu mereka saat kerja mandiri (studio hukum atau markas).</li><li>Mulai Pelajaran 2: “Buka launcher dan jalankan dunia kalian — biarkan memuat selagi kita mengobrol.”</li></ul>'],
          ['⏱️','Jaga 7–10 menit terakhir','<p><b>7–10 menit</b> terakhir dipakai untuk publikasi, pamer karya, dan umpan balik — dan tidak boleh diberikan untuk membangun.</p><ul><li>Gunakan batas waktu yang tegas: peringatan dua menit, lalu “Stop, lepaskan tangan dari keyboard. Saatnya pamer karya!”, dan langsung sebut nama siswa pertama.</li><li>Saat pamer karya, siswa menunjukkan hukumnya beraksi (meng-craft item secara langsung, menghancurkan blok, masuk lagi ke dunia); grup memberi umpan balik: nama + detail.</li><li>Akhiri dengan rekap, refleksi, pelajaran berikutnya, dan PR — bagian ini tidak pernah dipersingkat.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Siswa membuka Minecraft melalui <b>Kodland Launcher</b>: launcher ini mengunduh game, membuka dunia kursus, dan menjadi tempat mereka membuat data pack dan memublikasikannya di Sparks. Launcher harus sudah terinstal dan siap di komputer Anda sebelum pelajaran pertama.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Kredensial Anda:</b> untuk mengunduh dan masuk ke launcher, Anda menggunakan <b>kredensial yang sama dengan Kodland Sparks</b>. Kredensial ini diberikan oleh <b>departemen Operasional atau Pengajaran</b>. Siswa masuk dengan akun Kodland mereka sendiri — mereka tidak perlu akun baru.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Halaman unduhan dan panduan resmi', small:'portfolio.kodland.org/launcher/download — Windows dan Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Unduh installer-nya.</li><li>Buka file yang sudah diunduh.</li><li>Di layar peringatan berwarna biru, klik <b>More info → Run anyway</b>, lalu ikuti installer-nya.</li></ol>'],
          ['🍎','macOS 13 atau lebih baru','<ol><li>Unduh file untuk prosesor Anda (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Buka file yang sudah diunduh dan seret <b>Kodland Launcher</b> ke <b>Applications</b>. Jangan membukanya dari jendela itu.</li><li>Buka <b>Terminal</b>, tempel baris di bawah ini dan tekan Return. Tidak muncul apa-apa itu normal.</li><li>Buka launcher dari <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Masuk','Klik <b>Sign in</b>. Halaman browser akan terbuka: klik <b>Sign in with Kodland</b> — satu tombol, tanpa kata sandi. Jika browser tidak terbuka, gunakan tautan di bawah tombol untuk mendapatkan kode pendek (berlaku lima menit).'],
          ['Unduh game','Launcher mengunduh game dalam beberapa tahap (sekitar 550 MB; Anda memerlukan ruang kosong sekitar 1,8 GB). Biarkan berjalan.'],
          ['Play','Saat muncul keterangan semuanya selesai, tekan <b>Play</b>. Peluncuran pertama bisa memakan waktu hingga satu menit. Kode dunia dimasukkan di tab <b>Play</b>.'],
          ['Pembaruan','Jika launcher tidak memperbarui diri, instal versi terbaru dari halaman unduhan di atas versi lama. Dunia tetap aman.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Tautan unduhan langsung (yang ada di kartu pelajaran)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Saat launcher siswa tidak berfungsi', blocks:[
        { t:'p', html:'Di Pelajaran 1, hampir pasti ada siswa yang kesulitan menjalankan launcher. Satu masalah tidak boleh menghentikan grup: <b>beri tugas singkat dulu kepada siswa lain</b>, lalu hubungi siswa tersebut. Minta ia membagikan layarnya dan pandu dengan suara. Jika tidak selesai dalam beberapa menit: “Ikuti layar saya dulu, nanti saya kembali.” Waktu terbaik untuk kembali membantunya adalah saat kerja mandiri — studio hukum atau markas.' },
        { t:'acc', open:false, items:[
          ['🍎','Mac tidak mau membuka launcher','Jalankan baris Terminal dari kartu pertama dan buka lagi launcher-nya.'],
          ['🪟','Windows bertanya apakah file boleh dibuka','<b>More info → Run anyway</b>.'],
          ['🔑','Siswa tidak bisa masuk','Login Kodland yang sama dengan untuk pelajaran. Jendela masuk terbuka di browser dan sering tersembunyi di balik jendela lain.'],
          ['⏳','Unduhan game berhenti','Cek internet, tutup launcher lalu buka lagi — unduhan akan berlanjut.'],
          ['👀','Launcher tidak pernah berhasil jalan','Siswa mengikuti layar Anda, menjawab di chat, dan saat pamer karya menceritakan hukum apa yang ingin ia buat. Setelah pelajaran, bantu ia menjalankan launcher agar bisa mengerjakan PR sendiri.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Jika beberapa siswa mengalami error yang sama, tunjukkan solusinya sekali untuk semua — dan tetap jaga kontak dengan siswa lain lewat pertanyaan singkat di chat setiap menit.' }
      ]},
      { id:'req', e:'💻', title:'Persyaratan komputer', blocks:[
        { t:'p', html:'Inilah yang dibutuhkan siswa untuk Minecraft CraftForge. Informasi ini berguna saat siswa kesulitan menginstal atau menjalankan game:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Komputer dan sistem','Komputer desktop atau laptop dengan <b>Windows 10/11 (64-bit)</b> atau <b>macOS 13 atau lebih baru</b>. Mac: hanya Apple Silicon (M1 atau lebih baru).'],
          ['🧠','Memori dan prosesor','<b>RAM 8 GB</b> dengan kartu grafis terpisah, atau <b>12 GB</b> dengan grafis terintegrasi. Prosesor <b>4 inti</b>.'],
          ['🎮','Grafis dan disk','Kartu grafis yang mendukung <b>Vulkan 1.3</b> dengan memori video <b>2 GB</b>. Ruang disk kosong <b>5 GB</b>.'],
          ['🎧','Koneksi dan perlengkapan','Koneksi internet stabil yang kuat untuk panggilan video. Mouse dua tombol, keyboard, headset dengan mikrofon, dan kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Memublikasikan data pack di Kodland Sparks', blocks:[
        { t:'p', html:'Sparks adalah portofolio siswa: semua proyek kursus disimpan di sana, dan asisten AI juga ada di sana. Siswa kembali ke Sparks di setiap pelajaran untuk memublikasikan karya dan meminta petunjuk. Data pack dipublikasikan <b>dari editor launcher</b>:' },
        { t:'steps', items:[
          ['Publish, di samping Save','Di launcher, <b>Create → Data packs → Edit</b> pada data pack, lalu <b>Publish</b>, di samping tombol ungu <b>Save</b>.'],
          ['Nama dan “Who can see it?” → Everyone','Di “Publish to your profile”, tulis namanya dan pilih <b>Everyone</b>: hanya dengan begitu tautannya bisa dibuka orang lain tanpa login ke akun siswa.'],
          ['Copy link','Saat muncul “Published! It is on your profile.”, klik <b>Copy link</b>, lalu <b>Done</b>, dan tempel tautannya di kartu pelajaran di platform (“Tautan ke Hukum saya di Kodland Sparks”).'],
          ['Tautannya hilang?','<b>Open on Sparks</b> (di dialog atau di bagian atas editor) membuka halaman proyek di profil siswa: tautannya adalah alamat di bilah browser.'],
          ['Dua langkah yang berbeda','Memublikasikan di Sparks dan mengirim tautan di platform Kodland adalah <b>dua langkah yang berbeda</b>. Cek di Backoffice bahwa tautannya benar-benar masuk.'],
          ['Setiap pembaruan dipublikasikan lagi','Saat siswa menambahkan hukum (PR, Pelajaran 2), ia menyimpan, menguji, lalu memublikasikan pembaruannya lagi.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simulasi', title:'Publikasikan data pack di Kodland Sparks', text:'Replika Kodland Launcher dan kartu pelajaran: sebagai siswa, Anda memublikasikan data pack, menyalin tautannya, menempelkannya di kartu di platform, memperbaiki tautan yang tidak bisa dibuka, dan menemukan tautan yang belum disalin. Waktunya sekitar 4 menit. Evaluasi modul terbuka setelah Anda selesai.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Saat ada yang tidak berjalan', blocks:[
        { t:'acc', open:false, items:[
          ['💾','Data pack tidak tersimpan','Pastikan ketiga bagian formulir sudah diisi: tempat item dibuat, apa yang dimasukkan, dan apa yang dihasilkan.'],
          ['🔁','Hukum tidak berfungsi setelah diedit','Klik <b>Save</b>, keluar dari dunia, lalu masuk lagi — hukum diterapkan saat Anda masuk.'],
          ['🧩','Resep tidak bisa di-craft','Susunan item tidak sama dengan di formulir, atau siswa meng-craft di inventaris, bukan di crafting table.'],
          ['⌨️','Perintah chat “diam saja”','Cek garis miring di awal dan tata letak keyboard: garis miringnya harus yang Latin. Spasi seperti di petunjuk.'],
          ['💎','Drop tidak jatuh','Di creative mode tidak ada yang jatuh: <code>/gamemode survival</code>, lalu hancurkan tepat blok yang dipilih di formulir. Setelah itu, <code>/gamemode creative</code>.'],
          ['⚡','Perintah dari data pack tidak berfungsi','Hapus garis miring di awal baris dan gunakan <b>@a</b>, seperti di kartu. Simpan, lalu masuk lagi ke dunia.'],
          ['🔒','Tautan tidak bisa dibuka','“Who can see it?” tidak diatur ke <b>Everyone</b>. Publikasikan lagi dengan Everyone — tautannya lalu bisa dibuka tanpa login.'],
          ['🔗','Siswa menutup jendela tanpa menyalin tautan','Klik <b>Open on Sparks</b> di bagian atas editor data pack: halaman proyek terbuka, dan tautannya adalah alamat di bilah browser.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Daftar periksa teknis untuk setiap pelajaran', blocks:[
        { t:'check', title:'✅ Daftar periksa teknis saya', groups:[
          { h:'☑️ Sebelum pelajaran', items:['Saya sudah membaca semua Teacher Notes pelajaran dan menonton video persiapannya.','Launcher saya sudah terinstal dan sudah login, dan saya sudah mencoba alur pelajarannya di data pack saya sendiri.','Sebelum Pelajaran 1, saya sudah mengirim tautan launcher ke chat grup.'] },
          { h:'🎬 Selama pelajaran', items:['Saya melakukan pengecekan koneksi dan launcher sebelum materi.','Saya menunjukkan hasil akhir dan menyebutkan tujuan pelajaran di menit-menit pertama.'] },
          { h:'📤 Di akhir pelajaran', items:['Saya menjaga 7–10 menit terakhir untuk publikasi, pamer karya, dan umpan balik.','Semua siswa sudah mengirim tautan data pack yang dipublikasikan di kartu pelajaran.','Saya membuka beberapa tautan untuk memastikan tautannya berfungsi.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Untuk siapa Minecraft CraftForge Intermediate, dan berapa lama setiap pelajarannya?',
      o:['Siswa usia 8–9 tahun, dengan pelajaran 60 menit.','Siswa usia 10–12 tahun, dengan pelajaran grup 90 menit.','Siswa usia 13–17 tahun, dengan pelajaran 60 menit.'],
      a:1, e:'Intermediate ditujukan untuk siswa usia 10–12 tahun: 40 pelajaran grup, masing-masing 90 menit.' },
    { q:'Bahasa pemrograman apa yang digunakan siswa di kursus ini?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Siswa menulis program Python yang membangun di dunia Minecraft.' },
    { q:'Apa itu data pack di kursus ini?',
      o:['File berisi screenshot bangunan siswa.','Kumpulan hukum untuk dunia (resep, drop, perintah…) yang dijalankan Minecraft setiap kali Anda masuk.','Paket dunia siap pakai untuk diunduh.'],
      a:1, e:'Data pack adalah kumpulan hukum: dunia menjalankannya setiap kali siswa masuk.' },
    { q:'Apa yang dibawa siswa setelah menyelesaikan kursus?',
      o:['Ujian akhir tertulis.','Lebih dari sembilan proyek di portofolio Kodland Sparks dan proyek kelulusan orisinal yang dipresentasikan di Demo Day.','Hanya data pack dari Pelajaran 1.'],
      a:1, e:'Lebih dari sembilan proyek di portofolio dan sebuah proyek orisinal, dari ide hingga Demo Day.' },
    { q:'Bagaimana seharusnya siswa menggunakan Sparks AI?',
      o:['Menyalin jawabannya apa adanya.','Menilai sarannya dan memutuskan apa yang diambil.','Tidak pernah menggunakannya.'],
      a:1, e:'Sparks memberi ide dan skenario pengujian; siswa menilainya alih-alih menyalinnya.' }
  ],
  m2:[
    { q:'Kapan Anda melakukan pengecekan koneksi dan launcher?',
      o:['Di awal pelajaran, sebelum materi, agar game terunduh selagi Anda berkenalan dengan grup.','Di tengah pelajaran, saat siswa membutuhkan Minecraft.','Di akhir, agar tidak menyita waktu pelajaran.'],
      a:0, e:'Sebelum materi: game terunduh selagi Anda berkenalan dengan grup.' },
    { q:'Kredensial apa yang Anda gunakan untuk mengunduh dan masuk ke Kodland Launcher?',
      o:['Akun baru yang Anda buat sendiri.','Kredensial yang sama dengan Kodland Sparks, yang diberikan oleh departemen Operasional atau Pengajaran.','Akun milik siswa.'],
      a:1, e:'Launcher menggunakan kredensial Kodland Sparks Anda, yang diberikan oleh departemen Operasional atau Pengajaran.' },
    { q:'Dari mana siswa mendapatkan tautan ke data pack yang sudah dipublikasikan?',
      o:['Dari komentar di launcher.','Di “Publish to your profile”: Copy link (atau Open on Sparks lalu salin alamat dari bilah browser).','Dari tab Play di launcher.'],
      a:1, e:'Copy link tepat setelah memublikasikan; jika tautannya hilang, Open on Sparks menampilkan halaman proyek, dan alamat halaman itulah tautannya.' },
    { q:'Untuk apa 7–10 menit terakhir pelajaran?',
      o:['Waktu tambahan untuk membangun.','Publikasi, pamer karya, dan umpan balik — ditambah rekap dan PR.','Bermain bebas.'],
      a:1, e:'Jaga menit-menit terakhir: publikasi, pamer karya dengan umpan balik, dan rekap.' },
    { ctx:'Seorang siswa sudah memublikasikan data pack, tetapi tautannya tidak bisa Anda buka.',
      q:'Apa penyebab yang paling mungkin, dan bagaimana solusinya?',
      o:['“Who can see it?” tidak diatur ke Everyone: publikasikan lagi dengan Everyone.','Data pack-nya rusak: buat yang baru dari awal.','Tautan baru bisa dibuka keesokan harinya.'],
      a:0, e:'Hanya dengan Everyone tautannya bisa dibuka tanpa login. Memublikasikan lagi dengan Everyone akan memperbaikinya.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Semua modul selesai!',
  html: `<p>Anda hampir selesai! Kembalilah ke halaman pelatihan LMS tempat Anda membuka pelatihan ini. Tes DST tersedia tepat di bawah pelatihan.</p>
    <p>👉 <b>Anda wajib mengerjakan dan lulus tes DST agar pelatihan dianggap selesai dengan sukses.</b> Jika Anda tidak mengerjakan tes DST, pelatihan akan tetap berstatus belum selesai dan bisa kedaluwarsa.</p>
    <p>Nilai minimum kelulusan adalah <b>80%</b>.</p>
    <p>Semoga sukses! ❤️</p>`,
  nexts: [
    ['📒', '<b>Sebelum setiap pelajaran:</b> baca Teacher Notes di Backoffice dan coba alur pelajarannya di data pack Anda sendiri.'],
    ['🟩', '<b>Menit-menit pertama:</b> pengecekan koneksi dan launcher, lalu hasil akhir dan tujuan pelajaran.'],
    ['🔗', '<b>Tautannya:</b> Publish → Everyone → Copy link, lalu tempel di kartu pelajaran.'],
    ['⏱️', '<b>7–10 menit terakhir:</b> publikasi, pamer karya, dan umpan balik.']
  ]
};
