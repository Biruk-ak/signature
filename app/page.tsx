import { Hero } from "@/components/hero"
import { ProductCard } from "@/components/product-card"
import { ProductCarousel } from "@/components/product-carousel"
import { PerformanceShowcase } from "@/components/performance-showcase"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer" // Added Footer
import { ContactSection } from "@/components/contact-section"
import { ArrowRight, Dumbbell, Grid, Settings, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ALL_PRODUCTS } from "@/lib/products"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Featured Products */}
      <section className="py-22">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">CENTR x HYROX</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovation meets functionality: the new CENTR x HYROX Performance-line.
            </p>
          </div>

          <ProductCarousel products={ALL_PRODUCTS.slice(0, 6)} />
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-10 pb-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              {/* <p className="text-primary font-black uppercase tracking-[0.3em] mb-2">LOREM IPSUM</p> */}
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                categories
              </h2>
            </div>
            <Link href="/categories">
              <Button
                variant="outline"
                className="hidden md:flex border-2 font-black uppercase tracking-widest bg-transparent"
              >
                view more
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 w-full">
            {[
              {
                name: "Strength Machines",
                image: "/M2 MULTI-GYM/M202.webp",
              },
              {
                name: "Cardio & Endurance",
                image: "/INSPIRE SERIES T7 TREADMILL/inspire-series-t7-loopband-hoofdbeeld.webp",
              },
              {
                name: "Racks, Rigs & Functional Frames",
                image: "/SF3 SMITH FUNCTIONAL TRAINER/sf32pk-productafbeelding.webp",
              },
              {
                name: "Free Weights & Plates",
                image: "/dumbbell/CENTR x HYROX Dumbbell Urethane 5 kg_1_1920x1920.jpg",
              },
              {
                name: "Training Accessories",
                image: "/Inspire 3-TIER DUMBBELL STORAGE RACK/3a74e507-285f-4173-ab5b-43d918ba137c_1.2fb849f4b6e43f3a0550205b5e1bc0d2.webp",
              },

            ].map((cat, i) => (
              <Link key={i} href={`/categories/${cat.name}`} className="group flex flex-col items-center w-full">
                <div className="relative aspect-square w-full overflow-hidden rounded-full bg-card border-2 border-border/10 transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(215,182,74,0.2)]">
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="mt-4 text-sm font-black uppercase tracking-wider text-center group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
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
                alt="LOREM IPSUM"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div>
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">LOREM IPSUM</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                LOREM <br /> IPSUM <span className="text-primary">LOREM</span> LOREM
              </h2>
              <p className="text-xl text-background/70 mb-10 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-3xl font-black text-primary">000+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-background/50">LOREM IPSUM</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">00H</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-background/50">LOREM IPSUM</p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest h-16 px-12 text-lg"
              >
                LOREM IPSUM
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
              <p className="text-primary font-black uppercase tracking-[0.3em] mb-2">LOREM IPSUM</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                LOREM IPSUM
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
      z
      <ContactSection />
      <Footer /> {/* Added Footer to page */}
    </main>
  )
}
