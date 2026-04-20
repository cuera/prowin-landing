"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

export default function ERPImplementationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      num: "01",
      title: "Rapid Implementation Framework",
      body: "Pre-configured modules for manufacturing, retail, distribution, and services. Our implementation methodology eliminates the 18-month timelines that kill ERP projects.",
    },
    {
      num: "02",
      title: "Supply Chain Intelligence",
      body: "Predict supply disruptions 30–60 days ahead. Automate reorder triggers based on demand signals, lead times, and buffer stock targets — not static reorder points.",
    },
    {
      num: "03",
      title: "Financial Performance Analytics",
      body: "Real-time P&L, cash flow forecasting, and variance analysis across entities, cost centres, and business units. Board-ready reporting in one click.",
    },
  ];

  const steps = [
    {
      step: "STEP 01",
      title: "Assess",
      body: "We map your current systems, data flows, and operational pain points. A detailed gap analysis and implementation blueprint delivered in week 1.",
      result: "Blueprint signed off",
    },
    {
      step: "STEP 02",
      title: "Configure",
      body: "Pre-built industry modules configured to your business rules, org structure, and reporting requirements. No custom code for standard processes.",
      result: "System configured",
    },
    {
      step: "STEP 03",
      title: "Migrate",
      body: "Structured data migration from legacy systems with full validation, parallel running, and rollback capability. Zero data loss guaranteed.",
      result: "Data migrated",
    },
    {
      step: "STEP 04",
      title: "Go Live",
      body: "Hypercare support for the first 90 days post-launch. Your team trained, your processes running, your KPIs tracked from day one.",
      result: "Operations live",
    },
  ];

  const faqs = [
    {
      q: "How is ProWin ERP different from SAP or Oracle?",
      a: "ProWin is not a replacement ERP. We are an intelligence and implementation layer — we deploy alongside your core ERP to add predictive capabilities and can also implement SAP, Oracle, or Dynamics as your system of record.",
    },
    {
      q: "What industries do you specialise in?",
      a: "Manufacturing, retail and distribution, pharmaceuticals, logistics, and professional services — with pre-built module libraries and reference data for each vertical.",
    },
    {
      q: "What does post-go-live support look like?",
      a: "ProWin's managed services team provides 24/7 monitoring, continuous optimisation, and expansion planning. We measure ourselves against your KPIs — not ticket resolution times.",
    },
  ];

  const pills = [
    "SAP S/4HANA",
    "Oracle ERP Cloud",
    "Microsoft Dynamics 365",
    "NetSuite",
    "Odoo",
    "Tally Prime",
    "QuickBooks Enterprise",
    "Zoho ERP",
  ];

  return (
    <div className="bg-[#071519] min-h-screen">
      <Header solidBg />

      {/* Hero */}
      <section className="min-h-[85vh] pt-[160px] pb-[120px] bg-gradient-to-br from-[#071519] via-[#071519] to-[#071519] flex items-center">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.span {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 block">
            ERP IMPLEMENTATION — ENTERPRISE OPERATIONS
          </motion.span>
          <motion.h1
            {...fadeUp(0.05)}
            className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-8"
          >
            ERP That Deploys in Weeks, Delivers ROI in Months
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[680px] mb-12">
            ProWin ERP brings predictive intelligence to enterprise operations — from supply chain and procurement to finance and production planning. Pre-configured modules for your industry. A deployment team that treats your go-live date as a commitment, not a target.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-8 mb-12">
            {[
              "68% faster implementation vs traditional ERP",
              "3.7× faster reporting cycles",
              "99.9% uptime SLA",
            ].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                <span className="text-[14px] text-white/70 font-medium">{stat}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-4">
            <a href="/demo" className="px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors">
              Plan Your ERP
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 border border-white/30 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors"
            >
              View Implementation Approach
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-20 sm:py-28 bg-[#0A1F25]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2 {...fadeUp(0)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14">
                The Enterprise Operations Platform
              </motion.h2>
              <div className="space-y-10">
                {features.map((f, i) => (
                  <motion.div key={f.num} {...fadeUp(i * 0.08)} className="border-t border-white/10 pt-8">
                    <span className="text-[11px] font-mono tracking-[0.15em] text-white/25 uppercase block mb-3">{f.num}</span>
                    <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-3">{f.title}</h3>
                    <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">{f.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...fadeUp(0.1)} className="lg:sticky lg:top-24">
              <div className="bg-[#071519] rounded-[20px] border border-white/10 p-10">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8 block">ERP Operations Centre</p>
                <div className="space-y-6">
                  {[
                    { label: "Supply Chain Health", value: "3 disruptions flagged", dot: "#E8503A" },
                    { label: "Financial Close", value: "2.1 days vs 8-day baseline", dot: "#22c55e" },
                    { label: "Production Efficiency", value: "+34% output", dot: "#22c55e" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-4 border-b border-white/5">
                      <span className="text-[14px] text-white/60">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] text-white font-medium">{item.value}</span>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.dot }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-[120px] rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                  <span className="text-[11px] font-mono text-white/20 uppercase tracking-wider">Operations timeline chart</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-[#071519]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.h2 {...fadeUp(0)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[700px]">
            Intelligence Embedded Across Every Operation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeUp(0)} className="md:col-span-2 lg:col-span-1 bg-[#0D2930] h-[320px] rounded-2xl border border-white/10 flex items-center justify-center">
              <span className="text-[11px] font-mono text-white/20 uppercase tracking-wider text-center px-4">ERP OPERATIONS<br />DASHBOARD</span>
            </motion.div>

            {[
              {
                title: "Procurement Optimisation",
                body: "Identify savings opportunities across supplier contracts, spot pricing, and payment terms. Automated approval workflows eliminate the purchase order backlog.",
              },
              {
                title: "Production Planning",
                body: "Capacity planning driven by demand signals — not static production calendars. Downtime prediction flags maintenance windows before equipment fails.",
              },
              {
                title: "Custom Module Development",
                body: "Every business is different. ProWin builds bespoke ERP modules for the processes your off-the-shelf vendor couldn't handle.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08 + 0.05)} className="rounded-2xl bg-[#0A1F25] border border-white/10 p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
                <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-4">{item.title}</h3>
                <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-[#0A1F25]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.span {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 block">
            HOW IT WORKS
          </motion.span>
          <motion.h2 {...fadeUp(0.04)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[700px]">
            Our Implementation Methodology
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-[#0A1F25] border border-white/10 p-8 sm:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
                <span className="text-[11px] font-mono tracking-[0.15em] text-white/25 uppercase block mb-6">{s.step}</span>
                <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-4">{s.title}</h3>
                <p className="text-[15px] text-[#a1b3b8] leading-[1.65] mb-6">{s.body}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                  <span className="text-[11px] font-mono tracking-[0.15em] text-[#E8503A] font-medium uppercase">Result: {s.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 sm:py-28 bg-[#071519]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.span {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 block">
            ERP & ENTERPRISE SYSTEM INTEGRATIONS
          </motion.span>
          <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-3 mt-8">
            {pills.map((pill) => (
              <span key={pill} className="bg-[#0A1F25] border border-white/10 rounded-full px-5 py-2.5 text-[13px] text-white/60 font-medium">
                {pill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-20 sm:py-28 bg-[#071519]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.div {...fadeUp(0)} className="bg-[#0D2930] rounded-[24px] p-12 sm:p-16 border border-white/10">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 block">ENTERPRISE OPERATIONS</span>
            <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[700px]">
              ERP That Evolves With Your Business
            </h2>
            <p className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[580px] mb-10">
              ProWin's modular approach means you deploy what you need today — and expand as your operations grow. No big-bang implementations. No shelfware. Just working software.
            </p>
            <a
             href="https://wa.me/919871183680"
             target="_blank"
             rel="noopener noreferrer"
             className="px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors inline-block"
            >
             Talk to an ERP Specialist
            </a>

          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-[#071519]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.h2 {...fadeUp(0)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14">
            Common Questions
          </motion.h2>
          <div className="space-y-0 max-w-[800px]">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)} className="border-t border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-8 text-left"
                >
                  <span className="text-[17px] font-medium text-white leading-snug">{faq.q}</span>
                  <span className="text-white/40 text-xl mt-0.5 shrink-0">{openIndex === i ? "−" : "+"}</span>
                </button>
                {openIndex === i && (
                  <p className="text-[15px] text-[#a1b3b8] leading-[1.65] pb-8">{faq.a}</p>
                )}
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
