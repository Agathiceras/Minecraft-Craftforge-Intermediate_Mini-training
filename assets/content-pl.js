/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2229 · PL] · POLISH
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pl' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Szkolenie z kursu EM',
  footer: 'kodland · Nowy Model Edukacyjny · Szkolenie z kursu',
  devLink: '🛠 Deweloper',
  logoSub: 'Nowy Model Edukacyjny',
  navHome: '← Strona główna',
  navBackModule: '← Wróć do modułu',
  moduleN: 'Moduł {n}',
  badgeStart: 'Zacznij →',
  badgeLocked: '🔒 Ukończ moduł {n}',
  badgeDone: '✓ Ukończono · {score}%',
  progLabel: 'ukończonych modułów',
  progAllDone: 'Moduły ukończone 🎉',
  eyebrow: '{course} · Moduł {n} z {total}',
  ctaTitle: 'Sprawdzian modułu',
  ctaText: 'Liczba krótkich pytań: {n}. Zdobądź co najmniej 70%, aby zaliczyć.',
  lockSim: '🔒 Ukończ symulację powyżej, aby odblokować sprawdzian.',
  startCheck: 'Zacznij sprawdzian →',
  retake: '🔁 Powtórz sprawdzian',
  qmeta: '{e} Sprawdzian modułu {n} · Pytanie {i} z {total}',
  fbRight: '✅ <b>Dobrze!</b> ',
  fbWrong: '❌ <b>Niezupełnie.</b> ',
  nextQuestion: 'Następne pytanie →',
  seeResult: 'Zobacz mój wynik →',
  passedTitle: 'Zaliczone!',
  failTitle: 'Prawie się udało',
  scoreLine: 'Poprawnych odpowiedzi: <b>{score} z {n}</b>.',
  failText: 'Potrzebujesz co najmniej 70%. Powtórz moduł i spróbuj jeszcze raz — możesz podchodzić do sprawdzianu tyle razy, ile potrzebujesz.',
  nextUnlocked: '<b>Moduł {n} · {title}</b> jest już odblokowany.',
  goModule: 'Przejdź do modułu {n} →',
  allDoneText: 'Ukończyłeś oba moduły tego szkolenia.',
  seeNext: 'Zobacz kolejne kroki →',
  reviewModule: '📖 Powtórz moduł',
  homeDoneTitle: 'Moduły ukończone!',
  homeDoneText: 'Ostatni krok: test DST na stronie szkolenia w LMS.',
  homeDoneBtn: 'Zobacz, co robić dalej →',
  doneBadge: '✓ Ukończono',
  doneBack: 'Wróć do modułów',
  lockedTitle: 'Jeszcze zablokowane',
  lockedModule: 'Najpierw ukończ moduł {n}.',
  lockedStep: 'Ukończ poprzedni krok, aby odblokować ten.',
  ok: 'OK',
  linkOpen: 'Otwórz ↗',
  projPlay: '▶ Otwórz ↗',
  simOpen: '▶ Otwórz symulację tutaj',
  simClose: '✕ Zamknij symulację',
  simNewTab: 'Otwórz w nowej karcie ↗',
  simDone: '✅ Symulacja ukończona',
  simTodo: '○ Symulacja do wykonania',
  checkTag: 'Odhaczaj',
  mythTag: 'Mit',
  mythTap: 'Kliknij, aby zobaczyć, jak jest naprawdę →',
  mythReality: 'Rzeczywistość ✓',
  sortWrong: '✗ Niezupełnie.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2229';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Szkolenie z kursu · [2229]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: 'Dla uczniów w wieku 10–12 lat: piszą prawa świata Minecrafta w paczkach danych (data packach) i programy w Pythonie, które budują mosty, wieże i całe światy. Dwa moduły: treści kursu i techniczna strona lekcji.',
  facts: [
    ['🧑‍💻', '<b>We własnym tempie.</b> Twój postęp zapisuje się w tej przeglądarce. Każdy moduł kończy się krótkim sprawdzianem.'],
    ['⚡', '<b>Praktyka w zestawie.</b> Symulacja, w której przećwiczysz publikowanie paczki danych w Kodland Sparks i najczęstsze problemy.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Zanim zaczniesz:</b> najpierw ukończ <b>główne szkolenie z Nowego Modelu Edukacyjnego (EM)</b>. To szkolenie z kursu jest jego kontynuacją i opiera się na tym, co tam poznałeś: Backoffice i Teacher Notes, Classroom z Follow Mode, wycieczka po Kodland Sparks i jakość lekcji.' },
  { kind:'warn', e:'🔄', html:'<b>Treści lekcji w Backoffice są stale aktualizowane.</b> Lekcje są ciągle ulepszane na podstawie opinii uczniów i tutorów. Spokojnie: gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'Treści kursu',
    desc:'Ogólne informacje o kursie, co osiąga uczeń i pierwsza lekcja modułu 1.',
    obj:'Przygotuj się do poprowadzenia pierwszej lekcji Minecraft CraftForge Intermediate. Uczniowie w wieku 10–12 lat tworzą na niej swoje pierwsze prawo świata Minecrafta — recepturę w paczce danych — testują je w grze i publikują w Kodland Sparks.',
    offer:[['🧱','Poznasz ogólne informacje o kursie i to, co osiąga uczeń.'],['📖','Dowiesz się, co dzieje się na pierwszej lekcji.'],['📦','Zrozumiesz, czym jest paczka danych i jak uczniowie z nią pracują.'],['📘','Przejrzysz pierwszą lekcję i jej Teacher Notes w Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Wiek','10–12 lat'],['⏱️','Lekcja','90 min'],['📚','Program','40 lekcji · 10 modułów'],['🐍','Język','Python']] },
        { t:'trio', items:[
          ['🎬','Najpierw wynik','Każda lekcja zaczyna się od pokazania gotowego wyniku i powiedzenia celu na głos. Potem pokazujesz całą drogę na swoim ekranie i prowadzisz uczniów krok po kroku.'],
          ['📜','Z gracza w twórcę','Zwykle gracz przestrzega zasad świata. Tutaj uczeń je pisze: receptury, dropy, polecenia, a potem programy w Pythonie, które budują.'],
          ['🔍','Błędy są częścią procesu','Gdy świat nie reaguje: <i>Co widzę? Dlaczego tak jest? Co spróbuję? Czy zadziałało?</i> Lekcje mają zaplanowane testy, żeby uczniowie sami znaleźli przyczynę.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Uczniowie publikują swoje prace w <b>Kodland Sparks</b>, swoim portfolio, na każdej lekcji. <b>Sparks AI</b> podsuwa pomysły i scenariusze testów, ale to uczeń decyduje, co weźmie.' }
      ]},
      { id:'goals', e:'🎓', title:'Co osiąga uczeń', blocks:[
        { t:'p', html:'Na koniec kursu uczeń osiągnie te cele:' },
        { t:'cards', cols:2, items:[
          ['🧱','Tworzy projekty','Ponad dziewięć projektów w portfolio Kodland Sparks oraz autorski projekt końcowy.'],
          ['🐍','Python, który buduje','Pisze programy w Pythonie, dzięki którym w świecie gry pojawiają się mosty, wieże i wzory. Polecenia, argumenty, zmienne, typy danych, pętle, warunki i funkcje stają się codziennymi narzędziami.'],
          ['📜','Zasady świata','Za pomocą paczek danych ustala własne prawa Minecrafta: receptury, własne polecenia, timery, zdarzenia i punktację.'],
          ['🌍','Generatory i gry','Pisze algorytmy, które tworzą całe fragmenty świata (chunki), i buduje minigry, w które grają inni.'],
          ['🚀','Prowadzi pomysł aż do Demo Day','Przeprowadza projekt od koncepcji do prezentacji przed grupą i wyjaśnia, jak działa kod.'],
          ['🧠','Umiejętności na całe życie','Kreatywność, praca w zespole (testowanie projektów innych), komunikacja i krytyczne myślenie: szukanie błędów i ocenianie odpowiedzi Sparks AI zamiast ich kopiowania.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Pierwsza lekcja', blocks:[
        { t:'p', html:'Moduł 1, <b>„Kod świata. Pierwsze programy i prawa świata”</b>, kończy się projektem <b>„Pomnik kodu”</b>. Pierwsza lekcja dotyczy <b>praw świata w paczce danych</b>. Otwórz ją i przeczytaj, co musisz wiedzieć, jaki jest kluczowy wynik, jaka jest Twoja rola i na co uważać.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'📜', h:'Lekcja 1 — Pierwszy ślad w kodzie świata', p:'Pierwsza lekcja kursu (8 kart i zadanie domowe). Uczniowie uruchamiają launcher, poznają grupę, próbują trenażera praw, wchodzą do świata przez Nether, tworzą w paczce danych swoje pierwsze prawo — recepturę — testują je i publikują w Sparks. Potem z pomocą Sparks AI planują bazę i ją budują.',
            acc:[['📚','Co musisz wiedzieć','<ul><li><b>Paczka danych</b> (data pack) to zestaw praw świata. Prawa tworzy się poza światem, w studiu launchera, a świat wykonuje je za każdym razem, gdy do niego wchodzisz.</li><li>Rodzaje praw: <b>receptura</b>, <b>drop</b>, <b>polecenie</b> przy wejściu, <b>osiągnięcie</b>. Dziś: receptura.</li><li>Ścieżka: <b>Esc</b> i wyjście ze świata z zapisem → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → stół rzemieślniczy, przedmioty, wynik → <b>Save</b>.</li><li>Kod świata wpisuje się w zakładce <b>Play</b>. Uczniowie budują w trybie kreatywnym.</li></ul>'],
                 ['🎯','Kluczowy wynik','<ul><li>Wszyscy mają zapisaną paczkę danych z własną recepturą mniej więcej do 00:45.</li><li>🏁 Paczka danych jest <b>opublikowana w Sparks, a jej link jest w zadaniu</b> (karta „Podpis pod prawem”, mniej więcej do 01:00). Tej karty nigdy się nie skraca.</li><li>Uczeń nadał przedmiotowi własną nazwę i wytworzył go na stole rzemieślniczym w świecie.</li></ul>'],
                 ['🧑‍🏫','Twoja rola','<ul><li>Poznaj grupę, kiedy gra się pobiera; zwracaj się do uczniów po imieniu przez całą lekcję.</li><li>Powiedz cel na głos: „Dziś każdy stworzy własne prawo dla Minecrafta, przetestuje je w grze i opublikuje w portfolio”.</li><li>Nie narzucaj receptur: pomysły powinny być różne — to sprawia, że projekt jest osobisty. Zapytaj: „Dlaczego ten przedmiot? Komu się przyda?”.</li><li><b>Zaplanowany test:</b> usuń jeden przedmiot ze stołu rzemieślniczego → nagroda znika. Zapytaj dlaczego, potem użyj czterech pytań. Chwal ucznia, który znajdzie przyczynę, a nie tylko tego, któremu udało się za pierwszym razem.</li></ul>'],
                 ['📌','Uważaj','<ul><li>Paczka danych się nie zapisuje → jedna z trzech części formularza jest pusta.</li><li>Prawo nie działa → zostało zapisane przy otwartym świecie: wyjdź i wejdź ponownie.</li><li>Receptura nie działa → przedmioty nie są ułożone tak jak w formularzu albo uczeń tworzy w ekwipunku zamiast na stole rzemieślniczym.</li><li>Link się nie otwiera → w „Who can see it?” nie wybrano <b>Everyone</b>: opublikuj ponownie.</li></ul>'],
                 ['⚙️','Aspekty techniczne','<ul><li>Dzień wcześniej wyślij linki do launchera na czat grupy.</li><li>Przejdź całą ścieżkę sam: kod świata → brzeg → wyjście z zapisem → paczka danych z recepturą → powrót do świata → stół rzemieślniczy → nagroda → publikacja w Sparks.</li><li>Kod świata: <b>Welcome to KodlandCraft</b>.</li><li>Zadanie domowe: dodać jeszcze jedno prawo (zmienić recepturę, nowa receptura albo polecenie/drop), przetestować je, opublikować aktualizację i wysłać link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Pierwsza Teacher Note każdej lekcji zawiera pełny plan: podsumowanie, kluczowy wynik, czas każdej karty, Twoją rolę i ryzyka. Lekcja 1 ma też film przygotowawczy. <b>Przeczytaj wszystkie Teacher Notes przed lekcją.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Przejrzyj pierwszą lekcję w Backoffice', blocks:[
        { t:'p', html:'Przed sprawdzianem otwórz kurs w Backoffice i przejrzyj pierwszą lekcję we własnym tempie — są tam wszystkie karty aktywności i Teacher Notes. Nie ma limitu czasu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2229', e:'📘', title:'Otwórz kurs w Backoffice', small:'[2229] Minecraft CraftForge Intermediate — lekcje i ich Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'Treści lekcji w Backoffice będą dalej aktualizowane na podstawie opinii uczniów i tutorów. Gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Techniczna strona lekcji',
    desc:'Kodland Launcher, mocny start, publikowanie paczek danych w Sparks i najczęstsze problemy.',
    obj:'Dowiedz się, dzięki czemu lekcja Minecraft CraftForge działa od strony technicznej: Kodland Launcher, sprawdzenie launchera przed treściami, ostatnie minuty na publikację i pokazanie prac, skąd uczniowie biorą link do swojej paczki danych i jak rozwiązać najczęstsze problemy.',
    needs:['mcPublish'],
    offer:[['🟩','Pobierzesz, zainstalujesz Kodland Launcher i zalogujesz się do niego.'],['🚀','Przeprowadzisz sprawdzenie launchera przed treściami i zaczniesz od wyniku.'],['📤','Dopilnujesz, żeby każdy uczeń opublikował paczkę danych i wysłał link.'],['🛠️','Rozwiążesz najczęstsze problemy z launcherem, paczkami danych i poleceniami.']],
    sections:[
      { id:'focus', e:'🎯', title:'3 rzeczy, dzięki którym lekcja działa', blocks:[
        { t:'p', html:'To obszary, na których zespół produktowy kazał się skupić w kursach Minecraft. Otwórz każdy z nich:' },
        { t:'acc', items:[
          ['🎬','Najpierw pokaż wynik — i czym tworzenie różni się od grania','<p>W pierwszych minutach <b>pokaż gotowy wynik</b> i powiedz, czego uczniowie dziś się nauczą.</p><ul><li>Powiedz cel na głos, na przykład: „Dziś każdy stworzy własne prawo dla Minecrafta, przetestuje je w grze i opublikuje”.</li><li>Wyjaśnij, czym budowanie projektu <b>różni się od zwykłego grania</b>: zwykle wszystkie zasady ustalił ktoś inny; tutaj uczeń je tworzy, a świat realizuje jego pomysł.</li><li>Zapytaj jednego lub dwóch uczniów: „Zmieniałeś kiedyś zasady jakiejś gry? Jak?”.</li></ul>'],
          ['🟩','Sprawdzenie logowania i launchera jest przed treściami','<p>Sprawdź połączenie i launcher <b>przed</b> częścią merytoryczną, żeby gra pobierała się, kiedy poznajesz grupę.</p><ul><li>Połączenie: jedna minuta — kamera, mikrofon, „Cześć!”.</li><li>Launcher: wyślij linki, pokaż logowanie na swoim ekranie, poproś o „+” na czacie, gdy pojawi się zielony pasek.</li><li>Nie czekaj, aż pobieranie się skończy, i nie zatrzymuj grupy z powodu jednego czy dwóch „−”: wróć do nich w czasie pracy samodzielnej (studio praw albo baza).</li><li>Od lekcji 2: „Otwórzcie launcher i uruchomcie swój świat — niech się ładuje, kiedy rozmawiamy”.</li></ul>'],
          ['⏱️','Chroń ostatnie 7–10 minut','<p>Ostatnie <b>7–10 minut</b> jest na publikację, pokazanie prac i informację zwrotną — i nie oddaje się ich na budowanie.</p><ul><li>Stosuj twarde stopy: ostrzeżenie dwie minuty wcześniej, potem „Stop, ręce z klawiatury. Czas na prezentacje!” i od razu wskaż pierwszego ucznia.</li><li>Podczas prezentacji uczniowie pokazują prawo w działaniu (tworzą przedmiot na żywo, niszczą blok, wchodzą ponownie do świata); grupa daje informację zwrotną: imię + szczegół.</li><li>Zakończ podsumowaniem, refleksją, zapowiedzią następnej lekcji i zadaniem domowym — tego nigdy się nie skraca.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Uczniowie otwierają Minecrafta przez <b>Kodland Launcher</b>: pobiera on grę, otwiera świat kursu i to w nim uczniowie tworzą paczki danych i publikują je w Sparks. Musisz mieć go zainstalowanego i gotowego na swoim komputerze przed pierwszą lekcją.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Twoje dane logowania:</b> do pobrania launchera i zalogowania się używasz <b>tych samych danych co w Kodland Sparks</b>. Przekazuje Ci je <b>dział operacyjny lub dydaktyczny</b>. Uczniowie logują się swoim kontem Kodland — nie potrzebują nowego.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Strona pobierania i oficjalny poradnik', small:'portfolio.kodland.org/launcher/download — Windows i Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Pobierz instalator.</li><li>Otwórz pobrany plik.</li><li>Na niebieskim ekranie ostrzeżenia kliknij <b>More info → Run anyway</b>, a potem postępuj zgodnie z instalatorem.</li></ol>'],
          ['🍎','macOS 13 lub nowszy','<ol><li>Pobierz plik dla swojego procesora (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Otwórz pobrany plik i przeciągnij <b>Kodland Launcher</b> do <b>Applications</b>. Nie otwieraj go z tego okna.</li><li>Otwórz <b>Terminal</b>, wklej poniższą linię i naciśnij Return. Brak komunikatu jest normalny.</li><li>Otwórz launcher z <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Logowanie','Kliknij <b>Sign in</b>. Otworzy się strona w przeglądarce: kliknij <b>Sign in with Kodland</b> — jeden przycisk, bez hasła. Jeśli przeglądarka się nie otworzy, użyj linku pod przyciskiem, żeby dostać krótki kod (ważny pięć minut).'],
          ['Pobranie gry','Launcher pobiera grę w kilku etapach (ok. 550 MB; potrzebujesz ok. 1,8 GB wolnego miejsca). Zostaw go uruchomionego.'],
          ['Gra','Gdy pojawi się informacja, że wszystko gotowe, kliknij <b>Play</b>. Pierwsze uruchomienie może potrwać do minuty. Kod świata wpisuje się w zakładce <b>Play</b>.'],
          ['Aktualizacje','Jeśli launcher się nie aktualizuje, zainstaluj najnowszą wersję ze strony pobierania na starą. Światy zostają na miejscu.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Bezpośrednie linki do pobrania (te same co na karcie lekcji)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Gdy launcher ucznia nie działa', blocks:[
        { t:'p', html:'Na lekcji 1 ktoś prawie na pewno będzie miał problem z uruchomieniem launchera. Jeden problem nie powinien zatrzymywać grupy: <b>najpierw daj pozostałym krótkie zadanie</b>, potem połącz się z uczniem. Poproś, żeby udostępnił ekran, i prowadź go głosem. Jeśli w ciągu kilku minut się nie uda: „Na razie śledź mój ekran, zaraz wrócę”. Najlepszy moment na powrót to praca samodzielna — studio praw albo baza.' },
        { t:'acc', open:false, items:[
          ['🍎','Mac nie otwiera launchera','Uruchom linię w Terminalu z pierwszej karty i otwórz launcher ponownie.'],
          ['🪟','Windows pyta, czy otworzyć plik','<b>More info → Run anyway</b>.'],
          ['🔑','Uczeń nie może się zalogować','To samo logowanie Kodland co na lekcjach. Okno logowania otwiera się w przeglądarce i często chowa się za innymi oknami.'],
          ['⏳','Pobieranie gry stanęło','Sprawdź internet, zamknij launcher i otwórz go ponownie — pobieranie będzie kontynuowane.'],
          ['👀','Launcher w ogóle nie zadziałał','Uczeń śledzi Twój ekran, odpowiada na czacie, a podczas prezentacji opowiada, jakie prawo by stworzył. Po lekcji pomóż mu uruchomić launcher, żeby sam zrobił zadanie domowe.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Jeśli kilku uczniów ma ten sam błąd, pokaż rozwiązanie wszystkim naraz — i co minutę utrzymuj kontakt z resztą krótkim pytaniem na czacie.' }
      ]},
      { id:'req', e:'💻', title:'Wymagania sprzętowe', blocks:[
        { t:'p', html:'Tego potrzebuje uczeń do Minecraft CraftForge. Przydaje się, gdy uczeń ma problem z instalacją lub uruchomieniem gry:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Komputer i system','Komputer stacjonarny lub laptop z <b>Windows 10/11 (64-bit)</b> albo <b>macOS 13 lub nowszym</b>. Mac: tylko Apple Silicon (M1 lub nowszy).'],
          ['🧠','Pamięć i procesor','<b>8 GB RAM</b> z dedykowaną kartą graficzną lub <b>12 GB</b> ze zintegrowaną grafiką. Procesor <b>4-rdzeniowy</b>.'],
          ['🎮','Grafika i dysk','Karta graficzna z obsługą <b>Vulkan 1.3</b> i <b>2 GB</b> pamięci wideo. <b>5 GB</b> wolnego miejsca na dysku.'],
          ['🎧','Połączenie i sprzęt','Stabilne łącze internetowe, które poradzi sobie z rozmowami wideo. Mysz z dwoma przyciskami, klawiatura, słuchawki z mikrofonem i kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publikowanie paczki danych w Kodland Sparks', blocks:[
        { t:'p', html:'Sparks to portfolio uczniów: są tam wszystkie projekty z kursu i mieszka tam asystent AI. Uczniowie wracają do niego na każdej lekcji, żeby publikować i prosić o podpowiedzi. Paczkę danych publikuje się <b>z edytora w launcherze</b>:' },
        { t:'steps', items:[
          ['Publish, obok Save','W launcherze <b>Create → Data packs → Edit</b> przy paczce danych, potem <b>Publish</b>, obok fioletowego przycisku <b>Save</b>.'],
          ['Nazwa i „Who can see it?” → Everyone','W oknie „Publish to your profile” wpisz nazwę i wybierz <b>Everyone</b>: tylko wtedy link otworzy się innym bez logowania na konto ucznia.'],
          ['Copy link','Gdy pojawi się „Published! It is on your profile.”, kliknij <b>Copy link</b>, potem <b>Done</b>, i wklej link do karty lekcji na platformie („Link do mojego prawa w Kodland Sparks”).'],
          ['Zgubiony link?','<b>Open on Sparks</b> (w oknie dialogowym lub na górze edytora) otwiera stronę projektu na profilu ucznia: link to adres w pasku przeglądarki.'],
          ['Dwa różne kroki','Publikacja w Sparks i wysłanie linku na platformie Kodland to <b>dwa różne kroki</b>. Sprawdź w Backoffice, czy linki naprawdę dotarły.'],
          ['Każdą aktualizację publikuje się ponownie','Gdy uczeń dodaje prawo, zapisuje, testuje i ponownie publikuje aktualizację.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Symulacja', title:'Opublikuj paczkę danych w Kodland Sparks', text:'Replika Kodland Launcher i karty lekcji: jako uczeń publikujesz paczkę danych, kopiujesz jej link, wklejasz go do karty na platformie, naprawiasz link, który się nie otwiera, i odnajdujesz link, który nie został skopiowany. Zajmuje to ok. 4 minut. Sprawdzian modułu odblokuje się, gdy skończysz.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Gdy coś pójdzie nie tak', blocks:[
        { t:'acc', open:false, items:[
          ['💾','Paczka danych się nie zapisuje','Sprawdź, czy wypełnione są wszystkie trzy części formularza: gdzie powstaje przedmiot, co wchodzi i co wychodzi.'],
          ['🔁','Prawo nie działa po edycji','Kliknij <b>Save</b>, wyjdź ze świata i wejdź ponownie — prawa są stosowane przy wejściu.'],
          ['🧩','Receptura nie działa','Przedmioty nie są ułożone tak jak w formularzu albo uczeń tworzy w ekwipunku zamiast na stole rzemieślniczym.'],
          ['🔒','Link się nie otwiera','W „Who can see it?” nie wybrano <b>Everyone</b>. Opublikuj ponownie z Everyone — wtedy link otwiera się bez logowania.'],
          ['🔗','Uczeń zamknął okno, nie kopiując linku','Kliknij <b>Open on Sparks</b> na górze edytora paczki danych: otworzy się strona projektu, a link to adres w pasku przeglądarki.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Techniczna lista kontrolna na każdą lekcję', blocks:[
        { t:'check', title:'✅ Moja techniczna lista kontrolna', groups:[
          { h:'☑️ Przed lekcją', items:['Przeczytałem wszystkie Teacher Notes lekcji i obejrzałem film przygotowawczy.','Mój launcher jest zainstalowany i zalogowany, a ścieżkę lekcji przeszedłem we własnej paczce danych.','Przed lekcją 1 wysłałem linki do launchera na czat grupy.'] },
          { h:'🎬 W trakcie lekcji', items:['Sprawdziłem połączenie i launcher przed treściami.','W pierwszych minutach pokazałem gotowy wynik i powiedziałem cel lekcji.'] },
          { h:'📤 Na koniec lekcji', items:['Ochroniłem ostatnie 7–10 minut na publikację, pokazanie prac i informację zwrotną.','Wszyscy wysłali w karcie lekcji link do opublikowanej paczki danych.','Otworzyłem kilka linków, żeby sprawdzić, czy działają.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Dla kogo jest Minecraft CraftForge Intermediate i ile trwa każda lekcja?',
      o:['Dla uczniów w wieku 8–9 lat; lekcje po 60 minut.','Dla uczniów w wieku 10–12 lat; lekcje grupowe po 90 minut.','Dla uczniów w wieku 13–17 lat; lekcje po 60 minut.'],
      a:1, e:'Intermediate jest dla uczniów w wieku 10–12 lat: 40 lekcji po 90 minut w grupie.' },
    { q:'Jakiego języka programowania uczniowie używają na kursie?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Uczniowie piszą programy w Pythonie, które budują w świecie Minecrafta.' },
    { q:'Czym jest paczka danych na tym kursie?',
      o:['Plikiem ze zrzutami ekranu budowli ucznia.','Zestawem praw świata (receptury, dropy, polecenia…), które Minecraft wykonuje za każdym razem, gdy wchodzisz do świata.','Paczką gotowych światów do pobrania.'],
      a:1, e:'Paczka danych to zestaw praw: świat wykonuje je za każdym razem, gdy uczeń do niego wchodzi.' },
    { q:'Z czym uczeń kończy kurs?',
      o:['Z pisemnym egzaminem końcowym.','Z ponad dziewięcioma projektami w portfolio Kodland Sparks i autorskim projektem końcowym zaprezentowanym na Demo Day.','Tylko z paczką danych z lekcji 1.'],
      a:1, e:'Ponad dziewięć projektów w portfolio i autorski projekt, doprowadzony od pomysłu do Demo Day.' },
    { q:'Jak uczniowie powinni korzystać ze Sparks AI?',
      o:['Kopiować jego odpowiedzi bez zmian.','Oceniać jego propozycje i decydować, co wziąć.','Nigdy z niego nie korzystać.'],
      a:1, e:'Sparks podsuwa pomysły i scenariusze testów; uczeń je ocenia zamiast kopiować.' }
  ],
  m2:[
    { q:'Kiedy sprawdzasz połączenie i launcher?',
      o:['Na początku lekcji, przed treściami, żeby gra pobierała się, kiedy poznajesz grupę.','W połowie lekcji, kiedy uczniowie potrzebują Minecrafta.','Na końcu, żeby nie zabierać czasu lekcji.'],
      a:0, e:'Przed treściami: gra pobiera się, kiedy poznajesz grupę.' },
    { q:'Jakich danych logowania używasz do pobrania Kodland Launcher i zalogowania się?',
      o:['Nowego konta, które zakładasz sam.','Tych samych danych co w Kodland Sparks, przekazanych przez dział operacyjny lub dydaktyczny.','Konta ucznia.'],
      a:1, e:'Launcher używa Twoich danych logowania do Kodland Sparks, przekazanych przez dział operacyjny lub dydaktyczny.' },
    { q:'Skąd uczeń bierze link do opublikowanej paczki danych?',
      o:['Z komentarza w launcherze.','Z okna „Publish to your profile”: Copy link (albo Open on Sparks i skopiowanie adresu z paska przeglądarki).','Z zakładki Play w launcherze.'],
      a:1, e:'Copy link zaraz po publikacji; jeśli link zginął, Open on Sparks pokazuje stronę projektu, a jej adres to link.' },
    { q:'Na co jest ostatnie 7–10 minut lekcji?',
      o:['Na dodatkowy czas budowania.','Na publikację, pokazanie prac i informację zwrotną — plus podsumowanie i zadanie domowe.','Na swobodną grę.'],
      a:1, e:'Chroń ostatnie minuty: publikacja, prezentacja z informacją zwrotną i podsumowanie.' },
    { ctx:'Uczeń opublikował paczkę danych, ale link Ci się nie otwiera.',
      q:'Jaka jest najbardziej prawdopodobna przyczyna i jak to naprawić?',
      o:['W „Who can see it?” nie ustawiono Everyone: opublikuj ponownie z Everyone.','Paczka danych jest uszkodzona: utwórz nową od zera.','Linki otwierają się dopiero następnego dnia.'],
      a:0, e:'Tylko z Everyone link otwiera się bez logowania. Ponowna publikacja z Everyone rozwiązuje problem.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Moduły ukończone!',
  html: `<p>Prawie koniec! Wróć na stronę szkolenia w LMS, z której otworzyłeś to szkolenie. Test DST znajdziesz tuż pod szkoleniem.</p>
    <p>👉 <b>Aby szkolenie zostało uznane za ukończone, musisz wykonać test DST i go zaliczyć.</b> Jeśli nie ukończysz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p>
    <p>Minimalny wynik zaliczający to <b>80%</b>.</p>
    <p>Powodzenia! ❤️</p>`,
  nexts: [
    ['📒', '<b>Przed każdą lekcją:</b> przeczytaj Teacher Notes w Backoffice i przejdź ścieżkę lekcji we własnej paczce danych.'],
    ['🟩', '<b>Pierwsze minuty:</b> sprawdzenie połączenia i launchera, potem gotowy wynik i cel.'],
    ['🔗', '<b>Link:</b> Publish → Everyone → Copy link, wklejony do karty lekcji.'],
    ['⏱️', '<b>Ostatnie 7–10 minut:</b> publikacja, pokazanie prac i informacja zwrotna.']
  ]
};
