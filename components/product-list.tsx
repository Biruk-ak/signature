"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

interface ProductListProps {
    products: any[]
}

export function ProductList({ products }: ProductListProps) {
    const [visibleCount, setVisibleCount] = useState(8)

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4)
    }

    return (
        <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 w-full mb-12">
                {products.slice(0, visibleCount).map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            {visibleCount < products.length && (
                <Button
                    onClick={handleLoadMore}
                    variant="outline"
                    size="lg"
                    className="border-2 font-black uppercase tracking-widest bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                    Load More Product
                </Button>
            )}
        </div>
    )
}
