# 🥛 Dairy Rich — Professional Dairy Farm Website

A modern, production-ready **Next.js 14** website for **Dairy Rich**, an organic dairy farm in Lahore, Pakistan. Built with TypeScript, Tailwind CSS, and smooth scroll animations.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org/))
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/MuhammadBilal1234tt/dairy-rich-website.git
cd dairy-rich-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 🏗️ Project Structure

```
dairy-rich-website/
├── public/
│   └── images/          # Static image assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with SEO metadata
│   │   ├── page.tsx     # Home page (assembles all sections)
│   │   └── globals.css  # Global styles + Tailwind base
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky nav with mobile menu
│   │   ├── Hero.tsx           # Hero section with parallax
│   │   ├── About.tsx          # Why choose Dairy Rich
│   │   ├── Benefits.tsx       # Health benefits + pricing
│   │   ├── Gallery.tsx        # Farm image gallery
│   │   ├── Coverage.tsx       # Google Maps + delivery areas
│   │   ├── Contact.tsx        # WhatsApp CTA section
│   │   ├── FloatingButton.tsx # Sticky WhatsApp button
│   │   ├── Footer.tsx         # Site footer
│   │   └── ScrollReveal.tsx   # Scroll animation wrapper
│   └── hooks/
│       └── useInView.ts       # IntersectionObserver hook
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Framework** | Next.js 14 with App Router |
| **Styling** | Tailwind CSS with custom blue/teal theme |
| **Animations** | CSS scroll-triggered reveal, parallax, hover effects |
| **Images** | Next.js Image with lazy loading & WebP |
| **WhatsApp** | Floating button + CTA buttons throughout |
| **Maps** | Google Maps embedded in Coverage section |
| **SEO** | Meta tags, OG tags, JSON-LD schema |
| **Responsive** | Mobile-first, all breakpoints |
| **TypeScript** | Full type safety |

---

## 🎨 Brand Colors

| Color | Hex |
|---|---|
| Primary Blue | `#003DA5` |
| Light Blue | `#0066CC` |
| Teal | `#1BA0A8` |
| WhatsApp Green | `#25D366` |
| Dark Background | `#0A1628` |

---

## 📱 WhatsApp Integration

All WhatsApp buttons link to: `https://wa.me/923184965522`

To change the number, search for `923184965522` across all component files and replace.

---

## 🗺️ Google Maps

The Coverage section embeds the map from:
`https://maps.app.goo.gl/ZkkEyumJNpXzJs919`

---

## 🚢 Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

---

## 📄 License

© 2024 Dairy Rich. All rights reserved.
