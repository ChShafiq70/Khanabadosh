'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  MapPinned,
  Facebook,
  Instagram,
  Youtube,
  MessageCircleMore,
  Landmark,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#496B21] text-white text-sm">
      {/* Top Row (Shared) */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 pt-8 pb-4">
        <Image
          src="/images/footerlogo.webp"
          alt="Footer Logo"
          width={80}
          height={80}
        />
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Phone size={16} />
          <span>Need help? Call us</span>
          <span className="font-bold">03161616002</span>
        </div>
      </div>

      {/* Divider (Shared) */}
      <hr className="border-white/30 mx-6 md:mx-12" />

      {/* Mobile Layout */}
      <div className="block md:hidden px-6 py-6 space-y-6">
        <p>
          Welcome to Khanabadosh Glamps<br />
          luxury in nature, nestled in Kumrat<br />
          Valley and Murree Hills.
        </p>

        <details open>
          <summary className="font-semibold cursor-pointer">Glamps</summary>
          <ul className="ml-4 mt-2 space-y-1">
            <li><Link href="/glamps/murre">Murre Glamps</Link></li>
            <li><Link href="/glamps/kumrat">Kumrat Glamps</Link></li>
          </ul>
        </details>

        <details>
          <summary className="font-semibold cursor-pointer">Booking & Reservation</summary>
          <ul className="ml-4 mt-2 space-y-1">
            <li><Link href="/booking/hotel">Hotel Booking</Link></li>
            <li><Link href="/booking/murre">Murre Glamps Booking</Link></li>
            <li><Link href="/booking/kumrat">Kumrat Glamps Booking</Link></li>
            <li><Link href="/booking/advance">Advance Booking</Link></li>
            <li><Link href="/booking/online">Online Booking</Link></li>
          </ul>
        </details>

        <details>
          <summary className="font-semibold cursor-pointer">Explore</summary>
          <ul className="ml-4 mt-2 space-y-1">
            <li><Link href="/corporate">Corporate Package</Link></li>
            <li><Link href="/booking">Booking & Reservations</Link></li>
            <li><Link href="/about">About Khanabadosh</Link></li>
            <li><Link href="/experiences">Experience & Activities</Link></li>
          </ul>
        </details>

        <details>
          <summary className="font-semibold cursor-pointer">Quick Links</summary>
          <ul className="ml-4 mt-2 space-y-1">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/weather">Weather</Link></li>
          </ul>
        </details>

        <details>
          <summary className="font-semibold cursor-pointer">Contact Us Murree Glamps</summary>
          <ul className="ml-4 mt-2 space-y-1">
            <li className="flex gap-2"><MapPin size={16} /> Murree Rd</li>
            <li className="flex gap-2"><MapPinned size={16} /> Murree Glamps</li>
            <li className="flex gap-2"><Mail size={16} /> khanabadosh.glamps.com</li>
            <li className="flex gap-2"><Clock size={16} /> 10 AM - 10 PM Mon-Sat</li>
          </ul>
        </details>

        <details>
          <summary className="font-semibold cursor-pointer">Contact Us Kumrat Glamps</summary>
          <ul className="ml-4 mt-2 space-y-1">
            <li className="flex gap-2"><MapPin size={16} /> Kumrat Rd</li>
            <li className="flex gap-2"><MapPinned size={16} /> Kumrat Glamps</li>
            <li className="flex gap-2"><Mail size={16} /> khanabadosh.glamps.com</li>
            <li className="flex gap-2"><Clock size={16} /> 10 AM - 10 PM Mon-Sat</li>
          </ul>
        </details>

        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex gap-3">
            {[Youtube, Facebook, MessageCircleMore, Landmark, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="bg-white p-2 rounded-full text-[#496B21] hover:opacity-90 transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6 md:px-12 py-10">
        <div className="space-y-4">
          <p>
            Welcome to Khanabadosh Glamps <br />
            luxury in nature, nestled in Kumrat <br />
            Valley and Murree Hills.
          </p>
          <div>
            <h4 className="font-semibold mb-1">Glamps</h4>
            <ul className="space-y-1">
              <li><Link href="/glamps/murre">Murre Glamps</Link></li>
              <li><Link href="/glamps/kumrat">Kumrat Glamps</Link></li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Follow us</h4>
            <div className="flex gap-2 items-center">
              {[Youtube, Facebook, MessageCircleMore, Landmark, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white p-2 rounded-full text-[#496B21] hover:opacity-90 transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Booking & Reservation</h4>
          <ul className="space-y-1">
            <li><Link href="/booking/hotel">Hotel Booking</Link></li>
            <li><Link href="/booking/murre">Murre Glamps Booking</Link></li>
            <li><Link href="/booking/kumrat">Kumrat Glamps Booking</Link></li>
            <li><Link href="/booking/advance">Advance Booking</Link></li>
            <li><Link href="/booking/online">Online Booking</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><Link href="/corporate">Corporate Package</Link></li>
            <li><Link href="/booking">Booking & Reservations</Link></li>
            <li><Link href="/about">About Khanabadosh</Link></li>
            <li><Link href="/experiences">Experience & Activities</Link></li>
          </ul>
        </div>

        <div>
          <div className="w-[120px]">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/weather">Weather</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Us <br />Murree Glamps</h4>
          <ul className="space-y-1">
            <li className="flex items-start gap-2"><MapPin size={18} className="flex-shrink-0" /> Murree Rd, Murree Glamps</li>
            <li className="flex items-start gap-2"><MapPinned size={18} className="flex-shrink-0" /> Murree Rd, Murree Glamps</li>
            <li className="flex items-start gap-2"><Mail size={18} className="flex-shrink-0" /> khanabadosh.glamps.com</li>
            <li className="flex items-start gap-2"><Clock size={18} className="flex-shrink-0" /> Hours: 10 AM - 10 PM Mon - Sat</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Us <br />Kumrat Glamps</h4>
          <ul className="space-y-1">
            <li className="flex items-start gap-2"><MapPin size={18} className="flex-shrink-0" /> Kumrat Rd, Kumrat Glamps</li>
            <li className="flex items-start gap-2"><MapPinned size={18} className="flex-shrink-0" /> Kumrat Rd, Kumrat Glamps</li>
            <li className="flex items-start gap-2"><Mail size={18} className="flex-shrink-0" /> khanabadosh.glamps.com</li>
            <li className="flex items-start gap-2"><Clock size={18} className="flex-shrink-0" /> Hours: 10 AM - 10 PM Mon - Sat</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar (Shared) */}
      <div className="border-t border-white/30 mt-2 pt-4 px-6 md:px-12 pb-6 flex flex-col md:flex-row justify-between items-center text-xs gap-2">
        <span>© 2025 khanabadoshglamps. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/legal">Legal notice</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
