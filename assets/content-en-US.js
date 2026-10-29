/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2247 · ENG] · ENGLISH (USA)
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'en-US' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM course training',
  footer: 'kodland · New Educational Model · Course training',
  devLink: '🛠 Developer',
  logoSub: 'New Educational Model',
  navHome: '← Home',
  navBackModule: '← Back to the module',
  moduleN: 'Module {n}',
  badgeStart: 'Start →',
  badgeLocked: '🔒 Complete Module {n}',
  badgeDone: '✓ Completed · {score}%',
  progLabel: 'modules complete',
  progAllDone: 'Modules completed 🎉',
  eyebrow: '{course} · Module {n} of {total}',
  ctaTitle: 'Module check',
  ctaText: '{n} short questions. Score 70% or more to pass.',
  lockSim: '🔒 Complete the simulation above to unlock the check.',
  startCheck: 'Start the check →',
  retake: '🔁 Retake the check',
  qmeta: '{e} Module {n} check · Question {i} of {total}',
  fbRight: '✅ <b>Correct!</b> ',
  fbWrong: '❌ <b>Not quite.</b> ',
  nextQuestion: 'Next question →',
  seeResult: 'See my result →',
  passedTitle: 'You passed!',
  failTitle: 'Almost there',
  scoreLine: 'You answered <b>{score} of {n}</b> correctly.',
  failText: 'You need 70% or more. Review the module and try again — you can retake it as many times as you need.',
  nextUnlocked: '<b>Module {n} · {title}</b> is now unlocked.',
  goModule: 'Go to Module {n} →',
  allDoneText: 'You’ve completed both modules of this training.',
  seeNext: 'See what’s next →',
  reviewModule: '📖 Review the module',
  homeDoneTitle: 'Modules completed!',
  homeDoneText: 'One last step: the DST test on the LMS training page.',
  homeDoneBtn: 'See what to do next →',
  doneBadge: '✓ Done',
  doneBack: 'Back to the modules',
  lockedTitle: 'Still locked',
  lockedModule: 'Complete Module {n} first.',
  lockedStep: 'Complete the previous step to unlock this one.',
  ok: 'OK',
  linkOpen: 'Open ↗',
  projPlay: '▶ Open ↗',
  simOpen: '▶ Open the simulation here',
  simClose: '✕ Close the simulation',
  simNewTab: 'Open in a new tab ↗',
  simDone: '✅ Simulation completed',
  simTodo: '○ Simulation pending',
  checkTag: 'Tick them off',
  mythTag: 'Myth',
  mythTap: 'Tap to see the reality →',
  mythReality: 'Reality ✓',
  sortWrong: '✗ Not quite.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2247';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Course training · [2247]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: 'For students aged 10–12: they write the laws of the Minecraft world with data packs and Python programs that build bridges, towers and whole worlds. Two modules: the course content and the technical side of the lessons.',
  facts: [
    ['🧑‍💻', '<b>At your own pace.</b> Your progress is saved in this browser. Each module ends with a short check.'],
    ['⚡', '<b>Practice included.</b> A simulation to practice how a data pack is published in Kodland Sparks and the most common problems.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Before you start:</b> complete the <b>core New Educational Model (EM) training</b> first. This course training comes after it and builds on what you saw there: Backoffice and the Teacher Notes, Classroom with Follow Mode, the Kodland Sparks tour and lesson quality.' },
  { kind:'warn', e:'🔄', html:'<b>The lesson content in Backoffice is updated continuously.</b> Lessons are constantly improved with feedback from students and tutors. Don’t worry: whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'The course content',
    desc:'The general course details, what the student achieves, and the first lesson of Module 1.',
    obj:'Get ready to teach the first lesson of Minecraft CraftForge Intermediate. In it, students aged 10–12 create their first law for the Minecraft world — a recipe in a data pack — test it in the game and publish it in Kodland Sparks.',
    offer:[['🧱','Know the general course details and what the student achieves.'],['📖','Know what happens in the first lesson.'],['📦','Understand what a data pack is and how students work with it.'],['📘','Review the first lesson and its Teacher Notes in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'The course', blocks:[
        { t:'meta', items:[['🧒','Age','10–12 years'],['⏱️','Lesson','90 min'],['📚','Program','40 lessons · 10 modules'],['🐍','Language','Python']] },
        { t:'trio', items:[
          ['🎬','The result first','Every lesson opens by showing the finished result and saying the goal out loud. Then you show the whole path on your screen and guide students one step at a time.'],
          ['📜','From player to creator','Usually a player follows the rules of the world. Here the student writes them: recipes, drops, commands, and then Python programs that build.'],
          ['🔍','Mistakes are part of the process','When the world doesn’t respond: <i>What do I see? Why is that? What will I try? Did it work?</i> Lessons include planned checks so students find the cause themselves.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Students publish their work in <b>Kodland Sparks</b>, their portfolio, in every lesson. <b>Sparks AI</b> suggests ideas and test scenarios, but the student decides what to take.' }
      ]},
      { id:'goals', e:'🎓', title:'What the student achieves', blocks:[
        { t:'p', html:'By the end of the course, the student will reach these achievements:' },
        { t:'cards', cols:2, items:[
          ['🧱','Creates projects','More than nine projects in their Kodland Sparks portfolio, plus an original graduation project.'],
          ['🐍','Python that builds','Writes Python programs that make bridges, towers and patterns appear in the game world. Commands, arguments, variables, data types, loops, conditions and functions become everyday tools.'],
          ['📜','The rules of the world','With data packs, sets their own laws for Minecraft: recipes, custom commands, timers, events and scoring.'],
          ['🌍','Generators and games','Writes algorithms that create whole chunks of the world, and builds mini-games for others to play.'],
          ['🚀','Takes an idea to Demo Day','Carries a project from concept to a presentation in front of the group, and explains how the code works.'],
          ['🧠','Skills for life','Creativity, teamwork (testing each other’s projects), communication, and critical thinking: finding bugs and evaluating Sparks AI answers instead of copying them.']
        ]}
      ]},
      { id:'les', e:'📖', title:'The first lesson', blocks:[
        { t:'p', html:'Module 1, <b>“Code of the World. First Programs and World Laws”</b>, ends with the project <b>“Code Monument”</b>. The first lesson is about <b>world laws in a data pack</b>. Open it and read what you need to know, the key result, your role and the points to watch out for.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'📜', h:'Lesson 1 — First Trace in the World’s Code', p:'The first lesson of the course (8 cards and homework). Students launch the launcher, meet the group, try the law trainer, enter the world through the Nether, create their first law — a recipe — in a data pack, test it, and publish it in Sparks. Then they plan a base with Sparks AI and build it.',
            acc:[['📚','What you need to know','<ul><li>A <b>data pack</b> is a set of laws for the world. Laws are created outside the world, in the launcher studio, and the world runs them every time you enter.</li><li>Kinds of laws: <b>recipe</b>, <b>drop</b>, <b>command</b> on entering, <b>achievement</b>. Today: a recipe.</li><li>Path: <b>Esc</b> and exit the world saving → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → crafting table, items, result → <b>Save</b>.</li><li>The world code is entered on the <b>Play</b> tab. Students build in creative mode.</li></ul>'],
                 ['🎯','Key result','<ul><li>Everyone has saved a data pack with their own recipe by about 00:45.</li><li>🏁 The data pack is <b>published in Sparks and its link is in the task</b> (card “Signature under the law”, by about 01:00). This card is never shortened.</li><li>The student gave the item its own name, and crafted it on a crafting table in the world.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Get to know the group while the game downloads; use names all lesson.</li><li>Say the goal out loud: “Today everyone will create their own law for Minecraft, test it in the game and publish it in the portfolio.”</li><li>Don’t dictate recipes: ideas should be different — that’s what makes the project personal. Ask: “Why this item? Who will need it?”</li><li><b>Planned check:</b> remove one item from the crafting table → the reward disappears. Ask why, then use the four questions. Praise the student who finds the cause, not only the one who succeeds first time.</li></ul>'],
                 ['📌','Watch out','<ul><li>The data pack doesn’t save → one of the three parts of the form is empty.</li><li>The law doesn’t work → it was saved with the world open: exit and enter again.</li><li>The recipe doesn’t craft → items not in the same layout as in the form, or crafted in the inventory instead of on a crafting table.</li><li>The link doesn’t open → “Who can see it?” was not <b>Everyone</b>: publish again.</li></ul>'],
                 ['⚙️','Technical aspects','<ul><li>A day before, send the launcher links to the group chat.</li><li>Go through the whole path yourself: world code → shore → exit saving → data pack with a recipe → back into the world → crafting table → reward → publish in Sparks.</li><li>World code: <b>Welcome to KodlandCraft</b>.</li><li>Homework: add one more law (change the recipe, a new recipe, or a command/drop), test it, publish the update and send the link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'The first Teacher Note of each lesson has the full plan: summary, key result, the timing of each card, your role and the risks. Lesson 1 also has a preparation video. <b>Read all the Teacher Notes before the lesson.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Review the first lesson in Backoffice', blocks:[
        { t:'p', html:'Before the check, open the course in Backoffice and read through the first lesson at your own pace — the activity cards and the Teacher Notes are all there. Nothing is timed.' },
        { t:'link', href:'https://bo.kodland.org/courses/2247', e:'📘', title:'Open the course in Backoffice', small:'[2247] Minecraft CraftForge Intermediate — the lessons and their Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'The lesson content in Backoffice will keep being updated with feedback from students and tutors. Whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'The technical side of the lessons',
    desc:'The Kodland Launcher, a strong start, publishing data packs in Sparks and the most common problems.',
    obj:'Learn what makes a Minecraft CraftForge lesson work technically: the Kodland Launcher, the launcher check before the content, the last minutes for publishing and showing work, where students get the link to their data pack, and the fixes for the most common problems.',
    needs:['mcPublish'],
    offer:[['🟩','Download, install and sign in to the Kodland Launcher.'],['🚀','Run the launcher check before the content, and start with the result.'],['📤','Make sure every student publishes the data pack and sends the link.'],['🛠️','Solve the most common launcher, data pack and command problems.']],
    sections:[
      { id:'focus', e:'🎯', title:'The 3 points that make a lesson work', blocks:[
        { t:'p', html:'These are the focus areas set by the product team for the Minecraft courses. Open each one:' },
        { t:'acc', items:[
          ['🎬','Show the result first — and why creating is different from playing','<p>In the first minutes, <b>show the finished result</b> and say what students will learn today.</p><ul><li>Say the goal out loud, for example: “Today everyone will create their own law for Minecraft, test it in the game and publish it.”</li><li>Explain how building a project <b>differs from just playing</b>: usually all the rules were made by someone else; here the student creates them, and the world runs their idea.</li><li>Ask one or two students: “Have you ever changed the rules of a game? How?”</li></ul>'],
          ['🟩','The login and launcher check comes before the content','<p>Run the connection and launcher check <b>before</b> the content part, so the game downloads while you get to know the group.</p><ul><li>Connection: one minute — camera, microphone, “Hello!”.</li><li>Launcher: send the links, show the sign-in on your screen, ask for a “+” in the chat when the green bar appears.</li><li>Don’t wait for the download to finish, and don’t hold the group for one or two “−”: come back to them during independent work (the law studio or the base).</li><li>From Lesson 2 on: “Open the launcher and start your world — let it load while we talk.”</li></ul>'],
          ['⏱️','Protect the last 7–10 minutes','<p>The last <b>7–10 minutes</b> are for publishing, showing work and feedback — and they are not given away to building.</p><ul><li>Use hard stops: two-minute warning, then “Stop, hands off the keyboard. Showcase time!”, and name the first student straight away.</li><li>In the showcase, students show the law in action (craft the item live, break the block, enter the world again); the group gives feedback: name + detail.</li><li>Finish with the wrap-up, reflection, next lesson and homework — these are never shortened.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'The Kodland Launcher', blocks:[
        { t:'p', html:'Students open Minecraft through the <b>Kodland Launcher</b>: it downloads the game, opens the course world, and is where they create data packs and publish them in Sparks. You need it installed and ready on your computer before your first lesson.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Your credentials:</b> to download and sign in to the launcher, you use the <b>same credentials as Kodland Sparks</b>. They are provided to you by the <b>Operations or Teaching department</b>. Students sign in with their own Kodland account — they don’t need a new one.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Download page and official guide', small:'portfolio.kodland.org/launcher/download — Windows and Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Download the installer.</li><li>Open the downloaded file.</li><li>On the blue warning screen, click <b>More info → Run anyway</b>, then follow the installer.</li></ol>'],
          ['🍎','macOS 13 or later','<ol><li>Download the file for your processor (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Open the downloaded file and drag <b>Kodland Launcher</b> into <b>Applications</b>. Don’t open it from that window.</li><li>Open <b>Terminal</b>, paste the line below and press Return. No output is normal.</li><li>Open the launcher from <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Sign in','Click <b>Sign in</b>. A browser page opens: click <b>Sign in with Kodland</b> — one button, no password. If the browser doesn’t open, use the link under the button to get a short code (valid for five minutes).'],
          ['Download the game','The launcher downloads the game in several steps (about 550 MB; you need about 1.8 GB of free space). Leave it running.'],
          ['Play','When it says all done, press <b>Play</b>. The first launch can take up to a minute. The world code goes on the <b>Play</b> tab.'],
          ['Updates','If the launcher doesn’t update, install the latest version from the download page over the old one. Worlds stay in place.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Direct download links (the ones on the lesson card)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'When a student’s launcher doesn’t work', blocks:[
        { t:'p', html:'In Lesson 1, someone will almost certainly have trouble starting the launcher. One problem shouldn’t stop the group: <b>first give the others a short task</b>, then connect with the student. Ask them to share their screen and guide them by voice. If it isn’t solved in a couple of minutes: “Follow my screen for now, I’ll be back soon.” The best moment to come back is independent work — the law studio or the base.' },
        { t:'acc', open:false, items:[
          ['🍎','The Mac doesn’t open the launcher','Run the Terminal line from the first card and open the launcher again.'],
          ['🪟','Windows asks whether to open the file','<b>More info → Run anyway</b>.'],
          ['🔑','The student can’t sign in','The same Kodland login as for the lessons. The sign-in window opens in the browser and often hides behind other windows.'],
          ['⏳','The game download stopped','Check the internet, close the launcher and open it again — the download continues.'],
          ['👀','The launcher never worked','The student follows your screen, answers in the chat and, in the showcase, tells which law they would create. After the lesson, help them with the launch so they can do the homework on their own.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'If several students have the same error, show the solution to everyone once — and keep in touch with the rest with a short question in the chat every minute.' }
      ]},
      { id:'req', e:'💻', title:'Computer requirements', blocks:[
        { t:'p', html:'This is what a student needs for Minecraft CraftForge. It’s useful when a student has problems installing or running the game:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computer and system','Desktop or laptop with <b>Windows 10/11 (64-bit)</b> or <b>macOS 13 or later</b>. Mac: Apple Silicon only (M1 or newer).'],
          ['🧠','Memory and processor','<b>8 GB of RAM</b> with a dedicated graphics card, or <b>12 GB</b> with integrated graphics. A <b>4-core</b> processor.'],
          ['🎮','Graphics and disk','A graphics card with <b>Vulkan 1.3</b> support and <b>2 GB</b> of video memory. <b>5 GB</b> of free disk space.'],
          ['🎧','Connection and equipment','A stable internet connection that can handle video calls. A two-button mouse, keyboard, headset with a microphone, and camera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publishing the data pack in Kodland Sparks', blocks:[
        { t:'p', html:'Sparks is the students’ portfolio: all the course projects are kept there, and the AI assistant lives there. Students come back to it in every lesson to publish and ask for hints. The data pack is published <b>from the launcher editor</b>:' },
        { t:'steps', items:[
          ['Publish, next to Save','In the launcher, <b>Create → Data packs → Edit</b> on the data pack, then <b>Publish</b>, next to the purple <b>Save</b> button.'],
          ['Name and “Who can see it?” → Everyone','In “Publish to your profile”, write the name and choose <b>Everyone</b>: only then does the link open for others without logging in to the student’s account.'],
          ['Copy link','When “Published! It is on your profile.” appears, click <b>Copy link</b>, then <b>Done</b>, and paste the link into the lesson card on the platform (“Link to my Law in Kodland Sparks”).'],
          ['Lost the link?','<b>Open on Sparks</b> (in the dialog or at the top of the editor) opens the project page on the student’s profile: the link is the address in the browser bar.'],
          ['Two different steps','Publishing in Sparks and sending the link on the Kodland platform are <b>two different steps</b>. Check in Backoffice that the links really arrived.'],
          ['Each update is published again','When the student adds a law, they save, test, and publish the update again.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simulation', title:'Publish a data pack in Kodland Sparks', text:'A replica of the Kodland Launcher and the lesson card: as a student, you publish a data pack, copy its link, paste it into the card on the platform, fix a link that doesn’t open and find a link that wasn’t copied. It takes about 4 minutes. The module check unlocks when you finish.' }
      ]},
      { id:'trouble', e:'🛠️', title:'When something goes wrong', blocks:[
        { t:'acc', open:false, items:[
          ['💾','The data pack doesn’t save','Check that all three parts of the form are filled in: where the item is made, what goes in, and what comes out.'],
          ['🔁','The law doesn’t work after an edit','Click <b>Save</b>, exit the world and enter it again — laws are applied when you enter.'],
          ['🧩','The recipe doesn’t craft','The items aren’t in the same layout as in the form, or the student is crafting in the inventory instead of on a crafting table.'],
          ['🔒','The link doesn’t open','“Who can see it?” was not <b>Everyone</b>. Publish again with Everyone — the link then opens without logging in.'],
          ['🔗','The student closed the window without copying the link','Click <b>Open on Sparks</b> at the top of the data pack editor: the project page opens, and the link is the address in the browser bar.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Technical checklist for every lesson', blocks:[
        { t:'check', title:'✅ My technical checklist', groups:[
          { h:'☑️ Before the lesson', items:['I read all the Teacher Notes of the lesson and watched the preparation video.','My launcher is installed and signed in, and I went through the lesson path in my own data pack.','Before Lesson 1, I sent the launcher links to the group chat.'] },
          { h:'🎬 During the lesson', items:['I ran the connection and launcher check before the content.','I showed the finished result and said the lesson goal in the first minutes.'] },
          { h:'📤 At the end of the lesson', items:['I protected the last 7–10 minutes for publishing, showing work and feedback.','Everyone sent the link to the published data pack in the lesson card.','I opened some links to check that they work.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Who is Minecraft CraftForge Intermediate for, and how long is each lesson?',
      o:['Students aged 8–9, with 60-minute lessons.','Students aged 10–12, with 90-minute group lessons.','Students aged 13–17, with 60-minute lessons.'],
      a:1, e:'Intermediate is for students aged 10–12: 40 lessons of 90 minutes in a group.' },
    { q:'Which programming language do students use in the course?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Students write Python programs that build in the Minecraft world.' },
    { q:'What is a data pack in this course?',
      o:['A file with screenshots of the student’s builds.','A set of laws for the world (recipes, drops, commands…) that Minecraft runs every time you enter.','A pack of ready-made worlds to download.'],
      a:1, e:'A data pack is a set of laws: the world runs them every time the student enters.' },
    { q:'What does the student leave the course with?',
      o:['A written final exam.','More than nine projects in their Kodland Sparks portfolio and an original graduation project presented on Demo Day.','Only the data pack from Lesson 1.'],
      a:1, e:'Nine+ projects in the portfolio and an original project, taken from idea to Demo Day.' },
    { q:'How should students use Sparks AI?',
      o:['Copy its answers as they are.','Evaluate its suggestions and decide what to take.','Never use it.'],
      a:1, e:'Sparks suggests ideas and test scenarios; the student evaluates them instead of copying.' }
  ],
  m2:[
    { q:'When do you run the connection and launcher check?',
      o:['At the start of the lesson, before the content, so the game downloads while you get to know the group.','In the middle of the lesson, when students need Minecraft.','At the end, so it doesn’t take time from the lesson.'],
      a:0, e:'Before the content: the game downloads while you get to know the group.' },
    { q:'Which credentials do you use to download and sign in to the Kodland Launcher?',
      o:['A new account that you create yourself.','The same credentials as Kodland Sparks, provided by the Operations or Teaching department.','A student’s account.'],
      a:1, e:'The launcher uses your Kodland Sparks credentials, provided by the Operations or Teaching department.' },
    { q:'Where does a student get the link to the published data pack?',
      o:['From a comment in the launcher.','In “Publish to your profile”: Copy link (or Open on Sparks and copy the address from the browser bar).','From the Play tab of the launcher.'],
      a:1, e:'Copy link right after publishing; if it was lost, Open on Sparks shows the project page, whose address is the link.' },
    { q:'What are the last 7–10 minutes of the lesson for?',
      o:['Extra building time.','Publishing, showing work and feedback — plus the wrap-up and homework.','Free play.'],
      a:1, e:'Protect the last minutes: publishing, the showcase with feedback, and the wrap-up.' },
    { ctx:'A student published the data pack, but the link doesn’t open for you.',
      q:'What is the most likely cause, and the fix?',
      o:['“Who can see it?” was not set to Everyone: publish again with Everyone.','The data pack is broken: create a new one from scratch.','Links only open the next day.'],
      a:0, e:'Only with Everyone does the link open without logging in. Publishing again with Everyone fixes it.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Modules completed!',
  html: `<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p>
    <p>👉 <b>You must complete and pass the DST test for the training to be considered successfully completed.</b> If you do not complete the DST test, the training will remain incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  nexts: [
    ['📒', '<b>Before every lesson:</b> read the Teacher Notes in Backoffice and go through the lesson path in your own data pack.'],
    ['🟩', '<b>First minutes:</b> connection and launcher check, then the finished result and the goal.'],
    ['🔗', '<b>The link:</b> Publish → Everyone → Copy link, pasted into the lesson card.'],
    ['⏱️', '<b>Last 7–10 minutes:</b> publishing, showing work and feedback.']
  ]
};
