import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Grid, Settings, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CATEGORIES = [
    {
        id: "strength",
        name: "Strength Machines",
        icon: Settings,
        desc: "Engineered for biomechanical perfection. Our selectorized and plate-loaded machines deliver smooth, consistent resistance for effective muscle isolation and growth. Built with heavy-duty steel and premium upholstery for commercial durability.",
        image: "/bars/shop_1_(11)_1920x1920.webp",
        features: ["Selectorized Stacks", "Plate Loaded", "Cable Systems", "Functional Trainers"],
    },
    {
        id: "freeweights",
        name: "Free Weights",
        icon: Dumbbell,
        desc: "The foundation of any serious gym. From precision-calibrated competition plates to urethane-encased dumbbells, our free weights are designed for accuracy, durability, and satisfying performance. Experience the raw feel of iron.",
        image: "/bars/shop_2_(11)_1920x1920.webp",
        features: ["Dumbbells", "Barbells", "Bumper Plates", "Kettlebells"],
    },
    {
        id: "racks",
        name: "Racks & Rigs",
        icon: Grid,
        desc: "The centerpiece of the modern training facility. Our modular power racks and rigs are constructed from 11-gauge steel, offering limitless customization options. Build the ultimate station for squats, bench press, and pull-ups.",
        image: "/bars/shop_3_(11)_1920x1920.webp",
        features: ["Power Racks", "Half Racks", "Wall Mount Rigs", "Smith Machines"],
    },
    {
        id: "home",
        name: "Home Gym",
        icon: Layers,
        desc: "Bring the commercial gym experience home. Our compact, high-performance equipment is designed to fit your space without compromising on quality or functionality. Train on your terms with professional-grade gear.",
        image: "/bars/shop_4_(11)_1920x1920.webp",
        features: ["All-in-One Trainers", "Compact Benches", "Adjustable Dumbbells", "Cardio Equipment"],
    },
]

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 bg-muted/30 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">Our Equipment</p>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
                        Browse Categories
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Explore our comprehensive range of premium gym equipment, meticulously designed for performance, safety, and longevity.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid gap-12">
                        {CATEGORIES.map((cat, i) => (
                            <div
                                key={cat.id}
                                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden bg-card border p-2 hover:border-primary/50 transition-all duration-500`}
                            >
                                {/* Image Side */}
                                <div className={`relative aspect-video lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content Side */}
                                <div className={`p-6 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <cat.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h2 className="text-3xl font-black uppercase tracking-tighter">{cat.name}</h2>
                                    </div>

                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {cat.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {cat.features.map((feature, j) => (
                                            <div key={j} className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                <span className="text-sm font-medium uppercase tracking-wide">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/categories/${cat.id}`}>
                                        <Button size="lg" className="w-full sm:w-auto font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-primary-foreground">
                                            View Products <ArrowRight className="ml-2 h-4 w-4" />
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
