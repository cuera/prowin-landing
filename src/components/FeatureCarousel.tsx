"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const TAB_DURATION_DEFAULT = 6000; // 6 seconds per tab

const features = [
  {
    id: "saas-platform",
    title: "SAAS PLATFORM",
    mediaUrl: "/t2.avif",
    heading: "SaaS Platform",
    description: "Scale your software business with our comprehensive native cloud infrastructure.",
    link: "/saas-platform"
  },
  {
    id: "e-waste",
    title: "E-WASTE",
    mediaUrl: "/e waste.avif",
    heading: "E-Waste Solutions",
    description: "Sustainable tech recycling and carbon-neutral lifecycle management.",
    link: "/ewaste"
  },
  {
    id: "ai-deployment",
    title: "AI DEPLOYMENT",
    mediaUrl: "/ai auto.avif",
    heading: "AI Platform",
    description: "Mobilise and collaborate with agents to automate and augment your commercial work.",
    link: "/ai-deployment"
  },
  {
    id: "ed-tech",
    title: "ED TECH",
    mediaUrl: "/edtech.avif",
    heading: "Ed Tech",
    description: "Empower learners and educators with scalable digital classroom tools.",
    link: "/ed-tech"
  },
  {
    id: "crm",
    title: "CRM",
    mediaUrl: "/crm.avif",
    heading: "CRM Customization",
    description: "Build stronger customer relationships with tailored integrated workflows.",
    link: "/crm"
  },
  {
    id: "erp-implementation",
    title: "ERP IMPLEMENTATION",
    mediaUrl: "/erp.avif",
    heading: "ERP Implementation",
    description: "Unify your business processes into a single source of truth.",
    link: "/erp-implementation"
  },
];

export function FeatureCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const lastTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);

  const animate = (time: number) => {
    if (lastTimeRef.current !== null) {
      const deltaTime = time - lastTimeRef.current;
      setProgress((prev) => {
        const next = prev + (deltaTime / TAB_DURATION_DEFAULT) * 100;
        if (next >= 100) {
          setActiveTab((curr) => (curr + 1) % features.length);
          return 0;
        }
        return next;
      });
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
    lastTimeRef.current = null;
  };

  return (
    <section className="w-full bg-[#071519] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-[67px]">
        
        {/* Header - Left Aligned to match Platform/ClosedLoop */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <p className="text-[12px] font-medium font-mono uppercase tracking-[0.18em] text-white/50 mb-4">
            Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-[42px] sm:text-[56px] leading-[1.05] font-medium tracking-[-0.03em] text-white max-w-[760px]">
              End to End Integration
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed max-w-[420px] lg:mb-2">
              One platform, every layer of your operation — from intelligence to infrastructure.
            </p>
          </div>
        </div>

        {/* Content Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Vertical Tabs */}
          <div className="w-full lg:w-[420px] flex flex-col shrink-0 order-2 lg:order-1">
            {features.map((feature, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={feature.id}
                  onClick={() => handleTabClick(index)}
                  className="group relative flex flex-col w-full text-left py-6 border-b border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className={`text-[13px] font-medium tracking-[0.05em] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {feature.title}
                    </span>
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                      className="text-white/40"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <h3 className="text-[20px] font-medium text-white mb-2">
                          {feature.heading}
                        </h3>
                        <p className="text-[15px] text-white/60 leading-relaxed mb-4">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress Line */}
                  <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-white/5">
                    {isActive && (
                      <motion.div 
                        className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                </button>
              );
            })}

            <div className="mt-12 lg:hidden">
              <Link 
                href={features[activeTab].link}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#071519] text-[14px] font-semibold hover:bg-white/90 transition-all active:scale-95"
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Media */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-[24px] overflow-hidden bg-[#0A1F25] border border-white/10 shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {features[activeTab].mediaUrl.endsWith(".mp4") ? (
                    <video
                      src={features[activeTab].mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={features[activeTab].mediaUrl}
                      alt={features[activeTab].heading}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
              
              {/* Product UI Frame Mockup feel */}
              <div className="absolute inset-0 border-[8px] border-black/5 pointer-events-none rounded-[24px]" />
            </div>

            {/* CTA Button below Media on Desktop */}
            <div className="mt-8 hidden lg:flex justify-end">
              <Link 
                href={features[activeTab].link}
                className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-[6px] bg-white text-[#071519] text-[15px] font-semibold hover:bg-white/90 transition-all active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
              >
                Learn more about {features[activeTab].heading}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
