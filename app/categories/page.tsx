import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Grid, Settings, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CATEGORIES = [
    {
        id: "strength",
        name: "LOREM IPSUM",
        icon: Settings,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/bars/shop_1_(11)_1920x1920.webp",
        features: ["LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"],
    },
    {
        id: "freeweights",
        name: "LOREM IPSUM",
        icon: Dumbbell,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/bars/shop_2_(11)_1920x1920.webp",
        features: ["LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"],
    },
    {
        id: "racks",
        name: "LOREM IPSUM",
        icon: Grid,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/bars/shop_3_(11)_1920x1920.webp",
        features: ["LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"],
    },
    {
        id: "home",
        name: "LOREM IPSUM",
        icon: Layers,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/bars/shop_4_(11)_1920x1920.webp",
        features: ["LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"],
    },
]

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 bg-muted/30 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">LOREM IPSUM</p>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
                        LOREM IPSUM
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                            LOREM IPSUM <ArrowRight className="ml-2 h-4 w-4" />
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
