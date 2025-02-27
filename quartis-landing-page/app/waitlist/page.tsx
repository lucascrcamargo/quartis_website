"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import { useTranslation } from "@/app/context/TranslationContext"

export default function WaitlistPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    email: "",
    accountType: "",
    region: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email || !formData.accountType || !formData.region) {
      alert("Please fill all fields!")
      return
    }

    try {
      setIsLoading(true)
      // Possibly we had success/failure handling
      const response = await fetch("https://formspree.io/f/xjkgezbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          DateCreated: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Formspree submission failed", response)
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting to Formspree:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const regions = [t("waitlist.regions.us"), t("waitlist.regions.brazil")]

  if (isSubmitted) {
    return (
      <motion.div
        key="success"
        className="flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_gold-check-mark-icon-square-gold-certification-seal_32735463-1PHy6xNJmdB71eB8GJORoxS9N3k1xn.png"
              alt={t("waitlist.success.checkmarkAlt")}
              width={150}
              height={150}
              className="mx-auto mb-8"
            />
          </motion.div>
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("waitlist.success.title")}
          </motion.h2>
          <motion.p
            className="text-gray-300 text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t("waitlist.success.message")}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/">
              <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] font-semibold py-3 px-8 text-lg">
                {t("waitlist.success.cta")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1B1C1D] flex flex-col">
      <Header />
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.main
            key="form"
            className="flex-grow flex items-center justify-center p-4 mt-16"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full max-w-6xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <motion.div
                  className="md:w-1/2 p-12 flex flex-col justify-center relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt={t("waitlist.imageAlt")}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-10"
                    />
                  </div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
                      {t("waitlist.title")}
                    </h1>
                    <p className="text-gray-300 text-lg mb-6">{t("waitlist.description")}</p>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 p-12 bg-gray-950"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    data-netlify="true" 
                    name="waitlist"
                  >
                    <input type="hidden" name="form-name" value="waitlist" />
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        {t("waitlist.form.email")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900 text-white border-gray-700 focus:border-[#D2AC47]"
                      />
                    </div>
                    <div>
                      <label htmlFor="accountType" className="block text-sm font-medium text-gray-300 mb-1">
                        {t("waitlist.form.accountType")}
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("accountType", value)} required>
                        <SelectTrigger className="w-full bg-gray-900 text-white border-gray-700 focus:border-[#D2AC47]">
                          <SelectValue placeholder={t("waitlist.form.accountTypePlaceholder")} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700">
                          <SelectItem value="merchant" className="text-white hover:bg-gray-800">{t("waitlist.form.accountTypes.merchant")}</SelectItem>
                          <SelectItem value="client" className="text-white hover:bg-gray-800">{t("waitlist.form.accountTypes.client")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-300 mb-1">
                        {t("waitlist.form.region")}
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("region", value)} required>
                        <SelectTrigger className="w-full bg-gray-900 text-white border-gray-700 focus:border-[#D2AC47]">
                          <SelectValue placeholder={t("waitlist.form.regionPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700">
                          {regions.map((region) => (
                            <SelectItem 
                              key={region} 
                              value={region.toLowerCase()}
                              className="text-white hover:bg-gray-800"
                            >
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] font-semibold py-4 text-lg"
                    >
                      {isLoading ? "Submitting..." : t("waitlist.form.submit")}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.main>
        ) : (
          <motion.div
            key="success"
            className="flex flex-col items-center justify-center min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center max-w-2xl mx-auto px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_gold-check-mark-icon-square-gold-certification-seal_32735463-1PHy6xNJmdB71eB8GJORoxS9N3k1xn.png"
                  alt={t("waitlist.success.checkmarkAlt")}
                  width={150}
                  height={150}
                  className="mx-auto mb-8"
                />
              </motion.div>
              <motion.h2
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("waitlist.success.title")}
              </motion.h2>
              <motion.p
                className="text-gray-300 text-xl mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("waitlist.success.message")}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href="/">
                  <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] font-semibold py-3 px-8 text-lg">
                    {t("waitlist.success.cta")}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

