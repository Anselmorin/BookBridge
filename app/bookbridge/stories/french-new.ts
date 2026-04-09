import type { Episode, Series } from './data';

// ============================================================
// 🏀 SPORTS — "Le Match" (The Match)
// ============================================================
export const leMatchEpisode: Episode = {
  id: "le-match",
  title: "Le Match",
  description: "Naya must overcome her nerves and lead her basketball team in the championship game",
  vocab: [
    { word: "le match", pronunciation: "luh MAHSH", english: "the match/game" },
    { word: "le ballon", pronunciation: "luh bah-LOHN", english: "the ball" },
    { word: "l'équipe", pronunciation: "lay-KEEP", english: "the team" },
    { word: "gagner", pronunciation: "gah-NYAY", english: "to win" },
    { word: "le terrain", pronunciation: "luh teh-RAN", english: "the court/field" },
    { word: "le panier", pronunciation: "luh pah-NYAY", english: "the basket" },
    { word: "lancer", pronunciation: "lahn-SAY", english: "to throw/shoot" },
    { word: "la victoire", pronunciation: "lah veek-TWAHR", english: "the victory" },
    { word: "ensemble", pronunciation: "ahn-SAHM-bluh", english: "together" },
    { word: "le courage", pronunciation: "luh koo-RAHZH", english: "courage" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — Before the Buzzer",
      content: `Naya's hands were shaking. She stared at herself in the locker room mirror and tried to breathe. Today was **le match** — THE match. The championship. And the entire school was out there waiting.

Her best friend Jade burst through the door. "Girl, **le terrain** is PACKED. I've never seen that many people in our gym."

"Not helping," Naya muttered.

She picked up **le ballon** and spun it between her fingers. She'd done this a thousand times in practice. But this was different. This was the real thing.

Coach Dupont walked in. She was French — like, actually from Paris — and she had this way of making everything sound dramatic. "**Écoutez, l'équipe!**" Listen up, team! "Today, you play not just with your legs and your arms. You play with **le courage**. You play with your heart."

Naya looked around at her teammates. Jade. Sofia. Priya. They'd been training **ensemble** since September. Five months of early morning practices, sore muscles, and way too many suicides drill.

"We got this," Jade whispered, bumping Naya's shoulder.

Naya wished she believed that.`,
      translatedWords: [
        { word: "le match", translation: "the match/game" },
        { word: "le terrain", translation: "the court/field" },
        { word: "le ballon", translation: "the ball" },
        { word: "Écoutez, l'équipe!", translation: "Listen up, team!" },
        { word: "le courage", translation: "courage" },
        { word: "ensemble", translation: "together" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Third Quarter Collapse",
      content: `By halftime, they were up by six. Naya had scored twelve points and was feeling it. Maybe this wasn't so scary after all.

Then the third quarter happened.

The Westside Wolves came out firing. Their point guard — a tall girl named Brianna — hit three shots in a row. Boom. Boom. Boom. Suddenly Naya's team was down by four.

Coach Dupont called a timeout. "**Calmez-vous!**" Calm down! She drew up a play on her whiteboard. "Naya, you are the fastest on **le terrain**. I need you to **lancer** — shoot — every time you see the opening. Trust yourself."

"But what if I miss?" Naya whispered.

Coach looked her dead in the eyes. "Then you miss. And you **lancer** again. That is what champions do."

Naya's stomach twisted. **Le ballon** felt heavy in her hands. The scoreboard blinked: 34-38, Wolves leading.

Jade grabbed her arm. "Hey. **L'équipe** needs you right now. Not perfect-Naya. Just you."

Something about the way Jade said it — so simple, so real — made the knot in Naya's chest loosen. Just a little.

She nodded. "Okay. Let's go."`,
      translatedWords: [
        { word: "Calmez-vous!", translation: "Calm down!" },
        { word: "le terrain", translation: "the court/field" },
        { word: "lancer", translation: "to throw/shoot" },
        { word: "le ballon", translation: "the ball" },
        { word: "l'équipe", translation: "the team" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — Victory",
      content: `Fourth quarter. Two minutes left. Tied 44-44.

Naya dribbled up the court, heart pounding so loud she could hear it over the crowd. Brianna was right in her face, arms up, blocking every angle.

Naya faked left. Brianna bit. Naya spun right and drove toward **le panier**. She jumped, extended her arm, and released **le ballon**.

Time slowed down. The ball arced through the air, spinning perfectly.

SWISH.

The gym EXPLODED. Naya's teammates tackled her in a dog pile. The scoreboard read 46-44 with thirty seconds left.

The Wolves tried to answer, but Jade stole the ball and the buzzer sounded. It was over.

**La victoire!** They'd done it. They actually did it.

Coach Dupont was crying — actually crying — which made everyone else cry too. "**Vous êtes incroyables!**" You are incredible! "You played **ensemble**. THAT is why you won. Not because of one shot. Because of **l'équipe**."

Naya held the trophy and looked at her teammates. She hadn't done this alone. She'd needed every single one of them. And they'd needed her.

As they walked off **le terrain** for the last time that season, Jade threw her arm around Naya's shoulder. "So... same time next year?"

Naya grinned. "**Bien sûr.**" Of course.

**Gagner** wasn't just about the score. It was about showing up even when you're scared — and having people who show up with you.`,
      translatedWords: [
        { word: "le panier", translation: "the basket" },
        { word: "le ballon", translation: "the ball" },
        { word: "la victoire", translation: "the victory" },
        { word: "Vous êtes incroyables!", translation: "You are incredible!" },
        { word: "ensemble", translation: "together" },
        { word: "l'équipe", translation: "the team" },
        { word: "le terrain", translation: "the court/field" },
        { word: "Bien sûr", translation: "Of course" },
        { word: "gagner", translation: "to win" }
      ]
    }
  ],
  fullTargetLanguageStory: `Les mains de Naya tremblaient. Elle se regardait dans le miroir du vestiaire et essayait de respirer. Aujourd'hui c'était le match — LE match. Le championnat. Et toute l'école attendait dehors.

Sa meilleure amie Jade a surgi par la porte. "Le terrain est PLEIN. Je n'ai jamais vu autant de monde dans notre gymnase."

"Ça n'aide pas," murmura Naya.

Elle a pris le ballon et l'a fait tourner entre ses doigts. Elle avait fait ça mille fois à l'entraînement. Mais c'était différent. C'était pour de vrai.

L'entraîneuse Dupont est entrée. "Écoutez, l'équipe! Aujourd'hui, vous jouez non seulement avec vos jambes et vos bras. Vous jouez avec le courage. Vous jouez avec votre cœur."

Naya a regardé ses coéquipières. Jade. Sofia. Priya. Elles s'entraînaient ensemble depuis septembre. Cinq mois de pratiques matinales, de muscles endoloris et de beaucoup trop d'exercices.

"On peut le faire," chuchota Jade en tapant l'épaule de Naya.

Naya souhaitait y croire.

À la mi-temps, elles menaient de six points. Naya avait marqué douze points et se sentait bien. Peut-être que ce n'était pas si effrayant après tout.

Puis le troisième quart-temps est arrivé.

Les Louves de Westside sont revenues en force. Leur meneuse — une grande fille nommée Brianna — a réussi trois tirs de suite. Boum. Boum. Boum. Soudain, l'équipe de Naya perdait de quatre points.

L'entraîneuse Dupont a demandé un temps mort. "Calmez-vous!" Elle a dessiné un jeu sur son tableau blanc. "Naya, tu es la plus rapide sur le terrain. J'ai besoin que tu lances — que tu tires — chaque fois que tu vois l'ouverture. Fais-toi confiance."

"Et si je rate?" chuchota Naya.

L'entraîneuse l'a regardée droit dans les yeux. "Alors tu rates. Et tu lances encore. C'est ce que font les championnes."

L'estomac de Naya se noua. Le ballon semblait lourd dans ses mains. Le tableau d'affichage clignotait: 34-38, les Louves en tête.

Jade a attrapé son bras. "Hé. L'équipe a besoin de toi maintenant. Pas de la Naya parfaite. Juste toi."

Quelque chose dans la façon dont Jade l'a dit — si simple, si vrai — a desserré le nœud dans la poitrine de Naya. Juste un peu.

Elle a hoché la tête. "D'accord. Allons-y."

Quatrième quart-temps. Deux minutes restantes. Égalité 44-44.

Naya a dribblé vers le panier, le cœur battant si fort qu'elle pouvait l'entendre par-dessus la foule. Brianna était juste devant elle, les bras levés, bloquant chaque angle.

Naya a feint à gauche. Brianna a mordu. Naya a pivoté à droite et s'est élancée vers le panier. Elle a sauté, étendu son bras, et relâché le ballon.

Le temps a ralenti. Le ballon a tracé un arc dans l'air, tournant parfaitement.

SWISH.

Le gymnase a EXPLOSÉ. Les coéquipières de Naya l'ont plaquée en tas. Le tableau affichait 46-44 avec trente secondes restantes.

Les Louves ont essayé de répondre, mais Jade a volé le ballon et le buzzer a sonné. C'était fini.

La victoire! Elles l'avaient fait. Elles l'avaient vraiment fait.

L'entraîneuse Dupont pleurait — vraiment — ce qui a fait pleurer tout le monde. "Vous êtes incroyables! Vous avez joué ensemble. C'EST pour ça que vous avez gagné. Pas à cause d'un tir. À cause de l'équipe."

Naya tenait le trophée et regardait ses coéquipières. Elle n'avait pas fait ça toute seule. Elle avait eu besoin de chacune d'entre elles. Et elles avaient eu besoin d'elle.

En quittant le terrain pour la dernière fois cette saison, Jade a passé son bras autour de l'épaule de Naya. "Alors... même heure l'année prochaine?"

Naya a souri. "Bien sûr."

Gagner, ce n'était pas seulement une question de score. C'était se présenter même quand on a peur — et avoir des gens qui se présentent avec vous.`,
  quiz: [
    // Fill in the blank (4)
    {
      id: "fb1",
      type: "fill-blank",
      question: "Today was _____ — THE match. The championship.",
      answer: "le match"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "She picked up _____ and spun it between her fingers.",
      answer: "le ballon"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "They'd been training _____ since September.",
      answer: "ensemble"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "Naya spun right and drove toward _____.",
      answer: "le panier"
    },
    // Multiple choice (4)
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'le terrain' mean?",
      answer: "the court/field",
      options: ["the ball", "the court/field", "the basket", "the game"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'lancer' mean?",
      answer: "to throw/shoot",
      options: ["to run", "to throw/shoot", "to win", "to jump"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'la victoire' mean?",
      answer: "the victory",
      options: ["the team", "the courage", "the victory", "the match"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'l'équipe' mean?",
      answer: "the team",
      options: ["the equipment", "the team", "the court", "the game"]
    },
    // Translate (4)
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'le courage'",
      answer: "courage"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'to win'",
      answer: "gagner"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'ensemble'",
      answer: "together"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the ball'",
      answer: "le ballon"
    }
  ]
};

// ============================================================
// 💻 TECH — "Le Programme" (The Program)
// ============================================================
export const leProgrammeEpisode: Episode = {
  id: "le-programme",
  title: "Le Programme",
  description: "Kai enters a hackathon and builds a robot assistant — but nothing goes as planned",
  vocab: [
    { word: "l'ordinateur", pronunciation: "lor-dee-nah-TUHR", english: "the computer" },
    { word: "le programme", pronunciation: "luh pro-GRAHM", english: "the program" },
    { word: "le robot", pronunciation: "luh roh-BOH", english: "the robot" },
    { word: "construire", pronunciation: "kohn-STRWEER", english: "to build" },
    { word: "l'écran", pronunciation: "lay-KRAHN", english: "the screen" },
    { word: "le code", pronunciation: "luh KOHD", english: "the code" },
    { word: "une erreur", pronunciation: "oon eh-RUHR", english: "an error" },
    { word: "résoudre", pronunciation: "ray-ZOO-druh", english: "to solve" },
    { word: "la machine", pronunciation: "lah mah-SHEEN", english: "the machine" },
    { word: "réussir", pronunciation: "ray-oo-SEER", english: "to succeed" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — 48 Hours",
      content: `"Forty-eight hours. One project. No sleep. Let's GO."

The hackathon host pumped his fist in the air as 200 kids cheered. Kai sat in the back row, laptop open, already sweating. He was twelve. Most of the other teams were high schoolers. And he was here. Alone.

His plan was simple: **construire** a small robot — **le robot** — that could sort recycling using a camera and AI. He'd been coding since he was nine, and he'd been planning this project for months.

He opened his **ordinateur** and started typing. Lines of **code** filled **l'écran**, green text on a black background. It looked like something out of a movie. He felt like a hacker. A good one.

By hour three, he had the basic **programme** running. **Le robot**'s arm could move up and down. Left and right. It was jerky and slow, but it moved.

"Not bad for a sixth grader," he muttered to himself.

A girl from the next table leaned over. "Did you just say sixth grader? Dude, I'm a sophomore and I can't even get my code to compile."

Kai grinned. "Want me to take a look?"

Her name was Zoe, and within ten minutes, they were a team.`,
      translatedWords: [
        { word: "construire", translation: "to build" },
        { word: "le robot", translation: "the robot" },
        { word: "ordinateur", translation: "computer" },
        { word: "code", translation: "code" },
        { word: "l'écran", translation: "the screen" },
        { word: "programme", translation: "program" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Bug",
      content: `Hour twenty-two. Kai's eyes burned. Empty Doritos bags and energy drink cans surrounded his **ordinateur** like a fortress.

**Le robot** was almost done. It could identify plastic, glass, and metal using its tiny camera. Zoe had designed a slick interface on **l'écran** that showed what the robot was "seeing" in real time.

There was just one problem.

Every time the robot tried to pick up a glass bottle, it launched it across the table instead. Like, FULL SEND. The first time it happened, a bottle nearly took out a judge.

"Okay, that's... **une erreur**," Kai said, staring at his **code**.

Zoe burst out laughing. "THAT'S what you call an error? It literally tried to assassinate someone."

Kai scrolled through **le programme** line by line. There had to be a bug somewhere. The motor was getting too much power, but he couldn't figure out where the value was wrong.

He tried everything. Changed variables. Added limits. Rewrote the motor function from scratch. Nothing worked. **La machine** kept yeeting bottles like it was playing baseball.

By hour twenty-six, Kai was ready to quit. He closed his **ordinateur** and put his head on the table.

"I can't **résoudre** this," he groaned. "I've tried everything."

Zoe sat down next to him. "You tried everything YOU know. But what about the stuff you don't know yet?"

She pulled up a forum post about motor calibration. Something Kai had never seen before. A different approach entirely.

"Worth a shot?" she asked.

Kai lifted his head. "Worth a shot."`,
      translatedWords: [
        { word: "ordinateur", translation: "computer" },
        { word: "le robot", translation: "the robot" },
        { word: "l'écran", translation: "the screen" },
        { word: "une erreur", translation: "an error" },
        { word: "code", translation: "code" },
        { word: "le programme", translation: "the program" },
        { word: "la machine", translation: "the machine" },
        { word: "résoudre", translation: "to solve" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — Demo Day",
      content: `Hour forty-seven. One hour left.

Kai held his breath and pressed Enter. **Le robot**'s arm reached toward a glass bottle, gently closed its grip, lifted it up, and placed it into the glass bin.

No yeet. No attempted murder. Just a clean, smooth sort.

"IT WORKS!" Kai screamed. Zoe tackled him in a hug. Three other teams looked over, confused.

They spent the last hour polishing **le programme** and rehearsing their demo. When they walked up to the judges' table, Kai's hands were shaking — but the good kind of shaking. The excited kind.

"We built a recycling robot," Kai said. "It uses AI to identify materials through a camera feed, displayed on **l'écran** here, and then sorts them automatically."

He placed a plastic bottle, a soda can, and a glass jar on the table. **Le robot** scanned each one, thought for a second, then sorted them perfectly. Plastic. Metal. Glass. Boom. Boom. Boom.

The judges looked impressed. One of them asked, "How old are you?"

"Twelve," Kai said.

The judge raised his eyebrows. "You might want to **construire** a bigger trophy shelf."

They didn't win first place. A team of seniors built a whole drone delivery system (show-offs). But they won "Most Innovative" — and the judges said **le robot** had real potential.

Walking out of the building at 2 AM, Zoe turned to Kai. "So, you gonna **réussir** at the next one too?"

Kai laughed. "Only if you're on my **équipe**."

The thing about **le code** is that it breaks. A lot. But every **erreur** teaches you something new. And if you can **résoudre** problems at midnight on zero sleep with a bottle-launching robot? You can probably handle anything.`,
      translatedWords: [
        { word: "le robot", translation: "the robot" },
        { word: "le programme", translation: "the program" },
        { word: "l'écran", translation: "the screen" },
        { word: "construire", translation: "to build" },
        { word: "réussir", translation: "to succeed" },
        { word: "équipe", translation: "team" },
        { word: "le code", translation: "the code" },
        { word: "erreur", translation: "error" },
        { word: "résoudre", translation: "to solve" }
      ]
    }
  ],
  fullTargetLanguageStory: `"Quarante-huit heures. Un projet. Pas de sommeil. C'EST PARTI."

L'animateur du hackathon a levé le poing en l'air tandis que 200 jeunes acclamaient. Kai était assis au dernier rang, son ordinateur portable ouvert, déjà en sueur. Il avait douze ans. La plupart des autres équipes étaient des lycéens. Et il était là. Seul.

Son plan était simple: construire un petit robot qui pourrait trier le recyclage à l'aide d'une caméra et de l'intelligence artificielle. Il codait depuis l'âge de neuf ans, et il planifiait ce projet depuis des mois.

Il a ouvert son ordinateur et a commencé à taper. Des lignes de code ont rempli l'écran, du texte vert sur fond noir. Ça ressemblait à quelque chose sorti d'un film. Il se sentait comme un hacker. Un bon.

À la troisième heure, il avait le programme de base en marche. Le bras du robot pouvait monter et descendre. Gauche et droite. C'était saccadé et lent, mais ça bougeait.

"Pas mal pour un élève de sixième," murmura-t-il.

Une fille de la table voisine s'est penchée. "T'as dit sixième? Mec, je suis en seconde et je n'arrive même pas à compiler mon code."

Kai a souri. "Tu veux que je regarde?"

Elle s'appelait Zoe, et en dix minutes, ils formaient une équipe.

Heure vingt-deux. Les yeux de Kai brûlaient. Des paquets de chips vides et des canettes de boissons énergétiques entouraient son ordinateur comme une forteresse.

Le robot était presque fini. Il pouvait identifier le plastique, le verre et le métal grâce à sa petite caméra. Zoe avait conçu une interface élégante sur l'écran qui montrait ce que le robot "voyait" en temps réel.

Il y avait juste un problème.

Chaque fois que le robot essayait de saisir une bouteille en verre, il la projetait à travers la table. La première fois que c'est arrivé, une bouteille a failli toucher un juge.

"D'accord, c'est... une erreur," dit Kai en fixant son code.

Zoe a éclaté de rire. "C'est CE que tu appelles une erreur? Il a littéralement essayé d'assassiner quelqu'un."

Kai a fait défiler le programme ligne par ligne. Il devait y avoir un bug quelque part. Le moteur recevait trop de puissance, mais il ne trouvait pas où la valeur était fausse.

Il a tout essayé. Changé les variables. Ajouté des limites. Réécrit la fonction du moteur depuis zéro. Rien ne marchait. La machine continuait à lancer les bouteilles comme si elle jouait au baseball.

À la vingt-sixième heure, Kai était prêt à abandonner. Il a fermé son ordinateur et posé sa tête sur la table.

"Je ne peux pas résoudre ça," gémit-il. "J'ai tout essayé."

Zoe s'est assise à côté de lui. "Tu as essayé tout ce que TU sais. Mais qu'en est-il de ce que tu ne sais pas encore?"

Elle a trouvé un article de forum sur la calibration des moteurs. Quelque chose que Kai n'avait jamais vu. Une approche complètement différente.

"Ça vaut le coup d'essayer?" demanda-t-elle.

Kai a levé la tête. "Ça vaut le coup."

Heure quarante-sept. Une heure restante.

Kai a retenu son souffle et appuyé sur Entrée. Le bras du robot s'est dirigé vers une bouteille en verre, a doucement fermé sa prise, l'a soulevée et l'a placée dans le bac à verre.

Pas de lancer. Pas de tentative de meurtre. Juste un tri propre et fluide.

"ÇA MARCHE!" cria Kai. Zoe l'a serré dans ses bras. Trois autres équipes les ont regardés, confuses.

Ils ont passé la dernière heure à peaufiner le programme et à répéter leur démonstration. Quand ils se sont avancés vers la table des juges, les mains de Kai tremblaient — mais du bon genre de tremblement. Le genre excité.

"Nous avons construit un robot de recyclage," dit Kai. "Il utilise l'IA pour identifier les matériaux grâce à un flux caméra, affiché sur l'écran ici, puis les trie automatiquement."

Il a placé une bouteille en plastique, une canette de soda et un bocal en verre sur la table. Le robot a scanné chacun, réfléchi une seconde, puis les a triés parfaitement. Plastique. Métal. Verre. Boum. Boum. Boum.

Les juges semblaient impressionnés. L'un d'eux a demandé, "Quel âge as-tu?"

"Douze ans," dit Kai.

Le juge a haussé les sourcils. "Tu devrais construire une plus grande étagère à trophées."

Ils n'ont pas gagné la première place. Une équipe de terminales avait construit tout un système de livraison par drone. Mais ils ont gagné le prix "Plus Innovant" — et les juges ont dit que le robot avait un vrai potentiel.

En sortant du bâtiment à deux heures du matin, Zoe s'est tournée vers Kai. "Alors, tu vas réussir au prochain aussi?"

Kai a ri. "Seulement si tu es dans mon équipe."

Le truc avec le code, c'est qu'il plante. Souvent. Mais chaque erreur t'apprend quelque chose de nouveau. Et si tu peux résoudre des problèmes à minuit sans dormir avec un robot lanceur de bouteilles? Tu peux probablement gérer n'importe quoi.`,
  quiz: [
    // Fill in the blank (4)
    {
      id: "fb1",
      type: "fill-blank",
      question: "His plan was simple: _____ a small robot.",
      answer: "construire"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "Lines of code filled _____, green text on a black background.",
      answer: "l'écran"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "\"Okay, that's... _____ ,\" Kai said, staring at his code.",
      answer: "une erreur"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "\"I can't _____ this,\" he groaned.",
      answer: "résoudre"
    },
    // Multiple choice (4)
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'l'ordinateur' mean?",
      answer: "the computer",
      options: ["the robot", "the screen", "the computer", "the program"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'construire' mean?",
      answer: "to build",
      options: ["to break", "to build", "to code", "to solve"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'réussir' mean?",
      answer: "to succeed",
      options: ["to fail", "to try", "to succeed", "to restart"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'la machine' mean?",
      answer: "the machine",
      options: ["the code", "the screen", "the error", "the machine"]
    },
    // Translate (4)
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'le programme'",
      answer: "the program"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'the robot'",
      answer: "le robot"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'le code'",
      answer: "the code"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the screen'",
      answer: "l'écran"
    }
  ]
};

// ============================================================
// 🔮 FUTURE — "La Ville de Demain" (The City of Tomorrow)
// ============================================================
export const laVilleDeDemainEpisode: Episode = {
  id: "la-ville-de-demain",
  title: "La Ville de Demain",
  description: "In the year 2089, Léo discovers a hidden district in his futuristic city — and a secret that could change everything",
  vocab: [
    { word: "la ville", pronunciation: "lah VEEL", english: "the city" },
    { word: "demain", pronunciation: "duh-MAN", english: "tomorrow" },
    { word: "voler", pronunciation: "voh-LAY", english: "to fly" },
    { word: "la lumière", pronunciation: "lah loo-MYEHR", english: "the light" },
    { word: "le ciel", pronunciation: "luh see-ELL", english: "the sky" },
    { word: "découvrir", pronunciation: "day-koo-VREER", english: "to discover" },
    { word: "le secret", pronunciation: "luh suh-KREH", english: "the secret" },
    { word: "l'avenir", pronunciation: "lah-vuh-NEER", english: "the future" },
    { word: "la porte", pronunciation: "lah PORT", english: "the door" },
    { word: "le monde", pronunciation: "luh MOHND", english: "the world" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — Néo-Lyon",
      content: `The year was 2089, and **la ville** of Néo-Lyon was the most advanced city on the planet.

Cars didn't drive — they flew. Léo watched them zip across **le ciel** from his bedroom window, trails of blue **lumière** streaking behind them like comets. Buildings stretched so high that their tops disappeared into the clouds. Everything was chrome, glass, and holographic ads selling stuff nobody needed.

Léo was fourteen, and he was bored out of his mind.

"Another perfect day in the perfect city," he muttered, pulling on his jacket. His AI assistant — a floating orb named Pixel — blinked to life.

"Good morning, Léo! The weather in **la ville** is 22 degrees, air quality is optimal, and your school transport departs in—"

"Yeah, yeah." Léo waved Pixel off. "I know."

He stepped outside and joined the stream of people moving toward the transit hub. Everyone had their heads down, staring at holographic screens projected from their wrists. Nobody talked. Nobody looked up at **le ciel**. Nobody noticed anything.

But Léo noticed things. Like the fact that Sector 9 — the old district near the river — had been blocked off for three years. The city said it was "under renovation." But there were no construction drones. No workers. Just a massive wall and a locked **porte**.

Today, he was going to find out why.`,
      translatedWords: [
        { word: "la ville", translation: "the city" },
        { word: "le ciel", translation: "the sky" },
        { word: "lumière", translation: "light" },
        { word: "la porte", translation: "the door" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — Behind the Wall",
      content: `Léo skipped school. (He'd deal with the consequences later.)

He took the long way around to Sector 9, ducking through alleys and avoiding the city's surveillance drones. Pixel floated behind him, nervous.

"Léo, this area is restricted. I strongly advise—"

"Pixel, mute."

Pixel made a sad beeping sound but went silent.

The wall around Sector 9 was ten meters high and smooth as glass. No handholds. No gaps. But Léo had spent two weeks studying the blueprints he'd hacked from the city database. There was a maintenance tunnel underneath — and its **porte** was hidden behind a dumpster on Rue Voltaire.

He found it. A small metal door, rusted and forgotten. He pulled it open and crawled inside.

The tunnel was dark. Léo activated Pixel's flashlight, and **la lumière** cut through the shadows. After ten minutes of crawling, he emerged on the other side.

And stopped breathing.

Sector 9 wasn't under renovation. It was ALIVE.

Trees. Real trees, not the holographic ones in the rest of **la ville**. Grass. Flowers. A river — actual flowing water — cutting through the middle. And buildings, but not the chrome towers of Néo-Lyon. These were old. Made of stone and wood, with painted shutters and flower boxes.

People lived here. Léo could see them — families, kids, an old man reading a paper book on a bench.

"What IS this place?" Léo whispered.

An older girl stepped out from behind a tree. She looked about sixteen, with paint-stained fingers and sharp eyes. "You're from outside the wall."

It wasn't a question.

"I'm Léo. I just wanted to **découvrir** — to find out — what was behind here."

She studied him for a long moment. "I'm Maia. And what you've found is **le secret** that the city doesn't want anyone to know."`,
      translatedWords: [
        { word: "la porte", translation: "the door" },
        { word: "la lumière", translation: "the light" },
        { word: "la ville", translation: "the city" },
        { word: "découvrir", translation: "to discover" },
        { word: "le secret", translation: "the secret" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — The Choice",
      content: `Maia explained everything as they walked through the hidden district.

Years ago, when Néo-Lyon was being rebuilt, the city planners decided that nature was "inefficient." Trees took up space. Rivers flooded. Gardens attracted insects. So they paved over everything and replaced it with chrome and holograms.

But some people refused to leave. They stayed in Sector 9 and built **la porte** — the wall — themselves, to protect what was left. The city pretended they didn't exist.

"They want to tear this down next year," Maia said quietly. "Build more towers. More screens. More... nothing."

Léo looked around. Kids were playing in the grass. Someone was baking bread — he could actually SMELL it. In Néo-Lyon, everything smelled like recycled air.

"This is what **le monde** used to be like?" Léo asked.

"Part of it," Maia said. "The good part."

Léo sat by the river and thought. He thought about **la ville** outside — the city he'd grown up in, with its flying cars and holographic everything. It was impressive. But it was also... empty. Nobody talked to each other. Nobody looked at **le ciel**. Nobody stopped to smell bread.

"**L'avenir** doesn't have to look like Néo-Lyon," Maia said, sitting next to him. "The future can be whatever we decide it is."

Léo pulled out Pixel. The little orb blinked awake. "Pixel, I need you to record everything. This whole place. Every tree, every building, every person."

"Recording, Léo. But... why?"

Léo stood up. "Because **le monde** needs to **découvrir** this. People deserve to know what they lost — and what they can still get back."

He looked up at **le ciel** — the real sky, not through a window or a hologram. Blue. Endless. Full of possibility.

**Demain** would be different. He'd make sure of it.

Because **l'avenir** — the future — isn't something that just happens to you. It's something you build. And sometimes, the most futuristic thing you can do is plant a tree.`,
      translatedWords: [
        { word: "la porte", translation: "the door" },
        { word: "le monde", translation: "the world" },
        { word: "la ville", translation: "the city" },
        { word: "le ciel", translation: "the sky" },
        { word: "l'avenir", translation: "the future" },
        { word: "découvrir", translation: "to discover" },
        { word: "demain", translation: "tomorrow" }
      ]
    }
  ],
  fullTargetLanguageStory: `L'année était 2089, et la ville de Néo-Lyon était la plus avancée de la planète.

Les voitures ne roulaient pas — elles volaient. Léo les regardait filer à travers le ciel depuis la fenêtre de sa chambre, des traînées de lumière bleue derrière elles comme des comètes. Les bâtiments s'étiraient si haut que leurs sommets disparaissaient dans les nuages. Tout était chrome, verre et publicités holographiques vendant des trucs dont personne n'avait besoin.

Léo avait quatorze ans, et il s'ennuyait à mourir.

"Encore une journée parfaite dans la ville parfaite," murmura-t-il en enfilant sa veste. Son assistant IA — un orbe flottant nommé Pixel — s'est allumé.

"Bonjour, Léo! La météo dans la ville est de 22 degrés, la qualité de l'air est optimale, et ton transport scolaire part dans—"

"Oui, oui." Léo a fait signe à Pixel de se taire. "Je sais."

Il est sorti et a rejoint le flux de personnes se dirigeant vers le hub de transit. Tout le monde avait la tête baissée, fixant des écrans holographiques projetés depuis leurs poignets. Personne ne parlait. Personne ne regardait le ciel. Personne ne remarquait rien.

Mais Léo remarquait des choses. Comme le fait que le Secteur 9 — le vieux quartier près de la rivière — était bloqué depuis trois ans. La ville disait qu'il était "en rénovation." Mais il n'y avait pas de drones de construction. Pas d'ouvriers. Juste un mur massif et une porte verrouillée.

Aujourd'hui, il allait découvrir pourquoi.

Léo a séché l'école. (Il gérerait les conséquences plus tard.)

Il a pris le chemin long jusqu'au Secteur 9, se faufilant dans les ruelles et évitant les drones de surveillance de la ville. Pixel flottait derrière lui, nerveux.

"Léo, cette zone est interdite. Je te conseille fortement—"

"Pixel, silence."

Pixel a fait un bip triste mais s'est tu.

Le mur autour du Secteur 9 faisait dix mètres de haut et était lisse comme du verre. Pas de prises. Pas de trous. Mais Léo avait passé deux semaines à étudier les plans qu'il avait piratés dans la base de données de la ville. Il y avait un tunnel de maintenance en dessous — et sa porte était cachée derrière une benne sur la Rue Voltaire.

Il l'a trouvée. Une petite porte en métal, rouillée et oubliée. Il l'a ouverte et s'est glissé à l'intérieur.

Le tunnel était sombre. Léo a activé la lampe torche de Pixel, et la lumière a percé les ombres. Après dix minutes de reptation, il est ressorti de l'autre côté.

Et il a arrêté de respirer.

Le Secteur 9 n'était pas en rénovation. Il était VIVANT.

Des arbres. De vrais arbres, pas les holographiques du reste de la ville. De l'herbe. Des fleurs. Une rivière — de l'eau qui coulait vraiment — traversant le milieu. Et des bâtiments, mais pas les tours chromées de Néo-Lyon. Ceux-ci étaient anciens. En pierre et en bois, avec des volets peints et des jardinières.

Des gens vivaient ici. Léo pouvait les voir — des familles, des enfants, un vieil homme lisant un livre papier sur un banc.

"Qu'est-ce que c'est cet endroit?" chuchota Léo.

Une fille plus âgée est sortie de derrière un arbre. Elle avait environ seize ans, les doigts tachés de peinture et le regard vif. "Tu viens de l'autre côté du mur."

Ce n'était pas une question.

"Je suis Léo. Je voulais juste découvrir ce qu'il y avait derrière."

Elle l'a étudié pendant un long moment. "Je suis Maia. Et ce que tu as trouvé, c'est le secret que la ville ne veut pas que quiconque connaisse."

Maia a tout expliqué pendant qu'ils marchaient à travers le quartier caché.

Il y a des années, quand Néo-Lyon était reconstruite, les urbanistes ont décidé que la nature était "inefficace." Les arbres prenaient de la place. Les rivières débordaient. Les jardins attiraient les insectes. Alors ils ont tout recouvert de béton et remplacé par du chrome et des hologrammes.

Mais certaines personnes ont refusé de partir. Elles sont restées dans le Secteur 9 et ont construit la porte — le mur — elles-mêmes, pour protéger ce qui restait. La ville a fait semblant qu'elles n'existaient pas.

"Ils veulent démolir tout ça l'année prochaine," dit Maia doucement. "Construire plus de tours. Plus d'écrans. Plus de... rien."

Léo a regardé autour de lui. Des enfants jouaient dans l'herbe. Quelqu'un faisait du pain — il pouvait vraiment le SENTIR. À Néo-Lyon, tout sentait l'air recyclé.

"C'est à ça que le monde ressemblait avant?" demanda Léo.

"En partie," dit Maia. "La bonne partie."

Léo s'est assis au bord de la rivière et a réfléchi. Il a pensé à la ville dehors — la ville où il avait grandi, avec ses voitures volantes et ses hologrammes partout. C'était impressionnant. Mais c'était aussi... vide. Personne ne se parlait. Personne ne regardait le ciel. Personne ne s'arrêtait pour sentir le pain.

"L'avenir n'a pas besoin de ressembler à Néo-Lyon," dit Maia en s'asseyant à côté de lui. "Le futur peut être ce que nous décidons qu'il est."

Léo a sorti Pixel. Le petit orbe s'est rallumé. "Pixel, j'ai besoin que tu enregistres tout. Tout cet endroit. Chaque arbre, chaque bâtiment, chaque personne."

"J'enregistre, Léo. Mais... pourquoi?"

Léo s'est levé. "Parce que le monde doit découvrir ça. Les gens méritent de savoir ce qu'ils ont perdu — et ce qu'ils peuvent encore récupérer."

Il a levé les yeux vers le ciel — le vrai ciel, pas à travers une fenêtre ou un hologramme. Bleu. Infini. Plein de possibilités.

Demain serait différent. Il s'en assurerait.

Parce que l'avenir — ce n'est pas quelque chose qui vous arrive. C'est quelque chose que vous construisez. Et parfois, la chose la plus futuriste que vous puissiez faire, c'est planter un arbre.`,
  quiz: [
    // Fill in the blank (4)
    {
      id: "fb1",
      type: "fill-blank",
      question: "The year was 2089, and _____ of Néo-Lyon was the most advanced city on the planet.",
      answer: "la ville"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "Léo watched them zip across _____ from his bedroom window.",
      answer: "le ciel"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "\"What you've found is _____ that the city doesn't want anyone to know.\"",
      answer: "le secret"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "_____ would be different. He'd make sure of it.",
      answer: "Demain"
    },
    // Multiple choice (4)
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'voler' mean?",
      answer: "to fly",
      options: ["to steal", "to fly", "to fall", "to drive"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'la lumière' mean?",
      answer: "the light",
      options: ["the moon", "the star", "the light", "the lamp"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'découvrir' mean?",
      answer: "to discover",
      options: ["to cover", "to hide", "to discover", "to recover"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'l'avenir' mean?",
      answer: "the future",
      options: ["the adventure", "the future", "the avenue", "the warning"]
    },
    // Translate (4)
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'le monde'",
      answer: "the world"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'the door'",
      answer: "la porte"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'demain'",
      answer: "tomorrow"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the city'",
      answer: "la ville"
    }
  ]
};

// ============================================================
// 🎨 CREATIVE — "Le Chef-d'œuvre" (The Masterpiece)
// ============================================================
export const leChefDoeuvreEpisode: Episode = {
  id: "le-chef-doeuvre",
  title: "Le Chef-d'œuvre",
  description: "A young street artist in Paris gets the chance of a lifetime — but must choose between fame and staying true to her art",
  vocab: [
    { word: "le chef-d'œuvre", pronunciation: "luh sheh-DUH-vruh", english: "the masterpiece" },
    { word: "peindre", pronunciation: "PAN-druh", english: "to paint" },
    { word: "le tableau", pronunciation: "luh tah-BLOH", english: "the painting" },
    { word: "les couleurs", pronunciation: "lay koo-LUHR", english: "the colors" },
    { word: "le musée", pronunciation: "luh moo-ZAY", english: "the museum" },
    { word: "l'artiste", pronunciation: "lar-TEEST", english: "the artist" },
    { word: "le pinceau", pronunciation: "luh pan-SOH", english: "the paintbrush" },
    { word: "le mur", pronunciation: "luh MUHR", english: "the wall" },
    { word: "créer", pronunciation: "kray-AY", english: "to create" },
    { word: "le rêve", pronunciation: "luh REHV", english: "the dream" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Girl with the Spray Cans",
      content: `Inès had never been inside **le musée**. Not once. And she lived three blocks away from the Louvre.

It wasn't that she didn't care about art — art was literally her entire life. But museums felt like... cages. All those paintings locked behind glass, with little cards telling you what to feel. That wasn't art. Not to her.

Real art was alive. Real art was on **le mur** — the wall.

Every Friday night, Inès snuck out with her backpack full of spray cans and her sketchbook. She'd find a blank wall somewhere in Paris and **peindre** — paint — until the sun came up. Giant murals of birds breaking free from cages. Underwater cities. A girl with galaxy hair reaching for the moon.

Her tag was "NOVA," and she was everywhere. People posted her murals on social media. A blog called her "Paris's most mysterious **artiste**." Someone even made a TikTok tour of her work that got two million views.

But nobody knew it was a thirteen-year-old girl with paint-stained Converses and a B-minus in math.

One morning, walking to school past her latest mural — a phoenix made of **couleurs** so bright it looked like it was actually on fire — she saw something taped to the wall.

A business card. Expensive. Cream-colored.

*GALERIE LAURENT — PARIS*
*We'd like to talk. Call this number.*

Inès stared at it. A gallery wanted to talk to NOVA. A real, actual **galerie** in Paris wanted to talk to HER.

She shoved the card in her pocket and kept walking. But her heart was beating like crazy.

This was **le rêve**. THE dream. Wasn't it?`,
      translatedWords: [
        { word: "le musée", translation: "the museum" },
        { word: "le mur", translation: "the wall" },
        { word: "peindre", translation: "to paint" },
        { word: "artiste", translation: "artist" },
        { word: "couleurs", translation: "colors" },
        { word: "le rêve", translation: "the dream" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Offer",
      content: `Inès called the number. A woman named Madame Laurent answered, and three days later, Inès was standing in the fanciest room she'd ever seen.

The gallery was all white walls and polished floors. Tiny spotlights illuminated **tableaux** that probably cost more than her apartment. Inès felt like she might break something just by breathing.

Madame Laurent was tall, elegant, and terrifying. She looked at Inès the way a jeweler looks at a diamond — calculating.

"So. YOU are NOVA." She circled Inès slowly. "I expected someone... older."

"I get that a lot," Inès said, trying to sound cool.

Madame Laurent smiled. "I want to give you a show. Your own exhibition. Right here in my gallery. **Tableaux**, installations, whatever you want. The theme, the **couleurs**, the style — all you."

Inès's jaw dropped. "Are you serious?"

"But," Madame Laurent held up a finger, "there are conditions. No spray cans. No street art. I need proper **tableaux** — canvas, **pinceau**, oil paint. Gallery art. Refined. Sophisticated."

She gestured to the pristine white walls. "This is not **le mur** of some alley, Inès. This is where Paris comes to see **les artistes**. You need to paint like one."

Inès looked at the gallery walls. She imagined her work there — spotlit, framed, important. People in fancy clothes holding wine glasses, nodding at her art. It was everything she'd dreamed of.

But... no spray cans? No walls? No streets?

"Can I think about it?" she asked.

"You have one week," Madame Laurent said. "After that, I find another **artiste**."

That night, Inès sat on her bedroom floor surrounded by her spray cans and her sketchbook. She picked up **le pinceau** — a nice one her mom had given her for her birthday. She tried painting on a small canvas.

It was fine. Good, even. Technically correct.

But it didn't feel like HER. It felt like someone else wearing her hands.

She needed to **créer** something real. But what?`,
      translatedWords: [
        { word: "tableaux", translation: "paintings" },
        { word: "couleurs", translation: "colors" },
        { word: "pinceau", translation: "paintbrush" },
        { word: "le mur", translation: "the wall" },
        { word: "les artistes", translation: "the artists" },
        { word: "artiste", translation: "artist" },
        { word: "le pinceau", translation: "the paintbrush" },
        { word: "créer", translation: "to create" }
      ]
    },
    {
      id: "part3",
      title: "Part 3 — The Masterpiece",
      content: `The night before the deadline, Inès made her decision.

She showed up at Galerie Laurent at midnight with her backpack. She didn't have a key, but the alley behind the gallery had a big, blank, beautiful **mur**. Five meters tall. Ten meters wide. Perfect.

She worked all night. Spray can in one hand, **pinceau** in the other. She didn't choose between street art and gallery art. She chose BOTH.

The mural exploded with **couleurs**. At the center was a girl standing between two worlds — one side was a pristine gallery with **tableaux** in gold frames, the other side was a wild street covered in murals and light. The girl wasn't choosing. She was pulling them together, merging them into something new.

At the bottom, in her signature style, she wrote: **"L'art n'a pas de murs."** Art has no walls.

When the sun came up, Inès sat on the sidewalk, exhausted, covered in paint, and grinning. It was the best thing she'd ever made. **Le chef-d'œuvre**. Her masterpiece.

Madame Laurent arrived at 9 AM. Inès watched from across the street, heart hammering.

The woman stood in front of the mural for a full five minutes without moving. Then she turned, saw Inès, and walked over.

"I said canvas. I said oil paint. I said no walls."

"I know," Inès said. "But **le chef-d'œuvre** doesn't follow rules. It follows truth."

Madame Laurent stared at her. Then — slowly — she started laughing. Actually laughing. "You are IMPOSSIBLE."

She looked back at the mural. "It's brilliant. You are brilliant. I still want the show."

"On my terms?" Inès asked.

"On your terms, NOVA."

Two months later, Galerie Laurent hosted its most talked-about exhibition in a decade. Half the art was on canvas inside. Half was on **le mur** outside. People walked between both, and for the first time, the gallery didn't feel like a cage.

Inès — **l'artiste** — stood in the middle and watched people experience her work. Some laughed. Some cried. A little girl tugged on her mom's sleeve and said, "I want to **peindre** like that."

That's when Inès knew. **Le rêve** was never about a gallery or a wall. It was about **créer** — creating something that makes someone else want to create too.

And THAT was the real **chef-d'œuvre**.`,
      translatedWords: [
        { word: "mur", translation: "wall" },
        { word: "pinceau", translation: "paintbrush" },
        { word: "couleurs", translation: "colors" },
        { word: "tableaux", translation: "paintings" },
        { word: "L'art n'a pas de murs", translation: "Art has no walls" },
        { word: "le chef-d'œuvre", translation: "the masterpiece" },
        { word: "l'artiste", translation: "the artist" },
        { word: "le mur", translation: "the wall" },
        { word: "peindre", translation: "to paint" },
        { word: "le rêve", translation: "the dream" },
        { word: "créer", translation: "to create" },
        { word: "chef-d'œuvre", translation: "masterpiece" }
      ]
    }
  ],
  fullTargetLanguageStory: `Inès n'était jamais entrée dans le musée. Pas une seule fois. Et elle vivait à trois rues du Louvre.

Ce n'était pas qu'elle ne s'intéressait pas à l'art — l'art était littéralement toute sa vie. Mais les musées ressemblaient à... des cages. Toutes ces peintures enfermées derrière du verre, avec des petites cartes qui te disent quoi ressentir. Ce n'était pas de l'art. Pas pour elle.

Le vrai art était vivant. Le vrai art était sur le mur.

Chaque vendredi soir, Inès se glissait dehors avec son sac à dos plein de bombes de peinture et son carnet de croquis. Elle trouvait un mur vierge quelque part dans Paris et peignait jusqu'au lever du soleil. Des peintures murales géantes d'oiseaux s'échappant de cages. Des villes sous-marines. Une fille aux cheveux galaxie tendant la main vers la lune.

Son tag était "NOVA," et elle était partout. Les gens publiaient ses peintures murales sur les réseaux sociaux. Un blog l'appelait "l'artiste la plus mystérieuse de Paris." Quelqu'un avait même fait un tour TikTok de son travail qui avait obtenu deux millions de vues.

Mais personne ne savait que c'était une fille de treize ans avec des Converses tachées de peinture et un 12 en maths.

Un matin, en marchant vers l'école devant sa dernière peinture murale — un phénix fait de couleurs si vives qu'on aurait dit qu'il était vraiment en feu — elle a vu quelque chose scotché au mur.

Une carte de visite. Chic. Couleur crème.

GALERIE LAURENT — PARIS
Nous aimerions vous parler. Appelez ce numéro.

Inès l'a fixée. Une galerie voulait parler à NOVA. Une vraie galerie à Paris voulait lui parler à ELLE.

Elle a fourré la carte dans sa poche et a continué à marcher. Mais son cœur battait comme un fou.

C'était le rêve. LE rêve. Non?

Inès a appelé le numéro. Une femme nommée Madame Laurent a répondu, et trois jours plus tard, Inès se tenait dans la pièce la plus chic qu'elle ait jamais vue.

La galerie était toute en murs blancs et sols polis. De petits projecteurs éclairaient des tableaux qui coûtaient probablement plus cher que son appartement. Inès avait l'impression qu'elle pourrait casser quelque chose rien qu'en respirant.

Madame Laurent était grande, élégante et terrifiante. Elle regardait Inès comme un bijoutier regarde un diamant — en calculant.

"Alors. VOUS êtes NOVA." Elle a tourné lentement autour d'Inès. "Je m'attendais à quelqu'un de... plus vieux."

"On me dit souvent ça," dit Inès en essayant d'avoir l'air cool.

Madame Laurent a souri. "Je veux vous donner une exposition. Votre propre exposition. Ici même, dans ma galerie. Des tableaux, des installations, ce que vous voulez. Le thème, les couleurs, le style — tout vous."

La mâchoire d'Inès est tombée. "Vous êtes sérieuse?"

"Mais," Madame Laurent a levé un doigt, "il y a des conditions. Pas de bombes de peinture. Pas d'art de rue. J'ai besoin de vrais tableaux — toile, pinceau, peinture à l'huile. Art de galerie. Raffiné. Sophistiqué."

Elle a désigné les murs blancs immaculés. "Ce n'est pas le mur d'une ruelle, Inès. C'est ici que Paris vient voir les artistes. Vous devez peindre comme une."

Inès a regardé les murs de la galerie. Elle a imaginé son travail là — éclairé, encadré, important. Des gens en vêtements chics tenant des verres de vin, hochant la tête devant son art. C'était tout ce dont elle avait rêvé.

Mais... pas de bombes de peinture? Pas de murs? Pas de rues?

"Est-ce que je peux y réfléchir?" demanda-t-elle.

"Vous avez une semaine," dit Madame Laurent. "Après ça, je trouve un autre artiste."

Ce soir-là, Inès était assise sur le sol de sa chambre, entourée de ses bombes de peinture et de son carnet. Elle a pris le pinceau — un joli, que sa mère lui avait offert pour son anniversaire. Elle a essayé de peindre sur une petite toile.

C'était bien. Bon, même. Techniquement correct.

Mais ça ne ressemblait pas à ELLE. On aurait dit quelqu'un d'autre portant ses mains.

Elle devait créer quelque chose de vrai. Mais quoi?

La nuit avant la date limite, Inès a pris sa décision.

Elle s'est présentée à la Galerie Laurent à minuit avec son sac à dos. Elle n'avait pas de clé, mais la ruelle derrière la galerie avait un grand, vierge et magnifique mur. Cinq mètres de haut. Dix mètres de large. Parfait.

Elle a travaillé toute la nuit. Bombe de peinture dans une main, pinceau dans l'autre. Elle n'a pas choisi entre l'art de rue et l'art de galerie. Elle a choisi LES DEUX.

La peinture murale a explosé de couleurs. Au centre, une fille se tenait entre deux mondes — un côté était une galerie immaculée avec des tableaux dans des cadres dorés, l'autre côté était une rue sauvage couverte de peintures murales et de lumière. La fille ne choisissait pas. Elle les rassemblait, les fusionnant en quelque chose de nouveau.

En bas, dans son style signature, elle a écrit: "L'art n'a pas de murs."

Quand le soleil s'est levé, Inès était assise sur le trottoir, épuisée, couverte de peinture, et souriante. C'était la meilleure chose qu'elle ait jamais faite. Le chef-d'œuvre. Son chef-d'œuvre.

Madame Laurent est arrivée à 9h. Inès l'observait de l'autre côté de la rue, le cœur battant.

La femme est restée devant la peinture murale pendant cinq bonnes minutes sans bouger. Puis elle s'est retournée, a vu Inès, et s'est approchée.

"J'ai dit toile. J'ai dit peinture à l'huile. J'ai dit pas de murs."

"Je sais," dit Inès. "Mais le chef-d'œuvre ne suit pas les règles. Il suit la vérité."

Madame Laurent l'a fixée. Puis — lentement — elle a commencé à rire. Vraiment rire. "Vous êtes IMPOSSIBLE."

Elle a regardé à nouveau la peinture murale. "C'est brillant. Vous êtes brillante. Je veux toujours l'exposition."

"À mes conditions?" demanda Inès.

"À vos conditions, NOVA."

Deux mois plus tard, la Galerie Laurent a accueilli son exposition la plus discutée de la décennie. La moitié de l'art était sur toile à l'intérieur. L'autre moitié était sur le mur à l'extérieur. Les gens passaient de l'un à l'autre, et pour la première fois, la galerie ne ressemblait pas à une cage.

Inès — l'artiste — se tenait au milieu et regardait les gens découvrir son travail. Certains riaient. Certains pleuraient. Une petite fille a tiré sur la manche de sa mère et a dit, "Je veux peindre comme ça."

C'est à ce moment qu'Inès a su. Le rêve, ce n'était jamais une galerie ou un mur. C'était créer — créer quelque chose qui donne envie à quelqu'un d'autre de créer aussi.

Et ÇA, c'était le vrai chef-d'œuvre.`,
  quiz: [
    // Fill in the blank (4)
    {
      id: "fb1",
      type: "fill-blank",
      question: "Inès had never been inside _____. Not once.",
      answer: "le musée"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "Real art was on _____ — the wall.",
      answer: "le mur"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "This was _____. THE dream. Wasn't it?",
      answer: "le rêve"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "It was the best thing she'd ever made. _____. Her masterpiece.",
      answer: "Le chef-d'œuvre"
    },
    // Multiple choice (4)
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'peindre' mean?",
      answer: "to paint",
      options: ["to draw", "to paint", "to sculpt", "to write"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'le tableau' mean?",
      answer: "the painting",
      options: ["the table", "the painting", "the frame", "the wall"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'le pinceau' mean?",
      answer: "the paintbrush",
      options: ["the pencil", "the pen", "the paintbrush", "the palette"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'créer' mean?",
      answer: "to create",
      options: ["to cry", "to create", "to believe", "to grow"]
    },
    // Translate (4)
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'les couleurs'",
      answer: "the colors"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'the museum'",
      answer: "le musée"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'l'artiste'",
      answer: "the artist"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the dream'",
      answer: "le rêve"
    }
  ]
};

// ============================================================
// 📚 HISTORY — "La Révolution" (The Revolution)
// ============================================================
export const laRevolutionEpisode: Episode = {
  id: "la-revolution",
  title: "La Révolution",
  description: "Léo finds an old pocket watch in his grandmother's attic and is transported to Paris during the French Revolution",
  vocab: [
    { word: "la révolution", pronunciation: "lah ray-voh-loo-SYOHN", english: "the revolution" },
    { word: "le roi", pronunciation: "luh RWAH", english: "the king" },
    { word: "le peuple", pronunciation: "luh PUHP-luh", english: "the people" },
    { word: "la liberté", pronunciation: "lah lee-behr-TAY", english: "freedom/liberty" },
    { word: "le château", pronunciation: "luh shah-TOH", english: "the castle" },
    { word: "l'histoire", pronunciation: "lees-TWAHR", english: "history/the story" },
    { word: "le drapeau", pronunciation: "luh drah-POH", english: "the flag" },
    { word: "courageux", pronunciation: "koo-rah-ZHUH", english: "brave/courageous" },
    { word: "se battre", pronunciation: "suh BAH-truh", english: "to fight" },
    { word: "la justice", pronunciation: "lah zhoos-TEES", english: "justice" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Pocket Watch",
      content: `Léo never liked history class. Dates, kings, battles — it all felt like someone else's problem. But when his grandmother asked him to clean out her attic in Lyon, he found something that changed everything. Tucked inside a velvet box was a golden pocket watch with the words "**la révolution**" engraved on the back.

He clicked the button on top. The attic dissolved around him. Suddenly he was standing on a crowded Paris street, and it was definitely not the twenty-first century. People in old-fashioned clothes were shouting and waving **le drapeau** — the blue, white, and red flag — while marching toward a massive stone fortress. A boy about Léo's age grabbed his arm. "Come on! **Le peuple** is marching to the Bastille! Are you **courageux** enough to join us?"

Léo's heart was pounding. This was 1789. This was real. **L'histoire** wasn't a dusty textbook anymore — it was happening right in front of him, and it smelled like smoke and bread and fear. He looked at the pocket watch in his hand. There was no going-back button. The only way was forward.`,
      translatedWords: [
        { word: "la révolution", translation: "the revolution" },
        { word: "le drapeau", translation: "the flag" },
        { word: "le peuple", translation: "the people" },
        { word: "courageux", translation: "brave/courageous" },
        { word: "l'histoire", translation: "history/the story" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — Liberty",
      content: `The boy's name was Étienne. He explained everything as they ran through narrow alleys: **le roi** lived in **le château** at Versailles, eating feasts every night, while ordinary families starved. The bakeries were empty. Mothers couldn't feed their children. And now, **le peuple** had had enough.

"We don't want violence," Étienne said, his eyes fierce. "We want **la justice**. We want **la liberté**. Is that so much to ask?" They reached the square where hundreds of people were gathered, chanting and singing. Léo could feel the energy — electric, terrifying, and hopeful all at once. He understood now why people were willing to **se battre** for what they believed in.

As the sun set over Paris, the pocket watch grew warm in Léo's pocket. The street began to shimmer and fade. "Wait!" Étienne called out. "Will you remember us?" Léo nodded, tears stinging his eyes. "I promise." Back in the dusty attic, Léo sat on the floor and stared at the watch. **L'histoire** wasn't someone else's problem. It was everyone's story — and now it was his, too.`,
      translatedWords: [
        { word: "le roi", translation: "the king" },
        { word: "le château", translation: "the castle" },
        { word: "le peuple", translation: "the people" },
        { word: "la justice", translation: "justice" },
        { word: "la liberté", translation: "freedom/liberty" },
        { word: "se battre", translation: "to fight" },
        { word: "l'histoire", translation: "history/the story" }
      ]
    }
  ],
  quiz: [
    {
      id: "fb1",
      type: "fill-blank",
      question: "Tucked inside a velvet box was a golden pocket watch with the words '______' engraved on the back.",
      answer: "la révolution"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "People were shouting and waving ______ — the blue, white, and red flag.",
      answer: "le drapeau"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "The king lived in ______ at Versailles while ordinary people starved.",
      answer: "le château"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "We want ______. We want la liberté. Is that so much to ask?",
      answer: "la justice"
    },
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'le roi' mean?",
      answer: "the king",
      options: ["the people", "the king", "the castle", "the flag"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'la liberté' mean?",
      answer: "freedom/liberty",
      options: ["freedom/liberty", "justice", "the revolution", "bravery"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'courageux' mean?",
      answer: "brave/courageous",
      options: ["dangerous", "angry", "brave/courageous", "tired"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'se battre' mean?",
      answer: "to fight",
      options: ["to run", "to fight", "to hide", "to shout"]
    },
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'le peuple'",
      answer: "the people"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'history/the story'",
      answer: "l'histoire"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'le drapeau'",
      answer: "the flag"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the castle'",
      answer: "le château"
    }
  ],
  fullTargetLanguageStory: `Léo n'aimait jamais les cours d'histoire. Des dates, des rois, des batailles — tout cela semblait être le problème de quelqu'un d'autre. Mais quand sa grand-mère lui a demandé de nettoyer son grenier à Lyon, il a trouvé quelque chose qui a tout changé. Caché dans un coffret en velours se trouvait une montre de poche en or avec les mots « la révolution » gravés au dos.

Il a appuyé sur le bouton. Le grenier s'est dissous autour de lui. Soudain, il se tenait dans une rue bondée de Paris, et ce n'était définitivement pas le vingt-et-unième siècle. Des gens en vêtements anciens criaient et agitaient le drapeau — le bleu, blanc et rouge — en marchant vers une immense forteresse de pierre. Un garçon de l'âge de Léo lui a attrapé le bras. « Viens ! Le peuple marche vers la Bastille ! Es-tu assez courageux pour nous rejoindre ? »

Le cœur de Léo battait la chamade. C'était 1789. C'était réel. L'histoire n'était plus un manuel poussiéreux — elle se déroulait juste devant lui, et elle sentait la fumée, le pain et la peur. Il a regardé la montre de poche dans sa main. Il n'y avait pas de bouton retour. La seule voie était en avant.

Le garçon s'appelait Étienne. Il a tout expliqué pendant qu'ils couraient dans des ruelles étroites : le roi vivait dans le château à Versailles, festoyant chaque soir, tandis que les familles ordinaires mouraient de faim. Les boulangeries étaient vides. Les mères ne pouvaient pas nourrir leurs enfants. Et maintenant, le peuple en avait assez.

« Nous ne voulons pas de violence, » a dit Étienne, les yeux féroces. « Nous voulons la justice. Nous voulons la liberté. Est-ce trop demander ? » Ils ont atteint la place où des centaines de personnes étaient rassemblées, scandant et chantant. Léo pouvait sentir l'énergie — électrique, terrifiante et pleine d'espoir à la fois. Il comprenait maintenant pourquoi les gens étaient prêts à se battre pour ce en quoi ils croyaient.

Alors que le soleil se couchait sur Paris, la montre de poche est devenue chaude dans la poche de Léo. La rue a commencé à scintiller et à s'effacer. « Attends ! » a crié Étienne. « Tu te souviendras de nous ? » Léo a hoché la tête, les larmes aux yeux. « Je te le promets. » De retour dans le grenier poussiéreux, Léo s'est assis par terre et a fixé la montre. L'histoire n'était pas le problème de quelqu'un d'autre. C'était l'histoire de tout le monde — et maintenant c'était aussi la sienne.`
};

// ============================================================
// 🔬 SCIENCE — "L'Expérience" (The Experiment)
// ============================================================
export const lExperienceEpisode: Episode = {
  id: "l-experience",
  title: "L'Expérience",
  description: "Zoé discovers a mysteriously fast-growing plant in her school greenhouse and uses the scientific method to uncover its secret",
  vocab: [
    { word: "l'expérience", pronunciation: "lex-pay-ree-AHNSS", english: "the experiment" },
    { word: "le microscope", pronunciation: "luh mee-kroh-SKOHP", english: "the microscope" },
    { word: "la plante", pronunciation: "lah PLAHNT", english: "the plant" },
    { word: "découvrir", pronunciation: "day-koo-VREER", english: "to discover" },
    { word: "le laboratoire", pronunciation: "luh lah-boh-rah-TWAHR", english: "the laboratory" },
    { word: "la lumière", pronunciation: "lah loo-MYEHR", english: "the light" },
    { word: "grandir", pronunciation: "grahn-DEER", english: "to grow" },
    { word: "la science", pronunciation: "lah see-AHNSS", english: "science" },
    { word: "observer", pronunciation: "ohb-sehr-VAY", english: "to observe" },
    { word: "la preuve", pronunciation: "lah PRUHV", english: "the proof/evidence" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Impossible Plant",
      content: `Zoé loved **la science** more than anything. While other kids watched videos after school, she watched documentaries about deep-sea creatures and black holes. So when Monsieur Fabre, the biology teacher, announced a greenhouse project, Zoé practically sprinted to **le laboratoire** to pick her seeds. She chose sunflowers — simple, predictable, easy to **observer**.

Except her sunflower was anything but predictable. By Tuesday morning — just three days after planting — **la plante** was already thirty centimeters tall. By Thursday it had doubled. The other kids' seedlings were barely poking through the soil. Zoé stared through **le microscope** and noticed something strange: the cells were dividing way faster than normal, almost like something was supercharging them.

"That's impossible," she whispered. She pulled out her lab notebook and started writing. If **la science** had taught her anything, it was this: when something seems impossible, you don't panic. You ask questions. You design **l'expérience**. You find the answer.`,
      translatedWords: [
        { word: "la science", translation: "science" },
        { word: "le laboratoire", translation: "the laboratory" },
        { word: "observer", translation: "to observe" },
        { word: "la plante", translation: "the plant" },
        { word: "le microscope", translation: "the microscope" },
        { word: "l'expérience", translation: "the experiment" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Discovery",
      content: `Zoé set up a controlled experiment. Two identical pots, same soil, same water. The only difference: one pot sat under the greenhouse's old UV lamp, and the other sat in normal sunlight. Within forty-eight hours, the plant under **la lumière** from the UV lamp had grown fifteen centimeters. The control plant? Three. Something about that specific light was making the cells **grandir** at an incredible rate.

She ran to Monsieur Fabre's office, notebook in hand. "I think the old UV lamp is emitting a wavelength that accelerates cell division," she said breathlessly. He raised an eyebrow. "That's a bold claim, Zoé. Do you have **la preuve**?" She flipped open her notebook: charts, measurements, photographs under **le microscope**, and three repeated trials. All pointing to the same conclusion.

Monsieur Fabre stared at the data for a long time. Then he smiled. "You didn't just **découvrir** something interesting, Zoé. You proved it. That's what real scientists do." He entered her project into the regional science fair. Zoé grinned the entire walk home. **La science** wasn't just about knowing facts — it was about asking the right questions and never stopping until you found the truth.`,
      translatedWords: [
        { word: "la lumière", translation: "the light" },
        { word: "grandir", translation: "to grow" },
        { word: "la preuve", translation: "the proof/evidence" },
        { word: "le microscope", translation: "the microscope" },
        { word: "découvrir", translation: "to discover" },
        { word: "la science", translation: "science" }
      ]
    }
  ],
  quiz: [
    {
      id: "fb1",
      type: "fill-blank",
      question: "Zoé practically sprinted to ______ to pick her seeds.",
      answer: "le laboratoire"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "Zoé stared through ______ and noticed something strange.",
      answer: "le microscope"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "Something about that specific light was making the cells ______ at an incredible rate.",
      answer: "grandir"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "Do you have ______? She flipped open her notebook.",
      answer: "la preuve"
    },
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'l'expérience' mean?",
      answer: "the experiment",
      options: ["the experience", "the experiment", "the explosion", "the example"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'découvrir' mean?",
      answer: "to discover",
      options: ["to cover", "to discover", "to run", "to decorate"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'la lumière' mean?",
      answer: "the light",
      options: ["the lamp", "the light", "the moon", "the plant"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'observer' mean?",
      answer: "to observe",
      options: ["to obstruct", "to observe", "to obtain", "to obey"]
    },
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'la plante'",
      answer: "the plant"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'science'",
      answer: "la science"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'grandir'",
      answer: "to grow"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the laboratory'",
      answer: "le laboratoire"
    }
  ],
  fullTargetLanguageStory: `Zoé aimait la science plus que tout. Alors que les autres enfants regardaient des vidéos après l'école, elle regardait des documentaires sur les créatures des profondeurs et les trous noirs. Quand Monsieur Fabre, le professeur de biologie, a annoncé un projet en serre, Zoé a pratiquement couru au laboratoire pour choisir ses graines. Elle a choisi des tournesols — simples, prévisibles, faciles à observer.

Sauf que son tournesol n'avait rien de prévisible. Dès mardi matin — seulement trois jours après la plantation — la plante mesurait déjà trente centimètres. Jeudi, elle avait doublé. Les plants des autres élèves perçaient à peine le sol. Zoé a regardé à travers le microscope et a remarqué quelque chose d'étrange : les cellules se divisaient beaucoup plus vite que la normale, comme si quelque chose les surchargeait.

« C'est impossible, » a-t-elle murmuré. Elle a sorti son cahier de laboratoire et a commencé à écrire. Si la science lui avait appris quelque chose, c'était ceci : quand quelque chose semble impossible, on ne panique pas. On pose des questions. On conçoit l'expérience. On trouve la réponse.

Zoé a mis en place une expérience contrôlée. Deux pots identiques, même terre, même eau. La seule différence : un pot était sous la vieille lampe UV de la serre, et l'autre sous la lumière naturelle du soleil. En quarante-huit heures, la plante sous la lumière de la lampe UV avait grandi de quinze centimètres. La plante témoin ? Trois. Quelque chose dans cette lumière spécifique faisait grandir les cellules à un rythme incroyable.

Elle a couru au bureau de Monsieur Fabre, cahier en main. « Je pense que la vieille lampe UV émet une longueur d'onde qui accélère la division cellulaire, » a-t-elle dit, essoufflée. Il a levé un sourcil. « C'est une affirmation audacieuse, Zoé. As-tu la preuve ? » Elle a ouvert son cahier : graphiques, mesures, photographies sous le microscope, et trois essais répétés. Tous pointant vers la même conclusion.

Monsieur Fabre a fixé les données pendant longtemps. Puis il a souri. « Tu n'as pas seulement découvert quelque chose d'intéressant, Zoé. Tu l'as prouvé. C'est ce que font les vrais scientifiques. » Il a inscrit son projet à la foire scientifique régionale. Zoé a souri tout le long du chemin vers la maison. La science, ce n'était pas juste connaître des faits — c'était poser les bonnes questions et ne jamais s'arrêter avant d'avoir trouvé la vérité.`
};

// ============================================================
// 💪 SELF-HELP — "Le Journal de Courage" (The Courage Journal)
// ============================================================
export const leJournalDeCourageEpisode: Episode = {
  id: "le-journal-de-courage",
  title: "Le Journal de Courage",
  description: "Shy Mathis starts a journal to build confidence before the school talent show — and discovers his voice along the way",
  vocab: [
    { word: "le journal", pronunciation: "luh zhoor-NAHL", english: "the journal/diary" },
    { word: "la confiance", pronunciation: "lah kohn-fee-AHNSS", english: "confidence" },
    { word: "la peur", pronunciation: "lah PUHR", english: "fear" },
    { word: "respirer", pronunciation: "reh-spee-RAY", english: "to breathe" },
    { word: "la voix", pronunciation: "lah VWAH", english: "the voice" },
    { word: "croire", pronunciation: "KRWAHR", english: "to believe" },
    { word: "le talent", pronunciation: "luh tah-LAHN", english: "talent" },
    { word: "la scène", pronunciation: "lah SEHN", english: "the stage" },
    { word: "réussir", pronunciation: "ray-oo-SEER", english: "to succeed" },
    { word: "fier", pronunciation: "fee-AY", english: "proud" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Empty Page",
      content: `Mathis had a secret: he could sing. Like, really sing. In the shower, in his bedroom with the door locked, humming on the walk to school — music lived inside him. But the moment anyone was watching, **la peur** took over. His throat closed. His hands shook. His **la voix** came out as a whisper. So when his music teacher, Madame Laurent, announced the school talent show, Mathis felt sick.

"You should sign up," his friend Alya said at lunch. "You have **le talent**, Mathis. Everyone in choir knows it." But Mathis shook his head. **La scène** — standing up there with the lights and the microphone and three hundred eyeballs — was his worst nightmare. That night, he couldn't sleep. He grabbed an old notebook from his desk and started writing. Not a song. Just... feelings. How scared he was. How much he wished he could be different. He didn't know it yet, but he'd just started **le journal** that would change everything.

Over the next week, Mathis wrote in **le journal** every single night. Monday: "I'm terrified but I hummed in front of Alya today and she smiled." Wednesday: "I sang one line out loud in the empty music room. My **la voix** echoed off the walls and it sounded... okay?" Friday: "Madame Laurent heard me practicing and said I have something special. I don't know if I **croire** her yet. But maybe I want to."`,
      translatedWords: [
        { word: "la peur", translation: "fear" },
        { word: "la voix", translation: "the voice" },
        { word: "le talent", translation: "talent" },
        { word: "la scène", translation: "the stage" },
        { word: "le journal", translation: "the journal/diary" },
        { word: "croire", translation: "to believe" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Spotlight",
      content: `The talent show was in three days. Mathis had signed up — barely. His hand had been shaking so hard when he wrote his name that it looked like a doctor's signature. He read back through **le journal** and realized something: he'd been getting braver every single day. Not huge leaps. Tiny steps. But they added up. Madame Laurent taught him a trick: "Before you go on stage, close your eyes and **respirer**. Breathe in for four counts, hold for four, out for four. **La peur** is just energy. Redirect it."

The night arrived. Mathis stood backstage, heart hammering, palms sweating. He could hear the crowd through the curtain. Three hundred people. He almost turned around. Then he pulled **le journal** from his back pocket and read the last thing he'd written: "**La confiance** isn't about not being scared. It's about being scared and doing it anyway." He closed his eyes. He breathed. **Respirer**. In, hold, out. The curtain opened.

He walked to the microphone. **La scène** was bright — blinding, almost. He couldn't see faces, only light. And somehow that helped. He opened his mouth, and for the first time in his life, **la voix** came out strong and clear and true. When the last note faded, there was a moment of silence. Then the auditorium erupted. Mathis stood there, tears running down his face, feeling something he'd never felt before: **fier**. He'd done it. Not perfectly. But he'd done it. He'd proven to himself that he could **réussir** — and that was worth more than any trophy.`,
      translatedWords: [
        { word: "le journal", translation: "the journal/diary" },
        { word: "respirer", translation: "to breathe" },
        { word: "la peur", translation: "fear" },
        { word: "la confiance", translation: "confidence" },
        { word: "la scène", translation: "the stage" },
        { word: "la voix", translation: "the voice" },
        { word: "fier", translation: "proud" },
        { word: "réussir", translation: "to succeed" }
      ]
    }
  ],
  quiz: [
    {
      id: "fb1",
      type: "fill-blank",
      question: "But the moment anyone was watching, ______ took over. His throat closed.",
      answer: "la peur"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "He grabbed an old notebook and started writing. He'd just started ______ that would change everything.",
      answer: "le journal"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "Close your eyes and ______. Breathe in for four counts, hold for four, out for four.",
      answer: "respirer"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "______ isn't about not being scared. It's about being scared and doing it anyway.",
      answer: "la confiance"
    },
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'la voix' mean?",
      answer: "the voice",
      options: ["the choice", "the voice", "the road", "the sight"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'croire' mean?",
      answer: "to believe",
      options: ["to grow", "to cry", "to believe", "to create"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'réussir' mean?",
      answer: "to succeed",
      options: ["to return", "to refuse", "to rest", "to succeed"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'fier' mean?",
      answer: "proud",
      options: ["fierce", "proud", "tired", "first"]
    },
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'la scène'",
      answer: "the stage"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'talent'",
      answer: "le talent"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'la peur'",
      answer: "fear"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'confidence'",
      answer: "la confiance"
    }
  ],
  fullTargetLanguageStory: `Mathis avait un secret : il savait chanter. Vraiment bien chanter. Sous la douche, dans sa chambre avec la porte fermée à clé, en fredonnant sur le chemin de l'école — la musique vivait en lui. Mais dès que quelqu'un regardait, la peur prenait le dessus. Sa gorge se serrait. Ses mains tremblaient. Sa voix ne sortait qu'en murmure. Alors quand sa professeure de musique, Madame Laurent, a annoncé le spectacle de talents de l'école, Mathis a eu la nausée.

« Tu devrais t'inscrire, » a dit son amie Alya au déjeuner. « Tu as le talent, Mathis. Tout le monde dans la chorale le sait. » Mais Mathis a secoué la tête. La scène — se tenir là-haut avec les lumières et le micro et trois cents paires d'yeux — c'était son pire cauchemar. Ce soir-là, il n'arrivait pas à dormir. Il a attrapé un vieux cahier sur son bureau et a commencé à écrire. Pas une chanson. Juste... des sentiments. À quel point il avait peur. Combien il souhaitait être différent. Il ne le savait pas encore, mais il venait de commencer le journal qui allait tout changer.

Au cours de la semaine suivante, Mathis a écrit dans le journal chaque soir. Lundi : « J'ai peur mais j'ai fredonné devant Alya aujourd'hui et elle a souri. » Mercredi : « J'ai chanté une ligne à voix haute dans la salle de musique vide. Ma voix a résonné contre les murs et ça sonnait... pas mal ? » Vendredi : « Madame Laurent m'a entendu m'entraîner et a dit que j'ai quelque chose de spécial. Je ne sais pas si je la crois encore. Mais peut-être que je veux y croire. »

Le spectacle de talents était dans trois jours. Mathis s'était inscrit — à peine. Sa main tremblait tellement quand il a écrit son nom que ça ressemblait à la signature d'un médecin. Il a relu le journal et a réalisé quelque chose : il devenait plus courageux chaque jour. Pas de grands sauts. De petits pas. Mais ils s'additionnaient. Madame Laurent lui a appris une technique : « Avant de monter sur scène, ferme les yeux et respire. Inspire pendant quatre temps, retiens quatre temps, expire quatre temps. La peur n'est que de l'énergie. Redirige-la. »

Le soir est arrivé. Mathis se tenait en coulisses, le cœur battant, les paumes moites. Il entendait la foule à travers le rideau. Trois cents personnes. Il a failli faire demi-tour. Puis il a sorti le journal de sa poche arrière et a lu la dernière chose qu'il avait écrite : « La confiance, ce n'est pas ne pas avoir peur. C'est avoir peur et le faire quand même. » Il a fermé les yeux. Il a respiré. Respirer. Inspirer, retenir, expirer. Le rideau s'est ouvert.

Il a marché jusqu'au microphone. La scène était lumineuse — aveuglante, presque. Il ne voyait pas les visages, seulement la lumière. Et d'une certaine façon, ça l'a aidé. Il a ouvert la bouche, et pour la première fois de sa vie, la voix est sortie forte, claire et vraie. Quand la dernière note s'est évanouie, il y a eu un moment de silence. Puis l'auditorium a explosé. Mathis se tenait là, les larmes coulant sur son visage, ressentant quelque chose qu'il n'avait jamais ressenti : fier. Il l'avait fait. Pas parfaitement. Mais il l'avait fait. Il s'était prouvé qu'il pouvait réussir — et ça valait plus que n'importe quel trophée.`
};

// ============================================================
// 🏔️ ADVENTURE — "L'Île Perdue" (The Lost Island)
// ============================================================
export const lIlePerdueEpisode: Episode = {
  id: "l-ile-perdue",
  title: "L'Île Perdue",
  description: "Twins Camille and Hugo follow their great-grandfather's treasure map to a mysterious island off the coast of Brittany",
  vocab: [
    { word: "l'île", pronunciation: "LEEL", english: "the island" },
    { word: "la carte", pronunciation: "lah KAHRT", english: "the map" },
    { word: "le trésor", pronunciation: "luh tray-ZOHR", english: "the treasure" },
    { word: "la forêt", pronunciation: "lah foh-RAY", english: "the forest" },
    { word: "le bateau", pronunciation: "luh bah-TOH", english: "the boat" },
    { word: "la grotte", pronunciation: "lah GROHT", english: "the cave" },
    { word: "chercher", pronunciation: "shehr-SHAY", english: "to search/look for" },
    { word: "dangereux", pronunciation: "dahn-zhuh-RUH", english: "dangerous" },
    { word: "l'aventure", pronunciation: "lah-vahn-TUHR", english: "the adventure" },
    { word: "la boussole", pronunciation: "lah boo-SOHL", english: "the compass" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Map",
      content: `Camille found **la carte** inside a hollowed-out book in their great-grandfather's study. It was hand-drawn on yellowed paper, with tiny ink illustrations of waves, rocks, and a skull-and-crossbones marked "X." Hugo nearly fell off his chair when she showed him. "Is this... a treasure map?" he whispered. "It shows **l'île** — the one off the coast near Grandpa's old fishing village. The one everyone says is cursed."

"It's not cursed," Camille said, rolling her eyes. "That's just what adults say to keep kids away." But even she felt a shiver looking at the map. Their great-grandfather had been a sailor his whole life. He'd explored every cove in Brittany. If he'd hidden something on that island, it was worth finding. They packed flashlights, rope, sandwiches, and their great-grandfather's old **la boussole** — a brass compass that still pointed true north after sixty years.

The next morning, they borrowed their uncle's small **le bateau** and set out across the grey Atlantic water. The island appeared through the mist like a dark green mountain rising from the sea. **L'aventure** had officially begun. Hugo grinned at his sister. "If we die, I'm blaming you." Camille grinned back. "If we die, we'll be the coolest ghosts in Brittany."`,
      translatedWords: [
        { word: "la carte", translation: "the map" },
        { word: "l'île", translation: "the island" },
        { word: "la boussole", translation: "the compass" },
        { word: "le bateau", translation: "the boat" },
        { word: "l'aventure", translation: "the adventure" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Cave",
      content: `They followed **la carte** inland, pushing through **la forêt** — thick, tangled, and dripping with moisture. Every sound made Hugo jump. "Relax," Camille whispered. "Animals are more scared of us." But she was gripping the compass so hard her knuckles were white. The map led them to a cliff face where vines covered a dark opening. **La grotte**. It was real.

Inside, the cave was vast and echoing. They clicked on their flashlights. Camille checked **la boussole**: the map said to **chercher** along the north wall. They searched for what felt like hours, running their fingers along cold stone, until Hugo's hand hit something hollow. A wooden box, sealed with wax, wedged into a crack in the rock. "This is it," he breathed. "**Le trésor**." They pried it open. Inside wasn't gold or jewels — it was a leather journal filled with their great-grandfather's handwriting, sketches of sea creatures, and pressed wildflowers from every island he'd ever visited. A lifetime of **l'aventure**, captured in ink.

Camille's eyes filled with tears. This was better than gold. Hugo carefully closed the box. The trip back across the water was quiet — the good kind of quiet. They had faced something **dangereux**, they'd solved the mystery, and they'd found something priceless. As they pulled **le bateau** onto shore, Hugo looked at his sister. "Same time next summer?" Camille held up **la carte**. "Grandpa drew more than one island on this thing." The next adventure was already waiting.`,
      translatedWords: [
        { word: "la carte", translation: "the map" },
        { word: "la forêt", translation: "the forest" },
        { word: "la grotte", translation: "the cave" },
        { word: "la boussole", translation: "the compass" },
        { word: "chercher", translation: "to search/look for" },
        { word: "le trésor", translation: "the treasure" },
        { word: "l'aventure", translation: "the adventure" },
        { word: "dangereux", translation: "dangerous" },
        { word: "le bateau", translation: "the boat" }
      ]
    }
  ],
  quiz: [
    {
      id: "fb1",
      type: "fill-blank",
      question: "Camille found ______ inside a hollowed-out book in their great-grandfather's study.",
      answer: "la carte"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "They borrowed their uncle's small ______ and set out across the grey Atlantic water.",
      answer: "le bateau"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "The map said to ______ along the north wall.",
      answer: "chercher"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "A wooden box sealed with wax — this is it, ______.",
      answer: "le trésor"
    },
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'l'île' mean?",
      answer: "the island",
      options: ["the aisle", "the island", "the oil", "the ice"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'la forêt' mean?",
      answer: "the forest",
      options: ["the fortress", "the forest", "the fork", "the force"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'dangereux' mean?",
      answer: "dangerous",
      options: ["dangerous", "dancing", "dark", "daring"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'la grotte' mean?",
      answer: "the cave",
      options: ["the ground", "the grove", "the cave", "the grave"]
    },
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'la boussole'",
      answer: "the compass"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'the adventure'",
      answer: "l'aventure"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'chercher'",
      answer: "to search/look for"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the treasure'",
      answer: "le trésor"
    }
  ],
  fullTargetLanguageStory: `Camille a trouvé la carte à l'intérieur d'un livre évidé dans le bureau de leur arrière-grand-père. Elle était dessinée à la main sur du papier jauni, avec de petites illustrations à l'encre de vagues, de rochers, et une tête de mort marquée « X ». Hugo a failli tomber de sa chaise quand elle la lui a montrée. « C'est... une carte au trésor ? » a-t-il murmuré. « Elle montre l'île — celle au large de la côte près de l'ancien village de pêcheurs de grand-père. Celle que tout le monde dit maudite. »

« Elle n'est pas maudite, » a dit Camille en levant les yeux au ciel. « C'est juste ce que les adultes disent pour éloigner les enfants. » Mais même elle a frissonné en regardant la carte. Leur arrière-grand-père avait été marin toute sa vie. Il avait exploré chaque crique de Bretagne. S'il avait caché quelque chose sur cette île, ça valait la peine de le trouver. Ils ont emballé des lampes de poche, de la corde, des sandwichs, et la vieille boussole en laiton de leur arrière-grand-père — qui pointait encore le vrai nord après soixante ans.

Le lendemain matin, ils ont emprunté le petit bateau de leur oncle et sont partis à travers les eaux grises de l'Atlantique. L'île est apparue à travers la brume comme une montagne vert foncé s'élevant de la mer. L'aventure avait officiellement commencé. Hugo a souri à sa sœur. « Si on meurt, c'est ta faute. » Camille a souri en retour. « Si on meurt, on sera les fantômes les plus cool de Bretagne. »

Ils ont suivi la carte à l'intérieur des terres, se frayant un chemin à travers la forêt — épaisse, emmêlée et dégoulinante d'humidité. Chaque bruit faisait sursauter Hugo. « Détends-toi, » a murmuré Camille. « Les animaux ont plus peur de nous. » Mais elle serrait la boussole si fort que ses jointures étaient blanches. La carte les a menés au pied d'une falaise où des lianes couvraient une ouverture sombre. La grotte. Elle était réelle.

À l'intérieur, la grotte était vaste et résonnante. Ils ont allumé leurs lampes de poche. Camille a vérifié la boussole : la carte disait de chercher le long du mur nord. Ils ont cherché pendant ce qui semblait être des heures, passant leurs doigts le long de la pierre froide, jusqu'à ce que la main de Hugo touche quelque chose de creux. Une boîte en bois, scellée à la cire, coincée dans une fissure de la roche. « C'est ça, » a-t-il soufflé. « Le trésor. » Ils l'ont ouverte. À l'intérieur, il n'y avait ni or ni bijoux — c'était un journal en cuir rempli de l'écriture de leur arrière-grand-père, de croquis de créatures marines, et de fleurs sauvages pressées de chaque île qu'il avait visitée. Toute une vie d'aventure, capturée à l'encre.

Les yeux de Camille se sont remplis de larmes. C'était mieux que de l'or. Hugo a soigneusement refermé la boîte. Le voyage retour à travers l'eau était silencieux — le bon genre de silence. Ils avaient affronté quelque chose de dangereux, ils avaient résolu le mystère, et ils avaient trouvé quelque chose d'inestimable. En tirant le bateau sur le rivage, Hugo a regardé sa sœur. « Même heure l'été prochain ? » Camille a brandi la carte. « Grand-père a dessiné plus d'une île là-dessus. » La prochaine aventure les attendait déjà.`
};

// ============================================================
// 🔍 MYSTERY — "Le Fantôme du Château" (The Ghost of the Castle)
// ============================================================
export const leFantomeDuChateauEpisode: Episode = {
  id: "le-fantome-du-chateau",
  title: "Le Fantôme du Château",
  description: "During a school trip to an old château, Inès must solve a centuries-old mystery when valuable objects start disappearing",
  vocab: [
    { word: "le fantôme", pronunciation: "luh fahn-TOHM", english: "the ghost" },
    { word: "le château", pronunciation: "luh shah-TOH", english: "the castle" },
    { word: "l'indice", pronunciation: "lahn-DEES", english: "the clue" },
    { word: "disparaître", pronunciation: "dees-pah-REH-truh", english: "to disappear" },
    { word: "le secret", pronunciation: "luh suh-KREH", english: "the secret" },
    { word: "le suspect", pronunciation: "luh soos-PEH", english: "the suspect" },
    { word: "enquêter", pronunciation: "ahn-keh-TAY", english: "to investigate" },
    { word: "la porte", pronunciation: "lah POHRT", english: "the door" },
    { word: "le mystère", pronunciation: "luh mees-TEHR", english: "the mystery" },
    { word: "la vérité", pronunciation: "lah vay-ree-TAY", english: "the truth" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Disappearances",
      content: `The school bus pulled up to **le château** just as storm clouds rolled in — because of course it did. The Château de Valombre was five hundred years old, with crumbling towers and ivy crawling up every wall. "Creepy," muttered Inès's classmate, Théo. "Beautiful," Inès corrected, already pulling out her notebook. She loved mysteries, and this place looked like it was hiding a thousand of them.

By lunchtime, the first thing vanished: a silver candlestick from the main hall. The tour guide went pale. "That's been here since 1743," she stammered. By dinner, a jeweled letter opener had also seemed to **disparaître** from the library. Whispers spread through the group like wildfire. "It's **le fantôme**," Théo announced dramatically. "The ghost of the Count who built this place." Half the class believed him. Inès did not.

"Ghosts don't steal silverware," she told her best friend Noémie. "Someone real is doing this." She opened her notebook to a fresh page and wrote: **Le mystère** — who is taking the château's treasures? She had forty-eight hours before the bus took them home. That was enough time to **enquêter** — if she was smart about it.`,
      translatedWords: [
        { word: "le château", translation: "the castle" },
        { word: "disparaître", translation: "to disappear" },
        { word: "le fantôme", translation: "the ghost" },
        { word: "le mystère", translation: "the mystery" },
        { word: "enquêter", translation: "to investigate" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Truth",
      content: `Inès started with the clues. **L'indice** number one: both objects disappeared from rooms with back exits. **L'indice** number two: the tour guide always seemed to be somewhere else when things went missing. **L'indice** number three: Inès had noticed muddy boot prints leading to a **la porte** in the cellar — a door that was supposedly locked. She made a list of every **le suspect**: the tour guide, the groundskeeper, even Théo, who was suspiciously enthusiastic about the "ghost" theory.

That night, while everyone slept, Inès crept down to the cellar with a flashlight. **La porte** was ajar. Behind it: a narrow stone passage that led outside. And there, stacked in a canvas bag, were the missing treasures — plus three more items the staff hadn't noticed were gone yet. Footprints in the mud matched the groundskeeper's boots. He'd been smuggling artifacts out through the old servants' tunnel — a **le secret** passage that hadn't been on any tour map.

Inès brought **la vérité** to the tour guide the next morning, evidence and all. The police arrived within the hour. The groundskeeper confessed — he'd been selling pieces online for months. The château director shook Inès's hand. "You solved a **le mystère** that we didn't even know we had." On the bus home, Théo slid into the seat next to her. "Okay, detective. That was actually incredible." Inès smiled and opened her notebook. There was always another mystery waiting.`,
      translatedWords: [
        { word: "l'indice", translation: "the clue" },
        { word: "la porte", translation: "the door" },
        { word: "le suspect", translation: "the suspect" },
        { word: "le secret", translation: "the secret" },
        { word: "la vérité", translation: "the truth" },
        { word: "le mystère", translation: "the mystery" }
      ]
    }
  ],
  quiz: [
    {
      id: "fb1",
      type: "fill-blank",
      question: "The school bus pulled up to ______ just as storm clouds rolled in.",
      answer: "le château"
    },
    {
      id: "fb2",
      type: "fill-blank",
      question: "A jeweled letter opener had also seemed to ______ from the library.",
      answer: "disparaître"
    },
    {
      id: "fb3",
      type: "fill-blank",
      question: "She had forty-eight hours to ______ — if she was smart about it.",
      answer: "enquêter"
    },
    {
      id: "fb4",
      type: "fill-blank",
      question: "Inès brought ______ to the tour guide the next morning, evidence and all.",
      answer: "la vérité"
    },
    {
      id: "mc1",
      type: "multiple-choice",
      question: "What does 'le fantôme' mean?",
      answer: "the ghost",
      options: ["the phantom", "the ghost", "the fantasy", "the fan"]
    },
    {
      id: "mc2",
      type: "multiple-choice",
      question: "What does 'l'indice' mean?",
      answer: "the clue",
      options: ["the index", "the indication", "the clue", "the inside"]
    },
    {
      id: "mc3",
      type: "multiple-choice",
      question: "What does 'le secret' mean?",
      answer: "the secret",
      options: ["the secretary", "the section", "the secret", "the security"]
    },
    {
      id: "mc4",
      type: "multiple-choice",
      question: "What does 'disparaître' mean?",
      answer: "to disappear",
      options: ["to display", "to disappear", "to disagree", "to discover"]
    },
    {
      id: "tr1",
      type: "translate",
      question: "Translate to English: 'la porte'",
      answer: "the door"
    },
    {
      id: "tr2",
      type: "translate",
      question: "Translate to French: 'the mystery'",
      answer: "le mystère"
    },
    {
      id: "tr3",
      type: "translate",
      question: "Translate to English: 'enquêter'",
      answer: "to investigate"
    },
    {
      id: "tr4",
      type: "translate",
      question: "Translate to French: 'the castle'",
      answer: "le château"
    }
  ],
  fullTargetLanguageStory: `Le bus scolaire s'est arrêté devant le château juste au moment où les nuages d'orage arrivaient — évidemment. Le Château de Valombre avait cinq cents ans, avec des tours croulantes et du lierre grimpant sur chaque mur. « Flippant, » a marmonné Théo, le camarade de classe d'Inès. « Magnifique, » a corrigé Inès, sortant déjà son carnet. Elle adorait les mystères, et cet endroit avait l'air d'en cacher un millier.

À l'heure du déjeuner, la première chose a disparu : un chandelier en argent de la grande salle. La guide est devenue pâle. « Il est ici depuis 1743, » a-t-elle balbutié. Au dîner, un coupe-papier orné de bijoux avait aussi semblé disparaître de la bibliothèque. Les murmures se sont répandus dans le groupe comme une traînée de poudre. « C'est le fantôme, » a annoncé Théo dramatiquement. « Le fantôme du Comte qui a construit cet endroit. » La moitié de la classe l'a cru. Inès, non.

« Les fantômes ne volent pas l'argenterie, » a-t-elle dit à sa meilleure amie Noémie. « Quelqu'un de réel fait ça. » Elle a ouvert son carnet à une page vierge et a écrit : le mystère — qui prend les trésors du château ? Elle avait quarante-huit heures avant que le bus ne les ramène. C'était assez de temps pour enquêter — si elle était intelligente.

Inès a commencé par les indices. L'indice numéro un : les deux objets avaient disparu de pièces ayant des sorties arrière. L'indice numéro deux : la guide semblait toujours être ailleurs quand les choses disparaissaient. L'indice numéro trois : Inès avait remarqué des traces de bottes boueuses menant à une porte dans la cave — une porte supposément verrouillée. Elle a fait une liste de chaque suspect : la guide, le gardien, et même Théo, qui était étrangement enthousiaste à propos de la théorie du « fantôme ».

Cette nuit-là, pendant que tout le monde dormait, Inès s'est glissée dans la cave avec une lampe de poche. La porte était entrouverte. Derrière : un passage étroit en pierre qui menait dehors. Et là, empilés dans un sac en toile, se trouvaient les trésors disparus — plus trois autres objets dont le personnel n'avait pas encore remarqué la disparition. Les empreintes dans la boue correspondaient aux bottes du gardien. Il faisait sortir des objets en contrebande par l'ancien passage des domestiques — un passage secret qui ne figurait sur aucune visite guidée.

Inès a apporté la vérité à la guide le lendemain matin, preuves à l'appui. La police est arrivée dans l'heure. Le gardien a avoué — il vendait des pièces en ligne depuis des mois. Le directeur du château a serré la main d'Inès. « Tu as résolu un mystère que nous ne savions même pas que nous avions. » Dans le bus du retour, Théo s'est glissé sur le siège à côté d'elle. « D'accord, détective. C'était vraiment incroyable. » Inès a souri et a ouvert son carnet. Il y avait toujours un autre mystère qui attendait.`
};

// ============================================================
// SERIES DEFINITIONS
// ============================================================

export const sportsSeriesFrench: Series = {
  id: 'le-match',
  title: 'Le Match',
  description: 'A basketball championship story about courage and teamwork',
  category: 'sports',
  language: 'french' as any,
  episodes: [leMatchEpisode]
};

export const techSeriesFrench: Series = {
  id: 'le-programme',
  title: 'Le Programme',
  description: 'A hackathon adventure building a recycling robot',
  category: 'tech',
  language: 'french' as any,
  episodes: [leProgrammeEpisode]
};

export const futureSeriesFrench: Series = {
  id: 'la-ville-de-demain',
  title: 'La Ville de Demain',
  description: 'A futuristic adventure in Néo-Lyon, 2089',
  category: 'future',
  language: 'french' as any,
  episodes: [laVilleDeDemainEpisode]
};

export const creativeSeriesFrench: Series = {
  id: 'le-chef-doeuvre',
  title: "Le Chef-d'œuvre",
  description: 'A street artist finds their voice in Paris',
  category: 'creative',
  language: 'french' as any,
  episodes: [leChefDoeuvreEpisode]
};

export const historySeriesFrench: Series = {
  id: 'la-revolution',
  title: 'La Révolution',
  description: 'A boy time-travels to 1789 Paris and witnesses the French Revolution firsthand',
  category: 'history',
  language: 'french' as any,
  episodes: [laRevolutionEpisode]
};

export const scienceSeriesFrench: Series = {
  id: 'l-experience',
  title: "L'Expérience",
  description: 'A science-loving girl uncovers the mystery behind a fast-growing plant using the scientific method',
  category: 'science',
  language: 'french' as any,
  episodes: [lExperienceEpisode]
};

export const selfHelpSeriesFrench: Series = {
  id: 'le-journal-de-courage',
  title: 'Le Journal de Courage',
  description: 'A shy boy discovers his voice and conquers stage fright through journaling',
  category: 'self-help',
  language: 'french' as any,
  episodes: [leJournalDeCourageEpisode]
};

export const adventureSeriesFrench: Series = {
  id: 'l-ile-perdue',
  title: "L'Île Perdue",
  description: 'Twins follow a treasure map to a mysterious island off the coast of Brittany',
  category: 'adventure',
  language: 'french' as any,
  episodes: [lIlePerdueEpisode]
};

export const mysterySeriesFrench: Series = {
  id: 'le-fantome-du-chateau',
  title: 'Le Fantôme du Château',
  description: 'A young detective solves a theft mystery during a school trip to an old château',
  category: 'mystery',
  language: 'french' as any,
  episodes: [leFantomeDuChateauEpisode]
};

// Export all French episodes
export const frenchEpisodes = [
  leMatchEpisode,
  leProgrammeEpisode,
  laVilleDeDemainEpisode,
  leChefDoeuvreEpisode,
  laRevolutionEpisode,
  lExperienceEpisode,
  leJournalDeCourageEpisode,
  lIlePerdueEpisode,
  leFantomeDuChateauEpisode
];

// Combined export
export const allNewFrenchSeries: Series[] = [
  sportsSeriesFrench,
  techSeriesFrench,
  futureSeriesFrench,
  creativeSeriesFrench,
  historySeriesFrench,
  scienceSeriesFrench,
  selfHelpSeriesFrench,
  adventureSeriesFrench,
  mysterySeriesFrench
];


