"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProductProps {
    id: string
    name: string
    image: string
    hoverImage?: string
    category: string
    specs: {
        label: string
        value: string
    }[]
    isNew?: boolean
}

export function ProductCard({ id, name, image, hoverImage, category, specs, isNew }: ProductProps) {
    return (
        <Link href={`/product/${id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -4 }}
                className="group/card relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-card border border-border/40 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
            >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-secondary/5">
                    {isNew && (
                        <Badge className="absolute left-4 top-4 z-10 bg-[#d7b64a] text-black font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg border-0">
                            NEW
                        </Badge>
                    )}
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        fill
                        className={`object-cover transition-all duration-700 ease-in-out ${hoverImage ? 'group-hover/card:opacity-0' : ''} group-hover/card:scale-110`}
                    />
                    {hoverImage && (
                        <Image
                            src={hoverImage}
                            alt={`${name} secondary view`}
                            fill
                            className="object-cover transition-all duration-700 ease-in-out opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
                        />
                    )}
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                            {category}
                        </p>
                        <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-2 group-hover/card:text-primary transition-colors">
                            {name}
                        </h3>

                        {/* Specs Display */}
                        <div className="flex gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                            Product information: {name}
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/40">
                        <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#d7b64a]">
                            VIEW
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}
