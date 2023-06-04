import { numbers, spanOfTime } from "./numbers";
import { dates, daysOfTheWeek } from "./dates";

const chapter1 = [
  {
    kana: "わたし",
    kanji: "私",
    romaji: "watashi",
    english: "I",
  },
  {
    kana: "あなた",
    kanji: "貴方",
    romaji: "anata",
    english: "you",
  },
  {
    kana: "かいしゃいん",
    kanji: "会社員",
    romaji: "kaishain",
    english: ["company employee", "employee"],
  },
  {
    kana: "しゃいん",
    kanji: "社員",
    romaji: "shain",
    english: "employee",
  },
  {
    kana: "しゃちょう",
    kanji: "社長",
    romaji: "shachou",
    english: ["company president", "president"],
  },
  {
    kana: "ぶちょう",
    kanji: "部長",
    romaji: "buchou",
    english: [
      "department manager",
      "manager",
      "department manager",
      "department head",
    ],
  },
  {
    kana: "かちょう",
    kanji: "課長",
    romaji: "kachou",
    english: ["section chief", "supervisor", "section head"],
  },
  {
    kana: "おとこ",
    kanji: "男",
    romaji: "otoko",
    english: ["man", "male"],
  },
  {
    kana: "おんな",
    kanji: "女",
    romaji: "onna",
    english: ["woman", "female"],
  },
  {
    kana: "せんせい",
    kanji: "先生",
    romaji: "sensei",
    english: "teacher",
  },
  {
    kana: "がくせい",
    kanji: "学生",
    romaji: "gakusei",
    english: "student",
  },
  {
    kana: "にほんじん",
    kanji: "日本人",
    romaji: "nihonjin",
    english: "Japanese (Person)",
  },
  {
    kana: "あめりかじん",
    kanji: "アメリカ人",
    romaji: "amerikajin",
    english: "American (Person)",
  },
  {
    kana: "フィリピンじん",
    kanji: "フィリピン人",
    romaji: "firipinjin",
    english: "Filipino (Person)",
  },
  {
    kana: "みんな / みなさん",
    kanji: "皆 / 皆さん",
    romaji: ["minna", "minasan"],
    english: ["everyone", "everybody"],
  },
  {
    kana: "ともだち",
    kanji: "友達",
    romaji: "tomodachi",
    english: "friend",
  },
  {
    kana: "ひと / かた",
    kanji: "人 / 方",
    romaji: ["hito", "kata"],
    english: "person",
  },
  {
    kana: "かぞく",
    kanji: "家族",
    romaji: "kazoku",
    english: "family",
  },
  {
    kana: "えんじにあ",
    kanji: "エンジニア",
    romaji: "enjinia",
    english: "engineer",
  },
  {
    kana: "けんしゅうせい",
    kanji: "研修生",
    romaji: "kenshuusei",
    english: "trainee",
  },
  {
    kana: "(お)なまえ",
    kanji: "(お)名前",
    romaji: ["onamae", "namae"],
    english: "name",
  },
  {
    kana: "かいしゃ",
    kanji: "会社",
    romaji: "kaisha",
    english: "company",
  },
  {
    kana: "オフィス",
    kanji: "オフィス",
    romaji: "ofisu",
    english: "office",
  },
  {
    kana: "がっこう",
    kanji: "学校",
    romaji: "gakkou",
    english: "school",
  },
  {
    kana: "だいがく",
    kanji: "大学",
    romaji: "daigaku",
    english: "university",
  },
  {
    kana: "うち / いえ",
    kanji: "家",
    romaji: ["uchi", "ie"],
    english: ["house", "home"],
  },
  {
    kana: "へや",
    kanji: "部屋",
    romaji: "heya",
    english: "room",
  },
  {
    kana: "ちゅうしゃじょう",
    kanji: "駐車場",
    romaji: "chuushajou",
    english: "parking lot",
  },
  {
    kana: "おてあらい",
    kanji: "お手洗い",
    romaji: "otearai",
    english: ["bathroom", "restroom", "washroom"],
  },
  {
    kana: "コンピュータ / パソコン",
    kanji: "コンピュータ / パソコン",
    romaji: ["kompyuta", "pasokon"],
    english: ["computer", "personal computer"],
  },
  {
    kana: "カメラ",
    kanji: "カメラ",
    romaji: "kamera",
    english: "camera",
  },
  {
    kana: "ノート",
    kanji: "ノート",
    romaji: "noto",
    english: "notebook",
  },
  {
    kana: "スリッパ",
    kanji: "スリッパ",
    romaji: "surippa",
    english: "slipper",
  },
  {
    kana: "くるま",
    kanji: "車",
    romaji: ["jidousha", "kuruma"],
    english: "car",
  },
  {
    kana: "ほん",
    kanji: "本",
    romaji: "hon",
    english: "book",
  },
  {
    kana: "くに",
    kanji: "国",
    romaji: "kuni",
    english: "country",
  },
  {
    kana: "ことば",
    kanji: "言葉",
    romaji: "kotoba",
    english: ["language", "word"],
  },
];

