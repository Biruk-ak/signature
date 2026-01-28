"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, Search, ArrowRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-18 w-48 md:h-20 md:w-64 -ml-2">
              <Image
                src="/iteams/aaa.png"
                alt="Signature Fitness"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/shop" className="hover:text-primary transition-colors">
              SHOP ALL
            </Link>
            <Link href="/categories" className="hover:text-primary transition-colors">
              CATEGORIES
            </Link>
            <Link href="/products" className="hover:text-primary transition-colors">
              PRODUCTS
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              ABOUT US
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button> */}

          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Link href="/#contact">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide px-6">
              Contact Us
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-0 bg-background/98 backdrop-blur-xl p-0">
              <SheetHeader className="absolute top-6 left-8 z-50">
                <SheetTitle className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/60">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full justify-between p-8 pt-32">
                <div className="flex flex-col gap-8">
                  <Link href="/shop" onClick={() => setIsOpen(false)} className="group flex items-center justify-between text-4xl font-black uppercase tracking-tighter text-foreground/80 hover:text-primary transition-colors duration-500">
                    Shop All
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                  </Link>
                  <Link href="/categories" onClick={() => setIsOpen(false)} className="group flex items-center justify-between text-4xl font-black uppercase tracking-tighter text-foreground/80 hover:text-primary transition-colors duration-500">
                    Categories
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                  </Link>
                  <Link href="/products" onClick={() => setIsOpen(false)} className="group flex items-center justify-between text-4xl font-black uppercase tracking-tighter text-foreground/80 hover:text-primary transition-colors duration-500">
                    Products
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="group flex items-center justify-between text-4xl font-black uppercase tracking-tighter text-foreground/80 hover:text-primary transition-colors duration-500">
                    About Us
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                  </Link>
                </div>

                <div className="flex flex-col gap-8 mb-8">
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-16 text-lg font-black uppercase tracking-[0.2em] rounded-full bg-foreground text-background hover:bg-primary hover:text-foreground transition-all duration-500">
                      Contact Us
                    </Button>
                  </Link>
                  <div className="flex justify-center opacity-30">
                    <Image
                      src="/iteams/aaa.png"
                      alt="Signature Logo"
                      width={120}
                      height={40}
                      className="object-contain grayscale"
                    />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
