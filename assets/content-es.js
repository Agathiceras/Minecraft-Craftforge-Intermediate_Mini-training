/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2235 · LatAm] · SPANISH (LatAm)
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'es' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formación de curso EM',
  footer: 'kodland · Nuevo Modelo Educativo · Formación de curso',
  devLink: '🛠 Developer',
  logoSub: 'Nuevo Modelo Educativo',
  navHome: '← Inicio',
  navBackModule: '← Volver al módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Empezar →',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  progLabel: 'módulos completados',
  progAllDone: 'Módulos completados 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificación del módulo',
  ctaText: '{n} preguntas cortas. Necesitas 70% o más para aprobar.',
  lockSim: '🔒 Completa la simulación de arriba para desbloquear la verificación.',
  startCheck: 'Empezar la verificación →',
  retake: '🔁 Repetir la verificación',
  qmeta: '{e} Verificación del Módulo {n} · Pregunta {i} de {total}',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste bien <b>{score} de {n}</b>.',
  failText: 'Necesitas 70% o más. Repasa el módulo y vuelve a intentarlo: puedes repetirlo las veces que necesites.',
  nextUnlocked: 'Se desbloqueó el <b>Módulo {n} · {title}</b>.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste los dos módulos de esta formación.',
  seeNext: 'Ver el siguiente paso →',
  reviewModule: '📖 Repasar el módulo',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Falta un último paso: el test DST en la página de la formación en el LMS.',
  homeDoneBtn: 'Ver qué hacer ahora →',
  doneBadge: '✓ Completado',
  doneBack: 'Volver a los módulos',
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir ↗',
  simOpen: '▶ Abrir la simulación aquí',
  simClose: '✕ Cerrar la simulación',
  simNewTab: 'Abrir en otra pestaña ↗',
  simDone: '✅ Simulación completada',
  simTodo: '○ Simulación pendiente',
  checkTag: 'Márcalos',
  mythTag: 'Mito',
  mythTap: 'Toca para ver la realidad →',
  mythReality: 'Realidad ✓',
  sortWrong: '✗ No exactamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2235';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Formación de curso · [2235]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: 'Para estudiantes de 10–12 años: escriben las leyes del mundo de Minecraft con data packs y con programas en Python que construyen puentes, torres y mundos enteros. Dos módulos: el contenido del curso y la parte técnica de las lecciones.',
  facts: [
    ['🧑‍💻', '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador. Cada módulo termina con una verificación corta.'],
    ['⚡', '<b>Práctica incluida.</b> Una simulación para practicar cómo se publica un data pack en Kodland Sparks y los problemas más comunes.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de empezar:</b> haz primero la <b>formación principal del Nuevo Modelo Educativo (EM)</b>. Esta formación del curso va después y parte de lo que ya viste allí: el Backoffice y las Teacher Notes, el Classroom con el Follow Mode, el recorrido por Kodland Sparks y la calidad de la lección.' },
  { kind:'warn', e:'🔄', html:'<b>El contenido de las lecciones en el Backoffice se actualiza constantemente.</b> Con el feedback de estudiantes y tutores, las lecciones se mejoran todo el tiempo. No te preocupes: cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'El contenido del curso',
    desc:'Los datos generales del curso, lo que logra el estudiante y las primeras lecciones del Módulo 1.',
    obj:'Prepárate para dar las primeras lecciones de Minecraft CraftForge Intermediate. En ellas, estudiantes de 10–12 años crean sus primeras leyes para el mundo de Minecraft en un data pack (una receta, un drop y comandos al entrar al mundo) y las publican en Kodland Sparks.',
    offer:[['🧱','Conocer los datos generales del curso y lo que logra el estudiante.'],['📖','Saber qué pasa en cada una de las primeras lecciones.'],['📦','Entender qué es un data pack y cómo trabajan con él los estudiantes.'],['📘','Revisar las lecciones y sus Teacher Notes en el Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'El curso', blocks:[
        { t:'meta', items:[['🧒','Edad','10–12 años'],['⏱️','Lección','90 min'],['📚','Programa','40 lecciones · 10 módulos'],['🐍','Lenguaje','Python']] },
        { t:'trio', items:[
          ['🎬','Primero el resultado','Cada lección empieza mostrando el resultado final y diciendo el objetivo en voz alta. Después muestras todo el camino en tu pantalla y guías a los estudiantes paso a paso.'],
          ['📜','De jugador a creador','Normalmente, un jugador sigue las reglas del mundo. Aquí el estudiante las escribe: recetas, drops, comandos y, después, programas en Python que construyen.'],
          ['🔍','El error es parte del proceso','Cuando el mundo no responde: <i>¿Qué veo? ¿Por qué pasa? ¿Qué voy a probar? ¿Funcionó?</i> Las lecciones incluyen revisiones planificadas para que los estudiantes encuentren la causa por su cuenta.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Los estudiantes publican sus trabajos en <b>Kodland Sparks</b>, su portafolio, en cada lección. <b>Sparks AI</b> sugiere ideas y escenarios de prueba, pero el estudiante decide qué tomar.' }
      ]},
      { id:'goals', e:'🎓', title:'Qué logra el estudiante', blocks:[
        { t:'p', html:'Al terminar el curso, el estudiante tiene estos logros:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea proyectos','Más de nueve proyectos en su portafolio de Kodland Sparks, y un proyecto final original.'],
          ['🐍','Python que construye','Escribe programas en Python que hacen aparecer puentes, torres y patrones en el mundo del juego. Comandos, argumentos, variables, tipos de datos, ciclos, condiciones y funciones se vuelven herramientas de todos los días.'],
          ['📜','Las reglas del mundo','Con los data packs, define sus propias leyes para Minecraft: recetas, comandos personalizados, temporizadores, eventos y puntajes.'],
          ['🌍','Generadores y juegos','Escribe algoritmos que crean chunks enteros del mundo, y construye minijuegos para que otros jueguen.'],
          ['🚀','Lleva una idea al Demo Day','Lleva un proyecto desde el concepto hasta una presentación frente al grupo, y explica cómo funciona el código.'],
          ['🧠','Habilidades para la vida','Creatividad, trabajo en equipo (probar los proyectos de los demás), comunicación y pensamiento crítico: encontrar errores y evaluar las respuestas de Sparks AI en lugar de copiarlas.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Las primeras lecciones', blocks:[
        { t:'p', html:'El Módulo 1, <b>«El código del mundo. Primeros programas y leyes del mundo»</b>, termina con el proyecto <b>«Monumento de código»</b>. Las dos primeras lecciones tratan sobre las <b>leyes del mundo en un data pack</b>; los programas en Python empiezan justo después. Abre cada lección y revisa lo que necesitas saber, el resultado clave, tu rol y los puntos de atención.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'📜', h:'Lección 1 — Primera huella en el código del mundo', p:'La primera lección del curso (8 tarjetas y la tarea). Los estudiantes abren el launcher, conocen al grupo, prueban el entrenador de leyes, entran al mundo por el Nether, crean su primera ley (una receta) en un data pack, la prueban y la publican en Sparks. Después planifican una base con Sparks AI y la construyen.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Un <b>data pack</b> es un conjunto de leyes para el mundo. Las leyes se crean fuera del mundo, en el estudio del launcher, y el mundo las ejecuta cada vez que entras.</li><li>Tipos de leyes: <b>receta</b>, <b>drop</b>, <b>comando</b> al entrar, <b>logro</b>. Hoy: una receta.</li><li>Ruta: <b>Esc</b> y salir del mundo guardando → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → mesa de trabajo, objetos, resultado → <b>Save</b>.</li><li>El código del mundo se escribe en la pestaña <b>Play</b>. Los estudiantes construyen en modo creativo.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Hacia el minuto 00:45, todos guardaron un data pack con su propia receta.</li><li>🏁 El data pack está <b>publicado en Sparks y su link está en la tarea</b> (tarjeta «Firma la ley», hacia el minuto 01:00). Esta tarjeta nunca se recorta.</li><li>El estudiante le puso nombre propio al objeto y lo fabricó en una mesa de trabajo dentro del mundo.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Conoce al grupo mientras se descarga el juego; usa sus nombres durante toda la lección.</li><li>Di el objetivo en voz alta: «Hoy cada uno va a crear su propia ley para Minecraft, la va a probar en el juego y la va a publicar en su portafolio».</li><li>No dictes recetas: las ideas tienen que ser distintas, eso es lo que hace personal el proyecto. Pregunta: «¿Por qué este objeto? ¿Quién lo va a necesitar?».</li><li><b>Revisión planificada:</b> quita un objeto de la mesa de trabajo → la recompensa desaparece. Pregunta por qué y usa las cuatro preguntas. Elogia al estudiante que encuentra la causa, no solo al que lo logra a la primera.</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>El data pack no se guarda → una de las tres partes del formulario está vacía.</li><li>La ley no funciona → se guardó con el mundo abierto: hay que salir y volver a entrar.</li><li>La receta no se fabrica → los objetos no están en la misma disposición que en el formulario, o se fabrica en el inventario en lugar de en una mesa de trabajo.</li><li>El link no abre → en «Who can see it?» no se eligió <b>Everyone</b>: hay que publicar de nuevo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Un día antes, envía los links del launcher al chat del grupo.</li><li>Haz tú todo el recorrido: código del mundo → orilla → salir guardando → data pack con una receta → volver al mundo → mesa de trabajo → recompensa → publicar en Sparks.</li><li>Código del mundo: <b>Welcome to KodlandCraft</b>.</li><li>Tarea: agregar una ley más (cambiar la receta, una receta nueva, o un comando/drop), probarla, publicar la actualización y enviar el link.</li></ul>']] },
          { tab:'M1L2', e:'🏘️', h:'Lección 2 — El camino a la plaza', p:'Los estudiantes aprenden la diferencia entre un <b>comando</b> y una <b>ley</b>. Un comando en el chat cambia el mundo al instante, pero una sola vez; una ley del data pack queda guardada y el mundo la ejecuta solo. Agregan dos tipos nuevos de leyes al mismo data pack: un <b>drop</b> y <b>comandos al entrar al mundo</b>.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Los comandos del chat empiezan con una barra: <code>/time set day</code>, <code>/give @s diamond 4</code>, <code>/effect give @s speed 15 1</code>.</li><li>El experimento: la velocidad de 15 segundos se termina y el mundo «olvida» el comando. Un comando se dice una vez; una ley se mantiene siempre.</li><li><b>Drop</b>: Edit → Add → <b>+ Drop</b> → bloque → qué suelta → Save. En <b>modo creativo no se suelta nada</b> (momento planificado): se prueba con <code>/gamemode survival</code> y se vuelve con <code>/gamemode creative</code>.</li><li><b>Comandos al entrar</b>: Add → <b>+ Command</b>, escritos <b>sin barra</b> y con <b>@a</b> en lugar de @s. Se ejecutan cada vez que se entra al mundo.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Funcionaron dos comandos del chat (día y diamantes) y el estudiante explica por qué se terminó la velocidad.</li><li>🏁 El <b>link al data pack actualizado con un drop que funciona</b> está en la tarea hacia el minuto 00:45.</li><li>Un ritual de entrada con al menos dos comandos, probado al volver a entrar, y el estudiante decidió qué tomar del consejo de Sparks.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Empieza con la tarea: 2–3 estudiantes muestran qué ley agregaron y cómo la probaron.</li><li>No dictes los comandos de inmediato: primero deja que prueben con la pista y después muestra el comando completo.</li><li>Antes del drop y del ritual, muestra brevemente en tu pantalla por dónde empezar.</li><li>Dales un minuto para descubrir por qué no se soltó nada; si nadie lo encuentra, muestra la respuesta en tu pantalla.</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>Un comando del chat no hace nada → falta la barra o la distribución del teclado es otra.</li><li>Un drop reemplaza lo que normalmente suelta el bloque: es lo esperado.</li><li>Los estudiantes deben seguir trabajando en <b>un solo</b> data pack (el de la receta).</li><li>Un comando del ritual no funciona → quitar la barra, usar @a, guardar y volver a entrar al mundo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>El mismo mundo de la Lección 1: los estudiantes lo abren en la pestaña <b>Play</b> y aparecen en su base. Si el mundo no está, se puede volver a crear con el código.</li><li>Antes de la lección, prueba el drop y los comandos en tu propio data pack (el drop, solo en modo supervivencia).</li><li>Tarea: una ley más en el mismo data pack, probada, publicada y con el link enviado.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de cada lección tiene el plan completo: resumen, resultado clave, los tiempos de cada tarjeta, tu rol y los riesgos. La Lección 1 también tiene un video de preparación. <b>Lee todas las Teacher Notes antes de la clase.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Repasa las lecciones en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y lee las lecciones a tu ritmo: las tarjetas de actividad y las Teacher Notes están todas allí. No hay tiempo límite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2235', e:'📘', title:'Abrir el curso en el Backoffice', small:'[2235] Minecraft CraftForge Intermediate — las lecciones y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se irá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'La parte técnica de las lecciones',
    desc:'El Kodland Launcher, un buen inicio, la publicación de data packs en Sparks y los problemas más comunes.',
    obj:'Conoce lo que hace que una lección de Minecraft CraftForge funcione técnicamente: el Kodland Launcher, la revisión del launcher antes del contenido, los últimos minutos para publicar y mostrar los trabajos, dónde obtienen los estudiantes el link de su data pack y las soluciones a los problemas más comunes.',
    needs:['mcPublish'],
    offer:[['🟩','Descargar, instalar e iniciar sesión en el Kodland Launcher.'],['🚀','Hacer la revisión del launcher antes del contenido y empezar por el resultado.'],['📤','Lograr que cada estudiante publique el data pack y envíe el link.'],['🛠️','Resolver los problemas más comunes del launcher, de los data packs y de los comandos.']],
    sections:[
      { id:'focus', e:'🎯', title:'Los 3 puntos que hacen funcionar una lección', blocks:[
        { t:'p', html:'Estos son los puntos de foco que definió el equipo de producto para los cursos de Minecraft. Abre cada uno:' },
        { t:'acc', items:[
          ['🎬','Primero el resultado, y por qué crear es distinto de jugar','<p>En los primeros minutos, <b>muestra el resultado final</b> y di qué van a aprender hoy los estudiantes.</p><ul><li>Di el objetivo en voz alta, por ejemplo: «Hoy cada uno va a crear su propia ley para Minecraft, la va a probar en el juego y la va a publicar».</li><li>Explica en qué se <b>diferencia crear un proyecto de solo jugar</b>: normalmente, todas las reglas las hizo otra persona; aquí el estudiante las crea, y el mundo ejecuta su idea.</li><li>Pregunta a uno o dos estudiantes: «¿Alguna vez cambiaste las reglas de un juego? ¿Cómo?».</li></ul>'],
          ['🟩','La revisión del inicio de sesión y del launcher va antes del contenido','<p>Haz la revisión de la conexión y del launcher <b>antes</b> de la parte de contenido, así el juego se descarga mientras conoces al grupo.</p><ul><li>Conexión: un minuto, con cámara, micrófono y «¡Hola!».</li><li>Launcher: envía los links, muestra el inicio de sesión en tu pantalla y pide un «+» en el chat cuando aparezca la barra verde.</li><li>No esperes a que termine la descarga ni detengas al grupo por uno o dos «−»: vuelve con ellos durante el trabajo independiente (el estudio de leyes o la base).</li><li>Desde la Lección 2: «Abran el launcher e inicien su mundo; que cargue mientras conversamos».</li></ul>'],
          ['⏱️','Protege los últimos 7–10 minutos','<p>Los últimos <b>7–10 minutos</b> son para publicar, mostrar los trabajos y dar feedback, y no se ceden a la construcción.</p><ul><li>Usa cortes firmes: aviso de dos minutos, después «Alto, manos fuera del teclado. ¡Hora de mostrar!», y nombra de inmediato al primer estudiante.</li><li>En la muestra, los estudiantes enseñan la ley en acción (fabrican el objeto en vivo, rompen el bloque, vuelven a entrar al mundo); el grupo da feedback: nombre + detalle.</li><li>Termina con el cierre, la reflexión, la próxima lección y la tarea: nunca se recortan.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'El Kodland Launcher', blocks:[
        { t:'p', html:'Los estudiantes abren Minecraft con el <b>Kodland Launcher</b>: descarga el juego, abre el mundo del curso y es donde crean los data packs y los publican en Sparks. Necesitas tenerlo instalado y listo en tu computadora antes de tu primera clase.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Tus credenciales:</b> para descargar el launcher e iniciar sesión, usas las <b>mismas credenciales de Kodland Sparks</b>. Te las da el <b>departamento de Operaciones o de Enseñanza</b>. Los estudiantes inician sesión con su propia cuenta de Kodland: no necesitan una nueva.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Página de descarga y guía oficial', small:'portfolio.kodland.org/launcher/download — Windows y Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Descarga el instalador.</li><li>Abre el archivo descargado.</li><li>En la pantalla azul de advertencia, haz clic en <b>More info → Run anyway</b> y sigue el instalador.</li></ol>'],
          ['🍎','macOS 13 o posterior','<ol><li>Descarga el archivo para tu procesador (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Abre el archivo descargado y arrastra <b>Kodland Launcher</b> a <b>Applications</b>. No lo abras desde esa ventana.</li><li>Abre <b>Terminal</b>, pega la línea de abajo y presiona Return. Es normal que no aparezca ningún mensaje.</li><li>Abre el launcher desde <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Iniciar sesión','Haz clic en <b>Sign in</b>. Se abre una página en el navegador: haz clic en <b>Sign in with Kodland</b>, un solo botón y sin contraseña. Si el navegador no se abre, usa el link debajo del botón para obtener un código corto (válido por cinco minutos).'],
          ['Descargar el juego','El launcher descarga el juego en varios pasos (unos 550 MB; necesitas alrededor de 1,8 GB de espacio libre). Déjalo trabajar.'],
          ['Jugar','Cuando indique que todo está listo, presiona <b>Play</b>. El primer inicio puede tardar hasta un minuto. El código del mundo va en la pestaña <b>Play</b>.'],
          ['Actualizaciones','Si el launcher no se actualiza, instala la última versión desde la página de descarga encima de la anterior. Los mundos se conservan.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Links de descarga directa (los de la tarjeta de la lección)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Cuando el launcher de un estudiante no funciona', blocks:[
        { t:'p', html:'En la Lección 1, es casi seguro que alguien va a tener problemas para iniciar el launcher. Un problema no debe frenar al grupo: <b>primero dale una tarea corta al resto</b> y después conéctate con el estudiante. Pídele que comparta pantalla y guíalo con la voz. Si no se resuelve en un par de minutos: «Por ahora sigue mi pantalla, ya vuelvo contigo». El mejor momento para volver es el trabajo independiente: el estudio de leyes o la base.' },
        { t:'acc', open:false, items:[
          ['🍎','La Mac no abre el launcher','Ejecuta la línea de Terminal de la primera tarjeta y vuelve a abrir el launcher.'],
          ['🪟','Windows pregunta si abrir el archivo','<b>More info → Run anyway</b>.'],
          ['🔑','El estudiante no puede iniciar sesión','Es el mismo usuario de Kodland que usa en las clases. La ventana de inicio de sesión se abre en el navegador y muchas veces queda escondida detrás de otras ventanas.'],
          ['⏳','La descarga del juego se detuvo','Revisa el internet, cierra el launcher y vuelve a abrirlo; la descarga continúa.'],
          ['👀','El launcher nunca funcionó','El estudiante sigue tu pantalla, responde en el chat y, en la muestra, cuenta qué ley crearía. Después de la clase, ayúdalo a iniciar el launcher para que pueda hacer la tarea por su cuenta.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Si varios estudiantes tienen el mismo error, muestra la solución a todos una sola vez, y mantén el contacto con el resto con una pregunta corta en el chat cada minuto.' }
      ]},
      { id:'req', e:'💻', title:'Requisitos de la computadora', blocks:[
        { t:'p', html:'Esto es lo que necesita el estudiante para Minecraft CraftForge. Es útil conocerlo cuando un estudiante tiene problemas para instalar o abrir el juego:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computadora y sistema','De escritorio o laptop con <b>Windows 10/11 (64 bits)</b> o <b>macOS 13 o posterior</b>. En Mac: solo Apple Silicon (M1 o más reciente).'],
          ['🧠','Memoria y procesador','<b>8 GB de RAM</b> con tarjeta gráfica dedicada, o <b>12 GB</b> con gráficos integrados. Un procesador de <b>4 núcleos</b>.'],
          ['🎮','Gráficos y disco','Una tarjeta gráfica compatible con <b>Vulkan 1.3</b> y con <b>2 GB</b> de memoria de video. <b>5 GB</b> de espacio libre en disco.'],
          ['🎧','Conexión y equipo','Internet estable que soporte videollamadas. Mouse de dos botones, teclado, auriculares con micrófono y cámara.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar el data pack en Kodland Sparks', blocks:[
        { t:'p', html:'Sparks es el portafolio de los estudiantes: allí se guardan todos los proyectos del curso y allí está el asistente de IA. Los estudiantes vuelven a Sparks en cada lección para publicar y pedir pistas. El data pack se publica <b>desde el editor del launcher</b>:' },
        { t:'steps', items:[
          ['Publish, junto a Save','En el launcher, <b>Create → Data packs → Edit</b> en el data pack, y después <b>Publish</b>, junto al botón morado <b>Save</b>.'],
          ['Nombre y «Who can see it?» → Everyone','En «Publish to your profile», el estudiante escribe el nombre y elige <b>Everyone</b>: solo así el link se abre para otras personas sin iniciar sesión en la cuenta del estudiante.'],
          ['Copy link','Cuando aparece «Published! It is on your profile.», hace clic en <b>Copy link</b>, después en <b>Done</b>, y pega el link en la tarjeta de la lección en la plataforma («Link a mi ley en Kodland Sparks»).'],
          ['¿Perdió el link?','<b>Open on Sparks</b> (en el cuadro de diálogo o arriba en el editor) abre la página del proyecto en el perfil del estudiante: el link es la dirección en la barra del navegador.'],
          ['Dos pasos distintos','Publicar en Sparks y enviar el link en la plataforma Kodland son <b>dos pasos distintos</b>. Revisa en el Backoffice que los links realmente llegaron.'],
          ['Cada actualización se vuelve a publicar','Cuando el estudiante agrega una ley (en la tarea o en la Lección 2), guarda, prueba y vuelve a publicar la actualización.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simulación', title:'Publicar un data pack en Kodland Sparks', text:'Una réplica del Kodland Launcher y de la tarjeta de la lección: como un estudiante, publicas un data pack, copias su link, lo pegas en la tarjeta de la plataforma, resuelves un link que no abre y encuentras un link que no se copió. Toma unos 4 minutos. La verificación del módulo se desbloquea al terminar.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Cuando algo sale mal', blocks:[
        { t:'acc', open:false, items:[
          ['💾','El data pack no se guarda','Revisa que estén completas las tres partes del formulario: dónde se fabrica el objeto, qué entra y qué sale.'],
          ['🔁','La ley no funciona después de un cambio','Haz clic en <b>Save</b>, sal del mundo y vuelve a entrar: las leyes se aplican al entrar.'],
          ['🧩','La receta no se fabrica','Los objetos no están en la misma disposición que en el formulario, o el estudiante fabrica en el inventario en lugar de en una mesa de trabajo.'],
          ['⌨️','Un comando del chat no hace nada','Revisa la barra <b>/</b> al inicio y la distribución del teclado: tiene que ser la barra normal, no otro símbolo. Los espacios, como en la pista.'],
          ['💎','El drop no se suelta','En modo creativo no se suelta nada: <code>/gamemode survival</code> y después romper justo el bloque elegido en el formulario. Al terminar, <code>/gamemode creative</code>.'],
          ['⚡','Un comando del data pack no funciona','Quita la barra al inicio de la línea y usa <b>@a</b>, como en la tarjeta. Guarda y vuelve a entrar al mundo.'],
          ['🔒','El link no abre','En «Who can see it?» no se eligió <b>Everyone</b>. Hay que publicar de nuevo con Everyone; así el link se abre sin iniciar sesión.'],
          ['🔗','El estudiante cerró la ventana sin copiar el link','Haz clic en <b>Open on Sparks</b>, arriba en el editor del data pack: se abre la página del proyecto, y el link es la dirección en la barra del navegador.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada clase', blocks:[
        { t:'check', title:'✅ Mi checklist técnico', groups:[
          { h:'☑️ Antes de la clase', items:['Leí todas las Teacher Notes de la lección y vi el video de preparación.','Mi launcher está instalado y con la sesión iniciada, y hice el recorrido de la lección en mi propio data pack.','Antes de la Lección 1, envié los links del launcher al chat del grupo.'] },
          { h:'🎬 Durante la clase', items:['Hice la revisión de la conexión y del launcher antes del contenido.','Mostré el resultado final y dije el objetivo de la lección en los primeros minutos.'] },
          { h:'📤 Al final de la clase', items:['Protegí los últimos 7–10 minutos para publicar, mostrar los trabajos y dar feedback.','Todos enviaron el link del data pack publicado en la tarjeta de la lección.','Abrí algunos links para comprobar que funcionan.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'¿Para quién es Minecraft CraftForge Intermediate y cuánto dura cada lección?',
      o:['Para estudiantes de 8–9 años, con lecciones de 60 minutos.','Para estudiantes de 10–12 años, con lecciones grupales de 90 minutos.','Para estudiantes de 13–17 años, con lecciones de 60 minutos.'],
      a:1, e:'Intermediate es para estudiantes de 10–12 años: 40 lecciones grupales de 90 minutos.' },
    { q:'¿Qué lenguaje de programación usan los estudiantes en el curso?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Los estudiantes escriben programas en Python que construyen en el mundo de Minecraft.' },
    { q:'¿Qué es un data pack en este curso?',
      o:['Un archivo con capturas de las construcciones del estudiante.','Un conjunto de leyes para el mundo (recetas, drops, comandos…) que Minecraft ejecuta cada vez que entras.','Un paquete de mundos listos para descargar.'],
      a:1, e:'Un data pack es un conjunto de leyes: el mundo las ejecuta cada vez que el estudiante entra.' },
    { q:'¿Con qué termina el curso el estudiante?',
      o:['Con un examen final escrito.','Con más de nueve proyectos en su portafolio de Kodland Sparks y un proyecto final original presentado en el Demo Day.','Solo con el data pack de la Lección 1.'],
      a:1, e:'Más de nueve proyectos en el portafolio y un proyecto original, llevado desde la idea hasta el Demo Day.' },
    { q:'¿Cómo deben usar Sparks AI los estudiantes?',
      o:['Copiando sus respuestas tal cual.','Evaluando sus sugerencias y decidiendo qué tomar.','No deben usarlo nunca.'],
      a:1, e:'Sparks sugiere ideas y escenarios de prueba; el estudiante los evalúa en lugar de copiarlos.' }
  ],
  m2:[
    { q:'¿Cuándo haces la revisión de la conexión y del launcher?',
      o:['Al inicio de la lección, antes del contenido, así el juego se descarga mientras conoces al grupo.','A mitad de la lección, cuando los estudiantes necesitan Minecraft.','Al final, para que no le quite tiempo a la lección.'],
      a:0, e:'Antes del contenido: el juego se descarga mientras conoces al grupo.' },
    { q:'¿Qué credenciales usas para descargar el Kodland Launcher e iniciar sesión?',
      o:['Una cuenta nueva que creas tú.','Las mismas credenciales de Kodland Sparks, que te da el departamento de Operaciones o de Enseñanza.','La cuenta de un estudiante.'],
      a:1, e:'El launcher usa tus credenciales de Kodland Sparks, que te da el departamento de Operaciones o de Enseñanza.' },
    { q:'¿Dónde obtiene el estudiante el link del data pack publicado?',
      o:['De un comentario en el launcher.','En «Publish to your profile»: Copy link (u Open on Sparks y copiar la dirección de la barra del navegador).','De la pestaña Play del launcher.'],
      a:1, e:'Copy link justo después de publicar; si se perdió, Open on Sparks muestra la página del proyecto, y su dirección es el link.' },
    { q:'¿Para qué son los últimos 7–10 minutos de la lección?',
      o:['Para construir un rato más.','Para publicar, mostrar los trabajos y dar feedback, además del cierre y la tarea.','Para jugar libremente.'],
      a:1, e:'Protege los últimos minutos: la publicación, la muestra con feedback y el cierre.' },
    { ctx:'Un estudiante publicó el data pack, pero a ti no te abre el link.',
      q:'¿Cuál es la causa más probable y cómo se resuelve?',
      o:['En «Who can see it?» no se eligió Everyone: hay que publicar de nuevo con Everyone.','El data pack está roto: hay que crear uno nuevo desde cero.','Los links solo se abren al día siguiente.'],
      a:0, e:'Solo con Everyone el link se abre sin iniciar sesión. Publicar de nuevo con Everyone lo resuelve.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: '¡Módulos completados!',
  html: `<p>¡Ya casi terminas! Vuelve a la página de la formación en el LMS, desde donde accediste a esta formación. El test DST está justo debajo de la formación.</p>
    <p>👉 <b>Debes hacer y aprobar el test DST para que la formación se considere completada.</b> Si no haces el DST, la formación quedará incompleta y puede vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada clase:</b> lee las Teacher Notes en el Backoffice y haz el recorrido de la lección en tu propio data pack.'],
    ['🟩', '<b>Primeros minutos:</b> revisión de la conexión y del launcher, y después el resultado final y el objetivo.'],
    ['🔗', '<b>El link:</b> Publish → Everyone → Copy link, pegado en la tarjeta de la lección.'],
    ['⏱️', '<b>Últimos 7–10 minutos:</b> publicar, mostrar los trabajos y dar feedback.']
  ]
};