const family = [
  {
    kana: "ちち",
    kanji: "父",
    romaji: "chichi",
    english: "my father",
  },
  {
    kana: "はは",
    kanji: "母",
    romaji: "haha",
    english: "my mother",
  },
  {
    kana: "あに",
    kanji: "兄",
    romaji: "ani",
    english: "my older brother",
  },
  {
    kana: "あね",
    kanji: "姉",
    romaji: "ane",
    english: "my older sister",
  },
  {
    kana: "おとうと",
    kanji: "弟",
    romaji: "otouto",
    english: "my younger brother",
  },
  {
    kana: "いもうと",
    kanji: "妹",
    romaji: "imouto",
    english: "my younger sister",
  },
  {
    kana: "そふ",
    kanji: "祖父",
    romaji: "sofu",
    english: "my grandfather",
  },
  {
    kana: "そぼ",
    kanji: "祖母",
    romaji: "sobo",
    english: "my grandmother",
  },
  {
    kana: "しゅじん / おっと",
    kanji: "主人 / 夫",
    romaji: ["shujin", "otto"],
    english: "my husband",
  },
  {
    kana: "かない / つま",
    kanji: "家内 / 妻",
    romaji: ["kanai", "tsuma"],
    english: "my wife",
  },
  {
    kana: "おとうさん",
    kanji: "お父さん",
    romaji: "otousan",
    english: "father",
  },
  {
    kana: "おかあさん",
    kanji: "お母さん",
    romaji: "okaasan",
    english: "mother",
  },
  {
    kana: "おにいさん",
    kanji: "お兄さん",
    romaji: "oniisan",
    english: "older brother",
  },
  {
    kana: "おねえさん",
    kanji: "お姉さん",
    romaji: "oneesan",
    english: "older sister",
  },
  {
    kana: "おとうとさん",
    kanji: "お弟さん",
    romaji: "otoutosan",
    english: "younger brother",
  },
  {
    kana: "いもうとさん",
    kanji: "妹さん",
    romaji: "imoutosan",
    english: "younger sister",
  },
  {
    kana: "おじいさん",
    kanji: "お祖父さん",
    romaji: "ojiisan",
    english: "grandfather",
  },
  {
    kana: "おばあさん",
    kanji: "お祖母さん",
    romaji: "obaasan",
    english: "grandmother",
  },
  {
    kana: "おくさん",
    kanji: "奥さん",
    romaji: "okusan",
    english: "wife",
  },
];

