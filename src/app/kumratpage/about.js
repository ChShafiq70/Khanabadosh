'use client'

export default function AboutSection() {
  return (
    <section className="bg-[url('/images/s1bg.webp')] bg-cover bg-center py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div className="md:px-20">
         <div className="md:flex gap-2 " >
          {/* <h2 className="text-2xl md:pr-60 md:text-3xl font-bold text-black mb-3"> */}
           <h2 className="item:center text-center text-2xl md:text-3xl font-bold text-black"> ABOUT 
            </h2>  <h2 className= "item:center text-center text-green-700 text-2xl md:text-3xl font-bold">KUMRAT VALLEY</h2>
          
          </div>
          <p className="text-base text-gray-700 leading-relaxed max-w-md">
          Welcome to Khanabadosh Glamps, where luxury meets nature in the breathtaking landscapes of Kumrat Valley and Murree Hills. We offer a unique glamping experience, blending the comforts of a high-end resort with the serenity of the great outdoors.
          </p>
        </div>

        {/* Right Image Layout: 2 columns, each with 2 stacked images */}
        <div className="flex gap-2">
          {/* First column of images */}
          <div className="flex flex-col gap-2 p w-1/3">
            <div className="h-[130px] md:h-[140px] rounded-xl overflow-hidden">
              <img
                src="/images/murree1.webp"
                alt="Murree Glamp 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[130px] md:h-[140px] rounded-xl overflow-hidden ">
              <img
                src="/images/murree2.webp"
                alt="Murree Glamp 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second column of images */}
          <div className="flex flex-col pt-10 gap-2 w-1/3">
            <div className="h-[130px] md:h-[140px] rounded-xl overflow-hidden ">
              <img
                src="/images/murree3.webp"
                alt="Murree Glamp 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[130px] md:h-[140px] rounded-xl overflow-hidden ">
              <img
                src="/images/murree4.webp"
                alt="Murree Glamp 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
