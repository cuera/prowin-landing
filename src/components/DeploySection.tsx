"use client";

import { useState } from "react";

const categories = [
  {
    label: "People",
    items: [
      {
        title: "EXPERIENCED LEADS",
        body: "Projects run by seasoned commercial strategists with over a decade of experience leading complex software deployments.",
      },
      {
        title: "FORWARD-DEPLOYED ENGINEERS",
        body: "Blending AI and technical expertise, working shoulder-to-shoulder with customer teams to deliver outcomes—no matter what.",
      },
      {
        title: "BEST-IN-CLASS PROCESSES",
        body: "Our team lives commercial operations. We bring deep industry know-how to design the fastest path to lasting impact.",
      },
    ],
  },
  {
    label: "Delivery",
    items: [
      {
        title: "OPERATIONAL ASSESSMENT",
        body: "Before starting work, we deeply analyse your existing processes to grasp the problem space and specify an approach to achieve the desired impact.",
      },
      {
        title: "PROCESS OWNERSHIP",
        body: "Our teams drive the work with your internal teams to ensure long-term success: empowering you to co-shape the solution, co-ship the implementation, and take full responsibility for the impact.",
      },
      {
        title: "EXECUTIVE ALIGNMENT",
        body: "We ensure ongoing stakeholder alignment, provide clear reporting, and proactively surface decisions needed to stay on track—with clearly stated trade-offs and recommendations.",
      },
    ],
  },
  {
    label: "Software",
    items: [
      {
        title: "MODEL YOUR REALITY IN CODE",
        body: "We leverage a custom data model to mirror your process landscape and sync mission-critical data from any system on the planet to unlock data-driven insight.",
      },
      {
        title: "DEPLOY AI-POWERED SOLUTIONS",
        body: "We co-create and tune AI-led process automation to guarantee real-world impact.",
      },
      {
        title: "TRACK OUTCOMES IN REAL-TIME",
        body: "You can only improve what you can measure. Metrics are agreed upon and tracked programmatically from day one.",
      },
    ],
  },
];

export default function DeploySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-black text-white py-24 px-4 sm:px-[67px]">
      <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left column */}
        <div className="flex flex-col gap-8 lg:w-[420px] shrink-0">
          {/* Label */}
          <a
            href="/saas-platform"
            className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaaaaa] hover:text-white transition-colors w-fit"
          >
            DISCOVER PROWIN
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Heading */}
          <h2 className="text-[52px] sm:text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            We deploy,<br />you dominate.
          </h2>

          {/* Body */}
          <p className="text-[15px] text-[#aaaaaa] leading-[1.65] max-w-[380px]">
            We forward-deploy experienced technical and commercial operators
            to solve your organization's toughest commercial challenges.
          </p>
        </div>

        {/* Right column — accordion */}
        <div className="flex-1 flex flex-col">
          {categories.map((cat, i) => (
            <div key={cat.label}>
              {/* Category heading row */}
              <button
                className="w-full text-left"
                onClick={() => setActive(i === active ? i : i)}
              >
                <div className="flex items-center justify-between py-5">
                  <span
                    className={`text-[28px] sm:text-[34px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                      active === i ? "text-white" : "text-[#888888] hover:text-white"
                    }`}
                    onClick={() => setActive(i)}
                  >
                    {cat.label}
                  </span>
                </div>
                {/* Always-visible thin divider under heading */}
                <div className="w-full h-px bg-[#333333]" />
              </button>

              {/* Expanded items */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: active === i ? "600px" : "0px",
                  opacity: active === i ? 1 : 0,
                }}
              >
                {cat.items.map((item, j) => (
                  <div key={item.title}>
                    <div className="py-6 flex flex-col gap-3">
                      <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#888888]">
                        {item.title}
                      </span>
                      <p className="text-[14px] text-[#cccccc] leading-[1.7] max-w-[560px]">
                        {item.body}
                      </p>
                    </div>
                    {j < cat.items.length - 1 && (
                      <div className="w-full h-px bg-[#333333]" />
                    )}
                  </div>
                ))}
                {/* Bottom divider after last item before next category */}
                <div className="w-full h-px bg-[#333333] mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
