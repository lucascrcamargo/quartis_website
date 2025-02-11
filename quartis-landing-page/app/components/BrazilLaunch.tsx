"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "../hooks/useTranslation"

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D2AC47] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function BrazilLaunch() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen py-32 px-4 bg-[#1B1C1D] relative overflow-hidden flex items-center">
      <ParticleEffect />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1B1C1D] opacity-70" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text"
        >
          {t("brazilLaunch.title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl text-[#E5E5E5] leading-relaxed">{t("brazilLaunch.description")}</p>
            <ul className="space-y-4 text-xl text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-[#D2AC47]">✓</span> {t("brazilLaunch.feature1")}
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#D2AC47]">✓</span> {t("brazilLaunch.feature2")}
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#D2AC47]">✓</span> {t("brazilLaunch.feature3")}
              </li>
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <Link href="/waitlist">
                <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] text-xl font-semibold px-12 py-6">
                  {t("brazilLaunch.cta")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D2AC47]/20 to-[#AE8625]/20 group-hover:opacity-75 transition-opacity duration-500 z-10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brazil_crossborder.jpg-lsG8xzdcssNhy376VxoW506PcJrMul.jpeg"
              alt={t("brazilLaunch.imageAlt")}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

