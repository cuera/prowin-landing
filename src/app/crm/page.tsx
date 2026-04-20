"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── DATA ───────────────────────────────────────────────────────────────────

const features = [
  {
    num: "01",
    title: "Contact Intelligence Enrichment",
    body: "Every CRM record enriched with firmographic, technographic, and intent data from 200+ sources — updated continuously, not just at import.",
  },
  {
    num: "02",
    title: "Deal Scoring & Prioritisation",
    body: "ML models score every open opportunity by close probability, velocity, and revenue risk. Reps focus on deals most likely to close this quarter.",
  },
  {
    num: "03",
    title: "Revenue Forecasting",
    body: "Account-level forecasts with confidence intervals derived from real pipeline behaviour — not manager roll-ups. Accuracy improves each cycle.",
  },
];

const useCases = [
  {
    title: "Sales Acceleration",
    body: "Prioritise the right accounts, with the right message, at the right moment. Signal-triggered outreach replaces gut-feel prospecting.",
  },
  {
    title: "Territory & Quota Planning",
    body: "Model optimal territory assignments and quota structures based on market potential, historical close rates, and rep capacity — not last year's numbers.",
  },
  {
    title: "Multi-CRM Unification",
    body: "Running Salesforce and HubSpot across divisions? ProWin unifies pipeline data across CRM instances into a single revenue intelligence layer.",
  },
];

const steps = [
  {
    num: "STEP 01",
    title: "Connect",
    body: "Native connectors for Salesforce, HubSpot, Dynamics, Pipedrive, Zoho, and custom CRMs. Live in under 5 minutes.",
    result: "CRM synced",
    image: "/erp.avif",
  },
  {
    num: "STEP 02",
    title: "Enrich",
    body: "Every contact and account enriched with firmographic, intent, and behavioural signals from 200+ external data sources.",
    result: "Full profiles",
    image: "/edtech.avif",
  },
  {
    num: "STEP 03",
    title: "Score",
    body: "ML models rank every deal by close probability, velocity risk, and upsell potential. Updated daily from live CRM activity.",
    result: "Ranked pipeline",
    image: "/ai auto.avif",
  },
  {
    num: "STEP 04",
    title: "Act",
    body: "Automated alerts, workflow triggers, and forecast updates fire in your CRM the moment a signal changes. No manual review required.",
    result: "Revenue impact",
    image: "/crm.avif",
  },
];

