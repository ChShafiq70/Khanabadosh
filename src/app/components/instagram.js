'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/images/slider1.webp',
  '/images/slider2.webp',
  '/images/slider3.webp',
  '/images/slider1.webp',
  '/images/slider2.webp',
  '/images/slider3.webp',
]

export default function InstagramSlider() {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    const container = sliderRef.current
    if (!container) return

    const card = container.querySelector('.card')
    const cardWidth = card?.offsetWidth || 300
    const gap = 16

    // On mobile, scroll one image at a time
    const scrollAmount = window.innerWidth < 640 ? (cardWidth + gap) : (cardWidth + gap) * 3
    container.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/s1bg.webp')" }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-sm max-w-5xl mx-auto px-4 rounded-xl ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <h2 className="text-3xl font-bold text-black order-2 sm:order-1">
            Instagram <span className="text-green-700">Section Preview</span>
          </h2>
          <button className="hidden md:flex text-xs bg-gray-800 text-white px-4 py-1 rounded-full font-medium w-max order-1 sm:order-2 mb-2 sm:mb-0">
            Follow Us
          </button>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 rounded-2xl no-scrollbar"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="card flex-shrink-0 w-full sm:w-1/2 md:w-1/3 snap-always snap-center"
              >
                <div className="rounded-lg overflow-hidden shadow">
                  <img
                    src={src}
                    alt={`Instagram ${i + 1}`}
                    className="w-full h-60 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center items-center text-center gap-10 mt-4">
            <button
              onClick={() => scroll('left')}
              className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-10 py-10">
          <img
            src="/images/last.webp"
            alt="Instagram Footer"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      
      {/* Add this to your global CSS or in a style tag */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}