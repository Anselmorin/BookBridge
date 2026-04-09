import type { Episode, Series } from './data';

// ============================================================
// 🏀 SPORTS — "Saigo no Shiai" (The Final Game)
// ============================================================

export const saigoNoShiaiEpisode: Episode = {
  id: 'jp-sports-saigo-no-shiai',
  title: 'Saigo no Shiai (The Final Game)',
  description: 'A young basketball player in Tokyo faces the biggest game of his life. Will teamwork and determination be enough to win the championship?',
  vocab: [
    { word: 'shiai', pronunciation: 'shi-ai', english: 'game/match' },
    { word: 'katsu', pronunciation: 'ka-tsu', english: 'to win' },
    { word: 'chiimu', pronunciation: 'chii-mu', english: 'team' },
    { word: 'renshuu', pronunciation: 'ren-shuu', english: 'practice' },
    { word: 'tsuyoi', pronunciation: 'tsu-yoi', english: 'strong' },
    { word: 'hayai', pronunciation: 'ha-yai', english: 'fast' },
    { word: 'booru', pronunciation: 'boo-ru', english: 'ball' },
    { word: 'ganbaru', pronunciation: 'gan-ba-ru', english: 'to do one\'s best' },
    { word: 'tomodachi', pronunciation: 'to-mo-da-chi', english: 'friend' },
    { word: 'yume', pronunciation: 'yu-me', english: 'dream' },
  ],
  sections: [
    {
      id: 'jp-sports-s1',
      title: 'Part 1: The Morning of the Big Game',
      content: `Kenji woke up before his alarm. Today was the day of the **shiai** — the final championship game. His **chiimu** had been doing **renshuu** every single day after school for three months straight. 

He grabbed his favorite **booru** from the shelf and spun it on his finger. It was worn out from all the dribbling drills, but it felt like a lucky charm.

"You better eat breakfast!" his mom called from the kitchen. "You can't **katsu** on an empty stomach!"

Kenji laughed. His mom always knew exactly what to say. He scarfed down some rice and miso soup, then grabbed his jersey — number seven, his lucky number.

On the train to the gym in Shibuya, he texted his best **tomodachi**, Haru: "Today we make our **yume** come true."

Haru replied instantly: "**Ganbaru**! Let's give it everything we've got! 🏀"`,
      translatedWords: [
        { word: 'shiai', translation: 'game/match' },
        { word: 'chiimu', translation: 'team' },
        { word: 'renshuu', translation: 'practice' },
        { word: 'booru', translation: 'ball' },
        { word: 'katsu', translation: 'to win' },
        { word: 'tomodachi', translation: 'friend' },
        { word: 'yume', translation: 'dream' },
        { word: 'ganbaru', translation: 'to do one\'s best' },
      ],
    },
    {
      id: 'jp-sports-s2',
      title: 'Part 2: The Battle on the Court',
      content: `The gym was packed. Kenji could feel the energy buzzing through the crowd as both teams warmed up. The opposing team from Osaka looked **tsuyoi** — really strong. Their tallest player was almost six feet, and their point guard was crazy **hayai**.

The whistle blew. The **shiai** was on.

First quarter: Osaka scored fast. They moved the **booru** like a blur, weaving through Kenji's **chiimu** like it was nothing. By halftime, they were down by twelve points.

In the locker room, everyone was quiet. Coach Tanaka looked at them and said one word: "**Ganbaru.**"

That was it. No big speech. Just that one word — do your best.

Kenji looked at Haru. Haru looked back and nodded. They didn't need words. They'd done the **renshuu**. They were ready.

Third quarter, Kenji caught fire. He drove past two defenders — **hayai**, so fast they couldn't keep up — and slammed in a layup. The crowd exploded. His **tomodachi** on the bench went wild.

The gap was closing. Ten points. Then eight. Then five.`,
      translatedWords: [
        { word: 'tsuyoi', translation: 'strong' },
        { word: 'hayai', translation: 'fast' },
        { word: 'shiai', translation: 'game/match' },
        { word: 'booru', translation: 'ball' },
        { word: 'chiimu', translation: 'team' },
        { word: 'ganbaru', translation: 'to do one\'s best' },
        { word: 'renshuu', translation: 'practice' },
        { word: 'tomodachi', translation: 'friend' },
      ],
    },
    {
      id: 'jp-sports-s3',
      title: 'Part 3: The Final Buzzer',
      content: `Fourth quarter. Thirty seconds left. Tied game.

Kenji's heart was pounding so loud he thought the whole gym could hear it. Osaka had the **booru**. Their point guard — the **hayai** one — dribbled toward the basket.

But Haru was there. Haru, his best **tomodachi**, who had done every single **renshuu** session without complaining. Haru stole the ball clean and whipped a pass down the court to Kenji.

Fifteen seconds.

Kenji caught it at half court and drove forward. Two defenders blocked his path. For a split second, everything went quiet. He remembered what Coach Tanaka always said: "A **tsuyoi** player doesn't just play alone. A strong player trusts his **chiimu**."

Kenji faked left, then passed to Haru cutting along the baseline. Haru caught it, jumped, and released the shot.

The buzzer screamed.

The ball dropped through the net with a perfect swish.

They won. They actually won the **shiai**.

The whole **chiimu** piled on top of each other, screaming and laughing. Kenji found Haru in the pile and yelled over the noise: "We did it! Our **yume** — it's real!"

Haru grinned. "We didn't just **katsu**. We did it together. That's what **ganbaru** really means."`,
      translatedWords: [
        { word: 'booru', translation: 'ball' },
        { word: 'hayai', translation: 'fast' },
        { word: 'tomodachi', translation: 'friend' },
        { word: 'renshuu', translation: 'practice' },
        { word: 'tsuyoi', translation: 'strong' },
        { word: 'chiimu', translation: 'team' },
        { word: 'shiai', translation: 'game/match' },
        { word: 'yume', translation: 'dream' },
        { word: 'katsu', translation: 'to win' },
        { word: 'ganbaru', translation: 'to do one\'s best' },
      ],
    },
  ],
  fullTargetLanguageStory: `Kenji wa asa hayaku me ga samemashita. Kyou wa saigo no shiai no hi desu. Kare no chiimu wa mainichi renshuu shite imashita.

Kare wa booru wo te ni totte, yubi de mawashimashita. "Choushoku wo tabete!" to okaasan ga yobimashita. "Onaka ga suite wa katsu koto ga dekinai yo!"

Kenji wa warai, gohan to misoshiru wo tabemashita. Densha no naka de, ichiban no tomodachi no Haru ni messeeji wo okurimashita: "Kyou, bokutachi no yume wo kanaeyou."

Haru wa sugu ni henji shimashita: "Ganbaru! Zenryoku wo tsukusou!"

Taiikukan wa hito de ippai deshita. Aite no chiimu wa tsuyoi. Saishono kuootaa de Oosaka wa hayai shiai wo shimashita. Haafu taimu de juuni ten no sa ga arimashita.

Rokkaa ruumu de, Tanaka kantoku wa hitokoto dake iimashita: "Ganbaru."

Daisan kuootaa, Kenji wa hayai doribu de reiappu wo kimemashita. Kankyaku wa moriage, benchi no tomodachi wa yorokobimashita. Ten sa wa chijimarimashita.

Saigo no sanjuu byou. Douten. Oosaka ga booru wo motte imashita. Haru ga booru wo ubai, Kenji ni pasu shimashita.

Kenji wa tsuyoi chiimu wo shinjite, Haru ni pasu shimashita. Haru wa janpu shite shuuto wo hanachimashita.

Buzaa ga narimashita. Booru wa netto wo tootta.

Karera wa shiai ni kachimashita! Chiimu wa yorokobi, Kenji wa Haru ni sakebi mashita: "Yatta! Bokutachi no yume ga kanatta!"

Haru wa hohoende iimashita: "Tada katsu dake ja nai. Issho ni ganbaru — sore ga hontou no imi da."`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-sports-q1',
      type: 'fill-blank',
      question: 'Kenji\'s team did _______ every day after school for three months.',
      answer: 'renshuu',
    },
    {
      id: 'jp-sports-q2',
      type: 'fill-blank',
      question: 'The Osaka team looked really _______ (strong).',
      answer: 'tsuyoi',
    },
    {
      id: 'jp-sports-q3',
      type: 'fill-blank',
      question: 'Haru was Kenji\'s best _______ (friend).',
      answer: 'tomodachi',
    },
    {
      id: 'jp-sports-q4',
      type: 'fill-blank',
      question: 'Coach Tanaka said one word in the locker room: "_______."',
      answer: 'ganbaru',
    },
    // Multiple-choice (4)
    {
      id: 'jp-sports-q5',
      type: 'multiple-choice',
      question: 'What does "shiai" mean?',
      answer: 'game/match',
      options: ['practice', 'game/match', 'ball', 'dream'],
    },
    {
      id: 'jp-sports-q6',
      type: 'multiple-choice',
      question: 'What does "katsu" mean?',
      answer: 'to win',
      options: ['to lose', 'to run', 'to win', 'to jump'],
    },
    {
      id: 'jp-sports-q7',
      type: 'multiple-choice',
      question: 'What does "hayai" mean?',
      answer: 'fast',
      options: ['slow', 'tall', 'fast', 'strong'],
    },
    {
      id: 'jp-sports-q8',
      type: 'multiple-choice',
      question: 'What does "booru" mean?',
      answer: 'ball',
      options: ['hoop', 'court', 'shoe', 'ball'],
    },
    // Translate (4)
    {
      id: 'jp-sports-q9',
      type: 'translate',
      question: 'Translate to English: "yume"',
      answer: 'dream',
    },
    {
      id: 'jp-sports-q10',
      type: 'translate',
      question: 'Translate to English: "chiimu"',
      answer: 'team',
    },
    {
      id: 'jp-sports-q11',
      type: 'translate',
      question: 'How do you say "to do one\'s best" in Japanese romaji?',
      answer: 'ganbaru',
    },
    {
      id: 'jp-sports-q12',
      type: 'translate',
      question: 'How do you say "practice" in Japanese romaji?',
      answer: 'renshuu',
    },
  ],
};

export const sportsSeries: Series = {
  id: 'jp-sports-series',
  title: 'Tokyo Court Stories',
  description: 'High-energy sports stories set in Tokyo — feel the thrill of competition and the power of teamwork!',
  category: 'sports',
  language: 'japanese' as any,
  episodes: [saigoNoShiaiEpisode],
};

// ============================================================
// 💻 TECH — "Robotto no Yume" (The Robot's Dream)
// ============================================================

