'use client'
import Image from 'next/image'

const activities = [
  { file: 'activity1.webp', label: 'Kumrat', tag: 'velley' },
  { file: 'activity2.webp' },
  { file: 'activity3.webp' },
  { file: 'activity4.1.webp' },
  { file: 'activity5.webp' },
  { file: 'activity6.1.webp' },
  { file: 'activity7.webp' },
]
const travelImages = [
    '/images/travel1.webp',
    '/images/travel2.webp',
    '/images/travel3.webp',
    '/images/travel4.webp',
    '/images/travel5.webp',
  ]
export default function Activitiesmurree() {
  return (
    <section
      className="md:py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/s1bg.webp')" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
            KUMRAT  <span className="text-green-700">FACILITY DETAILS</span>
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Favorite destinations based on customer reviews
            </p>
          </div>
          <button className="hidden md:flex bg-gray-700 text-white text-sm px-5 py-2 rounded-full items-center space-x-2 hover:bg-gray-800 transition">
            <span>View More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image Grid (Two Rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {activities.slice(0, 4).map((item, index) => (
            <div key={index} className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={`/images/${item.file}`}
                alt={`Activity ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              {item.label && (
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                  {item.label} <span className="text-green-400">- {item.tag}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second row: 3 images centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 max-w-4xl mx-auto">
          {activities.slice(4, 7).map((item, index) => (
            <div key={index} className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={`/images/${item.file}`}
                alt={`Activity ${index + 5}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="flex justify-center mt-6 md:hidden">
          <button className="bg-gray-700 text-white text-sm px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>View More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

       
      </div>
      <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto bg-[#36611c] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Content */}
        <div className="text-white md:w-1/2 px-10">
          <h2 className="text-2xl md:text-2xl font-bold leading-snug mb-4">
            Redefining Luxury Travel<br />
            Your Journey to Glamour<br />
            with Khanabadosh
          </h2>
          <p className="text-sm  text-white/90">
            Discover how you can offset your Murree adventure is carbon footprint and support the
            sustainable initiatives practiced by Khanabadosh.
          </p>
        </div>

        {/* Image Layout */}
        <div className="md:w-1/2 flex gap-4">
          {/* Column 1 - Single Tall Image */}
          <div className="flex flex-col justify-center w-1/4">
            <div className="h-[200px] rounded-2xl overflow-hidden ">
              <img
                src="/images/travel1.webp"
                alt="Travel 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2 - Two Stacked Images */}
          <div className="flex flex-col gap-4 w-1/4">
            <div className="h-[190px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/travel2.webp"
                alt="Travel 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[130px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/travel3.webp"
                alt="Travel 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 3 - Two Stacked Images */}
          <div className="flex flex-col gap-4 w-1/4">
            <div className="h-[130px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/travel4.webp"
                alt="Travel 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[190px] rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/travel5.webp"
                alt="Travel 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
    
  )
}
