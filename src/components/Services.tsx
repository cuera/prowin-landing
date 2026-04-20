"use client";

import React, { useState, useEffect, useCallback } from "react";

interface ServiceTab {
  label: string;
  title: string;
  description: string;
  quote: string;
  person: string;
  role: string;
  image: string;
}

const TABS: ServiceTab[] = [
  {
    label: "E-WASTE",
    title: "E-Waste",
    description:
      "Transform electronic waste into opportunity. ProWin empowers you to track, process and certify e-waste disposal at scale — turning compliance into competitive advantage with full audit trails.",
    quote:
      '"We went from manually tracking 200 devices a month to processing over 5,000 with full certification — ProWin made it seamless."',
    person: "Priya Sharma",
    role: "HEAD OF SUSTAINABILITY",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2340&auto=format&fit=crop",
  },
  {
    label: "CUSTOMER SUCCESS",
    title: "Customer Success",
    description:
      "Proactively drive customer outcomes with contextual intelligence. ProWin is a system of action that empowers you to anticipate needs, reduce churn, and scale personalised experiences.",
    quote:
      '"I would say we were 80/20 reactive — and now I can confidently state we\'re 70% proactive with ProWin."',
    person: "Adam Cooney",
    role: "VICE PRESIDENT OF CUSTOMER SUCCESS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2340&auto=format&fit=crop",
  },
  {
    label: "SALES & GTM",
    title: "Sales & GTM",
    description:
      "Accelerate your go-to-market with data-driven insights. ProWin enables sales teams to identify high-value opportunities, personalise outreach, and close deals faster with AI-powered intelligence.",
    quote:
      '"ProWin gave us visibility into our entire pipeline — we\'ve increased conversion rates by 35% in six months."',
    person: "Marcus Chen",
    role: "DIRECTOR OF REVENUE OPERATIONS",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2340&auto=format&fit=crop",
  },
  {
    label: "PROFESSIONAL SERVICES",
    title: "Professional Services",
    description:
      "Grow and retain your client base by delivering exceptional service. ProWin empowers you to optimise staffing and task allocations, run collaborative client journeys and report on value delivery at scale.",
    quote:
      '"ProWin is the utility knife by which we\'re able to interact with every single customer and provide them with a deep sense of value."',
    person: "Brandon Ramsey",
    role: "VICE PRESIDENT OF CUSTOMER SUCCESS",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop",
  },
  {
    label: "IT & INFRA",
    title: "IT & Infrastructure",
    description:
      "Managed service providers deliver value by staying ahead of their customers. ProWin empowers you to anticipate and serve customer needs at scale and deploy exceptional digital experiences.",
    quote:
      '"Partnership with ProWin has enabled us to get the customer data and the visibility we need to actually scale the customer experience at all times."',
    person: "Fredrik Sidmar",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop",
  },
  {
    label: "SUSTAINABILITY",
    title: "Sustainability",
    description:
      "Continuously unlock the environmental value your stakeholders need. ProWin empowers you to define and track sustainability objectives, identify impact opportunities, and report on ESG outcomes.",
    quote:
      '"We have grown from tracking 40 sites to just north of 280 locations that are managed digitally through ProWin."',
    person: "William Pinho",
    role: "DIRECTOR OF DIGITAL SUSTAINABILITY STRATEGY",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2340&auto=format&fit=crop",
  },
];

const AUTO_INTERVAL = 6000;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const switchTab = useCallback(
    (newIndex: number) => {
      if (newIndex === displayIndex) return;
      setIsFading(true);
      setTimeout(() => {
        setDisplayIndex(newIndex);
        setActiveIndex(newIndex);
        setIsFading(false);
      }, 350);
    },
    [displayIndex]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % TABS.length;
      switchTab(next);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, switchTab]);

  const current = TABS[displayIndex];

  return (
    <section
      id="services"
      className="bg-[#071519] py-20 sm:py-28 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        {/* ─── Header ─── */}
        <div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14 transition-opacity duration-350"
          style={{ opacity: isFading ? 0 : 1 }}
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50 mb-3">
              PROWIN FOR
            </p>
            <h2 className="text-[38px] sm:text-[52px] lg:text-[60px] font-medium text-white tracking-[-0.03em] leading-[1.05] flex items-center gap-3">
              {current.title}
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-black/20 rounded-full flex-shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="sm:w-4 sm:h-4"
                >
                  <path
                    d="M1 13L13 1M13 1H3M13 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-white/60 max-w-[420px] lg:pt-6">
            {current.description}
          </p>
        </div>

        {/* ─── Tabs ─── */}
        <div className="flex flex-wrap gap-2 mb-0">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => switchTab(i)}
              className={`px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase border rounded-sm transition-all duration-200 ${
                activeIndex === i
                  ? "border-black text-white bg-[#071519]"
                  : "border-[#d1d1d1] text-[#888] bg-[#071519] hover:border-black hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── Hero Image ─── */}
        <div
          className="relative w-full aspect-[16/9] sm:aspect-[16/8] overflow-hidden mt-6 rounded-xl transition-opacity duration-350"
          style={{ opacity: isFading ? 0 : 1 }}
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Quote overlay */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex items-end justify-between gap-6">
            <div className="max-w-[520px]">
              <p className="text-white text-[15px] sm:text-[18px] font-semibold leading-[1.45] mb-4">
                {current.quote}
              </p>
              <p className="text-white text-[14px] sm:text-[16px] font-medium">
                {current.person}
              </p>
              <p className="text-white/60 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase mt-1">
                {current.role}
              </p>
            </div>

            {/* Watch button */}
            <button className="hidden sm:flex items-center gap-2 text-white text-[12px] font-medium tracking-[0.1em] uppercase hover:opacity-80 transition-opacity flex-shrink-0">
              <span className="w-0 h-0 border-l-[8px] border-l-white border-y-[5px] border-y-transparent" />
              WATCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
