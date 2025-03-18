"use client";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    phone: "",
    termsChecked: false,
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.termsChecked) newErrors.termsChecked = "You must accept the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.location.href = "/thankyou-page"; // Redirect on success
    }
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 md:px-10"
      style={{ backgroundImage: "url('/images/homehero.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-white text-center md:text-left max-w-lg">
          <h2 className="text-4xl md:text-5xl leading-tight font-poppins">
            Get Medical Alert For A Safe And Secure Life
          </h2>
          <p className="text-lg text-gray-300 mt-4 font-poppins">
            Enjoy peace of mind with Get Medical Alert, available 24/7 at the press of a button.
          </p>
        </div>

        <div className="bg-[#737273]/80 px-8 py-10 shadow-lg w-full max-w-lg text-white rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 text-black bg-white rounded-md focus:outline-none"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 text-black bg-white rounded-md focus:outline-none"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            <div>
              <input
                type="number"
                name="zipCode"
                placeholder="Enter zip code"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full p-3 text-black bg-white rounded-md focus:outline-none"
              />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
            </div>

            <div>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 text-black bg-white rounded-md focus:outline-none"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="flex items-start text-xs text-gray-300">
              <input
                type="checkbox"
                name="termsChecked"
                checked={formData.termsChecked}
                onChange={handleChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
              />
              <p className="ml-2 leading-snug font-bold text-white">
                You provide your express written consent via electronic signature to receive marketing communications via automated telephone dialing system and/or pre-recorded calls, text messages, and/or emails from MedGuard Alert, Inc, “Premiere Partners” and{" "}
                <a href="/marketing-partner" className="text-red-500 underline">
                  Marketing Partners
                </a>{" "}
                at the phone number provided. Consent is not a condition of purchase and may be revoked at any time.{" "}
                <a href="/privacy-policy" className="text-red-500 underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
            {errors.termsChecked && <p className="text-red-500 text-sm">{errors.termsChecked}</p>}

            <button
              type="submit"
              className="w-full bg-[#b22222] text-white py-3 px-6 rounded-md text-base font-semibold hover:bg-red-800 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
