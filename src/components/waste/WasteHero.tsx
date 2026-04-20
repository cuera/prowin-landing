import React from "react";
import { Activity, Globe, Scale, Users, Recycle } from "lucide-react";

const stats = [
  {
    icon: <Globe className="w-5 h-5 mb-3 text-emerald-700" />,
    value: "62M+",
    label: "Tonnes of e-waste produced globally each year",
    description: "The Global Challenge",
  },
  {
    icon: <Activity className="w-5 h-5 mb-3 text-emerald-700" />,
    value: "1.75M",
    label: "Tonnes produced in India (FY23-24)",
    description: "The Indian Context",
  },
  {
    icon: <Scale className="w-5 h-5 mb-3 text-emerald-700" />,
    value: "300g",
    label: "Gold yield per tonne of e-waste",
    description: "The Hidden Goldmine",
  },
  {
    icon: <Users className="w-5 h-5 mb-3 text-emerald-700" />,
    value: ">90%",
    label: "Processed informally with toxic methods",
    description: "The Informal Sector",
  },
  {
    icon: <Recycle className="w-5 h-5 mb-3 text-emerald-700" />,
    value: "98%",
    label: "Recovery of critical materials (Cu, Co, Ni, Li)",
    description: "Our Impact Target",
  },
];

export function WasteHero() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 max-w-[1920px] mx-auto flex flex-col items-center">
      {/* Hero Headline */}
      <div className="max-w-4xl text-center mb-16 md:mb-24">
        <h3 className="text-emerald-800 text-sm md:text-base font-medium tracking-widest uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          The Future of Resource Recovery
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-tight mb-8">
          Transforming Waste into Wealth: Your Partner for a Zero-Waste Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light font-sans max-w-3xl mx-auto">
          From AI-driven electronic waste recycling and urban mining to comprehensive municipal and industrial waste management. We are building a circular economy powered by digital traceability and sustainable innovation.
        </p>
      </div>

      {/* Stats Section with Premium Cards */}
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-serif text-[#1A1A1A] mb-8 text-center md:text-left">
          The Reality in Stats & Figures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#F4F0E6] rounded-[20px] p-6 md:p-8 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-[#E8E2D2]"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                {stat.icon}
              </div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">
                {stat.description}
              </h4>
              <h3 className="text-4xl font-serif text-[#1a1a1a] mb-3">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
