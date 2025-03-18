'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Flag ,Clock,Mail,Phone,} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-red-700 text-white pt-30 pb-10 px-6">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/Background1.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 container mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <Image src="/images/footerlogo.png" alt="Logo" width={350} height={100} />
          <p className="mt-4 text-lg">
          At GetMedicalAlert, we provide reliable, timely, and advanced medical alert devices to ensure safety and peace of mind. Trust our commitment to delivering dependable solutions for your healthcare needs.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Get In Touch</h3>
          <ul className="mt-6 space-y-2 text-"> <div className="flex items-center space-x-2">
              <Flag className="w-5 h-5" /> 
              <p className="text-lg">Bogner Drive Dale City, Virginia</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" /> 
              <p className="text-lg">info@getmedicalalert.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" /> 
              <p className="text-lg">1-888-453-5777</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" /> 
              <p className="text-lg">08:00 AM - 07:00 PM</p>
            </div>

            
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Quicklinks</h3>
          <ul className="mt-4 space-y-2 text-lg ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/home-systems">Home Systems</Link></li>
            <li><Link href="/mobile-systems">Mobile Systems</Link></li>
            <li><Link href="/fall-detection">Fall Detection</Link></li>
            <li><Link href="/smart-watches">Smart Watches</Link></li>
          </ul>
        </div>
        <div className="">
        <h3 className="font-bold text-2xl">Socials</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
          </div>
      </div>
      </div>

      
<div className="relative   text-center   pt-10 text-lg">
<Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms">Terms & Conditions</Link>
</div>
      <div className="relative z-10 mt-3 text-center border-t border-white pt-2 text-lg">
        <p className="mt-1">Copyright © 2025 GetMedicalAlert</p>
      </div>
    </footer>
  );
}