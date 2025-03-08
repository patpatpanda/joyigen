"use client";
import { useLanguage } from '../../context/LanguageContext';
import styles from "./Offers.module.css";

export default function Offers() {
  const { language } = useLanguage();

  const offers = [
    {
      name: language === 'sv' ? "Fyra dagars Karibien-kryssning" : "Four-Day Caribbean Cruise",
      video: "/images/cari.mp4",
      description: language === 'sv'
        ? "Unna dig själv ett äventyr du sent kommer glömma! Platserna är begränsade, så kontakta oss idag för att säkerställa att du inte missar den här unika upplevelsen."
        : "Treat yourself to an unforgettable adventure! Spaces are limited, so contact us today to ensure you don't miss this unique experience.",
    },
    {
      name: language === 'sv' ? "Slottsrundtur i Bayern" : "Castle Tour in Bavaria",
      video: "/videos/castle.mp4",
      description: language === 'sv'
        ? "Hör av dig om du vill veta mer om vår exklusiva Slottstur i Bayern. Platserna är få, så kontakta oss för att garantera din plats."
        : "Reach out if you want to learn more about our exclusive Castle Tour in Bavaria. Spaces are limited, so contact us to secure your spot.",
    },
    {
      name: language === 'sv' ? "Kulinarisk resa genom Sydostasien" : "Culinary Journey Through Southeast Asia",
      video: "/videos/asia.mp4",
      description: language === 'sv'
        ? "En unik och spännande upplevelse genom Sydostasiens smaker och kulturer. Kontakta oss idag för att boka din plats."
        : "A unique and exciting experience through the flavors and cultures of Southeast Asia. Contact us today to book your spot.",
    },
  ];

  return (
    <section className={styles.offers}>
      <div className={styles.slantedTop}></div>
      <h2 className={styles.title}>
        {language === 'sv' ? "Exklusiva Erbjudanden" : "Exclusive Offers"}
      </h2>
      <div className={styles.cardContainer}>
        {offers.map((offer, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.mediaContainer}>
              {offer.video ? (
                <video src={offer.video} className={styles.media} autoPlay loop muted playsInline />
              ) : (
                <img src={offer.image} alt={offer.name} className={styles.media} />
              )}
            </div>
            <div className={styles.content}>
              <h3 className={styles.offerName}>{offer.name}</h3>
              <p className={styles.description}>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => (window.location.href = '/services#exklusiva-erbjudanden')}
      >
        {language === 'sv' ? "Visa Alla" : "View All"}
      </button>
      <div className={styles.slantedBottom}></div>
    </section>
  );
}
