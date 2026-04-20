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
    <section className="relative w-full bg-[#071519] pt-[160px] pb-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/saasss.jpg"
          alt="Platform Hero Background"
          className="w-full h-full object-cover opacity-[0.35] object-center mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071519]/95 via-[#071519]/80 to-[#071519]" />
      </div>

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
            SaaS Platform — Consumer Intelligence
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-[42px] sm:text-[64px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-8"
          >
            Deploy AI-Powered Automation From Pipeline to Lifetime
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[600px] mb-10"
          >
            ProWin&apos;s SaaS platform unifies fragmented commercial data into one intelligence
            layer — enabling teams to predict demand, personalise at scale, and close faster.
            Built for enterprises that operate at the speed of their customers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mb-12">
            {[
              { value: "3.2×", label: "Faster insights" },
              { value: "94%", label: "Prediction accuracy" },
              { value: "60 days", label: "to ROI" },
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
              Get Started
            </a>
            <a
              href="/demo"
              className="px-6 py-3 border border-white/30 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              Request a Demo <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Platform Features ────────────────────────────────────────────────────────
const features = [
  {
    num: "01",
    title: "Consumer Signal Aggregation",
    body: "Unify signals from CRM, web, transactions, and 200+ third-party sources. Every contact enriched in real time — no manual imports, no stale lists.",
  },
  {
    num: "02",
    title: "Predictive Demand Forecasting",
    body: "ML models trained on your 24-month history surface demand shifts 30–90 days in advance. Accuracy improves automatically as more data flows in.",
  },
  {
    num: "03",
    title: "Commercial Workflow Automation",
    body: "Trigger actions in your CRM, ERP, or marketing stack the moment a signal fires. From lead assignment to contract renewal — automated.",
  },
];

function PlatformFeatures() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="flex-1 max-w-[520px]">
            <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
              Platform
            </p>
            <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14">
              The Intelligence Platform
            </h2>
            <div className="space-y-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-6 group cursor-default"
                >
                  <div className="flex-none pt-1">
                    <span className="text-[12px] font-mono tracking-[0.1em] text-white/25 group-hover:text-[#E8503A]/80 transition-colors duration-300">
                      {f.num}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] group-hover:scale-[1.5] transition-transform duration-300" />
                      <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em]">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-[#a1b3b8] leading-[1.65] group-hover:text-white/80 transition-colors duration-300">{f.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right mock dashboard */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[24px] bg-[#0D2930] border border-white/10 p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
              <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
                Live Dashboard
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Pipeline Value", value: "$4.2M" },
                  { label: "Win Rate", value: "38%" },
                  { label: "Avg. Cycle", value: "22 days" },
                ].map((k) => (
                  <div
                    key={k.label}
                    className="rounded-xl bg-[#0A1F25] border border-white/10 p-5"
                  >
                    <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em] mb-2">
                      {k.label}
                    </p>
                    <p className="text-[28px] font-medium text-white tracking-[-0.02em]">
                      {k.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-[#0A1F25] border border-white/10 p-5">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.15em]">
                    Demand Signal Trend
                  </p>
                  <span className="text-[11px] text-[#4ade80] font-mono">↑ +12.4%</span>
                </div>
                <svg viewBox="0 0 300 60" className="w-full h-[60px]" aria-hidden="true">
                  <defs>
                    <linearGradient id="saas-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8503A" />
                      <stop offset="100%" stopColor="#E8503A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,50 40,42 80,38 120,28 160,32 200,18 240,10 300,6 300,60 0,60"
                    fill="url(#saas-grad)"
                    opacity="0.15"
                  />
                  <polyline
                    points="0,50 40,42 80,38 120,28 160,32 200,18 240,10 300,6"
                    fill="none"
                    stroke="#E8503A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Use Cases ───────────────────────────────────────────────────────────────
const useCases = [
  {
    title: "Sales Intelligence",
    body: "Prioritise deals, enrich contacts, and surface next-best actions. Your CRM data + external signals = a pipeline that manages itself.",
    checks: ["Lead scoring", "Contact enrichment", "Next-best-action alerts"],
  },
  {
    title: "Marketing Precision",
    body: "Dynamic segments that update as behaviour changes. Target the right accounts with the right message at the right moment.",
    checks: ["Behavioural segments", "Intent targeting", "Campaign attribution"],
  },
  {
    title: "Revenue Operations",
    body: "One dashboard for pipeline health, forecast accuracy, and revenue attribution. No more manual roll-ups across disconnected tools.",
    checks: ["Forecast accuracy", "Pipeline health", "Revenue attribution"],
  },
];

function UseCases() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
          Applications
        </p>
        <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12 max-w-[600px]">
          Built for Every Commercial Team
        </h2>

        <div className="relative bg-[#0D2930] h-[320px] sm:h-[480px] rounded-2xl border border-white/10 flex items-center justify-center mb-12 overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Live Platform Demo"
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F25] via-[#0A1F25]/20 to-transparent opacity-80" />
          <button className="relative z-10 text-[12px] font-mono uppercase tracking-[0.2em] text-white/80 border border-white/20 px-6 py-3 rounded-full backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group-hover:-translate-y-1">
            View Live Platform Demo <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((u, i) => (
            <motion.div
              key={u.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl bg-[#0A1F25] border border-white/10 p-8 sm:p-10 overflow-hidden group hover:border-[#E8503A]/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent group-hover:from-[#E8503A]/10 pointer-events-none transition-colors duration-500" />
              <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-4">
                {u.title}
              </h3>
              <p className="text-[15px] text-[#a1b3b8] leading-[1.65] mb-6">{u.body}</p>
              <ul className="space-y-2">
                {u.checks.map((c) => (
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
    title: "Connect",
    body: "Plug in your CRM, ERP, web analytics, and data warehouse via pre-built connectors. Most customers are live in under 2 hours.",
    result: "Data flowing",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    step: "STEP 02",
    title: "Enrich",
    body: "Every contact, account, and opportunity is enriched with firmographic, behavioural, and intent data from 200+ external sources.",
    result: "Full profiles",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    step: "STEP 03",
    title: "Predict",
    body: "ML models trained on your data surface demand signals, churn risk, and upsell opportunities — ranked by impact.",
    result: "Ranked signals",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    step: "STEP 04",
    title: "Act",
    body: "Trigger automated workflows: assign leads, alert reps, launch campaigns, or update forecasts — all from a single decision layer.",
    result: "Revenue impact",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function HowItWorks() {
  return (
    <section className="w-full bg-[#071519] py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
          How It Works
        </p>
        <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[560px]">
          From Data to Decision in Minutes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl bg-[#0A1F25] border border-white/10 overflow-hidden flex flex-col group hover:border-[#E8503A]/30 transition-colors duration-500"
            >
              <div className="h-40 w-full relative overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F25] to-transparent" />
              </div>
              <div className="p-8 pt-0 flex flex-col flex-1 relative z-10">
                <p className="text-[11px] font-mono tracking-[0.1em] text-white/25 mb-4 group-hover:text-[#E8503A]/80 transition-colors duration-300">{s.step}</p>
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
  "Salesforce",
  "HubSpot",
  "SAP",
  "Snowflake",
  "Segment",
  "Tableau",
  "BigQuery",
  "Microsoft Azure",
];

function Integrations() {
  return (
    <section className="w-full bg-[#071519] py-16 border-t border-white/[0.06]">
      <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
        <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8 text-center">
          Connects With Your Stack
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
            Ready to Deploy
          </p>
          <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[560px]">
            See Your Commercial Data Come Alive
          </h2>
          <p className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[520px] mb-10">
            Schedule a 30-minute session with a ProWin deployment specialist. We map the platform
            to your exact data sources, team structure, and commercial goals.
          </p>
          <a
            href="https://wa.me/919871183680"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
          >
            Book a Deployment Call <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does it take to deploy ProWin on our existing stack?",
    a: "Most customers complete initial setup in under 2 hours using pre-built connectors for Salesforce, HubSpot, SAP, and Snowflake. Full enrichment and model training typically takes 48–72 hours once data starts flowing.",
  },
  {
    q: "How does ProWin's predictive accuracy improve over time?",
    a: "Our ML models are trained on your historical data from day one and retrain continuously as new signals arrive. Customers typically see prediction accuracy improve by 8–15% within the first 90 days as the model adapts to your specific commercial patterns.",
  },
  {
    q: "Is my commercial data secure on the ProWin platform?",
    a: "Yes. ProWin is SOC 2 Type II certified, GDPR compliant, and operates on ISO 27001 infrastructure. All data is encrypted in transit and at rest. Customer data is never used to train models for other customers.",
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
export default function SaasPlatformPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#071519]">
      <Header solidBg />
      <main>
        <Hero />
        <PlatformFeatures />
        <UseCases />
        <HowItWorks />
        <Integrations />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
