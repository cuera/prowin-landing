import React from "react";

const integrations = [
  "SAP", "Oracle", "CPCB Portal", "Geotab", "Salesforce", "AWS IoT", "MS Dynamics", "Zendesk"
];

export function EwasteIntegrations() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        
        <div className="max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif text-[#1a1a1a] leading-tight mb-6">
            Unified context. Broader workflows.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Integrating seamlessly with your existing Enterprise Resource Planning, regulatory portals, and logistics providers.
          </p>
        </div>

        {/* Unified Partner Grid */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {integrations.map((name, idx) => (
            <div key={idx} className="h-24 md:h-32 border border-gray-100 rounded-2xl flex items-center justify-center bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <span className="text-lg md:text-xl font-bold font-sans text-gray-400 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