const demonstratives = [
  {
    kana: "この",
    kanji: "この",
    romaji: "kono",
    english: "this + noun",
  },
  {
    kana: "その",
    kanji: "その",
    romaji: "sono",
    english: "that + noun",
  },
  {
    kana: "あの",
    kanji: "あの",
    romaji: "ano",
    english: "that over there + noun",
  },
  {
    kana: "どの",
    kanji: "どの",
    romaji: "dono",
    english: "which + noun",
  },
  {
    kana: "これ",
    kanji: "これ",
    romaji: "kore",
    english: "this",
  },
  {
    kana: "それ",
    kanji: "それ",
    romaji: "sore",
    english: "that",
  },
  {
    kana: "あれ",
    kanji: "あれ",
    romaji: "are",
    english: "that over there",
  },
  {
    kana: "どれ",
    kanji: "どれ",
    romaji: "dore",
    english: "which",
  },
  {
    kana: "ここ",
    kanji: "ここ",
    romaji: "koko",
    english: "here",
  },
  {
    kana: "そこ",
    kanji: "そこ",
    romaji: "soko",
    english: "there",
  },
  {
    kana: "あそこ",
    kanji: "あそこ",
    romaji: "asoko",
    english: "over there",
  },
  {
    kana: "どこ",
    kanji: "どこ",
    romaji: "doko",
    english: "where",
  },
  {
    kana: "こちら",
    kanji: "こちら",
    romaji: "kochira",
    english: "this way",
  },
  {
    kana: "そちら",
    kanji: "そちら",
    romaji: "sochira",
    english: "that way",
  },
  {
    kana: "あちら",
    kanji: "あちら",
    romaji: "achira",
    english: "that way over there",
  },
  {
    kana: "どちら",
    kanji: "どちら",
    romaji: "dochira",
    english: "which way",
  },
  {
    kana: "どなた",
    kanji: "どなた",
    romaji: "donata",
    english: "who (formal)",
  },
  {
    kana: "だれ",
    kanji: "だれ",
    romaji: "dare",
    english: "who (informal)",
  },
  {
    kana: "どなたの",
    kanji: "どなたの",
    romaji: "donata no",
    english: "whose (formal)",
  },
  {
    kana: "だれの",
    kanji: "だれの",
    romaji: "dare no",
    english: "whose (informal)",
  },
  {
    kana: "なん / なに",
    kanji: "なん / なに",
    romaji: ["nan", "nani"],
    english: "what",
  },
  {
    kana: "なんの",
    kanji: "なんの",
    romaji: "nanno",
    english: "what kind of",
  },
];

