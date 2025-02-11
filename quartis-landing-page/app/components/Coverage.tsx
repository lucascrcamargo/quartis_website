"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const cities = [
  { name: "São Paulo", x: 75, y: 70 },
  { name: "Orlando", x: 30, y: 40 },
]

const MapOfAmericas = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M20,10 Q30,5 40,10 T60,10 T80,10 V90 Q70,95 60,90 T40,90 T20,90 Z"
        fill="#2C3E50"
        stroke="#34495E"
        strokeWidth="0.5"
      />
      <path
        d="M30,20 Q40,15 50,20 T70,20 V80 Q60,85 50,80 T30,80 Z"
        fill="#34495E"
        stroke="#2C3E50"
        strokeWidth="0.5"
      />
    </svg>
  )
}

export default function Coverage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-32 px-4 bg-[#1B1C1D]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text"
        >
          Coverage
        </motion.h2>
        <div className="relative h-[600px] max-w-4xl mx-auto">
          {/* Map Background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <MapOfAmericas />

            {mounted && (
              <motion.div
                className="absolute h-0.5 bg-gradient-to-r from-[#D2AC47] to-[#AE8625]"
                style={{
                  top: "55%",
                  left: "30%",
                  width: "45%",
                  transform: "rotate(30deg)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            )}

            {cities.map((city) => (
              <div key={city.name} className="absolute" style={{ left: `${city.x}%`, top: `${city.y}%` }}>
                {mounted && (
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute -inset-4 bg-[#E5B94E]/20 rounded-full animate-ping" />
                    <div className="relative w-4 h-4 rounded-full bg-[#E5B94E]" />
                    <p className="absolute mt-2 -ml-10 text-sm font-medium text-gray-300 w-20 text-center">
                      {city.name}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

