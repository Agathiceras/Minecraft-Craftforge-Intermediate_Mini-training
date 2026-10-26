/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2233 · TR] · TURKISH
   Translated from content-en.js (the base version). Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'tr' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM kurs eğitimi',
  footer: 'kodland · Yeni Eğitim Modeli · Kurs eğitimi',
  devLink: '🛠 Developer',
  logoSub: 'Yeni Eğitim Modeli',
  navHome: '← Ana sayfa',
  navBackModule: '← Modüle dön',
  moduleN: 'Modül {n}',
  badgeStart: 'Başla →',
  badgeLocked: '🔒 Önce Modül {n}’i tamamla',
  badgeDone: '✓ Tamamlandı · %{score}',
  progLabel: 'modül tamamlandı',
  progAllDone: 'Modüller tamamlandı 🎉',
  eyebrow: '{course} · Modül {n} / {total}',
  ctaTitle: 'Modül kontrolü',
  ctaText: '{n} kısa soru. Geçmek için %70 veya üzeri gerekir.',
  lockSim: '🔒 Kontrolü açmak için yukarıdaki simülasyonu tamamla.',
  startCheck: 'Kontrole başla →',
  retake: '🔁 Kontrolü tekrarla',
  qmeta: '{e} Modül {n} kontrolü · Soru {i} / {total}',
  fbRight: '✅ <b>Doğru!</b> ',
  fbWrong: '❌ <b>Tam olarak değil.</b> ',
  nextQuestion: 'Sonraki soru →',
  seeResult: 'Sonucumu gör →',
  passedTitle: 'Geçtin!',
  failTitle: 'Az kaldı',
  scoreLine: '<b>{n} sorudan {score}</b> tanesini doğru cevapladın.',
  failText: '%70 veya üzeri gerekiyor. Modülü tekrar gözden geçir ve yeniden dene — istediğin kadar tekrar edebilirsin.',
  nextUnlocked: '<b>Modül {n} · {title}</b> açıldı.',
  goModule: 'Modül {n}’e git →',
  allDoneText: 'Bu eğitimin iki modülünü de tamamladın.',
  seeNext: 'Sıradaki adımı gör →',
  reviewModule: '📖 Modülü gözden geçir',
  homeDoneTitle: 'Modüller tamamlandı!',
  homeDoneText: 'Son bir adım kaldı: LMS’teki eğitim sayfasında DST testi.',
  homeDoneBtn: 'Şimdi ne yapmalıyım →',
  doneBadge: '✓ Tamamlandı',
  doneBack: 'Modüllere dön',
  lockedTitle: 'Henüz kilitli',
  lockedModule: 'Önce Modül {n}’i tamamla.',
  lockedStep: 'Bunu açmak için önceki adımı tamamla.',
  ok: 'Tamam',
  linkOpen: 'Aç ↗',
  projPlay: '▶ Aç ↗',
  simOpen: '▶ Simülasyonu burada aç',
  simClose: '✕ Simülasyonu kapat',
  simNewTab: 'Yeni sekmede aç ↗',
  simDone: '✅ Simülasyon tamamlandı',
  simTodo: '○ Simülasyon bekliyor',
  checkTag: 'İşaretle',
  mythTag: 'Efsane',
  mythTap: 'Gerçeği görmek için dokun →',
  mythReality: 'Gerçek ✓',
  sortWrong: '✗ Tam olarak değil.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2233';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Kurs eğitimi · [2233]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: '10–12 yaş öğrenciler için: data pack’lerle Minecraft dünyasının yasalarını, Python programlarıyla da köprüler, kuleler ve koca dünyalar inşa eden kodlar yazarlar. İki modül: kursun içeriği ve derslerin teknik tarafı.',
  facts: [
    ['🧑‍💻', '<b>Kendi hızında.</b> İlerlemen bu tarayıcıda kaydedilir. Her modül kısa bir kontrolle biter.'],
    ['⚡', '<b>Uygulama dahil.</b> Bir data pack’in Kodland Sparks’ta nasıl yayınlandığını ve en sık karşılaşılan sorunları pratik yapman için bir simülasyon.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Başlamadan önce:</b> önce <b>Yeni Eğitim Modeli (EM) ana eğitimini</b> tamamla. Bu kurs eğitimi ondan sonra gelir ve orada gördüklerinin üzerine kurulur: Backoffice ve öğretmen notları (Teacher Notes), Follow Mode ile Classroom, Kodland Sparks turu ve ders kalitesi.' },
  { kind:'warn', e:'🔄', html:'<b>Backoffice’teki ders içerikleri sürekli güncellenir.</b> Dersler, öğrencilerden ve eğitmenlerden gelen geri bildirimlerle sürekli iyileştirilir. Endişelenme: bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'Kursun içeriği',
    desc:'Kursun genel bilgileri, öğrencinin kazanımları ve Modül 1’in ilk dersleri.',
    obj:'Minecraft CraftForge Intermediate’ın ilk derslerine hazırlan. Bu derslerde 10–12 yaş öğrenciler bir data pack içinde Minecraft dünyası için ilk yasalarını oluşturur — bir tarif, bir drop ve dünyaya girişte çalışan komutlar — ve bunları Kodland Sparks’ta yayınlar.',
    offer:[['🧱','Kursun genel bilgilerini ve öğrencinin kazanımlarını öğren.'],['📖','İlk derslerin her birinde ne olduğunu öğren.'],['📦','Data pack’in ne olduğunu ve öğrencilerin onunla nasıl çalıştığını anla.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Yaş','10–12'],['⏱️','Ders','90 dk'],['📚','Program','40 ders · 10 modül'],['🐍','Dil','Python']] },
        { t:'trio', items:[
          ['🎬','Önce sonuç','Her ders, bitmiş sonucu göstererek ve hedefi yüksek sesle söyleyerek açılır. Ardından tüm yolu kendi ekranında gösterir ve öğrencilere adım adım rehberlik edersin.'],
          ['📜','Oyuncudan yaratıcıya','Normalde oyuncu dünyanın kurallarına uyar. Burada öğrenci bu kuralları kendisi yazar: tarifler, droplar, komutlar ve ardından inşa eden Python programları.'],
          ['🔍','Hatalar sürecin bir parçasıdır','Dünya tepki vermediğinde: <i>Ne görüyorum? Neden böyle? Neyi deneyeceğim? İşe yaradı mı?</i> Derslerde, öğrencilerin nedeni kendilerinin bulması için planlı kontroller yer alır.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Öğrenciler her derste çalışmalarını portfolyoları olan <b>Kodland Sparks</b>’ta yayınlar. <b>Sparks AI</b> fikir ve test senaryoları önerir, ancak neyi alacağına öğrenci karar verir.' }
      ]},
      { id:'goals', e:'🎓', title:'Öğrencinin kazanımları', blocks:[
        { t:'p', html:'Kursun sonunda öğrenci şu kazanımlara ulaşır:' },
        { t:'cards', cols:2, items:[
          ['🧱','Projeler oluşturur','Kodland Sparks portfolyosunda dokuzdan fazla proje ve özgün bir mezuniyet projesi.'],
          ['🐍','İnşa eden Python','Oyun dünyasında köprüler, kuleler ve desenler oluşturan Python programları yazar. Komutlar, argümanlar, değişkenler, veri türleri, döngüler, koşullar ve fonksiyonlar gündelik araçlara dönüşür.'],
          ['📜','Dünyanın kuralları','Data pack’lerle Minecraft için kendi yasalarını belirler: tarifler, özel komutlar, zamanlayıcılar, olaylar ve puanlama.'],
          ['🌍','Üreteçler ve oyunlar','Dünyanın koca parçalarını (chunk) oluşturan algoritmalar yazar ve başkalarının oynayacağı mini oyunlar yapar.'],
          ['🚀','Bir fikri Demo Day’e taşır','Bir projeyi fikir aşamasından grup önünde bir sunuma kadar götürür ve kodun nasıl çalıştığını açıklar.'],
          ['🧠','Hayat becerileri','Yaratıcılık, takım çalışması (birbirinin projelerini test etmek), iletişim ve eleştirel düşünme: hataları bulmak ve Sparks AI’ın cevaplarını kopyalamak yerine değerlendirmek.']
        ]}
      ]},
      { id:'les', e:'📖', title:'İlk dersler', blocks:[
        { t:'p', html:'Modül 1, <b>“Dünyanın Kodu. İlk Programlar ve Dünya Yasaları”</b>, <b>“Kod Anıtı”</b> projesiyle biter. İlk iki ders <b>bir data pack içindeki dünya yasaları</b> hakkındadır; Python programları hemen ardından başlar. Her dersi aç ve bilmen gerekenleri, ana sonucu, rolünü ve dikkat edilmesi gerekenleri oku.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1D1', e:'📜', h:'1. Ders — Dünyanın Kodundaki İlk İz', p:'Kursun ilk dersi (8 kart ve ödev). Öğrenciler launcher’ı başlatır, grupla tanışır, yasa eğitmenini dener, Nether üzerinden dünyaya girer, bir data pack içinde ilk yasalarını — bir tarif — oluşturur, test eder ve Sparks’ta yayınlar. Ardından Sparks AI ile bir üs planlar ve onu inşa ederler.',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Data pack</b>, dünya için bir yasalar bütünüdür. Yasalar dünyanın dışında, launcher stüdyosunda oluşturulur ve dünya onları her girişte çalıştırır.</li><li>Yasa türleri: <b>tarif</b>, <b>drop</b>, girişte çalışan <b>komut</b>, <b>başarım</b>. Bugün: bir tarif.</li><li>Yol: <b>Esc</b> ve kaydederek dünyadan çık → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → çalışma masası, eşyalar, sonuç → <b>Save</b>.</li><li>Dünya kodu <b>Play</b> sekmesine girilir. Öğrenciler yaratıcı modda inşa eder.</li></ul>'],
                 ['🎯','Ana sonuç','<ul><li>Herkes yaklaşık 00:45’e kadar kendi tarifini içeren bir data pack kaydetmiştir.</li><li>🏁 Data pack <b>Sparks’ta yayınlanmış ve bağlantısı görevde</b> (“Yasanın altındaki imza” kartı, yaklaşık 01:00’e kadar). Bu kart asla kısaltılmaz.</li><li>Öğrenci eşyaya kendi adını vermiş ve onu dünyada bir çalışma masasında üretmiştir.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Oyun inerken grubu tanı; ders boyunca isimleri kullan.</li><li>Hedefi yüksek sesle söyle: “Bugün herkes Minecraft için kendi yasasını oluşturacak, oyunda test edecek ve portfolyosunda yayınlayacak.”</li><li>Tarifleri dikte etme: fikirler farklı olmalı — projeyi kişisel yapan budur. Sor: “Neden bu eşya? Kimin işine yarayacak?”</li><li><b>Planlı kontrol:</b> çalışma masasından bir eşyayı çıkar → ödül kaybolur. Nedenini sor, sonra dört soruyu kullan. Yalnızca ilk seferde başaranı değil, nedeni bulan öğrenciyi de öv.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Data pack kaydedilmiyor → formun üç bölümünden biri boş.</li><li>Yasa çalışmıyor → dünya açıkken kaydedilmiş: çık ve tekrar gir.</li><li>Tarif üretilmiyor → eşyalar formdaki düzende değil veya çalışma masası yerine envanterde üretilmiş.</li><li>Bağlantı açılmıyor → “Who can see it?” <b>Everyone</b> değildi: tekrar yayınla.</li></ul>'],
                 ['⚙️','Teknik konular','<ul><li>Bir gün önce launcher bağlantılarını grup sohbetine gönder.</li><li>Tüm yolu kendin dene: dünya kodu → kıyı → kaydederek çık → tarifli data pack → dünyaya geri dön → çalışma masası → ödül → Sparks’ta yayınla.</li><li>Dünya kodu: <b>Welcome to KodlandCraft</b>.</li><li>Ödev: bir yasa daha eklemek (tarifi değiştirmek, yeni bir tarif ya da bir komut/drop), test etmek, güncellemeyi yayınlamak ve bağlantıyı göndermek.</li></ul>']] },
          { tab:'M1D2', e:'🏘️', h:'2. Ders — Meydana Giden Yol', p:'Öğrenciler <b>komut</b> ile <b>yasa</b> arasındaki farkı öğrenir. Sohbete yazılan bir komut dünyayı hemen ama yalnızca bir kez değiştirir; data pack’teki bir yasa ise hatırlanır ve dünya tarafından kendiliğinden çalıştırılır. Aynı data pack’e iki yeni yasa türü eklerler: bir <b>drop</b> ve <b>dünyaya girişte çalışan komutlar</b>.',
            acc:[['📚','Bilmen gerekenler','<ul><li>Sohbet komutları eğik çizgiyle başlar: <code>/time set day</code>, <code>/give @s diamond 4</code>, <code>/effect give @s speed 15 1</code>.</li><li>Deney: 15 saniyelik hız sona erer ve dünya komutu “unutur”. Komut bir kez söylenir; yasa ise her zaman geçerlidir.</li><li><b>Drop</b>: Edit → Add → <b>+ Drop</b> → blok → ne düşeceği → Save. <b>Yaratıcı modda hiçbir şey düşmez</b> (planlı an): <code>/gamemode survival</code> ile test et, sonra <code>/gamemode creative</code> ile geri dön.</li><li><b>Girişte çalışan komutlar</b>: Add → <b>+ Command</b>; <b>eğik çizgi olmadan</b> ve @s yerine <b>@a</b> ile yazılır. Dünyaya her girişte çalışırlar.</li></ul>'],
                 ['🎯','Ana sonuç','<ul><li>İki sohbet komutu çalıştı (gündüz ve elmaslar) ve öğrenci hızın neden sona erdiğini açıklıyor.</li><li>🏁 <b>Çalışan bir drop içeren güncellenmiş data pack’in bağlantısı</b> yaklaşık 00:45’e kadar görevde.</li><li>En az iki komut içeren, yeniden girilerek test edilmiş bir giriş ritüeli; öğrenci Sparks’ın tavsiyesinden neyi alacağına karar vermiş.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Ödevle başla: 2–3 öğrenci hangi yasayı eklediğini ve nasıl kontrol ettiğini gösterir.</li><li>Komutları hemen dikte etme: önce ipucuyla denemelerine izin ver, sonra komutun tamamını aç.</li><li>Drop ve ritüelden önce nereden başlanacağını kendi ekranında kısaca göster.</li><li>Neden hiçbir şeyin düşmediğini bulmaları için bir dakika ver; kimse bulamazsa cevabı kendi ekranında göster.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Bir sohbet komutu “sessiz” → eğik çizgi yok veya klavye düzeni yanlış.</li><li>Drop, bloğun normal ganimetinin yerini alır — bu beklenen bir durumdur.</li><li>Öğrenciler <b>tek bir</b> data pack’te (tarifin olduğu) çalışmaya devam etmelidir.</li><li>Bir ritüel komutu çalışmıyor → eğik çizgiyi kaldır, @a kullan, kaydet ve dünyaya tekrar gir.</li></ul>'],
                 ['⚙️','Teknik konular','<ul><li>1. Dersle aynı dünya: öğrenciler onu <b>Play</b> sekmesinde açar ve üslerinde belirir. Dünya kaybolmuşsa kodla yeniden oluşturulabilir.</li><li>Dersten önce drop’u ve komutları kendi data pack’inde kontrol et — drop’u yalnızca hayatta kalma modunda.</li><li>Ödev: aynı data pack’e bir yasa daha, test edilmiş, yayınlanmış, bağlantısı gönderilmiş.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Her dersin ilk öğretmen notunda tam plan yer alır: özet, ana sonuç, her kartın zamanlaması, senin rolün ve riskler. 1. Derste ayrıca bir hazırlık videosu vardır. <b>Dersten önce tüm öğretmen notlarını oku.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve dersleri kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2233', e:'📘', title:'Kursu Backoffice’te aç', small:'[2233] Minecraft CraftForge Intermediate — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Derslerin teknik tarafı',
    desc:'Kodland Launcher, güçlü bir başlangıç, data pack’lerin Sparks’ta yayınlanması ve en sık karşılaşılan sorunlar.',
    obj:'Bir Minecraft CraftForge dersini teknik olarak neyin çalıştırdığını öğren: Kodland Launcher, içerikten önce launcher kontrolü, yayınlamaya ve çalışmaları göstermeye ayrılan son dakikalar, öğrencilerin data pack bağlantısını nereden aldığı ve en sık karşılaşılan sorunların çözümleri.',
    needs:['mcPublish'],
    offer:[['🟩','Kodland Launcher’ı indir, kur ve giriş yap.'],['🚀','Launcher kontrolünü içerikten önce yap ve derse sonuçla başla.'],['📤','Her öğrencinin data pack’i yayınlamasını ve bağlantıyı göndermesini sağla.'],['🛠️','En sık karşılaşılan launcher, data pack ve komut sorunlarını çöz.']],
    sections:[
      { id:'focus', e:'🎯', title:'Bir dersi başarılı kılan 3 nokta', blocks:[
        { t:'p', html:'Bunlar, ürün ekibinin Minecraft kursları için belirlediği odak alanlarıdır. Her birini aç:' },
        { t:'acc', items:[
          ['🎬','Önce sonucu göster — ve yaratmanın oynamaktan neden farklı olduğunu','<p>İlk dakikalarda <b>bitmiş sonucu göster</b> ve öğrencilerin bugün ne öğreneceğini söyle.</p><ul><li>Hedefi yüksek sesle söyle, örneğin: “Bugün herkes Minecraft için kendi yasasını oluşturacak, oyunda test edecek ve yayınlayacak.”</li><li>Bir proje inşa etmenin <b>sadece oynamaktan nasıl farklı olduğunu</b> açıkla: normalde tüm kuralları başkası koymuştur; burada öğrenci onları oluşturur ve dünya onun fikrini çalıştırır.</li><li>Bir veya iki öğrenciye sor: “Hiç bir oyunun kurallarını değiştirdiniz mi? Nasıl?”</li></ul>'],
          ['🟩','Giriş ve launcher kontrolü içerikten önce gelir','<p>Bağlantı ve launcher kontrolünü içerik bölümünden <b>önce</b> yap; böylece sen grubu tanırken oyun iner.</p><ul><li>Bağlantı: bir dakika — kamera, mikrofon, “Merhaba!”.</li><li>Launcher: bağlantıları gönder, girişi kendi ekranında göster, yeşil çubuk görününce sohbete “+” yazmalarını iste.</li><li>İndirmenin bitmesini bekleme ve bir iki “−” için grubu bekletme: bağımsız çalışma sırasında (yasa stüdyosu veya üs) onlara geri dön.</li><li>2. Dersten itibaren: “Launcher’ı açın ve dünyanızı başlatın — biz konuşurken yüklensin.”</li></ul>'],
          ['⏱️','Son 7–10 dakikayı koru','<p>Son <b>7–10 dakika</b> yayınlamaya, çalışmaları göstermeye ve geri bildirime ayrılır — inşa etmeye verilmez.</p><ul><li>Kesin duraklar kullan: iki dakika uyarısı, ardından “Durun, eller klavyeden çekilsin. Sunum zamanı!” ve hemen ilk öğrencinin adını söyle.</li><li>Sunumda öğrenciler yasayı iş başında gösterir (eşyayı canlı olarak üretir, bloğu kırar, dünyaya yeniden girer); grup geri bildirim verir: isim + ayrıntı.</li><li>Kapanış, yansıma, sonraki ders ve ödevle bitir — bunlar asla kısaltılmaz.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Öğrenciler Minecraft’ı <b>Kodland Launcher</b> üzerinden açar: oyunu indirir, kurs dünyasını açar ve data pack oluşturup Sparks’ta yayınladıkları yer de burasıdır. İlk dersinden önce bilgisayarında kurulu ve hazır olması gerekir.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Giriş bilgilerin:</b> launcher’ı indirmek ve giriş yapmak için <b>Kodland Sparks ile aynı giriş bilgilerini</b> kullanırsın. Bunlar sana <b>Operasyon veya Eğitim departmanı</b> tarafından sağlanır. Öğrenciler kendi Kodland hesaplarıyla giriş yapar — yeni bir hesaba ihtiyaçları yoktur.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'İndirme sayfası ve resmi rehber', small:'portfolio.kodland.org/launcher/download — Windows ve Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Kurulum dosyasını indir.</li><li>İndirilen dosyayı aç.</li><li>Mavi uyarı ekranında <b>More info → Run anyway</b>’e tıkla, ardından kurulum adımlarını izle.</li></ol>'],
          ['🍎','macOS 13 veya üzeri','<ol><li>İşlemcine uygun dosyayı indir (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>İndirilen dosyayı aç ve <b>Kodland Launcher</b>’ı <b>Applications</b> klasörüne sürükle. O pencereden açma.</li><li><b>Terminal</b>’i aç, aşağıdaki satırı yapıştır ve Return’e bas. Hiçbir çıktı olmaması normaldir.</li><li>Launcher’ı <b>Applications</b> klasöründen aç.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Giriş yap','<b>Sign in</b>’e tıkla. Bir tarayıcı sayfası açılır: <b>Sign in with Kodland</b>’e tıkla — tek bir düğme, şifre yok. Tarayıcı açılmazsa, kısa bir kod almak için düğmenin altındaki bağlantıyı kullan (beş dakika geçerlidir).'],
          ['Oyunu indir','Launcher oyunu birkaç adımda indirir (yaklaşık 550 MB; yaklaşık 1,8 GB boş alan gerekir). Çalışmaya devam etmesine izin ver.'],
          ['Oyna','Her şeyin tamamlandığını söylediğinde <b>Play</b>’e bas. İlk açılış bir dakikaya kadar sürebilir. Dünya kodu <b>Play</b> sekmesine girilir.'],
          ['Güncellemeler','Launcher güncellenmezse, indirme sayfasından en son sürümü eskisinin üzerine kur. Dünyalar yerinde kalır.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Doğrudan indirme bağlantıları (ders kartındakiler)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Bir öğrencinin launcher’ı çalışmadığında', blocks:[
        { t:'p', html:'1. Derste birinin launcher’ı başlatırken sorun yaşaması neredeyse kesindir. Tek bir sorun grubu durdurmamalı: <b>önce diğerlerine kısa bir görev ver</b>, ardından öğrenciyle ilgilen. Ekranını paylaşmasını iste ve ona sesli olarak rehberlik et. Birkaç dakikada çözülmezse: “Şimdilik benim ekranımı takip et, birazdan sana döneceğim.” Geri dönmek için en iyi an bağımsız çalışmadır — yasa stüdyosu veya üs.' },
        { t:'acc', open:false, items:[
          ['🍎','Mac launcher’ı açmıyor','İlk karttaki Terminal satırını çalıştır ve launcher’ı yeniden aç.'],
          ['🪟','Windows dosyanın açılıp açılmayacağını soruyor','<b>More info → Run anyway</b>.'],
          ['🔑','Öğrenci giriş yapamıyor','Derslerdeki Kodland girişinin aynısı. Giriş penceresi tarayıcıda açılır ve çoğu zaman diğer pencerelerin arkasında kalır.'],
          ['⏳','Oyunun indirilmesi durdu','İnterneti kontrol et, launcher’ı kapatıp yeniden aç — indirme kaldığı yerden devam eder.'],
          ['👀','Launcher hiç çalışmadı','Öğrenci senin ekranını takip eder, sohbette cevap verir ve sunumda hangi yasayı oluşturacağını anlatır. Ödevi kendi başına yapabilmesi için dersten sonra launcher’ı açmasına yardım et.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Birkaç öğrencide aynı hata varsa, çözümü herkese bir kez göster — ve diğerleriyle her dakika sohbette kısa bir soruyla iletişimi sürdür.' }
      ]},
      { id:'req', e:'💻', title:'Bilgisayar gereksinimleri', blocks:[
        { t:'p', html:'Bir öğrencinin Minecraft CraftForge için ihtiyaç duyduğu şeyler bunlardır. Bir öğrenci oyunu kurarken veya çalıştırırken sorun yaşadığında işe yarar:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Bilgisayar ve sistem','<b>Windows 10/11 (64 bit)</b> veya <b>macOS 13 ya da üzeri</b> yüklü masaüstü ya da dizüstü bilgisayar. Mac: yalnızca Apple Silicon (M1 veya daha yeni).'],
          ['🧠','Bellek ve işlemci','Harici ekran kartıyla <b>8 GB RAM</b> veya dahili grafikle <b>12 GB</b>. <b>4 çekirdekli</b> bir işlemci.'],
          ['🎮','Grafik ve disk','<b>Vulkan 1.3</b> destekli ve <b>2 GB</b> video belleğine sahip bir ekran kartı. <b>5 GB</b> boş disk alanı.'],
          ['🎧','Bağlantı ve ekipman','Görüntülü görüşmeleri kaldırabilecek stabil bir internet bağlantısı. İki tuşlu fare, klavye, mikrofonlu kulaklık ve kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Data pack’i Kodland Sparks’ta yayınlama', blocks:[
        { t:'p', html:'Sparks öğrencilerin portfolyosudur: kursun tüm projeleri orada saklanır ve yapay zeka yardımcısı da oradadır. Öğrenciler yayınlamak ve ipucu istemek için her derste ona geri döner. Data pack <b>launcher düzenleyicisinden</b> yayınlanır:' },
        { t:'steps', items:[
          ['Save’in yanındaki Publish','Launcher’da data pack’in üzerinde <b>Create → Data packs → Edit</b>, ardından mor <b>Save</b> düğmesinin yanındaki <b>Publish</b>.'],
          ['Ad ve “Who can see it?” → Everyone','“Publish to your profile” penceresinde adı yaz ve <b>Everyone</b>’ı seç: bağlantı ancak bu şekilde, öğrencinin hesabına giriş yapmadan başkaları için de açılır.'],
          ['Copy link','“Published! It is on your profile.” mesajı görününce <b>Copy link</b>’e, ardından <b>Done</b>’a tıkla ve bağlantıyı platformdaki ders kartına yapıştır (“Kodland Sparks’taki Yasamın bağlantısı”).'],
          ['Bağlantıyı mı kaybettin?','<b>Open on Sparks</b> (pencerede veya düzenleyicinin üstünde), öğrencinin profilindeki proje sayfasını açar: bağlantı, tarayıcı çubuğundaki adrestir.'],
          ['İki farklı adım','Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek <b>iki farklı adımdır</b>. Bağlantıların gerçekten ulaştığını Backoffice’te kontrol et.'],
          ['Her güncelleme yeniden yayınlanır','Öğrenci bir yasa eklediğinde (ödev, 2. Ders) kaydeder, test eder ve güncellemeyi yeniden yayınlar.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simülasyon', title:'Kodland Sparks’ta bir data pack yayınla', text:'Kodland Launcher’ın ve ders kartının bir kopyası: öğrenci olarak bir data pack yayınlar, bağlantısını kopyalar, platformdaki karta yapıştırır, açılmayan bir bağlantıyı düzeltir ve kopyalanmamış bir bağlantıyı bulursun. Yaklaşık 4 dakika sürer. Bitirdiğinde modül kontrolü açılır.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Bir şey ters gittiğinde', blocks:[
        { t:'acc', open:false, items:[
          ['💾','Data pack kaydedilmiyor','Formun üç bölümünün de dolu olduğunu kontrol et: eşyanın nerede üretildiği, içine ne girdiği ve ne çıktığı.'],
          ['🔁','Yasa bir düzenlemeden sonra çalışmıyor','<b>Save</b>’e tıkla, dünyadan çık ve tekrar gir — yasalar dünyaya girerken uygulanır.'],
          ['🧩','Tarif üretilmiyor','Eşyalar formdaki düzende değil veya öğrenci çalışma masası yerine envanterde üretim yapıyor.'],
          ['⌨️','Bir sohbet komutu “sessiz”','Baştaki eğik çizgiyi ve klavye düzenini kontrol et: eğik çizgi Latin klavyedeki olmalı. Boşluklar ipucundaki gibi olmalı.'],
          ['💎','Drop düşmüyor','Yaratıcı modda hiçbir şey düşmez: <code>/gamemode survival</code>, ardından tam olarak formda seçilen bloğu kır. Sonra <code>/gamemode creative</code>.'],
          ['⚡','Data pack’teki bir komut çalışmıyor','Satırın başındaki eğik çizgiyi kaldır ve karttaki gibi <b>@a</b> kullan. Kaydet ve dünyaya tekrar gir.'],
          ['🔒','Bağlantı açılmıyor','“Who can see it?” <b>Everyone</b> değildi. Everyone ile tekrar yayınla — bağlantı artık giriş yapmadan açılır.'],
          ['🔗','Öğrenci bağlantıyı kopyalamadan pencereyi kapattı','Data pack düzenleyicisinin üstündeki <b>Open on Sparks</b>’a tıkla: proje sayfası açılır ve bağlantı, tarayıcı çubuğundaki adrestir.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Her ders için teknik kontrol listesi', blocks:[
        { t:'check', title:'✅ Teknik kontrol listem', groups:[
          { h:'☑️ Dersten önce', items:['Dersin tüm öğretmen notlarını okudum ve hazırlık videosunu izledim.','Launcher’ım kurulu ve giriş yapılmış durumda; dersin yolunu kendi data pack’imde denedim.','1. Dersten önce launcher bağlantılarını grup sohbetine gönderdim.'] },
          { h:'🎬 Ders sırasında', items:['Bağlantı ve launcher kontrolünü içerikten önce yaptım.','İlk dakikalarda bitmiş sonucu gösterdim ve dersin hedefini söyledim.'] },
          { h:'📤 Dersin sonunda', items:['Son 7–10 dakikayı yayınlamaya, çalışmaları göstermeye ve geri bildirime ayırdım.','Herkes yayınlanan data pack’in bağlantısını ders kartına gönderdi.','Çalıştıklarını kontrol etmek için bazı bağlantıları açtım.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Minecraft CraftForge Intermediate kimler içindir ve her ders ne kadar sürer?',
      o:['8–9 yaş öğrenciler için, 60 dakikalık dersler.','10–12 yaş öğrenciler için, 90 dakikalık grup dersleri.','13–17 yaş öğrenciler için, 60 dakikalık dersler.'],
      a:1, e:'Intermediate, 10–12 yaş öğrenciler içindir: grupla yapılan 90 dakikalık 40 ders.' },
    { q:'Öğrenciler kursta hangi programlama dilini kullanır?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Öğrenciler Minecraft dünyasında inşa eden Python programları yazar.' },
    { q:'Bu kursta data pack nedir?',
      o:['Öğrencinin yapılarının ekran görüntülerini içeren bir dosya.','Minecraft’ın her girişte çalıştırdığı, dünya için bir yasalar bütünü (tarifler, droplar, komutlar…).','İndirilecek hazır dünyalardan oluşan bir paket.'],
      a:1, e:'Data pack bir yasalar bütünüdür: öğrenci dünyaya her girdiğinde dünya onları çalıştırır.' },
    { q:'Öğrenci kurstan neyle ayrılır?',
      o:['Yazılı bir final sınavıyla.','Kodland Sparks portfolyosunda dokuzdan fazla proje ve Demo Day’de sunulan özgün bir mezuniyet projesiyle.','Yalnızca 1. Dersteki data pack ile.'],
      a:1, e:'Portfolyoda dokuzdan fazla proje ve fikirden Demo Day’e taşınan özgün bir proje.' },
    { q:'Öğrenciler Sparks AI’ı nasıl kullanmalıdır?',
      o:['Cevaplarını olduğu gibi kopyalamalıdır.','Önerilerini değerlendirmeli ve neyi alacaklarına karar vermelidir.','Hiç kullanmamalıdır.'],
      a:1, e:'Sparks fikir ve test senaryoları önerir; öğrenci bunları kopyalamak yerine değerlendirir.' }
  ],
  m2:[
    { q:'Bağlantı ve launcher kontrolünü ne zaman yaparsın?',
      o:['Dersin başında, içerikten önce; böylece sen grubu tanırken oyun iner.','Dersin ortasında, öğrencilerin Minecraft’a ihtiyacı olduğunda.','Sonunda, dersten zaman almasın diye.'],
      a:0, e:'İçerikten önce: sen grubu tanırken oyun iner.' },
    { q:'Kodland Launcher’ı indirmek ve giriş yapmak için hangi giriş bilgilerini kullanırsın?',
      o:['Kendi oluşturduğun yeni bir hesabı.','Operasyon veya Eğitim departmanının sağladığı, Kodland Sparks ile aynı giriş bilgilerini.','Bir öğrencinin hesabını.'],
      a:1, e:'Launcher, Operasyon veya Eğitim departmanının sağladığı Kodland Sparks giriş bilgilerini kullanır.' },
    { q:'Öğrenci, yayınlanan data pack’in bağlantısını nereden alır?',
      o:['Launcher’daki bir yorumdan.','“Publish to your profile” penceresinden: Copy link (veya Open on Sparks ve adresi tarayıcı çubuğundan kopyalamak).','Launcher’ın Play sekmesinden.'],
      a:1, e:'Yayınladıktan hemen sonra Copy link; bağlantı kaybolduysa Open on Sparks proje sayfasını açar ve sayfanın adresi bağlantının kendisidir.' },
    { q:'Dersin son 7–10 dakikası ne içindir?',
      o:['Ek inşa süresi.','Yayınlama, çalışmaları gösterme ve geri bildirim — artı kapanış ve ödev.','Serbest oyun.'],
      a:1, e:'Son dakikaları koru: yayınlama, geri bildirimli sunum ve kapanış.' },
    { ctx:'Bir öğrenci data pack’i yayınladı ama bağlantı senin için açılmıyor.',
      q:'En olası neden ve çözüm nedir?',
      o:['“Who can see it?” Everyone olarak ayarlanmamış: Everyone ile tekrar yayınla.','Data pack bozuk: sıfırdan yenisini oluştur.','Bağlantılar ancak ertesi gün açılır.'],
      a:0, e:'Bağlantı yalnızca Everyone seçildiğinde giriş yapmadan açılır. Everyone ile tekrar yayınlamak sorunu çözer.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Modüller tamamlandı!',
  html: `<p>Neredeyse bitirdin! Bu eğitime eriştiğin LMS eğitim sayfasına geri dön. DST testi, eğitimin hemen altında yer alıyor.</p>
    <p>👉 <b>Eğitimin başarıyla tamamlanmış sayılması için DST testini yapman ve geçmen gerekir.</b> DST testini yapmazsan eğitim tamamlanmamış olarak kalır ve süresi dolabilir.</p>
    <p>Geçme notu en az <b>%80</b>’dir.</p>
    <p>Bol şans! ❤️</p>`,
  nexts: [
    ['📒', '<b>Her dersten önce:</b> Backoffice’teki öğretmen notlarını oku ve dersin yolunu kendi data pack’inde dene.'],
    ['🟩', '<b>İlk dakikalar:</b> bağlantı ve launcher kontrolü, ardından bitmiş sonuç ve hedef.'],
    ['🔗', '<b>Bağlantı:</b> Publish → Everyone → Copy link, ardından ders kartına yapıştır.'],
    ['⏱️', '<b>Son 7–10 dakika:</b> yayınlama, çalışmaları gösterme ve geri bildirim.']
  ]
};