const chapter2 = [
  {
    kana: "びょういん",
    kanji: "病院",
    romaji: "byouin",
    english: "hospital",
  },
  {
    kana: "こうじょう",
    kanji: "工場",
    romaji: "koujou",
    english: "factory",
  },
  {
    kana: "ぎんこう",
    kanji: "銀行",
    romaji: "ginkou",
    english: "bank",
  },
  {
    kana: "たいしかん",
    kanji: "大使館",
    romaji: "taishikan",
    english: "embassy",
  },
  {
    kana: "としょかん",
    kanji: "図書館",
    romaji: "toshokan",
    english: "library",
  },
  {
    kana: "モール",
    kanji: "モール",
    romaji: "moru",
    english: "mall",
  },
  {
    kana: "えいがかん",
    kanji: "映画館",
    romaji: "eigakan",
    english: ["movie theater", "movie house", "cinema", "cinema house"],
  },
  {
    kana: "きっさてん / カフェ",
    kanji: "喫茶店 / カフェ",
    romaji: "kissaten",
    english: "coffee shop",
  },
  {
    kana: "ほんや",
    kanji: "本屋",
    romaji: "honya",
    english: "bookstore",
  },
  {
    kana: "レストラン",
    kanji: "レストラン",
    romaji: "resutoran",
    english: "restaurant",
  },
  {
    kana: "デパート",
    kanji: "デパート",
    romaji: "depato",
    english: "department store",
  },
  {
    kana: "スーパー",
    kanji: "スーパー",
    romaji: "supa",
    english: "supermarket",
  },
  {
    kana: "ビル",
    kanji: "ビル",
    romaji: "biru",
    english: "building",
  },
  {
    kana: "かいぎしつ",
    kanji: "会議室",
    romaji: "kaigishitsu",
    english: "meeting room",
  },
  {
    kana: "きょうしつ",
    kanji: "教室",
    romaji: "kyoushitsu",
    english: "classroom",
  },
  {
    kana: "りょう",
    kanji: "寮",
    romaji: "ryou",
    english: "dormitory",
  },
  {
    kana: "アパート",
    kanji: "アパート",
    romaji: "apato",
    english: "apartment",
  },
  {
    kana: "えき",
    kanji: "駅",
    romaji: "eki",
    english: "train station",
  },
  {
    kana: "がいこくじん",
    kanji: "外国人",
    romaji: "gaikokujin",
    english: "foreigner",
  },
  {
    kana: "りょうしん",
    kanji: "両親",
    romaji: "ryoushin",
    english: "parents",
  },
  {
    kana: "こども",
    kanji: "子供",
    romaji: "kodomo",
    english: "children",
  },
  {
    kana: "いぬ",
    kanji: "犬",
    romaji: "inu",
    english: "dog",
  },
  {
    kana: "ねこ",
    kanji: "猫",
    romaji: "neko",
    english: "cat",
  },
  {
    kana: "かばん",
    kanji: "かばん",
    romaji: "kaban",
    english: "bag",
  },
  {
    kana: "けいたい（でんわ）",
    kanji: "携帯（電話）",
    romaji: ["keitai", "keitai denwa"],
    english: "mobile phone",
  },
  {
    kana: "でんわ",
    kanji: "電話",
    romaji: "denwa",
    english: "telephone",
  },
  {
    kana: "かぎ",
    kanji: "鍵",
    romaji: "kagi",
    english: "key",
  },
  {
    kana: "めがね",
    kanji: "眼鏡",
    romaji: "megane",
    english: "eyeglasses",
  },
  {
    kana: "とけい",
    kanji: "時計",
    romaji: "tokei",
    english: "watch",
  },
  {
    kana: "テーブル",
    kanji: "テーブル",
    romaji: "teburu",
    english: "table",
  },
  {
    kana: "つくえ",
    kanji: "机",
    romaji: "tsukue",
    english: "desk",
  },
  {
    kana: "ひきだし",
    kanji: "引き出し",
    romaji: "hikidashi",
    english: "drawer",
  },
  {
    kana: "テレビ",
    kanji: "テレビ",
    romaji: "terebi",
    english: "television",
  },
  {
    kana: "いす",
    kanji: "椅子",
    romaji: "isu",
    english: "chair",
  },
  {
    kana: "",
    kanji: "",
    romaji: "ki",
    english: "tree",
  },
  {
    kana: "クラス",
    kanji: "クラス",
    romaji: "kurasu",
    english: "class (katakana)",
  },
];

const locatives = [
  {
    kana: "うえ",
    kanji: "上",
    romaji: "ue",
    english: "above",
  },
  {
    kana: "した",
    kanji: "下",
    romaji: "shita",
    english: "under",
  },
  {
    kana: "まえ",
    kanji: "前",
    romaji: "mae",
    english: "in front of",
  },
  {
    kana: "うしろ",
    kanji: "後ろ",
    romaji: "ushiro",
    english: "behind",
  },
  {
    kana: "なか",
    kanji: "中",
    romaji: "naka",
    english: "inside",
  },
  {
    kana: "そと",
    kanji: "外",
    romaji: "soto",
    english: "outside",
  },
  {
    kana: "あいだ",
    kanji: "間",
    romaji: "aida",
    english: "between",
  },
  {
    kana: "ひだり",
    kanji: "左",
    romaji: "hidari",
    english: "left",
  },
  {
    kana: "みぎ",
    kanji: "右",
    romaji: "migi",
    english: "right",
  },
  {
    kana: "ちかく",
    kanji: "近く",
    romaji: "chikaku",
    english: ["near (same area / vicinity)", "near", "close"],
  },
  {
    kanji: "隣",
    kana: "となり",
    romaji: "tonari",
    english: [
      "close promixity (two objects touching side-by-side)",
      "next to",
      "beside",
      "adjacent",
    ],
  },
  {
    kanji: "側",
    kana: "そば",
    romaji: "soba",
    english: [
      "beside (same area) / close relationship between people",
      "beside",
      "close",
      "near",
    ],
  },
  {
    kanji: "横",
    kana: "よこ",
    romaji: "yoko",
    english: ["beside (lateral placement)", "horizontal", "sideways", "beside"],
  },
  {
    kanji: "向こう",
    kana: "むこう",
    romaji: "mukou",
    english: "opposite",
  },
  {
    kana: "きた",
    kanji: "北",
    romaji: "kita",
    english: "north",
  },
  {
    kana: "みなみ",
    kanji: "南",
    romaji: "minami",
    english: "south",
  },
  {
    kana: "にし",
    kanji: "西",
    romaji: "nishi",
    english: "west",
  },
  {
    kana: "ひがし",
    kanji: "東",
    romaji: "higashi",
    english: "east",
  },
];

