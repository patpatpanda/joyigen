// src/app/destination/sweden/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationSwedenPage() {
  const { language } = useLanguage();

  const swedenData = {
    name: language === 'sv' ? "Sverige" : "Sweden",
    heroVideo: "/videos/sweden.mp4",
    
    theme: {
      primary: "#005BAC",   // Blå från svenska flaggan
      secondary: "#FFD700", // Gul från svenska flaggan
      accent: "#FFFFFF",    // Vit accent för kontrast
    },

    description:
      language === 'sv'
        ? "Sverige är ett land av skogar, sjöar och traditioner. Från den vibrerande huvudstaden Stockholm till norra Sveriges snöklädda vidder, är landet en blandning av modernitet och naturskönhet. Här kan du njuta av svenska klassiker som köttbullar, gravad lax och surströmming, samt uppleva unika traditioner som midsommarfirande och Lucia. I Sverige är naturen alltid nära, och friluftslivet är en central del av kulturen – oavsett om du paddlar i skärgården eller vandrar i fjällen."
        : "Sweden is a country of forests, lakes, and traditions. From the vibrant capital Stockholm to the snowy expanses of northern Sweden, the country is a mix of modernity and natural beauty. Enjoy Swedish classics like meatballs, gravlax, and surströmming, and experience unique traditions such as Midsummer celebrations and Lucia. In Sweden, nature is always close, and outdoor life is a central part of the culture – whether you're kayaking in the archipelago or hiking in the mountains.",

    foodImage: "/images/sweden/food.jpg",
    food: language === 'sv' ? "Köttbullar och Lingon" : "Meatballs and Lingonberries",
    
    facts: language === 'sv'
      ? [
          "Sverige har nästan 100 000 sjöar och är känt för sin fantastiska natur.",
          "Stockholm är byggt på 14 öar och kallas ofta för Nordens Venedig.",
          "Svensk midsommar är en av årets viktigaste högtider och firas med sång och dans runt majstången.",
          "I Sverige är allemansrätten viktig och låter dig njuta av naturen fritt, men med respekt.",
          "Lappland, i norra Sverige, är hem till midnattssolen på sommaren och magiska norrsken på vintern.",
        ]
      : [
          "Sweden has nearly 100,000 lakes and is known for its stunning nature.",
          "Stockholm is built on 14 islands and is often called the Venice of the North.",
          "Swedish Midsummer is one of the most important holidays, celebrated with songs and dances around the maypole.",
          "In Sweden, the right of public access allows you to enjoy nature freely, but with respect.",
          "Lapland, in northern Sweden, is home to the midnight sun in summer and magical northern lights in winter.",
        ],

    activities: {
      Stockholm: {
        sv: [
          "Besök Vasamuseet och se det välbevarade 1600-talsskeppet.",
          "Promenera i Gamla Stan och utforska Stockholms historia.",
          "Ta en båttur i Stockholms skärgård.",
          "Besök Drottningholms slott, ett UNESCO-världsarv.",
          "Utforska Abba-museet och svensk musikindustri.",
        ],
        en: [
          "Visit the Vasa Museum to see the well-preserved 17th-century ship.",
          "Walk through Gamla Stan and explore Stockholm’s history.",
          "Take a boat tour in the Stockholm archipelago.",
          "Visit Drottningholm Palace, a UNESCO World Heritage site.",
          "Explore the Abba Museum and Sweden’s music industry.",
        ],
      },
      Gothenburg: {
        sv: [
          "Utforska Liseberg, Nordens största nöjespark.",
          "Promenera längs Avenyn, stadens livliga boulevard.",
          "Besök Universeum, ett vetenskapscenter och akvarium.",
          "Upptäck Haga, ett charmigt område med kaféer och småbutiker.",
          "Ta en skärgårdsbåt till södra skärgårdens öar.",
        ],
        en: [
          "Explore Liseberg, Scandinavia's largest amusement park.",
          "Stroll along Avenyn, the city's lively boulevard.",
          "Visit Universeum, a science center and aquarium.",
          "Discover Haga, a charming area with cafés and small shops.",
          "Take a ferry to the southern archipelago islands.",
        ],
      },
      Kiruna: {
        sv: [
          "Besök Ishotellet i Jukkasjärvi, en unik vinterupplevelse.",
          "Se norrskenet på vintern och midnattssolen på sommaren.",
          "Utforska Kebnekaise, Sveriges högsta berg.",
          "Gå på hundspannsturer genom den arktiska vildmarken.",
          "Besök samiska byar och lär dig om den samiska kulturen.",
        ],
        en: [
          "Visit the Icehotel in Jukkasjärvi for a unique winter experience.",
          "See the northern lights in winter and the midnight sun in summer.",
          "Explore Kebnekaise, Sweden’s highest mountain.",
          "Go dog sledding through the Arctic wilderness.",
          "Visit Sami villages and learn about Sami culture.",
        ],
      },
    },

    travelTips: language === 'sv'
      ? [
          "Planera din resa efter årstid – vintern erbjuder snö och norrsken, medan sommaren bjuder på långa dagar och skärgårdsliv.",
          "Använd lokaltrafiken – både Stockholm och Göteborg har utmärkta kollektivtrafiksystem.",
          "Packa bekväma kläder och skor – Sverige erbjuder många möjligheter till friluftsliv.",
          "Smaka på svenska klassiker som smörgåstårta och prinsesstårta.",
          "Besök en bastu för att uppleva en viktig del av nordisk kultur.",
        ]
      : [
          "Plan your trip according to the season – winter offers snow and northern lights, while summer brings long days and archipelago life.",
          "Use public transportation – both Stockholm and Gothenburg have excellent transit systems.",
          "Pack comfortable clothes and shoes – Sweden offers many opportunities for outdoor activities.",
          "Try Swedish classics like smörgåstårta and princess cake.",
          "Visit a sauna to experience an important part of Nordic culture.",
        ],

    popularDestinationsImage: "/images/sweden/popular.jpg",
    tipsImage: "/images/sweden/tips.jpg",
  };

  return <Destination data={swedenData} />;
}
