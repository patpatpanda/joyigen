// src/app/destination/thailand/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationThailandPage() {
  const { language } = useLanguage();

  const thailandData = {
    name: language === 'sv' ? "Thailand" : "Thailand",
    heroVideo: "/videos/maithai.mp4",
    
    theme: {
      primary: "#F58D3B",   // Orange inspirerad av Thailands solnedgångar
      secondary: "#A60000", // Röd som representerar värme och passion
      accent: "#FFFFFF",    // Vit för renhet och kontrast
    },

    description:
      language === 'sv'
        ? "Thailand är känt som 'Leendets land' och erbjuder en blandning av gyllene stränder, historiska tempel och en dynamisk matkultur. Från de livliga gatorna i Bangkok till de lugna öarna i söder finns det alltid något att upptäcka. Upplev thailändska rätter som pad thai, tom yum och mango sticky rice, eller besök nattmarknader och flytande marknader för en autentisk upplevelse. Thailand kombinerar tradition med modernitet och är en destination som lockar resenärer från hela världen."
        : "Known as the 'Land of Smiles,' Thailand offers a mix of golden beaches, historic temples, and a vibrant culinary culture. From the bustling streets of Bangkok to the serene islands in the south, there's always something to discover. Experience Thai dishes like pad thai, tom yum, and mango sticky rice, or visit night markets and floating markets for an authentic experience. Thailand blends tradition with modernity, making it a destination that attracts travelers from around the globe.",

    foodImage: "/images/thailand/food.jpg",
    food: language === 'sv' ? "Pad Thai och Tom Yum" : "Pad Thai and Tom Yum",
    
    facts: language === 'sv'
      ? [
          "Thailand har aldrig varit koloniserat och är därför känt som 'landet av frihet'.",
          "Bangkok, eller 'Krung Thep', är den mest besökta staden i världen.",
          "Landet har över 40,000 tempel, varav många fortfarande används dagligen.",
          "Thailändska nyåret, Songkran, firas med vattenfestivaler över hela landet.",
          "Thailändsk massage är känd över hela världen för sin helande kraft.",
        ]
      : [
          "Thailand has never been colonized and is known as the 'Land of Freedom.'",
          "Bangkok, or 'Krung Thep,' is the most visited city in the world.",
          "The country has over 40,000 temples, many of which are still in use daily.",
          "Thai New Year, Songkran, is celebrated with water festivals across the country.",
          "Thai massage is renowned worldwide for its healing power.",
        ],

    activities: {
      Bangkok: {
        sv: [
          "Utforska det magnifika Grand Palace och Wat Phra Kaew.",
          "Besök Wat Arun vid solnedgången för spektakulära vyer.",
          "Upptäck Chatuchak-marknaden, en av världens största.",
          "Ta en båttur på Chao Phraya-floden.",
          "Smaka på street food i Chinatown.",
        ],
        en: [
          "Explore the magnificent Grand Palace and Wat Phra Kaew.",
          "Visit Wat Arun at sunset for spectacular views.",
          "Discover Chatuchak Market, one of the world’s largest.",
          "Take a boat ride on the Chao Phraya River.",
          "Taste street food in Chinatown.",
        ],
      },
      Phuket: {
        sv: [
          "Slappna av på Patong Beach eller Karon Beach.",
          "Besök Big Buddha, en ikonisk staty med panoramautsikt.",
          "Utforska gamla Phuket Town med sina färgglada byggnader.",
          "Ta en båtutflykt till Phi Phi-öarna.",
          "Snorkla eller dyka vid Similan-öarna.",
        ],
        en: [
          "Relax on Patong Beach or Karon Beach.",
          "Visit Big Buddha, an iconic statue with panoramic views.",
          "Explore Old Phuket Town with its colorful buildings.",
          "Take a boat trip to the Phi Phi Islands.",
          "Snorkel or dive at the Similan Islands.",
        ],
      },
      ChiangMai: {
        sv: [
          "Besök Wat Phra That Doi Suthep, ett bergstempel med fantastisk utsikt.",
          "Delta i Yi Peng, den berömda lyktafestivalen.",
          "Utforska nattmarknaden och prova lokala rätter.",
          "Delta i en thailändsk matlagningskurs.",
          "Utforska naturen i Doi Inthanon National Park.",
        ],
        en: [
          "Visit Wat Phra That Doi Suthep, a mountain temple with stunning views.",
          "Participate in Yi Peng, the famous lantern festival.",
          "Explore the night market and sample local dishes.",
          "Take a Thai cooking class.",
          "Discover nature in Doi Inthanon National Park.",
        ],
      },
    },

    travelTips: language === 'sv'
      ? [
          "Thailand är varmt året runt, men det är bäst att undvika regnperioden mellan maj och oktober.",
          "Klä dig respektfullt när du besöker tempel – täck axlar och knän.",
          "Pruta artigt på marknader, det är en del av kulturen.",
          "Drick inte kranvatten – flaskvatten är ett säkert alternativ.",
          "Använd lokala transporter som tuk-tuks och motorcykeltaxi för att komma runt billigt.",
        ]
      : [
          "Thailand is warm year-round, but it’s best to avoid the rainy season between May and October.",
          "Dress respectfully when visiting temples – cover your shoulders and knees.",
          "Politely bargain at markets; it’s part of the culture.",
          "Avoid drinking tap water – bottled water is a safe option.",
          "Use local transportation like tuk-tuks and motorcycle taxis to get around cheaply.",
        ],

    popularDestinationsImage: "/images/thailand/popular.jpg",
    tipsImage: "/images/thailand/tips.jpg",
  };

  return <Destination data={thailandData} />;
}
