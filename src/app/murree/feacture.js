'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeaturedGlampingSlider() {
  const slides = [
    {
      img: '/images/s1.webp',
      title: 'Kumrat Domes Glamping Sites',
    },
    {
      img: '/images/s3.webp',
      title: 'Kumrat Domes Glamping Sites',
    },
    {
      img: '/images/s3.1.webp',
      title: 'Kumrat Domes Glamping Sites',
    },
    {
      img: '/images/s1.webp',
      title: 'Kumrat Domes Glamping Sites',
    },
    {
      img: '/images/s3.webp',
      title: 'Kumrat Domes Glamping Sites',
    },
  ]

  const sliderRef = useRef(null)

  const scroll = (dir) => {
    const container = sliderRef.current
    if (!container) return

    const card = container.querySelector('.glamping-card')
    const cardWidth = card?.offsetWidth || 220
    const gap = 8

    container.scrollBy({
      left: dir === 'left' ? -cardWidth - gap : cardWidth + gap,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative py-5 md:py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/s1bg.webp')" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col pb-5 md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              MURREE <span className="text-[#496B21]">FEATURED SITES</span>
            </h2>
            <p className="text-sm py-2 text-gray-700 mt-1">
              Favorite destinations based on customer reviews
            </p>
          </div>
          <button className="hidden md:flex text-xs bg-[#737373] text-black px-3 py-1 rounded-full shadow-md whitespace-nowrap">
            Review / Rating ⌄
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#737373] p-3 rounded-full shadow-md transition-transform hover:scale-105 -ml-4 md:-ml-16"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#737373] p-3 rounded-full shadow-md transition-transform hover:scale-105 -mr-4 md:-mr-16"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Slider - Now shows only one centered card */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 no-scrollbar px-[calc(50%-100px)]"
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="glamping-card flex-shrink-0 w-80 snap-always snap-center"
              >
                <div className="group w-72 md:80 md:pl-0 pl-8  overflow-hidden rounded-lg   transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6 bg-black">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button (Mobile only) */}
        <div className="flex justify-center mt-2 md:hidden">
          <button className="bg-gray-700 text-white text-sm px-5 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition">
            <span>View More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Hide scrollbar styles */}
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