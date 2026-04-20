import React from "react";
import { Link2, Cpu, MapPin, SearchCode, ShoppingCart, RefreshCcw, DollarSign } from "lucide-react";

export function WasteTech() {
  return (
    <section className="w-full bg-[#FDFBF7] px-6 md:px-12 py-16 md:py-24 max-w-[1920px] mx-auto">
      {/* 5. DIGITAL TECHNOLOGY & SAAS PLATFORMS */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-emerald-700" />
            <span className="text-sm font-semibold tracking-wider text-emerald-700 uppercase">
              5. Digital Tech & SaaS Platforms
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-6">
            Digitising the Circular Economy
          </h2>
          <p className="text-lg text-gray-600 font-sans max-w-3xl mx-auto">
            We leverage Industry 4.0 innovations to bring absolute transparency to the highly fragmented waste management sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F4F0E6] flex items-center justify-center mb-6 text-[#9A7D46]">
              <Link2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-3">Blockchain Traceability</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Ethereum-based smart contracts create an immutable digital ledger ensuring every transaction from collection to recycling is recorded, preventing double-counting.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F4F0E6] flex items-center justify-center mb-6 text-[#9A7D46]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-3">AI & Robotics</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              AI-powered computer vision and robotic disassembly lines identify and separate complex electronic components with 99% precision, replacing hazardous manual sorting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F4F0E6] flex items-center justify-center mb-6 text-[#9A7D46]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-3">IoT Smart Bins & Logistics</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Receptacles equipped with ultrasonic sensors and GPS tracking optimise logistics, reduce fuel consumption, and eliminate empty truck runs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F4F0E6] flex items-center justify-center mb-6 text-[#9A7D46]">
              <SearchCode className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-3">EPR & PRO SaaS</h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Cloud-based platforms for producers to digitally plan, manage, and track EPR obligations, generating automated compliance reports and digital manifests.
            </p>
          </div>
        </div>
      </div>

      {/* 6. THE CIRCULAR MARKETPLACE */}
      <div className="max-w-7xl mx-auto">
        <div className="p-8 md:p-16 rounded-[24px] bg-[#1a1a1a] text-white">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-4 block">
                6. The Circular Marketplace
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                A Unified Hub for Buying and Selling Recyclables
              </h2>
              <p className="text-gray-400 font-sans leading-relaxed mb-8">
                Our digital w-commerce marketplace bridges the demand-supply gap, connecting bulk waste generators, aggregators, recyclers, and manufacturers nationwide.
              </p>
            </div>
            <div className="md:w-1/2 w-full space-y-4">
              <div className="bg-[#2A2A2A] p-6 rounded-xl flex items-start gap-4 border border-[#3A3A3A]">
                <ShoppingCart className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg mb-2">Scrap & Recyclates Trading</h4>
                  <p className="text-sm text-gray-400 font-sans">
                    An online platform to buy/sell graded plastic pellets, secondary metals, glass, and processed e-waste with fair, AI-driven price discovery.
                  </p>
                </div>
              </div>
              <div className="bg-[#2A2A2A] p-6 rounded-xl flex items-start gap-4 border border-[#3A3A3A]">
                <RefreshCcw className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg mb-2">Re-commerce & Refurbished IT</h4>
                  <p className="text-sm text-gray-400 font-sans">
                    Extending IT asset lifecycle with certified refurbished laptops and mobile devices, making digital literacy affordable while reducing carbon footprint.
                  </p>
                </div>
              </div>
              <div className="bg-[#2A2A2A] p-6 rounded-xl flex items-start gap-4 border border-[#3A3A3A]">
                <DollarSign className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg mb-2">EPR Credit Auctions</h4>
                  <p className="text-sm text-gray-400 font-sans">
                    A secure trading floor where producers and brand owners can transparently bid for and purchase verified EPR certificates to meet compliance targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
