"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language, Translations } from "./translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("devhubs-lang") as Language | null;
    if (stored === "en" || stored === "th") setLangState(stored);
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    localStorage.setItem("devhubs-lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
