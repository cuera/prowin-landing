"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Audit",
    description:
      "Inventory SKUs, volumes, and EPR obligations under E-Waste, Plastic, Battery, and Tyre Waste Management Rules.",
    artifact: "SKU registry",
  },
  {
    number: "02",
    label: "Collect",
    description:
      "Pan-India reverse logistics with IoT-tracked pickups, doorstep collection, and bulk consolidation.",
    artifact: "Chain of custody",
  },
  {
    number: "03",
    label: "Process",
    description:
      "CPCB-authorized recyclers recover gold, copper, lithium, and cobalt under audit-grade conditions.",
    artifact: "Form 6 issued",
  },
  {
    number: "04",
    label: "Report",
    description:
      "One dashboard for CPCB filings, EPR credits, ESG disclosures, and audit-ready data exports.",
    artifact: "CPCB filing accepted",
  },
];

export default function ClosedLoop() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-labelledby="closed-loop-heading"
      className="w-full bg-[var(--color-bg-dark)] py-20 sm:py-28 lg:py-36 border-t border-[var(--color-border-light)]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-[67px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-medium font-mono uppercase tracking-[0.2em] text-[var(--color-text-white-40)] mb-4">
              How it works
            </p>
            <h2
              id="closed-loop-heading"
              className="text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.05] font-medium tracking-[-0.03em] text-white"
            >
              How ProWin closes the EPR loop.
            </h2>
          </div>
          <p className="max-w-[460px] text-[16px] sm:text-[18px] leading-[1.6] text-[var(--color-text-secondary)] lg:mb-2">
            From the moment waste leaves your dock to the moment your CPCB filing
            is accepted &mdash; one platform, one chain of custody, one set of
            receipts.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[var(--color-bg-card-dark)] border border-[var(--color-border-light)] hover:border-[var(--color-border-dark)] transition-all duration-300 min-h-[320px] overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none group-hover:from-white/[0.06] transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[12px] font-mono tracking-[0.1em] text-[var(--color-text-white-25)] group-hover:text-[var(--color-text-white-40)] transition-colors">
                    STEP {step.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-[24px] sm:text-[28px] font-medium uppercase tracking-[-0.02em] text-white mb-4">
                  {step.label}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-white-60)] transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10 mt-12 pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-white-40)]">
                  Result
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium">
                  {step.artifact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
