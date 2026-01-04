"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ALL_PRODUCTS } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function ProductPage() {
    const { id } = useParams()
    const product = ALL_PRODUCTS.find((p) => p.id === id)
    const [activeImage, setActiveImage] = useState(product?.image)

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
                <h1 className="text-4xl font-black uppercase mb-4 text-sm">LOREM IPSUM</h1>
                <Link href="/">
                    <Button variant="outline" className="border-2 font-black uppercase tracking-widest text-[10px] h-10 px-6">
                        LOREM IPSUM
                    </Button>
                </Link>
            </div>
        )
    }

    const gallery = product.gallery || [product.image, product.hoverImage].filter(Boolean) as string[]

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 pt-8 pb-16 lg:pb-20">

                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all group text-[10px]">
                    <ArrowLeft className="w-3 h-3" />
                    <span>LOREM IPSUM</span>
                </Link>

                {/* Single Large Detail Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border/40 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

                        {/* Left Side: Product Image Display */}
                        <div className="bg-secondary/5 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/40">
                            <div className="relative aspect-square w-full max-w-md mx-auto">
                                <Image
                                    src={activeImage || product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                                {product.isNew && (
                                    <Badge className="absolute top-0 left-0 bg-[#d7b64a] text-black font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-xl border-0 shadow-lg">
                                        LOREM IPSUM
                                    </Badge>
                                )}
                            </div>

                            {/* Smaller Thumbnails */}
                            <div className="flex gap-3 justify-center mt-8">
                                {gallery.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(img)}
                                        className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-background ${activeImage === img ? 'border-[#d7b64a] ring-4 ring-[#d7b64a]/10' : 'border-border/30 hover:border-border'}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} view ${i + 1}`}
                                            fill
                                            className="object-contain p-1.5"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Product Info */}
                        <div className="p-8 lg:p-16 flex flex-col justify-center">
                            <div className="mb-8">
                                <p className="text-[#d7b64a] font-black uppercase tracking-[0.3em] text-[12px] mb-4">{product.category}</p>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                                    {product.name}
                                </h1>
                                <div className="h-1 w-20 bg-[#d7b64a] mb-10" />
                                <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-xl">
                                    {product.description}
                                </p>
                            </div>

                            {/* Specifications Display */}
                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="flex flex-col">
                                        <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</p>
                                        <p className="text-lg font-bold uppercase tracking-tight">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <Button size="lg" className="h-16 flex-1 bg-[#d7b64a] hover:bg-[#d7b64a]/90 text-black text-lg font-black uppercase tracking-[0.15em] rounded-2xl shadow-xl transition-all hover:scale-[1.02]">
                                    LOREM IPSUM
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 flex-1 border-2 border-border font-black uppercase tracking-widest rounded-2xl">
                                    LOREM IPSUM
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* More Section */}
                <section className="pt-16 border-t border-border/20">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-[#d7b64a] font-black uppercase tracking-[0.3em] mb-2 text-xs">LOREM IPSUM</p>
                            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                                LOREM IPSUM
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ALL_PRODUCTS.filter(p => p.id !== id).map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
