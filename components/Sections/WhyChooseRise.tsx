"use client";

import { Shield, Users, BookOpen, TrendingUp, Clock, Award } from "lucide-react";

const reasons = [
    {
        icon: Shield,
        title: "Discipline-First Culture",
        description:
            "A structured, distraction-free environment where every minute of the day is purposefully designed.",
        accent: "bg-blue-100 text-blue-700",
        hover: "group-hover:bg-blue-600 group-hover:text-white",
        border: "group-hover:border-blue-500/30",
        shadow: "group-hover:shadow-blue-900/5",
    },
    {
        icon: Users,
        title: "Small Batches, Big Results",
        description:
            "With a strict cap of 20 students per batch, every student receives focused, individual mentorship.",
        accent: "bg-amber-100 text-amber-700",
        hover: "group-hover:bg-amber-500 group-hover:text-white",
        border: "group-hover:border-amber-500/30",
        shadow: "group-hover:shadow-amber-900/5",
    },
    {
        icon: BookOpen,
        title: "Concept-Driven Teaching",
        description:
            "We build deep conceptual understanding. Faculty teach the 'why' behind every formula.",
        accent: "bg-emerald-100 text-emerald-700",
        hover: "group-hover:bg-emerald-600 group-hover:text-white",
        border: "group-hover:border-emerald-500/30",
        shadow: "group-hover:shadow-emerald-900/5",
    },
    {
        icon: TrendingUp,
        title: "Continuous Tracking",
        description:
            "Weekly diagnostics, personalized reports, and real-time progress monitoring ensure early intervention.",
        accent: "bg-indigo-100 text-indigo-700",
        hover: "group-hover:bg-indigo-600 group-hover:text-white",
        border: "group-hover:border-indigo-500/30",
        shadow: "group-hover:shadow-indigo-900/5",
    },
    {
        icon: Clock,
        title: "Beyond-Class Support",
        description:
            "Learning doesn't end when the bell rings. Faculty remain accessible for extended doubt-clearing sessions.",
        accent: "bg-rose-100 text-rose-700",
        hover: "group-hover:bg-rose-600 group-hover:text-white",
        border: "group-hover:border-rose-500/30",
        shadow: "group-hover:shadow-rose-900/5",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description:
            "Our students consistently achieve top ranks in JEE & NEET due to our rigorous methodology.",
        accent: "bg-orange-100 text-orange-700",
        hover: "group-hover:bg-orange-500 group-hover:text-white",
        border: "group-hover:border-orange-500/30",
        shadow: "group-hover:shadow-orange-900/5",
    },
];

export default function WhyChooseRise() {
    return (
        <section className="py-12 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center">
            
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                
                {/* Stunning Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <span className="inline-block py-1.5 px-4 mb-5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-bold uppercase tracking-[0.2em] text-xs shadow-sm shadow-amber-900/5">
                        The RISE Difference
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
                        Why Choose RISE?
                    </h2>
                    <p className="text-[1rem] sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                        We don&apos;t just prepare students for exams — we build disciplined, confident individuals ready to conquer any challenge.
                    </p>
                    <div className="w-16 h-1 mt-8 mx-auto bg-amber-400 rounded-full shadow-sm" />
                </div>

                {/* Highly Appealing Premium Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {reasons.map((reason, i) => (
                        <div
                            key={i}
                            className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 ${reason.border} ${reason.shadow} flex flex-col h-full`}
                        >
                            {/* Icon Container with elegant transition */}
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 shadow-sm ${reason.accent} ${reason.hover}`}>
                                <reason.icon size={22} strokeWidth={2} />
                            </div>

                            {/* Bold, visible text using standard slate colors */}
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-3 group-hover:text-slate-800 transition-colors">
                                {reason.title}
                            </h3>
                            
                            <p className="text-slate-700 leading-relaxed font-medium text-sm sm:text-[1rem]">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
