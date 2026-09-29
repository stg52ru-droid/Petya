export type Swatch = { name: string; hex: string; hint: string };

export type PageInfo = {
  id: number;
  title: string;
  titleEn: string;
  episode: string;
  blurb: string;
  blurbEn: string;
  tip: string;
  finds: string[];
};

export const PAGES: PageInfo[] = [
  {
    id: 1,
    title: "Обложка",
    titleEn: "Cover",
    episode: "Приключения Пети и Волка",
    blurb:
      "Петербургский школьник Петя и маленький волшебный Волк — напарники, которые решают дела сказочных существ. Портал Волка прячется в тесных местах: шкафах, ящиках и дуплах.",
    blurbEn:
      "Petersburg schoolboy Petya and a pocket-sized magic Wolf solve problems for fairy-tale creatures. The Wolf’s portal hides in tight spaces: wardrobes, drawers and hollow trees.",
    tip: "Обложку тоже можно раскрасить: буквы, портал, город и кружки-подсказки.",
    finds: ["7 искр портала", "груша Волка", "шпиль Петропавловки"],
  },
  {
    id: 2,
    title: "Встреча на переходе",
    titleEn: "Meeting at the crossing",
    episode: "Дело о нечаянном проклятии",
    blurb:
      "По дороге из школы Петя принял Волка за говорящую собаку: лапа застряла у решётки на переходе. Выручило жидкое мыло из школьного рюкзака.",
    blurbEn:
      "On the way home from school Petya mistook the Wolf for a talking dog with a paw stuck in a crossing grate. A bottle of liquid soap saved the day.",
    tip: "Волк размером с собаку: серая шерсть, тёмная морда и лапы, светлое брюшко. Одежды нет.",
    finds: ["бутылочка мыла", "решётка", "груша", "рюкзак"],
  },
  {
    id: 3,
    title: "Шкаф-портал",
    titleEn: "The wardrobe portal",
    episode: "Перевалочная база Волка",
    blurb:
      "Волк устроил перевалочную базу в шкафу Пети. Оттуда он выходит по делам — и обязательно должен довести каждое дело до конца. Поэтому серии и называются «Дело…».",
    blurbEn:
      "The Wolf keeps a waystation in Petya’s wardrobe. He can only travel when he is helping someone, and he must finish every case — which is why the episodes are called “The Case of…”.",
    tip: "Пижама Пети — в крапинку. В портале спрятаны семь звёзд: раскрась каждую своим цветом.",
    finds: ["7 звёзд", "ноутбук", "отпугиватель привидений", "чернослив"],
  },
  {
    id: 4,
    title: "Семья Семенковых",
    titleEn: "The Semenkov family",
    episode: "Квартира в Петербурге",
    blurb:
      "Петя живёт с мамой Варей, папой Витей и дедушкой Николаем Семёновичем. Дедушка — настоящий глава семьи: бодрый, хитрый и всегда готов к приключению, даже если не сразу понимает, что гости внука — сказочные.",
    blurbEn:
      "Petya lives with mom Varya, dad Vitya and grandpa Nikolai Semyonovich. Grandpa is the real head of the family: spry, sly, and ready for anything — even when he doesn’t realise the guests are fairy-tale folk.",
    tip: "У мамы высокая ярко-оранжевая причёска, голубое платье и горчичные туфли. Бороду дедушки создатели специально подстригли, чтобы его не путали с волшебником.",
    finds: ["шахматы", "самовар", "ящик-портал", "очки папы"],
  },
  {
    id: 5,
    title: "Дело Бабы Яги",
    titleEn: "Baba Yaga’s case",
    episode: "Дело Бабы Яги",
    blurb:
      "Баба Яга путает зелья и летает в ступе. Её дочь-чиновница хочет ту же ступу вместо служебной мигалки. А дедушка, отведав волшебных пирожков, отращивает маленькие рожки.",
    blurbEn:
      "Baba Yaga mixes up her potions and flies a mortar. Her daughter, a city official, wants that mortar to replace her lost flashing light. Grandpa samples the magic pies and sprouts tiny horns.",
    tip: "Пирожки волшебные — можно раскрасить каждый по-своему. Рожки дедушки небольшие и смешные, не страшные.",
    finds: ["ступа и пест", "избушка на курьих ножках", "мигалка", "5 пирожков"],
  },
  {
    id: 6,
    title: "Кощей на роликах",
    titleEn: "Koschei on skates",
    episode: "Дело Кощея",
    blurb:
      "Кощей здесь не злодей, а рокер и отличный музыкант. Длинные седые волосы, корона с красным кристаллом, короткая чёрная куртка, пояс с черепом и шипастые браслеты. С дедушкой он катается на роликах.",
    blurbEn:
      "This Koschei is not a villain — he’s a rocker and a fine musician. Long gray hair, a crown with a red crystal, a short black jacket, a skull belt and spiked bracelets. He and grandpa go roller-skating.",
    tip: "Кожу Кощея в мультике делают бледно-зелёной, куртку — чёрной, корону — золотой. Рядом лежат сундук, утка, яйцо и игла: классическая «смерть Кощея».",
    finds: ["гитара", "череп на поясе", "кристалл короны", "игла в яйце"],
  },
  {
    id: 7,
    title: "Три головы Горыныча",
    titleEn: "Gorynych’s three heads",
    episode: "Дело Змея Горыныча",
    blurb:
      "Зелёный трёхголовый дракон. Средняя голова моложе остальных и никак не выучит чтение — пока Петя не приносит букварь, а дедушка спокойно наливает чай. К концу дела головы играют на инструментах.",
    blurbEn:
      "A green three-headed dragon. The middle head is younger than the others and cannot read — until Petya brings a primer and grandpa calmly pours tea. By the end, the heads are playing instruments.",
    tip: "Среднюю голову сделай светлее и добрее. Две боковые — постарше: одна ворчит, другая дремлет.",
    finds: ["букварь", "балалайка", "барабан", "крылья"],
  },
  {
    id: 8,
    title: "Дело Деда Мороза",
    titleEn: "Father Frost’s case",
    episode: "Дело Деда Мороза",
    blurb:
      "Дед Мороз потерял память и вспоминает себя по кино. Снегурочка тает раньше срока, и Петя везёт её на тележке мороженщицы — почти как в старом мультфильме «Дед Мороз и лето».",
    blurbEn:
      "Father Frost has lost his memory and tries to recall himself through movies. Snegurochka starts melting, so Petya rushes her along on an ice-cream cart — a nod to the classic cartoon Father Frost and Summer.",
    tip: "Борода Деда Мороза длинная — в отличие от короткой бороды дедушки Пети. Шубу можно оставить красной, мех белым, а каждую снежинку раскрасить отдельно.",
    finds: ["киноплёнка", "тележка с мороженым", "кокошник", "лужа"],
  },
  {
    id: 9,
    title: "Лукоморье",
    titleEn: "Lukomorye",
    episode: "Дуб, кот и другие миры",
    blurb:
      "В сериале дуб у Лукоморья становится площадкой экспериментального театра учёного кота. Рядом — русалка, водяной, царевна-лягушка, колобок, гном Сильвестр и жар-птица.",
    blurbEn:
      "In the series the oak at Lukomorye becomes an experimental theatre run by the learned cat. Nearby: a mermaid, the vodyanoy, the Frog Princess, Kolobok, gnome Sylvester and the Firebird.",
    tip: "Хвост жар-птицы — главное место для узоров. Каждое «глазко» пера можно раскрасить по-разному.",
    finds: ["золотая цепь", "театральная маска", "фонарь гнома", "кувшинка"],
  },
  {
    id: 10,
    title: "Парад на Неве",
    titleEn: "Parade on the Neva",
    episode: "Все дела сразу",
    blurb:
      "Финал раскраски: Петя, Волк и вся компания идут по набережной. Над Невой — разведённый мост, шпиль Петропавловской крепости и корабль. Раскрась город так, будто это вечерний Петербург.",
    blurbEn:
      "Finale: Petya, the Wolf and the whole company stroll the embankment. Above the Neva — an open bridge, the Peter and Paul spire and a ship. Color the city like an evening in Petersburg.",
    tip: "Сначала раскрась героев их «мультиковыми» цветами, а дома, воду и небо — как захочешь.",
    finds: ["Медный всадник", "разводной мост", "ростральная колонна", "груша"],
  },
];

