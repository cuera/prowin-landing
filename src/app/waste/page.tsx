"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Recycle,
  Cpu,
  Link2,
  MapPin,
  ShieldCheck,
  FileCheck,
  Stethoscope,
  Handshake,
  Sprout,
  Globe,
  Activity,
  Scale,
  Users,
  Flame,
  Droplet,
  TreePine,
  SearchCheck,
  Factory,
  Hospital,
  Hammer,
  ShoppingCart,
  RefreshCcw,
  DollarSign,
  SearchCode,
  Settings,
  Laptop,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── DATA ───────────────────────────────────────────────────────────────────

const stats = [
  { icon: Globe, value: "62M+", label: "Tonnes of e-waste produced globally each year", description: "The Global Challenge" },
  { icon: Activity, value: "1.75M", label: "Tonnes produced in India (FY23-24)", description: "The Indian Context" },
  { icon: Scale, value: "300g", label: "Gold yield per tonne of e-waste", description: "The Hidden Goldmine" },
  { icon: Users, value: ">90%", label: "Processed informally with toxic methods", description: "The Informal Sector" },
  { icon: Recycle, value: "98%", label: "Recovery of critical materials (Cu, Co, Ni, Li)", description: "Our Impact Target" },
];

const eWasteSolutions = [
  { icon: Recycle, title: "Comprehensive WEEE Recycling", body: "We handle all categories of Waste Electrical and Electronic Equipment. Our 5-step process includes Sourcing, Sorting & Grading, Dismantling, Shredding, and Safe Disposal of hazardous residues." },
  { icon: Settings, title: "Advanced Urban Mining", body: "Deploying cutting-edge technologies to recover precious metals (Gold, Silver, Palladium) and base metals. Includes Pyrometallurgical Processing and Hydrometallurgical Extraction." },
  { icon: TreePine, title: "Bio-metallurgy (Bioleaching)", body: "An eco-friendly, energy-efficient process utilising micro-organisms to dissolve and recover metals like copper and gold without toxic emissions." },
  { icon: SearchCheck, title: "ITAD & Data Destruction", body: "We provide 100% secure, DoD-standard data wiping, degaussing, and mobile on-site shredding to ensure complete data security for corporate clients." },
  { icon: Flame, title: "Lithium-Ion & EV Recycling", body: "A closed-loop system recovering battery-grade cobalt, lithium, nickel, and manganese, supplying active cathode materials back to manufacturing." },
  { icon: Droplet, title: "Lamp Recycling", body: "Safe, mobile, on-site crushing and compacting of fluorescent lamps to curb mercury pollution and ensure environmental safety." },
];

const wasteServices = [
  { icon: Flame, title: "Municipal Solid Waste (MSW)", body: "Handling millions of tonnes of MSW. We convert combustible waste into Refuse Derived Fuel (RDF) and generate renewable power, alongside organic waste conversion." },
  { icon: Hospital, title: "Biomedical & Hazardous Waste", body: "Serving healthcare facilities by treating pathological waste via advanced incineration. Safe neutralisation and disposal of industrial toxic chemicals via TSDFs." },
  { icon: Recycle, title: "Plastic & Packaging Waste", body: "Supporting brands in meeting EPR targets through the recycling of PET, HDPE, LDPE, converting into high-quality recyclates." },
  { icon: Hammer, title: "Construction & Demolition", body: "Segregation of concrete, metal, and wood to be processed and reused as construction aggregates, minimising virgin resource depletion globally." },
];

const techFeatures = [
  { icon: Link2, title: "Blockchain Traceability", body: "Ethereum-based smart contracts create an immutable digital ledger ensuring every transaction from collection to recycling is recorded, preventing double-counting." },
  { icon: Cpu, title: "AI & Robotics", body: "AI-powered computer vision and robotic disassembly lines identify and separate complex electronic components with 99% precision, replacing hazardous manual sorting." },
  { icon: MapPin, title: "IoT Smart Bins & Logistics", body: "Receptacles equipped with ultrasonic sensors and GPS tracking optimise logistics, reduce fuel consumption, and eliminate empty truck runs." },
  { icon: SearchCode, title: "EPR & PRO SaaS", body: "Cloud-based platforms for producers to digitally plan, manage, and track EPR obligations, generating automated compliance reports and digital manifests." },
];

