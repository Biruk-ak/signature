import { Hero } from "@/components/hero"
import { ProductCard } from "@/components/product-card"
import { ProductCarousel } from "@/components/product-carousel"
import { PerformanceShowcase } from "@/components/performance-showcase"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer" // Added Footer
import { ArrowRight, Dumbbell, Grid, Settings, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ALL_PRODUCTS = [
  {
    id: "1",
    name: "Vault-X Hybrid Bag",
    price: "$199.00",
    category: "STRENGTH MACHINES",
    image: "/bags/shop_2_(2)_1920x1920.webp",
    hoverImage: "/bags/shop_1_(2)_1920x1920.webp",
    isNew: true,
    specs: [
      { label: "Weight", value: "20kg" },
      { label: "Handles", value: "Multi-Grip" },
    ],
  },
  {
    id: "2",
    name: "Hyrox Wall Ball",
    price: "$129.00",
    category: "FREE WEIGHTS",
    image: "/ball/wallball_8_1920x1920.webp",
    hoverImage: "/ball/wallball_9_1920x1920.webp",
    specs: [
      { label: "Weight", value: "9kg" },
      { label: "Material", value: "Reinforced" },
    ],
  },
  {
    id: "3",
    name: "Elite Power Rack",
    price: "$1,899.00",
    category: "RACKS & RIGS",
    image: "/bars/shop_2_(11)_1920x1920.webp",
    hoverImage: "/bars/shop_3_(11)_1920x1920.webp",
    specs: [
      { label: "Capacity", value: "2000lb" },
      { label: "Steel", value: "7-Gauge" },
    ],
  },
  {
    id: "4",
    name: "Pro Utility Bench",
    price: "$549.00",
    category: "ACCESSORIES",
    image: "/centr/rig_target_produkt_02_1920x1920.webp",
    hoverImage: "/centr/rig_target_produkt_03_1920x1920.webp",
    specs: [
      { label: "Positions", value: "FID" },
      { label: "Weight", value: "1000lb" },
    ],
  },
  {
    id: "5",
    name: "Bumper Plate Set",
    price: "$899.00",
    category: "FREE WEIGHTS",
    image: "/kg/shop_5_(7)_1920x1920.webp",
    hoverImage: "/kg/shop_6_(3)_1920x1920.webp",
    specs: [
      { label: "Total", value: "150kg" },
      { label: "Material", value: "Rubber" },
    ],
  },
  {
    id: "6",
    name: "Core Training Kit",
    price: "$349.00",
    category: "ACCESSORIES",
    image: "/kg/Centrxhyroxstarterkit.webp",
    hoverImage: "/kg/shop_3_(8)_1920x1920.webp",
    specs: [
      { label: "Bundle", value: "Starter" },
      { label: "Type", value: "Functional" },
    ],
  },
  {
    id: "7",
    name: "Industrial Dumbbells",
    price: "$299.00",
    category: "FREE WEIGHTS",
    image: "/iteams/gym8.jpg",
    hoverImage: "/iteams/gym9.jpg",
    specs: [
      { label: "Material", value: "Urethane" },
      { label: "Grip", value: "Knurled Steel" },
    ],
  },
  {
    id: "8",
    name: "Commercial Leg Press",
    price: "$3,299.00",
    category: "STRENGTH MACHINES",
    image: "/iteams/gym11.jpg",
    hoverImage: "/iteams/gym12.jpg",
    specs: [
      { label: "Load", value: "1200lb" },
      { label: "Angle", value: "45 Degree" },
    ],
  },
  {
    id: "9",
    name: "Speed Rope Pro",
    price: "$45.00",
    category: "ACCESSORIES",
    image: "/bags/shop_3_(2)_1920x1920.webp",
    hoverImage: "/bags/shop_4_(2)_1920x1920.webp",
    specs: [
      { label: "Cable", value: "Coated Steel" },
      { label: "Bearings", value: "High-Speed" },
    ],
  },
  {
    id: "10",
    name: "Olympic Lift Bar",
    price: "$599.00",
    category: "FREE WEIGHTS",
    image: "/bars/shop_4_(11)_1920x1920.webp",
    hoverImage: "/bars/shop_5_(8)_1920x1920.webp",
    specs: [
      { label: "Rating", value: "2000lb" },
      { label: "Knurl", value: "Aggressive" },
    ],
  },
  {
    id: "11",
    name: "Commercial Squat Rack",
    price: "$1,499.00",
    category: "RACKS & RIGS",
    image: "/iteams/gym13.jpg",
    hoverImage: "/iteams/gym14.jpg",
    specs: [
      { label: "Steel", value: "11-Gauge" },
      { label: "Stability", value: "Reinforced" },
    ],
  },
  {
    id: "12",
    name: "Multi-Function Bench",
    price: "$699.00",
    category: "ACCESSORIES",
    image: "/iteams/gym15.jpg",
    hoverImage: "/iteams/gym16.jpg",
    specs: [
      { label: "Type", value: "Adjustable" },
      { label: "Pad", value: "High-Density" },
    ],
  },
  {
    id: "13",
    name: "Commercial Bench Press",
    price: "$1,299.00",
    category: "STRENGTH MACHINES",
    image: "/iteams/gym17.jpg",
    hoverImage: "/iteams/gym18.jpg",
    specs: [
      { label: "Load", value: "1200lb" },
      { label: "Angle", value: "45 Degree" },
    ],
  },
  {
    id: "14",
    name: "Commercial Pull Up Bar",
    price: "$499.00",
    category: "FREE WEIGHTS",
    image: "/rob/shop_1_(1)_1920x1920.jpg",
    hoverImage: "/rob/shop_2_(1)_1920x1920.jpg",
    specs: [
      { label: "Type", value: "Adjustable" },
      { label: "Pad", value: "High-Density" },
    ],
  },
  {
    id: "15",
    name: "Commercial Pull Up Bar",
    price: "$499.00",
    category: "FREE WEIGHTS",
    image: "/push/CENTR x HYROX Competition Power Sled_shop_1_1920x1920.jpg",
    hoverImage: "/push/CENTR x HYROX Competition Power Sled_shop_2_1920x1920.jpg",
    specs: [
      { label: "Type", value: "Adjustable" },
      { label: "Pad", value: "High-Density" },
    ],
  },


]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Featured Products */}
      <section className="py-22">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">The Heavy Hitters</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our best-selling professional grade equipment, engineered for maximum durability and precision ergonomics.
            </p>
          </div>

          <ProductCarousel products={ALL_PRODUCTS.slice(0, 6)} />

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
      {/* Categories Section */}
      <section className="py-10 pb-16 bg-secondary/50">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 justify-items-center max-w-3xl mx-auto">
            {[
              {
                name: "Strength Machines",
                image: "/bars/shop_1_(11)_1920x1920.webp",
              },
              {
                name: "Free Weights",
                image: "/ball/wallball_12_1920x1920.webp",
              },
              {
                name: "Racks & Rigs",
                image: "/kg/shop_6_(3)_1920x1920.webp",
              },
              {
                name: "Home Gym",
                image: "/centr/rig_target_produkt_10_1920x1920.webp",
              },
            ].map((cat, i) => (
              <Link key={i} href="/categories" className="group flex flex-col items-center w-full">
                <div className="relative aspect-square w-full max-w-[160px] overflow-hidden rounded-full bg-card border-2 border-border/10 transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(215,182,74,0.2)]">
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            ))}
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
      {/* All products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-2">Inventory</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                All Professional Gear
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
            {ALL_PRODUCTS.slice(6).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      <PerformanceShowcase />
      <Footer /> {/* Added Footer to page */}
    </main>
  )
}
