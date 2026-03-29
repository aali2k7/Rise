"use client";
import React from "react";
import { Shield, Users, BookOpen, LineChart, Clock, Award } from "lucide-react";

export default function ValueHighlights() {
    const highlights = [
        {
            icon: Shield,
            title: "Discipline-First Culture",
            desc: "A structured, distraction-free environment where every minute of the day is purposefully designed — from class routines to self-study blocks.",
            color: "bg-[#1E40AF]"
        },
        {
            icon: Users,
            title: "Small Batches, Big Results",
            desc: "With a strict cap of 20 students per batch, every student receives focused mentorship. No one is just a number here.",
            color: "bg-[#B48446]"
        },
        {
            icon: BookOpen,
            title: "Concept-Driven Teaching",
            desc: "We build deep conceptual understanding — not rote memorization. Faculty teach the 'why' behind every formula and theorem.",
            color: "bg-[#059669]"
        },
        {
            icon: LineChart,
            title: "Continuous Performance Tracking",
            desc: "Weekly diagnostics, personalized reports, and constant parent updates to ensure zero surprises on exam day.",
            color: "bg-[#2563EB]"
        },
        {
            icon: Clock,
            title: "Beyond-Class Support",
            desc: "Learning doesn't end when the bell rings. Faculty remain accessible for doubt-clearing sessions to ensure concept mastery.",
            color: "bg-[#E11D48]"
        },
        {
            icon: Award,
            title: "Proven Track Record",
            desc: "Our students consistently achieve top ranks and gain admission to India's most prestigious engineering and medical colleges.",
            color: "bg-[#F97316]"
        }
    ];

    return (
        <section className="w-full py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <p className="text-sm font-bold tracking-widest text-[#B48446] uppercase mb-2">
                    The Rise Difference
                </p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A3C5E] tracking-tight mb-3">
                    Why Choose RISE?
                </h2>
                <p className="text-[17px] text-slate-500 max-w-3xl mx-auto mb-6">
                    We don&apos;t just prepare students for exams — we build disciplined, confident individuals ready to conquer any challenge.
                </p>
                <div className="h-1 w-12 bg-[#B48446] mx-auto mb-10 rounded-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.color} text-white flex-shrink-0 shadow-sm`}>
                                    <item.icon size={20} strokeWidth={2} />
                                </div>
                                <h3 className="text-[19px] font-bold text-[#1A3C5E] leading-tight flex-1">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-[14px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
