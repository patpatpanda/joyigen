// src/app/destination/denmark/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationDenmarkPage() {
  const { language } = useLanguage();

  const denmarkData = {
    name: language === 'sv' ? "Danmark" : "Denmark",
    heroVideo: "/videos/denmark.mp4",
    
    theme: {
      primary: "#C60C30",   // Röd från danska flaggan
      secondary: "#FFFFFF", // Vit från danska flaggan
      accent: "#000000",    // Svart accent för kontrast
    },

    description:
      language === 'sv'
        ? "Danmark är ett land fyllt av historia, design och hygge. Från de ikoniska färgglada husen vid Nyhavn i Köpenhamn till de vidsträckta stränderna vid Jylland, erbjuder Danmark något för alla. Danska smaker som smörrebröd, wienerbröd och färsk fisk är älskade över hela världen. Med sitt fokus på hållbarhet och design är Danmark också hem för innovativa arkitektoniska mästerverk och grön livsstil. Upptäck ett land där tradition möter framtiden, och där livskvalitet alltid står i fokus."
        : "Denmark is a country filled with history, design, and hygge. From the iconic colorful houses of Nyhavn in Copenhagen to the vast beaches of Jutland, Denmark offers something for everyone. Danish flavors like smørrebrød, pastries, and fresh seafood are loved worldwide. With its focus on sustainability and design, Denmark is also home to innovative architectural masterpieces and green living. Discover a country where tradition meets the future, and quality of life is always at the forefront.",

    foodImage: "/images/denmark/food.jpg",
    food: language === 'sv' ? "Smörrebröd och Wienerbröd" : "Smørrebrød and Pastries",
    
    facts: language === 'sv'
      ? [
          "Danmark är världens äldsta monarki, med drottning Margrethe II som nuvarande regent.",
          "Köpenhamn är hem till världens äldsta nöjespark, Tivoli, som öppnade 1843.",
          "LEGO, en av världens mest kända leksaker, skapades i Billund, Danmark.",
          "Danmark rankas regelbundet som ett av världens lyckligaste länder.",
          "Den ikoniska lilla sjöjungfrun är en av Köpenhamns mest kända symboler.",
        ]
      : [
          "Denmark is the world’s oldest monarchy, with Queen Margrethe II as the current monarch.",
          "Copenhagen is home to the world’s oldest amusement park, Tivoli, which opened in 1843.",
          "LEGO, one of the world’s most famous toys, was created in Billund, Denmark.",
          "Denmark is consistently ranked as one of the happiest countries in the world.",
          "The iconic Little Mermaid is one of Copenhagen’s most famous landmarks.",
        ],

    activities: {
      Copenhagen: {
        sv: [
          "Promenera längs Nyhavn och njut av atmosfären.",
          "Utforska Tivoli, en historisk nöjespark.",
          "Besök Den lilla sjöjungfrun vid vattnet.",
          "Upptäck Christiania, Köpenhamns alternativa stadsdel.",
          "Njut av utsikten från Rundetårn.",
        ],
        en: [
          "Stroll along Nyhavn and enjoy the atmosphere.",
          "Explore Tivoli, a historic amusement park.",
          "Visit The Little Mermaid by the water.",
          "Discover Christiania, Copenhagen's alternative district.",
          "Enjoy the view from The Round Tower (Rundetårn).",
        ],
      },
      Aarhus: {
        sv: [
          "Besök ARoS konstmuseum och dess regnbågspanorama.",
          "Promenera i Den Gamle By, ett friluftsmuseum.",
          "Upptäck botaniska trädgården.",
          "Utforska Moesgaard Museum för en inblick i Danmarks historia.",
          "Njut av shopping och restauranger i Latinerkvarteret.",
        ],
        en: [
          "Visit ARoS Art Museum and its rainbow panorama.",
          "Stroll through Den Gamle By, an open-air museum.",
          "Discover the botanical gardens.",
          "Explore Moesgaard Museum for insight into Denmark’s history.",
          "Enjoy shopping and dining in the Latin Quarter.",
        ],
      },
      Billund: {
        sv: [
          "Utforska LEGOLAND, en värld av kreativitet och lek.",
          "Besök LEGO House, ett paradis för LEGO-entusiaster.",
          "Utforska naturen i Gyttegård Plantage.",
          "Cykla på de natursköna lederna runt Billund.",
          "Njut av familjevänliga aktiviteter i Lalandia.",
        ],
        en: [
          "Explore LEGOLAND, a world of creativity and play.",
          "Visit LEGO House, a paradise for LEGO enthusiasts.",
          "Discover nature in Gyttegård Plantation.",
          "Cycle the scenic trails around Billund.",
          "Enjoy family-friendly activities at Lalandia.",
        ],
      },
    },

    travelTips: language === 'sv'
      ? [
          "Köpenhamn är bäst att utforska till fots eller med cykel.",
          "Smaka på lokala specialiteter som röd pölse och danska smörrebröd.",
          "Boka biljetter i förväg till populära attraktioner som Tivoli och LEGOLAND.",
          "Var beredd på att Danmark är ett dyrt land – håll utkik efter budgetvänliga alternativ.",
          "Besök Danmarks stränder under sommaren – de är vackra och ofta mindre trånga än andra europeiska destinationer.",
        ]
      : [
          "Copenhagen is best explored on foot or by bike.",
          "Try local specialties like red sausage (rød pølse) and Danish smørrebrød.",
          "Book tickets in advance for popular attractions like Tivoli and LEGOLAND.",
          "Be prepared for Denmark being an expensive country – look for budget-friendly options.",
          "Visit Denmark’s beaches in summer – they’re beautiful and often less crowded than other European destinations.",
        ],

    popularDestinationsImage: "/images/denmark/popular.jpg",
    tipsImage: "/images/denmark/tips.jpg",
  };

  return <Destination data={denmarkData} />;
}