export const robottoNoYumeEpisode: Episode = {
  id: 'jp-tech-robotto-no-yume',
  title: 'Robotto no Yume (The Robot\'s Dream)',
  description: 'A kid named Sora builds a robot for a school competition — but the robot starts doing things nobody expected.',
  vocab: [
    { word: 'robotto', pronunciation: 'ro-bot-to', english: 'robot' },
    { word: 'tsukuru', pronunciation: 'tsu-ku-ru', english: 'to make/build' },
    { word: 'gakkou', pronunciation: 'gak-kou', english: 'school' },
    { word: 'sugoi', pronunciation: 'su-goi', english: 'amazing/awesome' },
    { word: 'kangaeru', pronunciation: 'kan-ga-e-ru', english: 'to think' },
    { word: 'denki', pronunciation: 'den-ki', english: 'electricity' },
    { word: 'kotae', pronunciation: 'ko-ta-e', english: 'answer' },
    { word: 'sensei', pronunciation: 'sen-sei', english: 'teacher' },
    { word: 'hataraku', pronunciation: 'ha-ta-ra-ku', english: 'to work/function' },
    { word: 'mirai', pronunciation: 'mi-rai', english: 'future' },
  ],
  sections: [
    {
      id: 'jp-tech-s1',
      title: 'Part 1: Building in the Garage',
      content: `Sora had exactly one week to **tsukuru** a robot for the **gakkou** science competition, and right now, her garage looked like a tech store had exploded.

Wires everywhere. Circuit boards stacked like pancakes. A soldering iron that was definitely too hot. And in the middle of it all: a half-built **robotto** that looked like a metal puppy with one ear.

"This is either going to be **sugoi** or a complete disaster," Sora muttered, twisting two wires together.

Her **sensei**, Mr. Yamamoto, had told the class: "Build something that solves a real problem." Most kids were building simple things — a plant-watering machine, a homework reminder alarm. Boring stuff.

Sora wanted to build a robot that could **kangaeru** — actually think. Well, sort of. She was programming it with a basic AI that could recognize voices and respond to questions.

She connected the **denki** supply and flipped the switch. The robot's eyes — two blue LEDs — flickered on.

"Hello?" Sora said.

The robot tilted its head. Then, in a tiny speaker voice: "...Hello?"

Sora's jaw dropped. It was actually starting to **hataraku**!`,
      translatedWords: [
        { word: 'tsukuru', translation: 'to make/build' },
        { word: 'gakkou', translation: 'school' },
        { word: 'robotto', translation: 'robot' },
        { word: 'sugoi', translation: 'amazing/awesome' },
        { word: 'sensei', translation: 'teacher' },
        { word: 'kangaeru', translation: 'to think' },
        { word: 'denki', translation: 'electricity' },
        { word: 'hataraku', translation: 'to work/function' },
      ],
    },
    {
      id: 'jp-tech-s2',
      title: 'Part 2: Something Unexpected',
      content: `Over the next few days, Sora kept programming and testing. She named the **robotto** "Hikari" — meaning light — because of its glowing blue eyes.

Hikari was getting smarter. At first, it could only repeat words. Then it started giving simple **kotae** to questions:

"Hikari, what's two plus two?"
"...Four."

"Hikari, what's the weather like?"
"...I am inside. I do not know."

Sora laughed. Fair enough.

But then something weird happened. On Wednesday night, Sora was working late. She was tired, frustrated — the movement sensors weren't calibrating right and she was ready to quit.

"This is impossible," she groaned. "Nothing is going to **hataraku**."

Hikari's eyes flickered. Then, unprompted, the little **robotto** spoke: "Do not give up. You are **sugoi**."

Sora stared. She hadn't programmed that response. Hikari had pieced together words from their conversations and formed its own sentence.

"Did you just... **kangaeru** that by yourself?" she whispered.

Hikari tilted its head. "I am learning."

Sora sat back in her chair. This wasn't just a **gakkou** project anymore. This was something way bigger. She looked at Hikari and thought: is this what the **mirai** looks like?`,
      translatedWords: [
        { word: 'robotto', translation: 'robot' },
        { word: 'kotae', translation: 'answer' },
        { word: 'hataraku', translation: 'to work/function' },
        { word: 'sugoi', translation: 'amazing/awesome' },
        { word: 'kangaeru', translation: 'to think' },
        { word: 'gakkou', translation: 'school' },
        { word: 'mirai', translation: 'future' },
      ],
    },
    {
      id: 'jp-tech-s3',
      title: 'Part 3: Competition Day',
      content: `The **gakkou** gym was transformed into a science fair. Tables lined up everywhere, each with a student's project. Plant waterers, alarm clocks, a really impressive calculator made from cardboard.

Then there was Hikari.

Sora set the **robotto** on the table and connected the **denki**. Hikari's blue eyes blinked to life, and immediately, a crowd formed.

"Ask it anything," Sora said nervously.

A kid from another class stepped up: "What's the capital of Japan?"

Hikari responded: "Tokyo. That is where we are right now."

The crowd went nuts. "**Sugoi**!" someone yelled.

Then **sensei** Yamamoto walked over. He studied Hikari carefully, then asked: "Hikari, what is the purpose of science?"

Everyone went quiet. That wasn't a simple **kotae** question.

Hikari paused. Its LEDs pulsed as it processed. Then: "To **tsukuru** a better **mirai**. To build a better future."

Mr. Yamamoto's eyebrows shot up. He looked at Sora. "Did you program that answer?"

"No," Sora said honestly. "Hikari learned to **kangaeru** on its own."

The gym erupted. Sora won first place — obviously — but that wasn't even the best part.

Walking home, Hikari sitting in her backpack with its eyes glowing through the zipper, Sora smiled. She hadn't just built a **robotto** that could **hataraku**. She'd built something that could dream about the **mirai**.

And that was way more **sugoi** than any trophy.`,
      translatedWords: [
        { word: 'gakkou', translation: 'school' },
        { word: 'robotto', translation: 'robot' },
        { word: 'denki', translation: 'electricity' },
        { word: 'sugoi', translation: 'amazing/awesome' },
        { word: 'sensei', translation: 'teacher' },
        { word: 'kotae', translation: 'answer' },
        { word: 'tsukuru', translation: 'to make/build' },
        { word: 'mirai', translation: 'future' },
        { word: 'kangaeru', translation: 'to think' },
        { word: 'hataraku', translation: 'to work/function' },
      ],
    },
  ],
  fullTargetLanguageStory: `Sora wa isshukan de gakkou no kagaku konkursu no tame ni robotto wo tsukuru hitsuyou ga arimashita. Kare no gareji wa senden ya kairo boodo de ippai deshita.

"Kore wa sugoi ka, kanzen na shippai ka da," to Sora wa tsubuyakimashita.

Sensei no Yamamoto-san wa kurasu ni iimashita: "Hontou no mondai wo kaiketsu suru mono wo tsukutte kudasai." Sora wa kangaeru koto ga dekiru robotto wo tsukuritakatta desu.

Denki wo tsunagete suicchi wo iremashita. Robotto no me — futatsu no aoi LED — ga pikapika shimashita.

"Konnichiwa?" to Sora wa iimashita.

Robotto wa atama wo katamukemashita. "...Konnichiwa?"

Robotto wa hataraku you ni narimashita!

Sora wa robotto ni "Hikari" to namae wo tsukemashita. Hikari wa dandan kashikoku narimashita. Saisho wa kotoba wo kurikaeshi, soshite kantan na kotae wo dashimashita.

Aru yoru, Sora wa tsukare, akirameyou to shimashita. "Nani mo hataraku wake ga nai."

Hikari no me ga hikarimashita. "Akiramenaide. Anata wa sugoi desu."

Sora wa odorokimashita. Hikari wa jibun de kangaeru koto wo manabimashita.

"Kore wa mirai nano?" to Sora wa omoimashita.

Gakkou no taiikukan wa kagaku feaa ni narimashita. Sora wa robotto wo teiburu ni setto shimashita. Hikari no aoi me ga kagayakimashita.

"Nihon no shuto wa doko desu ka?" to aru seito ga kikimashita.

"Toukyou desu. Ima bokutachi ga iru basho desu," to Hikari wa kotaemashita.

"Sugoi!" to dareka ga sakebimashita.

Sensei Yamamoto ga tazunemashita: "Kagaku no mokuteki wa nan desu ka?"

Hikari wa kotaemashita: "Yori yoi mirai wo tsukuru koto desu."

Sora wa yushou shimashita. Demo ichiban yoi koto wa, Sora ga tada hataraku dake no robotto de wa naku, mirai ni tsuite kangaeru koto ga dekiru robotto wo tsukutta koto deshita.

Sore wa dono torofii yori mo sugoi koto deshita.`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-tech-q1',
      type: 'fill-blank',
      question: 'Sora needed to _______ (build) a robot for the school competition.',
      answer: 'tsukuru',
    },
    {
      id: 'jp-tech-q2',
      type: 'fill-blank',
      question: 'Sora connected the _______ (electricity) and flipped the switch.',
      answer: 'denki',
    },
    {
      id: 'jp-tech-q3',
      type: 'fill-blank',
      question: 'Hikari learned to _______ (think) on its own.',
      answer: 'kangaeru',
    },
    {
      id: 'jp-tech-q4',
      type: 'fill-blank',
      question: '"The purpose of science is to build a better _______." (future)',
      answer: 'mirai',
    },
    // Multiple-choice (4)
    {
      id: 'jp-tech-q5',
      type: 'multiple-choice',
      question: 'What does "robotto" mean?',
      answer: 'robot',
      options: ['rocket', 'robot', 'computer', 'remote'],
    },
    {
      id: 'jp-tech-q6',
      type: 'multiple-choice',
      question: 'What does "sugoi" mean?',
      answer: 'amazing/awesome',
      options: ['scary', 'boring', 'amazing/awesome', 'small'],
    },
    {
      id: 'jp-tech-q7',
      type: 'multiple-choice',
      question: 'What does "sensei" mean?',
      answer: 'teacher',
      options: ['student', 'teacher', 'scientist', 'friend'],
    },
    {
      id: 'jp-tech-q8',
      type: 'multiple-choice',
      question: 'What does "hataraku" mean?',
      answer: 'to work/function',
      options: ['to break', 'to work/function', 'to sleep', 'to eat'],
    },
    // Translate (4)
    {
      id: 'jp-tech-q9',
      type: 'translate',
      question: 'Translate to English: "gakkou"',
      answer: 'school',
    },
    {
      id: 'jp-tech-q10',
      type: 'translate',
      question: 'Translate to English: "kotae"',
      answer: 'answer',
    },
    {
      id: 'jp-tech-q11',
      type: 'translate',
      question: 'How do you say "to make/build" in Japanese romaji?',
      answer: 'tsukuru',
    },
    {
      id: 'jp-tech-q12',
      type: 'translate',
      question: 'How do you say "future" in Japanese romaji?',
      answer: 'mirai',
    },
  ],
};

export const techSeries: Series = {
  id: 'jp-tech-series',
  title: 'Digital Dreams',
  description: 'Stories about young inventors, hackers, and builders pushing the boundaries of technology in Japan!',
  category: 'tech',
  language: 'japanese' as any,
  episodes: [robottoNoYumeEpisode],
};

// ============================================================
// 🔮 FUTURE — "Mirai no Machi" (The City of the Future)
// ============================================================

