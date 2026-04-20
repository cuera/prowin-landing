import React from "react";

const gridLogos = [
  { text: "Nasdaq", style: "font-sans font-bold italic tracking-tighter" },
  { text: "TREND MICRO", style: "font-sans font-black tracking-widest text-[10px]" },
  { text: "firstup", style: "font-sans font-bold lowercase tracking-tight" },
  { text: "torq=", style: "font-mono font-medium lowercase" },
  { text: "> continu", style: "font-sans font-semibold tracking-tight" },
  { text: "Steddy", style: "font-sans font-medium text-gray-800" },
  { text: "8x8", style: "font-sans font-black tracking-tighter text-xl" },
  { text: "★ Trustpilot", style: "font-sans font-bold" },
  { text: "MACROBOND", style: "font-sans font-light tracking-[0.2em] text-[10px]" },
  { text: "icario", style: "font-sans font-black lowercase tracking-tighter" },
  { text: "BLOCKBRAIN", style: "font-sans font-black tracking-widest text-[10px]" },
  { text: "DashQ", style: "font-sans font-medium" },
];

export function WasteTrustLogos() {
  return (
    <div className="w-full bg-white pt-[44px] pb-[57px] flex flex-col items-center">
      <div className="w-full flex-col px-[67px] max-w-[1920px]">
        
        {/* Top left text, aligned to the table */}
        <div className="flex w-full justify-start items-center text-[#AAAAAA] text-[12px] font-medium tracking-widest uppercase mb-[48px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>TRUSTED BY LEADING COMPANIES WORLDWIDE</p>
        </div>

        {/* 2x6 Bordered Grid */}
        <div className="w-full border border-gray-200 rounded-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 overflow-hidden">
          {gridLogos.map((logo, idx) => {
            return (
              <div 
                key={idx} 
                className={`flex items-center justify-center py-12 px-6 bg-white shrink-0
                  border-b lg:border-b-[#ebebeb]
                  ${(idx + 1) % 6 !== 0 ? 'lg:border-r border-r-[#ebebeb]' : ''}
                  ${idx >= 6 ? 'lg:border-b-0' : ''}
                `}
              >
                <div className={`text-[#1a1a1a] opacity-90 transition-opacity hover:opacity-100 ${logo.style} flex items-center justify-center text-lg md:text-xl`}>
                  {logo.text}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
