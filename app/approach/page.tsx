"use client";

import { Check, ArrowRight } from "lucide-react";

/**
 * Premium Teaching Approach Page
 * Design: Structured principles, elegant cards, formal presentation
 */
export default function Approach() {
  return (
    <div className="min-h-screen bg-[#fcfcfd]">

      {/* --- SECTION 1: HERO (REFINED) --- */}
      <section className="relative w-full py-28 lg:py-36 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A3C5E] mb-8">
            Our Teaching Approach
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-slate-600 font-medium">
            A methodology built on <span className="text-[#1A3C5E]">discipline</span>, <span className="text-[#1A3C5E]">clarity</span>, <span className="text-[#1A3C5E]">consistency</span>, and <span className="text-[#1A3C5E]">mentorship</span>.
          </p>

          {/* Visual Anchor */}
          <div className="mt-12 h-px w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
        </div>
      </section>

      {/* --- SECTION 2: CORE PILLARS (2x2 GRID) --- */}
      <section className="py-24 bg-[#fcfcfd]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A3C5E] sm:text-4xl">
              The Four Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Discipline */}
            <PillarCard
              title="Discipline"

              points={[
                "Structured daily schedules",
                "Regular attendance tracking",
                "Accountability systems"
              ]}
            />
            {/* Pillar 2: Concept Clarity */}
            <PillarCard
              title="Concept Clarity"

              points={[
                "Step-by-step concept building",
                "Visual & interactive learning",
                "Focus on 'Why' and 'How'"
              ]}
            />
            {/* Pillar 3: Consistency */}
            <PillarCard
              title="Consistency"

              points={[
                "Daily practice routines",
                "Incremental progress tracking",
                "No last-minute cramming"
              ]}
            />
            {/* Pillar 4: Mentorship */}
            <PillarCard
              title="Mentorship"

              points={[
                "One-on-one strategy sessions",
                "Stress management support",
                "Personalized course correction"
              ]}
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 3: COMPARISON (WHY RISE) --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A3C5E] sm:text-4xl">
              Why RISE Stands Apart
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We focus on structural advantages that lead to better outcomes.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
              <div className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider text-center">Other Institutes</div>
              <div className="p-6 text-sm font-bold text-[#f97316] uppercase tracking-wider text-center bg-orange-50/50">RISE Approach</div>
            </div>

            <ComparisonRow
              label="Teaching Style"
              other="Lectures focusing on rote memorization"
              rise="Interactive sessions building logic"
            />
            <ComparisonRow
              label="Doubt Resolution"
              other="Limited availability, often crowded"
              rise="Immediate, personalized attention"
            />
            <ComparisonRow
              label="Batch Size"
              other="Large batches (60-100+ students)"
              rise="Small cohorts for individual focus"
            />
            <ComparisonRow
              label="Mentorship"
              other="Generic academic counseling"
              rise="Dedicated mentor for every student"
            />
            <ComparisonRow
              label="Testing"
              other="Sporadic or purely score-focused"
              rise="Diagnostic processing & feedback"
            />
            <ComparisonRow
              label="Parent Connection"
              other="Results-only communication"
              rise="Continuous partnership & updates"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROCESS FLOW --- */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A3C5E] sm:text-4xl">
              The Path to Mastery
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              <ProcessStep number="01" title="Enroll" desc="Assessment & Goal Setting" />
              <ProcessStep number="02" title="Learn" desc="Concept Acquisition" />
              <ProcessStep number="03" title="Practice" desc="Problem Solving Drills" />
              <ProcessStep number="04" title="Test" desc="Performance Analysis" />
              <ProcessStep number="05" title="Refine" desc="Feedback & Improvement" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function PillarCard({ title, points }: { title: string, points: string[] }) {
  return (
    <div className="group bg-white/70 backdrop-blur-md p-6 lg:p-7 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-200 ease-out supports-[backdrop-filter]:bg-white/60">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>

      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start text-sm font-medium text-slate-900">
            <Check className="w-4 h-4 text-orange-600 mr-2.5 mt-0.5 shrink-0" strokeWidth={2.5} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonRow({ label, other, rise }: { label: string, other: string, rise: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-100 last:border-0 group">
      {/* Mobile Label (Visible only on small screens) */}
      <div className="md:hidden p-4 bg-slate-50 font-semibold text-slate-700 text-center border-b border-slate-100">
        {label}
      </div>

      <div className="p-6 text-slate-500 text-center flex flex-col justify-center border-r border-slate-100 md:border-r-0">
        <span className="md:hidden text-xs uppercase tracking-wide mb-1 opacity-70">Other Institutes</span>
        {other}
      </div>
      <div className="p-6 text-[#1A3C5E] font-medium text-center bg-orange-50/10 group-hover:bg-orange-50/30 transition-colors flex flex-col justify-center">
        <span className="md:hidden text-xs uppercase tracking-wide mb-1 text-orange-600 opacity-80">RISE</span>
        {rise}
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm lg:shadow-none lg:border-none lg:bg-transparent">
      <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-500 text-orange-600 font-bold flex items-center justify-center mb-4 text-lg shadow-sm z-10 relative">
        {number}
      </div>
      <h4 className="text-lg font-bold text-[#1A3C5E] mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}