const chapter3 = [
  {
    kana: "ねだん",
    kanji: "値段",
    romaji: "nedan",
    english: "price",
  },
  {
    kana: "やちん",
    kanji: "家賃",
    romaji: "yachin",
    english: "rent",
  },
  {
    kana: "おかね",
    kanji: "お金",
    romaji: "okane",
    english: "money",
  },
  {
    kana: "えん",
    kanji: "円",
    romaji: "en",
    english: "yen",
  },
  {
    kana: "ぺソ",
    kanji: "ペソ",
    romaji: "peso",
    english: "peso",
  },
  {
    kana: "ドル",
    kanji: "ドル",
    romaji: "doru",
    english: "dollar",
  },
  {
    kana: "ぜんぶ",
    kanji: "全部",
    romaji: "zenbu",
    english: "all in all",
  },
  {
    kana: "(お)いくら",
    kanji: "(お)いくら",
    romaji: ["ikura", "oikura"],
    english: "how much",
  },
  {
    kana: "ぐらい",
    kanji: "ぐらい",
    romaji: "gurai",
    english: "about / around / approximately",
  },
  {
    kana: "はたち",
    kanji: "二十歳",
    romaji: "hatachi",
    english: "twenty years old",
  },
  {
    kana: "(お)いくつ",
    kanji: "(お)いくつ",
    romaji: ["ikutsu", "oikutsu"],
    english: "how old",
  },
  {
    kana: "いくつ",
    kanji: "幾つ / いくつ",
    romaji: "ikutsu",
    english: "how many",
  },
  {
    kana: "ぺージ",
    kanji: "ページ",
    romaji: "peji",
    english: "page",
  },
  {
    kana: "れい",
    kanji: "零 / 例",
    romaji: "rei",
    english: "example",
  },
  {
    kana: "まる",
    kanji: "丸",
    romaji: "maru",
    english: "circle",
  },
  {
    kana: "れい / まる",
    kanji: "零 / 丸",
    romaji: ["rei", "maru"],
    english: "zero",
  },
  {
    kana: "ばんごう",
    kanji: "番号",
    romaji: "bangou",
    english: "number",
  },
  {
    kana: "けいたいばんごう",
    kanji: "携帯番号",
    romaji: "keitai bangou",
    english: ["cell phone number", "mobile number"],
  },
  {
    kana: "でんわばんごう",
    kanji: "電話番号",
    romaji: "denwa bangou",
    english: ["phone number", "telephone number"],
  },
  {
    kana: "えんぴつ",
    kanji: "鉛筆",
    romaji: "enpitsu",
    english: "pencil",
  },
  {
    kana: "ボールペン",
    kanji: "ボールペン",
    romaji: "borupen",
    english: ["ballpoint pen", "ballpen", "ball pen"],
  },
  {
    kana: "ペン",
    kanji: "ペン",
    romaji: "pen",
    english: "pen",
  },
  {
    kana: "てがみ",
    kanji: "手紙",
    romaji: "tegami",
    english: "letter",
  },
  {
    kana: "きっぷ",
    kanji: "切符",
    romaji: "kippu",
    english: "ticket",
  },
  {
    kana: "きって",
    kanji: "切手",
    romaji: "kitte",
    english: ["postal stamp", "stamp"],
  },
  {
    kana: "きょうかしょ",
    kanji: "教科書",
    romaji: "kyoukasho",
    english: "textbook",
  },
  {
    kana: "かさ",
    kanji: "傘",
    romaji: "kasa",
    english: "umbrella",
  },
  {
    kana: "びん",
    kanji: "瓶",
    romaji: "bin",
    english: "bottle",
  },
  {
    kana: "みかん",
    kanji: "みかん",
    romaji: "mikan",
    english: "orange",
  },
  {
    kana: "りんご",
    kanji: "りんご",
    romaji: "ringo",
    english: "apple",
  },
  {
    kana: "きょうだい",
    kanji: "兄弟",
    romaji: "kyoudai",
    english: ["sibling", "siblings"],
  },
];

