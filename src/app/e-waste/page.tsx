"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#071519] via-[#071519] to-[#0a2215] pt-[160px] pb-[120px] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[820px]"
        >
          <motion.p
            variants={fadeUp}
            className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-6"
          >
            E-Waste Management — Circular Intelligence
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-[42px] sm:text-[64px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-8"
          >
            Close the Loop on Electronic Waste. Completely.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[600px] mb-10"
          >
            India generates 1.6 million metric tonnes of e-waste annually. ProWin&apos;s circular
            intelligence platform gives producers, recyclers, and compliance teams the tools to
            track, process, and report — end to end, audit to audit.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mb-12">
            {[
              { value: "1.6MT", label: "India e-waste annually" },
              { value: "98%", label: "Material recovery rate" },
              { value: "Form 6", label: "Auto-generated" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-[28px] font-medium text-white tracking-[-0.02em]">
                  {s.value}
                </span>
                <span className="text-[13px] text-white/40 uppercase tracking-[0.1em] font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="/demo"
              className="px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
            >
              Start EPR Compliance
            </a>
            <a
              href="/ewaste"
              className="px-6 py-3 border border-white/30 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              Explore Platform <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Platform Pillars ────────────────────────────────────────────────────────
const pillars = [
  {
    num: "01",
    title: "EPR Compliance Engine",
    body: "Calculate obligations under E-Waste Management Rules 2022. Track fulfilment against CPCB targets in real time. Auto-generate Form 10 before every deadline.",
  },
  {
    num: "02",
    title: "Reverse Logistics Network",
    body: "Pan-India pickup from 27 states. IoT-tracked vehicles, tamper-evident manifests, and real-time chain of custody from dock to certified recycler.",
  },
  {
    num: "03",
    title: "Material Recovery Intelligence",
    body: "Hydrometallurgical recovery of gold, silver, copper, lithium, cobalt, and palladium — with assay-verified mass-balance reports per shipment.",
  },
];

function PlatformPillars() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="flex-1 max-w-[520px]">
            <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
              Platform
            </p>
            <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14">
              The Circular Intelligence Stack
            </h2>
            <div className="space-y-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-6"
                >
                  <div className="flex-none pt-1">
                    <span className="text-[12px] font-mono tracking-[0.1em] text-white/25">
                      {p.num}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                      <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[24px] bg-[#0D2930] border border-white/10 p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
              <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
                EPR Compliance Dashboard
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Obligation Fulfilled", value: "84%" },
                  { label: "Credits Earned", value: "1,240 kg" },
                  { label: "Collection Events", value: "312" },
                  { label: "Form 10 Filed", value: "On time" },
                ].map((k) => (
                  <div
                    key={k.label}
                    className="rounded-xl bg-[#0A1F25] border border-white/10 p-5"
                  >
                    <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em] mb-2">
                      {k.label}
                    </p>
                    <p className="text-[22px] font-medium text-white tracking-[-0.02em]">
                      {k.value}
                    </p>
                  </div>
                ))}
              </div>
              {/* Progress bar */}
              <div className="rounded-xl bg-[#0A1F25] border border-white/10 p-5">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em]">
                    Annual EPR Target Progress
                  </p>
                  <span className="text-[11px] text-white/60 font-mono">84 / 100 MT</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#E8503A]"
                    style={{ width: "84%" }}
                    role="progressbar"
                    aria-valuenow={84}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Lifecycle Features ──────────────────────────────────────────────────────
const lifecycleFeatures = [
  {
    title: "CPCB Audit Trail",
    body: "Every kilogram tracked with a timestamped, immutable record from collection to processing. Satisfies CPCB, SPCB, and Big-4 ESG auditor requirements.",
    checks: ["Immutable chain of custody", "CPCB-ready exports", "Third-party auditor access"],
  },
  {
    title: "Verified EPR Credits",
    body: "Purchase credits directly from CPCB-authorized recyclers — with chain-of-custody documentation that holds up under inspection.",
    checks: ["CPCB-authorized recyclers", "Inspection-grade docs", "Real-time credit balance"],
  },
  {
    title: "BRSR & GRI Export",
    body: "Source-level emissions data and diversion metrics formatted for BRSR, GRI, TCFD, and CDP — no reconciliation work required.",
    checks: ["BRSR-ready reports", "GRI / TCFD / CDP", "No manual reconciliation"],
  },
];

function LifecycleFeatures() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
          Coverage
        </p>
        <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12 max-w-[600px]">
          Every Stage of the E-Waste Lifecycle
        </h2>

        <div className="bg-[#0D2930] h-[320px] rounded-2xl border border-white/10 flex items-center justify-center mb-12">
          <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/30">
            Waste Tracking Dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lifecycleFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl bg-[#0A1F25] border border-white/10 p-8 sm:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
              <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-4">
                {f.title}
              </h3>
              <p className="text-[15px] text-[#a1b3b8] leading-[1.65] mb-6">{f.body}</p>
              <ul className="space-y-2">
                {f.checks.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[13px] text-white/60">
                    <Check className="w-3.5 h-3.5 text-[#E8503A] flex-none" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────
const steps = [
  {
    step: "STEP 01",
    title: "Audit & Inventory",
    body: "We comprehensively inventory your assets and identify recovery potential.",
    result: "SKU registry",
    image: "/waste22.avif"
  },
  {
    step: "STEP 02",
    title: "Secure Collection",
    body: "Pan-India reverse logistics with IoT-tracked pickups and bulk consolidation.",
    result: "Chain of custody",
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    step: "STEP 03",
    title: "Data Destruction",
    body: "DoD-standard wiping, degaussing, or physical shredding—on-site if required.",
    result: "Certificate issued",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    step: "STEP 04",
    title: "Dismantle & Recover",
    body: "Processing at CPCB-authorized facilities to extract maximum material value.",
    result: "Form 6 issued",
    image: "https://images.pexels.com/photos/7681092/pexels-photo-7681092.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    step: "STEP 05",
    title: "Final Documentation",
    body: "One dashboard for CPCB filings, EPR credits, and ESG disclosures.",
    result: "Filing accepted",
    image: "https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

function HowItWorks() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
          Process
        </p>
        <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[560px]">
          How ProWin Closes the EPR Loop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl bg-[#0A1F25] border border-white/10 overflow-hidden flex flex-col group"
            >
              <div className="h-40 w-full relative overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F25] to-transparent" />
              </div>
              <div className="p-8 pt-0 flex flex-col flex-1 relative z-10">
                <p className="text-[11px] font-mono tracking-[0.1em] text-white/25 mb-4">{s.step}</p>
                <h3 className="text-[20px] font-medium text-white tracking-[-0.02em] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#a1b3b8] leading-[1.6] flex-1">{s.body}</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 mb-1">
                    Result
                  </p>
                  <p className="text-[13px] text-white font-medium">{s.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Integrations ─────────────────────────────────────────────────────────────
const integrations = [
  "CPCB Portal",
  "SAP ERP",
  "Salesforce",
  "Oracle",
  "Microsoft Dynamics",
  "Tally",
  "QuickBooks",
  "Zoho",
];

function Integrations() {
  return (
    <section className="w-full bg-[#071519] py-16 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8 text-center">
          Regulatory &amp; System Integrations
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {integrations.map((name) => (
            <div
              key={name}
              className="bg-[#0A1F25] border border-white/10 rounded-full px-5 py-2 text-[13px] text-white/60 font-medium"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <div className="relative bg-[#0D2930] rounded-[24px] border border-white/10 p-12 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
          <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
            Compliance Starts Here
          </p>
          <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[560px]">
            File Your First EPR Report Before the Deadline
          </h2>
          <p className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[520px] mb-10">
            Our compliance team maps your SKU portfolio to CPCB obligations in 48 hours. You&apos;ll
            know exactly what you owe — and exactly how ProWin automates the fulfilment.
          </p>
          <a
           href="https://wa.me/919871183680"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
          >
           Talk to a Compliance Specialist <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Which regulations does ProWin cover for e-waste compliance in India?",
    a: "ProWin covers the E-Waste Management Rules 2022 (CPCB), Plastic Waste Management Rules, Battery Waste Management Rules, and Tyre Waste Management Rules. Our EPR engine calculates producer obligations across all four rule sets from a single SKU registry.",
  },
  {
    q: "How quickly can we get our first EPR compliance report?",
    a: "Our compliance team completes the initial SKU audit and obligation mapping within 48 hours of onboarding. Your first CPCB-ready report — including Form 10 draft and credit reconciliation — is typically ready within 5 business days.",
  },
  {
    q: "What happens if our e-waste collection falls short of the CPCB target?",
    a: "ProWin connects you directly to CPCB-authorized EPR credit marketplace. You can purchase verified credits from registered recyclers with full chain-of-custody documentation, closing any gap in your obligation before the annual filing deadline.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">FAQ</p>
        <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12 max-w-[480px]">
          Common Questions
        </h2>
        <div className="max-w-[760px] space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0A1F25] border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[15px] font-medium text-white pr-8">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 flex-none transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {open === i && (
                <div className="px-8 pb-8">
                  <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EWastePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#071519]">
      <Header solidBg />
      <main>
        <Hero />
        <PlatformPillars />
        <LifecycleFeatures />
        <HowItWorks />
        <Integrations />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
