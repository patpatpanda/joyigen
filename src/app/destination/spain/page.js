// src/app/destination/spain/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationSpainPage() {
  const { language } = useLanguage();

  const spainData = {
    name: language === 'sv' ? "Spanien" : "Spain",
    heroVideo: "/videos/spain.mp4",
    
    theme: {
      primary: "#C8102E",   // Röd från spanska flaggan
      secondary: "#FFCD00", // Gul från spanska flaggan
      accent: "#FFFFFF",    // Vit för kontrast
    },

    description:
      language === 'sv'
        ? "Spanien är ett land av passion, historia och oändliga äventyr. Från de soliga stränderna på Costa del Sol till de ikoniska byggnaderna i Barcelona och Madrids pulserande liv, erbjuder Spanien något för alla. Upplev spansk kultur genom tapas, paella och flamenco, eller utforska historiska platser som Alhambra i Granada och Santiago de Compostela. Spanien är en blandning av tradition och modernitet, där varje region har sin unika charm och karaktär."
        : "Spain is a country of passion, history, and endless adventures. From the sunny beaches of Costa del Sol to the iconic architecture of Barcelona and Madrid’s vibrant life, Spain offers something for everyone. Experience Spanish culture through tapas, paella, and flamenco, or explore historic sites like the Alhambra in Granada and Santiago de Compostela. Spain is a blend of tradition and modernity, with each region offering its unique charm and character.",

    foodImage: "/images/spain/food.jpg",
    food: language === 'sv' ? "Tapas och Paella" : "Tapas and Paella",
    
    facts: language === 'sv'
      ? [
          "Spanien har 47 UNESCO-världsarv, vilket gör det till ett av de mest kulturellt rika länderna i världen.",
          "Spanjorer äter middag sent – vanligtvis runt 21:00 eller senare.",
          "La Tomatina är en årlig tomatkastningsfestival som hålls i staden Buñol.",
          "Sagrada Familia i Barcelona är fortfarande under konstruktion trots att arbetet började 1882.",
          "Flamenco är en traditionell dans- och musikstil som kommer från Andalusien.",
        ]
      : [
          "Spain has 47 UNESCO World Heritage sites, making it one of the most culturally rich countries in the world.",
          "Spaniards eat dinner late – usually around 9 PM or later.",
          "La Tomatina is an annual tomato-throwing festival held in the town of Buñol.",
          "Sagrada Familia in Barcelona is still under construction despite work starting in 1882.",
          "Flamenco is a traditional dance and music style originating from Andalusia.",
        ],

    activities: {
      Madrid: {
        sv: [
          "Besök Pradomuseet och utforska spansk konst.",
          "Promenera genom Retiroparken.",
          "Upptäck Madrids kungliga palats.",
          "Smaka på churros med choklad på San Ginés.",
          "Utforska Gran Vía för shopping och nöje.",
        ],
        en: [
          "Visit the Prado Museum to explore Spanish art.",
          "Stroll through Retiro Park.",
          "Discover the Royal Palace of Madrid.",
          "Try churros with chocolate at San Ginés.",
          "Explore Gran Vía for shopping and entertainment.",
        ],
      },
      Barcelona: {
        sv: [
          "Beundra Gaudís Sagrada Familia.",
          "Promenera längs La Rambla.",
          "Utforska Park Güell, en färgglad park designad av Gaudí.",
          "Besök det gotiska kvarteret.",
          "Njut av sol och hav på Barceloneta-stranden.",
        ],
        en: [
          "Admire Gaudí’s Sagrada Familia.",
          "Stroll along La Rambla.",
          "Explore Park Güell, a colorful park designed by Gaudí.",
          "Visit the Gothic Quarter.",
          "Enjoy sun and sea at Barceloneta Beach.",
        ],
      },
      Seville: {
        sv: [
          "Besök katedralen i Sevilla och La Giralda-tornet.",
          "Utforska Real Alcázar, ett imponerande palats.",
          "Delta i en flamencouppvisning.",
          "Promenera längs Plaza de España.",
          "Upptäck de charmiga gränderna i Santa Cruz.",
        ],
        en: [
          "Visit Seville Cathedral and La Giralda Tower.",
          "Explore the Real Alcázar, an impressive palace.",
          "Attend a flamenco performance.",
          "Stroll through Plaza de España.",
          "Discover the charming streets of Santa Cruz.",
        ],
      },
    },

    travelTips: language === 'sv'
      ? [
          "Spanien är varmt på sommaren, så planera aktiviteter tidigt på morgonen eller sent på eftermiddagen.",
          "Pröva regionala specialiteter – varje del av Spanien har sina unika smaker.",
          "Tänk på att många butiker och restauranger stänger för siesta mitt på dagen.",
          "Använd tågen för att resa snabbt och bekvämt mellan städer.",
          "Besök en lokal marknad för att uppleva spanska råvaror och delikatesser.",
        ]
      : [
          "Spain is hot in summer, so plan activities early in the morning or late in the afternoon.",
          "Try regional specialties – each part of Spain has its unique flavors.",
          "Keep in mind that many shops and restaurants close for a siesta in the middle of the day.",
          "Use trains to travel quickly and comfortably between cities.",
          "Visit a local market to experience Spanish produce and delicacies.",
        ],

    popularDestinationsImage: "/images/spain/popular.jpg",
    tipsImage: "/images/spain/tips.jpg",
  };

  return <Destination data={spainData} />;
}
