import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EcoNexusFooter() {
  return (
    <>
      <footer className="w-full bg-[#1A1A1A] pt-24 pb-8 px-6 md:px-12 text-white overflow-hidden relative border-t border-gray-800">
        <div className="max-w-[1920px] mx-auto">
          {/* Footer CTA Banner (Pulled slightly up visually) */}
          <div className="w-full max-w-6xl mx-auto -mt-40 mb-20 relative z-20">
            <div className="bg-white rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 shadow-2xl">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">READY / ACT</p>
                <h3 className="text-3xl lg:text-5xl font-serif text-[#1a1a1a] leading-tight max-w-lg mb-4">
                  Discover Circular Intelligence.
                </h3>
                <p className="text-gray-500 font-sans text-lg">
                  Start monetising your e-waste and hit your ESG goals today.
                </p>
              </div>
              <button className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:scale-110 hover:bg-[#D4AF37] transition-all duration-300">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24 max-w-6xl mx-auto">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">Platform</h4>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Traceability Ledger</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">ESG Dashboards</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">IoT Fleet Management</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">Solutions</h4>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">EPR Fulfilment</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Urban Mining</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">IT Asset Disposition</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Data Destruction</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">Waste Types</h4>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">WEEE Recycling</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Lithium-Ion Batteries</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Plastic Packaging</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">Resources</h4>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">CPCB Guidelines</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Case Studies</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">Legal</h4>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Corporate Governance</Link>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            {/* Massive text spanning the bottom */}
            <h1 className="text-[10vw] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-[#1a1a1a] select-none whitespace-nowrap leading-none tracking-tighter mix-blend-screen opacity-50">
              Recover them. Renew them.
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 mt-8">
            <p className="text-xs text-gray-600">
              &copy; 2026 Eco-Nexus Sustainability Solutions.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-800">|</span>
              <Link href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-gray-800">|</span>
              <Link href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Corporate Governance</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
