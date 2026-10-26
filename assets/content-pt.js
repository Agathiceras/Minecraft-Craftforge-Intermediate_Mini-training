/* ============================================================
   EM course training · Minecraft CraftForge Intermediate [2231] · PORTUGUESE (pt-BR)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcint';
COURSE.code = '2231';
COURSE.title = 'Minecraft CraftForge Intermediate';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2231]',
  title: 'Minecraft CraftForge <span class="hl">Intermediate</span>',
  lead: 'Para alunos de 10–12 anos: eles escrevem as leis do mundo do Minecraft com data packs e programas em Python que constroem pontes, torres e mundos inteiros. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação para treinar a publicação de um data pack no Kodland Sparks e os problemas mais comuns.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📜', color:'#0EA5E9', title:'O conteúdo do curso',
    desc:'Os dados gerais do curso, o que o aluno conquista e as primeiras aulas do Módulo 1.',
    obj:'Prepare-se para dar as primeiras aulas do Minecraft CraftForge Intermediate. Nelas, alunos de 10 a 12 anos criam as primeiras leis para o mundo do Minecraft num data pack — uma receita, um drop e comandos ao entrar no mundo — e publicam tudo no Kodland Sparks.',
    offer:[['🧱','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece em cada uma das primeiras aulas.'],['📦','Entender o que é um data pack e como os alunos trabalham com ele.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','10–12 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas · 10 módulos'],['🐍','Linguagem','Python']] },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','Toda aula começa mostrando o resultado pronto e dizendo o objetivo em voz alta. Depois você mostra o caminho completo na sua tela e guia os alunos um passo por vez.'],
          ['📜','De jogador a criador','Normalmente o jogador segue as regras do mundo. Aqui o aluno escreve essas regras: receitas, drops, comandos e, depois, programas em Python que constroem.'],
          ['🔍','O erro faz parte do processo','Quando o mundo não responde: <i>O que eu vejo? Por que isso acontece? O que vou tentar? Funcionou?</i> As aulas têm verificações planejadas para os alunos acharem a causa sozinhos.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Em todas as aulas, os alunos publicam os trabalhos no <b>Kodland Sparks</b>, o portfólio deles. O <b>Sparks AI</b> sugere ideias e cenários de teste, mas quem decide o que aproveitar é o aluno.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria projetos','Mais de nove projetos no portfólio do Kodland Sparks, além de um projeto autoral de conclusão.'],
          ['🐍','Python que constrói','Escreve programas em Python que fazem aparecer pontes, torres e padrões no mundo do jogo. Comandos, argumentos, variáveis, tipos de dados, laços, condições e funções viram ferramentas do dia a dia.'],
          ['📜','As regras do mundo','Com data packs, define as próprias leis do Minecraft: receitas, comandos personalizados, temporizadores, eventos e pontuação.'],
          ['🌍','Geradores e jogos','Escreve algoritmos que criam pedaços inteiros do mundo e faz minijogos para outras pessoas jogarem.'],
          ['🚀','Leva uma ideia até o Demo Day','Conduz um projeto da ideia até a apresentação para a turma e explica como o código funciona.'],
          ['🧠','Habilidades para a vida','Criatividade, trabalho em equipe (testar os projetos dos colegas), comunicação e pensamento crítico: encontrar bugs e avaliar as respostas do Sparks AI em vez de copiá-las.']
        ]}
      ]},
      { id:'les', e:'📖', title:'As primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1, <b>«O Código do Mundo. Primeiros programas e leis do mundo»</b>, termina com o projeto <b>«Monumento de Código»</b>. As duas primeiras aulas tratam das <b>leis do mundo num data pack</b>; os programas em Python começam logo depois. Abra cada aula e leia o que você precisa saber, o resultado-chave, o seu papel e os pontos de atenção.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'📜', h:'Aula 1 — A primeira marca no código do mundo', p:'A primeira aula do curso (8 cartões e tarefa de casa). Os alunos abrem o launcher, conhecem a turma, testam o treinador de leis, entram no mundo pelo Nether, criam a primeira lei — uma receita — num data pack, testam e publicam no Sparks. Depois planejam uma base com o Sparks AI e a constroem.',
            acc:[['📚','O que você precisa saber','<ul><li>Um <b>data pack</b> é um conjunto de leis para o mundo. As leis são criadas fora do mundo, no estúdio do launcher, e o mundo executa essas leis toda vez que você entra.</li><li>Tipos de leis: <b>receita</b>, <b>drop</b>, <b>comando</b> ao entrar, <b>conquista</b>. Hoje: uma receita.</li><li>Caminho: <b>Esc</b> e sair do mundo salvando → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → mesa de trabalho, itens, resultado → <b>Save</b>.</li><li>O código do mundo é digitado na aba <b>Play</b>. Os alunos constroem no modo criativo.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Todos salvaram um data pack com a própria receita por volta de 00:45.</li><li>🏁 O data pack está <b>publicado no Sparks e o link está na tarefa</b> (cartão «Assinatura da lei», por volta de 01:00). Este cartão nunca é encurtado.</li><li>O aluno deu um nome próprio ao item e fez o craft dele numa mesa de trabalho, no mundo.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conheça a turma enquanto o jogo baixa; chame cada um pelo nome durante a aula toda.</li><li>Diga o objetivo em voz alta: «Hoje cada um vai criar a própria lei para o Minecraft, testar no jogo e publicar no portfólio».</li><li>Não dite receitas: as ideias devem ser diferentes — é isso que torna o projeto pessoal. Pergunte: «Por que este item? Quem vai precisar dele?»</li><li><b>Verificação planejada:</b> tire um item da mesa de trabalho → a recompensa some. Pergunte por quê e use as quatro perguntas. Elogie o aluno que encontra a causa, e não só quem acerta de primeira.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>O data pack não salva → uma das três partes do formulário está vazia.</li><li>A lei não funciona → foi salva com o mundo aberto: saia e entre de novo.</li><li>A receita não sai → os itens não estão na mesma disposição do formulário, ou o craft foi feito no inventário e não na mesa de trabalho.</li><li>O link não abre → em «Who can see it?» não estava <b>Everyone</b>: publique de novo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Um dia antes, envie os links do launcher no chat do grupo.</li><li>Faça você mesmo o caminho completo: código do mundo → margem → sair salvando → data pack com uma receita → voltar ao mundo → mesa de trabalho → recompensa → publicar no Sparks.</li><li>Código do mundo: <b>Welcome to KodlandCraft</b>.</li><li>Tarefa de casa: acrescentar mais uma lei (mudar a receita, uma receita nova, ou um comando/drop), testar, publicar a atualização e enviar o link.</li></ul>']] },
          { tab:'M1A2', e:'🏘️', h:'Aula 2 — O caminho até a praça', p:'Os alunos aprendem a diferença entre um <b>comando</b> e uma <b>lei</b>. Um comando no chat muda o mundo na hora, mas só uma vez; uma lei no data pack fica guardada e o próprio mundo a executa. Eles acrescentam dois novos tipos de lei ao mesmo data pack: um <b>drop</b> e <b>comandos ao entrar no mundo</b>.',
            acc:[['📚','O que você precisa saber','<ul><li>Os comandos do chat começam com barra: <code>/time set day</code>, <code>/give @s diamond 4</code>, <code>/effect give @s speed 15 1</code>.</li><li>O experimento: a velocidade de 15 segundos acaba, e o mundo «esquece» o comando. Um comando é dito uma vez; uma lei fica para sempre.</li><li><b>Drop</b>: Edit → Add → <b>+ Drop</b> → bloco → o que cai → Save. No <b>modo criativo nada cai</b> (momento planejado): teste com <code>/gamemode survival</code> e depois volte com <code>/gamemode creative</code>.</li><li><b>Comandos ao entrar</b>: Add → <b>+ Command</b>, escritos <b>sem barra</b> e com <b>@a</b> no lugar de @s. Eles rodam toda vez que você entra no mundo.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Dois comandos do chat funcionaram (dia e diamantes) e o aluno explica por que a velocidade acabou.</li><li>🏁 O <b>link do data pack atualizado, com um drop funcionando</b>, está na tarefa por volta de 00:45.</li><li>Um ritual de entrada com pelo menos dois comandos, testado ao entrar de novo, e o aluno decidiu o que aproveitar do conselho do Sparks.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Comece pela tarefa de casa: 2–3 alunos mostram qual lei acrescentaram e como testaram.</li><li>Não dite os comandos logo de cara: primeiro deixe tentarem com a dica, depois mostre o comando completo.</li><li>Antes do drop e do ritual, mostre rapidamente na sua tela por onde começar.</li><li>Dê um minuto para descobrirem por que nada caiu; se ninguém descobrir, mostre a resposta na sua tela.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Um comando do chat «não responde» → falta a barra, ou o layout do teclado está errado.</li><li>Um drop substitui o que o bloco normalmente solta — é normal.</li><li>Os alunos devem continuar trabalhando em <b>um único</b> data pack (o da receita).</li><li>Um comando do ritual não funciona → tire a barra, use @a, salve e entre de novo no mundo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Mesmo mundo da Aula 1: os alunos abrem na aba <b>Play</b> e aparecem na base. Se o mundo sumiu, dá para criar de novo com o código.</li><li>Antes da aula, confira o drop e os comandos no seu próprio data pack — o drop só no modo sobrevivência.</li><li>Tarefa de casa: mais uma lei no mesmo data pack, testada, publicada e com o link enviado.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: resumo, resultado-chave, os tempos de cada cartão, o seu papel e os pontos de atenção. A Aula 1 também tem um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2231', e:'📘', title:'Abrir o curso no Backoffice', small:'[2231] Minecraft CraftForge Intermediate — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'O Kodland Launcher, um início forte, a publicação de data packs no Sparks e os problemas mais comuns.',
    obj:'Saiba o que garante o sucesso técnico de uma aula do Minecraft CraftForge: o Kodland Launcher, a verificação do launcher antes do conteúdo, os últimos minutos para publicar e mostrar os trabalhos, onde os alunos pegam o link do data pack e as soluções para os problemas mais comuns.',
    needs:['mcPublish'],
    offer:[['🟩','Baixar, instalar e entrar no Kodland Launcher.'],['🚀','Fazer a verificação do launcher antes do conteúdo e começar pelo resultado.'],['📤','Garantir que todos os alunos publiquem o data pack e enviem o link.'],['🛠️','Resolver os problemas mais comuns do launcher, dos data packs e dos comandos.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para os cursos de Minecraft. Abra cada um:' },
        { t:'acc', items:[
          ['🎬','Primeiro o resultado — e por que criar é diferente de jogar','<p>Nos primeiros minutos, <b>mostre o resultado pronto</b> e diga o que os alunos vão aprender hoje.</p><ul><li>Diga o objetivo em voz alta, por exemplo: «Hoje cada um vai criar a própria lei para o Minecraft, testar no jogo e publicar».</li><li>Explique por que construir um projeto <b>é diferente de só jogar</b>: normalmente todas as regras foram criadas por outra pessoa; aqui o aluno cria as regras, e o mundo executa a ideia dele.</li><li>Pergunte a um ou dois alunos: «Você já mudou as regras de um jogo? Como?»</li></ul>'],
          ['🟩','A verificação do login e do launcher vem antes do conteúdo','<p>Faça a verificação da conexão e do launcher <b>antes</b> da parte de conteúdo, para o jogo baixar enquanto você conhece a turma.</p><ul><li>Conexão: um minuto — câmera, microfone, «Oi!».</li><li>Launcher: envie os links, mostre o login na sua tela e peça um «+» no chat quando aparecer a barra verde.</li><li>Não espere o download terminar e não segure a turma por causa de um ou dois «−»: volte a eles durante o trabalho individual (o estúdio de leis ou a base).</li><li>A partir da Aula 2: «Abram o launcher e iniciem o mundo — deixem carregar enquanto a gente conversa».</li></ul>'],
          ['⏱️','Proteja os últimos 7–10 minutos','<p>Os últimos <b>7–10 minutos</b> são para publicar, mostrar os trabalhos e dar feedback — e não são cedidos para a construção.</p><ul><li>Use paradas firmes: aviso de dois minutos, depois «Parem, mãos fora do teclado. Hora da apresentação!», e chame logo o primeiro aluno pelo nome.</li><li>Na apresentação, os alunos mostram a lei em ação (fazem o craft do item ao vivo, quebram o bloco, entram de novo no mundo); a turma dá feedback: nome + detalhe.</li><li>Termine com o encerramento, a reflexão, a próxima aula e a tarefa de casa — isso nunca é encurtado.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'O Kodland Launcher', blocks:[
        { t:'p', html:'Os alunos abrem o Minecraft pelo <b>Kodland Launcher</b>: ele baixa o jogo, abre o mundo do curso e é onde eles criam os data packs e os publicam no Sparks. Você precisa dele instalado e pronto no seu computador antes da primeira aula.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>As suas credenciais:</b> para baixar e entrar no launcher, você usa as <b>mesmas credenciais do Kodland Sparks</b>. Elas são fornecidas pelo <b>departamento de Operações ou de Ensino</b>. Os alunos entram com a própria conta Kodland — não precisam criar uma nova.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Página de download e guia oficial', small:'portfolio.kodland.org/launcher/download — Windows e Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Baixe o instalador.</li><li>Abra o arquivo baixado.</li><li>Na tela azul de aviso, clique em <b>More info → Run anyway</b> e siga o instalador.</li></ol>'],
          ['🍎','macOS 13 ou mais recente','<ol><li>Baixe o arquivo do seu processador (Apple → <b>Sobre Este Mac</b>: M1–M4 = Apple Silicon).</li><li>Abra o arquivo baixado e arraste o <b>Kodland Launcher</b> para <b>Applications</b>. Não abra o launcher por essa janela.</li><li>Abra o <b>Terminal</b>, cole a linha abaixo e aperte Return. É normal não aparecer nenhuma resposta.</li><li>Abra o launcher em <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Entrar','Clique em <b>Sign in</b>. Abre uma página no navegador: clique em <b>Sign in with Kodland</b> — um botão só, sem senha. Se o navegador não abrir, use o link embaixo do botão para receber um código curto (válido por cinco minutos).'],
          ['Baixar o jogo','O launcher baixa o jogo em várias etapas (cerca de 550 MB; são necessários cerca de 1,8 GB livres). Deixe rodando.'],
          ['Jogar','Quando aparecer que está tudo pronto, aperte <b>Play</b>. A primeira abertura pode levar até um minuto. O código do mundo vai na aba <b>Play</b>.'],
          ['Atualizações','Se o launcher não atualizar, instale a versão mais recente da página de download por cima da antiga. Os mundos continuam lá.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Links diretos de download (os mesmos do cartão da aula)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Quando o launcher de um aluno não funciona', blocks:[
        { t:'p', html:'Na Aula 1, é quase certo que alguém vai ter dificuldade para abrir o launcher. Um problema não deve parar a turma: <b>primeiro dê uma tarefa curta para os outros</b> e depois fale com o aluno. Peça o compartilhamento de tela e guie por voz. Se não resolver em alguns minutos: «Acompanhe a minha tela por enquanto, já volto». O melhor momento para voltar é o trabalho individual — o estúdio de leis ou a base.' },
        { t:'acc', open:false, items:[
          ['🍎','O Mac não abre o launcher','Rode a linha do Terminal do primeiro cartão e abra o launcher de novo.'],
          ['🪟','O Windows pergunta se deve abrir o arquivo','<b>More info → Run anyway</b>.'],
          ['🔑','O aluno não consegue entrar','O mesmo login Kodland das aulas. A janela de login abre no navegador e muitas vezes fica escondida atrás de outras janelas.'],
          ['⏳','O download do jogo parou','Confira a internet, feche o launcher e abra de novo — o download continua.'],
          ['👀','O launcher não funcionou de jeito nenhum','O aluno acompanha a sua tela, responde no chat e, na apresentação, conta qual lei criaria. Depois da aula, ajude com a abertura do launcher para ele conseguir fazer a tarefa de casa sozinho.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se vários alunos tiverem o mesmo erro, mostre a solução para todos de uma vez — e mantenha o contato com o resto da turma com uma pergunta curta no chat a cada minuto.' }
      ]},
      { id:'req', e:'💻', title:'Requisitos do computador', blocks:[
        { t:'p', html:'Isto é o que um aluno precisa para o Minecraft CraftForge. Serve quando um aluno tem problemas para instalar ou rodar o jogo:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computador e sistema','Desktop ou notebook com <b>Windows 10/11 (64 bits)</b> ou <b>macOS 13 ou mais recente</b>. Mac: só Apple Silicon (M1 ou mais novo).'],
          ['🧠','Memória e processador','<b>8 GB de RAM</b> com placa de vídeo dedicada, ou <b>12 GB</b> com placa de vídeo integrada. Processador de <b>4 núcleos</b>.'],
          ['🎮','Placa de vídeo e disco','Placa de vídeo com suporte a <b>Vulkan 1.3</b> e <b>2 GB</b> de memória de vídeo. <b>5 GB</b> livres em disco.'],
          ['🎧','Conexão e equipamento','Internet estável, que aguente videochamadas. Mouse de dois botões, teclado, fone com microfone e câmera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar o data pack no Kodland Sparks', blocks:[
        { t:'p', html:'O Sparks é o portfólio dos alunos: todos os projetos do curso ficam lá, e é lá que mora o assistente de IA. Os alunos voltam a ele em todas as aulas para publicar e pedir dicas. O data pack é publicado <b>pelo editor do launcher</b>:' },
        { t:'steps', items:[
          ['Publish, ao lado de Save','No launcher, <b>Create → Data packs → Edit</b> no data pack, depois <b>Publish</b>, ao lado do botão roxo <b>Save</b>.'],
          ['Nome e «Who can see it?» → Everyone','Em «Publish to your profile», o aluno escreve o nome e escolhe <b>Everyone</b>: só assim o link abre para os outros sem entrar na conta do aluno.'],
          ['Copy link','Quando aparecer «Published! It is on your profile.», o aluno clica em <b>Copy link</b>, depois em <b>Done</b>, e cola o link no cartão da aula na plataforma («Link da minha lei no Kodland Sparks»).'],
          ['Perdeu o link?','<b>Open on Sparks</b> (na janela ou no alto do editor) abre a página do projeto no perfil do aluno: o link é o endereço na barra do navegador.'],
          ['Dois passos diferentes','Vale lembrar: publicar no Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>. Confira no Backoffice se os links chegaram de verdade.'],
          ['Cada atualização é publicada de novo','Quando o aluno acrescenta uma lei (tarefa de casa, Aula 2), ele salva, testa e publica a atualização de novo.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simulação', title:'Publicar um data pack no Kodland Sparks', text:'Uma réplica do Kodland Launcher e do cartão da aula: como aluno, você publica um data pack, copia o link, cola no cartão da plataforma, resolve um link que não abre e encontra um link que não foi copiado. Cerca de 4 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['💾','O data pack não salva','Confira se as três partes do formulário estão preenchidas: onde o item é feito, o que entra e o que sai.'],
          ['🔁','A lei não funciona depois de uma edição','Clique em <b>Save</b>, saia do mundo e entre de novo — as leis são aplicadas quando você entra.'],
          ['🧩','A receita não sai','Os itens não estão na mesma disposição do formulário, ou o aluno está fazendo o craft no inventário e não na mesa de trabalho.'],
          ['⌨️','Um comando do chat «não responde»','Confira a barra no início e o layout do teclado: tem que ser a barra comum (/). Os espaços, como na dica.'],
          ['💎','O drop não cai','No modo criativo nada cai: <code>/gamemode survival</code> e depois quebre exatamente o bloco escolhido no formulário. Em seguida, <code>/gamemode creative</code>.'],
          ['⚡','Um comando do data pack não funciona','Tire a barra do início da linha e use <b>@a</b>, como no cartão. Salve e entre de novo no mundo.'],
          ['🔒','O link não abre','Em «Who can see it?» não estava <b>Everyone</b>. Publique de novo com Everyone — aí o link abre sem precisar entrar na conta.'],
          ['🔗','O aluno fechou a janela sem copiar o link','Clique em <b>Open on Sparks</b>, no alto do editor do data pack: a página do projeto abre, e o link é o endereço na barra do navegador.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo de preparação.','O meu launcher está instalado e com login feito, e eu fiz o caminho da aula no meu próprio data pack.','Antes da Aula 1, enviei os links do launcher no chat do grupo.'] },
          { h:'🎬 Durante a aula', items:['Fiz a verificação da conexão e do launcher antes do conteúdo.','Mostrei o resultado pronto e disse o objetivo da aula nos primeiros minutos.'] },
          { h:'📤 No fim da aula', items:['Protegi os últimos 7–10 minutos para publicar, mostrar os trabalhos e dar feedback.','Todos enviaram o link do data pack publicado no cartão da aula.','Abri alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Para quem é o Minecraft CraftForge Intermediate e quanto dura cada aula?',
      o:['Para alunos de 8–9 anos, com aulas de 60 minutos.','Para alunos de 10–12 anos, com aulas de 90 minutos em grupo.','Para alunos de 13–17 anos, com aulas de 60 minutos.'],
      a:1, e:'O Intermediate é para alunos de 10–12 anos: 40 aulas de 90 minutos em grupo.' },
    { q:'Qual linguagem de programação os alunos usam no curso?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Os alunos escrevem programas em Python que constroem no mundo do Minecraft.' },
    { q:'O que é um data pack neste curso?',
      o:['Um arquivo com prints das construções do aluno.','Um conjunto de leis para o mundo (receitas, drops, comandos…) que o Minecraft executa toda vez que você entra.','Um pacote de mundos prontos para baixar.'],
      a:1, e:'Um data pack é um conjunto de leis: o mundo executa essas leis toda vez que o aluno entra.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita.','Mais de nove projetos no portfólio do Kodland Sparks e um projeto autoral de conclusão apresentado no Demo Day.','Só o data pack da Aula 1.'],
      a:1, e:'Mais de nove projetos no portfólio e um projeto autoral, levado da ideia até o Demo Day.' },
    { q:'Como os alunos devem usar o Sparks AI?',
      o:['Copiar as respostas do jeito que vêm.','Avaliar as sugestões e decidir o que aproveitar.','Nunca usar.'],
      a:1, e:'O Sparks sugere ideias e cenários de teste; o aluno avalia em vez de copiar.' }
  ],
  m2:[
    { q:'Quando você faz a verificação da conexão e do launcher?',
      o:['No começo da aula, antes do conteúdo, para o jogo baixar enquanto você conhece a turma.','No meio da aula, quando os alunos precisam do Minecraft.','No fim, para não tirar tempo da aula.'],
      a:0, e:'Antes do conteúdo: o jogo baixa enquanto você conhece a turma.' },
    { q:'Quais credenciais você usa para baixar e entrar no Kodland Launcher?',
      o:['Uma conta nova que você mesmo cria.','As mesmas credenciais do Kodland Sparks, fornecidas pelo departamento de Operações ou de Ensino.','A conta de um aluno.'],
      a:1, e:'O launcher usa as suas credenciais do Kodland Sparks, fornecidas pelo departamento de Operações ou de Ensino.' },
    { q:'Onde o aluno pega o link do data pack publicado?',
      o:['Num comentário no launcher.','Em «Publish to your profile»: Copy link (ou Open on Sparks e copiar o endereço da barra do navegador).','Na aba Play do launcher.'],
      a:1, e:'Copy link logo depois de publicar; se o link se perdeu, Open on Sparks mostra a página do projeto, e o endereço dela é o link.' },
    { q:'Para que servem os últimos 7–10 minutos da aula?',
      o:['Mais tempo de construção.','Publicar, mostrar os trabalhos e dar feedback — além do encerramento e da tarefa de casa.','Jogo livre.'],
      a:1, e:'Proteja os últimos minutos: publicação, apresentação com feedback e encerramento.' },
    { ctx:'Um aluno publicou o data pack, mas o link não abre para você.',
      q:'Qual é a causa mais provável, e a solução?',
      o:['Em «Who can see it?» não estava Everyone: publicar de novo com Everyone.','O data pack está quebrado: criar um novo do zero.','Os links só abrem no dia seguinte.'],
      a:0, e:'Só com Everyone o link abre sem entrar na conta. Publicar de novo com Everyone resolve.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e faça o caminho da aula no seu próprio data pack.'],
    ['🟩', '<b>Primeiros minutos:</b> verificação da conexão e do launcher, depois o resultado pronto e o objetivo.'],
    ['🔗', '<b>O link:</b> Publish → Everyone → Copy link, colado no cartão da aula.'],
    ['⏱️', '<b>Últimos 7–10 minutos:</b> publicar, mostrar os trabalhos e dar feedback.']
  ]
};
