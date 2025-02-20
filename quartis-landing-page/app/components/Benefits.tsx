"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Wallet,
  Clock,
  Globe,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Banknote,
  Zap,
  SmilePlus,
} from "lucide-react"
import { useTranslation } from "@/app/context/TranslationContext"

const merchantBenefits = [
  {
    title: "Faster Settlement",
    description:
      "Receive payments instantly in your local currency, eliminating settlement delays",
    icon: Clock,
    color: "from-[#D2AC47] to-[#F7EF8A]",
  },
  {
    title: "Lower Fees",
    description: "Benefit from up to 80% lower transaction fees compared to traditional card payments",
    icon: Wallet,
    color: "from-[#F7EF8A] to-[#AE8625]",
  },
  {
    title: "Global Reach",
    description: "Access a growing network of international payment systems in one place",
    icon: Globe,
    color: "from-[#AE8625] to-[#D2AC47]",
  },
  {
    title: "Reduced Risk",
    description: "Eliminate chargeback risks with instant, verified transactions",
    icon: ShieldCheck,
    color: "from-[#D2AC47] to-[#F7EF8A]",
  },
  {
    title: "Easy Integration",
    description: "Seamlessly connect with your existing devices",
    icon: Smartphone,
    color: "from-[#F7EF8A] to-[#AE8625]",
  },
]

const clientBenefits = [
  {
    title: "Direct Payments",
    description: "Use your preferred payment method abroad—no pre-loaded wallets needed",
    icon: Banknote,
    color: "from-[#D2AC47] to-[#F7EF8A]",
  },
  {
    title: "Instant Transactions",
    description: "Experience the same speed and convenience you enjoy at home, anywhere in the world",
    icon: Zap,
    color: "from-[#F7EF8A] to-[#AE8625]",
  },
  {
    title: "Cost Effective",
    description: "Save up to 70% on foreign transaction fees and currency conversion costs",
    icon: CreditCard,
    color: "from-[#AE8625] to-[#D2AC47]",
  },
  {
    title: "Seamless Experience",
    description: "Pay with the same familiar method you use at home",
    icon: Globe,
    color: "from-[#D2AC47] to-[#F7EF8A]",
  },
  {
    title: "Guaranteed Acceptance",
    description: "Never worry about declined payments or card issues again",
    icon: SmilePlus,
    color: "from-[#F7EF8A] to-[#AE8625]",
  },
]

function BenefitCard({ title, description, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#D2AC47]/10 to-[#AE8625]/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden h-full">
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} opacity-20`} />
        <div className="flex flex-col h-full">
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
              <Icon className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
              {title}
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
          <motion.div className="mt-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="w-5 h-5 text-[#D2AC47]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen py-32 px-4 bg-[#1B1C1D]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text"
        >
          {t("benefits.title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#D2AC47] to-[#AE8625] text-transparent bg-clip-text"
            >
              For Merchants
            </motion.h3>
            <div className="grid gap-6">
              {merchantBenefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} {...benefit} index={index} />
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#D2AC47] to-[#AE8625] text-transparent bg-clip-text"
            >
              For Travelers
            </motion.h3>
            <div className="grid gap-6">
              {clientBenefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} {...benefit} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

