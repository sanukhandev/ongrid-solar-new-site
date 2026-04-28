"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import contentEn from "@/data/content.json";

type Content = typeof contentEn;

export function useContent() {
  const { language } = useLanguage();
  const [content, setContent] = useState<Content>(contentEn);

  useEffect(() => {
    let isMounted = true;

    if (language === "ml") {
      import("@/data/content.ml.json")
        .then((module) => {
          if (isMounted) {
            setContent(module.default as Content);
          }
        })
        .catch((err) => {
          console.error("Failed to load Malayalam content, falling back to English:", err);
        });
    } else {
      setContent(contentEn);
    }

    return () => {
      isMounted = false;
    };
  }, [language]);

  return content;
}
