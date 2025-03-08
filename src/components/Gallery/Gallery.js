// src/components/Gallery/Gallery.js

import Link from 'next/link';
import styles from './Gallery.module.css';

export default function Gallery() {
  const destinations = [
    { name: "Italien", image: "/images/italy.jpg", path: "/destination/italy" },
    { name: "Österrike", image: "/images/österike.jpg", path: "/destination/Austria" },
    { name: "Norge", image: "/images/norway.jpg", path: "/destination/norway" },
  ];

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Utvalda Destinationer</h2>
      <div className={styles.grid}>
        {destinations.map((destination, index) => (
          <Link href={destination.path} key={index}>
            <div className={styles.card}>
              <img src={destination.image} alt={destination.name} className={styles.image} />
              <div className={styles.overlay}>
                <h3 className={styles.destinationName}>{destination.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
