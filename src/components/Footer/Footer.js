// src/components/Footer/Footer.js
"use client";

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { language } = useLanguage(); // Hämta språkinställningen

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Destinations of Joy</h2>
          <p className={styles.tagline}>
            {language === 'sv' ? 'Upptäck världen med oss.' : 'Discover the world with us.'}
          </p>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>
            {language === 'sv' ? 'Snabbnavigering' : 'Quick Links'}
          </h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/" className={styles.link}>
                {language === 'sv' ? 'Hem' : 'Home'}
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services" className={styles.link}>
                {language === 'sv' ? 'Tjänster' : 'Services'}
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/destination" className={styles.link}>
                {language === 'sv' ? 'Destinationer' : 'Destinations'}
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/#contact" className={styles.link}>
                {language === 'sv' ? 'Kontakt' : 'Contact'}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>
            {language === 'sv' ? 'Kontakt' : 'Contact'}
          </h3>
          <p>Email: info@destinationofjoy.com</p>
          <p>{language === 'sv' ? 'Telefon' : 'Phone'}: +46 123 456 789</p>
         
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>
            {language === 'sv' ? 'Följ oss' : 'Follow us'}
          </h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} JOY Destinations. {language === 'sv' ? 'Alla rättigheter förbehållna.' : 'All rights reserved.'}</p>
      </div>
    </footer>
  );
}
