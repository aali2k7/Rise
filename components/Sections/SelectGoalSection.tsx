"use client";
import React from "react";
import { Plus, Hexagon, Layers, Home, Compass } from "lucide-react";

export default function SelectGoalSection() {
    const goals = [
        { label: "Doctor", icon: <Plus className="text-emerald-500" strokeWidth={2.5} size={20} /> },
        { label: "Engineer", icon: <Hexagon className="text-blue-500" strokeWidth={2.5} size={20} /> },
        { label: "Commerce", icon: <Layers className="text-amber-500" strokeWidth={2.5} size={20} /> },
        { label: "Classes 6–10", icon: <Home className="text-indigo-500" strokeWidth={2.5} size={20} /> },
        { label: "Explore", icon: <Compass className="text-slate-400" strokeWidth={2.5} size={20} /> },
    ];

    const scrollToSection = () => {}; // Action filler

    return (
        <section className="w-full py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-5/12 text-left">
                    <p className="text-sm font-bold tracking-widest text-[#F59E0B] uppercase mb-4">
                        Your Journey Begins
                    </p>
                    <h2 className="text-5xl font-extrabold text-[#1A3C5E] tracking-tight mb-6 flex flex-wrap gap-2">
                        Select your <span className="text-[#D4A373]">goal.</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                        Choose your desired path to explore our specialized coaching programs and methodologies tailored for uncompromising success.
                    </p>
                </div>
                <div className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {goals.map((goal, idx) => (
                        <button
                            key={idx}
                            onClick={scrollToSection}
                            className="flex items-center gap-6 px-8 py-5 w-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-slate-100 bg-slate-50/50">
                                {goal.icon}
                            </div>
                            <span className="text-lg font-bold text-[#1A3C5E]">
                                {goal.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
