import React from "react";
import { Combine, FileText, Store } from "lucide-react";

export function EwasteUseCases() {
  return (
    <section className="w-full bg-[#f6f3eb] py-24 md:py-32 px-6 md:px-12 border-b border-[#e2dcc8]">
      <div className="max-w-[1920px] mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-20 md:mb-24 px-4 text-center">
          Power your every process.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          <div className="flex flex-col group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-[#ebe5d5] flex justify-center items-center mb-8 text-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:text-[#D4AF37]">
              <Combine className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#D4AF37] transition-colors">
              Urban Mining &amp; Extraction
            </h3>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-6 transition-all duration-300 group-hover:w-full"></div>
            <p className="text-gray-600 font-sans leading-relaxed text-lg font-light">
              Using eco-friendly bioleaching and pyrometallurgy to safely recover precious and base metals from printed circuit boards (PCBs).
            </p>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-[#ebe5d5] flex justify-center items-center mb-8 text-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:text-[#D4AF37]">
              <FileText className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#D4AF37] transition-colors">
              EPR &amp; Compliance Software
            </h3>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-6 transition-all duration-300 group-hover:w-full"></div>
            <p className="text-gray-600 font-sans leading-relaxed text-lg font-light">
              Cloud-based SaaS tools automating State and Central Pollution Control Board reporting, credit trading, and manifest tracking.
            </p>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-[#ebe5d5] flex justify-center items-center mb-8 text-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:text-[#D4AF37]">
              <Store className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#D4AF37] transition-colors">
              Scrap &amp; Recyclates Marketplace
            </h3>
            <div className="w-12 h-0.5 bg-[#D4AF37] mb-6 transition-all duration-300 group-hover:w-full"></div>
            <p className="text-gray-600 font-sans leading-relaxed text-lg font-light">
              A unified W-commerce hub to transparently buy and sell graded plastic pellets, secondary metals, glass, and refurbished IT assets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
