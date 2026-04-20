import React from "react";
import { Wand2, Tag, Navigation, TestTube, Smartphone, Zap, Trash2, Gavel, Users } from "lucide-react";
import Link from "next/link";

const microFeatures = [
  { icon: Tag, text: "Fair Price Discovery: AI-driven marketplace pricing." },
  { icon: Navigation, text: "Real-time Fleet Tracking: GPS-enabled reverse logistics." },
  { icon: TestTube, text: "NABL Accredited Lab: Testing for air, soil, and wastewater." },
  { icon: Smartphone, text: "Refurbished Device Sales: Bridging the digital divide." },
  { icon: Zap, text: "Lamp Recycling: Mobile on-site mercury safe disposal." },
  { icon: Trash2, text: "C&D / Plastic Waste: Integrated management of all streams." },
  { icon: Gavel, text: "EPR Credit Auctions: Transparent bidding for compliance." },
  { icon: Users, text: "Social Inclusion: Empowering informal waste pickers." }
];

export function EwasteMicroFeatures() {
  return (
    <section className="w-full bg-[#f6f3eb] py-24 md:py-32 px-6 md:px-12 border-b border-[#e2dcc8]">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* Centered Mini-Quote */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-24">
          <div className="w-12 h-12 rounded-full bg-[#ebe5d5] flex items-center justify-center mb-8">
            <Wand2 className="w-5 h-5 text-[#9A7D46]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-serif leading-snug text-[#1a1a1a] mb-6">
            &quot;Better than pulling a rabbit-out-of-a-hat kinda magic. It&apos;s turning electronic trash into pure gold.&quot;
          </h2>
          <p className="text-sm font-semibold tracking-wider text-[#9A7D46] uppercase">
            – Forbes Circular Economy Review
          </p>
        </div>

        {/* Grid of Micro-Features (2 Rows of 4) */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {microFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col">
                <Icon className="w-6 h-6 text-[#9A7D46] mb-4" strokeWidth={1.5} />
                <p className="text-sm font-sans text-gray-700 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <Link href="#features" className="text-sm font-semibold tracking-wider text-[#1a1a1a] uppercase hover:text-[#9A7D46] transition-colors pb-1 border-b-2 border-transparent hover:border-[#9A7D46]">
          View all platform features
        </Link>
        
      </div>
    </section>
  );
}
