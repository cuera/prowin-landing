"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const faqs = [
  {
    q: "Do I need a data science team to use ProWin AI?",
    a: "No. ProWin's pre-built commercial AI models require configuration, not custom code. Our deployment specialists handle the technical setup end-to-end.",
  },
  {
    q: "How is ProWin AI different from general AI tools like ChatGPT?",
    a: "ProWin AI is trained on commercial operations data — transactions, pricing, pipeline activity, inventory. General-purpose models are not calibrated for commercial accuracy or your specific business rules.",
  },
  {
    q: "What does the deployment timeline look like?",
    a: "Week 1: data connectors and environment setup. Week 2: model configuration and baseline. Week 3–4: validation and go-live. Week 5+: continuous optimisation and drift monitoring.",
  },
];

const steps = [
  {
    num: "STEP 01",
    title: "Connect",
    body: "Data connectors for your CRM, ERP, data warehouse, and external signals. Most environments are connected in under 48 hours.",
    result: "Data pipeline live",
  },
  {
    num: "STEP 02",
    title: "Configure",
    body: "Our AI team configures pre-built commercial models to your data structure, business rules, and KPI targets. No coding required.",
    result: "Models calibrated",
  },
  {
    num: "STEP 03",
    title: "Validate",
    body: "A 2-week validation period compares model predictions to actual outcomes. We tune until accuracy meets your threshold.",
    result: "Accuracy confirmed",
  },
  {
    num: "STEP 04",
    title: "Deploy",
    body: "Models go live in your existing stack — pricing engine, CRM alerts, demand feeds. Full monitoring and drift detection from day one.",
    result: "Production AI live",
  },
];

const integrations = [
  "AWS SageMaker",
  "Azure ML",
  "Google Vertex AI",
  "Databricks",
  "dbt",
  "Snowflake",
  "Kafka",
  "Airflow",
];

