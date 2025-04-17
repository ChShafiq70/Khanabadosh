'use client'

export default function ExperiencesHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/s1bgs.webp')" }}>
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 z-10" />

      {/* Centered Text */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-black text-2xl md:text-4xl font-extrabold">
          EXPERIENCES & ACTIVITIES
        </h2>
        <p className="text-black text-sm md:text-base mt-2 max-w-xl">
          Pack your bags and let Travila redefine your travel experience. Where every journey is a story waiting to be told
        </p>
      </div>
    </section>
  )
}
