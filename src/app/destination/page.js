"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Destinations.module.css';
import { FaBullseye, FaMoneyBillWave, FaCloudSun, FaLandmark, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Destinations = () => {
  const tips = [
    {
      icon: FaBullseye,
      title: "Definiera dina mål",
      description: "Fundera på vad du vill få ut av din resa – äventyr, kultur, avkoppling eller kanske en mix av allt? Att ha ett tydligt mål hjälper dig att välja rätt destination."
    },
    {
      icon: FaMoneyBillWave,
      title: "Tänk på din budget",
      description: "Resor kan variera kraftigt i kostnad beroende på destination, boende och aktiviteter. Att sätta en budget i förväg hjälper dig att begränsa alternativen och undvika överraskningar."
    },
    {
      icon: FaCloudSun,
      title: "Undersök klimatet",
      description: "Klimatet påverkar resan avsevärt. Vill du njuta av sol och värme, eller är svalare temperaturer och snö mer i din smak? Kolla väderförhållandena för att få en bättre upplevelse."
    },
    {
      icon: FaLandmark,
      title: "Utforska kulturella upplevelser",
      description: "Om kultur och traditioner är viktiga för dig, undersök vilka kulturella sevärdheter, festivaler och historiska platser som finns på olika destinationer."
    },
    {
      icon: FaClock,
      title: "Resans längd och logistik",
      description: "Planera efter hur lång tid du har tillgängligt. Vissa destinationer är bättre lämpade för kortare resor, medan andra kräver mer tid för att verkligen upplevas."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Utforska lokala smultronställen",
      description: "Förutom de välkända turistattraktionerna kan det vara givande att besöka mindre kända platser som bara lokalbefolkningen känner till."
    }
  ];

  const destinations = [
    {
      name: "Italien",
      description: "Utforska soliga stränder, fantastisk mat och historiska sevärdheter i Italien.",
      image: "/images/italy.jpg",
      link: "/destination/italy"
    },
    {
      name: "Norge",
      description: "Upplev fantastiska fjordar, norrsken och unika naturupplevelser i Norge.",
      image: "/images/norway.jpg",
      link: "/destination/norway"
    },
    {
      name: "Österrike",
      description: "Njut av Alpernas hisnande skönhet, skidåkning och rik kultur i Österrike.",
      image: "/images/österike.jpg",
      link: "/destination/Austria"
    },
  ];

  return (
    <section className={styles.destinations}>
      <div className={styles.divider}>
        <h3 className={`${styles.dividerTitle} ${styles.fadeInSmooth}`} style={{ animationDelay: '0.1s' }}>
          Tips för att Välja Rätt Destination
        </h3>
        <p className={`${styles.dividerSubtitle} ${styles.fadeInSmooth}`} style={{ animationDelay: '0.3s' }}>
          Tänk på vad du vill få ut av din resa – avkoppling, äventyr eller kulturupplevelser? Fundera på din budget, klimatet och vilka sevärdheter som intresserar dig mest. Med rätt planering kan du skapa en resa som uppfyller dina drömmar och mål.
        </p>
        <hr className={`${styles.dividerLine} ${styles.fadeInSmooth}`} style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Tips Section */}
      <div className={styles.tips}>
        {tips.map((tip, index) => {
          const IconComponent = tip.icon;
          return (
            <div key={index} className={`${styles.tip} ${styles.fadeInSmooth}`} style={{ animationDelay: `${0.2 * index + 0.5}s` }}>
              <IconComponent className={styles.tipIcon} />
              <div className={styles.tipContent}>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.divider}>
        <h3 className={`${styles.dividerTitle} ${styles.fadeInSmooth}`} style={{ animationDelay: '1.2s' }}>
          Upptäck och Inspireras
        </h3>
        <p className={`${styles.dividerSubtitle} ${styles.fadeInSmooth}`} style={{ animationDelay: '1.4s' }}>
          Utforska våra handplockade destinationer för en oförglömlig upplevelse.
        </p>
        <hr className={`${styles.dividerLine} ${styles.fadeInSmooth}`} style={{ animationDelay: '1.6s' }} />
      </div>

      {/* Destination Cards Section */}
      <div className={styles.cardsContainer}>
        {destinations.map((destination, index) => (
          <Link href={destination.link} key={index}>
            <div className={`${styles.card} ${styles.fadeInSmooth}`} style={{ animationDelay: `${0.2 * index + 1.8}s` }}>
              <img src={destination.image} alt={destination.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{destination.name}</h3>
                <p className={styles.cardDescription}>{destination.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