export const miraiNoMachiEpisode: Episode = {
  id: 'jp-future-mirai-no-machi',
  title: 'Mirai no Machi (The City of the Future)',
  description: 'In the year 2089, a teenager discovers something strange hidden beneath the gleaming streets of Neo-Tokyo.',
  vocab: [
    { word: 'machi', pronunciation: 'ma-chi', english: 'city/town' },
    { word: 'sora', pronunciation: 'so-ra', english: 'sky' },
    { word: 'himitsu', pronunciation: 'hi-mi-tsu', english: 'secret' },
    { word: 'hikari', pronunciation: 'hi-ka-ri', english: 'light' },
    { word: 'chika', pronunciation: 'chi-ka', english: 'underground' },
    { word: 'furui', pronunciation: 'fu-ru-i', english: 'old' },
    { word: 'atarashii', pronunciation: 'a-ta-ra-shii', english: 'new' },
    { word: 'kokoro', pronunciation: 'ko-ko-ro', english: 'heart/spirit' },
    { word: 'hoshi', pronunciation: 'ho-shi', english: 'star' },
    { word: 'sagasu', pronunciation: 'sa-ga-su', english: 'to search/look for' },
  ],
  sections: [
    {
      id: 'jp-future-s1',
      title: 'Part 1: Neo-Tokyo, 2089',
      content: `The year is 2089, and the **machi** of Neo-Tokyo is nothing like the Tokyo you know.

Buildings stretch so high they disappear into the **sora**, wrapped in holographic advertisements that shimmer like water. Flying taxis zip between skyscrapers. The streets glow with **hikari** — soft blue and purple light built into every surface.

Everything is **atarashii**. New buildings, new tech, new everything.

Fifteen-year-old Ren loved it — mostly. He'd grown up here, skateboarding through the neon streets, using his wrist-screen to order ramen from robots, watching hologram concerts from his apartment balcony.

But lately, something felt off. Like the **machi** was hiding something.

It started when he found an old map in his grandmother's apartment. Paper. Actual paper — something almost nobody used anymore. The map showed tunnels beneath the city. **Chika** passages that weren't on any modern map.

"Obaachan," Ren asked, "what's under the city?"

His grandmother smiled mysteriously. "A **himitsu**, Ren. The city's secret. Something **furui** — very old — that they built everything on top of."

Ren's curiosity was on fire. He had to **sagasu** — he had to find whatever was down there.`,
      translatedWords: [
        { word: 'machi', translation: 'city/town' },
        { word: 'sora', translation: 'sky' },
        { word: 'hikari', translation: 'light' },
        { word: 'atarashii', translation: 'new' },
        { word: 'chika', translation: 'underground' },
        { word: 'himitsu', translation: 'secret' },
        { word: 'furui', translation: 'old' },
        { word: 'sagasu', translation: 'to search/look for' },
      ],
    },
    {
      id: 'jp-future-s2',
      title: 'Part 2: Beneath the Surface',
      content: `That night, Ren snuck out. He followed the **furui** map to an alley in Akihabara — the old electronics district, now a vintage-tech museum zone. Behind a vending machine that sold holographic stickers, he found it: a hidden staircase leading **chika**.

The stairs were metal and cold. No neon. No holograms. Just dim yellow **hikari** from ancient lightbulbs.

Down, down, down he went.

What he found at the bottom made him gasp.

It was old Tokyo. The REAL Tokyo. Streets from hundreds of years ago, perfectly preserved underground. Wooden buildings with sliding doors. Cherry blossom trees — somehow still alive — growing under UV lamps. A shrine with stone lanterns.

"This is the **himitsu**," Ren whispered. The secret his grandmother mentioned.

When they built Neo-Tokyo, they didn't demolish the old **machi**. They built right on top of it, sealing it away like a time capsule. Everything **atarashii** above, everything **furui** below.

Ren walked through the ancient streets, running his hand along wooden walls. He could almost feel the **kokoro** of the place — the heart and spirit of everyone who had lived here.

Above, the city buzzed with flying cars and AI assistants. Down here, it was silent. Peaceful. Real.

He looked up through a crack in the ceiling and saw a single **hoshi** — a star, twinkling through layers of glass and metal.`,
      translatedWords: [
        { word: 'furui', translation: 'old' },
        { word: 'chika', translation: 'underground' },
        { word: 'hikari', translation: 'light' },
        { word: 'himitsu', translation: 'secret' },
        { word: 'machi', translation: 'city/town' },
        { word: 'atarashii', translation: 'new' },
        { word: 'kokoro', translation: 'heart/spirit' },
        { word: 'hoshi', translation: 'star' },
      ],
    },
    {
      id: 'jp-future-s3',
      title: 'Part 3: The Choice',
      content: `Ren kept visiting the **chika** city every night for a week. He mapped it, photographed it with his wrist-screen, and learned its **himitsu** passages by heart.

He discovered a garden with vegetables still growing. A library with actual books — thousands of them. A workshop where someone had been building things by hand, not with 3D printers or holo-fabricators. **Furui** tools, **furui** methods, but there was something beautiful about them.

Then came the decision.

The city government announced plans to drill deeper foundations for a new mega-tower. The construction would destroy the **chika** city completely. Nobody knew it was there — nobody except Ren and his grandmother.

"What do I do, Obaachan?" Ren asked.

"That's up to your **kokoro**," she said. "Your heart knows."

Ren thought about it all night, staring at the **hoshi** from his balcony. The **machi** above was incredible — **atarashii**, shining, the future made real. But the city below... it was where everything started.

The next morning, Ren did something bold. He uploaded his photos and maps to the public network with one message:

"Beneath our **atarashii** city, there is a **furui** one. It is beautiful. It has **kokoro**. Before we build the future, we should remember where we came from."

It went viral in minutes. Within hours, thousands of people were streaming through the hidden entrance to **sagasu** the underground city for themselves.

The mega-tower project was paused. Then canceled. Then replaced with something better: a glass floor built into the **sora**-scraping tower, so everyone could look down and see the old **machi** glowing with **hikari** below.

The future and the past, together. That was the real **himitsu** all along.`,
      translatedWords: [
        { word: 'chika', translation: 'underground' },
        { word: 'himitsu', translation: 'secret' },
        { word: 'furui', translation: 'old' },
        { word: 'kokoro', translation: 'heart/spirit' },
        { word: 'hoshi', translation: 'star' },
        { word: 'machi', translation: 'city/town' },
        { word: 'atarashii', translation: 'new' },
        { word: 'sagasu', translation: 'to search/look for' },
        { word: 'sora', translation: 'sky' },
        { word: 'hikari', translation: 'light' },
      ],
    },
  ],
  fullTargetLanguageStory: `Nisen hachijuuku nen, Neo-Toukyou no machi wa ima no Toukyou to wa mattaku chigaimasu.

Tatemono wa sora ni todoku hodo takai desu. Tobu takushii ga biru no aida wo hashirimasu. Toori wa hikari de kagayaite imasu — yawarakai ao to murasaki no hikari.

Subete ga atarashii desu. Atarashii tatemono, atarashii gijutsu.

Juugo sai no Ren wa kono machi ga suki deshita. Demo saikin, nanika ga okashii to kanjimashita. Machi ga nanika wo kakushite iru you deshita.

Sobo no apaato de furui chizu wo mitsukemashita. Kami no chizu desu. Chizu wa machi no shita no chika tsuuro wo shimeshite imashita.

"Obaachan, machi no shita ni nani ga aru no?" to Ren wa kikimashita.

Sobo wa hohoende iimashita: "Himitsu da yo, Ren. Totemo furui mono da."

Ren wa sagasu koto ni shimashita.

Sono yoru, Ren wa Akihabara no roji de kakushi kaidan wo mitsukemashita. Kaidan wa chika e tsuzuite imashita. Usugurai kiiroi hikari dake ga arimashita.

Shita ni aru mono wo mite, Ren wa iki wo nomimashita.

Furui Toukyou deshita. Hontou no Toukyou. Nanbiyaku nen mo mae no toori ga chika ni hozon sarete imashita. Ki no tatemono, sakura no ki, jinja.

"Kore ga himitsu da," to Ren wa sasayakimashita.

Neo-Toukyou wo tateta toki, furui machi wo kowasanakatta no desu. Sono ue ni tateta no desu. Ue wa atarashii, shita wa furui.

Ren wa furui toori wo aruki, kokoro wo kanjimashita. Ue no machi wa nigiyaka. Shita wa shizuka de heiwa deshita.

Tenjou no sukima kara hitotsu no hoshi ga miemashita.

Ren wa maiban chika no machi wo otozuremashita. Chizu wo tsukuri, shashin wo torimashita. Himitsu no tsuuro wo oboamashita.

Yasai no sodatsu niwa, hon ga tsumatta toshokan, te de mono wo tsukuru koubou wo mitsukemashita. Furui dougu, furui houhou. Demo utsukushikatta desu.

Soshite, shi wa atarashii mega tawaa no tame ni, chika wo horiru keikaku wo happyou shimashita. Kouji wa chika no machi wo hakai shimasu.

"Dou sureba ii, Obaachan?" to Ren wa kikimashita.

"Anata no kokoro ga shitte iru yo," to sobo wa iimashita.

Ren wa hitoban juu hoshi wo nagamete kangaemashita. Ue no machi wa subarashii — atarashii, kagayaku mirai. Demo shita no machi wa... subete no hajimari deshita.

Tsugi no asa, Ren wa shashin to chizu wo koukai shimashita:

"Atarashii machi no shita ni, furui machi ga arimasu. Utsukushii desu. Kokoro ga arimasu. Mirai wo tsukuru mae ni, hajimari wo oboete okou."

Sugu ni bairaru ni narimashita. Nanjikan mo shinai ni, nansen nin mo no hito ga chika no machi wo sagasu tame ni oshiyosemashita.

Mega tawaa keikaku wa chuushi saremashita. Kawari ni, garasu no yuka ga tsukuraremashita. Minna ga furui machi wo mioroshite, hikari de kagayaku no wo miru koto ga dekimashita.

Mirai to kako ga issho ni. Sore ga hontou no himitsu deshita.`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-future-q1',
      type: 'fill-blank',
      question: 'The buildings stretched so high they disappeared into the _______ (sky).',
      answer: 'sora',
    },
    {
      id: 'jp-future-q2',
      type: 'fill-blank',
      question: 'Ren found hidden _______ (underground) passages beneath the city.',
      answer: 'chika',
    },
    {
      id: 'jp-future-q3',
      type: 'fill-blank',
      question: 'Ren could feel the _______ (heart/spirit) of the old city.',
      answer: 'kokoro',
    },
    {
      id: 'jp-future-q4',
      type: 'fill-blank',
      question: 'Ren had to _______ (search for) whatever was hidden below.',
      answer: 'sagasu',
    },
    // Multiple-choice (4)
    {
      id: 'jp-future-q5',
      type: 'multiple-choice',
      question: 'What does "machi" mean?',
      answer: 'city/town',
      options: ['mountain', 'city/town', 'river', 'forest'],
    },
    {
      id: 'jp-future-q6',
      type: 'multiple-choice',
      question: 'What does "himitsu" mean?',
      answer: 'secret',
      options: ['treasure', 'danger', 'secret', 'light'],
    },
    {
      id: 'jp-future-q7',
      type: 'multiple-choice',
      question: 'What does "atarashii" mean?',
      answer: 'new',
      options: ['old', 'new', 'bright', 'dark'],
    },
    {
      id: 'jp-future-q8',
      type: 'multiple-choice',
      question: 'What does "hoshi" mean?',
      answer: 'star',
      options: ['moon', 'sun', 'cloud', 'star'],
    },
    // Translate (4)
    {
      id: 'jp-future-q9',
      type: 'translate',
      question: 'Translate to English: "hikari"',
      answer: 'light',
    },
    {
      id: 'jp-future-q10',
      type: 'translate',
      question: 'Translate to English: "furui"',
      answer: 'old',
    },
    {
      id: 'jp-future-q11',
      type: 'translate',
      question: 'How do you say "sky" in Japanese romaji?',
      answer: 'sora',
    },
    {
      id: 'jp-future-q12',
      type: 'translate',
      question: 'How do you say "heart/spirit" in Japanese romaji?',
      answer: 'kokoro',
    },
  ],
};

export const futureSeries: Series = {
  id: 'jp-future-series',
  title: 'Neo-Tokyo Chronicles',
  description: 'Futuristic adventures in a Tokyo that\'s evolved beyond imagination — but never forgot its roots.',
  category: 'future',
  language: 'japanese' as any,
  episodes: [miraiNoMachiEpisode],
};

// ============================================================
// 🎨 CREATIVE — "Iro no Mahou" (The Magic of Colors)
// ============================================================

export const iroNoMahouEpisode: Episode = {
  id: 'jp-creative-iro-no-mahou',
  title: 'Iro no Mahou (The Magic of Colors)',
  description: 'A young street artist in Harajuku discovers that her paintings have a magical power nobody expected.',
  vocab: [
    { word: 'iro', pronunciation: 'i-ro', english: 'color' },
    { word: 'mahou', pronunciation: 'ma-hou', english: 'magic' },
    { word: 'egaku', pronunciation: 'e-ga-ku', english: 'to draw/paint' },
    { word: 'utsukushii', pronunciation: 'u-tsu-ku-shii', english: 'beautiful' },
    { word: 'kabe', pronunciation: 'ka-be', english: 'wall' },
    { word: 'neko', pronunciation: 'ne-ko', english: 'cat' },
    { word: 'hana', pronunciation: 'ha-na', english: 'flower' },
    { word: 'sekai', pronunciation: 'se-kai', english: 'world' },
    { word: 'shiawase', pronunciation: 'shi-a-wa-se', english: 'happiness' },
    { word: 'tsutaeru', pronunciation: 'tsu-ta-e-ru', english: 'to convey/express' },
  ],
  sections: [
    {
      id: 'jp-creative-s1',
      title: 'Part 1: The Girl Who Painted Walls',
      content: `Mika had a problem. Well, actually, Mika had a gift — but it felt like a problem.

Every time she would **egaku** — draw or paint — the images looked so real they seemed to breathe. The **iro** in her spray cans came out brighter, deeper, more alive than anyone else's. Teachers called her art **utsukushii**. Friends said it was like looking through a window into another **sekai**.

Mika was a street artist in Harajuku, Tokyo's wildest fashion and art district. Every weekend, she'd find a blank **kabe** — a wall — and turn it into something incredible.

Last Saturday, she painted a giant **neko** on the side of a ramen shop. An orange tabby with green eyes, curled up like it was sleeping. The owner loved it. Tourists took selfies with it. It was just paint on a wall.

Except... that night, the shop owner swore he heard purring.

"Your art has **mahou**," her grandmother told her once. "Magic. The **iro** you use — they carry feelings."

Mika laughed it off. **Mahou** wasn't real. She was just good at what she did.

But then things started getting weird.`,
      translatedWords: [
        { word: 'egaku', translation: 'to draw/paint' },
        { word: 'iro', translation: 'color' },
        { word: 'utsukushii', translation: 'beautiful' },
        { word: 'sekai', translation: 'world' },
        { word: 'kabe', translation: 'wall' },
        { word: 'neko', translation: 'cat' },
        { word: 'mahou', translation: 'magic' },
      ],
    },
    {
      id: 'jp-creative-s2',
      title: 'Part 2: Colors That Come Alive',
      content: `It started with the **hana**.

Mika painted a field of sunflowers on a concrete **kabe** under a train overpass. Bright yellows, warm golds, deep greens. She poured her feelings into it — she'd been thinking about her mom, who loved sunflowers, and she wanted to **tsutaeru** that love through the painting.

The next morning, real sunflowers were growing through cracks in the sidewalk next to the wall. In concrete. In the middle of winter.

"That's... not possible," Mika whispered.

Then the **neko** mural. People reported seeing an actual orange tabby hanging around the ramen shop — one that looked exactly like her painting. It appeared out of nowhere and disappeared whenever someone tried to follow it.

And the **hana** wall? People who walked past it said they suddenly felt warm and happy, even on cold days. Like a wave of **shiawase** — happiness — just washed over them.

Mika started experimenting. She painted a **sora** — a sky full of stars — on a wall in a dark alley. That night, the alley literally glowed. Not from streetlights. From the painting itself, radiating soft **hikari**.

The **iro** were alive. Her grandmother was right: it was **mahou**.

"Okay," Mika said to herself, staring at her paint-stained hands. "So my art is magical. Cool. Cool cool cool. Totally normal."

She picked up her spray cans. If the **iro** had power, she was going to use them for something that mattered.`,
      translatedWords: [
        { word: 'hana', translation: 'flower' },
        { word: 'kabe', translation: 'wall' },
        { word: 'tsutaeru', translation: 'to convey/express' },
        { word: 'neko', translation: 'cat' },
        { word: 'shiawase', translation: 'happiness' },
        { word: 'iro', translation: 'color' },
        { word: 'mahou', translation: 'magic' },
      ],
    },
    {
      id: 'jp-creative-s3',
      title: 'Part 3: The Mural That Changed Everything',
      content: `There was one **kabe** in Harajuku that everyone knew about — the Gray Wall. It was massive, stretching the entire side of an old apartment building. It had been gray and depressing for years. Nobody had permission to paint it.

Mika didn't ask for permission.

She spent three nights working in secret. She used every **iro** she had — electric blues, sunset oranges, cherry blossom pinks, deep ocean greens. She painted the entire **sekai** on that wall:

Mountains with snow on top. An ocean with waves you could almost hear. A forest full of animals — a **neko** sleeping in a tree, birds mid-flight, a fox peeking through bushes. **Hana** everywhere — cherry blossoms, sunflowers, lilies, roses. And above it all, a sky full of **hoshi** that seemed to actually twinkle.

She poured everything into it. Every feeling she wanted to **tsutaeru**: hope, joy, wonder, love. She wanted people to see this wall and feel **shiawase**.

When dawn broke and people saw it, they stopped in their tracks. Some cried. Some laughed. Some just stood there, staring, unable to look away.

The **mahou** was strong. Real cherry blossom petals drifted down from the painted trees — in the middle of winter. The sound of ocean waves hummed from the wall. A warm breeze came from nowhere.

News spread across the entire **machi** and then the whole **sekai**. "The Living Mural of Harajuku." People flew in from other countries just to stand in front of it and feel the **shiawase** radiating from the **iro**.

The building owner came to find Mika. She thought she was in trouble.

"I didn't ask permission," Mika admitted. "I'm sorry."

The owner shook his head, eyes wet. "This is the most **utsukushii** thing I've ever seen. Don't ever stop painting."

Mika smiled. She looked at her **iro** — her magical colors — and knew exactly what she'd **egaku** next.

The **sekai** was her canvas. And she had a lot more **mahou** to share.`,
      translatedWords: [
        { word: 'kabe', translation: 'wall' },
        { word: 'iro', translation: 'color' },
        { word: 'sekai', translation: 'world' },
        { word: 'neko', translation: 'cat' },
        { word: 'hana', translation: 'flower' },
        { word: 'tsutaeru', translation: 'to convey/express' },
        { word: 'shiawase', translation: 'happiness' },
        { word: 'mahou', translation: 'magic' },
        { word: 'utsukushii', translation: 'beautiful' },
        { word: 'egaku', translation: 'to draw/paint' },
      ],
    },
  ],
  fullTargetLanguageStory: `Mika ni wa tokubetsu na chikara ga arimashita. Kanojo ga egaku tabi ni, e wa totemo riaru ni miemashita. Iro wa dare yori mo akaruku, fukaku, ikite iru you deshita. Sensei wa kanojo no ato wo utsukushii to iimashita. Tomodachi wa betsu no sekai wo mite iru you da to iimashita.

Mika wa Harajuku no sutorito aatisuto deshita. Maishuu, kabe wo mitsukete, subarashii e ni kaemashita.

Senshuu no doyoubi, raamen ya no kabe ni ookina neko wo egakimashita. Orenzi no torabii neko de, midori no me wo shite, nemuri ni tsuite iru you deshita. Sono yoru, mise no tenin wa goro goro to iu oto ga kikoeta to iimashita.

"Anata no ato ni wa mahou ga aru," to sobo wa iimashita. "Anata no tsukau iro wa kimochi wo hakobu no."

Mika wa waraimashita. Mahou wa hontou ja nai. Demo, fushigi na koto ga okorihajimemashita.

Mika wa densha no shita no konkuriito no kabe ni himawari batake wo egakimashita. Akarui kiiro, atatakai kin iro, fukai midori. Okaasan no koto wo omoinagara, ai wo tsutaeru tame ni egakimashita.

Tsugi no asa, kabe no tonari no houdou no wareme kara hontou no himawari ga haete imashita. Konkuriito no naka ni. Fuyu no mannaka ni.

"Sore wa... arienai," to Mika wa sasayakimashita.

Neko no hekiga. Hontou no orenzi no torabii neko ga raamen ya no chikaku ni arawaremashita. Hana no kabe no mae wo tooru hito wa, shiawase na kimochi ni narimashita.

Mika wa jikken wo hajimemashita. Kurai roji no kabe ni hoshi de ippai no sora wo egakimashita. Sono yoru, roji wa e kara no hikari de kagayakimashita.

Iro wa ikite imashita. Sobo ga tadashikatta: mahou deshita.

Harajuku ni "Haiiro no Kabe" to yobareru kabe ga arimashita. Ookiku, furui apaato no kabe zentai ni hirogatte imashita. Nannnen mo haiiro de kurakatta desu.

Mika wa kyoka wo moraimasen deshita.

San ya kakete himitsu ni egakimashita. Subete no iro wo tsukaimashita. Kabe ni sekai zentai wo egakimashita:

Yuki no yama. Nami no umi. Doubutsu no iru mori — ki no ue de nemuru neko, tobu tori, kitsune. Hana ga arifurete — sakura, himawari, yuri, bara. Soshite sora ni wa matataku hoshi.

Subete no kimochi wo tsutaemashita: kibou, yorokobi, odoroki, ai. Kono kabe wo mite shiawase wo kanjite hoshikatta desu.

Yoake ni hito ga kabe wo mita toki, tachi domatte shimaimashita. Naita hito mo imashita. Waratta hito mo imashita.

Mahou wa tsuyokatta desu. Hontou no sakura no hanabira ga fuyu ni e no ki kara chirimashita. Umi no nami no oto ga kabe kara kikoemashita.

Nyuusu wa sekai juu ni hiromari mashita. "Harajuku no Ikita Hekiga." Sekai juu kara hito ga shiawase wo kanjiru tame ni kimashita.

Tatemono no ooya wa Mika wo mitsukemashita. "Kore wa ima made mita naka de ichiban utsukushii mono desu. Egaku no wo zettai ni yamenaide kudasai."

Mika wa hohoemi mashita. Iro wo — mahou no iro wo — mite, tsugi ni nani wo egaku ka wakatte imashita.

Sekai wa kanojo no kyanbasu deshita. Soshite mada takusan no mahou wo wakachiau tsumori deshita.`,
  quiz: [
    // Fill-in-the-blank (4)
    {
      id: 'jp-creative-q1',
      type: 'fill-blank',
      question: 'Mika loved to _______ (draw/paint) on walls in Harajuku.',
      answer: 'egaku',
    },
    {
      id: 'jp-creative-q2',
      type: 'fill-blank',
      question: 'People who walked past the flower wall felt _______ (happiness).',
      answer: 'shiawase',
    },
    {
      id: 'jp-creative-q3',
      type: 'fill-blank',
      question: 'Mika painted a sleeping _______ (cat) on the ramen shop.',
      answer: 'neko',
    },
    {
      id: 'jp-creative-q4',
      type: 'fill-blank',
      question: '"Your art has _______" (magic), her grandmother told her.',
      answer: 'mahou',
    },
    // Multiple-choice (4)
    {
      id: 'jp-creative-q5',
      type: 'multiple-choice',
      question: 'What does "iro" mean?',
      answer: 'color',
      options: ['paint', 'color', 'brush', 'canvas'],
    },
    {
      id: 'jp-creative-q6',
      type: 'multiple-choice',
      question: 'What does "kabe" mean?',
      answer: 'wall',
      options: ['floor', 'ceiling', 'wall', 'door'],
    },
    {
      id: 'jp-creative-q7',
      type: 'multiple-choice',
      question: 'What does "utsukushii" mean?',
      answer: 'beautiful',
      options: ['ugly', 'small', 'beautiful', 'scary'],
    },
    {
      id: 'jp-creative-q8',
      type: 'multiple-choice',
      question: 'What does "sekai" mean?',
      answer: 'world',
      options: ['sky', 'world', 'ocean', 'city'],
    },
    // Translate (4)
    {
      id: 'jp-creative-q9',
      type: 'translate',
      question: 'Translate to English: "hana"',
      answer: 'flower',
    },
    {
      id: 'jp-creative-q10',
      type: 'translate',
      question: 'Translate to English: "tsutaeru"',
      answer: 'to convey/express',
    },
    {
      id: 'jp-creative-q11',
      type: 'translate',
      question: 'How do you say "magic" in Japanese romaji?',
      answer: 'mahou',
    },
    {
      id: 'jp-creative-q12',
      type: 'translate',
      question: 'How do you say "happiness" in Japanese romaji?',
      answer: 'shiawase',
    },
  ],
};

