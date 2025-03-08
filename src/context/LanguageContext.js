// src/context/LanguageContext.js
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('sv'); // Standard språk är svenska

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'sv' ? 'en' : 'sv'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
