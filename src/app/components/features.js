import Image from "next/image";
import { FaBell, FaUmbrella, FaClock, FaSearch } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-8">
      
      {/* Left Side - Text & Features (Wider Section) */}
      <div className="w-full lg:w-2/3">
        {/* Title */}
        <div className="inline-block border-1 border-[#b22222] px-16 py-2 rounded-full text-black  uppercase text-sm tracking-wider">
          Why Choose Us
        </div>
        <h2 className="text-[#b22222] text-3xl md:text-4xl  mt-4">
          Help Available At The Touch Of A Button
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Feature 1 */}
          <div className="flex items-center">
            <div className="bg-[#b22222] text-white p-4 rounded-full">
              <FaBell className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl ">Personalized Plan</h3>
              <p className="text-gray-600 text-lg">
                Get instant help with a tap; the right person is notified immediately.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center">
            <div className="bg-[#b22222] text-white p-4 rounded-full">
              <FaUmbrella className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl">Durable Help</h3>
              <p className="text-gray-600 text-lg">
                Our waterproof devices are easy to wear or place for quick help.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center">
            <div className="bg-[#b22222] text-white p-4 rounded-full">
              <FaClock className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl">24/7 Support</h3>
              <p className="text-gray-600 text-lg">
                Our specialists are available 24/7, year-round, ready to assist you.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center">
            <div className="bg-[#b22222] text-white p-4 rounded-full">
              <FaSearch className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl">Fall Alert</h3>
              <p className="text-gray-600 text-lg">
                Fall detection automatically alerts help if you can't press the button.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Fixed Image Size */}
      <div className="w-full lg:w-1/3 flex justify-end">
        <div className="w-[400px] h-[400px] relative">
          <Image
            src="/images/choseus.webp" // Replace with actual image path
            alt="Elderly person using a medical alert system"
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default WhyChooseUs;