const interrogativesForCounters = [
  {
    kanji: "幾つ",
    kana: "いくつ",
    romaji: "ikutsu",
    english: "how many",
  },
  {
    kanji: "何歳",
    kana: "なんさい",
    romaji: "nansai",
    english: ["how old", "what age"],
  },
  {
    kanji: "何人",
    kana: "なんにん",
    romaji: "nannin",
    english: "how many people",
  },
];

const chapter4 = [
  {
    kanji: "授業",
    kana: "じゅぎょう",
    romaji: "jugyou",
    english: "class (japanese)",
  },
  {
    kanji: "会議",
    kana: "かいぎ",
    romaji: "kaigi",
    english: "meeting",
  },
  {
    kanji: "仕事",
    kana: "しごと",
    romaji: "shigoto",
    english: "work / job",
  },
  {
    kanji: "締め切り",
    kana: "しめきり",
    romaji: "shimekiri",
    english: "deadline",
  },
  {
    kanji: "休み",
    kana: "やすみ",
    romaji: "yasumi",
    english: "vacation",
  },
  {
    kanji: "休憩",
    kana: "きゅうけい",
    romaji: "kyuukei",
    english: "break",
  },
  {
    kanji: "クリスマス",
    kana: "クリスマス",
    romaji: "kurisumasu",
    english: "Christmas",
  },
  {
    kanji: "大会",
    kana: "たいかい",
    romaji: "taikai",
    english: "festival",
  },
  {
    kanji: "お誕生日",
    kana: "おたんじょうび",
    romaji: "otanjoubi",
    english: "birthday",
  },
  {
    kanji: "予定",
    kana: "よてい",
    romaji: "yotei",
    english: "plans / schedule",
  },
  {
    kanji: "プロジェクト",
    kana: "プロジェクト",
    romaji: "purojekuto",
    english: "project",
  },
  {
    kanji: "パーティー",
    kana: "パーティー",
    romaji: "pati",
    english: "party",
  },
  {
    kanji: "試合",
    kana: "しあい",
    romaji: "shiai",
    english: "match / game",
  },
  {
    kanji: "試験",
    kana: "しけん",
    romaji: "shiken",
    english: "examination / test",
  },
  {
    kanji: "季節",
    kana: "きせつ",
    romaji: "kisetsu",
    english: "season",
  },
  {
    kanji: "春",
    kana: "はる",
    romaji: "haru",
    english: "spring",
  },
  {
    kanji: "夏",
    kana: "なつ",
    romaji: "natsu",
    english: "summer",
  },
  {
    kanji: "秋",
    kana: "あき",
    romaji: "aki",
    english: "autumn / fall",
  },
  {
    kanji: "冬",
    kana: "ふゆ",
    romaji: "fuyu",
    english: "winter",
  },
  {
    kanji: "梅雨",
    kana: "つゆ",
    romaji: "tsuyu",
    english: "rainy season",
  },
  {
    kanji: "夏休み",
    kana: "なつやすみ",
    romaji: "natsu yasumi",
    english: "summer vacation",
  },
  {
    kanji: "週末",
    kana: "しゅうまつ",
    romaji: "shuumatsu",
    english: "weekend",
  },
  {
    kanji: "平日",
    kana: "へいじつ",
    romaji: "heijitsu",
    english: "weekday",
  },
  {
    kanji: "午前",
    kana: "ごぜん",
    romaji: "gozen",
    english: "morning / A.M.",
  },
  {
    kanji: "午後",
    kana: "ごご",
    romaji: "gogo",
    english: "afternoon / P.M.",
  },
  {
    kanji: "時間",
    kana: "じかん",
    romaji: "jikan",
    english: "time",
  },
  {
    kanji: "何時",
    kana: "いつ",
    romaji: "itsu",
    english: "when",
  },
  {
    kanji: "今",
    kana: "いま",
    romaji: "ima",
    english: "now",
  },
  {
    kanji: "先ず / 初めに",
    kana: "まず / はじめに",
    romaji: ["mazu", "hajimeni"],
    english: ["first", "first of all", "before anything else"],
  },
  {
    kanji: "次",
    kana: "つぎ",
    romaji: "tsugi",
    english: "next",
  },
  {
    kanji: "朝",
    kana: "あさ",
    romaji: "asa",
    english: "morning",
  },
  {
    kanji: "昼",
    kana: "ひる",
    romaji: "hiru",
    english: "noon / midday",
  },
  {
    kanji: "夜 / 晩",
    kana: "よる / ばん",
    romaji: ["yoru", "ban"],
    english: "night / evening",
  },
];

