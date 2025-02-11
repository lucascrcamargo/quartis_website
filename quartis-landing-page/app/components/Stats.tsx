"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "153M+", label: "PIX Users" },
  { value: "700K+", label: "Tourists" },
  { value: "80%", label: "Lower Fees" },
]

export default function Stats() {
  return (
    <section className="py-20 bg-[#1B1C1D]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gradient-to-r from-[#D2AC47]/10 to-[#AE8625]/10 border border-[#E5B94E]/20"
            >
              <span className="text-4xl font-bold text-[#E5B94E]">{stat.value}</span>
              <span className="text-lg text-gray-400 text-center mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

