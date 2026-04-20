"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does the Blockchain traceability ledger work?",
    a: "We deploy Ethereum-based smart contracts that map every event from the point of waste collection to final material extraction. This creates an unalterable chain of custody, ensuring that EPR credits cannot be duplicated and giving MIBOs complete audit transparency."
  },
  {
    q: "Can I securely destroy classified IT assets on-site?",
    a: "Yes. We provide 'Data Destruction on Wheels'—mobile shredding and degaussing units that operate directly at your premises under DoD standards, complete with instant certificates of destruction."
  },
  {
    q: "What are the CPCB EPR targets for this financial year?",
    a: "Targets vary based on your product categories and historical sales. Our SaaS dashboard automatically calculates your specific obligations based on the latest E-Waste (Management) Rules and immediately matches you with available collection credits."
  }
];

export function EwasteFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Security & Compliance */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-8">
            Compliance. Secured.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-12">
            We navigate the complex landscape of environmental laws so you don&apos;t have to. We operate strictly under CPCB guidelines with zero-landfill policies.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase text-gray-500">ISO 9001</span>
            <span className="px-5 py-2 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase text-gray-500">ISO 14001</span>
            <span className="px-5 py-2 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase text-gray-500">ISO 45001</span>
            <span className="px-5 py-2 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase text-gray-500 bg-gray-50">R2v3 Certified</span>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-6">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-gray-200 pb-6 group">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <h3 className="text-xl md:text-2xl font-serif text-[#1a1a1a] pr-8 group-hover:text-[#9A7D46] transition-colors">
                      {faq.q}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#9A7D46] group-hover:text-[#9A7D46] transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-base text-gray-600 font-sans leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
