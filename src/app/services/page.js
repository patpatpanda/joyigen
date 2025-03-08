"use client";
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Services.module.css';
import { FaUsers, FaPlane, FaGlobe } from 'react-icons/fa';
import ExclusiveExperiences from '../../components/ExclusiveExperiences/ExclusiveExperiences';
import ExclusiveOffers from '../../components/ExclusiveOffers/ExclusiveOffers';

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'sv' ? "Rådgivning för Familjeresor" : "Family Travel Consulting",
      description: language === 'sv'
        ? "Vi erbjuder pålitlig rådgivning för familjeresor, så att du kan känna dig trygg i att varje steg är planerat för en minnesvärd upplevelse."
        : "We offer reliable consulting for family travel, ensuring each step is planned for a memorable experience.",
      icon: <FaUsers />,
    },
    {
      title: language === 'sv' ? "Reseplanering" : "Travel Planning",
      description: language === 'sv'
        ? "Med vår omfattande expertis skapar vi resplaner som passar alla dina behov. Perfekt för både soloäventyr och gruppresor."
        : "With our extensive expertise, we create travel plans tailored to all your needs. Perfect for solo adventures and group trips alike.",
      icon: <FaPlane />,
    },
    {
      title: language === 'sv' ? "Internationell resevägledning" : "International Travel Guidance",
      description: language === 'sv'
        ? "Med år av erfarenhet guidar vi våra kunder genom internationella resor med enkelhet och professionalism."
        : "With years of experience, we guide our clients through international travel with ease and professionalism.",
      icon: <FaGlobe />,
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.serviceCard}`);
    cards.forEach((card, index) => {
      card.style.setProperty('--animation-delay', `${index * 0.3}s`);
    });
  }, []);

  return (
    <section className={styles.servicesSection}>
      {/* Sektion 1: Tjänster */}
      <div id="Expertise" className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>{service.icon}</div>
            <h4 className={styles.cardTitle}>{service.title}</h4>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider}>
        <h3 className={styles.dividerTitle}>
          {language === 'sv' ? "Utforska Våra Exklusiva Upplevelser" : "Explore Our Exclusive Experiences"}
        </h3>
        <p className={styles.dividerSubtitle}>
          {language === 'sv'
            ? "För att göra din resa extra minnesvärd, erbjuder vi unika och skräddarsydda upplevelser som du inte hittar någon annanstans."
            : "To make your journey extra memorable, we offer unique and tailored experiences you won’t find anywhere else."}
        </p>
        <hr className={styles.dividerLine} />
      </div>

      {/* Sektion 2: Exklusiva Upplevelser */}
      <div id="exklusiva-upplevelser" className={styles.exclusiveExperiences}>
        <ExclusiveExperiences />
      </div>

      <div className={styles.divider}>
        <h3 className={styles.dividerTitle}>
          {language === 'sv' ? "Exklusiva Erbjudanden för Dina Drömresor" : "Exclusive Offers for Your Dream Trips"}
        </h3>
        <p className={styles.dividerSubtitle}>
          {language === 'sv'
            ? "Ta del av våra handplockade erbjudanden som gör din resa ännu mer prisvärd och minnesvärd. Oavsett om du letar efter en weekendresa, ett långt äventyr eller något däremellan, erbjuder vi rabatter och specialpaket på några av världens mest fantastiska destinationer. Våra erbjudanden är tidsbegränsade och unika, så passa på att boka din drömresa med extra förmåner!"
            : "Take advantage of our handpicked offers that make your journey even more affordable and memorable. Whether you're looking for a weekend getaway, a long adventure, or something in between, we offer discounts and special packages on some of the world's most amazing destinations. Our offers are time-limited and unique, so make sure to book your dream trip with extra benefits!"}
        </p>
        <hr className={styles.dividerLine} />
      </div>

      {/* Sektion 3: Exklusiva Erbjudanden */}
      <div id="exklusiva-erbjudanden" className={styles.exclusiveOffers}>
        <ExclusiveOffers />
      </div>
    </section>
  );
}
