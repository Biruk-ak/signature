import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

import { ALL_PRODUCTS } from "@/lib/products"

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Header */}
            <section className="relative py-20 bg-muted/20 border-b">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">Complete Catalog</p>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">
                            Shop Equipment
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Equip your facility with the industry's most durable and biomechanically precise machinery.
                            Built for performance, designed to last.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Sort Bar (Visual Only for now) */}
            <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b">
                <div className="container px-4 mx-auto h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span>Filter</span>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                        Showing {ALL_PRODUCTS.length} Products
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {ALL_PRODUCTS.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Button variant="outline" size="lg" className="border-2 font-black uppercase tracking-widest px-10 h-14">
                            Load More Products
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
