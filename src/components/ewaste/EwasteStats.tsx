import React from "react";
import { Gem, CloudLightning, ShieldCheck } from "lucide-react";

export function EwasteStats() {
  return (
    <section className="w-full bg-[#0A1F25] py-section-lg px-6 md:px-12 border-b border-[#16424D]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stat 1 */}
        <div className="bg-[#0D2930] p-12 md:p-16 rounded-[24px] flex flex-col items-start justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
          <Gem className="w-10 h-10 text-[#cda434] mb-8" strokeWidth={1.5} />
          <div>
            <h2 className="text-stat-hero font-light text-text-primary mb-4">98%</h2>
            <p className="text-text-accent font-semibold text-label-md uppercase">
              RECOVERY RATE FOR CRITICAL METALS
            </p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-[#0D2930] p-12 md:p-16 rounded-[24px] flex flex-col items-start justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
          <CloudLightning className="w-10 h-10 text-[#cda434] mb-8" strokeWidth={1.5} />
          <div>
            <h2 className="text-stat-hero font-light text-text-primary mb-4">1.75M</h2>
            <p className="text-text-accent font-semibold text-label-md uppercase">
              TONNES OF INDIA&apos;S E-WASTE ADDRESSED
            </p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-[#0D2930] p-12 md:p-16 rounded-[24px] flex flex-col items-start justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300">
          <ShieldCheck className="w-10 h-10 text-[#cda434] mb-8" strokeWidth={1.5} />
          <div>
            <h2 className="text-stat-hero font-light text-text-primary mb-4">100%</h2>
            <p className="text-text-accent font-semibold text-label-md uppercase">
              ZERO-DISCHARGE CLOSED LOOP PROCESS
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
