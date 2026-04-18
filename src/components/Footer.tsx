'use client'

import { useState, useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/923184965522'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Contact', href: '#contact' },
  ],
  'Products': [
    { label: 'Full Cream Milk', href: '#benefits' },
    { label: 'Organic Milk', href: '#benefits' },
    { label: 'Fresh Milk', href: '#benefits' },
  ],
}

export default function Footer() {
  const [year, setYear] = useState(2024)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = (target as HTMLElement).offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0046A4] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm tracking-tight">DR</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">Dairy Rich</span>
                <p className="text-[#1BA0A8] text-xs font-medium uppercase tracking-widest">Pure &amp; Organic</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm text-sm">
              Lahore&apos;s trusted organic dairy farm. We deliver fresh, unprocessed
              full-cream milk straight from our farm to your doorstep — within
              hours of milking.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: 03184965522
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-gray-400 text-sm hover:text-[#1BA0A8] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {year} Dairy Rich. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Lahore, Pakistan
            <span className="mx-2">·</span>
            <a href="tel:+923184965522" className="hover:text-[#1BA0A8] transition-colors">
              03184965522
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
