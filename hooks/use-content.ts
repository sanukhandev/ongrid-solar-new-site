"use client";

import { useLanguage } from "@/contexts/language-context";
import contentEn from "@/data/content.json";
import contentMl from "@/data/content.ml.json";

export function useContent() {
  const { language } = useLanguage();
  return language === "ml" ? contentMl : contentEn;
}
