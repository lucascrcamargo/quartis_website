"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
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

const Stats = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-r from-[#D2AC47]/10 to-[#AE8625]/10 border border-[#D2AC47]/20"
  >
    <span className="text-3xl font-bold text-[#D2AC47] mb-2">{value}</span>
    <span className="text-sm text-gray-400 text-center">{label}</span>
  </motion.div>
)

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#1B1C1D] text-white relative">
      <ParticleEffect />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center py-20 text-center relative z-10">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text leading-relaxed"
            >
              {t("about.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto subtitle"
            >
              {t("about.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text leading-relaxed">
                {t("about.vision.title")}
              </h2>
              <p className="text-xl body-text">{t("about.vision.content")}</p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto pl-8 border-l-2 border-[#D2AC47]"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text leading-relaxed">
                {t("about.story.title")}
              </h2>
              <p className="mb-6 text-xl body-text">{t("about.story.content1")}</p>
              <p className="text-xl body-text">{t("about.story.content2")}</p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text leading-relaxed"
            >
              {t("about.mission.title")}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <Stats value="700K+" label={t("about.mission.stats.tourists")} />
              <Stats value="153M+" label={t("about.mission.stats.pixUsers")} />
              <Stats value="80%" label={t("about.mission.stats.lowerFees")} />
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl body-text text-center">{t("about.mission.content")}</p>
            </div>
          </div>
        </section>

        {/* Beyond Payments Section */}
        <section className="min-h-[80vh] flex items-center py-20 bg-[#252628]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text leading-relaxed"
            >
              {t("about.beyond.title")}
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-xl body-text mb-4">{t("about.beyond.content1")}</p>
                <div className="w-full h-px bg-[#D2AC47] opacity-20 my-4" />
                <p className="text-xl body-text">{t("about.beyond.content2")}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

