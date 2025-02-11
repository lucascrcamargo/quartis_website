"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "2B", label: "Active Users" },
  { value: "80+", label: "Countries" },
  { value: "22T", label: "Annual Transactions" },
  { value: "42.2%", label: "YoY Growth" },
]

const StatCircle = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gradient-to-r from-[#D2AC47]/10 to-[#AE8625]/10 border border-[#E5B94E]/20"
  >
    <span className="text-4xl font-bold text-[#E5B94E]">{value}</span>
    <span className="text-lg text-gray-400 text-center mt-2">{label}</span>
  </motion.div>
)

export default function RTPAdoption() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-[#1B1C1D] to-[#252628]">
      <motion.div className="container mx-auto" style={{ opacity, scale }}>
        <h2 className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
          The Future of Payments is Here
        </h2>
        <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
          {stats.map((stat, index) => (
            <StatCircle key={stat.label} {...stat} index={index} />
          ))}
        </div>
        <p className="text-xl text-[#E5E5E5] text-center max-w-3xl mx-auto">
          Real-Time Payments (RTP) are revolutionizing the global financial landscape. With rapid adoption rates and
          increasing transaction volumes, RTP systems are becoming the new standard for instant, secure, and efficient
          money transfers across borders.
        </p>
      </motion.div>
    </section>
  )
}

