"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AboutSection from "./about";
import FeaturedGlampingSlider from "./feacture";
import Activitiesmurree from "./activity";
import FacilityDetails from "./facilties";
import TestimonialImageSection from "./image";
import LocationSection from "./location";
import CardDetails from "./card";

const images = ["/images/s1.webp", "/images/s1.webp", "/images/s1.webp", "/images/s1.webp"];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {index === current && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-4xl font-Inter mb-2">KUMRAT VALLEY</h2>
                <p className="text-xl md:text-base font-Manrope">
                  Pack your bags and let Travels redefine your travel experience.
                </p>
                <p font-Manrope> Where every journey is a story waiting to be told.</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
     
    </div>
    <AboutSection/>
    <FeaturedGlampingSlider/>
    <Activitiesmurree/>
    <FacilityDetails/>
    <CardDetails/>
    <TestimonialImageSection/>
    <LocationSection/>
    </>
  );
}
