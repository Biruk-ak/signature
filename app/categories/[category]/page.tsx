import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { ALL_PRODUCTS } from "@/lib/products"
import Link from "next/link"

export default function CategoryPage({ params }: { params: { category: string } }) {
    const categoryName = decodeURIComponent(params.category)

    // Filter products with loose matching (trim whitespace and ignore case checks)
    const categoryProducts = ALL_PRODUCTS.filter(
        (product) => product.category?.trim().toUpperCase() === categoryName.trim().toUpperCase()
    )

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Header */}
            <section className="relative py-20 bg-muted/20 border-b">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">Category</p>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">
                            {categoryName}
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Explore our premium selection of {categoryName.toLowerCase()} equipment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Sort Bar */}
            <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b">
                <div className="container px-4 mx-auto h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
                        <Link href="/categories" className="hover:text-primary transition-colors">
                            <span className="text-muted-foreground">Categories</span>
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <span>{categoryName}</span>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                        Showing {categoryProducts.length} Products
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                            {categoryProducts.map((item) => (
                                <ProductCard key={item.id} {...item} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold mb-4">No products found in this category.</h3>
                            <p className="text-muted-foreground mb-8">Try exploring other categories.</p>
                            <Link href="/categories">
                                <Button>View All Categories</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
