"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, Search } from "lucide-react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-16 w-48 md:h-20 md:w-64 -ml-2">
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
            {/* <Link href="/about" className="hover:text-primary transition-colors">
              STORY
            </Link> */}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>

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

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
