/* eslint-disable @next/next/no-img-element */
import React from "react";

interface EwasteFeatureBlockProps {
  headline: string;
  features: {
    title: string;
    description: string;
  }[];
  imageUrl: string;
  imageAlt: string;
  imageOnRight?: boolean;
}

export function EwasteFeatureBlock({
  headline,
  features,
  imageUrl,
  imageAlt,
  imageOnRight = true,
}: EwasteFeatureBlockProps) {
  return (
    <section className="w-full bg-[#0A1F25] py-section-lg overflow-hidden border-b border-[#16424D]">
      <div className={`max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col gap-16 lg:gap-24 
        ${imageOnRight ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-display-lg font-medium text-text-primary mb-12">
            {headline}
          </h2>
          
          <div className="space-y-10">
            {features.map((feature, idx) => (
              <div key={idx}>
                <h3 className="text-heading-lg font-medium text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-lg text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Media / Image Container */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#0D2930] shadow-xl border border-[#1A4E5C]">
            {/* Soft decorative shadow/glow representing the software UI 'card' look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
