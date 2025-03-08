// src/components/Destination/Destination.js
"use client";

import { FaUtensils, FaGlobe, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Destination.module.css';
import ActivitiesSection from '../ActivitiesSection/ActivitiesSection';
export default function Destination({ data }) {
  const { language } = useLanguage();

  return (
    <>
   
      {/* Hero Section with Video Background */}
      <div className={styles.hero}>
        <video
          className={styles.heroVideo}
          src={data.heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Destination Section */}
      <section className={styles.destination}>
         
        {/* General Info Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>
            <FaGlobe /> {data.name}
          </h2>
          <p>{data.description}</p>
        </div>
        <ActivitiesSection activities={data.activities} />
        {/* Fun Facts Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>
            <FaLightbulb /> {language === 'sv' ? "Visste Du Att?" : "Did You Know?"}
          </h2>
          <ul className={styles.list}>
            {data.facts.map((fact, index) => (
              <li key={index} className={styles.listItem}>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Destinations Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>
            <FaMapMarkerAlt /> {language === 'sv' ? `Populära Resmål` : `Popular Destinations`}
          </h2>
          <p>{data.popularDestinations}</p>
        </div>

        {/* Travel Tips Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}>
            <FaUtensils /> {language === 'sv' ? "Tips för Resenärer" : "Travel Tips"}
          </h2>
          <ul className={styles.list}>
            {data.travelTips.map((tip, index) => (
              <li key={index} className={styles.listItem}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
