import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dairy Rich – Fresh Organic Milk Delivered in Lahore',
  description:
    'Dairy Rich delivers organic, unprocessed full-cream milk straight from our farm to your doorstep within hours of milking. Serving Lahore, Pakistan. WhatsApp: 03184965522',
  keywords: [
    'dairy farm Lahore',
    'organic milk Lahore',
    'fresh milk delivery',
    'pure milk Pakistan',
    'doodh Lahore',
    'Dairy Rich',
  ],
  openGraph: {
    title: 'Dairy Rich – Fresh Organic Milk Delivered in Lahore',
    description:
      'Order fresh, organic, unprocessed milk delivered to your doorstep in Lahore within hours of milking.',
    url: 'https://dairyrich.pk',
    siteName: 'Dairy Rich',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dairy Rich – Fresh Organic Milk in Lahore',
    description:
      'Fresh, organic, unprocessed milk delivered to your doorstep in Lahore.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003DA5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Dairy Rich',
              description:
                'Organic dairy farm delivering fresh, unprocessed milk in Lahore, Pakistan.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lahore',
                addressCountry: 'PK',
              },
              telephone: '+923184965522',
              url: 'https://dairyrich.pk',
              priceRange: 'Rs. 100–220/litre',
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
