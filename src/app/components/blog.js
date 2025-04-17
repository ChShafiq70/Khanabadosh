 
 'use client'

export default function BlogSection() {
  return (
    <section className="bg-[url('/images/s1bd.webp')] bg-cover bg-center py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start md:items-center mb-10 flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              KHANABADOSH GLAM <span className="text-green-700">BLOGS</span>
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>
          <button className="text-xs bg-gray-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
            View More
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

        {/* Main Blog + Sidebar in Row */}
        <div className=" flex flex-col md:flex-row gap-6">
          {/* Main Blog Image */}
          <div className="w-full md:w-2/4">
            <div className="absolute hidden md:flex    shadow-md pt-7 z-0">
              <img
                src="/images/blog.webp"
                alt="Main Blog"
                className="md:w-[500px] md:h-[440px] w-50 h-50  object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-black bg-opacity-70">
                <h3 className="text-white text-base font-semibold">Title</h3>
              </div>
            </div>
          </div>

          {/* Sidebar Blog List */}
          <div className="w-full md:w-[1300px]  ">
            <div className=" bg-[#F0F2F5] pl-0 md:pl-35 rounded-xl z-10   p-6 flex flex-col gap-4 shadow-sm h-full">
              {[
                { img: '/images/blog1.webp', title: 'Murree Glamps' },
                { img: '/images/blog2.webp', title: 'Kumrat Valley' },
                { img: '/images/blog3.webp', title: 'Kumrat Valley' },
              ].map((item, i) => (
                <div key={i} className="flex items-center  gap-4">
                  <div className="md:w-35 md:h-35 w-20 h-20 overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-gray-600">Title</p>
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
