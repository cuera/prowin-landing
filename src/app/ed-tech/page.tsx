"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── DATA ───────────────────────────────────────────────────────────────────

const products = [
  {
    id: "erp",
    tag: "01 — ADMINISTRATION",
    title: "School ERP",
    body: "End-to-end operations backbone — admissions, fees, HR, timetables, hostel, transport, and compliance. One system for every administrative task.",
    href: "#erp",
  },
  {
    id: "ai-tools",
    tag: "02 — AI TOOLS",
    title: "AI Suite",
    body: "Auto-grade assessments, generate curriculum-aligned content, detect attendance patterns, and personalise learning paths — all from a single AI layer.",
    href: "#ai-tools",
  },
  {
    id: "lesson-planner",
    tag: "03 — PLANNING",
    title: "Lesson Planner",
    body: "AI-co-piloted lesson design mapped to CBSE, ICSE, IB, or custom curriculum. Resource libraries, Bloom's taxonomy alignment, and co-teaching workflows built in.",
    href: "#lesson-planner",
  },
  {
    id: "dashboard",
    tag: "04 — VISIBILITY",
    title: "Admin & Teacher Dashboard",
    body: "Principal, HOD, and teacher views — each surfacing the metrics that matter to that role. Real-time, not last month.",
    href: "#dashboard",
  },
  {
    id: "marks",
    tag: "05 — ANALYTICS",
    title: "Marks Visualization",
    body: "Progress trajectories, class heat maps, board exam predictions, and subject-wise performance gaps — served as visual intelligence, not spreadsheet exports.",
    href: "#marks",
  },
  {
    id: "study-buddy",
    tag: "06 — STUDENT AI",
    title: "AI Study Buddy",
    body: "24/7 doubt resolution, concept explainers, practice generation, and spaced-repetition flashcards — a personal tutor in every student's pocket.",
    href: "#study-buddy",
  },
];

const erpFeatures = [
  {
    title: "Student Information System",
    body: "Complete student lifecycle from application to alumni — admissions, rollno. assignment, section allocation, transfer certificates, and leaving certificates in one place.",
  },
  {
    title: "Fee Management & Billing",
    body: "Flexible fee structures, instalment plans, online payment collection via Razorpay/PayU, automated reminders, receipts, and defaulter tracking with aging reports.",
  },
  {
    title: "Timetable & Academic Calendar",
    body: "Automated timetable generation with conflict detection across teachers, rooms, and subjects. Holiday management, exam scheduling, and substitute assignment.",
  },
  {
    title: "HR, Payroll & Leave",
    body: "Staff onboarding, biometric attendance, payroll with PF/ESI, appraisal workflows, and leave management — fully compliant with labour regulations.",
  },
  {
    title: "Hostel, Transport & Library",
    body: "Room allocation, mess billing, vehicle route management, GPS tracking, and library OPAC with barcode scanning — operated from the same admin panel.",
  },
  {
    title: "Multi-Branch & Group Management",
    body: "Centrally govern multiple schools or colleges under one login. Roll up metrics across campuses for group-level reporting, benchmarking, and compliance.",
  },
];

const aiToolFeatures = [
  {
    title: "Smart Content Generator",
    body: "Input a topic and grade — get lesson summaries, reading passages, differentiated worksheets, and quiz banks in minutes. Aligned to NCERT, Cambridge, or custom syllabi.",
  },
  {
    title: "Auto-Grading Engine",
    body: "Grade MCQs instantly. Short answers scored with rubric-aware NLP. Long-form essays analysed for structure, argumentation, and language quality.",
  },
  {
    title: "Adaptive Learning Paths",
    body: "Students who struggle with a concept get a remedial micro-module. Students who ace it get extension challenges. No teacher manual intervention required.",
  },
  {
    title: "Attendance Intelligence",
    body: "Face-recognition attendance with proxy detection. Automated parent SMS when absent. Chronic absentee flagging with counsellor alerts 3 days before threshold.",
  },
  {
    title: "Plagiarism & Integrity Detection",
    body: "Cross-check submissions against global databases, peer papers, and previous batches. Similarity scores with source highlights — for fair, consistent evaluation.",
  },
  {
    title: "Parent-Teacher Communication Hub",
    body: "Multilingual broadcast messages, homework notifications, fee reminders, and individual chat threads — all logged and searchable, eliminating WhatsApp group chaos.",
  },
];

