"use client";
import { useLanguage } from '../../context/LanguageContext';
import styles from './ExclusiveOffers.module.css';

export default function ExclusiveOffers() {
  const { language } = useLanguage();

  const offers = [
    // De tre första erbjudandena från första sidan
    {
      title: language === 'sv' ? "Karibisk lyxkryssning" : "Caribbean Luxury Cruise",
      description: language === 'sv'
        ? "Upplev en lyxig kryssning runt Karibiens öar, med allt från gourmetmat till exklusiva utflykter."
        : "Experience a luxurious cruise around the Caribbean islands, featuring gourmet dining and exclusive excursions.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Privat safaritur i Afrika" : "Private Safari Tour in Africa",
      description: language === 'sv'
        ? "Få en personlig safaritur i Afrika med en erfaren guide och boende på exklusiva lodger."
        : "Enjoy a personal safari tour in Africa with an experienced guide and stay at exclusive lodges.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Romantisk weekend i Paris" : "Romantic Weekend in Paris",
      description: language === 'sv'
        ? "Njut av en romantisk resa till Paris med specialerbjudanden på lyxhotell och restauranger."
        : "Enjoy a romantic trip to Paris with special offers on luxury hotels and restaurants.",
      image: "/images/hero.webp",
    },
    // Sex ytterligare erbjudanden
    {
      title: language === 'sv' ? "Historiska slott i Skottland" : "Historic Castles in Scotland",
      description: language === 'sv'
        ? "Utforska Skottlands mest mystiska och historiska slott med en guidad tur."
        : "Explore Scotland's most mysterious and historic castles with a guided tour.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Vinprovning i Toscana" : "Wine Tasting in Tuscany",
      description: language === 'sv'
        ? "Upplev Italiens bästa vingårdar och smaka på världskända viner i Toscana."
        : "Experience Italy's finest vineyards and taste world-renowned wines in Tuscany.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Fjällvandring i Norge" : "Mountain Hiking in Norway",
      description: language === 'sv'
        ? "En oförglömlig vandringsupplevelse genom Norges vackraste fjäll."
        : "An unforgettable hiking experience through Norway's most beautiful mountains.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Ökenäventyr i Dubai" : "Desert Adventure in Dubai",
      description: language === 'sv'
        ? "Ett spännande ökenäventyr med sandboarding, kamelridning och lyxigt ökenboende."
        : "An exciting desert adventure featuring sandboarding, camel riding, and luxurious desert accommodations.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Spahelg i Alperna" : "Spa Weekend in the Alps",
      description: language === 'sv'
        ? "Koppla av och njut av en spahelg i Alperna med utsikt över snöklädda berg."
        : "Relax and enjoy a spa weekend in the Alps with views of snow-covered mountains.",
      image: "/images/hero.webp",
    },
    {
      title: language === 'sv' ? "Kulturell rundtur i Tokyo" : "Cultural Tour in Tokyo",
      description: language === 'sv'
        ? "Utforska Tokyos rika kultur, från gamla tempel till modern teknologi."
        : "Explore Tokyo's rich culture, from ancient temples to modern technology.",
      image: "/images/hero.webp",
    },
  ];

  return (
    <section className={styles.exclusiveOffers}>
      <div className={styles.offerGrid}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offerCard}>
            <img src={offer.image} alt={offer.title} className={styles.offerImage} />
            <h4 className={styles.offerTitle}>{offer.title}</h4>
            <p className={styles.offerDescription}>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
