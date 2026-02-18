# Signature Fitness - Project Documentation & Brand Context

> **Note to AI Agents:** This document contains comprehensive information about the Signature Fitness project, including its brand identity, product offerings, technology stack, and design system. Use this context to generate or modify the website with full awareness of the project's premium, high-performance nature.

---

## 1. Project Overview

**Signature Fitness** (also referred to as **Signature Wellness**) is the **official distributor of elite fitness equipment** based in **Addis Ababa, Ethiopia**. The brand specializes in premium commercial and home gym equipment, serving athletes, trainers, studios, and fitness enthusiasts.

-   **Tagline:** "Forged for elite performance. Premium commercial and home gym equipment."
-   **Mission:** To help clients build training spaces that combine performance, design, and durability.
-   **Key Partnership:** Official distributor of the **Centr** range (founded by Chris Hemsworth) and **HYROX** competition equipment.
-   **Core Value:** High-performance, luxury fitness solutions.

---

## 2. Brand Identity & Design System

The visual identity is designed to be **premium, modern, and high-energy**. It utilizes a "sleek dark mode" aesthetic with vibrant accents to create a "wow" factor.

### Color Palette (Tailwind CSS v4 / OKLCH)

The design uses the OKLCH color space for superior vibrancy and accessibility.

-   **Primary (Gold/Accent):** `oklch(0.778 0.128 85.5)` ≈ `#d7b64a`
    -   Used for buttons, highlights, borders, and calls-to-action.
    -   Represents luxury, elite performance, and energy.
-   **Background (Light):** `oklch(1 0 0)` (White)
-   **Background (Dark):** `oklch(0.186 0.032 260)` (Deep Blue/Black)
-   **Foreground (Text):** High contrast (White on dark, Dark on light).
-   **Muted/Secondary:** `oklch(0.25 0.03 260)` (Dark Grey/Blue) for cards and sections.

### Typography

-   **Font Family:** `Geist` (Sans) and `Geist Mono` (Monospace).
-   **Style:**
    -   **Headers:** Uppercase (`uppercase`), Heavy Weights from `font-bold` to `font-black`.
    -   **Tracking:** Tight (`tracking-tighter`) for large headlines, Wide (`tracking-widest` or `tracking-[0.3em]`) for subheaders/labels.
    -   **Body:** Clean, legible sans-serif (`antialiased`).

### Visual Elements

-   **Glassmorphism:** Used in navigation bars and overlays (`backdrop-blur-md`, `bg-background/95`).
-   **Animations:**
    -   **Framer Motion (`framer-motion`)**: Used for smooth transitions, scroll animations, and interactive elements.
    -   **Hover Effects:** Glows, scale upgrades (`group-hover:scale-110`), and border transitions.
-   **Imagery:** High-quality photography of equipment in use or studio settings. No placeholders.

---

## 3. Technology Stack

The project is built on a modern, performance-focused React stack.

-   **Framework:** **Next.js 16** (App Router).
-   **Language:** **TypeScript**.
-   **Styling:** **Tailwind CSS v4** (Alpha/Beta).
    -   Plugins: `tailwindcss-animate`.
    -   Utilities: `clsx`, `tailwind-merge` (`cn` helper).
-   **UI Library:** **Radix UI** (Primitives) + **Shadcn/UI** (Customizable components).
    -   Components: Sheet, Dialog, Button, Carousel (`embla-carousel-react`), etc.
-   **Icons:** **Lucide React**.
-   **State/Animation:** **Framer Motion** & **Motion**.
-   **Forms:** `react-hook-form` + `zod`.
-   **Email:** `nodemailer` (Server-side sending).
-   **Analytics:** `@vercel/analytics`.

---

## 4. Product Offerings

The catalog features high-end equipment categorized into key areas. Data is centrally managed in `lib/products.ts`.

### Key Categories

1.  **Functional machine**
    -   *Products:* M2 Multi-Gym, M5 Multi-Gym, SCS Smith Cage System, BL1 Body Lift.
2.  **Cardio & Endurance**
    -   *Products:* center Series T7 Treadmill, Centr Runr-S (Motorless Treadmill).
3.  **Racks, Rigs & Functional Frames**
    -   *Products:* SF3 Smith Functional Trainer, FTX Functional Trainer, center FID3.2 Adjustable Bench.
4.  **Weights**
    -   *Products:* Centr x HYROX Competition Sandbags, Wall Balls, Bumper Plates, Octo Kettlebells, Power Sleds, Power Ropes, Hexagon Dumbbells.
5.  **Accessories**
    -   *Products:* center 3-Tier Dumbbell Storage Rack, Rig Targets.

### Featured Product Details

-   **Centr x HYROX Line:** A major highlight. Includes specialized equipment like the "Octo Kettlebell", "Power Sled", and "Perform Tread NMT.3".
-   **center Fitness:** Known for functional trainers and multi-gyms (FTX, M5, SCS).
-   **Commercial Grade:** Many items are specified as "Commercial" or "Tournament" grade (e.g., Competition Sandbags).

---

## 5. Website Architecture & Navigation

### Sitemap

-   **Home (`/`)**:
    -   **Hero Section**: Dynamic background, strong value proposition.
    -   **Featured Products**: Carousel of top items (e.g., CENTR x HYROX).
    -   **Categories Grid**: Visual links to product categories (Strength, Cardio, etc.).
    -   **Commercial/About Section**: "Official distributor in Addis Ababa".
    -   **All Products Grid**: A curated list of equipment.
    -   **Performance Showcase**: Visual highlight section.
    -   **Contact Section**: Email/Form for inquiries.
-   **About Us (`/about`)**: Company background and mission.
-   **Shop / Explore (`/shop`)**: Full product catalog.
-   **Categories (`/categories`)**: Detailed view of product types.
-   **Product Details (`/product/[id]`)**: Comprehensive product view with gallery, specs, and description.

### Navigation Bar

-   **Logo:** Left-aligned "Signature Fitness" (Image: `/iteams/aaa.png`).
-   **Links:** ABOUT US, EXPLORE, CATEGORIES, PRODUCTS.
-   **Actions:** Theme Toggle (Sun/Moon), "CONTACT US" Button (Primary CTA).
-   **Mobile:** Hamburger menu triggering a `Sheet` with full navigation.

### Footer

-   Links to categories, legal, and contact info.
-   Branding consistencies.

### Contact Information

-   **Address:** Bole, Addis Ababa, Ethiopia
-   **Phone:** `+251 998802898`
-   **Email:** `fitness@signaturewellnesseth.com`

---

## 6. Implementation Guidelines for AI

When generating code or content for Signature Fitness:

1.  **Prioritize "Premium":** Code should reflect a luxury brand. Use smooth transitions (`duration-500`, `ease-out`), high-quality spacing (`py-24`, `gap-8`), and elegant typography.
2.  **Strict Type Safety:** Use the `Product` interfaces defined in the codebase.
3.  **Performant Images:** Always use `next/image` with proper sizing and `priority` flags for LCP elements.
4.  **Interactive Elements:** Buttons should have hover states (`hover:bg-primary/90`). Cards should lift or glow on hover.
5.  **Responsive Design:** Mobile-first approach is critical (`md:grid-cols-2`, `lg:grid-cols-4`).
6.  **SEO Ready:** Ensure metadata titles and descriptions are populated for every new page.

---

**End of Context**
