"use client";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F0F0FA] text-center p-6">
      {/* Checkmark Icon */}
      <div className="w-30 h-30 flex items-center justify-center bg-red-700 rounded-full">
        <svg
          className="w-20 h-20 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.97-2.97a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Thank You Message */}
      <h1 className="text-5xl  font-Poppins font-semibold text-[#b22222] mt-4">Thank You</h1>
      <p className="text-lg   font-Poppins font-semibold text-[#b22222] mt-2">
        We have received your submission and will get back to you.
      </p>

      <p className="mt-4 text-lg font-Poppins font-semibold text-[#b22222] max-w-lg">
        If you have any urgent questions or need further information, please don’t hesitate to call us. Our customer service team is available to assist you.
      </p>

      {/* Contact Info */}
      <a href="tel:+18884535777" className="mt-4 font-Poppins  text-[#b22222] text-2xl font-bold underline">
        +1-888-453-5777
      </a>
      <p className="font-Poppins font-semibold text-[#b22222] text-sm">Hours of Operation: 8 AM to 7 PM EST</p>

      {/* Back Home Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 bg-red-700 text-white text-lg rounded-md"
      >
        BACK HOME
      </button>
    </div>
  );
}
