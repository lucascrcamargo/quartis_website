"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function Demo() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-20 px-4 bg-[#1B1C1D] relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-transparent bg-clip-text mb-6">
            See Quartis in Action
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of cross-border payments with our interactive demo. See how Quartis enables seamless
            transactions using your preferred local payment method anywhere in the world.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-center text-gray-500 text-xl">Interactive Demo Placeholder</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-[280px] h-[580px] mx-auto bg-gray-800 rounded-[3rem] p-4 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl" />
              <div className="w-full h-full bg-[#1B1C1D] rounded-[2.5rem] overflow-hidden">
                {/* Phone Screen Content */}
                <div className="relative h-full">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      y: ["0%", "-100%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {/* Payment Flow Animation */}
                    <div className="h-full flex flex-col items-center justify-center space-y-8 p-6">
                      <div className="w-full h-32 bg-gradient-to-r from-[#D2AC47]/20 to-[#AE8625]/20 rounded-lg" />
                      <div className="w-3/4 h-12 bg-gradient-to-r from-[#D2AC47]/20 to-[#AE8625]/20 rounded-lg" />
                      <div className="w-full h-24 bg-gradient-to-r from-[#D2AC47]/20 to-[#AE8625]/20 rounded-lg" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

