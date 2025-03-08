// src/components/AboutUs/AboutUs.js
"use client";

import { useLanguage } from '../../context/LanguageContext'; // Importera språkkontexten
import styles from './AboutUs.module.css';

export default function AboutUs() {
  const { language } = useLanguage(); // Använd aktuell språkinställning

  return (
    <section className={styles.aboutUsWrapper}>
      {/* Lutande övergång (top) */}
      <div className={styles.slantedTop}></div>

      {/* About Us Content */}
      <div className={styles.aboutUsContent}>
        <h2 className={styles.title}>
          {language === 'sv' ? 'Om Destinations of Joy' : 'About Destinations of Joy'}
        </h2>
        <p className={styles.description}>
          {language === 'sv'
            ? 'Destinations of Joy är en premiumresebyrå som erbjuder exklusiva, skräddarsydda resor för dig som söker unika upplevelser runt om i världen. Vårt fokus ligger på att skapa minnesvärda resor som kombinerar lyx, kultur och äventyr i en harmoni av autentiska upplevelser och personlig service. Med vårt team av erfarna reseexperter och ett brett nätverk av samarbetspartners, säkerställer vi att varje detalj i din resa blir en del av en oförglömlig helhetsupplevelse.'
            : 'Destinations of Joy is a premium travel agency offering exclusive, tailor-made journeys for those seeking unique experiences around the world. Our focus is on creating memorable trips that combine luxury, culture, and adventure in a harmonious blend of authentic experiences and personalized service. With our team of experienced travel experts and a wide network of partners, we ensure that every detail of your journey contributes to an unforgettable overall experience.'
          }
        </p>
        <p className={styles.tagline}>
          {language === 'sv'
            ? 'Upplev världen på ett helt nytt sätt - låt oss förvandla dina drömmar till verklighet.'
            : 'Experience the world in a whole new way – let us turn your dreams into reality.'
          }
        </p>
      </div>

      {/* Lutande övergång (bottom) */}
      <div className={styles.slantedBottom}></div>
    </section>
  );
}
