import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/massive-luxury-commercial-gym-layout-with-racks-an.jpg"
                        alt="About Signature Equipment"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white mb-4">
                        About <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto uppercase tracking-widest font-bold">
                        Performance • Design • Durability
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                                <p className="text-primary text-xs font-black uppercase tracking-[0.3em]">Our Vision</p>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                                To elevate fitness and wellness spaces across Ethiopia
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    To elevate fitness and wellness spaces across Ethiopia and beyond by providing world-class equipment that inspires movement, performance, and intentional living.
                                </p>
                                <p>
                                    We envision a future where access to premium fitness tools empowers individuals, studios, and organizations to train with confidence and purpose.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8 lg:mt-32">
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                                <p className="text-primary text-xs font-black uppercase tracking-[0.3em]">Our Mission</p>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                                Curating & Distributing Premium Equipment
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Signature Equipment exists to curate and distribute premium fitness equipment that blends performance, design, and durability.
                                </p>
                                <p>
                                    As the official distributor of Centr in Ethiopia, our mission is to support homes, studios, hotels, and corporate wellness spaces with thoughtfully selected equipment, expert guidance, and a seamless end-to-end experience, from consultation to delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/4 right-0 translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </section>

            {/* Story Section */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <p className="text-primary text-xs font-black uppercase tracking-[0.3em]">Our Story</p>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8">
                                The Journey of <span className="text-primary">Excellence</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/aboutus.webp"
                                    alt="Signature Equipment Genesis"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <p className="font-bold text-foreground">
                                    Signature Equipment was founded in Addis Ababa with a clear purpose: to bring world-class fitness equipment to Ethiopia and do it the right way.
                                </p>
                                <p>
                                    As fitness and wellness spaces across the country began to grow, we recognized a gap: access to globally trusted equipment, paired with knowledgeable, local support. Signature Equipment was created to meet that need.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                            <p>
                                Through our partnership with Centr, we provide premium, performance-driven equipment trusted worldwide. But our role extends beyond distribution. We take the time to understand each space, each project, and each goal, ensuring the right equipment is selected for how it will truly be used.
                            </p>
                            <p className="text-2xl font-black text-foreground uppercase tracking-tight border-l-4 border-primary pl-8 py-4">
                                "Rooted in excellence and guided by responsibility, Signature Equipment is committed to supporting the growth of high-quality fitness environments across Ethiopia, one space at a time."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    )
}
