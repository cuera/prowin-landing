"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      label: "The SAAS Platform",
      heading: "Deploy AI-powered automation from pipeline to lifetime"
    },
    {
      label: "The E Waste Platform",
      heading: "Transform electronic waste management with sustainable tracking"
    },
    {
      label: "The ERP Platform",
      heading: "Unify your entire enterprise operations in one intelligent system"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex flex-col justify-end pb-[80px] overflow-hidden group">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-[10s] ease-out"
      >
        <source src="/waste%20prowin.mp4" type="video/mp4" />
      </video>
      
      {/* Cinematic Tint - Base Multiply Layer */}
      <div className="absolute inset-0 pointer-events-none bg-teal-950/30 mix-blend-multiply" />
      
      {/* Radial Vignette to focus center */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at center, rgba(6, 20, 24, 0.2) 0%, rgba(6, 20, 24, 0.8) 100%)"
        }}
      />

      {/* Bottom Gradient for Text Legibility */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "linear-gradient(to top, rgba(6, 20, 24, 0.95) 0%, rgba(6, 20, 24, 0) 50%)"
        }}
      />

      {/* Film Grain Texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat"
        }}
      />

      {/* Content Container aligned to bottom */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[60px] pb-[80px] lg:pb-[250px]">
        
        {/* Subtitle & Buttons Flex Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          
          {/* Alternating Text Container */}
          <div className="relative w-full h-[160px] sm:h-[120px] lg:h-[100px] flex items-end">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute bottom-0 left-0 w-full transition-all duration-[1500ms] ease-in-out ${
                  activeIndex === index 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <h2 className="text-[12px] leading-[12px] font-bold tracking-[1.2px] text-white/70 uppercase mb-[16px]">
                  {slide.label}
                </h2>
                <p className="text-[32px] sm:text-[38px] leading-[1.2] sm:leading-[41.8px] tracking-[-0.8px] text-white font-medium max-w-[700px]">
                  {slide.heading}
                </p>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
