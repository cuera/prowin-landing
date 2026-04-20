import React from "react";
import { ShieldCheck, FileCheck, Stethoscope, Handshake, Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WasteCompliance() {
  return (
    <section className="w-full bg-white px-6 md:px-12 py-16 md:py-24 max-w-[1920px] mx-auto border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* 7. COMPLIANCE, EPR & ANALYTICAL SERVICES */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-emerald-800" />
            <span className="text-sm font-semibold tracking-wider text-emerald-800 uppercase">
              7. Compliance & Analytical Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-6 leading-tight">
            Navigating Regulations with Confidence
          </h2>
          <p className="text-gray-600 font-sans mb-10 leading-relaxed">
            We protect your brand by ensuring 100% adherence to national pollution control guidelines. Our dedicated teams manage the complexities of modern environmental law.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f3ef] flex items-center justify-center flex-shrink-0 mt-1">
                <FileCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2 text-[#1a1a1a]">EPR Fulfilment</h4>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  We assist Manufacturers, Importers, and Brand Owners (MIBOs) in achieving mandatory collection targets under E-Waste (Management) Rules, Battery Waste Rules, and Plastic Waste Rules.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f3ef] flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2 text-[#1a1a1a]">Licensing & Clearances</h4>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Consultancy for obtaining Consent to Establish (CTE), Consent to Operate (CTO), and CPCB/SPCB portal registrations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f3ef] flex items-center justify-center flex-shrink-0 mt-1">
                <Stethoscope className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2 text-[#1a1a1a]">Re-Analytical Laboratory</h4>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  NABL & MoEF accredited lab testing for air quality, stack emissions, wastewater, soil, and hazardous waste characterisation to ensure safety thresholds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. SOCIAL INCLUSION & ESG IMPACT */}
        <div className="lg:w-1/2">
          <div className="bg-[#F4F0E6] rounded-[24px] p-8 md:p-12 h-full flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl font-serif text-[#1a1a1a] mb-4">
                Empowering Communities, Protecting the Planet
              </h2>
              <p className="text-[#725C31] text-sm tracking-widest uppercase font-semibold">
                8. Social Inclusion & ESG Impact
              </p>
            </div>
            
            <div className="space-y-8 flex-grow">
              <div className="bg-white/60 p-6 rounded-xl border border-white/40">
                <div className="flex items-center gap-3 mb-3">
                  <Handshake className="w-6 h-6 text-[#9A7D46]" />
                  <h4 className="font-serif text-xl text-[#1a1a1a]">Integrating the Informal Sector</h4>
                </div>
                <p className="text-sm text-gray-700 font-sans leading-relaxed">
                  We actively partner with &quot;Kabadiwalas&quot; (informal waste pickers). Through our collection agencies, we provide them with fixed salaries, ID cards, health insurance, protective gear, and training, transforming a hazardous livelihood into a dignified profession.
                </p>
              </div>
              
              <div className="bg-white/60 p-6 rounded-xl border border-white/40">
                <div className="flex items-center gap-3 mb-3">
                  <Sprout className="w-6 h-6 text-[#9A7D46]" />
                  <h4 className="font-serif text-xl text-[#1a1a1a]">ESG Reporting</h4>
                </div>
                <p className="text-sm text-gray-700 font-sans leading-relaxed">
                  Our platforms provide detailed sustainability dashboards for corporate clients, tracking metrics like carbon offsets, landfill diversion rates, and GHG emission reductions for corporate ESG disclosures.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#EBE5D6]">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#1a1a1a] uppercase hover:text-emerald-700 transition-colors group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
