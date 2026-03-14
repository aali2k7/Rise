import { Metadata } from "next";
import {
  Target, Lightbulb, Activity, Users,
  ArrowRight, Check, X,
  BookOpen, Brain, TrendingUp, Award,
  Focus
} from "lucide-react";

export const metadata: Metadata = {
  title: "Teaching Approach | RISE",
  description: "Discover our unique teaching methodology built on discipline, concept clarity, consistency, and mentorship.",
  alternates: {
    canonical: "/approach",
  },
};

export default function Approach() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-orange-100/50 blur-3xl opacity-70" />
          <div className="absolute top-[20%] -left-[10%] w-[30%] h-[40%] rounded-full bg-blue-100/50 blur-3xl opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-orange-600 font-bold text-sm mb-8 scroll-reveal">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            The RISE Methodology
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1A3C5E] tracking-tight mb-8 scroll-reveal" style={{ transitionDelay: '100ms' }}>
            Not Just Teaching.<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Cognitive Engineering.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed scroll-reveal font-medium" style={{ transitionDelay: '200ms' }}>
            A rigorous, battle-tested ecosystem built on <strong className="text-slate-800">discipline</strong>, <strong className="text-slate-800">concept clarity</strong>, <strong className="text-slate-800">consistency</strong>, and <strong className="text-slate-800">mentorship</strong>. We don&apos;t just prepare you for exams; we rewire how you think.
          </p>
        </div>
      </section>

      {/* 2. CORE PILLARS OVERLAP */}
      <section className="relative z-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <PillarCard
              delay="0"
              icon={Target}
              title="Discipline"
              desc="Structured environments breed success. Our zero-tolerance policy for inconsistency ensures peak focus."
              color="blue"
            />
            <PillarCard
              delay="100ms"
              icon={Lightbulb}
              title="Concept Clarity"
              desc="We destroy rote learning. We build from first principles so you can solve unseen problems instantly."
              color="amber"
            />
            <PillarCard
              delay="200ms"
              icon={Activity}
              title="Consistency"
              desc="Daily atomic habits compounded over time. Micro-tests and continuous tracking eliminate surprises."
              color="emerald"
            />
            <PillarCard
              delay="300ms"
              icon={Users}
              title="Mentorship"
              desc="You are never alone. 1-on-1 performance reviews and psychological support for peak temperament."
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* 3. COMPARISON SECTION */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A3C5E] mb-6">Why RISE Stands Apart</h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">See exactly how our structural advantages translate into better outcomes for our students.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden scroll-reveal">
            {/* Table Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#1A3C5E] text-white hidden lg:grid">
              <div className="p-6 font-semibold text-lg border-r border-[#2A5A8E]">Feature</div>
              <div className="p-6 font-semibold text-lg text-center border-r border-[#2A5A8E] text-slate-300">Traditional Coaching</div>
              <div className="p-6 font-bold text-lg text-center text-orange-400">The RISE Approach</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-100">
              <ComparisonRow
                feature="Teaching Style"
                traditional="Lectures focusing on rote memorization"
                rise="Interactive sessions building deep logic"
              />
              <ComparisonRow
                feature="Batch Size"
                traditional="Large crowds (60-120+ students)"
                rise="Strictly small cohorts (≤ 30 max)"
              />
              <ComparisonRow
                feature="Doubt Resolution"
                traditional="Limited availability, intimidating"
                rise="Mandatory, immediate, personalized"
              />
              <ComparisonRow
                feature="Testing Focus"
                traditional="Sporadic, purely score-focused"
                rise="Diagnostic micro-tracking & feedback"
              />
              <ComparisonRow
                feature="Mentorship"
                traditional="Generic academic counseling"
                rise="Dedicated mentor for every single student"
              />
              <ComparisonRow
                feature="Parent Connection"
                traditional="Results-only communication at end"
                rise="Continuous partnership & weekly updates"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS FLOW */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A3C5E] mb-6">The Path to Mastery</h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">A systematic, scientifically designed pipeline that transforms potential into top-tier ranks.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-slate-100 via-orange-300 to-slate-100 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              <ProcessStep
                num="01"
                icon={Focus}
                title="Establish"
                desc="Core baseline assessment & target setting."
                delay="0ms"
              />
              <ProcessStep
                num="02"
                icon={BookOpen}
                title="Absorb"
                desc="Immersive concept acquisition from experts."
                delay="100ms"
              />
              <ProcessStep
                num="03"
                icon={Brain}
                title="Apply"
                desc="Rigorous, graded problem-solving drills."
                delay="200ms"
              />
              <ProcessStep
                num="04"
                icon={TrendingUp}
                title="Diagnose"
                desc="High-frequency testing with analysis."
                delay="300ms"
              />
              <ProcessStep
                num="05"
                icon={Award}
                title="Conquer"
                desc="Iterative refinement leading to peak ranks."
                delay="400ms"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 lg:py-32 bg-[#1A3C5E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute -top-[50%] -right-[10%] w-[50%] h-[100%] rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Experience the RISE Difference</h2>
          <p className="text-slate-300 text-xl font-medium mb-12 max-w-3xl mx-auto">
            Stop gambling with your future. Join the system that consistently architects top ranks in JEE and NEET.
          </p>
          <a href="/enquire" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)]">
            Book a Free Counseling Session <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function PillarCard({ icon: Icon, title, desc, color, delay }: any) {
  const colorMap: any = {
    blue: "bg-blue-50 text-blue-600 border-blue-100 shadow-blue-500/10",
    amber: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-500/10",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-500/10",
    purple: "bg-purple-50 text-purple-600 border-purple-100 shadow-purple-500/10"
  };

  return (
    <div
      className="group bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-300 scroll-reveal"
      style={{ transitionDelay: delay }}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border ${colorMap[color]}`}>
        <Icon strokeWidth={2} className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 leading-relaxed font-medium text-lg">
        {desc}
      </p>
    </div>
  );
}

function ComparisonRow({ feature, traditional, rise }: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-slate-50 transition-colors">
      <div className="p-5 lg:p-8 font-bold text-lg lg:text-xl text-slate-800 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center bg-slate-50/50 lg:bg-transparent group-hover:bg-white transition-colors">
        {feature}
      </div>
      <div className="p-5 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center gap-3 lg:gap-4">
        <X className="w-5 h-5 lg:w-6 lg:h-6 text-red-400 shrink-0 mt-0.5" strokeWidth={3} />
        <span className="font-medium text-sm lg:text-lg text-slate-500">{traditional}</span>
      </div>
      <div className="p-5 lg:p-8 font-semibold bg-orange-50/50 lg:bg-orange-50 flex items-center gap-3 lg:gap-4">
        <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 shrink-0 mt-0.5 shadow-sm rounded-full bg-white p-1" strokeWidth={4} />
        <span className="text-sm lg:text-lg text-slate-900">{rise}</span>
      </div>
    </div>
  );
}

function ProcessStep({ num, icon: Icon, title, desc, delay }: any) {
  return (
    <div className="flex flex-col items-center text-center scroll-reveal relative group" style={{ transitionDelay: delay }}>
      {/* Icon Circle */}
      <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute -top-2 -right-2 bg-[#1A3C5E] text-white text-sm font-bold px-3 py-1 rounded-xl shadow-sm border border-[#2A5A8E]">
          {num}
        </div>
        <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-orange-500" strokeWidth={1.5} />
      </div>

      <h4 className="text-xl lg:text-2xl font-bold text-[#1A3C5E] mb-3">{title}</h4>
      <p className="text-slate-500 text-base leading-relaxed max-w-[220px] font-medium">{desc}</p>
    </div>
  );
}
