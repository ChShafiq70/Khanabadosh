import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="bg-[#fdf9f7] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-8">

        {/* Left Side Content */}
        <div>
          <h4 className="text-[#b22222] text-sm tracking-[0.55em] leading-loose uppercase">
            About Us
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#b22222] mt-2 leading-tight">
            Safe And Independent Living
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            We provide reliable emergency devices to ensure you and your loved ones are always prepared.
            With 24/7 access to trained specialists, our waterproof help button is easy to use and perfect for high-risk areas
            like showers and tubs, helping you maintain independence and safety.
          </p>

          {/* Button Section - Keeps Circular Design & Spacing */}
          <div className="flex flex-wrap justify-start gap-6  mt-10">
            {["Online Consultation", "24/7 Response", "Water Proof Devices"].map((text, index) => (
              <div 
                key={index} 
                className="bg-[#fbf3f1] text-[#b22222] w-[160px] h-[130px] flex items-center justify-center 
                rounded-full text-center shadow-md text-lg  font-medium transition-all duration-300 hover:shadow-lg"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full max-w-[500px] mx-auto md:mx-0">
          <Image
            src="/images/aboutus.webp"
            alt="Senior Man with Medical Alert Device"
            width={500}
            height={750}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUsSection;
