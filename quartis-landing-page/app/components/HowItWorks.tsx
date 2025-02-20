"use client"

import { motion } from "framer-motion"
import { QrCode, Coins, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/app/context/TranslationContext"

const steps = [
  {
    icon: QrCode,
    title: "Scan merchant's QR code",
    description: "Use your phone to scan the QR code provided by the merchant.",
  },
  {
    icon: Coins,
    title: "View amount in BRL",
    description: "See the transaction amount converted to your local currency (e.g., Brazilian Real).",
  },
  {
    icon: "PIX",
    title: "Instant PIX payment",
    description: "Confirm and complete the payment using your preferred PIX method.",
  },
  {
    icon: Check,
    title: "Merchant receives USD",
    description: "The merchant instantly receives the payment in their local currency (e.g., US Dollars).",
  },
]

interface StepIconProps {
  icon: React.ComponentType<any> | string;
  index: number;
}

function StepIcon({ icon: Icon, index }: StepIconProps) {
  if (Icon === "PIX") {
    return (
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D2AC47] to-[#AE8625] flex items-center justify-center">
        <span className="font-bold text-lg text-[#1B1C1D]">PIX</span>
      </div>
    )
  }
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D2AC47] to-[#AE8625] flex items-center justify-center">
      <Icon className="w-6 h-6 text-[#1B1C1D]" />
    </div>
  )
}

export default function HowItWorks() {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section className="py-32 px-4 bg-[#1B1C1D]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text"
        >
          {t("howItWorks.title")}
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-2/5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mr-4 relative">
                  <StepIcon icon={step.icon} index={index} />
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#D2AC47] to-[#AE8625] opacity-20" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
                    {t(`howItWorks.step${index + 1}.title`)}
                  </h3>
                  <p className="text-gray-400">{t(`howItWorks.step${index + 1}.description`)}</p>
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${
                    currentStep === index ? "bg-[#D2AC47]" : "bg-gray-600"
                  } transition-colors duration-300 ease-in-out`}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <Link href="/demo">
                <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] text-xl font-semibold px-8 py-4">
                  Test It Out
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-3/5">
            <motion.div
              className="relative max-w-sm mx-auto h-[600px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/~lucascamargo/images/quartis_mobile_platform_sc.png"
                alt="Quartis Mobile Platform"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

