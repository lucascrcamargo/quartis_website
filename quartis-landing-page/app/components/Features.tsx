"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "@/app/context/TranslationContext"

const features = [
  {
    title: "Global Instant Payments",
    description: "Use your preferred instant payment method anywhere in the world with reduced declinations.",
  },
  {
    title: "No Preloading Required",
    description:
      "The only platform enabling direct account-to-account payments across borders, eliminating the need for pre-funded wallets.",
  },
  {
    title: "In-Person Payments Focus",
    description:
      "Built specifically for physical retail in tourist destinations, solving real payment challenges at the point of sale.",
  },
  {
    title: "Real-time FX Conversion",
    description: "Transparent, competitive foreign exchange rates with instant processing for all transactions.",
  },
  {
    title: "Seamless Integration",
    description:
      "Direct settlement in local currencies for merchants, with simple integration into existing devices and full regulatory compliance.",
  },
]

function FeatureCard({ title, description, index }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div ref={cardRef} style={{ y, opacity, scale }} className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D2AC47]/20 to-[#AE8625]/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative p-8 h-full rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] opacity-20" />
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
            {title}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen py-32 px-4 bg-[#1B1C1D] relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center mb-16"
      >
        <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
          {t("features.title")}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
          {t("features.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index + 3} {...feature} index={index + 3} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

