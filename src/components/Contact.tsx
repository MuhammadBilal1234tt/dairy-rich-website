'use client'

import ScrollReveal from './ScrollReveal'

const WHATSAPP_URL = 'https://wa.me/923184965522?text=Hello%20Dairy%20Rich!%20I%20would%20like%20to%20place%20an%20order.'
const PHONE = '03184965522'
const PHONE_INTL = '+923184965522'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-[#003DA5] via-[#0055B8] to-[#1BA0A8]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <ScrollReveal>
          <span className="inline-block text-[#20B2AA] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Get the freshest milk in Lahore delivered to your door. Place your
            order via WhatsApp and we&apos;ll take care of the rest.
          </p>
        </ScrollReveal>

        {/* Main WhatsApp button */}
        <ScrollReveal delay={100}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 whatsapp-pulse bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xl font-bold px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-green-500/30 mb-8"
          >
            <span className="text-3xl">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            Chat on WhatsApp
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </ScrollReveal>

        {/* Info cards */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                icon: '📞',
                label: 'Call / WhatsApp',
                value: PHONE,
                href: `tel:${PHONE_INTL}`,
              },
              {
                icon: '📍',
                label: 'Location',
                value: 'Lahore, Pakistan',
                href: 'https://maps.app.goo.gl/ZkkEyumJNpXzJs919',
              },
              {
                icon: '⏰',
                label: 'Delivery Hours',
                value: '6 AM – 10 AM Daily',
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-[#20B2AA] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-white font-semibold">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
