"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const INTERVAL_MS = 4000;

const tabs = [
  {
    label: "E-Waste",
    image: "/e waste.avif",
    columns: [
      {
        heading: "Track every asset",
        body: "Map the full lifecycle of e-waste items — from collection to certified disposal — with a live, auditable trail that satisfies regulators and clients alike.",
      },
      {
        heading: "97% sorting accuracy",
        body: "AI-powered robotic sorters identify and categorise devices at speed, reducing manual handling and maximising material recovery value.",
      },
      {
        heading: "ESG reporting, automated",
        body: "Generate carbon credit reports, compliance certificates, and sustainability dashboards automatically from real operational data.",
      },
    ],
  },
  {
    label: "Customer Success",
    image: "/crm.avif",
    columns: [
      {
        heading: "Unrivalled health score accuracy",
        body: "Use analytics along with input from humans and AI to deploy adaptable scoring that gauges whether customers are truly thriving or failing.",
      },
      {
        heading: "Captures every touchpoint",
        body: "Automatically gather transcripts, emails, tickets and every other interaction — allowing you to focus on execution, not admin.",
      },
      {
        heading: "Deep CRM integrations",
        body: "Use together with all major CRMs to ensure you get the full picture and move in sync with your entire organisation.",
      },
    ],
  },
  {
    label: "Sales & GTM",
    image: "/erp.avif",
    columns: [
      {
        heading: "Built for a lifetime",
        body: "For teams ready to embrace the future. Manage every commercial process in a single high-context source of truth for humans and AI alike.",
      },
      {
        heading: "Effortless handovers",
        body: "Pass the baton with full context. AI agents compile history, decisions, owners, and documents so the next team can start at full speed.",
      },
      {
        heading: "Agent Collaboration",
        body: "Infinite possibilities to deploy agents that enrich every record with firmographics, look at intent, product usage, and buying signals to loop you in.",
      },
    ],
  },
  {
    label: "Professional Services",
    image: "/edtech.avif",
    columns: [
      {
        heading: "Preempt risk",
        body: "Know in advance whether work will turn a profit. Create projections and use AI analysis to identify client problems before they become your problem.",
      },
      {
        heading: "Unmatched visibility",
        body: "Influence GTM direction by going beyond analysis of estimated vs actual effort and start analysing what opportunities deliver returns over the long run.",
      },
      {
        heading: "Autonomous Delivery",
        body: "Automatically generate projects from SOWs, send weekly summaries, and analyze risks in real time with powerful AI Co-Pilot capabilities.",
      },
    ],
  },
  {
    label: "Custom Build",
    image: "/edu.avif",
    columns: [
      {
        heading: "Represent your reality",
        body: "Create your commercial digital twin by mapping real world items — like invoices, objectives and products — and defining their relation to each other.",
      },
      {
        heading: "Tailor your interface",
        body: "An entirely personalised home consisting of custom views ensures the right people are always looking at the right things — with absolutely no noise.",
      },
      {
        heading: "Mobilise your data",
        body: "With projects, documents and comms plugged directly into real-time commercial data, teams work faster, spot risks earlier, and deliver with accuracy.",
      },
    ],
  },
];

export default function Applications() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [displayTab, setDisplayTab] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const switchTo = useCallback((i: number) => {
    setVisible(false);
    setTimeout(() => {
      setDisplayTab(i);
      setActive(i);
      setVisible(true);
    }, 280);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % tabs.length;
        setVisible(false);
        setTimeout(() => {
          setDisplayTab(next);
          setActive(next);
          setVisible(true);
        }, 280);
        return prev;
      });
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleTabClick = (i: number) => {
    switchTo(i);
    startTimer();
  };

  const tab = tabs[displayTab];

  return (
    <section id="applications" className="flex flex-col w-full items-center bg-[#071519] py-24">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px]">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <h2 className="text-[42px] sm:text-[56px] leading-tight font-medium text-white tracking-[-0.03em]">
            Applications
          </h2>

          {/* Tab pills */}
          <div className="flex flex-wrap gap-2 sm:mt-3">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => handleTabClick(i)}
                className={`px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase border rounded-sm transition-all duration-200 ${
                  active === i
                    ? "border-white text-white bg-[#071519]"
                    : "border-[#d1d1d1] text-[#888] bg-[#071519] hover:border-white hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated wrapper */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(18px)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          {/* Hero image */}
          <div
            className="w-full rounded-xl overflow-hidden bg-[#0d0d0d]"
            style={{ aspectRatio: "16/7" }}
          >
            <img
              src={tab.image}
              alt={tab.label}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-10">
            {tab.columns.map((col, i) => (
              <div
                key={col.heading}
                className={`flex flex-col gap-4 py-2 px-6 ${
                  i !== 0 ? "border-l border-[#2a3a3f]" : "pl-0"
                }`}
              >
                <h3 className="text-[22px] font-semibold text-white leading-snug tracking-[-0.02em]">
                  {col.heading}
                </h3>
                <p className="text-[14px] text-[#7a9ba3] leading-[1.7]">
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
