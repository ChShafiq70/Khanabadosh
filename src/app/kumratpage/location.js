'use client'

export default function LocationSection() {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/sbg.webp')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              KUMRAT <span className="text-green-700">GLAM LOCATION</span>
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>

          {/* View More Button */}
          <button className="self-start md:self-center bg-gray-700 text-white text-sm px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>View More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Map Image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="/images/map.webp"
            alt="Murree Location Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
