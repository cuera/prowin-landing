import React from "react";

const capabilities = [
  {
    title: "WEEE Recycling",
    desc: "5-step sourcing, sorting, dismantling, and shredding."
  },
  {
    title: "IT Asset Disposition",
    desc: "Refurbishing and remarketing of corporate hardware."
  },
  {
    title: "EV Battery Recycling",
    desc: "Closed-loop lithium, cobalt, and nickel recovery."
  },
  {
    title: "Integrated MSW",
    desc: "Municipal solid waste and Waste-to-Energy (WTE) solutions."
  },
  {
    title: "B2B Marketplace",
    desc: "Digital trading of scrap, recyclates, and EPR credits."
  },
  {
    title: "Smart IoT Fleets",
    desc: "Ultrasonic bin sensors and AI route optimisation."
  }
];

export function EwasteCapabilities() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Left Title */}
          <div className="md:w-1/4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] leading-tight">
              Enabled by leading capabilities.
            </h2>
          </div>
          
          {/* Right Grid (2 rows of 3 columns, or wrap based on flex) */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex flex-col border-t border-gray-200 pt-6">
                <h4 className="text-lg font-serif text-[#1a1a1a] mb-3">{item.title}</h4>
                <p className="text-sm font-sans text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
