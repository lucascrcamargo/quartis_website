"use client"

import type React from "react"
import { createContext, useContext, type ReactNode } from "react"

type Language = "en"

interface LanguageContextType {
  language: Language
}

const LanguageContext = createContext<LanguageContextType>({ language: "en" })

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <LanguageContext.Provider value={{ language: "en" }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

