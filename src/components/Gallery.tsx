'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const galleryImages = [
  {
    src: '/images/bike.png',
    alt: 'Happy cows grazing on fresh green pasture',
    category: 'Farm',
    caption: 'Our Ride, to deliver the freshest milk from our farm to your doorstep',
  },
  {
    src: '/images/pack.png',
    alt: 'Fresh organic milk in glass bottle',
    category: 'Product',
    caption: 'Pure, fresh milk delivered in hygienic sealed packaging',
  },
  {
    src: '/images/cow.png',
    alt: 'Dairy farm operations',
    category: 'Farm',
    caption: 'State-of-the-art farm facilities ensuring highest hygiene',
  },
  {
    src: '/images/cow9.png',
    alt: 'Cows in the barn at dairy farm',
    category: 'Cattle',
    caption: 'Well-cared-for cattle producing the richest, creamiest milk',
  },
  {
    src: '/images/new4.png',
    alt: 'Glass of fresh cold milk',
    category: 'Product',
    caption: 'Nothing beats the taste of real, fresh farm milk',
  },
  {
    src: '/images/shutter.png',
    alt: 'Green farm fields at sunrise',
    category: 'Farm',
    caption: 'Our 50-acre organic farm in the heart of Lahore',
  },
]

const categories = ['All', 'Farm', 'Cattle', 'Product']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxImg, setLightboxImg] = useState<typeof galleryImages[0] | null>(null)

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-[#1BA0A8] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Farm
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">
            See the <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            A look inside Dairy Rich — our farm, our cattle, and the fresh milk
            we deliver to your family every day.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#0046A4] text-white shadow-lg shadow-blue-500/30'
                  : 'bg-[#F5F9FF] text-gray-600 hover:bg-[#E0EDFF] hover:text-[#0046A4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, index) => (
            <ScrollReveal key={img.src} delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                onClick={() => setLightboxImg(img)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0046A4]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-semibold bg-[#1BA0A8] px-2 py-0.5 rounded-full mb-2 inline-block">
                      {img.category}
                    </span>
                    <p className="text-sm font-medium">{img.caption}</p>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-white/80 text-center mt-4 text-sm">{lightboxImg.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
