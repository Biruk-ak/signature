"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ALL_PRODUCTS } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
    const featuredProduct = ALL_PRODUCTS[0];
    const [activeImage, setActiveImage] = useState(featuredProduct?.image)
    const gallery = featuredProduct.gallery || [featuredProduct.image, featuredProduct.hoverImage].filter(Boolean) as string[]

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 pt-12 pb-16 lg:pb-20">



                <section className="pt-8">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-[#d7b64a] font-black uppercase tracking-[0.3em] mb-2 text-xs">Our Collection</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                                All Equipment
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ALL_PRODUCTS.slice(1).map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