const marketplaceFeatures = [
  { icon: ShoppingCart, title: "Scrap & Recyclates Trading", body: "An online platform to buy/sell graded plastic pellets, secondary metals, glass, and processed e-waste with fair, AI-driven price discovery." },
  { icon: RefreshCcw, title: "Re-commerce & Refurbished IT", body: "Extending IT asset lifecycle with certified refurbished laptops and mobile devices, making digital literacy affordable while reducing carbon footprint." },
  { icon: DollarSign, title: "EPR Credit Auctions", body: "A secure trading floor where producers and brand owners can transparently bid for and purchase verified EPR certificates to meet compliance targets." },
];

const complianceServices = [
  { icon: FileCheck, title: "EPR Fulfilment", body: "We assist Manufacturers, Importers, and Brand Owners (MIBOs) in achieving mandatory collection targets under E-Waste (Management) Rules, Battery Waste Rules, and Plastic Waste Rules." },
  { icon: ShieldCheck, title: "Licensing & Clearances", body: "Consultancy for obtaining Consent to Establish (CTE), Consent to Operate (CTO), and CPCB/SPCB portal registrations." },
  { icon: Stethoscope, title: "Re-Analytical Laboratory", body: "NABL & MoEF accredited lab testing for air quality, stack emissions, wastewater, soil, and hazardous waste characterisation to ensure safety thresholds." },
];

