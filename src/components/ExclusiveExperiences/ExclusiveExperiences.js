"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useLanguage } from '../../context/LanguageContext';
import styles from "./ExclusiveExperiences.module.css";

export default function ExclusiveExperiences() {
  const { language } = useLanguage();
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionsRef = useRef([]);

  const experiences = [
    {
      name: language === 'sv' ? "Glamping-äventyr" : "Glamping Adventure",
      video: "/videos/glamping.mp4",
      description: language === 'sv'
        ? "Föreställ dig en unik campingupplevelse där naturens skönhet möter modern komfort..."
        : "Imagine a unique camping experience where the beauty of nature meets modern comfort...",
      highlights: language === 'sv'
        ? ["Unik boendestil", "Privata tält", "Gourmetmåltider"]
        : ["Unique lodging", "Private tents", "Gourmet meals"],
      slug: "glamping",
    },
    {
      name: language === 'sv' ? "Spa-upplevelse" : "Spa Experience",
      video: "/videos/spa.mp4",
      description: language === 'sv'
        ? "Lämna stressen bakom dig och njut av lyxiga behandlingar för kropp och själ..."
        : "Leave stress behind and enjoy luxurious treatments for body and soul...",
      highlights: language === 'sv'
        ? ["Varma källor", "Zen-trädgårdar"]
        : ["Hot springs", "Zen gardens"],
      slug: "spa",
    },
    {
      name: language === 'sv' ? "Avkopplande getaway" : "Relaxing Getaway",
      video: "/videos/gateway.mp4",
      description: language === 'sv'
        ? "Fly vardagens stress och återställ balansen i natursköna miljöer..."
        : "Escape daily stress and restore balance in scenic surroundings...",
      highlights: language === 'sv'
        ? ["Charmiga stugor", "Yoga-sessioner"]
        : ["Charming cabins", "Yoga sessions"],
      slug: "getaway",
    },
  ];

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index, 10);
        if (entry.isIntersecting) {
          setVisibleSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      sectionsRef.current = [];
    };
  }, [handleIntersection]);

  return (
    <section className={styles.exclusiveExperiences}>
      {experiences.map((experience, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          data-index={index}
          className={`${styles.section} ${visibleSections.includes(index) ? styles.visible : ""}`}
        >
          <div className={styles.videoContainer}>
            <video
              src={experience.video}
              className={styles.video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className={styles.content}>
            <h1 className={styles.heading}>{experience.name}</h1> {/* Uppdaterad */}
            <p className={styles.description}>{experience.description}</p>
            <ul className={styles.highlights}>
              {experience.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
            <Link href={`/exclusive/${experience.slug}`} className={styles.readMore}>
              {language === 'sv' ? "Läs mer" : "Read more"}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
