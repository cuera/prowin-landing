/* eslint-disable @next/next/no-img-element */
import React from "react";

export function EwasteDarkBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a1a1a] text-white py-24 md:py-32">
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern clean recycling facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-[#1a1a1a]/90"></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h3 className="text-xs tracking-[0.2em] font-semibold text-[#D4AF37] uppercase mb-6">
          CIRCULAR ECONOMY IMPLEMENTATION
        </h3>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight max-w-4xl">
          The Sustainability Deployment Program
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mb-12">
          Unlocking the value of urban mining and navigating CPCB regulations is challenging. Our dedicated experts partner with you to implement zero-waste strategies, ensure legal compliance, and hit your sustainability targets.
        </p>
        
        <button className="px-8 py-4 bg-white text-[#1a1a1a] text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-gray-100 transition-colors mb-20">
          Learn More
        </button>

        {/* 3 Small Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="group relative rounded-xl h-48 overflow-hidden bg-gray-800 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="Labs" />
             <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
               <span className="text-sm font-serif font-semibold">Advanced Bioleaching Labs</span>
             </div>
          </div>
          
          <div className="group relative rounded-xl h-48 overflow-hidden bg-gray-800 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1580983546051-5b5839ff9173?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="Shredding" />
             <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
               <span className="text-sm font-serif font-semibold">Mobile Shredding Units</span>
             </div>
          </div>

          <div className="group relative rounded-xl h-48 overflow-hidden bg-gray-800 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="Command Centre" />
             <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
               <span className="text-sm font-serif font-semibold">IoT Command Centre</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
