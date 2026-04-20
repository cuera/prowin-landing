"use client";

import React from "react";
// import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Image array from public/logospeed/newlogos
const allLogosData = [
  { name: "Logo 1", file: "1.avif" },
  { name: "Logo 2", file: "2.avif" },
  { name: "Logo 3", file: "3.avif" },
  { name: "Logo 4", file: "4.avif" },
  { name: "Logo 5", file: "5.avif" },
  { name: "Logo 6", file: "6.avif" },
  { name: "Logo 7", file: "7.avif" },
  { name: "Logo 8", file: "8.avif" },
];

const createLogoComponent = (src: string, name: string) => {
  const LogoImage = (props: React.SVGProps<SVGSVGElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={name} className={props.className} />
  );
  LogoImage.displayName = name;
  return LogoImage;
};

const allLogos = allLogosData.map((data, index) => ({
  id: index + 1,
  name: data.name,
  img: createLogoComponent(`/logospeed/newlogos/${data.file}`, data.name),
}));

export function TrustLogos() {
  return (
    <div className="w-full bg-[#071519] pt-[44px] pb-[57px] flex flex-col items-center">
      <div className="w-full flex-col px-[67px] max-w-[1920px]">
        <div className="flex w-full justify-start items-center text-[#696968] text-[12px] font-medium tracking-widest uppercase mb-[48px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>TRUSTED BY LEADING COMPANIES WORLDWIDE</p>
        </div>

        <div className="w-full border border-white/10 rounded-sm flex justify-center overflow-hidden">
          <div className="hidden lg:block w-full">
            <LogoCarousel columnCount={5} logos={allLogos} />
          </div>
          <div className="hidden sm:block lg:hidden w-full">
            <LogoCarousel columnCount={3} logos={allLogos} />
          </div>
          <div className="block sm:hidden w-full">
            <LogoCarousel columnCount={2} logos={allLogos} />
          </div>
        </div>
      </div>
    </div>
  );
}
