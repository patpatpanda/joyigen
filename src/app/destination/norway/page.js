// src/app/destination/norway/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationNorwayPage() {
  const { language } = useLanguage();

  const norwayData = {
    name: language === 'sv' ? "Norge" : "Norway",
    heroVideo: "/videos/norway.mp4",
    
    theme: {
      primary: "#BA0C2F",   // Norsk röd (från flaggan)
      secondary: "#00205B", // Norsk blå (från flaggan)
      accent: "#FFFFFF",    // Vit accentfärg för kontrast
    },

    description:
      language === 'sv'
        ? "Norge är en dröm för naturälskare, känt för sina dramatiska fjordar, majestätiska fjäll och ett landskap som känns taget ur en saga. Här möter du ett land som vördar sin natur och sina traditioner. Norsk matkultur är enkel men präglad av rena smaker från havet och bergen – här njuter du av rätter som rakfisk, fårikål och den älskade brunosten. Samtidigt har städer som Oslo och Bergen vuxit fram som kulinariska pärlor med moderna tolkningar av nordiska smaker på prisbelönta restauranger. Oavsett om du befinner dig på ett mysigt kafé i Tromsø eller njuter av finare mat i Oslo, är maten en spegling av Norges naturnära själ och starka hållbarhetstänk."
        : "Norway is a dream for nature lovers, known for its dramatic fjords, majestic mountains, and landscapes that feel taken from a fairytale. Here you find a country that honors its nature and traditions. Norwegian cuisine is simple but marked by pure flavors from the sea and mountains – enjoy dishes like rakfisk, fårikål, and the beloved brunost. Cities like Oslo and Bergen have emerged as culinary gems, with modern interpretations of Nordic flavors in award-winning restaurants. Whether you're at a cozy café in Tromsø or enjoying fine dining in Oslo, the food reflects Norway's nature-focused soul and commitment to sustainability.",

    foodImage: "/images/norway/food.jpg",
    food: language === 'sv' ? "Fisk och Fårikål" : "Fish and Fårikål",
    
    facts: language === 'sv'
      ? [
          "Norge har över 1,000 fjordar – mest kända är Geirangerfjorden och Nærøyfjorden, båda UNESCO-skyddade för sin skönhet.",
          "I norra Norge kan du uppleva midnattssol under sommaren och polarnattens mystik på vintern.",
          "Friluftsliv är djupt rotat i den norska kulturen och handlar om att vara i harmoni med naturen året runt.",
          "Norge är världens största producent av odlad lax, och denna lyxiga fisk når hela världen.",
          "Oslo är ett centrum för innovativ matlagning och har flera Michelin-restauranger som lockar matentusiaster.",
          "Nordnorge är en av de bästa platserna för att uppleva norrsken, en magisk naturföreteelse som förtrollar besökare under vintermånaderna.",
        ]
      : [
          "Norway has over 1,000 fjords – the most famous are the Geirangerfjord and Nærøyfjord, both UNESCO-protected for their beauty.",
          "In northern Norway, you can experience the midnight sun in summer and the mystique of polar nights in winter.",
          "Outdoor life (friluftsliv) is deeply rooted in Norwegian culture, reflecting harmony with nature year-round.",
          "Norway is the world’s largest producer of farmed salmon, and this luxury fish reaches the whole world.",
          "Oslo is a hub for innovative cuisine and has several Michelin-starred restaurants attracting food enthusiasts.",
          "Northern Norway is one of the best places to experience the Northern Lights, a magical phenomenon that enchants visitors during winter months.",
        ],

    activities: {
      Oslo: {
        sv: [
          "Utforska Vigelandsparken",
          "Besök Operahuset i Oslo",
          "Upptäck Nasjonalmuseet",
          "Promenera i Aker Brygge",
          "Vandra i Nordmarka skogar",
        ],
        en: [
          "Explore Vigeland Park",
          "Visit the Oslo Opera House",
          "Discover the National Museum",
          "Stroll around Aker Brygge",
          "Hike in Nordmarka Forest",
        ],
      },
      Bergen: {
        sv: [
          "Åk Fløibanen till toppen av Fløyen",
          "Besök Bryggen – en UNESCO-världsarvsplats",
          "Upptäck Fisketorget",
          "Utforska Troldhaugen, Edvard Griegs hem",
          "Vandra på Ulriken, Bergens högsta fjäll",
        ],
        en: [
          "Take the Fløibanen funicular to Mount Fløyen",
          "Visit Bryggen – a UNESCO World Heritage site",
          "Explore the Fish Market",
          "Discover Troldhaugen, Edvard Grieg's home",
          "Hike Mount Ulriken, Bergen's tallest mountain",
        ],
      },
      Tromsø: {
        sv: [
          "Upplev norrskenet",
          "Besök Polarmuseet",
          "Gå på Tromsø Domkyrka",
          "Utforska Fjellheisen för panoramautsikt",
          "Delta i hundspannsturer",
        ],
        en: [
          "Experience the Northern Lights",
          "Visit the Polar Museum",
          "Walk through Tromsø Cathedral",
          "Explore Fjellheisen for panoramic views",
          "Join a dog sledding adventure",
        ],
      },
      Geiranger: {
        sv: [
          "Åk på en båttur på Geirangerfjorden",
          "Utforska de sju systrarnas vattenfall",
          "Besök Flydalsjuvet för hisnande vyer",
          "Vandra på Skageflå-leden",
          "Upptäck Norsk Fjordsenter",
        ],
        en: [
          "Take a boat tour on the Geirangerfjord",
          "Explore the Seven Sisters Waterfall",
          "Visit Flydalsjuvet for breathtaking views",
          "Hike the Skageflå Trail",
          "Discover the Norwegian Fjord Center",
        ],
      },
    },

    travelTips: language === 'sv'
      ? [
          "Planerar du att köra bil? Var beredd på att många vägar är smala, särskilt i fjällområden, och kan vara utmanande att köra på vintertid.",
          "Klä dig i lager – norskt väder är oförutsägbart, även på sommaren kan det vara svalt och blåsigt.",
          "Utforska naturen med respekt – håll dig till markerade leder och följ lokalbefolkningens vana att lämna platser som du fann dem.",
          "Boka boende i förväg om du vill besöka populära områden som Lofoten under högsäsong. Många ställen blir snabbt fullbokade under sommaren.",
          "Tänk på att Norge är ett dyrt land – för att spara pengar kan du prova att handla i lokala matbutiker eller ta med picknick ut i naturen.",
        ]
      : [
          "Planning to drive? Be prepared for narrow roads, especially in mountainous areas, which can be challenging in winter.",
          "Dress in layers – Norwegian weather is unpredictable, and it can be cool and windy even in summer.",
          "Explore nature with respect – stick to marked trails and follow the local custom of leaving places as you found them.",
          "Book accommodation in advance if you plan to visit popular areas like Lofoten during peak season. Many places fill up quickly in summer.",
          "Keep in mind that Norway is an expensive country – to save money, consider shopping at local grocery stores or taking a picnic into nature.",
        ],

    popularDestinationsImage: "/images/norway/popular.jpg",
    tipsImage: "/images/norway/tips.jpg",
  };

  return <Destination data={norwayData} />;
}
