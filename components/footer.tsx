import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="relative h-16 w-48 -ml-4">
              <Image
                src="/iteams/aaa.png"
                alt="Signature Fitness"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Signature Wellness
              Premium Fitness Equipment Distributor- Addis Ababa, Ethiopia
              Official Partner of Centr and Curated Elite Fitness Brands
            </p>

          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Equipment</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-muted-foreground">
              <li>
                <Link href="/categories/Strength Machines" className="hover:text-primary transition-colors">
                  Strength Machines
                </Link>
              </li>
              <li>
                <Link href="/categories/Free Weights & Plates" className="hover:text-primary transition-colors">
                  Free Weights & Plates
                </Link>
              </li>
              <li>
                <Link href="/categories/Racks, Rigs & Functional Frames" className="hover:text-primary transition-colors">
                  Racks, Rigs & Functional Frames
                </Link>
              </li>
              <li>
                <Link href="/categories/Cardio & Endurance" className="hover:text-primary transition-colors">
                  Cardio & Endurance
                </Link>
              </li>
              <li>
                <Link href="/categories/Training Accessories" className="hover:text-primary transition-colors">
                  Training Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Our Company
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Commercial Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Warranty Info
                </Link>
              </li> */}
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bole, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+251 998802898</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>fitness@signaturewellnesseth.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <p>© 2026 Signature Wellness. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  )
}
