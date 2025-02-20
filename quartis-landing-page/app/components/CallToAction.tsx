"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/app/context/TranslationContext"

export default function CallToAction() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4 bg-gray-900">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
            {t("callToAction.title")}
          </h2>
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            {t("callToAction.description")}
          </p>
          <Link href="/waitlist">
            <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] text-xl font-semibold px-12 py-8">
              {t("callToAction.cta")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

