import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ALL_PRODUCTS } from "@/lib/products"

import { CATEGORY_METADATA } from "@/lib/category-metadata"

export default function CategoriesPage() {
    // Dynamically derive unique categories from the product list
    const uniqueCategories = Array.from(new Set(ALL_PRODUCTS.map(p => p?.category && p.category.trim()))).filter(Boolean) as string[];

    const categories = uniqueCategories.map((catName) => {
        // Find metadata or fallback
        const meta = CATEGORY_METADATA[catName] || {};
        // Find valid image: metadata > first product image > placeholder
        const product = ALL_PRODUCTS.find(p => p.category.trim() === catName);
        const image = meta.image || product?.image || "/placeholder.jpg";

        return {
            id: catName, // Use name as ID
            name: catName,
            desc: meta.desc || `Explore our premium ${catName.toLowerCase()} collection.`,
            image: image
        }
    });

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 bg-muted/30 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
                        Browse Categories
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Bring the gym to your space.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid gap-12">
                        {categories.map((cat, i) => (
                            <div
                                key={cat.id}
                                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden bg-card border p-2 hover:border-primary/50 transition-all duration-500`}
                            >
                                {/* Image Side */}
                                <div className={`relative aspect-video lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden bg-white/5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Side */}
                                <div className={`p-6 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <h2 className="text-3xl font-black uppercase tracking-tighter">{cat.name}</h2>
                                    </div>

                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {cat.desc}
                                    </p>

                                    <Link href={`/categories/${cat.name}`}>
                                        <Button size="lg" className="w-full sm:w-auto font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-primary-foreground">
                                            VIEW ALL <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
