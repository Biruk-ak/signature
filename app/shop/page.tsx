import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

const SHOP_ITEMS = [
    {
        id: "1",
        name: "Elite Series Treadmill",
        price: "$3,499.00",
        category: "CARDIO",
        image: "/iteams/gym11.jpg",
        specs: [
            { label: "Motor", value: "4.0 HP AC" },
            { label: "Screen", value: "22\" Touch" },
        ],
        isNew: true,
    },
    {
        id: "2",
        name: "Pro Elliptical Trainer",
        price: "$2,899.00",
        category: "CARDIO",
        image: "/iteams/gym12.jpg",
        specs: [
            { label: "Stride", value: "22 Inch" },
            { label: "Resistance", value: "25 Levels" },
        ],
    },
    {
        id: "3",
        name: "Power Rack System",
        price: "$1,899.00",
        category: "RACKS",
        image: "/iteams/gym13.jpg",
        specs: [
            { label: "Capacity", value: "1200 lbs" },
            { label: "Steel", value: "11 Gauge" },
        ],
        isNew: true,
    },
    {
        id: "4",
        name: "Rubber Hex Dumbbells",
        price: "$799.00",
        category: "FREE WEIGHTS",
        image: "/iteams/gym14.jpg",
        specs: [
            { label: "Weight", value: "5-50 lbs" },
            { label: "Material", value: "Rubber/Steel" },
        ],
    },
    {
        id: "5",
        name: "Dual Cable Cross",
        price: "$3,299.00",
        category: "STRENGTH",
        image: "/iteams/gym15.jpg",
        specs: [
            { label: "Stacks", value: "2x 200lb" },
            { label: "Ratio", value: "2:1" },
        ],
    },
    {
        id: "6",
        name: "Iso-Lateral Leg Press",
        price: "$4,199.00",
        category: "STRENGTH",
        image: "/iteams/gym16.jpg",
        specs: [
            { label: "Carriage", value: "Linear Bearings" },
            { label: "Capacity", value: "1800 lbs" },
        ],
        isNew: true,
    },
    {
        id: "7",
        name: "Smith Machine Pro",
        price: "$2,499.00",
        category: "STRENGTH",
        image: "/iteams/gym17.jpg",
        specs: [
            { label: "Bar", value: "Counterbalanced" },
            { label: "Storage", value: "6 Pegs" },
        ],
    },
    {
        id: "8",
        name: "Adjustable FID Bench",
        price: "$549.00",
        category: "ACCESSORIES",
        image: "/iteams/gym18.jpg",
        specs: [
            { label: "Positions", value: "Flat/Incline/Dec" },
            { label: "Load", value: "1000 lbs" },
        ],
    },
    {
        id: "9",
        name: "Competition Kettlebells",
        price: "$249.00",
        category: "FREE WEIGHTS",
        image: "/iteams/gym8.jpg",
        specs: [
            { label: "Weight", value: "8-32 kg" },
            { label: "Finish", value: "Powder Coat" },
        ],
    },
    {
        id: "10",
        name: "Olympic Plate Tree",
        price: "$199.00",
        category: "STORAGE",
        image: "/iteams/gym9.jpg",
        specs: [
            { label: "Capacity", value: "800 lbs" },
            { label: "Pegs", value: "6 Chrome" },
        ],
    },
    {
        id: "11",
        name: "Functional Trainer",
        price: "$2,499.00",
        category: "STRENGTH",
        image: "/premium-dual-cable-functional-trainer-gym-machine-.jpg",
        isNew: true,
        specs: [
            { label: "Weight", value: "250lb Stack" },
            { label: "Footprint", value: "4ft x 6ft" },
        ],
    },
    {
        id: "12",
        name: "Competition Plates",
        price: "$649.00",
        category: "FREE WEIGHTS",
        image: "/color-coded-olympic-competition-bumper-plates-stac.jpg",
        specs: [
            { label: "Weight", value: "140kg Set" },
            { label: "Material", value: "Urethane" },
        ],
    },
]

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
                        Showing {SHOP_ITEMS.length} Products
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {SHOP_ITEMS.map((item) => (
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
