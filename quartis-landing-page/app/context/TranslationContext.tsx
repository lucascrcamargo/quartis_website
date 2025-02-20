"use client"

import React from "react"
import en from "@/app/translations/en.json"
import pt from "@/app/translations/pt.json"

/** Adjust these as needed for your keys and structure */
type Language = "en" | "pt"

interface TranslationContextValue {
  t: (key: string) => string
  toggleLanguage: () => void
  currentLang: Language
}

export const TranslationContext = React.createContext<TranslationContextValue>({
  t: (key: string) => key,
  toggleLanguage: () => {},
  currentLang: "en",
})

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = React.useState<Language>("en")

  function toggleLanguage() {
    setCurrentLang((prev) => (prev === "en" ? "pt" : "en"))
  }

  function t(key: string) {
    // split the key to handle nested keys, e.g. "header.signUp"
    const keys = key.split(".")
    // pick which translation object to use
    let value: any = currentLang === "en" ? en : pt

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found in "${currentLang}" locale.`)
        return key
      }
    }
    return value
  }

  const contextValue: TranslationContextValue = {
    t,
    toggleLanguage,
    currentLang,
  }

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  )
}

/** A simple hook so components can consume */
export function useTranslation() {
  return React.useContext(TranslationContext)
} 