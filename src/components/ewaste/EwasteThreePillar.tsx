/* eslint-disable @next/next/no-img-element */
import React from "react";

export function EwasteThreePillar() {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-24 md:py-32">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Large Text Quote */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-display-lg font-medium mb-8">
            &quot;Eco-Nexus&apos;s blockchain traceability and urban mining vision is pure brilliance.&quot;
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="VP of Sustainability" className="w-full h-full object-cover" />
            </div>
              <p className="text-heading-sm font-semibold">VP of Sustainability</p>
              <p className="text-[#D4AF37] text-label-md uppercase font-semibold mt-1">Global IT Enterprise</p>
            </div>
          </div>
        </div>

        {/* Right Side: 3 Vertical Points */}
        <div className="lg:w-1/2 flex flex-col justify-center gap-12">
          
          {/* Pillar 1 */}
          <div className="group border-l-2 border-[#D4AF37] pl-8 transition-all hover:border-white">
            <h3 className="text-label-md uppercase font-semibold text-[#D4AF37] mb-3 group-hover:text-white transition-colors">
              RECOVERY / URBAN MINING
            </h3>
            <p className="text-heading-lg font-normal text-text-secondary">
              Extracting 99% pure precious metals with zero liquid discharge.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group border-l-2 border-[#D4AF37] pl-8 transition-all hover:border-white">
            <h3 className="text-label-md uppercase font-semibold text-[#D4AF37] mb-3 group-hover:text-white transition-colors">
              COMPLIANCE / END-TO-END EPR
            </h3>
            <p className="text-heading-lg font-normal text-text-secondary">
              Automating CPCB portal filing and Extended Producer Responsibility targets.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group border-l-2 border-[#D4AF37] pl-8 transition-all hover:border-white">
            <h3 className="text-label-md uppercase font-semibold text-[#D4AF37] mb-3 group-hover:text-white transition-colors">
              SAAS / CIRCULAR OPTIMISED
            </h3>
            <p className="text-heading-lg font-normal text-text-secondary">
              Built strictly for zero-waste commercial outcomes and ESG reporting.
            </p>
          </div>

        </div>
    </section>
  );
}
