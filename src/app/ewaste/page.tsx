"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MonitorSmartphone, 
  Lightbulb, 
  Gamepad2, 
  Stethoscope, 
  Activity,
  Coffee,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Layers,
  FileBadge,
  Terminal,
  Server,
  Plus,
  Minus,
  Gem,
  CloudLightning,
  Zap,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InteractiveProductCard } from "@/components/ui/card-7";

// ----------------------------------------------------------------------
// HERO SECTION
// ----------------------------------------------------------------------
const Hero = () => {
  return (
    <section className="relative pt-[160px] pb-[80px] px-[60px] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-[#1a4a52] rounded-full blur-[150px] opacity-30 pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-[80px]">
        
        {/* Left Side: Copy */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-[8px] bg-white/5 border border-white/10 px-[16px] py-[6px] rounded-full mb-[32px]">
            <div className="w-[8px] h-[8px] rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[12px] font-bold text-white/80 tracking-widest uppercase">E-Waste Management Rules 2022</span>
          </div>
          <h1 className="text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-[24px]">
            Turn e-waste into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">compliance credits</span><br/> and recovered metals.
          </h1>
          <p className="text-[20px] text-white/60 leading-[1.6] mb-[48px] max-w-[600px]">
            CPCB-authorized collection, dismantling, and recovery — with Form 6 documentation delivered directly to your dashboard.
          </p>
          
          <div className="flex flex-wrap items-center gap-[16px]">
            <button className="px-[28px] py-[16px] rounded-[6px] bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all hover:scale-[1.02]">
              Schedule a Pickup
            </button>
            <button className="px-[28px] py-[16px] rounded-[6px] bg-white/5 border border-white/10 text-white font-semibold text-[15px] hover:bg-white/10 transition-all hover:scale-[1.02]">
              Get EPR Quote
            </button>
          </div>
        </motion.div>
        
        {/* Right Side: Image with Floating Card */}
        <motion.div
          className="w-full lg:w-1/2 relative mt-[40px] lg:mt-0"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.15)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071519]/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src="/e waste.avif" 
              alt="E-Waste Processing" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating graphic to make it extra premium */}
          <div className="absolute -bottom-[30px] left-1/2 lg:-left-[30px] lg:transform-none -translate-x-1/2 z-20 bg-[#0a1f24]/80 backdrop-blur-xl border border-white/10 p-[24px] rounded-[16px] shadow-2xl shadow-emerald-500/10 min-w-[280px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-[24px] h-[24px] text-emerald-400" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white mb-[2px]">CPCB Authorized</div>
                <div className="text-[12px] text-white/50">Zero-landfill guaranteed</div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// WHAT WE HANDLE (GRID)
// ----------------------------------------------------------------------
const WhatWeHandle = () => {
  return (
    <section id="streams" className="py-[120px] px-[60px] relative border-t border-white/5 bg-[#071519]">
      <div className="w-full max-w-[1200px] mx-auto text-left mb-[64px]">
        <h2 className="text-[36px] font-bold tracking-tight mb-[16px]">Streams we manage</h2>
        <p className="text-[18px] text-white/50 max-w-[600px]">
          End-to-end processing across all major electronics categories per compliance standards.
        </p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto grid gap-[12px] sm:grid-cols-5">
        
        {/* Card 1: IT & Telecom */}
        <Card className="group overflow-hidden bg-white/[0.02] border-white/5 shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl text-white">
          <CardHeader>
            <div className="md:p-4">
              <p className="font-semibold text-[20px]">IT & Telecom Assets</p>
              <p className="text-white/50 mt-2 max-w-sm text-sm">Servers, networking racks, employee endpoints, and telecom towers. End-to-end processing.</p>
            </div>
          </CardHeader>

          <div className="relative h-fit pl-6 md:pl-12 pb-6 md:pb-12">
            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,rgba(7,21,25,0.8)_100%)] z-10 pointer-events-none"></div>
            <div className="bg-[#071519] overflow-hidden rounded-tl-lg border border-white/10 pl-2 pt-2 relative">
               <img
                  src="/eeewasted.avif"
                  className="w-full h-48 object-cover opacity-80"
                  alt="IT Server Room"
               />
               <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
            </div>
          </div>
        </Card>

        {/* Card 2: Mobile & Devices */}
        <Card className="group overflow-hidden bg-white/[0.02] border-white/5 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl text-white">
          <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold md:p-6 text-[20px]">Consumer Electronics</p>

          <CardContent className="mt-auto h-fit">
            <div className="relative mb-6 sm:mb-0">
              <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,rgba(7,21,25,0.8)_100%)] z-10 pointer-events-none"></div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 relative">
                <img
                  src="/consumer.avif"
                  className="w-full h-full object-cover opacity-70"
                  alt="Consumer Electronics"
                />
                <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Specialized Equipment */}
        <Card className="group overflow-hidden bg-white/[0.02] border-white/5 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl text-white flex flex-col">
          <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold md:p-6 text-[20px]">Medical Devices & Specialized Tech</p>

          <CardContent className="mt-auto h-fit">
            <div className="relative mb-6 sm:mb-0">
              <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,rgba(7,21,25,0.8)_100%)] z-10 pointer-events-none"></div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 relative">
                <img
                  src="/medical.avif"
                  className="w-full h-full object-cover opacity-70"
                  alt="Medical Devices"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 4: Power & Batteries */}
        <Card className="group relative bg-white/[0.02] border-white/5 shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl text-white">
          <CardHeader className="p-6 md:p-12 pb-4 md:pb-6">
            <p className="font-semibold text-[20px]">Power Systems & Batteries</p>
            <p className="text-white/50 mt-2 max-w-sm text-sm">Secure extraction and neutralization of Li-ion batteries, UPS systems, and deep-cycle arrays.</p>
          </CardHeader>
          <div className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,rgba(7,21,25,0.8)_100%)] z-10 pointer-events-none"></div>
            <div className="bg-[#071519] overflow-hidden rounded-lg border border-white/10 relative">
               <img
                  src="/stuff.avif"
                  className="w-full h-48 sm:h-64 object-cover opacity-80"
                  alt="Power Systems & Batteries"
               />
               <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// PROCESS SECTION (ACCORDION)
