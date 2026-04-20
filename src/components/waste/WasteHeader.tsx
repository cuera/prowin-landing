import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function WasteHeader() {
  return (
    <header className="w-full fixed top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/waste" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <span className="text-xl md:text-2xl font-serif font-semibold tracking-wide text-emerald-900">
            WASTE MANAGEMENT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">Solutions</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <Link href="#tech" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Technology
          </Link>
          <Link href="#compliance" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Compliance
          </Link>
          <Link href="#impact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Impact
          </Link>
        </nav>

        {/* Right CTA / Auth */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#login" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Log In
          </Link>
          <Link 
            href="#contact" 
            className="text-xs font-semibold tracking-wider uppercase bg-emerald-800 text-white px-6 py-3 rounded-md hover:bg-emerald-900 transition-colors hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 font-medium text-sm">Menu</button>
        </div>
      </div>
    </header>
  );
}
