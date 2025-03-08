// src/app/destination/italy/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationItalyPage() {
  const { language } = useLanguage();

  const italyData = {
    name: language === 'sv' ? "Italien" : "Italy",
    heroVideo: "/videos/italy.mp4",
    
    theme: {
      primary: "#009246",   // Italiensk grön (från flaggan)
      secondary: "#CE2B37", // Italiensk röd (från flaggan)
      accent: "#FFFFFF",    // Vit accentfärg för kontrast
    },

    description:
      language === 'sv'
        ? "Italien är inte bara ett land – det är en smakresa genom tradition och passion. Från de gyllene kullarna i Toscana till Amalfikustens solkyssta stränder, är varje region en hyllning till unika smaker och säsongsbetonade råvaror. Här är måltider mer än bara mat; de är stunder att dela och minnas. Norra Italien lockar med tryffel, krämig risotto och mustiga rätter, medan södern bjuder på enkla, men fantastiska smaker som solmogna tomater, pizzans hemstad Neapel och extra jungfruolivolja från Apulien. Glöm inte att avsluta med en äkta italiensk espresso – stark och fylld med karaktär. I Italien är varje tugga en berättelse och varje måltid en del av livets konst."
        : "Italy is not just a country – it's a journey of flavors rooted in tradition and passion. From the golden hills of Tuscany to the sun-kissed beaches of the Amalfi Coast, each region is a tribute to unique flavors and seasonal ingredients. Here, meals are more than just food; they are moments to share and remember. Northern Italy offers truffle, creamy risotto, and hearty dishes, while the south brings simple, yet fantastic flavors like sun-ripened tomatoes, Naples (the birthplace of pizza), and extra virgin olive oil from Apulia. Don't forget to end with a real Italian espresso – strong and full of character. In Italy, every bite is a story, and every meal is a piece of art.",

    foodImage: "/images/italy/food.jpg",
    food: language === 'sv' ? "Pasta och Pizza" : "Pasta and Pizza",
    
    facts: language === 'sv'
      ? [
          "Italien har fler UNESCO-världsarv än något annat land i världen, med över 55 listade platser.",
          "Rom har en egen stat inom staden, Vatikanstaten, som är världens minsta självständiga stat.",
          "Det italienska alfabetet har bara 21 bokstäver – J, K, W, X och Y används främst för lånord.",
          "Operan föddes här, med världens första operahus i Venedig, byggt 1637.",
          "Venedig är byggd på 118 små öar och har över 400 broar, men inga bilar.",
          "Italien har tre aktiva vulkaner: Etna, Stromboli och Vesuvius.",
        ]
      : [
          "Italy has more UNESCO World Heritage sites than any other country in the world, with over 55 listed locations.",
          "Rome has its own state within the city, Vatican City, which is the world's smallest independent state.",
          "The Italian alphabet has only 21 letters – J, K, W, X, and Y are mainly used for foreign words.",
          "Opera was born here, with the world’s first opera house in Venice, built in 1637.",
          "Venice is built on 118 small islands and has over 400 bridges, but no cars.",
          "Italy has three active volcanoes: Etna, Stromboli, and Vesuvius.",
        ],

    popularDestinations: language === 'sv'
      ? "Italien är ett land av kontraster, där du kan förlora dig i Roms antika underverk, segla på Venedigs romantiska kanaler och drömma dig bort i Florens, renässansens hjärta. Men resor hit handlar inte bara om att bocka av sevärdheter – det handlar om att leva som italienarna. Stanna en stund på en piazza, smaka på en lokal gelato, och låt dig svepas med av tempot och atmosfären.\n\n" +
        "Utöver de stora städerna finns det mängder av dolda pärlor. Matera med sina historiska 'Sassi' grottbostäder tar dig tillbaka i tiden. Cinque Terre på Liguriens kust består av fem färgglada fiskebyar, perfekta för både vandringsentusiaster och vinälskare. I Puglia väntar vita byar, urgamla olivlundar och sagoliknande trulli-hus i Alberobello, som är en UNESCO-skyddad plats.\n\n" +
        "Italien erbjuder så mycket mer än de kända turiststråken – med regioner som Piemonte och den toskanska landsbygden där vingårdar och böljande kullar skapar scener ur en målning. Varje plats har sin unika karaktär och bjuder på autentiska upplevelser som bara väntar på att upptäckas."
      : "Italy is a land of contrasts, where you can lose yourself in Rome’s ancient wonders, sail on Venice's romantic canals, and dream away in Florence, the heart of the Renaissance. But traveling here is not just about checking off sights – it's about living like the Italians. Take a moment on a piazza, taste a local gelato, and let yourself be swept away by the pace and atmosphere.\n\n" +
        "Beyond the major cities, there are countless hidden gems. Matera, with its historic 'Sassi' cave dwellings, takes you back in time. Cinque Terre on the Ligurian coast consists of five colorful fishing villages, perfect for hiking enthusiasts and wine lovers. In Apulia, you'll find whitewashed villages, ancient olive groves, and fairytale-like trulli houses in Alberobello, a UNESCO site.\n\n" +
        "Italy offers so much more than the well-known tourist paths – with regions like Piedmont and the Tuscan countryside, where vineyards and rolling hills create scenes from a painting. Every place has its own unique character, offering authentic experiences waiting to be discovered.",

    travelTips: language === 'sv'
      ? [
          "Utforska lokala matmarknader – de är fulla av spännande, regionala smaker.",
          "Bo på en agriturismo-gård för att uppleva det italienska lantlivet på nära håll.",
          "Beställ 'vino della casa' – husets vin – på restauranger för en lokal vinupplevelse.",
          "Res till populära destinationer under lågsäsong för en lugnare upplevelse.",
          "Ta den lokala tågresan för att njuta av vackra landskap mellan städer.",
          "Utforska italienska städer till fots – många gömda pärlor väntar i gränder och på torg.",
          "Delta i lokala festivaler och marknader för att uppleva Italiens färgrika kultur på nära håll.",
        ]
      : [
          "Explore local food markets – they are full of exciting regional flavors.",
          "Stay on an agriturismo farm to experience Italian rural life up close.",
          "Order 'vino della casa' – house wine – at restaurants for a local wine experience.",
          "Travel to popular destinations during the off-season for a quieter experience.",
          "Take the local train to enjoy beautiful landscapes between cities.",
          "Explore Italian cities on foot – many hidden gems await in alleys and squares.",
          "Join local festivals and markets to experience Italy’s vibrant culture up close.",
        ],

    activities: {
      Rome: {
        sv: [
          "Utforska Colosseum och Forum Romanum",
          "Besök Vatikanstaten och Sixtinska kapellet",
          "Promenera längs Spanska trappan",
          "Släng ett mynt i Fontana di Trevi",
          "Upptäck Pantheon och dess historia",
        ],
        en: [
          "Explore the Colosseum and Roman Forum",
          "Visit Vatican City and the Sistine Chapel",
          "Stroll along the Spanish Steps",
          "Throw a coin into the Trevi Fountain",
          "Discover the Pantheon and its history",
        ],
      },
      Venice: {
        sv: [
          "Åk gondol längs Canal Grande",
          "Utforska Markusplatsen och Markusdomkyrkan",
          "Besök Dogepalatset och Suckarnas bro",
          "Fördjupa dig i konst på Peggy Guggenheim Collection",
          "Promenera i de smala gränderna i Murano och Burano",
        ],
        en: [
          "Take a gondola ride along the Grand Canal",
          "Explore St. Mark's Square and Basilica",
          "Visit the Doge’s Palace and Bridge of Sighs",
          "Immerse yourself in art at the Peggy Guggenheim Collection",
          "Wander the narrow streets of Murano and Burano",
        ],
      },
      Florence: {
        sv: [
          "Beundra Michelangelos David på Galleria dell'Accademia",
          "Besök Uffizierna och njut av renässanskonst",
          "Gå över Ponte Vecchio och utforska dess butiker",
          "Bestig katedralen Santa Maria del Fiores kupol",
          "Vila i de vackra Boboli-trädgårdarna",
        ],
        en: [
          "Admire Michelangelo’s David at the Accademia Gallery",
          "Visit the Uffizi Gallery and enjoy Renaissance art",
          "Walk across the Ponte Vecchio and explore its shops",
          "Climb the dome of Florence Cathedral (Santa Maria del Fiore)",
          "Relax in the beautiful Boboli Gardens",
        ],
      },
      Milan: {
        sv: [
          "Utforska Duomo di Milano och dess terrasser",
          "Besök Leonardo da Vincis Nattvarden",
          "Shoppa på Galleria Vittorio Emanuele II",
          "Se en föreställning på Teatro alla Scala",
          "Utforska det historiska Castello Sforzesco",
        ],
        en: [
          "Explore the Milan Cathedral (Duomo) and its terraces",
          "Visit Leonardo da Vinci’s The Last Supper",
          "Shop at Galleria Vittorio Emanuele II",
          "Watch a performance at Teatro alla Scala",
          "Explore the historic Sforza Castle (Castello Sforzesco)",
        ],
      },
      Naples: {
        sv: [
          "Upptäck Pompeji och dess antika ruiner",
          "Njut av en autentisk napolitansk pizza",
          "Utforska Neapels underjordiska värld",
          "Besök det kungliga palatset i Neapel",
          "Ta en dagstur till Amalfikusten",
        ],
        en: [
          "Discover Pompeii and its ancient ruins",
          "Enjoy an authentic Neapolitan pizza",
          "Explore Naples’ underground world",
          "Visit the Royal Palace of Naples",
          "Take a day trip to the Amalfi Coast",
        ],
      },
    },

    popularDestinationsImage: "/images/italy/popular.jpg",
    tipsImage: "/images/italy/tips.jpg",
  };

  return <Destination data={italyData} />;
}
