'use client'

import ScrollReveal from './ScrollReveal'

const WHATSAPP_URL = 'https://wa.me/923184965522?text=Hello%20Dairy%20Rich!%20I%20want%20to%20enquire%20about%20milk%20delivery.'

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'More Protein',
    description:
      'Our full-cream milk is naturally rich in high-quality proteins that support muscle growth, repair, and overall body strength.',
    stat: '3.4g',
    statLabel: 'per 100ml',
    color: 'bg-[#0046A4]',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'More Vitamins',
    description:
      'Packed with Vitamins A, D, B2, and B12 — essential for immunity, vision, skin health, and energy metabolism.',
    stat: '4x',
    statLabel: 'richer than UHT',
    color: 'bg-[#0046A4]',
    featured: true,
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'More Calcium',
    description:
      'Fresh milk delivers bioavailable calcium that is more effectively absorbed by your body for stronger bones and teeth.',
    stat: '120mg',
    statLabel: 'per 100ml',
    color: 'bg-[#0046A4]',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[#1BA0A8] text-sm font-semibold uppercase tracking-widest mb-3">
            Health Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4">
            Why Fresh Milk Is{' '}
            <span className="gradient-text">Better for You</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Fresh, unprocessed milk retains all its natural goodness — giving you
            significantly more nutrition than processed or packaged alternatives.
          </p>
        </ScrollReveal>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 150}>
              <div
                className={`relative card-hover rounded-3xl p-6 sm:p-8 text-white ${benefit.color} overflow-hidden ${
                  benefit.featured ? 'ring-2 ring-[#FFB81C] ring-offset-4 ring-offset-[#F5F9FF]' : ''
                }`}
              >
                {benefit.featured && (
                  <div className="absolute top-4 right-4 bg-[#FFB81C] text-[#1A1A1A] text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                    Most Popular
                  </div>
                )}
                {/* Icon */}
                <div className="mb-4 opacity-90">{benefit.icon}</div>
                {/* Stat badge */}
                <div className="inline-flex items-baseline gap-1.5 bg-white/15 rounded-2xl px-4 py-2 mb-5">
                  <span className="text-3xl font-bold">{benefit.stat}</span>
                  <span className="text-white/75 text-sm">{benefit.statLabel}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{benefit.description}</p>
                {/* Decorative circles */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing + CTA */}
        <ScrollReveal delay={200}>
          <div className="bg-white border border-[#E0EDFF] rounded-3xl p-6 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-500/5">
            <div className="w-full md:w-auto text-center md:text-left">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-2">
                Our Pricing
              </p>
              <div className="flex items-baseline gap-3 justify-center md:justify-start">
                <span className="text-5xl font-bold text-[#0046A4]">Rs.260</span>
                <span className="text-gray-400 text-lg">/ litre</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Special rates available for regular subscribers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-green-500/30"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact via WhatsApp
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-[#0046A4] text-[#0046A4] hover:bg-[#0046A4] hover:text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 text-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
