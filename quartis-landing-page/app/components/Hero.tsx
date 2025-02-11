"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#1B1C1D] relative overflow-hidden">
      <ParticleEffect />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1B1C1D] opacity-70" />

      <div className="container mx-auto text-center z-10 px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seamless Cross-Border Real-Time Payments
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Use your preferred local payment method anywhere in the world. Experience instant, secure international
          transactions powered by leading real-time payment systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="/waitlist">
            <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] text-xl font-semibold px-12 py-8">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

