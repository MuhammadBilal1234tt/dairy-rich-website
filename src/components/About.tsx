'use client'

import ScrollReveal from './ScrollReveal'

const features = [
  {
    icon: '🌿',
    title: 'Organic Certified',
    description:
      'Our cows graze on natural, pesticide-free pastures. Every drop of milk is 100% organic — no hormones, no artificial feed, no shortcuts.',
  },
  {
    icon: '🔬',
    title: 'Unprocessed & Unadulterated',
    description:
      'We never homogenize or ultra-pasteurize our milk. What you receive is pure, raw, full-cream milk — exactly as nature intended.',
  },
  {
    icon: '🚚',
    title: 'Fresh Delivery Guarantee',
    description:
      'Milked in the early morning, at your doorstep within 2–3 hours. We guarantee the freshest milk in Lahore, every single day.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[#1BA0A8] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">
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
              <div className="group card-hover bg-[#F5F9FF] border border-[#E0EDFF] rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003DA5] to-[#1BA0A8] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003DA5] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust bar */}
        <ScrollReveal delay={300} className="mt-16">
          <div className="bg-gradient-to-r from-[#003DA5] to-[#1BA0A8] rounded-3xl p-8 text-white text-center">
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              🏆 Trusted by hundreds of families across Lahore
            </p>
            <p className="text-white/80">
              Farm-fresh milk with zero adulterants — because your family deserves the best.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
