import React from "react";
import { Laptop, Recycle, Settings, Flame, Droplet, TreePine, Hospital, Factory, SearchCheck, Hammer } from "lucide-react";

export function WasteSolutions() {
  return (
    <section className="w-full bg-white px-6 md:px-12 py-16 md:py-24 max-w-[1920px] mx-auto border-y border-gray-100">
      {/* 3. E-WASTE SOLUTIONS */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <Laptop className="w-6 h-6 text-emerald-800" />
              <h2 className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
                3. E-Waste Solutions
              </h2>
            </div>
            <h3 className="text-3xl font-serif text-[#1a1a1a] leading-tight mb-4">
              Next-Generation E-Waste Management & Urban Mining
            </h3>
            <p className="text-gray-600 font-sans leading-relaxed">
              Electronic waste is not trash; it is a rich secondary source of precious metals. Our facilities utilise a multi-stage engineering process to extract maximum value with zero environmental discharge.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Recycle className="w-6 h-6 text-emerald-600 mb-4" />
              <h4 className="font-serif text-xl mb-3">Comprehensive WEEE Recycling</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                We handle all categories of Waste Electrical and Electronic Equipment. Our 5-step process includes Sourcing, Sorting & Grading, Dismantling, Shredding, and Safe Disposal of hazardous residues.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Settings className="w-6 h-6 text-emerald-600 mb-4" />
              <h4 className="font-serif text-xl mb-3">Advanced Urban Mining</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                Deploying cutting-edge technologies to recover precious metals (Gold, Silver, Palladium) and base metals. Includes Pyrometallurgical Processing and Hydrometallurgical Extraction.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <TreePine className="w-6 h-6 text-emerald-600 mb-4" />
              <h4 className="font-serif text-xl mb-3">Bio-metallurgy (Bioleaching)</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                An eco-friendly, energy-efficient process utilising micro-organisms to dissolve and recover metals like copper and gold without toxic emissions.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <SearchCheck className="w-6 h-6 text-emerald-600 mb-4" />
              <h4 className="font-serif text-xl mb-3">ITAD & Data Destruction</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                We provide 100% secure, DoD-standard data wiping, degaussing, and mobile on-site shredding to ensure complete data security for corporate clients.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Flame className="w-6 h-6 text-emerald-600 mb-4" />
              <h4 className="font-serif text-xl mb-3">Lithium-Ion & EV Recycling</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                A closed-loop system recovering battery-grade cobalt, lithium, nickel, and manganese, supplying active cathode materials back to manufacturing.
              </p>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Droplet className="w-6 h-6 text-emerald-600 mb-4" />
              <h4 className="font-serif text-xl mb-3">Lamp Recycling</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                Safe, mobile, on-site crushing and compacting of fluorescent lamps to curb mercury pollution and ensure environmental safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. INTEGRATED WASTE SERVICES */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12 pb-16 items-start">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-6 h-6 text-[#9A7D46]" />
              <h2 className="text-sm font-semibold tracking-wider text-[#9A7D46] uppercase">
                4. Integrated Waste Services
              </h2>
            </div>
            <h3 className="text-3xl font-serif text-[#1a1a1a] leading-tight mb-4">
              360-Degree Environmental Management
            </h3>
            <p className="text-gray-600 font-sans leading-relaxed">
              Beyond electronics, we offer end-to-end management for all major waste streams, ensuring regulatory compliance and environmental safety.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#F4F0E6] p-8 rounded-2xl transition hover:bg-[#EBE5D6] duration-300">
              <Flame className="w-6 h-6 text-[#725C31] mb-4" />
              <h4 className="font-serif text-xl mb-3 text-[#1a1a1a]">Municipal Solid Waste (MSW)</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Handling millions of tonnes of MSW. We convert combustible waste into Refuse Derived Fuel (RDF) and generate renewable power, alongside organic waste conversion.
              </p>
            </div>
            <div className="bg-[#F4F0E6] p-8 rounded-2xl transition hover:bg-[#EBE5D6] duration-300">
              <Hospital className="w-6 h-6 text-[#725C31] mb-4" />
              <h4 className="font-serif text-xl mb-3 text-[#1a1a1a]">Biomedical & Hazardous Waste</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Serving healthcare facilities by treating pathological waste via advanced incineration. Safe neutralisation and disposal of industrial toxic chemicals via TSDFs.
              </p>
            </div>
            <div className="bg-[#F4F0E6] p-8 rounded-2xl transition hover:bg-[#EBE5D6] duration-300">
              <Recycle className="w-6 h-6 text-[#725C31] mb-4" />
              <h4 className="font-serif text-xl mb-3 text-[#1a1a1a]">Plastic & Packaging Waste</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Supporting brands in meeting extended Producer Responsibility (EPR) targets through the recycling of PET, HDPE, LDPE, converting into high-quality recyclates.
              </p>
            </div>
            <div className="bg-[#F4F0E6] p-8 rounded-2xl transition hover:bg-[#EBE5D6] duration-300">
              <Hammer className="w-6 h-6 text-[#725C31] mb-4" />
              <h4 className="font-serif text-xl mb-3 text-[#1a1a1a]">Construction & Demolition</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Segregation of concrete, metal, and wood to be processed and reused as construction aggregates, minimising virgin resource depletion globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
