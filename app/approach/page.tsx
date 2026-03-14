import { Metadata } from "next";
import {
  Target, Lightbulb, Activity, Users,
  ArrowRight, Check, X,
  BookOpen, Brain, TrendingUp, Award,
  Focus
} from "lucide-react";

export const metadata: Metadata = {
  title: "Teaching Approach | RISE",
  description:
    "Discover our unique teaching methodology built on discipline, concept clarity, consistency, and mentorship.",
  alternates: {
    canonical: "/approach",
  },
};

export default function Approach() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] overflow-hidden">

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-orange-100 blur-3xl opacity-70" />
          <div className="absolute top-[20%] -left-[10%] w-[30%] h-[40%] rounded-full bg-blue-100 blur-3xl opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-orange-600 font-bold text-sm mb-8 scroll-reveal">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            The RISE Methodology
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1A3C5E] tracking-tight mb-8 scroll-reveal">
            Not Just Teaching.
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Cognitive Engineering.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed scroll-reveal font-medium">
            A rigorous ecosystem built on <strong className="text-slate-800">discipline</strong>,
            <strong className="text-slate-800"> concept clarity</strong>,
            <strong className="text-slate-800"> consistency</strong>, and
            <strong className="text-slate-800"> mentorship</strong>.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative z-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            <PillarCard
              icon={Target}
              title="Discipline"
              desc="Structured environments breed success. Zero tolerance for inconsistency."
              color="blue"
            />

            <PillarCard
              icon={Lightbulb}
              title="Concept Clarity"
              desc="First-principles teaching that destroys rote learning."
              color="amber"
            />

            <PillarCard
              icon={Activity}
              title="Consistency"
              desc="Daily habits and micro-tests compound progress."
              color="emerald"
            />

            <PillarCard
              icon={Users}
              title="Mentorship"
              desc="1-on-1 reviews and psychological support."
              color="purple"
            />

          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">

        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A3C5E] mb-6">
              Why RISE Stands Apart
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              See exactly how our structural advantages translate into better outcomes.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

            <div className="grid grid-cols-3 bg-[#1A3C5E] text-white hidden lg:grid">
              <div className="p-6 font-semibold text-lg border-r border-[#2A5A8E]">
                Feature
              </div>
              <div className="p-6 font-semibold text-lg text-center border-r border-[#2A5A8E] text-slate-300">
                Traditional Coaching
              </div>
              <div className="p-6 font-bold text-lg text-center text-orange-400">
                The RISE Approach
              </div>
            </div>

            <div className="divide-y divide-slate-100">

              <ComparisonRow
                feature="Teaching Style"
                traditional="Lectures focusing on rote memorization"
                rise="Interactive sessions building deep logic"
              />

              <ComparisonRow
                feature="Batch Size"
                traditional="Large crowds (60–120 students)"
                rise="Strictly small cohorts (≤ 30)"
              />

              <ComparisonRow
                feature="Doubt Resolution"
                traditional="Limited availability"
                rise="Immediate, personalized resolution"
              />

              <ComparisonRow
                feature="Testing Focus"
                traditional="Score-focused exams"
                rise="Diagnostic tracking & analysis"
              />

              <ComparisonRow
                feature="Mentorship"
                traditional="Generic counseling"
                rise="Dedicated mentor for each student"
              />

              <ComparisonRow
                feature="Parent Connection"
                traditional="Results-only communication"
                rise="Weekly progress updates"
              />

            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A3C5E] mb-6">
              The Path to Mastery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            <ProcessStep num="01" icon={Focus} title="Establish" desc="Baseline assessment." />
            <ProcessStep num="02" icon={BookOpen} title="Absorb" desc="Concept acquisition." />
            <ProcessStep num="03" icon={Brain} title="Apply" desc="Rigorous problem solving." />
            <ProcessStep num="04" icon={TrendingUp} title="Diagnose" desc="Testing & analytics." />
            <ProcessStep num="05" icon={Award} title="Conquer" desc="Rank optimization." />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#1A3C5E]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Experience the RISE Difference
          </h2>

          <p className="text-slate-300 text-xl font-medium mb-12 max-w-3xl mx-auto">
            Stop gambling with your future. Join the system that architects top ranks.
          </p>

          <a
            href="/enquire"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105"
          >
            Book a Free Counseling Session
            <ArrowRight className="w-6 h-6" />
          </a>

        </div>
      </section>

    </div>
  );
}

/* COMPONENTS */

function PillarCard({ icon: Icon, title, desc, color }: any) {

  const colorMap: any = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    emerald: "bg-emerald-50 text-emerald-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition">

      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${colorMap[color]}`}>
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed">
        {desc}
      </p>

    </div>
  );
}

function ComparisonRow({ feature, traditional, rise }: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-slate-50 transition">

      <div className="p-6 font-bold text-lg text-slate-800 border-r border-slate-200 bg-slate-50">
        {feature}
      </div>

      <div className="p-6 border-r border-slate-200 flex items-center gap-3">
        <X className="w-5 h-5 text-red-500" />
        <span className="text-slate-600">{traditional}</span>
      </div>

      <div className="p-6 bg-orange-50 flex items-center gap-3 font-semibold">
        <Check className="w-5 h-5 text-green-600" />
        <span>{rise}</span>
      </div>

    </div>
  );
}

function ProcessStep({ num, icon: Icon, title, desc }: any) {
  return (
    <div className="flex flex-col items-center text-center">

      <div className="w-24 h-24 rounded-full bg-white border shadow flex items-center justify-center mb-6 relative">

        <div className="absolute -top-2 -right-2 bg-[#1A3C5E] text-white text-sm font-bold px-3 py-1 rounded-xl">
          {num}
        </div>

        <Icon className="w-10 h-10 text-orange-500" />

      </div>

      <h4 className="text-xl font-bold text-[#1A3C5E] mb-3">
        {title}
      </h4>

      <p className="text-slate-500 max-w-[220px]">
        {desc}
      </p>

    </div>
  );
}