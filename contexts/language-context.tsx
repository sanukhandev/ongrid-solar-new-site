"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ml";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  isLoading: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "en" || stored === "ml") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return; // Don't reload if same language

    setIsLoading(true);

    // 3-second delay before changing language
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem("lang", lang);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    document.documentElement.lang = language === "ml" ? "ml" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