const lessonPlannerFeatures = [
  {
    title: "Curriculum-Aligned Planning",
    body: "Map every lesson to learning objectives, competency tags, and board standards. Bloom's taxonomy levels auto-suggested. Never teach out of sequence again.",
  },
  {
    title: "AI Lesson Co-Pilot",
    body: "Describe the topic and duration — ProWin generates a structured lesson plan with hook activity, core instruction, formative check, and exit ticket baked in.",
  },
  {
    title: "Resource Library",
    body: "Attach videos, simulation links, worksheets, and past papers to each lesson. School-wide library means one teacher's effort benefits every teacher of that subject.",
  },
  {
    title: "Substitute Handover Mode",
    body: "When a teacher is absent, the sub sees the exact planned lesson, resources, and student notes — maintaining continuity without a single brief.",
  },
];

const marks = {
  dashboard: [
    { subject: "Mathematics", avg: 81, top: 96, trend: "+4%" },
    { subject: "Science", avg: 74, top: 92, trend: "+1%" },
    { subject: "English", avg: 88, top: 98, trend: "+3%" },
    { subject: "Social Studies", avg: 71, top: 90, trend: "−2%" },
  ],
  visuals: [
    { label: "Class Heat Maps", body: "Instantly see which students are struggling in which subjects — colour-coded by performance band." },
    { label: "Progress Trajectories", body: "Track every student's score arc across terms. Early intervention triggers when trajectory turns negative." },
    { label: "Board Exam Prediction", body: "ML models trained on 5 years of board results predict student scores 4 months out. Intervention plans auto-generated for at-risk cases." },
    { label: "Comparative Batch Analysis", body: "Benchmark current batch against previous years and peer schools anonymised in the network." },
  ],
};

const studyBuddyFeatures = [
  { icon: "💬", title: "24/7 Doubt Resolution", body: "Type or voice-input any question. Concept explained step by step with worked examples. Supports Hindi, Tamil, Telugu, and 8 other Indian languages." },
  { icon: "📝", title: "Practice Problem Generator", body: "Specify topic, difficulty, and count. Get fresh problems every session — never the same question twice. Includes step-wise solutions on request." },
  { icon: "🧠", title: "Spaced-Repetition Flashcards", body: "Cards resurface at the exact moment memory begins to decay — proven to improve long-term retention by up to 200% over passive rereading." },
  { icon: "🎯", title: "Exam Countdown Mode", body: "Input exam date and syllabus coverage. AI builds a daily study plan, tracks completion, and adjusts priority based on weak areas." },
  { icon: "📊", title: "Syllabus Coverage Tracker", body: "Students see exactly which chapters are done, in progress, or untouched — eliminating last-minute syllabus panic." },
  { icon: "🔊", title: "Voice & Vernacular Support", body: "Ask doubts verbally. Receive spoken explanations. Ideal for visual learners and students in low-connectivity environments." },
];

const steps = [
  {
    num: "STEP 01",
    title: "Deploy ERP",
    body: "Connect SIS, fee systems, HR, and LMS in a single migration sprint. Typical go-live: 4–6 weeks for a 2,000-student institution.",
    result: "Operations unified",
    image: "/erp.avif",
  },
  {
    num: "STEP 02",
    title: "Enable AI Tools & Lesson Planner",
    body: "Teachers access the AI suite from day one. Lesson plans pre-loaded for each subject. Gradebook synced automatically.",
    result: "Teachers empowered",
    image: "/edtech.avif",
  },
  {
    num: "STEP 03",
    title: "Students Activate Study Buddy",
    body: "Mobile app deployed to student devices. AI Study Buddy available instantly. No setup required beyond a school email.",
    result: "Learning personalised",
    image: "/ai auto.avif",
  },
  {
    num: "STEP 04",
    title: "Dashboards & Marks Intelligence",
    body: "Real-time performance data flows into dashboards for every stakeholder — from student to principal — with interventions triggered automatically.",
    result: "Outcomes tracked",
    image: "/crm.avif",
  },
];

const integrations = [
  "Google Classroom",
  "Microsoft Teams",
  "Zoom / Google Meet",
  "Moodle",
  "Canvas LMS",
  "CBSE / NCERT",
  "Cambridge International",
  "IB Curriculum",
  "Razorpay / PayU",
  "WhatsApp Business API",
  "Tally ERP",
  "DigiLocker / Aadhaar",
  "PowerSchool",
  "Schoology",
];