const chapter5 = [
  {
    kanji: "留学生",
    kana: "りゅうがくせい",
    romaji: "ryuugakusei",
    english: "student studying abroad",
  },
  {
    kanji: "せいと",
    kana: "生徒",
    romaji: "seito",
    english: "student / pupil",
  },
  {
    kanji: "",
    kana: "",
    romaji: "kurasumeito",
    english: "classmate",
  },
  {
    kanji: "",
    kana: "",
    romaji: "menba",
    english: "member",
  },
  {
    kanji: "",
    kana: "",
    romaji: "norimono",
    english: "vehicles",
  },
  {
    kanji: "",
    kana: "",
    romaji: ["otobai", "baiku"],
    english: "motorcycle",
  },
  {
    kanji: "",
    kana: "",
    romaji: "densha",
    english: ["bicycle", "bike"],
  },
  {
    kanji: "",
    kana: "",
    romaji: "takushi",
    english: "taxi",
  },
  {
    kanji: "",
    kana: "",
    romaji: "basu",
    english: "bus",
  },
  {
    kanji: "",
    kana: "",
    romaji: "densha",
    english: "train",
  },
  {
    kanji: "",
    kana: "",
    romaji: "chikatetsu",
    english: "subway",
  },
  {
    kanji: "",
    kana: "",
    romaji: "shinkansen",
    english: "bullet train",
  },
  {
    kanji: "",
    kana: "",
    romaji: "fune",
    english: "ship / boat",
  },
  {
    kanji: "",
    kana: "",
    romaji: "hikouki",
    english: "airplane",
  },
  {
    kanji: "",
    kana: "",
    romaji: "aruite",
    english: "on foot, by walking",
  },
  {
    kanji: "",
    kana: "",
    romaji: "oufuku",
    english: "roundtrip",
  },
  {
    kanji: "",
    kana: "",
    romaji: "katamichi",
    english: "one-way (trip)",
  },
  {
    kanji: "",
    kana: "",
    romaji: "hitotsuki",
    english: "one month",
  },
  {
    kanji: "",
    kana: "",
    romaji: "gurupu",
    english: "group",
  },
  {
    kanji: "",
    kana: "",
    romaji: "shukudai",
    english: "homework",
  },
  {
    kanji: "",
    kana: "",
    romaji: "mondai",
    english: "problem",
  },
  {
    kanji: "",
    kana: "",
    romaji: "toreningu",
    english: "training",
  },
  {
    kanji: "",
    kana: "",
    romaji: "zemi",
    english: "seminar",
  },
  {
    kanji: "",
    kana: "",
    romaji: "arubaito",
    english: "part-time job",
  },
  {
    kanji: "",
    kana: "",
    romaji: "zangyou",
    english: "overtime (work)",
  },
  {
    kanji: "",
    kana: "",
    romaji: "kaiwa",
    english: "conversation",
  },
  {
    kanji: "",
    kana: "",
    romaji: "bunpou",
    english: "grammar",
  },
];

