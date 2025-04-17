'use client'
import Image from 'next/image'

export default function TestimonialImageSection() {
  return (
    <section
      className="md:py-12 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/images/s1bg.webp')" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
  <div className="relative overflow-hidden rounded-xl">
    <Image
      src="/images/test1.webp"
      alt="Testimonial Visual"
      width={850}
      height={500}
      className="h-auto object-cover rounded-xl"
    />

    {/* Optional Rotated Text Overlay */}
    {/* <div className="absolute right-4 bottom-4 text-white text-xs rotate-90 tracking-wider font-semibold">
      Contact Us Now →
    </div> */}
  </div>
</div>

    </section>
  )
}
