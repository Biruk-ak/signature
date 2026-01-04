"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Truck, Trophy } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/dark-professional-gym-interior-with-heavy-duty-rac.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Trophy className="h-3 w-3" /> Professional Grade Strength
            </div> */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-balance leading-[0.9] mb-6">
              FORGED FOR <span className="text-primary">ELITE</span> PERFORMANCE
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-xl mb-10 leading-relaxed">
              Equip your facility with industrial-grade machinery and precision-engineered weights. Built for those who
              demand more from their iron.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-black h-14 px-8 group"
              >
                SHOP EQUIPMENT
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-lg font-black h-14 px-8 hover:bg-secondary bg-transparent"
              >
                REQUEST A QUOTE
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/20"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-bold uppercase tracking-tight">Lifetime Warranty</p>
                <p className="text-xs text-muted-foreground">On all structural steel</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-bold uppercase tracking-tight">Global Logistics</p>
                <p className="text-xs text-muted-foreground">Commercial delivery experts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
