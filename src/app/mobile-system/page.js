"use client";
import Image from "next/image";
import { useState } from "react";
import { Home, Leaf,NotebookText,Headset,IdCard, } from "lucide-react"; 
import { FaBell, FaUmbrella, FaClock, FaSearch } from "react-icons/fa";
export default function Hero() {
  return (
    <section>
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/mobilesystem.webp')", backgroundSize: "100% 100%" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white text-center max-w-4xl py-2">
        <h1 className="text-5xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
        Mobile System
        </h1>
        <p className="mt-4 text-lg leading-relaxed ">
        The MedAlert Mobile System offers peace of mind wherever you go, providing 24/7/365 access to help. With advanced GPS technology, trained response specialists can pinpoint your location and send help wherever it’s needed. Simply wear the help button around your neck and speak directly into the device for immediate assistance.
        </p>
      
      </div>
    </div>
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

    <section className="py-12 font-poppins">
      <h2 className="text-center text-4xl lad mb-4 tracking-wider">What's Included</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* App Connectivity */}
        <div className="flex items-start p-4 bg-[#FCF9F5] rounded-xl shadow-lg h-full min-h-[200px]">
          <Home className="text-[#B22222] w-14 h-14 flex-shrink-0 relative top-1" />
          <div className="ml-5">
            <h3 className="text-2xl  text-[#B22222]">App Connectivity</h3>
            <p className="mt-2 text-gray-700 text-lg">
              The MedAlert System allows you to easily test your device, contact support, manage your contact list, and more, all through the app.
            </p>
          </div>
        </div>

        {/* Emergency Contact List */}
        <div className="flex items-start p-4 bg-[#FCF9F5]  rounded-xl shadow-lg h-full min-h-[200px]">
          <Leaf className="text-[#B22222] w-14 h-14 flex-shrink-0 relative top-1" />
          <div className="ml-5">
            <h3 className="text-2xl text-[#B22222] ">Emergency Contact List</h3>
            <p className="mt-2 text-gray-700 text-lg">
              Store and manage a list of contacts that the system will notify in case of an emergency, including family, friends, or neighbors.
            </p>
          </div>
        </div>
      </div>
    </section>
<section className="px-2">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-3">
      
      {/* Card 1 - Activate Help Button */}
        {/* Card 2 - Speak With Specialist (Now White) */}
        <div className="text-white bg-[#b22222] p-16 rounded-lg shadow-md text- border transition duration-300 hover:bg-[#b22222] hover:text-white">
        <div className="flex justify-left">
          <NotebookText  className="text-4xl mb-4 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Activate Your Help Button</h3>
        <p className="text-white text-lg">
        Simply press the help button on your pendant or bracelet, which should be worn at all times for easy access.
        </p>
      </div>

      {/* Card 2 - Speak With Specialist (Now White) */}
      <div className="bg-white text-[#b22222] p-16 rounded-lg shadow-md text- border transition duration-300 hover:bg-[#b22222] hover:text-white">
        <div className="flex justify-left">
          <Headset className="text-4xl mb-4 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Speak With A Response Specialist</h3>
        <p className="text-gray-700 text-lg">
          GetMedicalAlert is highly trained specialists are available 24/7, 365 days a year, ready to assist you.
        </p>
      </div>

      {/* Card 3 - Receive Assistance (Same White Style) */}
       {/* Card 2 - Speak With Specialist (Now White) */}
       <div className="bg-white text-[#b22222] p-16 rounded-lg shadow-md text- border transition duration-300 hover:bg-[#b22222] hover:text-white">
        <div className="flex justify-left">
          <IdCard className="text-4xl mb-4 w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Receive the Right Assistanc</h3>
        <p className="text-gray-700 text-lg">
        Our specialists assess your situation and immediately reach out to the most suitable emergency contact.
        </p>
      </div>

    </div>
</section>

    </section>
  );
}
