// components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section className="relative pt-90 md:pt-40 pb-5 px-4">
      {/* Background image with visible overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/s1bg.webp')" }}
      />
      <div className="absolute inset-0 bg-white opacity-70" />

      {/* Text Content */}
      <div className="relative z-10 text-center text-black max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">ABOUT</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-[#496B21] mb-6">
          KHANABADOSH GLAMPS
        </h3>
        <p className="text-base md:text-lg mb-4">
          Welcome to Khanabadosh Glamps, where luxury meets nature in the breathtaking
          landscapes of Kumrat Valley and Murree Hills. We offer a unique glamping experience,
          blending the comforts of a high-end resort with the serenity of the great outdoors.
        </p>
        <p className="text-base md:text-lg">
          Our luxury dome tents are designed to provide an immersive yet comfortable stay,
          allowing you to reconnect with nature without compromising on style and convenience.
          Whether you seek adventure, relaxation, or a peaceful retreat, Khanabadosh Glamps
          is your perfect getaway.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 px-4 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-start max-w-6xl mx-auto">
  {/* Murree Glamps */}
  <div className="text-center ">
    <img
      src="/images/s1.webp"
      alt="Murree Glamps"
      className="rounded-xl w-full object-cover h-[240px]"
    />
    <h4 className="text-xl font-bold text-[#496B21] mt-4">Murree Glamps</h4>
    <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-black">
      <p className="m-0">
        Welcome to Khanabadosh Glamps, where luxury meets nature in the...
      </p>
      <button className=" hidden md:flex text-xs mt-5 mr-10 sm:items-center justify-center bg-[#737373] text-black px-3 py-1 rounded-full shadow-md whitespace-nowrap">
        Review / Rating
      </button>
    </div>
  </div>

  {/* Center divider and text */}
  <div className="hidden md:flex flex-col items-center justify-center text-black w-auto">
    <div className="w-px bg-gray-400 h-20"></div>
    <span className="text-center font-semibold mt-2 mb-2 text-sm md:text-xl whitespace-nowrap">
      Khanabadosh Glamps
    </span>
    <div className="w-px bg-gray-400 h-20"></div>
  </div>

  {/* Kumrat Valley */}
  <div className="text-center md:pt-20">
    <img
      src="/images/s1.1.webp"
      alt="Kumrat Valley"
      className="rounded-xl w-full object-cover h-[300px]"
    />
    <h4 className="text-xl font-bold text-[#496B21] mt-4">Kumrat Valley</h4>
    <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-black">
      <p className="m-0">
        Welcome to Khanabadosh Glamps, kumrat meets nature in the...
      </p>
      <button className=" hidden md:flex  text-xs mt-5 mr-10 bg-[#737373] text-black px-3 py-1 rounded-full shadow-md whitespace-nowrap">
        Review / Rating
      </button>
    </div>
  </div>
</div>

    </section>
  );
}
