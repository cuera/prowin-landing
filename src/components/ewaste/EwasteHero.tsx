/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Play } from "lucide-react";

export function EwasteHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#1A1A1A]">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
          alt="Professionals reviewing sustainability dashboard"
          className="w-full h-full object-cover opacity-60"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)"
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          <h3 className="text-hero-eyebrow font-bold text-[#D4AF37] uppercase mb-6">
            The Integrated E-Waste & Circular Economy Platform
          </h3>
          <h1 className="text-display-2xl font-extrabold text-white mb-8">
            Bring your waste management, EPR compliance, and recyclables marketplace together.
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1a1a1a] text-button-lg font-semibold uppercase rounded-sm hover:bg-gray-100 transition-colors">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-white text-button-lg font-semibold uppercase hover:text-[#D4AF37] transition-colors group">
              <Play className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
