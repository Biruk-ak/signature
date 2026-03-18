"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

interface Product {
    id: string
    name: string
    price: string
    category: string
    image: string
    hoverImage?: string
    specs: {
        label: string
        value: string
    }[]
}

interface ProductCarouselProps {
    products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [isAtStart, setIsAtStart] = React.useState(true)
    const [isAtEnd, setIsAtEnd] = React.useState(false)

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setIsAtStart(scrollLeft <= 0)
            // Add a small tolerance (e.g., 2px) to avoid rounding issues on various devices
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 2)
        }
    }

    React.useEffect(() => {
        checkScrollPosition()
        window.addEventListener("resize", checkScrollPosition)
        return () => window.removeEventListener("resize", checkScrollPosition)
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
        }
    }

    return (
        <div className="relative group">
            {/* Scroll Buttons */}
            <div className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-ml-2 z-20 transition-opacity duration-300 ${isAtStart ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full shadow-lg border-2 border-border/50 hover:bg-primary hover:text-primary-foreground h-10 w-10 md:h-12 md:w-12 bg-background/80 backdrop-blur-sm"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
            </div>

            <div className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:-mr-2 z-20 transition-opacity duration-300 ${isAtEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full shadow-lg border-2 border-border/50 hover:bg-primary hover:text-primary-foreground h-10 w-10 md:h-12 md:w-12 bg-background/80 backdrop-blur-sm"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                onScroll={checkScrollPosition}
                className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-full sm:min-w-[320px] md:min-w-[350px] lg:min-w-[calc(25%-1.5rem)] snap-start">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    )
}
