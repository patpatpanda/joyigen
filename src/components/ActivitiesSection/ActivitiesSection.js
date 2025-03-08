import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./ActivitiesSection.module.css";

export default function ActivitiesSection({ activities }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const { language } = useLanguage();

  // Översättningar för aktiviteter och städer
  const translations = {
    sv: {
      activitiesTitle: "Våra Aktiviteter",
      noActivities: "Inga aktiviteter tillgängliga.",
      selectCity: "Välj en stad för att se aktiviteter.",
      contactButton: "Kontakta oss",
      cities: {
        Vienna: "Wien",
        Salzburg: "Salzburg",
        Innsbruck: "Innsbruck",
        Rome: "Rom",
        Venice: "Venedig",
        Florence: "Florens",
        Milan: "Milano",
        Naples: "Neapel",
        Oslo: "Oslo",
        Bergen: "Bergen",
        Tromsø: "Tromsø",
        Geiranger: "Geiranger",
        Stockholm: "Stockholm",
        Gothenburg: "Göteborg",
        Kiruna: "Kiruna",
        Copenhagen: "Köpenhamn",
        Aarhus: "Aarhus",
        Billund: "Billund",
        Bangkok: "Bangkok",
        Phuket: "Phuket",
        ChiangMai: "Chiang Mai",
        Madrid: "Madrid",
        Barcelona: "Barcelona",
        Seville: "Sevilla",
      },
    },
    en: {
      activitiesTitle: "Our Activities",
      noActivities: "No activities available.",
      selectCity: "Select a city to view activities.",
      contactButton: "Contact Us",
      cities: {
        Vienna: "Vienna",
        Salzburg: "Salzburg",
        Innsbruck: "Innsbruck",
        Rome: "Rome",
        Venice: "Venice",
        Florence: "Florence",
        Milan: "Milan",
        Naples: "Naples",
        Oslo: "Oslo",
        Bergen: "Bergen",
        Tromsø: "Tromsø",
        Geiranger: "Geiranger",
        Stockholm: "Stockholm",
        Gothenburg: "Gothenburg",
        Kiruna: "Kiruna",
        Copenhagen: "Copenhagen",
        Aarhus: "Aarhus",
        Billund: "Billund",
        Bangkok: "Bangkok",
    Phuket: "Phuket",
    ChiangMai: "Chiang Mai",
    Madrid: "Madrid",
    Barcelona: "Barcelona",
    Seville: "Seville",
      },
    },
    
  };

  const t = translations[language]; // Väljer rätt översättningar baserat på språk

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{t.activitiesTitle}</h2>

      <div className={styles.cities}>
  {Object.keys(activities).map((city) => (
    <button
      key={city}
      className={styles.cityButton}
      onClick={() => setSelectedCity(city)}
    >
      {t.cities[city]} {/* Översatt stadsnamn */}
    </button>
  ))}
</div>


      {/* Visar aktiviteter för vald stad eller fallback */}
      {selectedCity ? (
        <div className={styles.activities}>
          <h3 className={styles.cityTitle}>{t.cities[selectedCity]}</h3>
          {activities[selectedCity]?.[language]?.length > 0 ? (
            <ul className={styles.activityList}>
              {activities[selectedCity][language].map((activity, index) => (
                <li key={index} className={styles.activityItem}>
                  {activity}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noActivities}>{t.noActivities}</p>
          )}
        </div>
      ) : (
        <p className={styles.selectCity}>{t.selectCity}</p>
      )}

    
    </div>
  );
}
