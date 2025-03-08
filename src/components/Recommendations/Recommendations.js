// src/components/Recommendations/Recommendations.js
"use client";

import styles from './Recommendations.module.css';

export default function Recommendations() {
  const recommendations = [
    { name: "Italien", image: "/images/italy.jpg", description: "Upptäck historiska städer och vacker natur i Italien." },
    { name: "Österrike", image: "/images/austria.jpg", description: "Njut av de vackra alperna och kultur i Österrike." },
    { name: "Norge", image: "/images/norway.jpg", description: "Upplev fantastiska fjordar och norrsken i Norge." }
  ];

  return (
    <section className={styles.recommendations}>
      <h2 className={styles.title}>Vi rekommenderar</h2>
      <div className={styles.cardsContainer}>
        {recommendations.map((rec, index) => (
          <div key={index} className={styles.card}>
            <img src={rec.image} alt={rec.name} className={styles.image} />
            <h3 className={styles.cardTitle}>{rec.name}</h3>
            <p className={styles.description}>{rec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
