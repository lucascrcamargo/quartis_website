"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4 bg-gray-900">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text">
            Transform Your International Transactions
          </h2>
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Join Quartis today and be part of the future where every local payment system connects globally. Whether you're a merchant looking to welcome international customers or a traveler seeking seamless payments abroad, we're building the platform you've been waiting for.
          </p>
          <Link href="/waitlist">
            <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] text-xl font-semibold px-12 py-8">
              Join the Waitlist
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

