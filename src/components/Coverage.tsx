'use client'

import ScrollReveal from './ScrollReveal'

const deliveryAreas = [
  'DHA Phase 1–8',
  'Bahria Town',
  'Johar Town',
  'Gulberg I–V',
  'Model Town',
  'Garden Town',
  'Faisal Town',
  'Township',
  'Iqbal Town',
  'Allama Iqbal Town',
  'Wapda Town',
  'Raiwind Road',
  'Canal Road',
  'Thokar Niaz Baig',
  'Bedian Road',
  'Lahore Cantt',
]

// Proper Google Maps embed URL for Lahore, Pakistan
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217394.48583566787!2d74.01397745!3d31.482803400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe9765e56a6!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk'

export default function Coverage() {
  return (
    <section id="coverage" className="section-padding bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[#1BA0A8] text-sm font-semibold uppercase tracking-widest mb-3">
            Delivery Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">
            We Deliver Across{' '}
            <span className="gradient-text">Lahore</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Freshly milked every morning and delivered straight to your door —
            wherever you are in Lahore.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border-4 border-white">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={MAPS_EMBED_URL}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dairy Rich delivery coverage area – Lahore, Pakistan"
                />
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-3">
              Dairy Rich Farm, Lahore, Pakistan
            </p>
          </ScrollReveal>

          {/* Delivery areas */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-[#E0EDFF]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#0046A4] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0046A4]">Delivery Areas</h3>
                  <p className="text-gray-500 text-sm">Same-day morning delivery</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {deliveryAreas.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-sm text-gray-700 py-2 px-3 bg-[#F5F9FF] rounded-lg hover:bg-[#E0EDFF] transition-colors"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0046A4] flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>

              <div className="bg-[#F5F9FF] rounded-2xl p-4 text-center">
                <p className="text-gray-500 text-sm mb-1">
                  Don&apos;t see your area?
                </p>
                <p className="text-[#0046A4] font-semibold text-sm">
                  WhatsApp us — we&apos;ll check coverage for you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
