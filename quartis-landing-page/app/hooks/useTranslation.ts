import en from "../translations/en.json"
import pt from "../translations/pt.json"

import { useState, useEffect } from "react";

export function useTranslation() {
  // Add state for the current language, defaulting to English
  const [currentLang, setCurrentLang] = useState<"en" | "pt">("en");

  // A toggle function to switch between languages
  function toggleLanguage() {
    setCurrentLang((prev) => (prev === "en" ? "pt" : "en"));
  }

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = currentLang === "en" ? en : pt

    for (const k of keys) {
      value = value[k]
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found.`)
        return key
      }
    }

    return value as string
  }

  return { t, toggleLanguage, currentLang };
}

