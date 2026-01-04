"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="contact">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column: Contact info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-12">
                                <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">LOREM IPSUM</p>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                                    LOREM <br /> <span className="text-primary">IPSUM</span>
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                        <MapPin className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-sm mb-2">LOREM IPSUM</h4>
                                        <p className="text-muted-foreground font-medium">LOREM IPSUM LOREM IPSUM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                        <Phone className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-sm mb-2">LOREM IPSUM</h4>
                                        <p className="text-muted-foreground font-medium">LOREM IPSUM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                        <Mail className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-sm mb-2">LOREM IPSUM</h4>
                                        <p className="text-muted-foreground font-medium">LOREM IPSUM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                                    <Button key={i} variant="outline" size="icon" className="w-12 h-12 rounded-xl border-2 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shadow-none">
                                        <Icon className="w-5 h-5" />
                                    </Button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-card border-2 border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                        >
                            {/* Form subtle background gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] -mr-16 -mt-16" />

                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name" className="font-black uppercase tracking-widest text-[10px] ml-1">LOREM IPSUM</Label>
                                        <Input id="first-name" placeholder="LOREM" className="h-14 bg-secondary/50 border-2 border-transparent focus-visible:border-primary focus-visible:ring-0 transition-all rounded-2xl px-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name" className="font-black uppercase tracking-widest text-[10px] ml-1">LOREM IPSUM</Label>
                                        <Input id="last-name" placeholder="LOREM" className="h-14 bg-secondary/50 border-2 border-transparent focus-visible:border-primary focus-visible:ring-0 transition-all rounded-2xl px-6" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-black uppercase tracking-widest text-[10px] ml-1">LOREM IPSUM</Label>
                                    <Input id="email" type="email" placeholder="LOREM" className="h-14 bg-secondary/50 border-2 border-transparent focus-visible:border-primary focus-visible:ring-0 transition-all rounded-2xl px-6" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="font-black uppercase tracking-widest text-[10px] ml-1">LOREM IPSUM</Label>
                                    <Input id="subject" placeholder="LOREM" className="h-14 bg-secondary/50 border-2 border-transparent focus-visible:border-primary focus-visible:ring-0 transition-all rounded-2xl px-6" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="font-black uppercase tracking-widest text-[10px] ml-1">LOREM IPSUM</Label>
                                    <Textarea id="message" placeholder="LOREM IPSUM" className="min-h-[150px] bg-secondary/50 border-2 border-transparent focus-visible:border-primary focus-visible:ring-0 transition-all rounded-2xl px-6 py-4 resize-none" />
                                </div>

                                <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-[0.2em] text-lg rounded-2xl shadow-[0_10px_30px_rgba(215,182,74,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                    <Send className="w-5 h-5 mr-3" />
                                    LOREM IPSUM
                                </Button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
