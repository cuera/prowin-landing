"use client";

import { Particles } from "@/components/ui/particles";

export default function Platform() {
  const features = [
    {
      num: "01",
      title: "Contextual data",
      desc: "Deploy standalone vertical solutions or integrate your CRM, EdTech, factory automation, and smart waste management into a unified ecosystem. Using intelligent middleware and API-first design, this single source of truth eliminates fragmented data entirely",
    },
    {
      num: "02",
      title: "Smart Agentic AI",
      desc: "Shift to autonomous AI capable of handling 15% of business decisions independently. By processing operational data 50 times faster, it cuts support times by over 50%. From predictive factory maintenance to 97% accurate robotic waste sorting, AI easily handles daily routines.",
    },
    {
      num: "03",
      title: "Adaptive Applications",
      desc: "Experience stress-free software driven by \"Calm Design\" and invisible \"Zero UI\" interfaces. These tailored ecosystems adapt contextually to your specific needs and habits without explicit input. Reduce cognitive load across EdTech platforms or industrial dashboards while effortlessly executing your strategy.",
    },
  ];

  return (
    <section id="platform" className="flex flex-col w-full items-center bg-[#071519] py-24">
      <div className="w-full flex flex-col px-4 sm:px-[67px] max-w-[1920px]">
        {/* Head */}
        <div className="flex items-start justify-between w-full mb-20">
          <h2 className="text-[42px] sm:text-[56px] leading-tight font-medium text-white tracking-[-0.03em]">
            The Platform
          </h2>
          <div className="flex items-center justify-center mt-2 cursor-pointer hover:opacity-70 transition-opacity">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
          {/* Features Left */}
          <div className="flex flex-col w-full lg:w-[480px] shrink-0">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex flex-col py-8 ${
                  i !== features.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="text-[#888888] text-[12px] font-medium tracking-[0.04em] mb-4 font-mono">
                  {f.num}
                </span>
                <h3 className="text-[28px] font-medium text-white tracking-[-0.02em] mb-4">
                  {f.title}
                </h3>
                <p className="text-[15px] text-white/70 leading-[1.6] max-w-[420px]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Screenshot Right */}
          <div className="flex-1 hidden lg:flex items-center justify-center relative min-h-[500px]">
            {/* Particles Background */}
            <Particles
              className="z-0 absolute inset-0 size-full mix-blend-multiply"
              quantity={100}
              ease={80}
              color="#000000"
              refresh
            />
            <div className="z-10 relative w-full max-w-[540px] rounded-[24px] overflow-hidden aspect-[54/90] pointer-events-none">
              <iframe
                src="/contextual-data.html"
                className="w-full h-full border-none pointer-events-none"
                title="Contextual Data Ecosystem Simulation"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
