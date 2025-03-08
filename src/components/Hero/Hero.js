"use client";
import { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const video1Ref = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const video1 = video1Ref.current;
    if (video1) {
      video1.play().catch((error) => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={video1Ref}
        autoPlay
        muted
        playsInline
        loop
        className={styles.backgroundVideo}
      >
        <source src="/videos/wtf.mp4" type="video/mp4" />
        Din webbläsare stöder inte videouppspelning.
      </video>

      <div className={styles.overlay}></div>
      <div className={styles.content}>
        
    {/* Logotypen */}
<div className={styles.logo}>
  <div className={styles.lineContainer}>
    <div className={styles.lineLeft}></div>
    <h1>DESTINATION OF JOY</h1>
    <div className={styles.lineRight}></div>
  </div>
  <div className={styles.logoLine}></div>
  <h2>{language === 'sv' ? 'Omfamna resan' : 'Embrace the Journey'}</h2>
</div>


        <p className={styles.subtitle}>
          {language === 'sv'
            ? 'Välkommen till en värld bortom det vanliga. Hos oss handlar resande om mer än att bara besöka en plats – det är en resa in i själens innersta hörn. Med våra exklusiva och skräddarsydda resor får du chansen att utforska ikoniska platser och gömda pärlor, omslutna av lyx och omtanke.'
            : 'Welcome to a world beyond the ordinary. With us, travel is about more than just visiting a place – it\'s a journey into the deepest corners of the soul. With our exclusive and customized trips, you have the chance to explore iconic places and hidden gems, surrounded by luxury and care.'}
        </p>
        
        <Link href="/destination">
          <button className={styles.ctaButton}>
            {language === 'sv' ? 'Upptäck dina drömmars resa' : 'Discover the journey of your dreams'}
          </button>
        </Link>
      </div>
    </section>
  );
}
