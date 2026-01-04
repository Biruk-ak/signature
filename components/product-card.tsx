"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


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

export function ProductCard({ name, image, hoverImage, category, specs, isNew }: ProductProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group/card relative h-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/20 rounded-t-2xl">
        {isNew && (
          <Badge className="absolute left-3 top-3 z-10 bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 border-0">
            New
          </Badge>
        )}
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-contain p-1 transition-all duration-500 ease-in-out ${hoverImage ? 'group-hover/card:opacity-0' : ''} group-hover/card:scale-105`}
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${name} secondary view`}
            fill
            className="object-contain p-1 transition-all duration-500 ease-in-out opacity-0 group-hover/card:opacity-100 group-hover/card:scale-105"
          />
        )}
        {/* Quick Actions overlay */}

      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{category}</p>
          <h3 className="line-clamp-1 text-sm font-bold uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">{name}</h3>
        </div>

        {/* Compact Specs */}
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-1 text-[10px] text-muted-foreground/80 font-medium uppercase tracking-wide">
              <span>{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/50">

          <Button
            variant="ghost"
            className="h-auto p-0 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80"
          >
            View
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
