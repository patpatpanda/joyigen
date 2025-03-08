// src/components/InspirationSection/InspirationSection.js
"use client";

import styles from './InspirationSection.module.css';

export default function InspirationSection() {
  return (
    <section className={styles.inspiration}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>Lev i Nuet, Res Med Hjärta</h2>
        <p className={styles.text}>
          Livet är kort och världen är stor. Ta tillfället i akt att utforska, att leva, och att uppleva nya kulturer och platser. Att resa är att samla minnen som varar livet ut. Varje resa är en möjlighet att växa, att möta nya människor och att se världen genom nya perspektiv. Så vänta inte – res nu, lev fullt ut, och skapa dina egna äventyr!
        </p>
      </div>
    </section>
  );
}
