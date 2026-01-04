"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden flex items-center rounded-b-[120px] md:rounded-b-[300px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Screenshot 2026-01-04 215733.webp"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-balance leading-[0.85] mb-6 drop-shadow-2xl uppercase">
              LOREM <span className="text-primary">IPSUM</span> DOLOR
            </h1>
            <p className="text-lg md:text-2xl text-white/90 text-balance max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, .
            </p>

            {/* <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-black h-16 px-10 group rounded-2xl"
              >
                LOREM IPSUM
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
