"use client"; // Required for state and event handlers

import * as React from "react";
import { cn } from "@/lib/utils";

// --- PROPS INTERFACE ---
interface InteractiveProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  logo: React.ReactNode;
  title: string;
  description: string;
  price?: string;
}

// --- COMPONENT DEFINITION ---
export function InteractiveProductCard({
  className,
  imageUrl,
  logo,
  title,
  description,
  price,
  ...props
}: InteractiveProductCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  // --- MOUSE MOVE HANDLER ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y - height / 2) / (height / 2) * -8; // Max rotation 8deg
    const rotateY = (x - width / 2) / (width / 2) * 8;   // Max rotation 8deg

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  // --- MOUSE LEAVE HANDLER ---
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "relative w-full max-w-[340px] aspect-[9/12] rounded-3xl bg-card shadow-lg mx-auto",
        "transform-style-3d cursor-pointer", // Enables 3D transformations for children
        className
      )}
      {...props}
    >
      {/* Background Image - scales slightly to avoid showing edges on tilt */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          style={{ transform: "translateZ(-20px) scale(1.1)" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071519]/90 via-[#071519]/40 to-transparent" />
      </div>

      {/* Main Content with 3D effect */}
      <div
        className="absolute inset-0 p-5 flex flex-col pointer-events-none"
        style={{ transform: "translateZ(40px)" }}
      >
        {/* Glassmorphism Header */}
        <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <div className="flex flex-col">
            <h3 className="text-[32px] md:text-[40px] font-bold text-white leading-none mb-1">{title}</h3>
            <p className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold">{description}</p>
          </div>
          <div className="text-white/60">
            {logo}
          </div>
        </div>

        {/* Price Tag - Absolute position for pixel perfection */}
        {price && (
          <div className="absolute top-[108px] left-5">
            <div className="rounded-full bg-black/60 border border-white/10 px-4 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
              {price}
            </div>
          </div>
        )}

        {/* Pagination Dots - Pushed to the bottom */}
        <div className="mt-auto flex w-full justify-center gap-2 pb-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                index === 0 ? "bg-emerald-400" : "bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
