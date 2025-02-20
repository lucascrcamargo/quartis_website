"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/app/context/TranslationContext"
import { Logo } from "./ui/logo"

export default function Header() {
  const { t, toggleLanguage, currentLang } = useTranslation()

  return (
    <header className="fixed w-full z-50 bg-[#1B1C1D] bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>
        <nav className="flex-grow flex items-center justify-center space-x-8">
          <Link href="/#launch" className="text-gray-300 hover:text-white transition-colors">
            {t("header.launch")}
          </Link>
          <Link href="/#rewards" className="text-gray-300 hover:text-white transition-colors">
            {t("header.rewards")}
          </Link>
          <Link href="/#solutions" className="text-gray-300 hover:text-white transition-colors">
            {t("header.solutions")}
          </Link>
          <Link href="/demo" className="text-gray-300 hover:text-white transition-colors">
            {t("header.demo")}
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            {t("header.about")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/waitlist">
            <Button className="relative overflow-hidden bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] font-semibold">
              <span className="relative z-10">{t("header.signUp")}</span>
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-25 transform -translate-x-full animate-shimmer" />
            </Button>
          </Link>
        </div>
        <button
          onClick={toggleLanguage}
          className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          {currentLang === "en" ? "Português (BR)" : "English"}
        </button>
      </div>
    </header>
  )
}

