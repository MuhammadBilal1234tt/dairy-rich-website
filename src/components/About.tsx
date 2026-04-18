'use client'

import ScrollReveal from './ScrollReveal'

const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7-5 11a5 5 0 0010 0c0-4-3.8-5.6-5-11z" />
      </svg>
    ),
    title: 'Organic Certified',
    description:
      'Our cows graze on natural, pesticide-free pastures. Every drop of milk is 100% organic — no hormones, no artificial feed, no shortcuts.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Unprocessed & Unadulterated',
    description:
      'We never homogenize or ultra-pasteurize our milk. What you receive is pure, raw, full-cream milk, exactly as nature intended.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Fresh Delivery Guarantee',
    description:
      'Milked in the early morning, at your doorstep within 2–3 hours. We guarantee the freshest milk in Lahore, every single day.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding section-dots section-accent-top">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[#1BA0A8] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4">
            Why Choose{' '}
            <span className="gradient-text">Dairy Rich?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            We are not just a dairy farm — we are a promise of purity, freshness,
            and trust for your family.
          </p>
        </ScrollReveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 150}>
              <div className="group card-hover bg-[#F5F9FF] border border-[#E0EDFF] rounded-2xl p-6 sm:p-8 h-full">
                <div className="w-14 h-14 bg-[#0046A4] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0046A4] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust bar */}
        <ScrollReveal delay={300} className="mt-16">
          <div className="bg-[#0046A4] rounded-3xl p-6 sm:p-8 text-white text-center">
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              Trusted by hundreds of families across Lahore
            </p>
            <p className="text-white/80 text-sm">
              Farm-fresh milk with zero adulterants — because your family deserves the best.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
