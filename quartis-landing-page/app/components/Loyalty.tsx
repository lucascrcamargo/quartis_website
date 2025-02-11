"use client"

import { motion } from "framer-motion"
import { Plane, Gift, CreditCard } from "lucide-react"

const benefits = [
  {
    icon: Plane,
    title: "Travel Miles",
    description: "Earn miles on every international transaction, redeemable for flights and travel experiences.",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Unlock premium benefits and experiences tailored to your destination.",
  },
  {
    icon: CreditCard,
    title: "Cashback",
    description: "Enjoy cashback on your international purchases, credited directly to your account.",
  },
]

const BenefitCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-[#252628] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <Icon className="w-12 h-12 text-[#D2AC47] mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

export default function Loyalty() {
  return (
    <section className="py-32 px-4 bg-[#1B1C1D]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
            Reimagining Travel Rewards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
            Experience a new era of travel benefits, tailored for the modern global traveler.
          </p>
          <div className="inline-block bg-[#D2AC47] text-[#1B1C1D] px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Coming Soon
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

