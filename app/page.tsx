import { Hero } from "@/components/hero"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer" // Added Footer
import { ArrowRight, Dumbbell, Grid, Settings, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Vault-X Functional Trainer",
    price: "$2,499.00",
    category: "STRENGTH MACHINES",
    image: "/bags/shop_2_(2)_1920x1920.webp",
    isNew: true,
    specs: [
      { label: "Weight", value: "250lb Stack" },
      { label: "Footprint", value: "4ft x 6ft" },
    ],
  },
  {
    id: "2",
    name: "Precision Competition Plates",
    price: "$649.00",
    category: "FREE WEIGHTS",
    image: "/ball/wallball_8_1920x1920.webp",
    specs: [
      { label: "Weight", value: "140kg Set" },
      { label: "Material", value: "Urethane" },
    ],
  },
  {
    id: "3",
    name: "Iron Power Rack 5000",
    price: "$1,299.00",
    category: "RACKS & RIGS",
    image: "/bars/shop_2_(11)_1920x1920.webp",
    specs: [
      { label: "Capacity", value: "1500lb" },
      { label: "Steel", value: "11-Gauge" },
    ],
  },
  {
    id: "4",
    name: "Adjustable Bench Pro",
    price: "$449.00",
    category: "ACCESSORIES",
    image: "/centr/rig_target_produkt_02_1920x1920.webp",
    specs: [
      { label: "Positions", value: "8-Way" },
      { label: "Weight", value: "1000lb Limit" },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Categories Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-2">Departments</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                Choose Your Discipline
              </h2>
            </div>
            <Link href="/categories">
              <Button
                variant="outline"
                className="hidden md:flex border-2 font-black uppercase tracking-widest bg-transparent"
              >
                View All Categories
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Strength Machines",
                icon: Settings,
                desc: "Commercial selectorized equipment",
                image: "/equpment/gym1.jpg",
              },
              {
                name: "Free Weights",
                icon: Dumbbell,
                desc: "Dumbbells, barbells, and plates",
                image: "/equpment/gym4.jpg",
              },
              {
                name: "Racks & Rigs",
                icon: Grid,
                desc: "Modular 11-gauge steel solutions",
                image: "/equpment/gym6.jpg",
              },
              {
                name: "Home Gym",
                icon: Layers,
                desc: "Compact high-performance gear",
                image: "/equpment/gym3.jpg",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="group relative h-64 overflow-hidden rounded-2xl bg-card border hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-20 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />
                <div className="relative z-20 h-full p-8 flex flex-col justify-end">
                  <cat.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">{cat.desc}</p>
                  <span className="flex items-center text-xs font-black text-primary group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">The Heavy Hitters</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our best-selling professional grade equipment, engineered for maximum durability and precision ergonomics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest h-14 px-10"
            >
              VIEW ENTIRE CATALOG
            </Button>
          </div>
        </div>
      </section>
      {/* Commercial Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-muted group">
              <Image
                src="/massive-luxury-commercial-gym-layout-with-racks-an.jpg"
                alt="Commercial Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div>
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">Enterprise Solutions</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                BUILDING THE <br /> WORLD'S <span className="text-primary">STRONGEST</span> FACILITIES
              </h2>
              <p className="text-xl text-background/70 mb-10 leading-relaxed font-medium">
                From luxury hotels to elite athletic training centers, we provide comprehensive design, logistics, and
                heavy-duty equipment for commercial spaces.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-3xl font-black text-primary">500+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-background/50">Facilities Equipped</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">24H</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-background/50">Support Response</p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest h-16 px-12 text-lg"
              >
                PARTNER WITH US
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Added Footer to page */}
    </main>
  )
}
