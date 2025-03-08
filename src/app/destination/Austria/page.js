// src/app/destination/austria/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationAustriaPage() {
  const { language } = useLanguage();

  const austriaData = {
    heroVideo: "/videos/austria.mp4",

    theme: {
      primary: "#ed1c24", // Röd från Österrikes flagga
      secondary: "#ffffff", // Vit från flaggan
      accent: "#a11d1f", // Mörkare röd för kontrast
    },

    description:
      language === 'sv'
        ? "Österrike är ett land där tradition möter elegans och där matkulturen är lika mångsidig som landskapet. Från Wienerschnitzel till den klassiska Apfelstrudeln, är Österrikes kök en blandning av rustika smaker och kejserlig sofistikering. I Wien kan du slå dig ner på ett UNESCO-skyddat kafé för att njuta av en kopp kaffe och Sachertorte, medan de alpina regionerna erbjuder robusta måltider som värmer efter en dag i skidbackarna. Österrikarna är stolta över sina lokala råvaror, och på landets mysiga 'Heuriger' (vinrestauranger) kan du prova regionala viner och enkla rätter i en atmosfär full av gemytlighet och lokal tradition."
        : "Austria is a country where tradition meets elegance, and the culinary scene is as diverse as the landscape. From Wiener schnitzel to the classic Apfelstrudel, Austrian cuisine is a blend of rustic flavors and imperial sophistication. In Vienna, you can sit at a UNESCO-protected café to enjoy a cup of coffee and Sachertorte, while the alpine regions offer hearty meals that warm you after a day on the slopes. Austrians take pride in their local ingredients, and in the country’s cozy 'Heuriger' (wine taverns), you can sample regional wines and simple dishes in an atmosphere rich with tradition.",

    foodImage: "/images/austria/food.jpg",
    food: language === 'sv' ? "Schnitzel och Strudel" : "Schnitzel and Strudel",

    facts: language === 'sv'
      ? [
          "Österrike är hem till Alperna, vilket gör landet till en av Europas mest eftertraktade skid- och vandringsdestinationer.",
          "Wien, 'musikens huvudstad', har varit hem för storheter som Mozart, Beethoven och Strauss.",
          "Landets traditionella mejeriprodukter, särskilt från alpmjölk, är kända för sin höga kvalitet.",
          "Schönbrunn Zoo i Wien, grundat 1752, är ett av världens äldsta zoo och ett populärt familjeresmål.",
          "Wien rankas regelbundet som en av världens mest levnadsvänliga städer, med en rik kultur och ett rikt stadsliv.",
          "Wiens kafékultur är UNESCO-skyddad, och ett besök i staden är inte komplett utan en paus på ett klassiskt kafé.",
        ]
      : [
          "Austria is home to the Alps, making it one of Europe's most sought-after skiing and hiking destinations.",
          "Vienna, the 'City of Music,' has been home to greats like Mozart, Beethoven, and Strauss.",
          "The country’s traditional dairy products, especially alpine milk, are known for their high quality.",
          "Schönbrunn Zoo in Vienna, founded in 1752, is one of the world's oldest zoos and a popular family destination.",
          "Vienna regularly ranks as one of the world’s most livable cities, with a rich culture and vibrant urban life.",
          "Vienna’s café culture is UNESCO-protected, and a visit to the city isn’t complete without a stop at a classic café.",
        ],

    popularDestinations: language === 'sv'
      ? "Österrike bjuder på fantastiska resmål, från Wiens kejserliga prakt till Alpernas majestät. I Wien hittar du pampiga palats, konserthus och traditionella kaféer där du kan njuta av historien och det klassiska musikarvet. Salzburg, födelseplatsen för Mozart, är en barockpärla med utsikt över Alperna och bjuder på charmiga kullerstensgator och storslagna vyer.\n\n" +
        "För naturälskare är Tyrolen perfekt med sina snötäckta fjäll, skidorter och vandringsleder. En annan höjdpunkt är Hallstatt, en sagolik by vid en spegelblank sjö, känd för sina pittoreska vyer som ser ut att vara tagna ur en drömbok. Innsbruck erbjuder en unik blandning av kultur och natur, med en historisk stadskärna och storslagna alpvyer.\n\n" +
        "Steiermark, även kallat 'Österrikes gröna hjärta', erbjuder böljande vinodlingar, frodiga landskap och avslappnande termalbad. Wachau-dalen längs Donau, känd för sina vingårdar och medeltida kloster, är ett UNESCO-världsarv och en idyllisk plats för vinälskare och historiaintresserade. Österrike är fullt av kontraster, från Wiens livliga gator till de lugna alpina dalgångarna – landet bjuder på en upplevelse för alla sinnen."
      : "Austria offers fantastic destinations, from Vienna’s imperial grandeur to the majesty of the Alps. In Vienna, you’ll find grand palaces, concert halls, and traditional cafes where you can immerse yourself in history and classical music heritage. Salzburg, birthplace of Mozart, is a Baroque gem overlooking the Alps, featuring charming cobbled streets and stunning views.\n\n" +
        "For nature lovers, Tyrol is perfect with its snow-covered mountains, ski resorts, and hiking trails. Another highlight is Hallstatt, a fairytale village by a mirror-like lake, famous for its picturesque views. Innsbruck offers a unique blend of culture and nature, with a historic old town and breathtaking alpine views.\n\n" +
        "Styria, also known as 'Austria's green heart,' offers rolling vineyards, lush landscapes, and relaxing thermal baths. The Wachau Valley along the Danube, famous for its vineyards and medieval monasteries, is a UNESCO World Heritage site and an idyllic spot for wine lovers and history buffs. Austria is full of contrasts, from Vienna’s lively streets to the tranquil alpine valleys – the country offers an experience for all senses.",

    travelTips: language === 'sv'
      ? [
          "Många små caféer och restauranger föredrar kontanter, så det är bra att ha med sig lite i plånboken.",
          "Wien är perfekt att utforska till fots eller med cykel – stadens arkitektur och grönområden är väl värda att upptäcka långsamt.",
          "Förboka biljetter till populära sevärdheter som Schönbrunn och Mozarts födelsehus, särskilt under högsäsong.",
          "Om du ska till Alperna, packa för väderomslag – temperaturen kan variera snabbt i bergen.",
          "Ett besök på en 'Heuriger' är ett måste för att smaka på lokala viner och enklare rätter i en avslappnad atmosfär.",
        ]
      : [
          "Many small cafes and restaurants prefer cash, so it's a good idea to carry some in your wallet.",
          "Vienna is perfect to explore on foot or by bike – the city's architecture and green spaces are worth discovering slowly.",
          "Book tickets in advance for popular attractions like Schönbrunn and Mozart's birthplace, especially during peak season.",
          "If you’re heading to the Alps, pack for changing weather – temperatures can vary quickly in the mountains.",
          "A visit to a 'Heuriger' is a must to taste local wines and simple dishes in a relaxed atmosphere.",
        ],

    foodImage: "/images/austria/food.jpg",
    popularDestinationsImage: "/images/austria/popular.jpg",
    tipsImage: "/images/austria/tips.jpg",
    activities: {
      Vienna: {
        sv: [
          "Besök Schönbrunn-palatset",
          "Utforska Stefansdomen",
          "Upplev Wiens operahus",
        ],
        en: [
          "Visit the Schönbrunn Palace",
          "Explore St. Stephen's Cathedral",
          "Experience Vienna’s Opera House",
        ],
      },
      Salzburg: {
        sv: [
          "Utforska Mozarts födelseplats",
          "Beundra Hohensalzburgs fästning",
          "Promenera i Mirabellträdgårdarna",
        ],
        en: [
          "Tour Mozart’s Birthplace",
          "Admire Hohensalzburg Fortress",
          "Stroll through Mirabell Gardens",
        ],
      },
      Innsbruck: {
        sv: [
          "Åk med Nordkette-linbanan",
          "Besök det Gyllene taket",
          "Utforska Alpinzoo",
        ],
        en: [
          "Ride the Nordkette Cable Car",
          "Visit the Golden Roof",
          "Explore the Alpine Zoo",
        ],
      },
    }
    
  };

  return <Destination data={austriaData} />;
}
