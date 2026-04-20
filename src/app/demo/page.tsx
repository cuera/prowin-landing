"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Header from "@/components/Header";

const inputClass =
  "bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#1a1a1a] transition-colors w-full";

const labelClass = "text-[11px] font-medium tracking-[0.1em] uppercase text-gray-500 mb-1.5 block";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    companySize: "",
    useCase: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header solidBg />

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left — Brand */}
        <div className="lg:w-1/2 bg-[#1a1a1a] text-white flex flex-col justify-center px-8 md:px-16 py-24 md:py-32">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
            Request a Demo
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            See ProWin Working on Your Data
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
            A 30-minute session with a deployment specialist. We&apos;ll walk through your
            specific use case and show you exactly what ProWin looks like in your environment.
          </p>

          <ul className="flex flex-col gap-4 mb-12">
            {[
              "Personalised to your industry and data sources",
              "Live platform walkthrough — not a slide deck",
              "Receive a custom deployment plan within 48 hours",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full border border-white/30 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                <span className="text-white/80 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white/10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-1">
              Trusted by
            </p>
            <p className="text-white/70 text-sm">
              200+ commercial teams across 12 countries
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:w-1/2 bg-[#FDFBF7] flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center mx-auto mb-6">
                <Check className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-3">
                You&apos;re booked in!
              </h2>
              <p className="text-[#1a1a1a]/60 text-sm leading-relaxed max-w-xs mx-auto">
                Your demo is being scheduled! Check your inbox for a calendar invite within 2 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                  Book Your Demo
                </h2>
                <p className="text-[#1a1a1a]/50 text-sm">
                  Fill in the details below and we&apos;ll be in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* First / Last name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name <span className="text-[#E8503A]">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name <span className="text-[#E8503A]">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Work Email <span className="text-[#E8503A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company <span className="text-[#E8503A]">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className={labelClass}>
                    Job Title <span className="text-[#E8503A]">*</span>
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    placeholder="Head of Commercial"
                    value={form.jobTitle}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="companySize" className={labelClass}>
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={form.companySize}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select size</option>
                      <option value="1-50">1–50</option>
                      <option value="51-200">51–200</option>
                      <option value="201-1000">201–1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="useCase" className={labelClass}>
                      Primary Use Case
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      value={form.useCase}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select use case</option>
                      <option value="Consumer Intelligence">Consumer Intelligence</option>
                      <option value="AI Deployment">AI Deployment</option>
                      <option value="CRM Intelligence">CRM Intelligence</option>
                      <option value="ERP Implementation">ERP Implementation</option>
                      <option value="Education Technology">Education Technology</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    What are you hoping to achieve? <span className="text-[#E8503A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your data challenges and goals..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-lg text-sm font-bold tracking-wider uppercase hover:bg-[#1a1a1a]/90 transition-colors mt-1"
                >
                  Book My Demo →
                </button>

                <p className="text-center text-[11px] text-[#1a1a1a]/40 leading-relaxed">
                  We typically respond within 2 business hours during 9am–6pm IST, Mon–Fri.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
