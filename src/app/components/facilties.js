'use client'

import {
  Wifi,
  ParkingCircle,
  Utensils,
  ShieldCheck,
  MonitorPlay,
  BatteryCharging,
  ShowerHead,
  FlameKindling
} from 'lucide-react'

const facilities = [
  { icon: <Wifi className="w-8 h-8" />, label: 'Wifi' },
  { icon: <MonitorPlay className="w-8 h-8" />, label: 'Netflix' },
  { icon: <ParkingCircle className="w-8 h-8" />, label: 'Free Parking' },
  { icon: <Utensils className="w-8 h-8" />, label: 'Restaurant' },
  { icon: <BatteryCharging className="w-8 h-8" />, label: 'Electricity Backup' },
  { icon: <ShowerHead className="w-8 h-8" />, label: 'Geysers' },
  { icon: <FlameKindling className="w-8 h-8" />, label: '24/7 Heating' },
  { icon: <ShieldCheck className="w-8 h-8" />, label: '24/7 Guards' },
]

export default function FacilityDetails() {
  return (
    <section className="py-16 bg-[#E4E6E8] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold md:font-extrabold text-black tracking-tight">
          FACILITY <span className="text-green-700">DETAILS</span>
        </h2>
        <p className="text-sm text-gray-600 mt-1 mb-10">Professional tourists</p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white px-4 py-6 rounded-md border border-black flex flex-col items-center justify-center space-y-3 hover:shadow-md transition"
            >
              <div className="text-black">{facility.icon}</div>
              <p className="text-sm font-medium text-gray-800 text-center">
                {facility.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
