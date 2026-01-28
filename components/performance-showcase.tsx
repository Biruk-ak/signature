"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const SHOWCASE_IMAGES = [
    "/centr/rig_target_produkt_06_1920x1920.webp",
    "/centr/rig_target_produkt_12_1920x1920.webp",
    "/ball/wallball_9_1920x1920.webp",
]

export function PerformanceShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SHOWCASE_IMAGES.length)
        }, 6000) // 6 second interval between images
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-24 bg-card border-t border-border/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">FEATURED COLLECTION</p>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            Featured  <br /> Performance  <span className="text-primary">Series</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium max-w-xl">
                            Explore our flagship Centr performance line where innovation meets functionality for serious training.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="h-[2px] w-12 bg-primary transition-all group-hover:w-16" />
                                <p className="text-sm font-black uppercase tracking-widest">Centr x HYROX Sandbag Series</p>
                            </div>
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="h-[2px] w-12 bg-primary transition-all group-hover:w-16" />
                                <p className="text-sm font-black uppercase tracking-widest">Competition Wall Ball</p>
                            </div>
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="h-[2px] w-12 bg-primary transition-all group-hover:w-16" />
                                <p className="text-sm font-black uppercase tracking-widest">Interlocking Bumper Plates</p>
                            </div>
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="h-[2px] w-12 bg-primary transition-all group-hover:w-16" />
                                <p className="text-sm font-black uppercase tracking-widest">Power Sled & Functional Tools</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-black">
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={SHOWCASE_IMAGES[currentIndex]}
                                    alt="LOREM IPSUM"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Visual indicator for the infinite change */}
                        <div className="absolute bottom-6 right-6 flex gap-1.5 z-10">
                            {SHOWCASE_IMAGES.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 transition-all duration-300 rounded-full ${currentIndex === i ? "w-4 bg-primary" : "w-1 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
