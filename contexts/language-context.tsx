"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "en" || stored === "ml") {
      setLanguageState(stored);
    }
  }, []);

  // Clear any pending timeout on unmount to prevent state updates after unmount.
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    // Cancel any in-flight language switch before starting a new one.
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsLoading(true);

    // Kick off content preload immediately so it's cached when the language
    // flips, preventing a flash of stale content after the skeleton is dismissed.
    const contentReady =
      lang === "ml"
        ? import("@/data/content.ml.json").catch((err) => {
            console.error("Failed to preload Malayalam content:", err);
            return null;
          })
        : Promise.resolve(null);

    // Hold the skeleton for a minimum of 1.5 s, then wait for content to be
    // ready before flipping the language and dismissing the skeleton.
    timeoutRef.current = setTimeout(() => {
      contentReady
        .then(() => {
          setLanguageState(lang);
          localStorage.setItem("lang", lang);
          setIsLoading(false);
          timeoutRef.current = null;
        })
        .catch((err) => {
          // Ensure the loading state is always cleared even on unexpected errors.
          console.error("Unexpected error during language switch:", err);
          setIsLoading(false);
          timeoutRef.current = null;
        });
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
