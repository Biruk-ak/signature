"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden flex items-center rounded-b-[40px] md:rounded-b-[100px]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-premium.png"
          alt="Premium Gym Environment"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.85] mb-6 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Performance <span className="text-primary block md:inline">Design</span> Power
            </h1>

            <div className="space-y-4 mb-8 max-w-2xl mx-auto">
              {/* <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
                Performance-driven equipment engineered for strength, endurance, and modern training — curated by Signature Wellness, Addis Ababa’s trusted source for elite fitness gear.
              </p> */}
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed drop-shadow-sm border-l-2 border-primary/50 pl-4 italic">
                Official distributor of Centr and other premium brands, designed for home gyms, studios, corporate wellness spaces, and athletes who train with purpose.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold h-14 px-8 rounded-xl shadow-[0_0_20px_rgba(215,182,74,0.3)] hover:shadow-[0_0_30px_rgba(215,182,74,0.5)] transition-all duration-300 active:scale-95 group w-full sm:w-auto"
                >
                  EXPLORE
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white text-lg font-bold h-14 px-10 rounded-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