export const SHOW_PALETTE: Swatch[] = [
  { name: "Кофта Пети", hex: "#1e4b86", hint: "тёмно-синяя, надета небрежно" },
  { name: "Рубашка", hex: "#f7f9fc", hint: "белая, воротник наружу" },
  { name: "Штаны Пети", hex: "#8ec8ea", hint: "светло-голубые" },
  { name: "Ботинки", hex: "#242424", hint: "чёрные" },
  { name: "Волосы Пети", hex: "#2b211c", hint: "тёмные, взъерошенные" },
  { name: "Шерсть Волка", hex: "#a7b0ba", hint: "серая" },
  { name: "Морда и лапы", hex: "#5c6770", hint: "темнее шерсти" },
  { name: "Брюшко", hex: "#f3efe4", hint: "светлое" },
  { name: "Волосы мамы", hex: "#ff7a18", hint: "ярко-оранжевые, высокая причёска" },
  { name: "Платье мамы", hex: "#b7def3", hint: "длинное, светло-голубое" },
  { name: "Туфли мамы", hex: "#d4a017", hint: "горчичные" },
  { name: "Кощей", hex: "#d5e6c8", hint: "бледно-зелёная кожа, чёрная куртка" },
  { name: "Горыныч", hex: "#3e8f55", hint: "зелёный, средняя голова светлее" },
  { name: "Дед Мороз", hex: "#c0392b", hint: "красная шуба, белый мех" },
];
