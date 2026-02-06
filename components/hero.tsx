"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <motion.div
        // initial={{ scale: 1.1 }}
        // animate={{ scale: 1 }}
        // transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/signaturevid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-between py-24 md:py-32">
        {/* Top Section - Main Heading (Left Aligned) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-start gap-4">
            {/* Vertical Accent Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="hidden md:block w-1 bg-gradient-to-b from-primary via-primary/80 to-transparent min-h-[160px]"
            />

            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.9] uppercase">
                Performance{" "}
                <span className="block text-primary mt-2">Design</span>{" "}
                <span className="block mt-2">Power</span>
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Description (Right Aligned) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="ml-auto max-w-xl md:max-w-2xl"
        >
          <div className="bg-black/30 backdrop-blur-md border-l-4 border-primary/80 p-6 md:p-8 rounded-r-2xl">
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed italic">
              Official distributor of Centr and other premium brands, designed for home gyms, studios, corporate wellness spaces, and athletes who train with purpose.
            </p>
          </div>
        </motion.div>

        {/* Bottom Section - Buttons (Split Placement) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          {/* Left Button - Primary CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="w-full md:w-auto"
          >
            <Link href="/shop">
              <div className="group relative">
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200 animate-pulse" />

                <Button
                  size="lg"
                  className="relative bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg font-black uppercase tracking-[0.2em] h-16 px-10 md:px-12 rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 active:scale-95 w-full md:w-auto border-2 border-primary/50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    EXPLORE
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                  </span>
                </Button>
              </div>
            </Link>

            {/* Decorative underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-3 ml-2"
            />
          </motion.div>

          {/* Right Button - Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="w-full md:w-auto"
          >
            <Link href="/#contact">
              <div className="group relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-transparent backdrop-blur-xl border-2 border-white/40 hover:border-white/80 hover:bg-white/10 text-white text-base md:text-lg font-black uppercase tracking-[0.2em] h-16 px-10 md:px-12 rounded-2xl transition-all duration-300 group-hover:scale-105 active:scale-95 w-full md:w-auto overflow-hidden"
                >
                  {/* Sliding background effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  <span className="relative z-10 flex items-center gap-3">
                    CONTACT US
                    <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </Link>

            {/* Decorative underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="h-0.5 bg-gradient-to-l from-white/60 to-transparent mt-3 ml-auto mr-2"
            />
          </motion.div>
        </div>
      </div>

    </section>
  )
}
