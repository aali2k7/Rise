"use client";

import { Shield, Users, BookOpen, TrendingUp, Clock, Award } from "lucide-react";


const reasons = [
    {
        icon: Shield,
        title: "Discipline-First Culture",
        description:
            "A structured, distraction-free environment where every minute of the day is purposefully designed — from class routines to self-study blocks.",
        highlight: "Zero tolerance for shortcuts",
        color: "from-[#1A3C5E] to-[#2A5A8E]",
    },
    {
        icon: Users,
        title: "Small Batches, Big Results",
        description:
            "With a strict cap of 20 students per batch, every student receives focused mentorship. No one is just a number here.",
        highlight: "≤ 20 students per batch",
        color: "from-[#C9A96E] to-[#B8944A]",
    },
    {
        icon: BookOpen,
        title: "Concept-Driven Teaching",
        description:
            "We build deep conceptual understanding — not rote memorization. Faculty teach the 'why' behind every formula and theorem.",
        highlight: "Understanding over memorization",
        color: "from-emerald-600 to-emerald-800",
    },
    {
        icon: TrendingUp,
        title: "Continuous Performance Tracking",
        description:
            "Weekly diagnostics, personalized reports, and real-time progress monitoring ensure early intervention when needed.",
        highlight: "100% progress visibility",
        color: "from-blue-600 to-indigo-700",
    },
    {
        icon: Clock,
        title: "Beyond-Class Support",
        description:
            "Learning doesn't end when the bell rings. Faculty remain accessible for doubt-clearing sessions and extended mentorship hours.",
        highlight: "Unlimited access to faculty",
        color: "from-rose-500 to-rose-700",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description:
            "Our students consistently achieve top ranks in JEE & NEET — a direct result of our rigorous methodology and dedicated faculty.",
        highlight: "Consistent top rankers",
        color: "from-amber-500 to-orange-600",
    },
];

export default function WhyChooseRise() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1A3C5E]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-[#C9A96E] font-bold uppercase tracking-[0.2em] text-xs mb-4">
                        The RISE Difference
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C5E] tracking-tight leading-tight mb-6">
                        Why Choose RISE?
                    </h2>
                    <p className="text-base text-slate-500 leading-relaxed">
                        We don&apos;t just prepare students for exams — we build disciplined,
                        confident individuals ready to conquer any challenge.
                    </p>
                    <div className="mt-6 h-0.5 w-16 bg-[#C9A96E] rounded-full mx-auto" />
                </div>

                {/* Cards Grid - Premium Solid Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((reason, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] border border-white/80 ring-1 ring-slate-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08)] flex flex-col h-full overflow-hidden"
                        >
                            {/* Inner ambient glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col flex-1">
                                {/* Header: Embellished Icon + Title */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-5">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-md shadow-slate-200/50 shrink-0 ring-4 ring-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out`}>
                                        <reason.icon size={24} className="text-white drop-shadow-sm" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-[1.15rem] font-bold text-[#1A3C5E] tracking-tight leading-snug group-hover:text-[#C9A96E] transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                </div>

                                {/* Content - Using explicit hex to guarantee high readability */}
                                <p className="text-[#475569] leading-relaxed text-base font-medium">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
