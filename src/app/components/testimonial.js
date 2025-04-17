'use client'

import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sara Ahmed',
    location: 'Islamabad',
    text: 'I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips...',
  },
  {
    name: 'Raza Khan',
    location: 'Lahore',
    text: 'I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips...',
  },
  {
    name: 'Sana Shah',
    location: 'Sialkot',
    text: 'I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips...',
  },
  {
    name: 'Ali Hassan',
    location: 'Karachi',
    text: 'I’ve been using the hotel booking system for several years now, and it’s become my go-to platform for planning my trips...',
  },
]

export default function TestimonialSlider() {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    const container = sliderRef.current
    if (!container) return

    const card = container.querySelector('.testimonial-card')
    const cardWidth = card?.offsetWidth || 200
    // const gap = 24

    // On mobile, scroll one card at a time, on desktop scroll based on viewport
    const scrollAmount = window.innerWidth < 768 ? (cardWidth + gap) : 
                        window.innerWidth < 1024 ? (cardWidth + gap) * 2 : 
                        (cardWidth + gap) * 3
                        
    container.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className="relative py-10 md:py-20 bg-no-repeat bg-top bg-cover"
      style={{ backgroundImage: "url('/images/s1bg.webp')" }}
    >
      <div className=" bg-opacity-80  max-w-6xl mx-auto px-5 md:px-30 rounded-xl py-10 relative ">
        {/* Header */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-xs bg-gray-300 inline-block px-3 py-1 rounded-full text-gray-700 mb-10">
            Testimonials
          </p>
          <h2 className="text-2xl font-bold text-black">
            CUSTOMER <span className="text-green-700">SOCIAL PROOF</span>
          </h2>
          <p className="text-sm text-gray-700 my-1">##hashtags</p>
        </div>

        {/* Slider */}
        <div className="mt-10 relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 no-scrollbar"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card  w-full sm:w-1/2 lg:w-1/3 "
              >
                <div className="bg-black text-white rounded-[2rem] p-4 h-full flex flex-col ">
                  <div>
                    <h3 className="text-lg font-bold mb-3">The best booking system</h3>
                    <p className="text-sm text-white leading-relaxed">{t.text}</p>
                  </div>
                  <div className="flex items-center mt-6 space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-400 shrink-0" />
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-xs text-white opacity-70">{t.location}</p>
                    </div>
                    <div className=" flex space-x-1">
                      {[...Array(8)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="md:mt-8 mt-2 flex items-center justify-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="bg-gray-700 p-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-gray-700 p-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Tree image bottom-left - hidden on mobile */}
      <div
        className="hidden sm:block absolute bottom-0 left-[-32] w-62 h-72 bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: "url('/images/tree.webp')" }}
      >
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