export const creativeSeries: Series = {
  id: 'jp-creative-series',
  title: 'Harajuku Art Stories',
  description: 'Colorful stories about young artists finding their voice and discovering the magic in creativity.',
  category: 'creative',
  language: 'japanese' as any,
  episodes: [iroNoMahouEpisode],
};

// ============================================================
// ============================================================
// 📜 HISTORY — "Samurai no Michi" (The Way of the Samurai)
// ============================================================

export const samuraiNoMichiEpisode: Episode = {
  id: "samurai-no-michi",
  title: "Samurai no Michi",
  description: "A boy discovers the code of the samurai through his grandfather's ancient scroll",
  vocab: [
    { word: "samurai", pronunciation: "SAH-moo-rai", english: "samurai/warrior" },
    { word: "katana", pronunciation: "kah-TAH-nah", english: "sword" },
    { word: "rekishi", pronunciation: "REH-kee-shee", english: "history" },
    { word: "shiro", pronunciation: "SHEE-roh", english: "castle" },
    { word: "sensei", pronunciation: "SEN-say", english: "teacher/master" },
    { word: "tsuyoi", pronunciation: "TSOO-yoi", english: "strong" },
    { word: "bushidou", pronunciation: "BOO-shee-doh", english: "the way of the warrior" },
    { word: "ikusa", pronunciation: "ee-KOO-sah", english: "battle/war" },
    { word: "hokori", pronunciation: "hoh-KOH-ree", english: "pride/honor" },
    { word: "mamoru", pronunciation: "mah-MOH-roo", english: "to protect" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Old Scroll",
      content: `Takeshi found the scroll in his grandfather's workshop — behind the woodworking tools, wrapped in silk cloth that had turned yellow with age. He almost didn't open it. But curiosity won.

Inside was a painting of a **samurai** in full armor, standing before a great **shiro** — a castle with curved roofs and stone walls. The **samurai** held a **katana** at his side, and his face was calm, fearless. Japanese calligraphy ran down the side of the painting.

"**Ojiisan!**" Takeshi called. Grandfather! "**Kore wa nan desu ka?**" What is this?

His grandfather appeared in the doorway, wiping sawdust from his hands. When he saw the scroll, his expression changed — softer, more serious.

"That is our family's **rekishi**," he said quietly. "Our history. That **samurai** is our ancestor — Takeshi Nakamura, born in 1603. You were named after him."

Takeshi stared at the painted warrior. Named after a real **samurai**?

"He served the Tokugawa shogunate," Ojiisan continued, sitting down on his work stool. "He lived by **bushidou** — the way of the warrior. It wasn't just about fighting. **Bushidou** was about **hokori** — honor and pride. About being **tsuyoi** — strong — not just in body, but in character."

"What did he do?"

"He **mamotta** — protected — his lord and his people. He fought in **ikusa** when he had to. But his greatest achievement was peace. He helped build a school for village children."

Takeshi touched the painted face carefully. His ancestor. His name. His **rekishi**.

"Can you teach me about **bushidou**?" he asked.

His grandfather smiled. "That is exactly what a true **samurai** would ask. A warrior's first duty is to **mamoru** — to protect. And the first thing you must protect is your mind. Fill it with **rekishi**. Learn. That is the way."`,
      translatedWords: [
        { word: "samurai", translation: "samurai/warrior" },
        { word: "shiro", translation: "castle" },
        { word: "katana", translation: "sword" },
        { word: "Ojiisan!", translation: "Grandfather!" },
        { word: "Kore wa nan desu ka?", translation: "What is this?" },
        { word: "rekishi", translation: "history" },
        { word: "bushidou", translation: "the way of the warrior" },
        { word: "hokori", translation: "honor/pride" },
        { word: "tsuyoi", translation: "strong" },
        { word: "mamotta", translation: "protected" },
        { word: "ikusa", translation: "battle/war" },
        { word: "mamoru", translation: "to protect" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Way of the Warrior",
      content: `Over the following weeks, Ojiisan taught Takeshi about **bushidou** every evening after dinner. They sat in the garden with tea, the old scroll open between them.

"**Bushidou** has seven virtues," Ojiisan said. "Courage. Honor. Loyalty. Respect. Honesty. Compassion. And duty. A **samurai** was **tsuyoi** not because of his **katana**. He was **tsuyoi** because of these."

He told Takeshi stories. About **samurai** who chose mercy over violence. About warriors who wrote poetry before **ikusa** — going into battle with beauty in their hearts. About lords who protected their people's rice fields before their own **shiro**.

"**Rekishi** teaches us that true strength is not about fighting," Ojiisan said. "It's about choosing when NOT to fight. The greatest **samurai** were peacemakers."

Takeshi listened, fascinated. Everything he'd thought he knew about **samurai** — from movies and games — was only half the story. The real **bushidou** was about building character, not just swinging a **katana**.

"The **samurai** code says: protect the weak, honor your word, and never give up," Ojiisan said. "**Mamoru** — protect. That is the heart of everything."

"**Boku mo samurai ni naritai,**" Takeshi said. I want to become a samurai too.

His grandfather laughed warmly. "You already are. **Bushidou** lives in anyone who chooses **hokori** over selfishness. You don't need a **katana** or a **shiro**. You need courage, honesty, and the will to **mamoru** what matters."

Takeshi looked at the scroll one more time. His ancestor's calm face looked back at him across four hundred years.

"**Rekishi** is alive," Takeshi said.

"**Rekishi** lives in us," Ojiisan agreed. "**Sore ga bushidou desu.**" That is the way of the warrior.`,
      translatedWords: [
        { word: "Bushidou", translation: "The way of the warrior" },
        { word: "samurai", translation: "samurai/warrior" },
        { word: "tsuyoi", translation: "strong" },
        { word: "katana", translation: "sword" },
        { word: "ikusa", translation: "battle" },
        { word: "Rekishi", translation: "History" },
        { word: "shiro", translation: "castle" },
        { word: "Mamoru", translation: "To protect" },
        { word: "Boku mo samurai ni naritai", translation: "I want to become a samurai too" },
        { word: "bushidou", translation: "the way of the warrior" },
        { word: "hokori", translation: "honor/pride" },
        { word: "Sore ga bushidou desu", translation: "That is the way of the warrior" }
      ]
    }
  ],
  fullTargetLanguageStory: `Takeshi wa ojiisan no koubou de makimono wo mitsukemashita. Naka ni wa samurai no e ga arimashita — shiro no mae ni tatsu, katana wo motsu bushi.

"Ojiisan! Kore wa nan desu ka?"

"Sore wa kazoku no rekishi da. Sono samurai wa senzo — Takeshi Nakamura, 1603-nen umare. Omae wa kare ni chinande nazukerareta."

"Kare wa bushidou de ikita — bushi no michi. Sore wa tatakai dake janai. Bushidou wa hokori — meiyo to hokori. Tsuyoi de aru koto — karada dake janaku, seikaku mo."

"Kare wa mamotta — shugun to hitobito wo. Ikusa de tatakatta. Shikashi, ichiban no gyouseki wa heiwa datta."

"Bushidou wo oshiete kudasai."

"Sore wa hontou no samurai ga kiku koto da. Bushi no saisho no gimu wa mamoru koto."

Maibanshoku no ato, ojiisan wa bushidou wo oshiemashita.

"Bushidou ni wa nanatsu no bitoku ga aru. Yuuki. Meiyo. Chuugi. Sonkei. Shoujiki. Jihi. Gimu. Samurai wa katana no tame ni tsuyoi no dewa nai. Korera no tame ni tsuyoi."

"Hontou no tsuyosa wa tatakawanai koto wo erabu koto. Saikou no samurai wa heiwa no tsukurite datta."

"Boku mo samurai ni naritai."

"Mou samurai da. Bushidou wa hokori wo erabu dare ni demo ikiteiru."

"Rekishi wa ikiteiru."

"Rekishi wa watashi-tachi no naka ni ikiteiru. Sore ga bushidou desu."`,
  quiz: [
    { id: "sam-fb1", type: "fill-blank", question: "The warrior's code is called __________ (the way of the warrior).", answer: "bushidou" },
    { id: "sam-fb2", type: "fill-blank", question: "The samurai held a __________ (sword) at his side.", answer: "katana" },
    { id: "sam-fb3", type: "fill-blank", question: "A samurai must __________ (protect) the weak.", answer: "mamoru" },
    { id: "sam-fb4", type: "fill-blank", question: "Takeshi learned about his family's __________ (history).", answer: "rekishi" },
    { id: "sam-mc1", type: "multiple-choice", question: "What does 'tsuyoi' mean?", answer: "strong", options: ["tall", "tired", "strong", "smart"] },
    { id: "sam-mc2", type: "multiple-choice", question: "What does 'shiro' mean?", answer: "castle", options: ["white", "castle", "city", "shield"] },
    { id: "sam-mc3", type: "multiple-choice", question: "What does 'hokori' mean?", answer: "honor/pride", options: ["happiness", "honor/pride", "hope", "home"] },
    { id: "sam-mc4", type: "multiple-choice", question: "What does 'ikusa' mean?", answer: "battle/war", options: ["island", "illness", "battle/war", "idea"] },
    { id: "sam-tr1", type: "translate", question: "Translate to English: 'sensei'", answer: "teacher/master" },
    { id: "sam-tr2", type: "translate", question: "How do you say 'history' in Japanese romaji?", answer: "rekishi" },
    { id: "sam-tr3", type: "translate", question: "Translate to English: 'mamoru'", answer: "to protect" },
    { id: "sam-tr4", type: "translate", question: "How do you say 'sword' in Japanese romaji?", answer: "katana" }
  ]
};

// ============================================================
// 🔬 SCIENCE — "Kagaku no Chikara" (The Power of Science)
// ============================================================

export const kagakuNoChikaraEpisode: Episode = {
  id: "kagaku-no-chikara",
  title: "Kagaku no Chikara",
  description: "A girl builds a weather station on her school rooftop and predicts a typhoon that saves her community",
  vocab: [
    { word: "kagaku", pronunciation: "KAH-gah-koo", english: "science" },
    { word: "tenki", pronunciation: "TEN-kee", english: "weather" },
    { word: "taifuu", pronunciation: "TAI-foo", english: "typhoon" },
    { word: "kaze", pronunciation: "KAH-zeh", english: "wind" },
    { word: "ame", pronunciation: "AH-meh", english: "rain" },
    { word: "hakaru", pronunciation: "hah-KAH-roo", english: "to measure" },
    { word: "yosoku", pronunciation: "yoh-SOH-koo", english: "prediction/forecast" },
    { word: "kiken", pronunciation: "KEE-ken", english: "danger" },
    { word: "tasukeru", pronunciation: "tah-SOO-keh-roo", english: "to help/save" },
    { word: "jikken", pronunciation: "JIK-ken", english: "experiment" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Weather Station",
      content: `Yumi had always been fascinated by **tenki**. While other kids looked at the sky and saw clouds, she saw cumulonimbus towers building toward thunderstorms, cirrus wisps predicting fair **tenki** for tomorrow, and the way **kaze** shifted direction before a storm.

For her science fair project, she decided to build a real weather station on the school rooftop. Not a plastic toy one — a real one.

"**Sensei,**" she said to Mr. Tanaka, her science teacher, "**Okujou ni tenki kansoku sochi wo tsukuritai desu.**" I want to build a weather observation device on the rooftop.

Mr. Tanaka raised an eyebrow. "That's ambitious, Yumi. What will you **hakaru**?"

"Everything," she said. "Temperature. Humidity. **Kaze** speed and direction. Barometric pressure. **Ame** quantity. All connected to a Raspberry Pi that logs data every five minutes."

The **jikken** took two weeks to build. She soldered sensors, waterproofed the housing, wrote code to process the data. Every day after school she was on the rooftop, calibrating instruments and comparing her readings to the official Japan Meteorological Agency forecasts.

Her data was surprisingly accurate. Within three days, she noticed patterns. The barometric pressure dropping a certain way always predicted **ame** within twelve hours. **Kaze** shifting from south to east meant a storm was forming offshore.

"**Kagaku** is about patterns," she wrote in her project journal. "If you **hakaru** enough data, you can see the future."

She called her system "Yumi-yosoku" — Yumi's Forecast. And it was about to save lives.`,
      translatedWords: [
        { word: "tenki", translation: "weather" },
        { word: "kaze", translation: "wind" },
        { word: "Sensei", translation: "Teacher" },
        { word: "Okujou ni tenki kansoku sochi wo tsukuritai desu", translation: "I want to build a weather observation device on the rooftop" },
        { word: "hakaru", translation: "to measure" },
        { word: "Ame", translation: "Rain" },
        { word: "jikken", translation: "experiment" },
        { word: "ame", translation: "rain" },
        { word: "Kagaku", translation: "Science" },
        { word: "yosoku", translation: "forecast/prediction" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Typhoon Warning",
      content: `It was a Tuesday morning when Yumi's weather station data made her blood run cold. She was checking the overnight readings before class, and the numbers were screaming.

Barometric pressure: dropping fast — faster than she'd ever seen. **Kaze** direction: shifting rapidly from south to east to northeast. Humidity: 98%. Temperature: rising when it should be falling.

Every pattern she'd learned pointed to one thing: **taifuu**. A typhoon was coming. And it was coming fast.

The Japan Meteorological Agency hadn't issued a warning yet. Their nearest station was fifty kilometers away. But Yumi's rooftop sensors were right here, right now, and the data was clear.

"**Kiken desu!**" she said, bursting into Mr. Tanaka's classroom. It's dangerous! "**Taifuu ga kimasu!**" A typhoon is coming!

Mr. Tanaka looked at her data on the laptop screen. His face went serious.

"How confident are you in these readings?"

"I've been calibrating for three weeks. My **yosoku** has been accurate within two hours every time. This **taifuu** will hit by this afternoon."

Mr. Tanaka made a phone call. Then another. Within thirty minutes, the school principal had contacted the local emergency services. By noon — four hours before the JMA issued their own warning — the community was preparing. Shops were boarding up. Families were moving to higher ground. The fishing boats were secured.

**Taifuu** Nana-go hit at 4:47 PM. **Kaze** speeds of 150 kilometers per hour. **Ame** so heavy you couldn't see across the street. It was the worst storm in ten years.

But because of Yumi's early **yosoku**, everyone was safe. No injuries. No casualties. The community had four extra hours of preparation — and those hours made all the difference.

The next day, the mayor came to the school. He shook Yumi's hand in front of the whole student body.

"**Anata no kagaku ga minna wo tasukemashita,**" he said. Your science saved everyone.

Yumi looked at her weather station on the rooftop — her sensors, her code, her **jikken** that had become something real.

"**Kagaku wa chikara desu,**" she said. Science is power. "If you **hakaru** carefully, and you pay attention, you can **tasukeru** people. That's what science is for."

The **kiken** had been real. But **kagaku** had been stronger.`,
      translatedWords: [
        { word: "kaze", translation: "wind" },
        { word: "taifuu", translation: "typhoon" },
        { word: "Kiken desu!", translation: "It's dangerous!" },
        { word: "Taifuu ga kimasu!", translation: "A typhoon is coming!" },
        { word: "yosoku", translation: "forecast/prediction" },
        { word: "Ame", translation: "Rain" },
        { word: "Anata no kagaku ga minna wo tasukemashita", translation: "Your science saved everyone" },
        { word: "Kagaku wa chikara desu", translation: "Science is power" },
        { word: "hakaru", translation: "to measure" },
        { word: "tasukeru", translation: "to help/save" },
        { word: "kiken", translation: "danger" },
        { word: "kagaku", translation: "science" },
        { word: "jikken", translation: "experiment" }
      ]
    }
  ],
  fullTargetLanguageStory: `Yumi wa itsumo tenki ni miryou sarete imashita. Kagaku fair no tame ni, gakkou no okujou ni honmono no tenki kansokusho wo tsukuru koto ni shimashita.

"Sensei, okujou ni tenki kansoku sochi wo tsukuritai desu."

"Nani wo hakaru no?"

"Zenbu. Ondo. Shitsudo. Kaze no sokudo. Ame no ryou."

Jikken wa ni-shuukan kakarimashita. Mainichi houkago, sensa wo chousei shimashita.

"Kagaku wa pataan desu. Juubun ni hakaru to, mirai ga miemasu."

Kayoubi no asa, deeta ga kanojo wo furuewasemashita. Kiatsuga kyuugeki ni sagatte imashita. Kaze no houkou ga kawatte imashita.

Subete no pataan ga hitotsu no koto wo sashite imashita: taifuu.

"Kiken desu! Taifuu ga kimasu!"

Tanaka-sensei wa kanojo no deeta wo mimashita. Denwa wo shimashita.

Sanjuppun inai ni, chiiki shakai wa junbi wo hajimemashita. JMA ga keikoku wo dasu yojikan mae ni.

Taifuu nana-gou wa gogo yoji yonjuunana-fun ni totsunyuu shimashita. Kaze wa jisoku hyaku gojuk kiro. Ame ga hidokute, toori no mukou ga mienai hodo.

Shikashi, Yumi no hayai yosoku no okage de, minna anzen deshita.

Shichou ga gakkou ni kimashita. "Anata no kagaku ga minna wo tasukemashita."

"Kagaku wa chikara desu. Chuui bukaku hakaru to, hito wo tasukeru koto ga dekimasu."

Kiken wa hontou deshita. Shikashi kagaku wa motto tsuyokatta.`,
  quiz: [
    { id: "kag-fb1", type: "fill-blank", question: "Yumi's station predicted a __________ (typhoon) was coming.", answer: "taifuu" },
    { id: "kag-fb2", type: "fill-blank", question: "She could __________ (measure) wind speed and rain.", answer: "hakaru" },
    { id: "kag-fb3", type: "fill-blank", question: "The __________ (wind) shifted direction rapidly.", answer: "kaze" },
    { id: "kag-fb4", type: "fill-blank", question: "Her science helped __________ (save) the community.", answer: "tasukeru" },
    { id: "kag-mc1", type: "multiple-choice", question: "What does 'kagaku' mean?", answer: "science", options: ["school", "science", "sky", "storm"] },
    { id: "kag-mc2", type: "multiple-choice", question: "What does 'tenki' mean?", answer: "weather", options: ["time", "weather", "temple", "train"] },
    { id: "kag-mc3", type: "multiple-choice", question: "What does 'kiken' mean?", answer: "danger", options: ["kitchen", "ticket", "danger", "machine"] },
    { id: "kag-mc4", type: "multiple-choice", question: "What does 'yosoku' mean?", answer: "prediction/forecast", options: ["yesterday", "prediction/forecast", "youth", "yoga"] },
    { id: "kag-tr1", type: "translate", question: "Translate to English: 'ame'", answer: "rain" },
    { id: "kag-tr2", type: "translate", question: "How do you say 'experiment' in Japanese romaji?", answer: "jikken" },
    { id: "kag-tr3", type: "translate", question: "Translate to English: 'taifuu'", answer: "typhoon" },
    { id: "kag-tr4", type: "translate", question: "How do you say 'to measure' in Japanese romaji?", answer: "hakaru" }
  ]
};

// ============================================================
// 💪 SELF-HELP — "Kokoro no Tsuyosa" (Strength of Heart)
// ============================================================

export const kokoroNoTsuyosaEpisode: Episode = {
  id: "kokoro-no-tsuyosa",
  title: "Kokoro no Tsuyosa",
  description: "A shy boy finds inner strength through martial arts and learns that true power is self-control",
  vocab: [
    { word: "kokoro", pronunciation: "koh-KOH-roh", english: "heart/mind" },
    { word: "tsuyosa", pronunciation: "TSOO-yoh-sah", english: "strength" },
    { word: "osore", pronunciation: "oh-SOH-reh", english: "fear" },
    { word: "ganbaru", pronunciation: "gahn-BAH-roo", english: "to do one's best/persevere" },
    { word: "shinjiru", pronunciation: "shin-JEE-roo", english: "to believe" },
    { word: "renshuu", pronunciation: "REN-shoo", english: "practice/training" },
    { word: "shippai", pronunciation: "SHIP-pai", english: "failure" },
    { word: "seichou", pronunciation: "SAY-choh", english: "growth" },
    { word: "jishin", pronunciation: "JEE-shin", english: "self-confidence" },
    { word: "akiramenai", pronunciation: "ah-kee-rah-meh-NAI", english: "don't give up" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The First Class",
      content: `Ren was the quietest kid in his class. Not shy, exactly — more like invisible. He sat in the back row, spoke only when called on, and ate lunch alone in the library. He wasn't bullied. He was just... overlooked.

His mother signed him up for karate without asking. "You need to get out of your head," she said, handing him a white gi still in its plastic wrapper.

The dojo was terrifying. Fourteen kids in white uniforms, shouting in unison, punching air with precision. **Sensei** Hayashi stood at the front — sixty years old, barely five feet tall, and radiating a calm authority that filled the room.

"**Hajimemashite,**" Ren squeaked when introduced. Nice to meet you. His voice was barely audible.

**Sensei** Hayashi looked at him for a long moment. "**Osore** is normal," she said quietly so only he could hear. Fear is normal. "**Demo, osore wa teki janai. Osore wa sensei desu.**" But fear is not the enemy. Fear is a teacher.

The first class was humbling. Ren couldn't do a proper punch. His stance was wrong. His balance was off. Every other kid seemed natural, fluid. He felt like a broken robot.

After class, he wanted to quit. He sat on the bench outside the dojo and stared at his shoes.

**Sensei** Hayashi sat down next to him. "**Shippai** is not the end," she said. Failure is not the end. "**Shippai** is the beginning. Every master started exactly where you are now. The only difference is they chose to **ganbaru** — to keep going."

"But I'm terrible," Ren said.

"Of course you are. It's your first day. **Renshuu** — practice — is how you grow. **Seichou** comes from **shippai**, not from perfection."

Ren looked at the dojo door. Inside, the next class was starting. More kids. More shouting.

"**Akiramenai,**" **Sensei** said simply. Don't give up.

Ren didn't quit. He came back the next day. And the next.`,
      translatedWords: [
        { word: "Sensei", translation: "Teacher/Master" },
        { word: "Hajimemashite", translation: "Nice to meet you" },
        { word: "Osore", translation: "Fear" },
        { word: "Demo, osore wa teki janai. Osore wa sensei desu.", translation: "But fear is not the enemy. Fear is a teacher." },
        { word: "Shippai", translation: "Failure" },
        { word: "ganbaru", translation: "to keep going/persevere" },
        { word: "Renshuu", translation: "Practice/Training" },
        { word: "Seichou", translation: "Growth" },
        { word: "shippai", translation: "failure" },
        { word: "Akiramenai", translation: "Don't give up" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — The Tournament",
      content: `Three months of **renshuu** changed Ren. Not overnight — slowly, like sunrise. His punches got sharper. His stances got lower and more stable. He learned to breathe through the hard parts — to find **kokoro** no **tsuyosa** when his body wanted to stop.

But the biggest change wasn't physical. It was inside. **Jishin** — self-confidence — was growing like a small flame that got steadier each week.

Then **Sensei** Hayashi announced the junior regional tournament.

The **osore** came rushing back. A tournament? In front of people? Against kids who'd been training for years?

"**Muri desu,**" Ren said. It's impossible.

"**Muri janai,**" **Sensei** replied. It's not impossible. "You have trained. You have **ganbatta** — persevered through every class. The tournament is not about winning. It's about showing your **kokoro**."

Ren entered the tournament. His first opponent was bigger. Faster. More experienced. The match lasted forty-five seconds. Ren lost.

He sat in the corner, embarrassed and frustrated. **Shippai** again.

**Sensei** Hayashi found him. "Did you give up during the match?"

"No."

"Did you try your best?"

"Yes."

"Then it was not **shippai**. It was **seichou**. You stood in front of a stronger opponent and you fought. Three months ago, you couldn't stand in front of this class without shaking. Today you fought in a tournament. Do you understand how far you've come?"

Ren thought about it. Three months ago he ate lunch alone in the library. Today he had stepped onto a mat and faced an opponent. He had lost the match — but he had won something bigger.

"**Kokoro no tsuyosa,**" he said. Strength of heart.

**Sensei** nodded. "**Sou desu.** You now understand. **Jishin** is not about being the best. It's about **shinjiru** — believing in yourself even when things are hard. It's about **ganbaru** when you want to quit. And it's about knowing that **shippai** is just another step toward **seichou**."

Ren stood up. He bowed to his **sensei**. And he went back out to watch the rest of the tournament — not as a loser, but as someone who had discovered something far more valuable than a trophy.

**Kokoro no tsuyosa.** Strength of heart. And he would **akiramenai** — never give up.`,
      translatedWords: [
        { word: "renshuu", translation: "practice/training" },
        { word: "kokoro", translation: "heart/mind" },
        { word: "tsuyosa", translation: "strength" },
        { word: "Jishin", translation: "Self-confidence" },
        { word: "osore", translation: "fear" },
        { word: "Muri desu", translation: "It's impossible" },
        { word: "Muri janai", translation: "It's not impossible" },
        { word: "ganbatta", translation: "persevered" },
        { word: "Shippai", translation: "Failure" },
        { word: "seichou", translation: "growth" },
        { word: "Kokoro no tsuyosa", translation: "Strength of heart" },
        { word: "Sou desu", translation: "That's right" },
        { word: "shinjiru", translation: "to believe" },
        { word: "ganbaru", translation: "to persevere" },
        { word: "akiramenai", translation: "never give up" }
      ]
    }
  ],
  fullTargetLanguageStory: `Ren wa kurasu de ichiban shizuka na ko deshita. Okaasan ga karate ni mousikonde kuremashita.

Doujou wa kowakatta. Sensei Hayashi wa iimashita: "Osore wa futsuu desu. Demo, osore wa teki janai. Osore wa sensei desu."

Saisho no kurasu wa muzukashikatta. Ren wa tekitou na panchi mo dekinakatta.

"Shippai wa owari janai. Shippai wa hajimari. Renshuu ga seichou wo motarasu."

"Akiramenai."

Ren wa yamemashita ga — tsugi no hi mo kimashita.

Sankagetsu no renshuu ga Ren wo kaemashita. Panchi ga surudoku narimashita. Jishin ga sodatte imashita.

Soshite sensei ga junio chihou taikai wo happyou shimashita.

"Muri desu."

"Muri janai. Ganbatta. Taikai wa kokoro wo miseru koto."

Ren wa saisho no shiai de makemashita.

"Akiramemashita ka?" "Iie."

"Besuto wo tsukushimashita ka?" "Hai."

"Sore wa shippai janai. Sore wa seichou. Sankagetsu mae, kurasu no mae ni tatsu koto mo dekinakatta. Kyou wa taikai de tatakatta."

"Kokoro no tsuyosa."

"Sou desu. Jishin wa ichiban ni naru koto janai. Shinjiru koto — muzukashii toki demo. Ganbaru koto. Shippai wa seichou e no ippo ni suginai."

Ren wa tachiagarimashita. Sensei ni ojigi shimashita. Soshite taikai no nokori wo mi ni ikimashita — makenin to shite dewa naku, taisetsu na mono wo mitsuketa hito to shite.

Kokoro no tsuyosa. Soshite akiramenai.`,
  quiz: [
    { id: "kok-fb1", type: "fill-blank", question: "Ren discovered __________ (strength) of heart through karate.", answer: "tsuyosa" },
    { id: "kok-fb2", type: "fill-blank", question: "He had to overcome his __________ (fear) of the tournament.", answer: "osore" },
    { id: "kok-fb3", type: "fill-blank", question: "__________ (failure) is the beginning, not the end.", answer: "shippai" },
    { id: "kok-fb4", type: "fill-blank", question: "Sensei told him to __________ (not give up).", answer: "akiramenai" },
    { id: "kok-mc1", type: "multiple-choice", question: "What does 'kokoro' mean?", answer: "heart/mind", options: ["color", "heart/mind", "cold", "corner"] },
    { id: "kok-mc2", type: "multiple-choice", question: "What does 'ganbaru' mean?", answer: "to persevere/do one's best", options: ["to gamble", "to gather", "to persevere/do one's best", "to garden"] },
    { id: "kok-mc3", type: "multiple-choice", question: "What does 'renshuu' mean?", answer: "practice/training", options: ["rental", "practice/training", "restaurant", "rescue"] },
    { id: "kok-mc4", type: "multiple-choice", question: "What does 'jishin' mean?", answer: "self-confidence", options: ["earthquake", "self-confidence", "dictionary", "genius"] },
    { id: "kok-tr1", type: "translate", question: "Translate to English: 'seichou'", answer: "growth" },
    { id: "kok-tr2", type: "translate", question: "How do you say 'to believe' in Japanese romaji?", answer: "shinjiru" },
    { id: "kok-tr3", type: "translate", question: "Translate to English: 'osore'", answer: "fear" },
    { id: "kok-tr4", type: "translate", question: "How do you say 'strength' in Japanese romaji?", answer: "tsuyosa" }
  ]
};

// ============================================================
// 🏔️ ADVENTURE — "Fuji-san no Bouken" (Mt. Fuji Adventure)
// ============================================================

export const fujisanNoBoukenEpisode: Episode = {
  id: "fuji-san-no-bouken",
  title: "Fuji-san no Bouken",
  description: "Two friends climb Mt. Fuji overnight to see the legendary sunrise from the summit",
  vocab: [
    { word: "yama", pronunciation: "YAH-mah", english: "mountain" },
    { word: "choujou", pronunciation: "CHOH-joh", english: "summit/peak" },
    { word: "hinode", pronunciation: "hee-NOH-deh", english: "sunrise" },
    { word: "noboru", pronunciation: "noh-BOH-roo", english: "to climb" },
    { word: "michi", pronunciation: "MEE-chee", english: "path/road" },
    { word: "kurai", pronunciation: "koo-RAI", english: "dark" },
    { word: "samui", pronunciation: "SAH-moo-ee", english: "cold" },
    { word: "tsuku", pronunciation: "TSOO-koo", english: "to arrive" },
    { word: "keshiki", pronunciation: "keh-SHEE-kee", english: "scenery/view" },
    { word: "tomodachi", pronunciation: "toh-moh-DAH-chee", english: "friend" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Night Climb",
      content: `They started climbing at midnight. Haru and his best **tomodachi** Sora stood at the Yoshida Trail fifth station, headlamps on, backpacks full of water and rice balls. Above them, **Fuji-san** disappeared into the darkness — the most famous **yama** in Japan, 3,776 meters of volcanic rock reaching toward the stars.

"**Noboru yo!**" Sora said, grinning in the dark. Let's climb!

**Michi** was a zigzag trail of volcanic gravel. Their headlamps cut narrow cones through the **kurai** night. Dozens of other climbers moved in a slow line ahead — tiny lights bobbing up the mountainside like fireflies.

The air was already **samui** at 2,300 meters. By the time they reached the sixth station, Haru's fingers were numb inside his gloves.

"**Samui ne,**" Sora said, breath making white clouds. It's cold, huh?

"**Samui kedo, ganbaru,**" Haru replied. Cold, but I'll persevere.

They climbed through station after station. Seventh. Eighth. Each one offered a bench, a vending machine with hot canned coffee, and a view of the lights of cities below — tiny golden clusters in the **kurai** darkness.

**Michi** got steeper. The gravel turned to rock. Haru's legs burned. His lungs ached in the thin air. Each step took twice the effort of the one before.

"**Choujou** is still two hours away," Sora said, checking the trail marker.

Two hours. Haru looked up. He couldn't see **choujou** — just **kurai** rock and stars. But somewhere up there, above the clouds, the summit waited. And beyond it, **hinode**. The sunrise from the top of Japan.

"**Ikimashou,**" Haru said. Let's go.`,
      translatedWords: [
        { word: "tomodachi", translation: "friend" },
        { word: "yama", translation: "mountain" },
        { word: "Noboru yo!", translation: "Let's climb!" },
        { word: "Michi", translation: "Path" },
        { word: "kurai", translation: "dark" },
        { word: "samui", translation: "cold" },
        { word: "Samui ne", translation: "It's cold, huh" },
        { word: "Samui kedo, ganbaru", translation: "Cold, but I'll persevere" },
        { word: "Choujou", translation: "Summit" },
        { word: "hinode", translation: "sunrise" },
        { word: "Ikimashou", translation: "Let's go" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — Sunrise at the Summit",
      content: `The final section was brutal. The trail turned into a scramble over volcanic boulders. Haru pulled himself up hand over hand, boots slipping on loose rock. **Michi** wasn't really a path anymore — it was just up.

The **samui** was intense. Wind cut through every layer of clothing. Haru couldn't feel his face. But he could see other climbers' headlamps above, clustering at what had to be **choujou**.

"**Mou sugu da!**" Sora shouted over the wind. Almost there!

One more boulder. One more step. And then — flat ground. The crater rim of **Fuji-san**. They had **tsuita**. They had arrived.

It was 4:47 AM. The eastern sky was changing color — deep black fading to navy, navy to dark purple, purple to the first hint of orange. **Hinode** was coming.

Hundreds of climbers stood shoulder to shoulder on **choujou**, all facing east. Everyone was **samui**. Everyone was exhausted. And everyone was smiling.

"**Mite!**" Sora pointed. Look!

The sun broke the horizon.

**Hinode** from the top of **Fuji-san** was unlike anything Haru had ever experienced. The light exploded — gold and orange and pink flooding across a sea of clouds below them. They were ABOVE the clouds. The entire world was beneath their feet. Other mountain peaks poked through the cloud sea like islands. The sky went from orange to gold to brilliant blue in minutes.

"**Keshiki** ga sugoi..." Haru whispered, tears in his eyes from the wind and the beauty and the exhaustion and the joy. The view is amazing...

"**Keshiki** ga saikou da,**" Sora agreed. The view is the best.

They stood there for twenty minutes, watching the light change. Haru took a photo, then put his phone away. Like his father always said — some **keshiki** you have to keep in your **kokoro**, not your camera.

The descent took five hours. By the time they reached the bottom, Haru's knees were jelly and his feet were blistered. But he was grinning.

"**Yatta!**" he said. We did it! "We **nobotta** Fuji-san!"

"**Tomodachi** to issho ni," Sora said, bumping his shoulder. Together with a friend.

Haru looked back up at the **yama** — now lit by full morning sun, perfect and white against the blue sky. He had climbed through **kurai** night and **samui** wind to reach **choujou**. And the **keshiki** at **hinode** had been worth every single step.`,
      translatedWords: [
        { word: "Michi", translation: "Path" },
        { word: "samui", translation: "cold" },
        { word: "choujou", translation: "summit" },
        { word: "Mou sugu da!", translation: "Almost there!" },
        { word: "tsuita", translation: "arrived" },
        { word: "Hinode", translation: "Sunrise" },
        { word: "Mite!", translation: "Look!" },
        { word: "Keshiki ga sugoi", translation: "The view is amazing" },
        { word: "Keshiki ga saikou da", translation: "The view is the best" },
        { word: "keshiki", translation: "scenery/view" },
        { word: "kokoro", translation: "heart" },
        { word: "Yatta!", translation: "We did it!" },
        { word: "nobotta", translation: "climbed" },
        { word: "Tomodachi to issho ni", translation: "Together with a friend" },
        { word: "yama", translation: "mountain" },
        { word: "kurai", translation: "dark" },
        { word: "hinode", translation: "sunrise" }
      ]
    }
  ],
  fullTargetLanguageStory: `Karera wa mayonaka ni nobori hajimemashita. Haru to shin'yuu no Sora wa Yoshida-guchi gogougome ni tatte imashita.

"Noboru yo!"

Michi wa kazangan no jari no jiguzagu deshita. Kurai yoru no naka, heddoranpu ga hosoi hikari wo terasimashita.

Kuuki wa sudeni samukatta. "Samui ne." "Samui kedo, ganbaru."

Eki goto ni nobotte ikimashita. Nanagougme. Hachigougme. Michi wa motto kyuu ni narimashita.

"Choujou wa mada ni-jikan."

Kurai iwa to hoshi shika mienakatta. Demo doko ka ue ni choujou ga matte ita. Soshite hinode.

"Ikimashou."

Saigo no sekushon wa totemo taihen deshita. Michi wa mohaya michi dewa nakatta.

"Mou sugu da!"

Soshite — taira na jimen. Fuji-san no kureeta no fuchi. Tsuita.

Gozen yoji yonjuu-nana-fun. Higashi no sora ga iro wo kaete ita. Hinode ga kuru.

Hyaku-nin no tozansha ga choujou ni narandeita.

"Mite!"

Taiyou ga suiheisen wo yaburimashita. Hinode wa kin to orenji to pinku no hikari ga kumo no umi wo ooimashita. Karera wa kumo no ue ni ita.

"Keshiki ga sugoi..."

"Keshiki ga saikou da."

Nijuppun-kan tatte, hikari no henka wo mimashita.

Gezan wa gojikan kakarimashita.

"Yatta! Fuji-san wo nobotta!"

"Tomodachi to issho ni."

Haru wa yama wo furikaeri mimashita. Kurai yoru to samui kaze wo koete choujou ni tsukimashita. Hinode no keshiki wa subete no ippo ni atai shimashita.`,
  quiz: [
    { id: "fuj-fb1", type: "fill-blank", question: "They climbed through the __________ (dark) night.", answer: "kurai" },
    { id: "fuj-fb2", type: "fill-blank", question: "They reached the __________ (summit) at 4:47 AM.", answer: "choujou" },
    { id: "fuj-fb3", type: "fill-blank", question: "The __________ (sunrise) from Fuji was incredible.", answer: "hinode" },
    { id: "fuj-fb4", type: "fill-blank", question: "The __________ (scenery/view) was the best.", answer: "keshiki" },
    { id: "fuj-mc1", type: "multiple-choice", question: "What does 'noboru' mean?", answer: "to climb", options: ["to notice", "to climb", "to nod", "to nominate"] },
    { id: "fuj-mc2", type: "multiple-choice", question: "What does 'samui' mean?", answer: "cold", options: ["sad", "same", "cold", "salty"] },
    { id: "fuj-mc3", type: "multiple-choice", question: "What does 'michi' mean?", answer: "path/road", options: ["match", "path/road", "much", "machine"] },
    { id: "fuj-mc4", type: "multiple-choice", question: "What does 'tomodachi' mean?", answer: "friend", options: ["tomorrow", "together", "friend", "tomato"] },
    { id: "fuj-tr1", type: "translate", question: "Translate to English: 'yama'", answer: "mountain" },
    { id: "fuj-tr2", type: "translate", question: "How do you say 'to arrive' in Japanese romaji?", answer: "tsuku" },
    { id: "fuj-tr3", type: "translate", question: "Translate to English: 'hinode'", answer: "sunrise" },
    { id: "fuj-tr4", type: "translate", question: "How do you say 'cold' in Japanese romaji?", answer: "samui" }
  ]
};

// ============================================================
// 🔍 MYSTERY — "Kyoto no Nazo" (The Kyoto Mystery)
// ============================================================

export const kyotoNoNazoEpisode: Episode = {
  id: "kyoto-no-nazo",
  title: "Kyoto no Nazo",
  description: "When temple artifacts go missing in Kyoto, two kids follow ancient clues to uncover the truth",
  vocab: [
    { word: "nazo", pronunciation: "NAH-zoh", english: "mystery/riddle" },
    { word: "tera", pronunciation: "TEH-rah", english: "temple" },
    { word: "hinto", pronunciation: "HIN-toh", english: "hint/clue" },
    { word: "sagasu", pronunciation: "sah-GAH-soo", english: "to search" },
    { word: "kakusu", pronunciation: "kah-KOO-soo", english: "to hide" },
    { word: "hannin", pronunciation: "HAN-nin", english: "culprit" },
    { word: "furui", pronunciation: "foo-ROO-ee", english: "old/ancient" },
    { word: "kagi", pronunciation: "KAH-gee", english: "key" },
    { word: "shinjitsu", pronunciation: "shin-JIT-soo", english: "truth" },
    { word: "kaiketsu", pronunciation: "kai-KET-soo", english: "solution" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Missing Artifacts",
      content: `Every autumn, the Golden Pavilion temple in Kyoto displayed its most precious artifacts — silk scrolls, gold-leaf fans, and a five-hundred-year-old tea set that had once belonged to a shogun. Thousands of visitors came to see them.

So when the tea set vanished on the second day of the exhibition, the entire city buzzed with the **nazo**.

Aiko and her cousin Daiki happened to be visiting the **tera** that morning. Aiko was twelve, observant, and never went anywhere without her notebook. Daiki was eleven, fearless, and never went anywhere without his camera.

"**Dare ka ga chawan wo nusumimashita,**" a temple monk was telling the police. Someone stole the tea bowls. The display case was empty — the glass hadn't been broken, but the lock was open. No alarm had triggered.

"How does someone steal from a **tera** without breaking anything?" Aiko murmured.

"With a **kagi**," Daiki said. A key. "They had a **kagi** to the display case."

Aiko was already writing in her notebook. "That means the **hannin** is someone with access. A staff member. A security guard. Or someone who stole a **kagi**."

She looked around the exhibition room. Something caught her eye — on the floor near the case, a small piece of paper. Very old, very thin. She picked it up. On it was a haiku — a poem — written in **furui** Japanese calligraphy.

"**Kore wa hinto da,**" she whispered. This is a clue.

"Where water sleeps beneath the stone, the keeper's gift awaits alone."

Aiko looked at Daiki. "This isn't a modern thief. Someone left a riddle. Let's **sagasu**."`,
      translatedWords: [
        { word: "nazo", translation: "mystery/riddle" },
        { word: "tera", translation: "temple" },
        { word: "Dare ka ga chawan wo nusumimashita", translation: "Someone stole the tea bowls" },
        { word: "kagi", translation: "key" },
        { word: "hannin", translation: "culprit" },
        { word: "furui", translation: "old/ancient" },
        { word: "Kore wa hinto da", translation: "This is a clue" },
        { word: "sagasu", translation: "to search" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — Beneath the Stone",
      content: `"Where water sleeps beneath the stone." Aiko read the haiku again. She knew this **tera** well — her family visited every year. Water that sleeps...

"The koi pond!" Daiki said. "Behind the pavilion. It's been drained for winter maintenance."

They hurried around the Golden Pavilion to the rock garden at the back. The koi pond was indeed drained — just smooth river stones covering the bottom. But in the center, one stone was different. Larger. Flatter. It had a small carved symbol on its surface — a chrysanthemum.

"**Furui** carving," Aiko said. "This stone has been here for centuries."

Together they lifted it. Underneath: a stone compartment, dry and clean. Inside it — the tea set. All five pieces, wrapped carefully in silk, exactly as they had been in the display case.

"**Mitsuketa!**" Daiki shouted. Found it!

But Aiko was looking at something else. A note, folded beside the tea set. New paper this time. She opened it.

"I am the **hannin**, but I am not a thief. I am the temple's night watchman, Tanaka-san. For thirty years I have guarded these artifacts. Yesterday, I discovered that the new security company was planning to move them to a private collector's vault — sold without the temple's knowledge. I **kakushita** — hid — the tea set in this **furui** place to protect it. Please give this letter to the head priest. The **shinjitsu** must be known."

Aiko and Daiki stared at each other.

"The **hannin** was trying to **mamoru** the artifacts," Aiko said. Protect them. "Not steal them."

They brought the tea set and the letter to the head priest. An investigation followed. Tanaka-san was right — the security company had been secretly arranging a sale. The contract was canceled. The tea set was returned to its rightful place.

The head priest thanked Aiko and Daiki personally. "You **sagashita** — searched — for the **shinjitsu** when everyone else assumed the worst. That is wisdom."

"**Nazo** wa **kaiketsu** shimashita,**" Aiko wrote in her notebook. The mystery is solved.

But the real **kaiketsu** wasn't finding the tea set. It was understanding that sometimes the **hannin** is the hero, and the **shinjitsu** is more complicated than it seems.`,
      translatedWords: [
        { word: "tera", translation: "temple" },
        { word: "Furui", translation: "Old/Ancient" },
        { word: "Mitsuketa!", translation: "Found it!" },
        { word: "hannin", translation: "culprit" },
        { word: "kakushita", translation: "hid" },
        { word: "furui", translation: "old/ancient" },
        { word: "shinjitsu", translation: "truth" },
        { word: "mamoru", translation: "to protect" },
        { word: "sagashita", translation: "searched" },
        { word: "Nazo", translation: "Mystery" },
        { word: "kaiketsu", translation: "solution" }
      ]
    }
  ],
  fullTargetLanguageStory: `Maiaki, Kinkakuji wa ichiban taisetsu na bijutsuhin wo tenji shimashita. Chawan ga ni-nichi me ni kiemashita. Kyouto zentai ga nazo de mochikirimashita.

Aiko to itoko no Daiki wa sono asa tera ni ite imashita.

"Dare ka ga chawan wo nusumimashita." Tenjikesu wa akete imashita. Garasu wa warete inakatta. Aramu mo naranakatta.

"Kagi ga atta nda," to Daiki. "Hannin wa akusesu dekiru hito."

Aiko wa kesu no chikaku de furui kami wo mitsukemashita. Haiku ga kaite atta.

"Kore wa hinto da."

"Mizu ga ishi no shita de nemuru tokoro, mamoru mono no okurimono ga hitori de matsu."

"Koi no ike! Fuyu no seibi de mizu ga nakunatte iru."

Ike no soko ni, hitotsu no ishi ga chigatte ita. Ookikute taira de, kiku no chokoku ga atta. Furui chokoku.

Ishi wo mochiagemasita. Shita ni — chawan ga atta. Kinu ni tsutsummarete.

"Mitsuketa!"

Tegami ga chawan no soba ni atta.

"Watashi wa hannin desu ga, dorobou dewa arimasen. Watashi wa tera no yaei, Tanaka desu. Sanjuu-nen kan bijutsuhin wo mamotte kimashita. Kinou, atarashii keibi gaisha ga bijutsuhin wo kojin no korekutaa ni urou to shite iru koto wo hakken shimashita. Chawan wo kono furui basho ni kakushimashita. Shinjitsu wo shirasete kudasai."

"Hannin wa bijutsuhin wo mamoru toshite ita."

Chawan to tegami wo juushoku ni todokemashita. Chousa ga okonawaremashita. Tanaka-san wa tadashikatta. Keiyaku wa kaiyaku saremashita.

"Shinjitsu wo sagashimashita."

"Nazo wa kaiketsu shimashita."

Hontou no kaiketsu wa chawan wo mitsukeru koto dewa nakatta. Hannin ga jitsu wa eiyu de aru koto wo rikai suru koto datta.`,
  quiz: [
    { id: "kyo-fb1", type: "fill-blank", question: "The missing tea set was a __________ (mystery) for all of Kyoto.", answer: "nazo" },
    { id: "kyo-fb2", type: "fill-blank", question: "They found a __________ (clue) written as a haiku poem.", answer: "hinto" },
    { id: "kyo-fb3", type: "fill-blank", question: "The artifacts were __________ (hidden) under a stone.", answer: "kakushita" },
    { id: "kyo-fb4", type: "fill-blank", question: "The night watchman wanted to protect the __________ (truth).", answer: "shinjitsu" },
    { id: "kyo-mc1", type: "multiple-choice", question: "What does 'tera' mean?", answer: "temple", options: ["tower", "temple", "tree", "tent"] },
    { id: "kyo-mc2", type: "multiple-choice", question: "What does 'sagasu' mean?", answer: "to search", options: ["to sit", "to search", "to sing", "to sleep"] },
    { id: "kyo-mc3", type: "multiple-choice", question: "What does 'furui' mean?", answer: "old/ancient", options: ["full", "funny", "old/ancient", "far"] },
    { id: "kyo-mc4", type: "multiple-choice", question: "What does 'kagi' mean?", answer: "key", options: ["cage", "key", "king", "kite"] },
    { id: "kyo-tr1", type: "translate", question: "Translate to English: 'hannin'", answer: "culprit" },
    { id: "kyo-tr2", type: "translate", question: "How do you say 'solution' in Japanese romaji?", answer: "kaiketsu" },
    { id: "kyo-tr3", type: "translate", question: "Translate to English: 'nazo'", answer: "mystery/riddle" },
    { id: "kyo-tr4", type: "translate", question: "How do you say 'to hide' in Japanese romaji?", answer: "kakusu" }
  ]
};

// ============================================================
// NEW SERIES EXPORTS (History, Science, Self-Help, Adventure, Mystery)
// ============================================================

export const historySeries: Series = {
  id: 'jp-samurai-no-michi',
  title: 'Samurai no Michi',
  description: 'Discover the way of the samurai through an ancient family scroll',
  category: 'history',
  language: 'japanese' as any,
  episodes: [samuraiNoMichiEpisode]
};

export const scienceSeriesNew: Series = {
  id: 'jp-kagaku-no-chikara',
  title: 'Kagaku no Chikara',
  description: 'A girl builds a weather station and predicts a typhoon that saves her community',
  category: 'science',
  language: 'japanese' as any,
  episodes: [kagakuNoChikaraEpisode]
};

export const selfHelpSeries: Series = {
  id: 'jp-kokoro-no-tsuyosa',
  title: 'Kokoro no Tsuyosa',
  description: 'A shy boy discovers inner strength through martial arts',
  category: 'self-help',
  language: 'japanese' as any,
  episodes: [kokoroNoTsuyosaEpisode]
};

export const adventureSeries: Series = {
  id: 'jp-fuji-san-no-bouken',
  title: 'Fuji-san no Bouken',
  description: 'Two friends climb Mt. Fuji overnight to see the legendary summit sunrise',
  category: 'adventure',
  language: 'japanese' as any,
  episodes: [fujisanNoBoukenEpisode]
};

export const mysterySeries: Series = {
  id: 'jp-kyoto-no-nazo',
  title: 'Kyoto no Nazo',
  description: 'Temple artifacts go missing in Kyoto and two kids follow ancient clues',
  category: 'mystery',
  language: 'japanese' as any,
  episodes: [kyotoNoNazoEpisode]
};


// ============================================================
// 💼 BUSINESS — "レモネードのゆめ" (The Lemonade Dream)
// ============================================================

export const lemonadeBusinessEpisode: Episode = {
  id: "remonedo-no-yume",
  title: "レモネードのゆめ",
  description: "A ten-year-old boy starts a lemonade stand and learns what it takes to run a real business",
  vocab: [
    { word: "ビジネス", pronunciation: "bi-ji-ne-su", english: "business" },
    { word: "売る (うる)", pronunciation: "u-ru", english: "to sell" },
    { word: "お客さん (おきゃくさん)", pronunciation: "o-kya-ku-san", english: "the customer" },
    { word: "お金 (おかね)", pronunciation: "o-ka-ne", english: "money" },
    { word: "値段 (ねだん)", pronunciation: "ne-dan", english: "the price" },
    { word: "利益 (りえき)", pronunciation: "ri-e-ki", english: "the profit" },
    { word: "貯金する (ちょきんする)", pronunciation: "cho-kin su-ru", english: "to save (money)" },
    { word: "計画 (けいかく)", pronunciation: "ke-i-ka-ku", english: "the plan" },
    { word: "目標 (もくひょう)", pronunciation: "mo-ku-hyō", english: "the goal" },
    { word: "成功 (せいこう)", pronunciation: "se-i-kō", english: "success" }
  ],
  sections: [
    {
      id: "part1",
      title: "Part 1 — The Big Idea",
      content: `Haruto stared at the broken skateboard in the hallway. A new one cost four thousand yen — money he definitely didn't have. But Haruto had **計画** (a plan).

"I'm going to start **ビジネス**," he announced at dinner. His older sister Yuki nearly dropped her chopsticks.

"You're ten," she said.

"So? **目標があるんだ。**" I have a goal. He held up a drawing of a lemonade stand with a big sign that read "ハルトのレモネード" — Haruto's Lemonade.

His mom smiled. "How much will you charge?"

Haruto had thought about this. "**値段** will be one hundred yen per cup. Lemons cost about twenty yen each. Sugar, water, cups — maybe another thirty yen. That means **利益** is about fifty yen per cup."

"That's... actually not bad," Yuki admitted.

The next morning, Haruto used his allowance to buy supplies. He set up a small table outside their apartment building with a bright yellow sign. He squeezed lemons until his hands were sore and mixed the lemonade in a big pitcher.

His first **お客さん** was Tanaka-san from the third floor. "**いくらですか？**" How much is it?

"**百円です,**" Haruto said proudly. One hundred yen.

Tanaka-san took a sip and smiled. "**おいしい！** Worth every yen."

By the end of the day, Haruto had sold twelve cups. He counted **お金** carefully — twelve hundred yen. He subtracted the cost of supplies: four hundred and eighty yen.

"**利益** is seven hundred and twenty yen," he whispered. It wasn't four thousand yen. Not yet. But the **ビジネス** had begun.`,
      translatedWords: [
        { word: "計画", translation: "a plan" },
        { word: "ビジネス", translation: "business" },
        { word: "目標があるんだ", translation: "I have a goal" },
        { word: "値段", translation: "The price" },
        { word: "利益", translation: "the profit" },
        { word: "お客さん", translation: "customer" },
        { word: "いくらですか？", translation: "How much is it?" },
        { word: "百円です", translation: "It's one hundred yen" },
        { word: "おいしい！", translation: "Delicious!" },
        { word: "お金", translation: "money" }
      ]
    },
    {
      id: "part2",
      title: "Part 2 — Growing Pains",
      content: `By Friday, word had spread. Haruto was **売っている** (selling) lemonade every afternoon after school, and **お客さんたち** kept coming. But there was a problem — he was running out of cups before he ran out of customers.

"You need to think bigger," Yuki said, watching him turn people away. "**もっといい計画が必要だよ。**" You need a better plan.

Haruto didn't want to admit it, but she was right. That night, he sat at his desk and wrote down numbers. If he bought cups in bulk, each cup would cost five yen instead of fifteen. That meant more **利益** per cup.

"Mom, can you take me to the big store?" he asked.

She raised an eyebrow. "That's a business expense. Are you sure?"

"**投資だよ,**" Haruto said. It's an investment. He'd heard that word on a TV show about **ビジネス**.

He spent eight hundred yen on two hundred cups and a big bag of sugar. It felt scary spending **お金** to make **お金**, but **計画** made sense on paper.

On Saturday, he added a new flavor — strawberry — and raised **値段** to one hundred fifty yen. He made a new sign: "二つの味！" Two flavors!

The line stretched down the sidewalk. Kids from school came. Parents came. Even Yuki's friends bought cups and posted photos online.

By Sunday night, Haruto counted everything. He'd sold sixty-eight cups over the weekend. After all costs, **利益** was four thousand two hundred yen.

He stared at the money. **目標** was four thousand yen for a skateboard. He'd passed it.

"**やった！**" he shouted. I did it! He ran to the living room waving the bills.

His mom hugged him. "**すごいね。** But what about the **ビジネス**? Are you going to stop?"

Haruto looked at the money, then at his lemonade supplies still stacked in the kitchen. He'd worked hard. People loved his lemonade. Why stop at one skateboard?

"No," he said, grinning. "This is just the beginning. **成功** is just getting started."

Yuki rolled her eyes but smiled. "Fine. But I want ten percent for marketing advice."

"Five percent," Haruto shot back.

"Deal."

Haruto's **ビジネス** was here to stay.`,
      translatedWords: [
        { word: "売っている", translation: "selling" },
        { word: "お客さんたち", translation: "the customers" },
        { word: "もっといい計画が必要だよ", translation: "You need a better plan" },
        { word: "利益", translation: "profit" },
        { word: "投資だよ", translation: "It's an investment" },
        { word: "ビジネス", translation: "business" },
        { word: "お金", translation: "money" },
        { word: "計画", translation: "the plan" },
        { word: "値段", translation: "the price" },
        { word: "目標", translation: "The goal" },
        { word: "やった！", translation: "I did it!" },
        { word: "すごいね", translation: "That's amazing" },
        { word: "成功", translation: "success" }
      ]
    }
  ],
  fullTargetLanguageStory: `ハルトは廊下にある壊れたスケートボードを見つめていた。新しいのは四千円もする。絶対に持っていないお金だ。でもハルトには計画があった。

「ビジネスを始めるよ」と夕食で宣言した。姉のユキは箸を落としそうになった。

「あんた十歳でしょ」と彼女は言った。

「だから何？目標があるんだ」彼は「ハルトのレモネード」と大きく書かれた看板付きのレモネードスタンドの絵を見せた。

お母さんは微笑んだ。「いくらにするの？」

ハルトはこれについて考えていた。「値段は一杯百円。レモンは一個約二十円。砂糖、水、コップで約三十円。つまり利益は一杯あたり約五十円だよ。」

「それは...実は悪くないね」とユキは認めた。

翌朝、ハルトはお小遣いで材料を買った。アパートの前に小さなテーブルを置き、明るい黄色の看板を立てた。手が痛くなるまでレモンを絞り、大きなピッチャーでレモネードを作った。

最初のお客さんは三階の田中さんだった。「いくらですか？」

「百円です」とハルトは誇らしげに言った。

田中さんは一口飲んで微笑んだ。「おいしい！百円の価値があるね。」

一日の終わりまでに、ハルトは十二杯売った。お金を丁寧に数えた——千二百円。材料費を引いた：四百八十円。

「利益は七百二十円」と彼はつぶやいた。四千円じゃない。まだ。でもビジネスは始まった。

金曜日までに、噂は広まっていた。ハルトは毎日放課後にレモネードを売っていて、お客さんたちは来続けた。でも問題があった——お客さんがいなくなる前にコップがなくなってしまうのだ。

「もっと大きく考えないと」とユキは人を断る彼を見ながら言った。「もっといい計画が必要だよ。」

ハルトは認めたくなかったが、彼女は正しかった。その夜、机に座って数字を書いた。まとめ買いすればコップ一個が十五円じゃなくて五円になる。つまり一杯あたりの利益が増える。

「お母さん、大きいお店に連れて行ってくれる？」と聞いた。

お母さんは眉を上げた。「それはビジネスの経費よ。いいの？」

「投資だよ」とハルトは言った。

八百円で二百個のコップと大きな砂糖の袋を買った。お金を使ってお金を稼ぐのは怖かったが、計画は紙の上では理にかなっていた。

土曜日、新しい味——いちご——を追加し、値段を百五十円に上げた。新しい看板を作った：「二つの味！」

列は歩道に沿って伸びた。学校の子供たちが来た。親たちが来た。ユキの友達まで買って写真をネットに載せた。

日曜の夜、ハルトは全部数えた。週末に六十八杯売った。全ての費用の後、利益は四千二百円だった。

お金を見つめた。目標はスケートボードの四千円。超えていた。

「やった！」と叫んだ。お札を振りながらリビングに走った。

お母さんはハルトを抱きしめた。「すごいね。でもビジネスはどうするの？やめるの？」

ハルトはお金を見て、それからキッチンにまだ積んであるレモネードの材料を見た。一生懸命働いた。みんなレモネードが大好きだった。なぜスケートボード一つでやめるんだ？

「やめない」と彼はにっこり笑って言った。「これはまだ始まりだよ。成功はこれからだ。」

ユキは目をくるりとさせたが微笑んだ。「わかった。でもマーケティングのアドバイス料として十パーセントもらうからね。」

「五パーセント」とハルトは返した。

「それで手を打とう。」

ハルトのビジネスはここに留まることになった。`,
  quiz: [
    // Fill in the blank (4)
    { id: "bus-fb1", type: "fill-blank", question: "\"Business\" in Japanese is ___", answer: "ビジネス" },
    { id: "bus-fb2", type: "fill-blank", question: "\"The customer\" in Japanese is ___", answer: "お客さん" },
    { id: "bus-fb3", type: "fill-blank", question: "\"The profit\" in Japanese is ___", answer: "利益" },
    { id: "bus-fb4", type: "fill-blank", question: "\"To save money\" in Japanese is ___", answer: "貯金する" },

    // Multiple choice (4)
    {
      id: "bus-mc1",
      type: "multiple-choice",
      question: "What does '売る' mean?",
      answer: "to sell",
      options: ["to buy", "to sell", "to save", "to spend"]
    },
    {
      id: "bus-mc2",
      type: "multiple-choice",
      question: "What does '値段' mean?",
      answer: "the price",
      options: ["the value", "the price", "the profit", "the plan"]
    },
    {
      id: "bus-mc3",
      type: "multiple-choice",
      question: "What does '目標' mean?",
      answer: "the goal",
      options: ["the eye", "the mark", "the goal", "the model"]
    },
    {
      id: "bus-mc4",
      type: "multiple-choice",
      question: "What does '成功' mean?",
      answer: "success",
      options: ["achievement", "success", "growth", "effort"]
    },

    // Translate (4)
    { id: "bus-tr1", type: "translate", question: "Translate to Japanese: 'money'", answer: "お金" },
    { id: "bus-tr2", type: "translate", question: "Translate to English: 'ビジネス'", answer: "business" },
    { id: "bus-tr3", type: "translate", question: "Translate to Japanese: 'the plan'", answer: "計画" },
    { id: "bus-tr4", type: "translate", question: "Translate to English: '貯金する'", answer: "to save (money)" }
  ]
};

export const businessSeries: Series = {
  id: "remonedo-no-yume",
  title: "レモネードのゆめ",
  description: "A ten-year-old boy starts a lemonade stand and learns what it takes to run a real business",
  category: "business",
  language: 'japanese' as any,
  episodes: [lemonadeBusinessEpisode]
};


// 📦 ALL SERIES EXPORT
// ============================================================

export const allNewJapaneseSeries: Series[] = [
  sportsSeries,
  techSeries,
  futureSeries,
  creativeSeries,
  historySeries,
  scienceSeriesNew,
  selfHelpSeries,
  adventureSeries,
  mysterySeries,
  businessSeries,
];
