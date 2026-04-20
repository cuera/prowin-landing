"use client";

import { useState } from "react";

interface HeaderProps {
  solidBg?: boolean;
}

export default function Header({ solidBg = false }: HeaderProps = {}) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const navItems: { name: string; hasMegaMenu: boolean; noPlus?: boolean; href?: string }[] = [
    { name: "Solutions", hasMegaMenu: true },
    { name: "Platform", hasMegaMenu: true },
    { name: "Customers", hasMegaMenu: true },
    { name: "Explore", hasMegaMenu: true },
  ];

  return (
    <>
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
          solidBg ? "sticky" : "absolute"
        } ${
          hoveredMenu || solidBg ? "bg-[#1c1d1e]/95 backdrop-blur-2xl border-b border-white/5" : "bg-transparent border-b border-transparent"
        }`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="flex items-center justify-between h-[80px] px-[60px]">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-[8px] cursor-pointer hover:scale-[1.02] transition-transform">

            <span className="text-[20px] font-bold text-white tracking-[-0.5px]">
              pro<span className="font-normal">win</span>
            </span>
          </a>

          {/* NAVIGATION */}
          <nav className="flex items-center xl:gap-[40px] gap-[24px] h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="h-full flex items-center relative group"
                onMouseEnter={() => setHoveredMenu(item.name)}
              >
                <a
                  href={item.href ?? "#"}
                  className={`text-[14px] font-medium transition-all duration-300 flex items-center gap-[4px] ${
                    hoveredMenu === item.name ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {!item.noPlus && (
                    <span className="text-[12px] font-light transition-transform duration-300">
                      {hoveredMenu === item.name ? "–" : "+"}
                    </span>
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* BUTTONS */}
          <div className="flex items-center gap-[16px]">
            <a
              href="https://app.prowin.com/login"
              className="px-[20px] py-[10px] rounded-[4px] border border-white/30 text-[13px] font-bold text-white tracking-wider hover:bg-[#071519]/10 transition-colors uppercase hover:scale-[1.02]"
            >
              Log in
            </a>
            <a
              href="https://wa.me/919871183680"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-[4px] bg-[#071519] text-[13px] font-bold text-white hover:bg-[#071519]/90 transition-colors uppercase tracking-wider hover:scale-[1.02]"
            >
              Request a demo
              <svg
                className="w-[14px] h-[14px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* MEGA MENU CONTAINER */}
        <div
          className={`absolute top-[80px] left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] bg-black/80 backdrop-blur-3xl border-white/5 ${
            hoveredMenu && hoveredMenu !== "Pricing"
              ? "max-h-[600px] border-b opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`w-full max-w-[1400px] mx-auto px-[60px] py-[60px] flex justify-between gap-[40px] transition-all duration-700 ease-out ${
              hoveredMenu && hoveredMenu !== "Pricing"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <MenuContent activeMenu={hoveredMenu || "Solutions"} />
          </div>
        </div>
      </header>

      {/* FULL SCREEN BACKDROP */}
      <div
        className={`fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,_transparent,_rgba(0,0,0,0.8)_100%)] bg-black/40 backdrop-blur-md transition-opacity duration-500 ease-in-out pointer-events-none ${
          hoveredMenu && hoveredMenu !== "Pricing" ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}

function MenuContent({ activeMenu }: { activeMenu: string }) {
  if (activeMenu === "Solutions") {
    return (
      <div className="flex justify-between w-full h-full gap-4 animate-in fade-in zoom-in-95 duration-300">
        {/* Col 1 — Applications & Services */}
        <div className="flex flex-col gap-[40px] min-w-[200px]">
          <div>
            <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              Applications <span className="text-white/30 text-[12px]">↘</span>
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li><a href="/saas-platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">SaaS Platform</a></li>
              <li><a href="/crm" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">CRM Intelligence</a></li>
              <li><a href="/erp-implementation" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">ERP</a></li>
              <li><a href="/ewaste" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">E-Waste</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              Services <span className="text-white/30 text-[12px]">↘</span>
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li><a href="/ai-deployment" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">AI Deployment</a></li>
              <li><a href="/ed-tech" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">EdTech</a></li>
            </ul>
          </div>
        </div>

        {/* Col 2 — Use Cases */}
        <div className="min-w-[220px]">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            Use Cases <span className="text-white/30 text-[12px]">↘</span>
          </h3>
          <ul className="flex flex-col gap-[18px]">
            <li><a href="/#applications" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Customer Success</a></li>
            <li><a href="/#applications" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Sales & GTM</a></li>
            <li><a href="/#services" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Professional Services</a></li>
            <li><a href="/ewaste#streams" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">E-Waste Streams</a></li>
            <li><a href="/ewaste#compliance" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">EPR Compliance</a></li>
            <li><a href="/#platform" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Custom Build</a></li>
          </ul>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden lg:block" />

        {/* Col 3 — Spotlight */}
        <div className="w-[340px] hidden md:block group cursor-pointer">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex justify-between items-center">
            Spotlight
            <span className="text-[16px] text-white/40 group-hover:text-white group-hover:rotate-90 transition-all duration-300">※</span>
          </h3>
          <a href="/ai-deployment">
            <h4 className="text-white font-bold text-[16px] mb-3 leading-snug group-hover:text-white/80 transition-colors">Introducing prowin's<br/>AI Deployment Program</h4>
            <p className="text-[14px] text-white/60 mb-6 leading-relaxed">
              A dedicated services team that embeds predictive AI into pricing, sales, and customer operations.
            </p>
            <div className="overflow-hidden rounded-[4px] mb-5">
              <img
                src="/ai auto.avif"
                alt="AI Deployment"
                className="w-full h-[180px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
          </a>
          <div className="flex gap-4 text-[13px] text-white/60 font-medium tracking-wide">
            <span className="hover:text-white transition-colors">Product</span>
            <span className="w-[4px] h-[4px] rounded-full bg-white/20 self-center"></span>
            <span className="hover:text-white transition-colors">ProWin AI Team</span>
          </div>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden xl:block" />

        {/* Col 4 — Info */}
        <div className="w-[300px] hidden xl:block">
          <p className="text-[15px] text-white/60 leading-[1.8] pt-1 font-medium pr-8">
            Unify and automate every commercial process. prowin is a force multiplier that empowers your entire go-to-market team to move together, and move faster — with greater intention.
          </p>
        </div>
      </div>
    );
  }

  if (activeMenu === "Platform") {
    return (
      <div className="flex justify-between w-full h-full gap-4 animate-in fade-in zoom-in-95 duration-300">
        {/* Col 1 */}
        <div className="flex flex-col gap-[40px] min-w-[200px]">
          <div>
            <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              Capabilities <span className="text-white/30 text-[12px]">↘</span>
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li><a href="/#platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Data</a></li>
              <li><a href="/#platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Intelligence</a></li>
              <li><a href="/#platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Action</a></li>
              <li><a href="/#platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Collaboration</a></li>
              <li><a href="/#platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Governance</a></li>
            </ul>
          </div>
          <ul className="flex flex-col gap-[18px] pt-4 border-t border-white/5">
            <li><a href="/saas-platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Integrations</a></li>
            <li><a href="/saas-platform" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Security</a></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="min-w-[220px]">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            Features <span className="text-white/30 text-[12px]">↘</span>
          </h3>
          <ul className="flex flex-col gap-[18px]">
            <li><a href="/ai-deployment" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">AI Workflows</a></li>
            <li><a href="/#platform" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Unified Data Model</a></li>
            <li><a href="/ai-deployment" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Conversational AI</a></li>
            <li><a href="/#platform" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Personal Workspace</a></li>
            <li><a href="/crm" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Revenue Intelligence</a></li>
            <li><a href="/erp-implementation" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Supply Chain</a></li>
          </ul>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden lg:block" />

        {/* Col 3 — Spotlight */}
        <div className="w-[340px] hidden md:block group cursor-pointer">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex justify-between items-center">
            Spotlight
            <span className="text-[16px] text-white/40 group-hover:text-white group-hover:rotate-90 transition-all duration-300">※</span>
          </h3>
          <a href="/#platform">
            <h4 className="text-white font-bold text-[16px] mb-3 leading-snug group-hover:text-white/80 transition-colors">The Modular Machine</h4>
            <p className="text-[14px] text-white/60 mb-6 leading-relaxed">
              Architected from scalable building blocks, prowin removes the need to choose between power and accessibility.
            </p>
            <div className="overflow-hidden rounded-[4px] mb-5">
              <img
                src="/dashboard app refurnished.jpg"
                alt="ProWin Platform"
                className="w-full h-[180px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
          </a>
          <div className="flex gap-4 text-[13px] text-white/60 font-medium tracking-wide">
            <span className="hover:text-white transition-colors">On Product</span>
            <span className="w-[4px] h-[4px] rounded-full bg-white/20 self-center"></span>
            <span className="hover:text-white transition-colors">ProWin Platform Team</span>
          </div>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden xl:block" />

        {/* Col 4 — Info */}
        <div className="w-[300px] hidden xl:block">
          <p className="text-[15px] text-white/60 leading-[1.8] pt-1 font-medium pr-8">
            A customer platform built to combine power and intuitiveness. prowin gives you the technical capabilities you need to run your business with greater success, scale and speed than ever.
          </p>
        </div>
      </div>
    );
  }

  if (activeMenu === "Customers") {
    return (
      <div className="flex justify-between w-full h-full gap-4 animate-in fade-in zoom-in-95 duration-300">
        {/* Col 1 */}
        <div className="flex flex-col gap-[40px] min-w-[200px]">
          <div>
            <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              prowin For <span className="text-white/30 text-[12px]">↘</span>
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li><a href="/#results" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Enterprise</a></li>
              <li><a href="/#results" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Scale-ups</a></li>
              <li><a href="/#results" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Start-ups</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              Impact <span className="text-white/30 text-[12px]">↘</span>
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li><a href="/#results" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Testimonials</a></li>
              <li><a href="/ewaste#impact" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Case Studies</a></li>
            </ul>
          </div>
        </div>

        {/* Col 2 */}
        <div className="min-w-[220px]">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            Industries <span className="text-white/30 text-[12px]">↘</span>
          </h3>
          <ul className="flex flex-col gap-[18px]">
            <li><a href="/saas-platform" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Software & SaaS</a></li>
            <li><a href="/erp-implementation" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">IT Services & ERP</a></li>
            <li><a href="/crm" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Connected Businesses</a></li>
            <li><a href="/ed-tech" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Education & EdTech</a></li>
            <li><a href="/ewaste" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Sustainability & E-Waste</a></li>
            <li><a href="/ai-deployment" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">AI-First Businesses</a></li>
          </ul>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden lg:block" />

        {/* Col 3 — Spotlight */}
        <div className="w-[340px] hidden md:block group cursor-pointer">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex justify-between items-center">
            Spotlight
            <span className="text-[16px] text-white/40 group-hover:text-white group-hover:rotate-90 transition-all duration-300">※</span>
          </h3>
          <a href="/ewaste#impact">
            <h4 className="text-white font-bold text-[16px] mb-3 leading-snug group-hover:text-white/80 transition-colors">Fortune 500 IT Refresh</h4>
            <p className="text-[14px] text-white/60 mb-6 leading-relaxed">
              How a leading tech hub securely retired 200MT of legacy infrastructure with full data wipe certification under strict SLA.
            </p>
            <div className="overflow-hidden rounded-[4px] mb-5">
              <img
                src="/consumer.avif"
                alt="Customer Story"
                className="w-full h-[180px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
          </a>
          <div className="flex gap-4 text-[13px] text-white/60 font-medium tracking-wide">
            <span className="hover:text-white transition-colors">Case Study</span>
            <span className="w-[4px] h-[4px] rounded-full bg-white/20 self-center"></span>
            <span className="hover:text-white transition-colors">E-Waste</span>
          </div>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden xl:block" />

        {/* Col 4 — Info */}
        <div className="w-[300px] hidden xl:block">
          <p className="text-[15px] text-white/60 leading-[1.8] pt-1 font-medium pr-8">
            See how leading organizations use prowin to grow revenue, scale impact, and build enduring customer relationships — across industries, regions, and operating models.
          </p>
        </div>
      </div>
    );
  }

  if (activeMenu === "Explore") {
    return (
      <div className="flex justify-between w-full h-full gap-4 animate-in fade-in zoom-in-95 duration-300">
        {/* Col 1 */}
        <div className="flex flex-col gap-[40px] min-w-[200px]">
          <div>
            <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              Discover <span className="text-white/30 text-[12px]">↘</span>
            </h3>
            <ul className="flex flex-col gap-[18px]">
              <li><a href="/#results" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Results</a></li>
              <li><a href="/#applications" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">Applications</a></li>
              <li><a href="/ewaste" className="text-white/90 hover:text-white font-semibold text-[17px] hover:translate-x-1 transition-all inline-block">E-Waste Platform</a></li>
            </ul>
          </div>
        </div>

        {/* Col 2 */}
        <div className="min-w-[220px]">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            Learn <span className="text-white/30 text-[12px]">↘</span>
          </h3>
          <ul className="flex flex-col gap-[18px]">
            <li><a href="/#demo" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Book a Demo</a></li>
            <li><a href="/ewaste#process" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">How It Works</a></li>
            <li><a href="/ewaste#compliance" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Compliance Guide</a></li>
            <li><a href="/#services" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">Services Overview</a></li>
            <li><a href="/ai-deployment" className="text-white/80 hover:text-white font-medium text-[15px] hover:translate-x-1 transition-all inline-block">AI Deployment Guide</a></li>
          </ul>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden lg:block" />

        {/* Col 3 — Spotlight */}
        <div className="w-[340px] hidden md:block group cursor-pointer">
          <h3 className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-6 flex justify-between items-center">
            Spotlight
            <span className="text-[16px] text-white/40 group-hover:text-white group-hover:rotate-90 transition-all duration-300">※</span>
          </h3>
          <a href="/#demo">
            <h4 className="text-white font-bold text-[16px] mb-3 leading-snug group-hover:text-white/80 transition-colors">See ProWin Live</h4>
            <p className="text-[14px] text-white/60 mb-6 leading-relaxed">
              Schedule a 30-minute session with a prowin deployment specialist. We map the platform to your exact workflow.
            </p>
            <div className="overflow-hidden rounded-[4px] mb-5">
              <img
                src="/stuff.avif"
                alt="ProWin Demo"
                className="w-full h-[180px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
          </a>
        </div>

        <div className="w-[1px] bg-white/5 mx-2 self-stretch hidden xl:block" />

        {/* Col 4 — Info */}
        <div className="w-[300px] hidden xl:block">
          <p className="text-[15px] text-white/60 leading-[1.8] pt-1 font-medium pr-8">
            prowin unifies your go-to-market data, teams and tools so you can deliver more value, to more customers, faster.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
