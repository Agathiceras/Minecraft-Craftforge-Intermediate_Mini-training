/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2241 · ENG] · ITALIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'it' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formazione sul corso EM',
  footer: 'kodland · Nuovo modello educativo · Formazione sul corso',
  devLink: '🛠 Sviluppatore',
  logoSub: 'Nuovo modello educativo',
  navHome: '← Home',
  navBackModule: '← Torna al modulo',
  moduleN: 'Modulo {n}',
  badgeStart: 'Inizia →',
  badgeLocked: '🔒 Completa il modulo {n}',
  badgeDone: '✓ Completato · {score}%',
  progLabel: 'moduli completati',
  progAllDone: 'Moduli completati 🎉',
  eyebrow: '{course} · Modulo {n} di {total}',
  ctaTitle: 'Verifica del modulo',
  ctaText: '{n} brevi domande. Per superare la verifica serve almeno il 70%.',
  lockSim: '🔒 Completa la simulazione qui sopra per sbloccare la verifica.',
  startCheck: 'Inizia la verifica →',
  retake: '🔁 Ripeti la verifica',
  qmeta: '{e} Verifica del modulo {n} · Domanda {i} di {total}',
  fbRight: '✅ <b>Corretto!</b> ',
  fbWrong: '❌ <b>Non proprio.</b> ',
  nextQuestion: 'Domanda successiva →',
  seeResult: 'Vedi il risultato →',
  passedTitle: 'Verifica superata!',
  failTitle: 'Ci sei quasi',
  scoreLine: 'Hai risposto correttamente a <b>{score} domande su {n}</b>.',
  failText: 'Serve almeno il 70%. Ripassa il modulo e riprova — puoi ripetere la verifica tutte le volte che vuoi.',
  nextUnlocked: '<b>Modulo {n} · {title}</b> è ora sbloccato.',
  goModule: 'Vai al modulo {n} →',
  allDoneText: 'Hai completato entrambi i moduli di questa formazione.',
  seeNext: 'Scopri il prossimo passaggio →',
  reviewModule: '📖 Ripassa il modulo',
  homeDoneTitle: 'Moduli completati!',
  homeDoneText: 'Un ultimo passaggio: il test DST nella pagina della formazione sull’LMS.',
  homeDoneBtn: 'Scopri come proseguire →',
  doneBadge: '✓ Fatto',
  doneBack: 'Torna ai moduli',
  lockedTitle: 'Ancora bloccato',
  lockedModule: 'Completa prima il modulo {n}.',
  lockedStep: 'Completa il passaggio precedente per sbloccare questo.',
  ok: 'OK',
  linkOpen: 'Apri ↗',
  projPlay: '▶ Apri ↗',
  simOpen: '▶ Apri la simulazione qui',
  simClose: '✕ Chiudi la simulazione',
  simNewTab: 'Apri in una nuova scheda ↗',
  simDone: '✅ Simulazione completata',
  simTodo: '○ Simulazione da completare',
  checkTag: 'Spunta le voci',
  mythTag: 'Mito',
  mythTap: 'Tocca per scoprire la realtà →',
  mythReality: 'Realtà ✓',
  sortWrong: '✗ Non proprio.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2241';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Formazione sul corso · [2241]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: 'Per studenti di 10–12 anni, che scrivono le leggi del mondo di Minecraft con i data pack e creano programmi Python che costruiscono ponti, torri e mondi interi. Due moduli: i contenuti del corso e gli aspetti tecnici delle lezioni.',
  facts: [
    ['🧑‍💻', '<b>Procedi al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser. Ogni modulo termina con una breve verifica.'],
    ['⚡', '<b>Con attività pratiche.</b> Una simulazione per esercitarti a pubblicare un data pack su Kodland Sparks e a risolvere i problemi più comuni.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Prima di iniziare:</b> completa la <b>formazione principale sul nuovo modello educativo (EM)</b>. Questa formazione sul corso viene dopo e si basa su ciò che hai visto lì: Backoffice e le note per il tutor (Teacher Notes), Classroom con Follow Mode, il tour di Kodland Sparks e la qualità della lezione.' },
  { kind:'warn', e:'🔄', html:'<b>I contenuti delle lezioni in Backoffice vengono aggiornati continuamente.</b> Le lezioni migliorano grazie al feedback di studenti e tutor. Niente paura: ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'I contenuti del corso',
    desc:'Le informazioni generali sul corso, che cosa ottiene lo studente e la prima lezione del Modulo 1 del corso.',
    obj:'Prepararti a tenere la prima lezione di Minecraft CraftForge Intermediate. In questa lezione, gli studenti di 10–12 anni creano la loro prima legge per il mondo di Minecraft — una ricetta in un data pack — la provano nel gioco e la pubblicano su Kodland Sparks.',
    offer:[['🧱','Conoscere le informazioni generali sul corso e che cosa ottiene lo studente.'],['📖','Sapere che cosa succede nella prima lezione.'],['📦','Capire che cos’è un data pack e come ci lavorano gli studenti.'],['📘','Leggere la prima lezione e le relative note per il tutor in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Il corso', blocks:[
        { t:'meta', items:[['🧒','Età','10–12 anni'],['⏱️','Lezione','90 min'],['📚','Programma','40 lezioni · 10 moduli'],['🐍','Linguaggio','Python']] },
        { t:'trio', items:[
          ['🎬','Prima il risultato','Apri ogni lezione mostrando il risultato finale e dicendo ad alta voce l’obiettivo. Poi mostri tutto il percorso sul tuo schermo e guidi gli studenti un passo alla volta.'],
          ['📜','Da giocatore a creatore','Di solito un giocatore segue le regole del mondo. Qui è lo studente a scriverle: ricette, drop, comandi e, più avanti, programmi Python che costruiscono nel mondo.'],
          ['🔍','Gli errori fanno parte del percorso','Quando il mondo non risponde: <i>Che cosa vedo? Perché succede? Che cosa provo? Ha funzionato?</i> Le lezioni prevedono verifiche programmate, perché gli studenti ne trovino da soli la causa.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Gli studenti pubblicano i loro lavori su <b>Kodland Sparks</b>, il loro portfolio, in ogni lezione. <b>Sparks AI</b> propone idee e scenari di test, ma è lo studente a decidere che cosa usare.' }
      ]},
      { id:'goals', e:'🎓', title:'Che cosa ottiene lo studente', blocks:[
        { t:'p', html:'Alla fine del corso, lo studente raggiungerà questi risultati:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea progetti','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale originale.'],
          ['🐍','Python che costruisce','Scrive programmi Python che fanno comparire ponti, torri e motivi decorativi nel mondo di gioco. Comandi, argomenti, variabili, tipi di dati, cicli, condizioni e funzioni diventano strumenti di tutti i giorni.'],
          ['📜','Le regole del mondo','Con i data pack, stabilisce le proprie leggi per Minecraft: ricette, comandi personalizzati, timer, eventi e punteggi.'],
          ['🌍','Generatori e giochi','Scrive algoritmi che creano interi chunk del mondo e realizza minigiochi a cui giocano i compagni.'],
          ['🚀','Porta un’idea fino al Demo Day','Sviluppa un progetto dall’idea alla presentazione davanti al gruppo e spiega come funziona il codice.'],
          ['🧠','Competenze per la vita','Creatività, lavoro di squadra (testare i progetti dei compagni), comunicazione e pensiero critico: trovare i bug e valutare le risposte di Sparks AI invece di copiarle.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La prima lezione', blocks:[
        { t:'p', html:'Il Modulo 1 del corso, <b>«Il codice del mondo. Primi programmi e leggi del mondo»</b>, si conclude con il progetto <b>«Monumento al codice»</b>. La prima lezione riguarda le <b>leggi del mondo in un data pack</b>. Aprila e leggi che cosa devi sapere, il risultato chiave, il tuo ruolo e i punti a cui prestare attenzione.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'📜', h:'Lezione 1 — La prima traccia nel codice del mondo', p:'La prima lezione del corso (8 schede più i compiti). Gli studenti avviano il launcher, conoscono il gruppo, provano il simulatore di leggi, entrano nel mondo attraverso il Nether, creano la loro prima legge — una ricetta — in un data pack, la testano e la pubblicano su Sparks. Poi progettano una base con Sparks AI e la costruiscono.',
            acc:[['📚','Che cosa devi sapere','<ul><li>Un <b>data pack</b> è un insieme di leggi per il mondo. Le leggi si creano fuori dal mondo, nello studio del launcher, e il mondo le esegue ogni volta che entri.</li><li>Tipi di leggi: <b>ricetta</b>, <b>drop</b>, <b>comando</b> all’ingresso, <b>progresso</b>. Oggi: una ricetta.</li><li>Percorso: <b>Esc</b> e uscire dal mondo salvando → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → banco da lavoro, oggetti, risultato → <b>Save</b>.</li><li>Il codice del mondo si inserisce nella scheda <b>Play</b>. Gli studenti costruiscono in modalità creativa.</li></ul>'],
                 ['🎯','Risultato chiave','<ul><li>Entro il minuto 45 circa, tutti devono aver salvato un data pack con la propria ricetta.</li><li>🏁 Il data pack è <b>pubblicato su Sparks e il suo link è nella scheda della lezione</b> (scheda «Firma sotto la legge», entro il minuto 60 circa). Questa fase non si accorcia mai.</li><li>Lo studente ha dato all’oggetto un nome proprio e lo ha creato su un banco da lavoro nel mondo.</li></ul>'],
                 ['🧑‍🏫','Il tuo ruolo','<ul><li>Presentati e fai conoscenza con il gruppo mentre il gioco si scarica; usa i nomi per tutta la lezione.</li><li>Di’ ad alta voce l’obiettivo: «Oggi ognuno di voi creerà la propria legge per Minecraft, la testerà nel gioco e la pubblicherà nel portfolio».</li><li>Non imporre le ricette: le idee devono essere diverse — è questo che rende personale il progetto. Chiedi: «Perché questo oggetto? A chi servirà?»</li><li><b>Verifica programmata:</b> togli un oggetto dal banco da lavoro → la ricompensa sparisce. Chiedi perché, poi usa le quattro domande. Loda lo studente che trova la causa, non solo quello che ci riesce al primo colpo.</li></ul>'],
                 ['📌','Attenzione','<ul><li>Il data pack non si salva → una delle tre parti del modulo della ricetta è vuota.</li><li>La legge non funziona → è stata salvata con il mondo aperto: esci ed entra di nuovo.</li><li>La ricetta non funziona → gli oggetti non sono disposti come nel modulo della ricetta, oppure lo studente li combina nell’inventario invece che su un banco da lavoro.</li><li>Il link non si apre → in «Who can see it?» non era selezionato <b>Everyone</b>: pubblica di nuovo.</li></ul>'],
                 ['⚙️','Aspetti tecnici','<ul><li>Il giorno prima, invia i link del launcher nella chat del gruppo.</li><li>Fai tu, in prima persona, tutto il percorso: codice del mondo → riva → uscire salvando → data pack con una ricetta → di nuovo nel mondo → banco da lavoro → ricompensa → pubblicazione su Sparks.</li><li>Codice del mondo: <b>Welcome to KodlandCraft</b>.</li><li>Compiti: aggiungere un’altra legge (modificare la ricetta, una nuova ricetta, oppure un comando/drop), testarla, pubblicare l’aggiornamento e inviare il link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La prima nota per il tutor di ogni lezione contiene il piano completo: la sintesi, il risultato chiave, i tempi di ogni scheda, il tuo ruolo e i rischi. La Lezione 1 ha anche un video di preparazione. <b>Leggi tutte le note per il tutor prima della lezione.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Leggi la prima lezione in Backoffice', blocks:[
        { t:'p', html:'Prima della verifica, apri il corso in Backoffice e leggi la prima lezione con calma — lì trovi tutte le schede attività e le note per il tutor. Non c’è un limite di tempo.' },
        { t:'link', href:'https://bo.kodland.org/courses/2241', e:'📘', title:'Apri il corso in Backoffice', small:'[2241] Minecraft CraftForge Intermediate — le lezioni e le relative note per il tutor' },
        { t:'callout', kind:'warn', e:'🔄', html:'I contenuti delle lezioni in Backoffice continueranno a essere aggiornati grazie al feedback di studenti e tutor. Ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Gli aspetti tecnici delle lezioni',
    desc:'Il Kodland Launcher, un buon inizio, la pubblicazione dei data pack su Sparks e i problemi più comuni.',
    obj:'Scoprire che cosa fa funzionare tecnicamente una lezione di Minecraft CraftForge: il Kodland Launcher, il controllo del launcher prima dei contenuti, gli ultimi minuti per pubblicare e mostrare i lavori, dove gli studenti trovano il link al proprio data pack e le soluzioni ai problemi più comuni.',
    needs:['mcPublish'],
    offer:[['🟩','Scaricare e installare il Kodland Launcher ed effettuare l’accesso.'],['🚀','Fare il controllo del launcher prima dei contenuti e iniziare dal risultato.'],['📤','Assicurarti che ogni studente pubblichi il data pack e invii il link.'],['🛠️','Risolvere i problemi più comuni del launcher, dei data pack e dei comandi.']],
    sections:[
      { id:'focus', e:'🎯', title:'I 3 punti che fanno funzionare una lezione', blocks:[
        { t:'p', html:'Sono le priorità fissate dal team di prodotto per i corsi di Minecraft. Aprile una alla volta:' },
        { t:'acc', items:[
          ['🎬','Mostra prima il risultato e spiega perché creare è diverso dal giocare','<p>Nei primi minuti, <b>mostra il risultato finale</b> e di’ che cosa impareranno oggi gli studenti.</p><ul><li>Di’ ad alta voce l’obiettivo, per esempio: «Oggi ognuno di voi creerà la propria legge per Minecraft, la testerà nel gioco e la pubblicherà».</li><li>Spiega in che cosa costruire un progetto <b>è diverso dal semplice giocare</b>: di solito tutte le regole le ha fatte qualcun altro; qui è lo studente a crearle, e il mondo esegue la sua idea.</li><li>Chiedi a uno o due studenti: «Hai mai cambiato le regole di un gioco? Come?»</li></ul>'],
          ['🟩','Il controllo del collegamento e del launcher viene prima dei contenuti','<p>Fai il controllo del collegamento e del launcher <b>prima</b> della parte di contenuti, così il gioco si scarica mentre conosci il gruppo.</p><ul><li>Collegamento: un minuto — videocamera, microfono, «Ciao!».</li><li>Launcher: invia i link, mostra l’accesso sul tuo schermo, chiedi un «+» in chat quando compare la barra verde.</li><li>Non aspettare che il download finisca e non bloccare il gruppo per uno o due «−»: torna da loro durante il lavoro autonomo (lo studio delle leggi o la base).</li><li>Dalla Lezione 2 in poi: «Aprite il launcher e avviate il vostro mondo — lasciatelo caricare mentre parliamo».</li></ul>'],
          ['⏱️','Proteggi gli ultimi 7–10 minuti','<p>Gli ultimi <b>7–10 minuti</b> servono per pubblicare, mostrare i lavori e dare feedback — e non vanno sacrificati per continuare a costruire.</p><ul><li>Interrompi in modo netto: avvisa due minuti prima, poi «Stop, mani lontane dalla tastiera. È il momento della presentazione!», e chiama subito il primo studente.</li><li>Nella presentazione, gli studenti mostrano la legge in azione (creano l’oggetto dal vivo, rompono il blocco, rientrano nel mondo); il gruppo dà un feedback: nome + dettaglio.</li><li>Concludi con riepilogo, riflessione, prossima lezione e compiti — queste parti non si accorciano mai.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Il Kodland Launcher', blocks:[
        { t:'p', html:'Gli studenti aprono Minecraft tramite il <b>Kodland Launcher</b>: scarica il gioco, apre il mondo del corso ed è il posto dove creano i data pack e li pubblicano su Sparks. Devi averlo installato e pronto sul tuo computer prima della tua prima lezione.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Le tue credenziali:</b> per scaricare il launcher e accedere usi le <b>stesse credenziali di Kodland Sparks</b>. Te le fornisce il <b>reparto Operations o Teaching</b>. Gli studenti accedono con il proprio account Kodland — non ne serve uno nuovo.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Pagina di download e guida ufficiale', small:'portfolio.kodland.org/launcher/download — Windows e Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Scarica il programma di installazione.</li><li>Apri il file scaricato.</li><li>Nella schermata blu di avviso, clicca su <b>More info → Run anyway</b>, poi segui l’installazione.</li></ol>'],
          ['🍎','macOS 13 o successivo','<ol><li>Scarica il file per il tuo processore (Apple → <b>Informazioni su questo Mac</b>: M1 o successivi = Apple Silicon).</li><li>Apri il file scaricato e trascina <b>Kodland Launcher</b> in <b>Applications</b>. Non aprirlo da quella finestra.</li><li>Apri <b>Terminal</b>, incolla la riga qui sotto e premi Invio. È normale che non compaia nulla.</li><li>Apri il launcher da <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Accedi','Clicca su <b>Sign in</b>. Si apre una pagina del browser: clicca su <b>Sign in with Kodland</b> — un solo pulsante, nessuna password. Se il browser non si apre, usa il link sotto il pulsante per ottenere un codice breve (valido per cinque minuti).'],
          ['Scarica il gioco','Il launcher scarica il gioco in diversi passaggi (circa 550 MB; servono circa 1,8 GB di spazio libero). Lascialo lavorare.'],
          ['Gioca','Quando il launcher indica che è tutto pronto, premi <b>Play</b>. Il primo avvio può richiedere fino a un minuto. Il codice del mondo si inserisce nella scheda <b>Play</b>.'],
          ['Aggiornamenti','Se il launcher non si aggiorna, scarica l’ultima versione dalla pagina di download e installala sopra quella vecchia. I mondi restano al loro posto.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Link di download diretti (gli stessi della scheda della lezione)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1 o successivi)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Quando il launcher di uno studente non funziona', blocks:[
        { t:'p', html:'Nella Lezione 1 è molto probabile che qualcuno abbia problemi ad avviare il launcher. Un solo problema non deve fermare il gruppo: <b>prima dai agli altri un breve compito</b>, poi collegati con lo studente. Chiedigli di condividere lo schermo e guidalo a voce. Se il problema non si risolve in un paio di minuti: «Per ora segui il mio schermo, torno da te tra poco». Il momento migliore per tornare da lui è il lavoro autonomo — lo studio delle leggi o la base.' },
        { t:'acc', open:false, items:[
          ['🍎','Il Mac non apre il launcher','Esegui la riga del Terminal indicata nella sezione «Il Kodland Launcher» e apri di nuovo il launcher.'],
          ['🪟','Windows chiede se aprire il file','<b>More info → Run anyway</b>.'],
          ['🔑','Lo studente non riesce ad accedere','Usa lo stesso accesso Kodland delle lezioni — nessun account nuovo. La finestra di accesso si apre nel browser e spesso finisce dietro altre finestre.'],
          ['⏳','Il download del gioco si è fermato','Controlla la connessione, chiudi il launcher e riaprilo — il download riprende.'],
          ['👀','Il launcher proprio non parte','Lo studente segue il tuo schermo, risponde in chat e, nella presentazione, racconta quale legge creerebbe. Dopo la lezione, aiutalo con l’avvio, così può fare i compiti da solo.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se più studenti hanno lo stesso errore, mostra la soluzione a tutti una volta sola — e intanto tieni coinvolti gli altri con una breve domanda in chat ogni minuto circa.' }
      ]},
      { id:'req', e:'💻', title:'Requisiti del computer', blocks:[
        { t:'p', html:'Ecco che cosa serve a uno studente per Minecraft CraftForge. Ti sarà utile quando uno studente ha problemi a installare o avviare il gioco:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computer e sistema','Computer fisso o portatile con <b>Windows 10/11 (64 bit)</b> o <b>macOS 13 o successivo</b>. Mac: solo Apple Silicon (M1 o più recente).'],
          ['🧠','Memoria e processore','<b>8 GB di RAM</b> con scheda grafica dedicata, oppure <b>12 GB</b> con grafica integrata. Un processore <b>quad-core</b>.'],
          ['🎮','Grafica e disco','Una scheda grafica che supporti <b>Vulkan 1.3</b> e <b>2 GB</b> di memoria video. <b>5 GB</b> di spazio libero su disco.'],
          ['🎧','Connessione e dotazione','Una connessione internet stabile, adatta alle videochiamate. Un mouse a due tasti, una tastiera, cuffie con microfono e una videocamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Pubblicare il data pack su Kodland Sparks', blocks:[
        { t:'p', html:'Sparks è il portfolio degli studenti: lì sono raccolti tutti i progetti del corso, e lì si trova l’assistente IA. Gli studenti ci tornano in ogni lezione per pubblicare e chiedere suggerimenti. Il data pack si pubblica <b>dall’editor del launcher</b>:' },
        { t:'steps', items:[
          ['Publish, accanto a Save','Nel launcher, <b>Create → Data packs → Edit</b> sul data pack, poi <b>Publish</b>, accanto al pulsante viola <b>Save</b>.'],
          ['Nome e «Who can see it?» → Everyone','In «Publish to your profile», scrivi il nome e scegli <b>Everyone</b>: solo così anche gli altri possono aprire il link senza accedere all’account dello studente.'],
          ['Copy link','Quando compare «Published! It is on your profile.», clicca su <b>Copy link</b>, poi su <b>Done</b>, e incolla il link nella scheda della lezione sulla piattaforma («Link alla mia legge su Kodland Sparks»).'],
          ['Hai perso il link?','<b>Open on Sparks</b> (nella finestra di dialogo o in alto nell’editor) apre la pagina del progetto sul profilo dello studente: il link è l’indirizzo nella barra del browser.'],
          ['Due passaggi distinti','Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono <b>due passaggi distinti</b>. Controlla in Backoffice che i link siano arrivati davvero.'],
          ['Ogni aggiornamento si pubblica di nuovo','Quando lo studente aggiunge una legge, salva, testa e pubblica di nuovo l’aggiornamento.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simulazione', title:'Pubblica un data pack su Kodland Sparks', text:'Una riproduzione del Kodland Launcher e della scheda della lezione: nei panni di uno studente, pubblichi un data pack, copi il suo link, lo incolli nella scheda sulla piattaforma, sistemi un link che non si apre e ritrovi un link che non era stato copiato. Richiede circa 4 minuti. La verifica del modulo si sblocca quando hai finito.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando qualcosa va storto', blocks:[
        { t:'acc', open:false, items:[
          ['💾','Il data pack non si salva','Controlla che tutte e tre le parti del modulo della ricetta siano compilate: dove si crea l’oggetto, che cosa entra e che cosa esce.'],
          ['🔁','La legge non funziona dopo una modifica','Clicca su <b>Save</b>, esci dal mondo ed entra di nuovo — le leggi si applicano quando entri.'],
          ['🧩','La ricetta non funziona','Gli oggetti non sono disposti come nel modulo della ricetta, oppure lo studente li combina nell’inventario invece che su un banco da lavoro.'],
          ['🔒','Il link non si apre','In «Who can see it?» non era selezionato <b>Everyone</b>. Pubblica di nuovo con Everyone — così il link si apre senza accedere.'],
          ['🔗','Lo studente ha chiuso la finestra senza copiare il link','Clicca su <b>Open on Sparks</b> in alto nell’editor del data pack: si apre la pagina del progetto, e il link è l’indirizzo nella barra del browser.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist tecnica per ogni lezione', blocks:[
        { t:'check', title:'✅ La mia checklist tecnica', groups:[
          { h:'☑️ Prima della lezione', items:['Ho letto tutte le note per il tutor della lezione e ho guardato il video di preparazione.','Il mio launcher è installato, ho effettuato l’accesso e ho fatto il percorso della lezione nel mio data pack.','Prima della Lezione 1, ho inviato i link del launcher nella chat del gruppo.'] },
          { h:'🎬 Durante la lezione', items:['Ho fatto il controllo del collegamento e del launcher prima dei contenuti.','Nei primi minuti ho mostrato il risultato finale e ho detto l’obiettivo della lezione.'] },
          { h:'📤 Alla fine della lezione', items:['Ho protetto gli ultimi 7–10 minuti per pubblicare, mostrare i lavori e dare feedback.','Tutti hanno inviato il link al data pack pubblicato nella scheda della lezione.','Ho aperto alcuni link per controllare che funzionino.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'A chi è rivolto Minecraft CraftForge Intermediate e quanto dura ogni lezione?',
      o:['A studenti di 8–9 anni, con lezioni di 60 minuti.','A studenti di 10–12 anni, con lezioni di gruppo di 90 minuti.','A studenti di 13–17 anni, con lezioni di 60 minuti.'],
      a:1, e:'Intermediate è rivolto a studenti di 10–12 anni: 40 lezioni di gruppo da 90 minuti.' },
    { q:'Quale linguaggio di programmazione usano gli studenti nel corso?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Gli studenti scrivono programmi Python che costruiscono nel mondo di Minecraft.' },
    { q:'Che cos’è un data pack in questo corso?',
      o:['Un file con gli screenshot delle costruzioni dello studente.','Un insieme di leggi per il mondo (ricette, drop, comandi…) che Minecraft esegue ogni volta che entri.','Un pacchetto di mondi già pronti da scaricare.'],
      a:1, e:'Un data pack è un insieme di leggi: il mondo le esegue ogni volta che lo studente entra.' },
    { q:'Che cosa ottiene lo studente alla fine del corso?',
      o:['Un esame finale scritto.','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale originale presentato al Demo Day.','Solo il data pack della Lezione 1.'],
      a:1, e:'Oltre nove progetti nel portfolio e un progetto originale, portato dall’idea fino al Demo Day.' },
    { q:'Come dovrebbero usare Sparks AI gli studenti?',
      o:['Copiare le sue risposte così come sono.','Valutare i suoi suggerimenti e decidere che cosa usare.','Non usarlo mai.'],
      a:1, e:'Sparks AI propone idee e scenari di test; lo studente li valuta invece di copiarli.' }
  ],
  m2:[
    { q:'Quando fai il controllo del collegamento e del launcher?',
      o:['All’inizio della lezione, prima dei contenuti, così il gioco si scarica mentre conosci il gruppo.','A metà lezione, quando gli studenti hanno bisogno di Minecraft.','Alla fine, così non toglie tempo alla lezione.'],
      a:0, e:'Prima dei contenuti: il gioco si scarica mentre conosci il gruppo.' },
    { q:'Quali credenziali usi per scaricare il Kodland Launcher e accedere?',
      o:['Un nuovo account che crei tu.','Le stesse credenziali di Kodland Sparks, fornite dal reparto Operations o Teaching.','L’account di uno studente.'],
      a:1, e:'Il launcher usa le tue credenziali di Kodland Sparks, fornite dal reparto Operations o Teaching.' },
    { q:'Dove trova lo studente il link al data pack pubblicato?',
      o:['In un commento nel launcher.','In «Publish to your profile»: Copy link (oppure Open on Sparks e copia l’indirizzo dalla barra del browser).','Nella scheda Play del launcher.'],
      a:1, e:'Copy link subito dopo la pubblicazione; se il link è andato perso, Open on Sparks mostra la pagina del progetto, e il suo indirizzo è il link.' },
    { q:'A che cosa servono gli ultimi 7–10 minuti della lezione?',
      o:['Tempo extra per costruire.','Pubblicare, mostrare i lavori e dare feedback — più il riepilogo e i compiti.','Gioco libero.'],
      a:1, e:'Proteggi gli ultimi minuti: pubblicazione, presentazione con feedback e riepilogo.' },
    { ctx:'Uno studente ha pubblicato il data pack, ma a te il link non si apre.',
      q:'Qual è la causa più probabile, e come si risolve?',
      o:['In «Who can see it?» non era selezionato Everyone: pubblica di nuovo con Everyone.','Il data pack è rotto: creane uno nuovo da zero.','I link si aprono solo il giorno dopo.'],
      a:0, e:'Solo con Everyone il link si apre senza accedere. Pubblicare di nuovo con Everyone risolve il problema.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Moduli completati!',
  html: `<p>Ci sei quasi! Torna alla pagina della formazione sull’LMS da cui hai aperto questo percorso. Il test DST si trova subito sotto la formazione.</p>
    <p>👉 <b>Per completare con successo la formazione devi svolgere e superare il test DST.</b> Se non svolgi il test DST, la formazione resterà incompleta e potrebbe scadere.</p>
    <p>Il punteggio minimo per superarlo è l’<b>80%</b>.</p>
    <p>Buona fortuna! ❤️</p>`,
  nexts: [
    ['📒', '<b>Prima di ogni lezione:</b> leggi le note per il tutor in Backoffice e fai il percorso della lezione nel tuo data pack.'],
    ['🟩', '<b>Primi minuti:</b> controllo del collegamento e del launcher, poi il risultato finale e l’obiettivo.'],
    ['🔗', '<b>Il link:</b> Publish → Everyone → Copy link, incollato nella scheda della lezione.'],
    ['⏱️', '<b>Ultimi 7–10 minuti:</b> pubblicazione, presentazione dei lavori e feedback.']
  ]
};
