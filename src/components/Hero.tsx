'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL = 'https://wa.me/923184965522?text=Hello%20Dairy%20Rich!%20I%20would%20like%20to%20enquire%20about%20fresh%20milk%20delivery.'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0046A4] via-[#005bbf] to-[#1BA0A8]" />

      {/* Subtle background shapes */}
      <div ref={parallaxRef} className="absolute inset-0 hero-parallax pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-[#25D366] rounded-full" />
          <span className="text-white/90 text-sm font-medium tracking-wide">Lahore&apos;s Trusted Organic Dairy Farm</span>
        </div>

        {/* Brand name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight animate-slide-up"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}
        >
          Dairy Rich
        </h1>

        {/* Sub tagline */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {['Fresh', 'Organic', 'Unprocessed'].map((tag, i) => (
            <span key={tag} className="flex items-center gap-1.5 text-white/90 text-sm sm:text-base font-medium tracking-wide">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/50" />}
              {tag}
            </span>
          ))}
        </div>

        {/* Main tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-normal animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          We deliver <strong className="text-white font-semibold">organic full cream milk</strong> to your doorstep within a few hours of milking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group whatsapp-pulse bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full text-base font-semibold flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl shadow-lg shadow-green-500/30"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-white border border-white/40 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '100%', label: 'Organic' },
            { value: '2–3 hrs', label: 'Fresh Delivery' },
            { value: 'Rs.100', label: 'Starting Price' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass rounded-2xl py-4 px-3">
              <div className="text-white text-xl font-bold">{stat.value}</div>
              <div className="text-white/65 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
