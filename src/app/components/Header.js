'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Sun, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [glampsHover, setGlampsHover] = useState(false);
  const hoverTimeout = useRef(null);
  
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setGlampsHover(true);
  };
  
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setGlampsHover(false);
    }, 150); // Short delay to allow cursor transition
  };
  

  return (
    <nav className="w-full shadow-md font-sans">
      {/* Top Bar */}
      <div className="bg-[#496B21] text-white text-sm px-8 py-2 grid grid-cols-3">
        <div className="flex items-center gap-1">
          <Phone size={16} />
          <span>03161616002</span>
          <span className="ml-8">
            <Mail size={16} />
          </span>
          <span>khanabadosh@glamps.com</span>
        </div>
        <div></div>
        <div className="hidden md:flex items-center justify-end">
          <Sun size={16} />
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/headerlogo.webp"
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Home</Link>

          {/* Glamps Dropdown */}
          <div
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <div className="flex items-center gap-1 hover:bg-[#496B21] hover:text-white px-2 py-1 rounded cursor-pointer">
    Glamps <ChevronDown size={16} />
  </div>

  <div
    className={`absolute left-0 mt-2 w-32 bg-white shadow-lg rounded z-10 transition-opacity duration-200 ease-in-out ${
      glampsHover ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
    }`}
  >
    <Link href="/murree" className="block px-4 py-2 hover:bg-[#496B21] hover:text-white">Murre</Link>
    <Link href="/kumratpage" className="block px-4 py-2 hover:bg-[#496B21] hover:text-white">Kumrat</Link>
  </div>
</div>


          <Link href="/booking" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Booking & Reservations</Link>
          <Link href="/corporate" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Corporate packages</Link>
          <Link href="/share" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Share post</Link>
          <Link href="/blog" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Blog</Link>
          <Link href="/about" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">About Khanabadosh</Link>
        </div>

        {/* Book Now Button - Desktop */}
        <div className="hidden md:flex">
          <Link href="/book" className="bg-[#496B21] text-white px-4 py-2 rounded-full hover:bg-[#3b551b]">Book Now</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 flex flex-col shadow text-base">
          <Link href="/" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Home</Link>

          {/* Mobile Dropdown */}
          <details className="group">
            <summary className="cursor-pointer flex items-center justify-between px-2 py-1 hover:bg-[#496B21] hover:text-white rounded">
              Glamps
              <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="ml-4 mt-1">
              <Link href="/murree" className="block px-2 py-1 hover:bg-[#496B21] hover:text-white rounded">Murre</Link>
              <Link href="/kumrat" className="block px-2 py-1 hover:bg-[#496B21] hover:text-white rounded">Kumrat</Link>
            </div>
          </details>

          <Link href="/booking" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Booking & Reservations</Link>
          <Link href="/corporate" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Corporate packages</Link>
          <Link href="/share" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Share post</Link>
          <Link href="/blog" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">Blog</Link>
          <Link href="/about" className="hover:bg-[#496B21] hover:text-white px-2 py-1 rounded">About Khanabadosh</Link>
          <Link href="/book" className="block bg-green-800 text-white text-center px-4 py-2 rounded-full hover:bg-[#496B21]">Book Now</Link>
        </div>
      )}
    </nav>
  );
}