const trustedBrands = ["Nasdaq", "TREND MICRO", "firstup", "torq=", "> continu", "Steddy", "8x8", "★ Trustpilot", "MACROBOND", "icario", "BLOCKBRAIN", "DashQ"];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function WasteManagementPage() {
  const [openCompliance, setOpenCompliance] = useState<number | null>(null);

  return (
    <div className="bg-[#071519] min-h-screen">
      <Header solidBg />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#071519] min-h-[90vh] flex items-center pt-[160px] pb-[120px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/ewaste.jpg"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-[0.22] object-center mix-blend-luminosity"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071519]/95 via-[#071519]/70 to-[#071519]" />
        </div>
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="max-w-[860px]">
            <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/40 mb-6">
              WASTE MANAGEMENT — CIRCULAR ECONOMY
            </motion.p>
            <motion.h1
              {...fadeUp(0.06)}
              className="text-[42px] sm:text-[64px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6"
            >
              Transforming Waste into Wealth.<br />
              <span className="text-white/50">Your Zero-Waste Partner.</span>
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="text-[16px] text-[#a1b3b8] leading-[1.7] max-w-[660px] mb-10">
              From AI-driven electronic waste recycling and urban mining to comprehensive municipal and industrial waste management. We are building a circular economy powered by digital traceability and sustainable innovation.
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-6 mb-14">
              {[
                { val: "62M+", label: "tonnes of global e-waste per year" },
                { val: "98%", label: "recovery of critical materials" },
                { val: "100%", label: "EPR compliance assurance" },
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
                Get a Free Assessment
              </a>
              <a
                href="#solutions"
                className="px-7 py-3.5 border border-white/25 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-2"
              >
                Explore Solutions <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Stat pills row */}
          <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3 mt-16">
            {["E-Waste Recycling", "Urban Mining", "ITAD & Data Destruction", "EV Battery Recycling", "EPR Compliance", "Digital Traceability"].map((tag) => (
              <span
                key={tag}
                className="bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/50 uppercase tracking-[0.15em] px-4 py-2 rounded-sm hover:bg-white/[0.08] hover:text-white/80 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#07161a] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            THE REALITY IN STATS & FIGURES
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[640px]">
            A Crisis — and an Opportunity
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.description}
                  {...fadeUp(i * 0.06)}
                  className="bg-[#071519] p-8 sm:p-10 flex flex-col gap-4 hover:bg-[#0a1f25] group transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8503A]/0 to-transparent group-hover:via-[#E8503A]/40 transition-all duration-500" />
                  <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-[#E8503A]/30 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white/40 group-hover:text-[#E8503A]/70 transition-colors duration-300" />
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-[#E8503A]/70 transition-colors duration-300">
                    {stat.description}
                  </p>
                  <p className="text-[36px] sm:text-[42px] font-medium text-white tracking-[-0.03em] leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-[#7a9ba3] leading-[1.6]">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BRANDS ───────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-14 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 mb-10">
            Trusted by Leading Companies Worldwide
          </p>
          <div className="w-full border border-white/[0.07] rounded-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 overflow-hidden">
            {trustedBrands.map((name, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center py-10 px-6 bg-transparent border-white/[0.07]
                  border-b
                  ${(idx + 1) % 6 !== 0 ? "lg:border-r" : ""}
                  ${idx >= 6 ? "lg:border-b-0" : ""}
                `}
              >
                <span className="text-white/25 hover:text-white/60 transition-colors duration-300 text-[15px] font-medium tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-WASTE SOLUTIONS ────────────────────────────────────────────── */}
      <section id="solutions" className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                03 — E-WASTE SOLUTIONS
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[48px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                Next-Generation E-Waste Management & Urban Mining
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7]">
                Electronic waste is not trash; it is a rich secondary source of precious metals. Our facilities utilise a multi-stage engineering process to extract maximum value with zero environmental discharge.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {eWasteSolutions.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    {...fadeUp(i * 0.06)}
                    className="relative overflow-hidden rounded-xl bg-[#071519] border border-white/[0.08] p-7 hover:border-[#E8503A]/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl shadow-black/40"
                  >
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-transparent group-hover:from-[#E8503A]/10 to-transparent pointer-events-none transition-colors duration-500 rounded-full blur-2xl" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] mb-4 group-hover:scale-[1.75] transition-transform duration-300" />
                    <h3 className="relative z-10 text-[17px] font-semibold text-white tracking-[-0.01em] mb-3 group-hover:text-white/90">
                      {f.title}
                    </h3>
                    <p className="relative z-10 text-[13px] text-[#7a9ba3] leading-[1.7] group-hover:text-white/80 transition-colors duration-300">
                      {f.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATED WASTE SERVICES ────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            04 — INTEGRATED WASTE SERVICES
          </motion.p>
          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05]">
              360-Degree Environmental Management
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] lg:pt-4">
              Beyond electronics, we offer end-to-end management for all major waste streams, ensuring regulatory compliance and environmental safety.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {wasteServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp(i * 0.08)}
                  className="group relative overflow-hidden rounded-2xl bg-[#0A1F25] border border-white/10 p-8 hover:border-[#E8503A]/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E8503A]/5 transition-all duration-500 cursor-default"
                >
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-transparent group-hover:from-[#E8503A]/10 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-700" />
                  <div className="relative z-10 flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#E8503A] group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-3 tracking-[-0.01em]">{s.title}</h3>
                  <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DIGITAL TECH ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            05 — DIGITAL TECH & SAAS PLATFORMS
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[680px]">
            Digitising the Circular Economy
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] max-w-[580px] mb-14">
            We leverage Industry 4.0 innovations to bring absolute transparency to the highly fragmented waste management sector.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  {...fadeUp(i * 0.07)}
                  className="relative overflow-hidden rounded-xl bg-[#071519] border border-white/[0.08] p-7 hover:border-[#E8503A]/20 group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-transparent group-hover:from-[#E8503A]/10 to-transparent pointer-events-none transition-colors duration-500 rounded-full blur-2xl" />
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#E8503A]/30 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white/40 group-hover:text-[#E8503A]/70 transition-colors duration-300" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-white mb-3 tracking-[-0.01em]">{f.title}</h3>
                  <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CIRCULAR MARKETPLACE ─────────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="relative bg-[#0A1F25] rounded-[24px] border border-white/10 p-12 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8503A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
                  06 — THE CIRCULAR MARKETPLACE
                </motion.p>
                <motion.h2 {...fadeUp(0.05)} className="text-[38px] sm:text-[48px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                  A Unified Hub for Buying and Selling Recyclables
                </motion.h2>
                <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] mb-8">
                  Our digital marketplace bridges the demand-supply gap, connecting bulk waste generators, aggregators, recyclers, and manufacturers nationwide.
                </motion.p>
                <motion.div {...fadeUp(0.15)}>
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
                  >
                    Join the Marketplace
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </motion.div>
              </div>

              <div className="space-y-4">
                {marketplaceFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.title}
                      {...fadeUp(i * 0.08)}
                      className="bg-[#071519]/80 border border-white/[0.08] rounded-xl p-6 flex items-start gap-4 hover:border-[#E8503A]/20 transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#E8503A]/10 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-white/40 group-hover:text-[#E8503A]/70 transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-[16px] font-semibold text-white mb-1.5">{f.title}</h4>
                        <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{f.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE & ESG ─────────────────────────────────────────────── */}
      <section className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Compliance */}
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                07 — COMPLIANCE & ANALYTICAL SERVICES
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[38px] sm:text-[46px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                Navigating Regulations with Confidence
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] mb-10">
                We protect your brand by ensuring 100% adherence to national pollution control guidelines. Our dedicated teams manage the complexities of modern environmental law.
              </motion.p>

              <div className="space-y-5">
                {complianceServices.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.title}
                      {...fadeUp(i * 0.06)}
                      className="flex gap-5 group"
                    >
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[11px] font-mono text-white/30 group-hover:bg-[#E8503A] group-hover:border-[#E8503A] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(232,80,58,0.4)] transition-all duration-300">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3 className="text-[17px] font-semibold text-white mb-1.5">{f.title}</h3>
                        <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{f.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ESG */}
            <motion.div {...fadeUp(0.08)} className="relative rounded-2xl bg-[#071519] border border-white/10 p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
                  08 — SOCIAL INCLUSION & ESG IMPACT
                </p>
                <h2 className="text-[32px] sm:text-[38px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-8">
                  Empowering Communities, Protecting the Planet
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      icon: Handshake,
                      title: "Integrating the Informal Sector",
                      body: "We actively partner with \"Kabadiwalas\" (informal waste pickers). Through our collection agencies, we provide them with fixed salaries, ID cards, health insurance, protective gear, and training — transforming a hazardous livelihood into a dignified profession.",
                    },
                    {
                      icon: Sprout,
                      title: "ESG Reporting",
                      body: "Our platforms provide detailed sustainability dashboards for corporate clients, tracking metrics like carbon offsets, landfill diversion rates, and GHG emission reductions for corporate ESG disclosures.",
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:border-emerald-400/20 transition-colors duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-7 h-7 rounded-full bg-emerald-400/10 flex items-center justify-center">
                            <Icon className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <h4 className="text-[16px] font-semibold text-white">{item.title}</h4>
                        </div>
                        <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{item.body}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 pt-8 border-t border-white/[0.07]">
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wider text-white uppercase hover:text-[#E8503A] transition-colors group"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="relative bg-[#0A1F25] rounded-[24px] border border-white/10 p-12 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8503A]/5 rounded-full blur-3xl pointer-events-none" />
            {/* Grid overlay on CTA */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025] rounded-[24px]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5 relative z-10">
              START YOUR CIRCULAR JOURNEY
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[680px] relative z-10">
              Ready to Turn Your Waste Into a Resource?
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] max-w-[560px] mb-10 relative z-10">
              Get a free waste audit and discover how our end-to-end solutions can help your business achieve compliance, generate revenue from recyclables, and lead on ESG.
            </motion.p>
            <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a
                href="https://wa.me/919871183680"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
              >
                Book a Free Waste Audit
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors"
              >
                Download Brochure
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
