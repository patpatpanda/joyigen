import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (menuOpen) closeMenu(); 
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>Destination of Joy</span>
        </div>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.closeButton : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>{language === 'sv' ? 'Hem' : 'Home'}</Link>
          <Link href="/services" onClick={closeMenu}>{language === 'sv' ? 'Tjänster' : 'Services'}</Link>

          <div className={styles.dropdown} ref={dropdownRef}>
            {/* Länk för att navigera direkt till /destination */}
            <Link href="/destination" onClick={closeMenu} className={styles.dropdownLink}>
              {language === 'sv' ? 'Destinationer' : 'Destinations'}
            </Link>
            
            {/* Knapp för att öppna/stänga dropdown-menyn */}
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              ▼
            </button>

            <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownMenuOpen : ''}`}>
              <li><Link href="/destination/italy" onClick={closeMenu}>{language === 'sv' ? 'Italien' : 'Italy'}</Link></li>
              <li><Link href="/destination/norway" onClick={closeMenu}>{language === 'sv' ? 'Norge' : 'Norway'}</Link></li>
              <li><Link href="/destination/Austria" onClick={closeMenu}>{language === 'sv' ? 'Österrike' : 'Austria'}</Link></li>
              <li><Link href="/destination/sweden" onClick={closeMenu}>{language === 'sv' ? 'Sverige' : 'Sweden'}</Link></li>
              <li><Link href="/destination/denmark" onClick={closeMenu}>{language === 'sv' ? 'Danmark' : 'Denmark'}</Link></li>
              <li><Link href="/destination/thailand" onClick={closeMenu}>{language === 'sv' ? 'Thailand' : 'Thailand'}</Link></li>
              <li><Link href="/destination/spain" onClick={closeMenu}>{language === 'sv' ? 'Spanien' : 'Spain'}</Link></li>
            </ul>
          </div>

          <Link href="/#contact" onClick={closeMenu}>{language === 'sv' ? 'Kontakt' : 'Contact'}</Link>
          <Link href="/blog" onClick={closeMenu}>{language === 'sv' ? 'Blogg' : 'Blog'}</Link>

          <button onClick={toggleLanguage} className={styles.languageButton}>
            {language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
          </button>
        </nav>
      </div>
    </header>
  );
}