const faqs = [
  {
    q: "Is this suitable for K-12 schools, higher education, and coaching institutes?",
    a: "Yes — all three. K-12 schools use the full ERP + lesson planner stack. Higher education institutions lean on admissions intelligence, marks analytics, and faculty HR. Coaching institutes and ed-tech platforms use the AI Study Buddy and assessment engine as a standalone layer.",
  },
  {
    q: "How does the AI Study Buddy ensure age-appropriate, safe interactions for students?",
    a: "Study Buddy operates on a closed, curriculum-scoped model — it only responds to academic queries within the defined subject boundary. It has no general internet access. All conversations are logged for institutional review. Content filters and safe-browsing guardrails are on by default.",
  },
  {
    q: "Can parents track their child's progress in real time?",
    a: "Yes. The Parent Portal gives guardians a live view of attendance, marks, fee status, homework submissions, and AI Study Buddy usage. Alerts arrive via SMS or WhatsApp when thresholds are crossed — no app download required for basic notifications.",
  },
  {
    q: "Does the ERP support multi-branch school groups?",
    a: "Fully. Group-level admins see consolidated metrics across campuses — enrolment, revenue, staff headcount, and academic performance — while branch principals see only their campus. RBAC ensures data separation without information silos.",
  },
  {
    q: "How does student data privacy work? Are you DPDP Act compliant?",
    a: "ProWin stores all student PII within the institution's own cloud tenancy — we never comingle data across customers. We are aligned with India's DPDP Act 2023, FERPA, and GDPR. Consent workflows, data retention policies, and deletion requests are managed from the admin panel.",
  },
  {
    q: "Can teachers use the lesson planner without internet connectivity?",
    a: "Lesson plans and downloaded resources are cached locally on the teacher's device. Content creation features require connectivity, but delivery and classroom use work fully offline. Syncing resumes automatically when connectivity is restored.",
  },
  {
    q: "How does the marks visualization connect with existing gradebooks?",
    a: "ProWin pulls marks via API from Moodle, Canvas, Google Classroom, or any gradebook with CSV export. Our ETL layer normalises grading scales (percentage, GPA, CGPA) automatically. Setup typically takes under 2 hours for a standard integration.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function EdTechPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#071519] min-h-screen">
      <Header solidBg />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#071519] min-h-[90vh] flex items-center pt-[160px] pb-[120px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/edu.avif"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-[0.28] object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071519]/95 via-[#071519]/75 to-[#071519]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="max-w-[860px]">
            <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/40 mb-6">
              EDUCATION TECHNOLOGY — COMPLETE INSTITUTION OS
            </motion.p>
            <motion.h1
              {...fadeUp(0.06)}
              className="text-[42px] sm:text-[64px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6"
            >
              Every Tool Your School Needs.<br />
              <span className="text-white/50">One Platform.</span>
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="text-[16px] text-[#a1b3b8] leading-[1.7] max-w-[660px] mb-10">
              School ERP, AI lesson planning, marks visualization, admin dashboards,
              and a personal AI Study Buddy — built as a unified system, not six disconnected
              tools. From first bell to board results, ProWin runs the institution.
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-6 mb-14">
              {[
                { val: "34%", label: "improvement in retention" },
                { val: "91%", label: "at-risk identification accuracy" },
                { val: "4–6 wk", label: "full ERP deployment" },
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
                href="/demo"
                className="px-7 py-3.5 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors text-center"
              >
                Book an Education Demo
              </a>
              <a
                href="#erp"
                className="px-7 py-3.5 border border-white/25 text-white text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-2"
              >
                Explore the Platform <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Mini product labels */}
          <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3 mt-16">
            {products.map((p) => (
              <a
                key={p.id}
                href={p.href}
                className="bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/50 uppercase tracking-[0.15em] px-4 py-2 rounded-sm hover:bg-white/[0.08] hover:text-white/80 transition-all duration-200"
              >
                {p.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT SUITE OVERVIEW ────────────────────────────────────────── */}
      <section className="bg-[#07161a] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            THE COMPLETE SUITE
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-14 max-w-[720px]">
            Six Products. One Institution OS.
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {products.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.href}
                {...fadeUp(i * 0.06)}
                className="bg-[#071519] p-10 flex flex-col gap-5 hover:bg-[#0a1f25] group transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8503A]/0 to-transparent group-hover:via-[#E8503A]/40 transition-all duration-500" />
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-[#E8503A]/70 transition-colors duration-300">
                  {p.tag}
                </p>
                <h3 className="text-[26px] sm:text-[30px] font-medium text-white tracking-[-0.02em] leading-tight">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#7a9ba3] leading-[1.7] flex-1">
                  {p.body}
                </p>
                <div className="flex items-center gap-2 text-[13px] text-white/30 group-hover:text-white/70 transition-colors duration-300 font-medium">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL ERP ───────────────────────────────────────────────────── */}
      <section id="erp" className="bg-[#071519] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                01 — SCHOOL ERP
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                Run Every Administrative Function From One Screen
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] mb-12 max-w-[560px]">
                Replace the patchwork of Excel sheets, legacy software, and manual registers.
                ProWin ERP gives schools a single operational backbone — from the first
                admission inquiry to the final leaving certificate.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6">
                {erpFeatures.slice(0, 4).map((f, i) => (
                  <motion.div key={f.title} {...fadeUp(i * 0.05)} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
                      <h3 className="text-[17px] font-semibold text-white tracking-[-0.01em]">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-[#7a9ba3] leading-[1.7] pl-[18px]">
                      {f.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ERP Mock Dashboard */}
            <div className="lg:pt-16">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 h-[460px] flex flex-col justify-end group">
                <img
                  src="/edu2.jpg"
                  alt="School ERP Dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071519] via-[#071519]/90 to-transparent" />
                
                <div className="relative p-8 w-full z-10 flex flex-col h-[400px]">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5 flex-shrink-0">
                    LIVE ERP SNAPSHOT
                  </p>
                  
                  <div className="relative flex-1 overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)" }}>
                    <motion.div 
                      className="space-y-0"
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ ease: "linear", duration: 18, repeat: Infinity }}
                    >
                      {[ 
                        { label: "Enrolled Students", val: "4,812", status: "active" },
                        { label: "Fee Collection (This Month)", val: "₹38.4L", status: "success" },
                        { label: "Staff Attendance Today", val: "97.3%", status: "active" },
                        { label: "Pending Admissions", val: "143 in pipeline", status: "pending" },
                        { label: "Library Books Issued", val: "845", status: "active" },
                        { label: "Transport Vehicles Active", val: "24/24 routes", status: "active" },
                        { label: "Hostel Occupancy", val: "98%", status: "active" },
                        { label: "Timetable Clashes", val: "0", status: "success" },
                        { label: "Exams Scheduled", val: "12 (Next Week)", status: "active" },
                        { label: "Defaulter Dues", val: "₹2.1L", status: "pending" },

                        { label: "Enrolled Students", val: "4,812", status: "active" },
                        { label: "Fee Collection (This Month)", val: "₹38.4L", status: "success" },
                        { label: "Staff Attendance Today", val: "97.3%", status: "active" },
                        { label: "Pending Admissions", val: "143 in pipeline", status: "pending" },
                        { label: "Library Books Issued", val: "845", status: "active" },
                        { label: "Transport Vehicles Active", val: "24/24 routes", status: "active" },
                        { label: "Hostel Occupancy", val: "98%", status: "active" },
                        { label: "Timetable Clashes", val: "0", status: "success" },
                        { label: "Exams Scheduled", val: "12 (Next Week)", status: "active" },
                        { label: "Defaulter Dues", val: "₹2.1L", status: "pending" },
                      ].map((row, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3.5 border-b border-white/[0.05]">
                          <span className="text-[13px] text-white/70">{row.label}</span>
                          <span className={`text-[14px] font-semibold ${row.status === "pending" ? "text-amber-400" : row.status === "success" ? "text-emerald-400" : "text-white"}`}>
                            {row.val}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-5 pt-4 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">Real-time sync</span>
                  </div>
                </div>
              </div>
              
              {/* Extra features aligned horizontally with left block */}
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {erpFeatures.slice(4).map((f, i) => (
                  <motion.div key={f.title} {...fadeUp((i + 4) * 0.05)} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
                      <h3 className="text-[17px] font-semibold text-white tracking-[-0.01em]">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-[#7a9ba3] leading-[1.7] pl-[18px]">
                      {f.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI TOOLS SUITE ───────────────────────────────────────────────── */}
      <section id="ai-tools" className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                02 — AI TOOLS SUITE
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                Dedicated AI Tools.<br />
                <span className="text-white/50">Built for Indian Classrooms.</span>
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] mb-12 max-w-[580px]">
                A comprehensive AI suite that removes the repetitive burden from teachers —
                so they spend more time teaching and less time marking, planning, and communicating.
                Everything runs on your institutional data, with no student information leaving your cloud.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8">
                {aiToolFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    {...fadeUp(i * 0.06)}
                    className="relative overflow-hidden rounded-xl bg-[#071519] border border-white/[0.08] p-7 hover:border-[#E8503A]/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl shadow-black/40"
                  >
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-transparent group-hover:from-[#E8503A]/10 to-transparent pointer-events-none transition-colors duration-500 rounded-full blur-2xl" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] mb-4 group-hover:scale-[1.75] transition-transform duration-300" />
                    <h3 className="relative z-10 text-[18px] font-semibold text-white tracking-[-0.01em] mb-3 group-hover:text-white/90">
                      {f.title}
                    </h3>
                    <p className="relative z-10 text-[13px] text-[#7a9ba3] leading-[1.7] group-hover:text-white/80 transition-colors duration-300">
                      {f.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Side image */}
            <div className="hidden lg:flex flex-col gap-5 pt-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-default">
                <img
                  src="/edu.avif"
                  alt="AI Tools Suite"
                  className="w-full h-[320px] object-cover opacity-50 mix-blend-luminosity group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F25] to-transparent pointer-events-none opacity-50" />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] group cursor-default shadow-2xl">
                <img
                  src="/edaidash.avif"
                  alt="AI Grading Dashboard"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LESSON PLANNER ───────────────────────────────────────────────── */}
      <section id="lesson-planner" className="bg-[#071519] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: content */}
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                03 — LESSON PLANNER
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                Every Lesson. AI-Planned. Curriculum-Locked.
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] mb-10 max-w-[540px]">
                Teachers describe what they want to teach. ProWin's AI co-pilot generates a
                structured lesson plan with objectives, activities, formative checks, and an
                exit ticket — in under 90 seconds. Mapped to CBSE, ICSE, IB, or your custom curriculum.
              </motion.p>

              <div className="space-y-6 mb-10">
                {lessonPlannerFeatures.map((f, i) => (
                  <motion.div key={f.title} {...fadeUp(i * 0.06)} className="flex gap-5 group">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[11px] font-mono text-white/30 group-hover:bg-[#E8503A] group-hover:border-[#E8503A] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(232,80,58,0.4)] transition-all duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-white mb-1.5">{f.title}</h3>
                      <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: mock lesson plan card */}
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8503A]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative bg-[#071519]/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8 sm:p-10 overflow-hidden shadow-2xl group-hover:-translate-y-2 group-hover:shadow-[#E8503A]/5 transition-all duration-500">
                <img src="/edu2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">AI-GENERATED LESSON PLAN</p>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 animate-pulse">Ready</span>
                  </div>
                <div className="mb-5">
                  <p className="text-[12px] text-white/40 mb-1">Topic</p>
                  <p className="text-[16px] font-semibold text-white">Laws of Motion — Class IX, 45 min</p>
                </div>
                <div className="space-y-3">
                  {[
                    { phase: "Hook (5 min)", activity: "Video: ball dropping from Leaning Tower of Pisa", bloom: "Remember" },
                    { phase: "Instruction (20 min)", activity: "Newton's 3 Laws with live demonstrations", bloom: "Understand" },
                    { phase: "Activity (12 min)", activity: "Group experiment: force vs acceleration on toy cars", bloom: "Apply" },
                    { phase: "Check (5 min)", activity: "3-question MCQ on Whiteboard", bloom: "Analyse" },
                    { phase: "Exit Ticket (3 min)", activity: "Write one real-world example for each law", bloom: "Evaluate" },
                  ].map((row) => (
                    <div key={row.phase} className="flex items-start gap-4 py-3 border-b border-white/[0.06]">
                      <div className="min-w-[110px]">
                        <p className="text-[11px] font-mono text-white/40 uppercase tracking-wide">{row.phase}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] text-white/80">{row.activity}</p>
                        <span className="text-[10px] text-[#E8503A]/70 font-mono">{row.bloom}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white bg-white/10 rounded-sm hover:bg-white/15 transition-colors">
                    Assign to Class
                  </button>
                  <button className="flex-1 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white/60 border border-white/15 rounded-sm hover:border-white/30 transition-colors">
                    Save to Library
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMIN & TEACHER DASHBOARD ────────────────────────────────────── */}
      <section id="dashboard" className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            04 — ADMIN & TEACHER DASHBOARD
          </motion.p>
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05]">
              Every Role Sees What They Need to Act On
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] lg:pt-4">
              No more navigating a one-size-fits-all system. Principals see school-wide KPIs.
              HODs see department metrics. Teachers see their class. Parents see their child.
              Each view surfaces only the signals that drive action — not noise.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {/* Principal View */}
            <motion.div {...fadeUp(0)} className="group relative overflow-hidden rounded-2xl bg-[#071519] border border-white/10 p-8 hover:border-[#E8503A]/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E8503A]/5 transition-all duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-transparent group-hover:from-[#E8503A]/10 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-700" />
              <div className="relative z-10 flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#E8503A] group-hover:scale-150 transition-transform duration-300" />
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">PRINCIPAL VIEW</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Total Enrolment", val: "4,812", delta: "+7.2% YoY" },
                  { label: "Net Promoter Score", val: "78", delta: "+4 pts" },
                  { label: "Fee Collection Rate", val: "94.3%", delta: "↑ from 89%" },
                  { label: "Staff Satisfaction", val: "4.3/5", delta: "Annual survey" },
                  { label: "NAAC Compliance", val: "On track", delta: "3 actions pending" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-2 border-b border-white/[0.06]">
                    <span className="text-[13px] text-white/60">{r.label}</span>
                    <div className="text-right">
                      <p className="text-[14px] font-semibold text-white">{r.val}</p>
                      <p className="text-[10px] text-white/30">{r.delta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* HOD View */}
            <motion.div {...fadeUp(0.06)} className="group relative overflow-hidden rounded-2xl bg-[#071519] border border-white/10 p-8 hover:border-amber-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/5 transition-all duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-transparent group-hover:from-amber-400/10 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-700" />
              <div className="relative z-10 flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 transition-transform duration-300" />
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">HOD VIEW — SCIENCE</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Dept Avg Score", val: "74.8%", delta: "Vs 71.2% last term" },
                  { label: "Lessons Covered", val: "68%", delta: "On syllabus track" },
                  { label: "At-Risk Students", val: "22", delta: "Flagged this week" },
                  { label: "Teacher Lesson Plans", val: "94% filed", delta: "3 overdue" },
                  { label: "Lab Utilisation", val: "82%", delta: "of scheduled hours" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-2 border-b border-white/[0.06]">
                    <span className="text-[13px] text-white/60">{r.label}</span>
                    <div className="text-right">
                      <p className="text-[14px] font-semibold text-white">{r.val}</p>
                      <p className="text-[10px] text-white/30">{r.delta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Teacher View */}
            <motion.div {...fadeUp(0.12)} className="group relative overflow-hidden rounded-2xl bg-[#071519] border border-white/10 p-8 hover:border-emerald-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-400/5 transition-all duration-500 cursor-default">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-transparent group-hover:from-emerald-400/10 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-700" />
              <div className="relative z-10 flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform duration-300" />
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">TEACHER VIEW — CLASS 9A</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Present Today", val: "38 / 42", delta: "4 absent" },
                  { label: "Homework Submitted", val: "91%", delta: "4 pending" },
                  { label: "Today's Lesson", val: "Laws of Motion", delta: "45 min planned" },
                  { label: "Class Avg (Last Test)", val: "77.4%", delta: "Up from 71%" },
                  { label: "Study Buddy Usage", val: "82%", delta: "of students active" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-2 border-b border-white/[0.06]">
                    <span className="text-[13px] text-white/60">{r.label}</span>
                    <div className="text-right">
                      <p className="text-[14px] font-semibold text-white">{r.val}</p>
                      <p className="text-[10px] text-white/30">{r.delta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARKS VISUALIZATION ──────────────────────────────────────────── */}
      <section id="marks" className="bg-[#071519] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                05 — MARKS VISUALIZATION
              </motion.p>
              <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6">
                Academic Data That Teachers Can Actually Use
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] mb-10 max-w-[540px]">
                Stop exporting marks to Excel and building charts manually.
                ProWin turns every gradebook entry into live visual intelligence —
                for teachers, HODs, principals, and parents.
              </motion.p>

              <div className="space-y-6">
                {marks.visuals.map((v, i) => (
                  <motion.div key={v.label} {...fadeUp(i * 0.06)} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h3 className="text-[17px] font-semibold text-white mb-1.5">{v.label}</h3>
                      <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{v.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mock marks chart */}
            <div>
              <div className="bg-[#0A1F25] rounded-2xl border border-white/10 p-8">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
                  CLASS 9A — TERM 2 PERFORMANCE
                </p>
                <div className="space-y-5">
                  {[
                    { subject: "Mathematics", avg: 81, top: 96 },
                    { subject: "Science", avg: 74, top: 92 },
                    { subject: "English", avg: 88, top: 98 },
                    { subject: "Social Studies", avg: 71, top: 90 },
                    { subject: "Hindi", avg: 85, top: 97 },
                  ].map((row) => (
                    <div key={row.subject}>
                      <div className="flex justify-between text-[12px] mb-1.5">
                        <span className="text-white/70">{row.subject}</span>
                        <span className="text-white/50">Avg {row.avg}% · Top {row.top}%</span>
                      </div>
                      <div className="h-2 bg-white/[0.07] rounded-full overflow-hidden">
                        <div className="h-full flex w-full">
                          <motion.div
                            className="bg-[#E8503A]/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${row.avg}%` }}
                            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                          <motion.div
                            className="bg-emerald-400/30 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${row.top - row.avg}%` }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1.5 bg-[#E8503A]/60 rounded-full" />
                    <span className="text-[11px] text-white/40">Class Average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1.5 bg-emerald-400/30 rounded-full" />
                    <span className="text-[11px] text-white/40">Top Performer Gap</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { val: "12", label: "Students at Risk", color: "text-[#E8503A]" },
                  { val: "4.1%", label: "Predicted drop-out", color: "text-amber-400" },
                  { val: "8 wk", label: "Board exam buffer", color: "text-emerald-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#0A1F25] rounded-xl border border-white/[0.08] p-5 text-center">
                    <p className={`text-[24px] font-bold ${s.color} mb-1`}>{s.val}</p>
                    <p className="text-[11px] text-white/40 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI STUDY BUDDY ───────────────────────────────────────────────── */}
      <section id="study-buddy" className="bg-[#0A1F25] py-20 sm:py-28 border-t border-white/5 scroll-mt-20">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            06 — AI STUDY BUDDY
          </motion.p>
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
            <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05]">
              A Personal Tutor in Every Student's Pocket
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7]">
              Not every student can afford private tutoring. AI Study Buddy democratises
              access to on-demand academic help — in their language, at their pace,
              calibrated to their exact syllabus and learning gaps.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
            <div className="grid sm:grid-cols-2 gap-5">
              {studyBuddyFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  {...fadeUp(i * 0.06)}
                  className="rounded-xl bg-[#071519] border border-white/[0.08] p-7 hover:border-[#E8503A]/20 group transition-colors duration-300"
                >
                  <span className="text-[28px] mb-4 block">{f.icon}</span>
                  <h3 className="text-[17px] font-semibold text-white mb-2.5 group-hover:text-white/90">{f.title}</h3>
                  <p className="text-[13px] text-[#7a9ba3] leading-[1.7]">{f.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Mock chat window */}
            <div className="bg-[#071519] rounded-2xl border border-white/10 overflow-hidden sticky top-28">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.07] bg-white/[0.02]">
                <div className="w-7 h-7 rounded-full bg-[#E8503A]/20 flex items-center justify-center">
                  <span className="text-[14px]">🤖</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">ProWin Study Buddy</p>
                  <p className="text-[10px] text-emerald-400 font-mono">● Online · CBSE Class 9</p>
                </div>
              </div>
              <div className="p-5 space-y-4 h-[380px] overflow-y-auto">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex justify-end">
                  <div className="bg-[#E8503A]/15 border border-[#E8503A]/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[240px]">
                    <p className="text-[13px] text-white">I don't understand Newton's 3rd law. Can you explain?</p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -20, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }} className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8503A]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[11px]">🤖</span>
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[280px]">
                    <p className="text-[13px] text-white/90 leading-relaxed">
                      Great question! Newton's 3rd law says: <strong className="text-white">"For every action, there is an equal and opposite reaction."</strong>
                    </p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -20, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }} viewport={{ once: true }} className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8503A]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[11px]">🤖</span>
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[280px]">
                    <p className="text-[13px] text-white/90 leading-relaxed">
                      <strong className="text-white">Example:</strong> When you push a wall, the wall pushes back on you with the same force. That's why you don't move through it! 🧱
                    </p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -20, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, delay: 2.0 }} viewport={{ once: true }} className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8503A]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[11px]">🤖</span>
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[280px]">
                    <p className="text-[13px] text-white/80">Want to try 2 practice problems to test yourself? 📝</p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 2.8 }} viewport={{ once: true }} className="flex justify-end">
                  <div className="bg-[#E8503A]/15 border border-[#E8503A]/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[240px]">
                    <p className="text-[13px] text-white">Yes please!</p>
                  </div>
                </motion.div>
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-[13px] text-white/30 flex-1">Ask any question...</span>
                  <button className="text-[#E8503A]/70 hover:text-[#E8503A] transition-colors">
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
            HOW IT WORKS
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12 max-w-[640px]">
            Institution Live in 4 Stages
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUp(i * 0.1)}
                className="relative rounded-2xl bg-[#0A1F25] border border-white/10 overflow-hidden flex flex-col group hover:border-[#E8503A]/25 transition-colors duration-500"
              >
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F25] to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1 relative z-10">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-white/25 mb-4 group-hover:text-[#E8503A]/70 transition-colors duration-300">
                    {s.num}
                  </p>
                  <h3 className="text-[19px] font-semibold text-white tracking-[-0.02em] mb-3 leading-snug">{s.title}</h3>
                  <p className="text-[13px] text-[#7a9ba3] leading-[1.7] flex-1">{s.body}</p>
                  <div className="flex items-center gap-2 mt-7 pt-5 border-t border-white/[0.07]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8503A]" />
                    <span className="text-[13px] text-white font-semibold">{s.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1F25] py-16 sm:py-20 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-8">
            INTEGRATIONS — CONNECT WHAT YOU ALREADY USE
          </p>
          <div className="relative overflow-hidden flex w-full" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)' }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="flex gap-4 w-max"
            >
              {[...integrations, ...integrations, ...integrations, ...integrations].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="bg-[#071519] border border-white/[0.08] rounded-full px-6 py-2.5 text-[13px] text-white/55 font-medium hover:border-[#E8503A]/30 hover:bg-[#E8503A]/5 hover:text-white/90 transition-all duration-300 cursor-default flex-shrink-0"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#071519] py-20 sm:py-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto">
          <div className="relative bg-[#0A1F25] rounded-[24px] border border-white/10 p-12 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8503A]/5 rounded-full blur-3xl pointer-events-none" />
            <motion.p {...fadeUp(0)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-5">
              START YOUR PILOT
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="text-[42px] sm:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-[620px]">
              Deploy Where Every Student Matters
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-[15px] text-[#a1b3b8] leading-[1.7] max-w-[520px] mb-10">
              Start with ERP, add AI tools, then activate Study Buddy — or deploy
              the full suite from day one. Most institutions see their first meaningful
              insight within 2 weeks of go-live.
            </motion.p>
            <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row gap-4">
              <a
               href="https://wa.me/919871183680"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#071519] text-[13px] font-bold tracking-wider uppercase rounded-sm hover:bg-white/90 transition-colors"
              >
               Talk to an Education Specialist
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#071519] pb-20 sm:pb-28 border-t border-white/5">
        <div className="w-full px-4 sm:px-[67px] max-w-[1920px] mx-auto pt-16">
          <motion.h2 {...fadeUp(0)} className="text-[42px] sm:text-[52px] font-medium text-white tracking-[-0.03em] leading-[1.05] mb-12 max-w-[480px]">
            Questions?
          </motion.h2>
          <div className="space-y-3 max-w-[860px]">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#0A1F25] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[16px] font-medium text-white pr-8 leading-snug">
                    {faq.q}
                  </span>
                  <span className="text-white/30 flex-shrink-0 text-xl w-6 text-center">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-7 pb-7">
                    <p className="text-[14px] text-[#a1b3b8] leading-[1.75]">{faq.a}</p>
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
