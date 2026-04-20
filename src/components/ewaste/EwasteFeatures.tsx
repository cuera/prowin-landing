import React from "react";
import { EwasteFeatureBlock } from "./EwasteFeatureBlock";

export function EwasteFeatures() {
  return (
    <div className="flex flex-col">
      {/* Feature Section 1 */}
      <EwasteFeatureBlock 
        headline="BRING SMART SORTING & TRACEABILITY TO YOUR WORKFLOWS"
        features={[
          {
            title: "AI-Powered Optical Sorting",
            description: "Our robotic disassembly lines utilise computer vision to identify and separate complex electronic components with 99% precision, eliminating hazardous manual sorting."
          },
          {
            title: "Blockchain Traceability Ledger",
            description: "We deploy Ethereum-based smart contracts to create an immutable digital ledger. This ensures every transaction—from collection to recycling—is recorded, preventing the double-counting of EPR credits."
          },
          {
            title: "Secure Data Destruction",
            description: "Safeguard your corporate intelligence. We offer 100% secure, DoD-standard data wiping, degaussing, and mobile on-site shredding (Data Destruction on Wheels) for complete peace of mind."
          }
        ]}
        imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Circuit board macro with green tech overlay representing optical sorting"
        imageOnRight={true}
      />

      {/* Feature Section 2 */}
      <EwasteFeatureBlock 
        headline="UNIFIED COMPLIANCE IS THE NEW HUB"
        features={[
          {
            title: "Unified EPR Context",
            description: "Digitally plan, manage, and track your Extended Producer Responsibility (EPR) obligations in one unified SaaS portal. Generate automated compliance reports and digital manifests (Form 10) seamlessly."
          },
          {
            title: "Actionable ESG Insights",
            description: "Visualise your environmental impact where you work. Our dashboards calculate real-time carbon offsets, greenhouse gas (GHG) reductions, and landfill diversion rates for your corporate ESG disclosures."
          }
        ]}
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Modern SaaS dashboard showing data analytics and compliance charts"
        imageOnRight={false}
      />

      {/* Feature Section 3 */}
      <EwasteFeatureBlock 
        headline="BUILT FOR CIRCULAR OUTCOMES"
        features={[
          {
            title: "Advanced Metallurgical Extraction",
            description: "Electronic waste is a rich secondary mine. We deploy state-of-the-art hydrometallurgical and bio-metallurgical (bioleaching) processes to recover Gold, Silver, Palladium, Copper, and Aluminium without toxic emissions."
          },
          {
            title: "A Nationwide Deployment Program",
            description: "A robust reverse logistics network connecting formal recyclers with the informal 'Kabadiwala' sector. We provide training, protective gear, and fixed salaries to informal waste pickers, driving inclusive social growth."
          }
        ]}
        imageUrl="https://images.unsplash.com/photo-1611284446314-60a58a0c6314?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Modern recycling deployment showing clean industrial operations"
        imageOnRight={true}
      />
    </div>
  );
}