export default function AIDeploymentPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#071519] min-h-screen">
      <Header solidBg />

      {/* ── Section 1: Hero ── */}
      <section className="bg-gradient-to-br from-[#071519] via-[#071519] to-[#150a35] min-h-[85vh] flex items-center pt-[160px] pb-[120px]">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="max-w-[800px]">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
              AI DEPLOYMENT — COMMERCIAL INTELLIGENCE
            </p>
            <h1 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
              Deploy AI Across Your Commercial Operations — Without Starting Over
            </h1>
            <p className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[620px] mb-10">
              ProWin AI moves artificial intelligence from boardroom presentation
              to production reality. We embed predictive models into pricing,
              sales, procurement, and customer operations — connecting to the
              systems your teams already use.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              {[
                { val: "89%", label: "less data prep time" },
                { val: "4.1×", label: "revenue lift from AI pricing" },
                { val: "< 48 hrs", label: "to first prediction" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] flex-shrink-0" />
                  <span className="text-white font-medium text-[15px]">
                    {s.val}
                  </span>
                  <span className="text-[#a1b3b8] text-[14px]">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919871183680"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors text-center"
              >
                Book a Deployment Call
              </a>
              <a
                href="#capabilities"
                className="px-6 py-3 border border-white/30 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors text-center"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Platform ── */}
      <section id="capabilities" className="bg-[#0A1F25] py-20 sm:py-28">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: numbered features */}
            <div>
              <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14">
                The Commercial AI Stack
              </h2>
              <div className="space-y-12">
                {[
                  {
                    n: "01",
                    title: "Demand Intelligence Engine",
                    body: "Predict what customers will buy, when, and at what price — across every SKU, segment, and geography. Models retrain automatically on fresh data.",
                  },
                  {
                    n: "02",
                    title: "Pricing Optimisation",
                    body: "Real-time pricing recommendations anchored to cost structures, competitor signals, and demand elasticity. Margins protected. Revenue maximised.",
                  },
                  {
                    n: "03",
                    title: "Lead Scoring & Churn Prediction",
                    body: "Score every opportunity and flag every at-risk account 60+ days before they stall or churn. Sales and CS teams act on ranked signals — not gut feel.",
                  },
                ].map((f) => (
                  <div key={f.n} className="flex gap-8">
                    <span className="text-[11px] font-mono text-white/30 tracking-[0.15em] pt-1 flex-shrink-0">
                      {f.n}
                    </span>
                    <div>
                      <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-3">
                        {f.title}
                      </h3>
                      <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">
                        {f.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mock monitor card */}
            <div className="lg:pt-20">
              <div className="bg-[#071519] rounded-[20px] border border-white/10 p-10">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
                  AI MODEL MONITOR
                </p>
                <div className="space-y-5">
                  {[
                    { label: "Demand Forecast", val: "94.2% accuracy" },
                    { label: "Churn Risk", val: "847 accounts flagged" },
                    { label: "Pricing Rec", val: "12,400 active rules" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between py-4 border-b border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                        <span className="text-[15px] text-white font-medium">
                          {row.label}
                        </span>
                      </div>
                      <span className="text-[14px] text-[#a1b3b8]">
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[12px] text-emerald-400 font-mono uppercase tracking-wider">
                      All systems nominal
                    </span>
                  </div>
                  <p className="text-[13px] text-[#a1b3b8]">
                    Last retrained 2 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Use Cases ── */}
      <section className="bg-[#071519] py-20 sm:py-28">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12">
            AI That Ships to Production, Not Slides
          </h2>

          {/* Wide image card */}
          <div className="bg-[#0D2930] h-[320px] rounded-2xl border border-white/10 flex items-center justify-center mb-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">
              AI OPERATIONS DASHBOARD
            </p>
          </div>

          {/* 3 col grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Autonomous Pricing",
                body: "Dynamic pricing models that update hourly based on competitor signals, inventory levels, and demand curves. Margin guardrails built in.",
              },
              {
                title: "Pipeline Intelligence",
                body: "Every deal in your CRM scored, ranked, and annotated with next-best actions. Forecast accuracy improves as models learn your pipeline patterns.",
              },
              {
                title: "Churn Prevention",
                body: "Accounts flagged 60 days before churn with severity scores and recommended interventions. Retention workflows trigger automatically.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-[#0A1F25] border border-white/10 p-8 sm:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] mb-5" />
                <h3 className="text-[24px] sm:text-[28px] font-medium text-white tracking-[-0.02em] mb-4">
                  {c.title}
                </h3>
                <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ── */}
      <section className="bg-[#0A1F25] py-20 sm:py-28">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12">
            From Data to Production AI in 4 Weeks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-[#071519] border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 mb-6">
                    {s.num}
                  </p>
                  <h3 className="text-[24px] font-medium text-white tracking-[-0.02em] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">
                    {s.body}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/[0.08]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                  <span className="text-[13px] text-[#a1b3b8] font-medium">
                    {s.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Integrations ── */}
      <section className="bg-[#071519] py-20 sm:py-28">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
            AI INFRASTRUCTURE INTEGRATIONS
          </p>
          <div className="flex flex-wrap gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="bg-[#0A1F25] border border-white/10 rounded-full px-5 py-2 text-[13px] text-white/60 font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA Card ── */}
      <section className="bg-[#071519] pb-20 sm:pb-28">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="bg-[#0D2930] rounded-[24px] border border-white/10 p-12 sm:p-16">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
              ENTERPRISE AI
            </p>
            <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[640px]">
              From Proof of Concept to Production
            </h2>
            <p className="text-[15px] text-[#a1b3b8] leading-[1.65] max-w-[560px] mb-10">
              Our AI deployment team embeds models into your commercial stack
              with full monitoring, governance, and rollback capability built
              in. No experiments — just results.
            </p>
            <a
             href="https://wa.me/919871183680"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-6 py-3 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
            >
             Talk to an AI Specialist
            </a>

          </div>
        </div>
      </section>

      {/* ── Section 7: FAQ ── */}
      <section className="bg-[#071519] pb-20 sm:pb-28">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto max-w-[800px]">
          <h2 className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#0A1F25] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-[17px] font-medium text-white pr-8">
                    {faq.q}
                  </span>
                  <span className="text-white/40 flex-shrink-0 text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-8 pb-8">
                    <p className="text-[15px] text-[#a1b3b8] leading-[1.65]">
                      {faq.a}
                    </p>
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
