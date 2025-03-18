"use client";
import { useRouter } from "next/navigation"; // Correct hook for navigation in Next.js App Router
import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!zipCode.trim()) {
      setError("Please fill in the Zip Code field.");
    } else {
      setError(""); // Clear error message
      router.push(`/submit-page?zip=${zipCode}`); // Redirect with query parameter
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/images/homehero.webp')", backgroundSize: "100% 100%" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-2xl text-white p-8">
        <h1 className="text-5xl font-" style={{ fontFamily: "Poppins, sans-serif" }}>
          A MedAlert System For Secure Life
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Enjoy peace of mind with 24/7 access to medical alert systems at the touch of a button.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-6">
          <input 
            type="number" 
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full p-2 text-black bg-white rounded-lg text-md mb-6 border border-gray-300 focus:border-[#b22222] focus:outline-none" 
            placeholder="Zip Code" 
          />
          {error && <p className="text-red-600 text-sm mb-2">{error}</p>} 

          <button 
            type="submit" 
            className="w-full bg-[#b22222] text-white font-semibold py-2 rounded-lg text-md"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