const faqs = [
  {
    q: "Will connecting ProWin break my existing CRM configuration?",
    a: "No. ProWin connects via your CRM's native API in read-enrich-write mode. We never modify your existing object structure, workflows, or automation rules.",
  },
  {
    q: "How quickly will my sales team see value?",
    a: "Most customers see meaningful pipeline intelligence — enriched contacts, scored deals, and updated forecasts — within 2–3 weeks of connecting their CRM.",
  },
  {
    q: "Can scoring models be customised for our sales process?",
    a: "Yes. Models are fully configurable by industry, deal size, product line, sales stage, and geography. Our team tunes them during onboarding.",
  },
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Microsoft Dynamics",
  "Pipedrive",
  "Zoho CRM",
  "LinkedIn Sales Nav",
  "Clearbit",
  "ZoomInfo",
  "Apollo",
  "Gong",
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function CRMPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#071519] min-h-screen">
      <Header solidBg />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#071519] min-h-[90vh] flex items-center pt-[160px] pb-[120px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/crm.avif"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-[0.28] object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071519]/95 via-[#071519]/75 to-[#071519]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="max-w-[860px]">
            <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/40 mb-6">
              CRM INTELLIGENCE — SALES ACCELERATION
            </motion.p>
            <motion.h1
              {...fadeUp(0.06)}
              className="text-[42px] sm:text-[64px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6"
            >
              Your CRM Holds More Intelligence Than Your CRM Will Ever Tell You
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="text-[16px] text-[#a1b3b8] leading-[1.7] max-w-[660px] mb-10">
              ProWin CRM Intelligence layers predictive AI onto your existing CRM — enriching every contact, scoring every deal, and surfacing the insights your sales team can actually act on. No rip-and-replace. No new platform to learn.
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-6 mb-14">
              {[
                { val: "41%", label: "increase in win rates" },
                { val: "2.3×", label: "pipeline velocity in 90 days" },
                { val: "< 5 min", label: "to connect your CRM" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] flex-shrink-0" />
                  <span className="text-white font-semibold text-[15px]">{s.val}</span>
                  <span className="text-[#a1b3b8] text-[14px]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919871183680"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors text-center"
              >
                See It Live
              </a>
              <a
                href="#platform"
                className="px-7 py-3.5 border border-white/25 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-2"
              >
                Explore Platform <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE LAYER ───────────────────────────────────────────── */}
      <section id="platform" className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                01 — THE PLATFORM
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14">
                The CRM Intelligence Layer
              </motion.h2>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div key={f.num} {...fadeUp(i * 0.06)} className="flex gap-5 group">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[11px] font-mono text-white/30 group-hover:bg-[#E8503A] group-hover:border-[#E8503A] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(232,80,58,0.4)] transition-all duration-300">
                      {f.num}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-white mb-1.5">{f.title}</h3>
                      <p className="text-[13px] text-[#7a9ba3] leading-[1.7] max-w-[480px]">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...fadeUp(0.1)} className="lg:pt-16">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 h-[460px] flex flex-col justify-end group bg-[#071519]">
                <div className="absolute inset-0 bg-[#E8503A]/5 opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8503A]/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative p-8 w-full z-10 flex flex-col h-full">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5 flex-shrink-0">
                    LIVE PIPELINE HEALTH MONITOR
                  </p>
                  
                  <div className="relative flex-1 overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)" }}>
                    <motion.div 
                      className="space-y-0"
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                      {[ 
                        { label: "Pipeline Health", val: "87 deals at risk", status: "pending" },
                        { label: "Forecast Accuracy", val: "94.1% vs actuals", status: "success" },
                        { label: "Win Rate Trend", val: "+41% this quarter", status: "success" },
                        { label: "Data Enrichment", val: "2.4k contacts updated", status: "active" },
                        { label: "Signal Alerts", val: "14 high-intent signals", status: "active" },
                        { label: "Churn Risk", val: "3 accounts flagged", status: "pending" },
                        { label: "Pipeline Velocity", val: "22 days avg", status: "success" },
                        { label: "Deal Scoring", val: "45 deals upgraded", status: "success" },
                        
                        { label: "Pipeline Health", val: "87 deals at risk", status: "pending" },
                        { label: "Forecast Accuracy", val: "94.1% vs actuals", status: "success" },
                        { label: "Win Rate Trend", val: "+41% this quarter", status: "success" },
                        { label: "Data Enrichment", val: "2.4k contacts updated", status: "active" },
                        { label: "Signal Alerts", val: "14 high-intent signals", status: "active" },
                        { label: "Churn Risk", val: "3 accounts flagged", status: "pending" },
                        { label: "Pipeline Velocity", val: "22 days avg", status: "success" },
                        { label: "Deal Scoring", val: "45 deals upgraded", status: "success" },
                      ].map((row, idx) => (
                        <div key={idx} className="flex items-center justify-between py-4 border-b border-white/[0.05]">
                          <span className="text-[13px] text-white/70">{row.label}</span>
                          <span className={`text-[14px] font-semibold ${row.status === "pending" ? "text-amber-400" : row.status === "success" ? "text-emerald-400" : "text-white"}`}>
                            {row.val}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-5 pt-4 flex-shrink-0">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                       <span className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">Signals Synced</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            02 — USE CASES
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[700px]">
            Intelligence Across the Entire Revenue Cycle
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeUp(0)} className="md:col-span-2 lg:col-span-1 bg-[#0A1F25] h-full min-h-[320px] rounded-2xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#E8503A]/5 to-transparent z-0 pointer-events-none" />
               <div className="absolute inset-0 pointer-events-none mix-blend-luminosity opacity-40">
                 <img src="/crm.avif" alt="CRM Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="absolute inset-0 bg-[#0A1F25]/80" />
               <div className="relative z-10 px-6 text-center">
                 <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider block mb-2">REVENUE IMPACT</span>
                 <p className="text-[28px] font-semibold text-white tracking-tight">Full Lifecycle</p>
               </div>
            </motion.div>

            {useCases.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08 + 0.05)} className="rounded-2xl bg-[#0A1F25] border border-white/[0.08] p-8 sm:p-10 relative overflow-hidden group hover:border-[#E8503A]/20 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] group-hover:from-[#E8503A]/10 to-transparent pointer-events-none transition-colors duration-500 rounded-full blur-2xl" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] mb-5 group-hover:scale-[1.75] transition-transform duration-300" />
                <h3 className="text-[22px] sm:text-[24px] font-medium text-white tracking-[-0.02em] mb-4 group-hover:text-white/90">{item.title}</h3>
                <p className="text-[14px] text-[#7a9ba3] leading-[1.65] group-hover:text-white/80 transition-colors duration-300">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 block">
            03 — HOW IT WORKS
          </motion.p>
          <motion.h2 {...fadeUp(0.04)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[700px]">
            Pipeline Intelligence in Four Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i * 0.1)}
                className="relative rounded-2xl bg-[#071519] border border-white/10 overflow-hidden flex flex-col group hover:border-[#E8503A]/25 transition-colors duration-500"
              >
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071519] to-transparent pointer-events-none" />
                </div>
                <div className="p-7 flex flex-col flex-1 relative z-10">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-white/25 mb-4 group-hover:text-[#E8503A]/70 transition-colors duration-300">
                    {s.num}
                  </p>
                  <h3 className="text-[19px] font-semibold text-white tracking-[-0.02em] mb-3 leading-snug">{s.title}</h3>
                  <p className="text-[13px] text-[#7a9ba3] leading-[1.7] flex-1">{s.body}</p>
                  <div className="flex items-center gap-2 mt-7 pt-5 border-t border-white/[0.07]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                    <span className="text-[13px] text-white font-semibold">{s.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-16 sm:py-20 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
            NATIVE CRM & DATA INTEGRATIONS
          </p>
          <div className="relative overflow-hidden flex w-full" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)' }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="flex gap-4 w-max"
            >
              {[...integrations, ...integrations, ...integrations, ...integrations].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="bg-[#0A1F25] border border-white/[0.08] rounded-full px-6 py-2.5 text-[13px] text-white/55 font-medium hover:border-[#E8503A]/30 hover:bg-[#E8503A]/5 hover:text-white/90 transition-all duration-300 cursor-default flex-shrink-0"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="relative bg-[#0A1F25] rounded-[24px] border border-white/10 p-12 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8503A]/5 rounded-full blur-3xl pointer-events-none" />
            <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
              CRM INTELLIGENCE
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[700px]">
              Make Your CRM Work 10× Harder
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] max-w-[580px] mb-10">
              You've already invested in a CRM. ProWin adds the intelligence layer your vendor never built — without changing your processes, your data model, or your team's workflow.
            </motion.p>
            <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row gap-4">
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
              >
                Start Your CRM Integration
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#071519] pb-20 sm:pb-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto pt-16">
          <motion.h2 {...fadeUp(0)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12 max-w-[480px]">
            Common Questions
          </motion.h2>
          <div className="space-y-3 max-w-[860px]">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#0A1F25] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[16px] font-medium text-white pr-8 leading-snug">
                    {faq.q}
                  </span>
                  <span className="text-white/30 flex-shrink-0 text-xl w-6 text-center">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-7 pb-7">
                    <p className="text-[14px] text-[#a1b3b8] leading-[1.75]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
