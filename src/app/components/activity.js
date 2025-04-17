import Image from "next/image";

const activities = [
  "activity1.webp",
  "activity2.webp",
  "activity3.webp",
  "activity4.1.webp",
  "activity5.webp",
  "activity6.1.webp",
  "activity7.webp",
  "activity8.webp",
];

export default function Activities() {
  return (
    <section
      className="md:py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/s1bg.webp')" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-2xl font-bold md:py-4 md:font-extrabold text-black">
              EXPERIENCES <span className="text-green-700">& ACTIVITIES</span>
            </h2>
            <p className="text-sm text-gray-700">
              Favorite destinations based on customer reviews
            </p>
          </div>
          <button className="hidden bg-gray-700 text-white text-sm px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>View More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {activities.map((file, index) => (
            <div key={index} className="rounded-xl overflow-hidden h-40 relative">
              <Image
                src={`/images/${file}`}
                alt={`Activity ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
          <div className="flex justify-center mt-2 md:hidden">
  <button className="bg-gray-700 text-white text-sm px-5 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition">
    <span>View More</span>
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

        </div>
        
        <div className="mt-10 relative md:py-20 h-full rounded-xl overflow-hidden">
  <img
    src="/images/acbottom.webp" // replace with your image name
    alt="Featured Bottom"
    className="w-full h-full object-cover rounded-xl"
  />
</div>
      </div>
    </section>
  );
}
