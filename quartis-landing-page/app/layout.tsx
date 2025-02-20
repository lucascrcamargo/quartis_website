import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { LanguageProvider } from "./contexts/LanguageContext"
import { TranslationProvider } from "./context/TranslationContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quartis - Seamless Cross-Border Real-Time Payments",
  description: "Transform the way you handle international transactions with Quartis. Fast, secure, and effortless.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </TranslationProvider>
      </body>
    </html>
  )
}



import './globals.css'