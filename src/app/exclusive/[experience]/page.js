"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import styles from "./ExperienceDetails.module.css";
import Link from "next/link";
export default function ExperienceDetails() {
  const { experience } = useParams();
  const { language } = useLanguage();

  const experiences = {
    glamping: {
      name: language === "sv" ? "Glamping-äventyr" : "Glamping Adventure",
      image: "/images/run.jpg",
      description: language === "sv"
        ? "Utforska den perfekta kombinationen av lyx och natur. Våra glamping-äventyr låter dig uppleva magin i att bo under stjärnorna utan att kompromissa med bekvämlighet."
        : "Explore the perfect blend of luxury and nature. Our glamping adventures let you experience the magic of staying under the stars without sacrificing comfort.",
      details: language === "sv"
        ? "Detta paket inkluderar ett fullt möblerat tält med en bekväm dubbelsäng, privat terrass och lyxiga badrum. Upplev lokala gourmetmiddagar, guidade naturvandringar och exklusiv stjärnskådning. Perfekt för par eller familjer som söker en unik upplevelse."
        : "This package includes a fully furnished tent with a comfortable double bed, private terrace, and luxury bathrooms. Enjoy locally-sourced gourmet dinners, guided nature hikes, and exclusive stargazing. Perfect for couples or families seeking a unique experience.",
      highlights: language === "sv"
        ? ["Privat tält med terrass", "3-rätters middag vid lägerelden", "Guidad stjärnskådning", "Vandringar i vacker natur"]
        : ["Private tent with terrace", "3-course campfire dinner", "Guided stargazing", "Hikes through stunning landscapes"],
    },
    spa: {
      name: language === "sv" ? "Spa-upplevelse" : "Spa Experience",
      image: "/images/spa.jpg",
      description: language === "sv"
        ? "Ge dig själv tid att koppla av och återställa balansen i en harmonisk miljö. Vårt spa-paket är en resa för både kropp och själ."
        : "Give yourself the time to unwind and restore balance in a harmonious environment. Our spa package is a journey for both body and soul.",
      details: language === "sv"
        ? "Paketet inkluderar tillgång till lyxiga varma källor, bastur och relaxområden. Du får välja mellan flera behandlingar, inklusive aromaterapimassage och ansiktsbehandlingar. En hälsosam lunch och örtteer ingår också för att ge dig energi under dagen."
        : "The package includes access to luxurious hot springs, saunas, and relaxation areas. You can choose from various treatments, including aromatherapy massages and facials. A healthy lunch and herbal teas are also included to energize your day.",
      highlights: language === "sv"
        ? ["Varma källor och bastu", "Aromaterapibehandlingar", "Zen-trädgård för meditation", "Ekologisk lunch"]
        : ["Hot springs and sauna", "Aromatherapy treatments", "Zen garden for meditation", "Organic lunch"],
    },
    getaway: {
      name: language === "sv" ? "Avkopplande getaway" : "Relaxing Getaway",
      image: "/images/gateway.jpg",
      description: language === "sv"
        ? "Fly vardagens stress och återfinn lugnet i en naturskön miljö. Vår getaway ger dig tid att fokusera på dig själv."
        : "Escape the stress of daily life and find peace in a scenic environment. Our getaway gives you time to focus on yourself.",
      details: language === "sv"
        ? "Detta paket erbjuder boende i en charmig stuga med utsikt över naturen. Delta i yoga- och meditationssessioner, njut av ekologiska måltider och ta del av guidade promenader i skog och mark. Perfekt för dig som söker en paus från allt."
        : "This package offers accommodation in a charming cabin overlooking nature. Join yoga and meditation sessions, enjoy organic meals, and take part in guided forest walks. Perfect for those looking for a break from everything.",
      highlights: language === "sv"
        ? ["Charmiga stugor", "Yoga och mindfulness-sessioner", "Ekologiska måltider", "Guidad skogspromenad"]
        : ["Charming cabins", "Yoga and mindfulness sessions", "Organic meals", "Guided forest walk"],
    },
    
  };
  

  const experienceData = experiences[experience];

  if (!experienceData) return <div>Experience not found</div>;

  return (
    <section className={styles.experienceDetails}>
      <div
        className={styles.heroImage}
        style={{ backgroundImage: `url(${experienceData.image})` }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{experienceData.name}</h1>
        <p className={styles.description}>{experienceData.description}</p>
        <p className={styles.details}>{experienceData.details}</p>
        <ul className={styles.highlights}>
          {experienceData.highlights.map((highlight, index) => (
            <li key={index} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
       {/* Kontaktsektion */}
       <div className={styles.contactSection}>
        <p className={styles.contactText}>
          {language === "sv"
            ? "Har du frågor om våra exklusiva upplevelser? Tveka inte att höra av dig!"
            : "Do you have questions about our exclusive experiences? Don’t hesitate to reach out!"}
        </p>
        <Link href="/#contact" className={styles.contactButton}>
          {language === "sv" ? "Kontakta oss" : "Contact Us"}
          </Link>
      </div>
    </section>
  );
}
