"use client";

import { useState } from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

const INDUSTRIES = [
  "Waste Management",
  "E-Waste / Electronics",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Retail & CPG",
  "Real Estate",
  "Other",
];

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–1 000", "1 000+"];

function DeploymentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open("https://wa.me/919871183680", "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-start justify-center py-10 gap-3">
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#4ade80]">
          Submitted
        </span>
        <p className="text-white text-[18px] font-medium leading-snug">
          A deployment specialist will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="df-name" className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#888]">
          Full Name
        </label>
        <input
          id="df-name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className="bg-transparent border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors"
        />
      </div>

      {/* Work Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="df-email" className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#888]">
          Work Email
        </label>
        <input
          id="df-email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className="bg-transparent border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors"
        />
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="df-company" className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#888]">
          Company
        </label>
        <input
          id="df-company"
          name="company"
          type="text"
          required
          placeholder="Acme Corp"
          className="bg-transparent border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors"
        />
      </div>

      {/* Team Size */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="df-size" className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#888]">
          Team Size
        </label>
        <select
          id="df-size"
          name="teamSize"
          required
          defaultValue=""
          className="bg-[#071519] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[14px] text-white focus:outline-none focus:border-[#555] transition-colors appearance-none"
        >
          <option value="" disabled className="text-[#444]">Select…</option>
          {TEAM_SIZES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Industry */}
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="df-industry" className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#888]">
          Industry / Use Case
        </label>
        <select
          id="df-industry"
          name="industry"
          required
          defaultValue=""
          className="bg-[#071519] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[14px] text-white focus:outline-none focus:border-[#555] transition-colors appearance-none"
        >
          <option value="" disabled className="text-[#444]">Select…</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      {/* Challenge */}
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="df-challenge" className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#888]">
          What challenge are you solving?
        </label>
        <textarea
          id="df-challenge"
          name="challenge"
          required
          rows={3}
          placeholder="Describe your commercial challenge or what you'd like to automate…"
          className="bg-transparent border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[14px] text-white placeholder-[#444] focus:outline-none focus:border-[#555] transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-white text-black text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors"
        >
          Talk to a specialist
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default function ResourcesSection() {
  return (
    <section id="demo" className="w-full bg-[#071519]">


      {/* ─── CTA row ─── */}
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto py-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-10">
          {/* Left — heading */}
          <div className="flex-shrink-0 max-w-[420px]">
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#888]">
              Speak to a deployment specialist
            </span>
            <h3 className="text-[32px] sm:text-[42px] font-semibold text-white tracking-[-0.03em] leading-[1.1] mt-4">
              Solve your commercial challenges
            </h3>
            <p className="text-[14px] text-[#666] leading-[1.65] mt-4">
              Tell us what you need to solve to learn how ProWin can be deployed to augment and automate your commercial operations.
            </p>
          </div>

          {/* Right — form */}
          <DeploymentForm />
        </div>
      </div>


    </section>
  );
}
