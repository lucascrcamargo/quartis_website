"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTranslation } from "@/app/context/TranslationContext"
import { motion } from "framer-motion"

export default function DemoPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen bg-[#1B1C1D]">
      <Header />
      <main className="flex-grow">
        <section className="min-h-screen flex items-center py-20 px-4 bg-[#1B1C1D] relative mt-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl font-bold bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text mb-6">
                {t("demo.title")}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("demo.description")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto w-[640px] h-[413px] rounded-2xl shadow-2xl overflow-hidden"
            >
              <iframe
                width="640"
                height="413"
                src="https://www.loom.com/embed/3287a4aa9c8a4966bf17274f26a8ce0b?sid=ea55cb80-ee60-496a-b8de-9a6bbe507396"
                frameBorder="0"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