const chapter6 = [
  {
    kanji: "場所",
    kana: "ところ / ばしょ",
    romaji: ["tokoro", "basho"],
    english: "place"
  },
  {
    kanji: "建物",
    kana: "たてもの",
    romaji: "tatemono",
    english: "building"
  },
  {
    kanji: "公園",
    kana: "こうえん",
    romaji: "kouen",
    english: "park"
  },
  {
    kanji: "道",
    kana: "みち",
    romaji: "michi",
    english: "road"
  },
  {
    kanji: "空港",
    kana: "くうこう",
    romaji: "kuukou",
    english: "airport"
  },
  {
    kanji: "港",
    kana: "みなと",
    romaji: "minato",
    english: ["harbor", "seaport"]
  },
  {
    kanji: "店",
    kana: "みせ",
    romaji: "mise",
    english: ["shop / store", "shop", "store"]
  },
  {
    kanji: "薬屋",
    kana: "くすりや",
    romaji: "kusuriya",
    english: ["drugstore / pharmacy", "drugstore", "pharmacy"]
  },
  {
    kanji: "トイレ",
    kana: "トイレ",
    romaji: "toire",
    english: "toilet"
  },
  {
    kanji: "台所",
    kana: "だいどころ",
    romaji: "daidokoro",
    english: "kitchen"
  },
  {
    kanji: "ベッド",
    kana: "ベッド",
    romaji: "beddo",
    english: "bed"
  },
  {
    kanji: "勉強",
    kana: "べんきょう",
    romaji: "benkyou",
    english: "study"
  },
  {
    kanji: "練習",
    kana: "れんしゅう",
    romaji: "renshuu",
    english: "practice"
  },
  {
    kanji: "答え",
    kana: "こたえ",
    romaji: "kotae",
    english: "answer"
  },
  {
    kanji: "漢字",
    kana: "かんじ",
    romaji: "kanji",
    english: "chinese character"
  },
  {
    kanji: "字",
    kana: "じ",
    romaji: "ji",
    english: ["character", "letter"]
  },
  {
    kanji: "メモ",
    kana: "メモ",
    romaji: "memo",
    english: "memo"
  },
  {
    kanji: "写真",
    kana: "しゃしん",
    romaji: "shashin",
    english: ["picture", "photograph"]
  },
  {
    kanji: "ちょっと",
    kana: "ちょっと",
    romaji: "chotto",
    english: "a little"
  },
  {
    kanji: "とても",
    kana: "とても",
    romaji: "totemo",
    english: "very"
  },
  {
    kanji: "大変",
    kana: "たいへん",
    romaji: "taihen",
    english: "very (formal)"
  },
  {
    kanji: "余り",
    kana: "あまり",
    romaji: "amari",
    english: "not very"
  },
  {
    kana: "りょうり",
    kanji: "料理",
    romaji: "ryouri",
    english: ["dish / cooking / cuisine", "dish", "cooking", "cuisine"]
  }
];


export const vocabularies = {
  "Chapter 1": chapter1,
  Family: family,
  Demonstratives: demonstratives,
  "Chapter 2": chapter2,
  Locatives: locatives,
  "Chapter 3": chapter3,
  "Numbers (1-99)": numbers,
  Counters: [],
  InterrogativesForCounters: interrogativesForCounters,
  "Chapter 4": chapter4,
  Time: [],
  Dates: dates,
  "Days Of The Week": daysOfTheWeek,
  "Non-specific Time Expressions": [],
  "Chapter 5": chapter5,
  "Span Of Time": spanOfTime,
  "Chapter 6": chapter6
  // More categories and vocabularies here...
};