// ----------------------------------------------------------------------
const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      num: "01", 
      title: "Audit & Inventory", 
      desc: "We comprehensively inventory your assets and identify recovery potential.",
      image: "/waste22.avif"
    },
    { 
      num: "02", 
      title: "Secure Collection", 
      desc: "GPS-tracked fleet pickup ensuring unbroken chain-of-custody from your site.",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      num: "03", 
      title: "Data Destruction", 
      desc: "DoD-standard wiping, degaussing, or physical shredding—on-site if required.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      num: "04", 
      title: "Dismantle & Recover", 
      desc: "Processing at CPCB-authorized facilities to extract maximum material value.",
      image: "https://images.pexels.com/photos/7681092/pexels-photo-7681092.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      num: "05", 
      title: "Final Documentation", 
      desc: "Form 6, Certificates of Recycling, and EPR compliance credits instantly allocated.",
      image: "https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  ];

  return (
    <section id="process" className="py-[120px] px-[60px] relative bg-black/20">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[80px]">
        {/* Left side */}
        <div className="lg:w-1/2">
          <h2 className="text-[36px] font-bold tracking-tight mb-[24px]">A transparent,<br/> closed-loop process.</h2>
          <p className="text-[18px] text-white/50 mb-[48px]">
            Watch your compliance and recovery journey unfold. No black boxes. Just verified, auditable steps.
          </p>
          
          <div className="flex flex-col gap-[16px]">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-[24px] rounded-[12px] border cursor-pointer transition-all duration-300 ${isActive ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                      <span className={`font-mono text-[14px] ${isActive ? 'text-emerald-400' : 'text-white/30'}`}>{step.num}</span>
                      <h3 className={`text-[18px] font-semibold ${isActive ? 'text-white' : 'text-white/60'}`}>{step.title}</h3>
                    </div>
                    <ChevronDown className={`w-[20px] h-[20px] transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : 'text-white/30'}`} />
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-[16px] pl-[38px] text-[15px] text-white/60 leading-[1.6]">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="w-full aspect-square rounded-[24px] bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 relative overflow-hidden group">
             <AnimatePresence mode="wait">
               <motion.div 
                 key={activeStep}
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                 className="absolute inset-0"
               >
                 <img 
                   src={steps[activeStep].image} 
                   alt={steps[activeStep].title}
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#071519] via-transparent to-transparent opacity-80" />
                 <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
                 
                 {/* Floating badge */}
                 <div className="absolute bottom-12 left-12 right-12 p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transform translate-y-0 opacity-100 transition-all">
                    <span className="font-mono text-emerald-400 text-sm mb-2 block">{steps[activeStep].num}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{steps[activeStep].title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{steps[activeStep].desc}</p>
                 </div>
               </motion.div>
             </AnimatePresence>
             
             {/* Decorative elements */}
             <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// RECOVERED MATERIALS (CARDS)
// ----------------------------------------------------------------------
const RecoveredMaterials = () => {
  const materials = [
    { title: "Precious Metals", elements: "Gold, Silver, Palladium, Platinum", bench: "Up to 98%+ recovery", color: "from-amber-400/20 to-yellow-600/5", border: "hover:border-amber-500/50" },
    { title: "Base Metals", elements: "Copper, Aluminum, Iron", bench: "From PCBs, wiring, and chassis", color: "from-orange-400/20 to-red-600/5", border: "hover:border-orange-500/50" },
    { title: "Battery Metals", elements: "Lithium, Cobalt, Nickel", bench: "Safe extraction from dead cells", color: "from-blue-400/20 to-indigo-600/5", border: "hover:border-blue-500/50" },
    { title: "Rare Earths", elements: "Neodymium, Yttrium", bench: "Magnets and display tech", color: "from-emerald-400/20 to-teal-600/5", border: "hover:border-emerald-500/50" },
  ];

  return (
    <section className="py-[120px] px-[60px] relative border-t border-white/5">
      <div className="w-full max-w-[1200px] mx-auto text-left mb-[64px]">
         <h2 className="text-[36px] font-bold tracking-tight mb-[16px]">Maximum extraction. Minimum waste.</h2>
         <p className="text-[18px] text-white/50 max-w-[600px]">
           Benchmarked against top global standards for material recovery efficiency.
         </p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {materials.map((mat, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className={`p-[40px] rounded-[16px] bg-gradient-to-br ${mat.color} border border-white/10 ${mat.border} transition-colors backdrop-blur-sm relative overflow-hidden group`}
          >
            <div className="relative z-10 flex flex-col h-full justify-between gap-[40px]">
              <div>
                <h3 className="text-[24px] font-bold mb-[8px] group-hover:text-white text-white/90">{mat.title}</h3>
                <p className="text-[16px] text-white/60 font-medium">{mat.elements}</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[6px] h-[6px] rounded-full bg-white/50 group-hover:bg-white" />
                <span className="text-[14px] font-mono text-white/70 tracking-wide uppercase">{mat.bench}</span>
              </div>
            </div>
            {/* Subtle gloss flair */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-white/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// COMPLIANCE BADGES
// ----------------------------------------------------------------------
const Compliance = () => {
  const badges = [
    "E-Waste Rules 2022", 
    "Form 2 & Form 6", 
    "CPCB Portal Sync", 
    "SPCB Certifications",
    "ISO 14001 Compliant",
    "Zero-Landfill Guarantee"
  ];
  // Duplicate array for seamless infinite scrolling
  const marqueeBadges = [...badges, ...badges];

  return (
    <section id="compliance" className="py-[80px] bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[40px] px-[60px]">
        {/* Left Side: Text */}
        <div className="md:w-1/3 shrink-0">
          <h2 className="text-[24px] font-bold tracking-tight mb-[8px]">Bulletproof Compliance</h2>
          <p className="text-[14px] text-white/50">Fully authorized and accredited. Audit-ready from day zero.</p>
        </div>
        
        {/* Right Side: Marquee */}
        <div 
          className="md:w-2/3 w-full overflow-hidden relative"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <motion.div 
            className="flex gap-[16px] w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {marqueeBadges.map((badge, idx) => (
              <div key={idx} className="px-[20px] py-[12px] bg-white/5 border border-white/10 rounded-full flex items-center gap-[8px] shrink-0">
                <ShieldCheck className="w-[16px] h-[16px] text-emerald-400 flex-shrink-0" />
                <span className="text-[14px] font-semibold text-white/80 whitespace-nowrap">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// CASE STUDY
// ----------------------------------------------------------------------
const CaseStudy = () => {
  return (
    <section className="py-[120px] px-[60px] relative">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="bg-[#0a1f24] border border-white/10 rounded-[24px] p-[60px] flex flex-col md:flex-row items-center gap-[60px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
          
          <div className="md:w-1/2 relative z-10">
            <span className="text-[12px] font-bold text-emerald-400 tracking-[0.2em] uppercase mb-[16px] block">Featured Outcome</span>
            <h2 className="text-[36px] font-bold leading-tight mb-[24px]">Fortune 500<br/>Enterprise IT Refresh</h2>
            <p className="text-[18px] text-white/60 mb-[32px] leading-relaxed">
              When a leading tech hub needed to securely retire 200 metric tonnes of legacy endpoint and networking infrastructure, ProWin provided a pan-India logistics plan and flawlessly executed data wipes under strict SLA.
            </p>
            <button className="flex items-center gap-[8px] text-[15px] font-semibold text-white hover:text-emerald-400 transition-colors">
              Read the full report <ArrowRight className="w-[16px] h-[16px]" />
            </button>
          </div>

          <div className="md:w-1/2 w-full grid grid-cols-2 gap-[16px] relative z-10">
            {[
              { metric: "200", label: "Metric Tonnes Handled" },
              { metric: "95%", label: "Material Recovery Rate" },
              { metric: "0", label: "Data Breaches" },
              { metric: "48h", label: "Avg. Compliance Turnaround" }
            ].map((stat, i) => (
              <div key={i} className="p-[24px] bg-white/5 rounded-[12px] border border-white/10">
                <div className="text-[32px] font-bold text-white mb-[4px]">{stat.metric}</div>
                <div className="text-[13px] text-white/50 uppercase tracking-wide font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// CTA BAND
// ----------------------------------------------------------------------
const CTA = () => {
  return (
    <section className="py-[120px] px-[60px] relative border-t border-white/5 bg-gradient-to-b from-[#071519] to-black">
      <div className="w-full max-w-[800px] mx-auto text-center">
        <h2 className="text-[48px] font-bold tracking-tight mb-[24px]">Ready to process?</h2>
        <p className="text-[20px] text-white/50 mb-[48px]">
          Book a quick sync. We'll outline your target gap, valuation estimate, and collection logistics in under 20 minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px]">
          <button className="px-[32px] py-[16px] rounded-[6px] bg-emerald-500 text-black font-bold text-[16px] hover:bg-emerald-400 transition-all hover:scale-[1.02] w-full sm:w-auto">
            Schedule a Pickup
          </button>
          <a
            href="https://wa.me/919871183680"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[32px] py-[16px] rounded-[6px] bg-white/5 border border-white/10 text-white font-semibold text-[16px] hover:bg-white/10 transition-all w-full sm:w-auto text-center"
          >
            Talk to an EPR Expert
          </a>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// STATS
// ----------------------------------------------------------------------
const Stats = () => {
  return (
    <section id="impact" className="py-[80px] px-[60px] relative border-t border-white/5 bg-[#071519]">
      <div className="w-full max-w-[1200px] mx-auto text-left mb-[64px]">
         <h2 className="text-[36px] font-bold tracking-tight mb-[16px]">Impact at Scale</h2>
      </div>
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        
        <InteractiveProductCard 
           title="98%"
           description="RECOVERY RATE FOR CRITICAL METALS"
           price="VERIFIED YIELD"
           imageUrl="/oldewaste.avif"
           logo={<Gem className="w-6 h-6 text-emerald-400" />}
        />

        <InteractiveProductCard 
           title="1.75M"
           description="TONNES OF INDIA'S E-WASTE ADDRESSED"
           price="NATIONWIDE SCALE"
           imageUrl="/India’s E-Waste.avif"
           logo={<CloudLightning className="w-6 h-6 text-emerald-400" />}
        />

        <InteractiveProductCard 
           title="100%"
           description="ZERO-DISCHARGE CLOSED LOOP PROCESS"
           price="GREEN CERTIFIED"
           imageUrl="/new ewaste.avif"
           logo={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
        />

      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: "How does the Blockchain traceability ledger work?", a: "We deploy Ethereum-based smart contracts that map every event from the point of waste collection to final material extraction. This creates an unalterable chain of custody, ensuring that EPR credits cannot be duplicated and giving MIBOs complete audit transparency." },
    { q: "Can I securely destroy classified IT assets on-site?", a: "Yes. We provide 'Data Destruction on Wheels'—mobile shredding and degaussing units that operate directly at your premises under DoD standards, complete with instant certificates of destruction." },
    { q: "What are the CPCB EPR targets for this financial year?", a: "Targets vary based on your product categories and historical sales. Our SaaS dashboard automatically calculates your specific obligations based on the latest E-Waste (Management) Rules and immediately matches you with available collection credits." }
  ];

  return (
    <section className="py-[120px] px-[60px] relative border-t border-white/5 bg-[#071519]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[80px]">
        <div className="lg:w-1/3">
          <h2 className="text-[36px] font-bold tracking-tight mb-[24px]">Questions?</h2>
          <p className="text-[18px] text-white/50 mb-[32px]">
            We operate strictly under CPCB guidelines with zero-landfill policies, providing security and transparency.
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-[16px]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`p-[32px] rounded-[16px] border transition-colors ${isOpen ? 'bg-white/5 border-white/10' : 'bg-transparent border-white/5 hover:bg-white/[0.02]'}`}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className={`text-[20px] font-semibold pr-8 transition-colors ${isOpen ? 'text-emerald-400' : 'text-white'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/5 text-white/30 hover:text-white/70'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-[24px] text-[16px] text-white/60 leading-[1.6]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// MAIN PAGE EXPORT
// ----------------------------------------------------------------------
export default function EWastePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#071519] text-white font-sans selection:bg-emerald-400/30 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeHandle />
        <Stats />
        <Process />
        <RecoveredMaterials />
        <Compliance />
        <CaseStudy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
