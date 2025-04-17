import { MapPin, Calendar, User } from "lucide-react";
export default function HeroSection() {
    return (
      <section
        className="relative h-[80vh] md:h-screen lg:py-75 md:py-75 sm:py-75 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40 z-10" />
  
        {/* Text Content */}
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">YOUR GATEWAY TO</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">UNFORGETTABLE JOURNEYS</h2>
          <p className="mt-4 text-sm md:text-lg max-w-2xl mx-auto">
            Pack your bags and let Travila redefine your travel experience. Where every journey is a story waiting to be told.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#496B21] hover:bg-green-700 text-white rounded-full font-semibold">
            Explore the World
          </button>
        </div>
  
        {/* Booking Box */}
    <div className="absolute top-130 left-1/2 transform -translate-x-1/2 w-full max-w-5xl z-30 ">
      <div className="bg-[#1a1717] rounded-2xl p-6 text-white">
        {/* Header Tabs & Help */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex space-x-4 overflow-x-auto">
            <button className="text-black bg-white px-4 py-1 rounded-full font-medium">Tours</button>
            <button className="text-white hover:text-gray-300">Hotels</button>
            <button className="text-white hover:text-gray-300">Tickets</button>
            <button className="text-white hover:text-gray-300">Rental</button>
            <button className="text-white hover:text-gray-300">Activities</button>
          </div>
          <div className="text-sm text-gray-300 hidden md:block">
            <span className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Need some help?</span>
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 border border-white rounded-xl p-4 flex flex-wrap gap-4 items-center justify-between">
          {/* Location */}
          <div className="flex flex-col flex-1 min-w-[180px]  border-white pr-4">
            <label className="text-xs text-gray-400 mb-1">Location</label>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <select className="w-full bg-transparent focus:outline-none">
                <option>Kumrat Domes</option>
                <option>Murree Retreat</option>
              </select>
            </div>
          </div>

          {/* Check In */}
          <div className="flex flex-col flex-1 min-w-[180px] border-r border-white pr-4">
            <label className="text-xs text-gray-400 mb-1">Check In</label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
                defaultValue="2025-03-07"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col flex-1 min-w-[180px] border-r border-white pr-4">
            <label className="text-xs text-gray-400 mb-1">Check Out</label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
                defaultValue="2025-03-14"
              />
            </div>
          </div>

          {/* Guest */}
          <div className="flex flex-col flex-1 min-w-[180px] pr-4">
            <label className="text-xs text-gray-400 mb-1">Guest</label>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <select className="w-full bg-transparent focus:outline-none">
                <option>2 adults, 2 children</option>
                <option>1 adult</option>
              </select>
            </div>
          </div>

          {/* Booking Button */}
          <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
            <button className="bg-[#496B21] hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold min-w-[120px]">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  


      </section>
    );
  }
  