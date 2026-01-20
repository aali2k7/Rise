"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// --- Icons ---

const IconDoctor = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
        <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
);

const IconEngineer = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
        <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <path d="M4 7L20 17M20 7L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    </svg>
);

const IconCommerce = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconFoundation = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500">
        <path d="M12 3L2 12H5V20H9V14H15V20H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="8" width="6" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
);

const IconExplore = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-500">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


interface Goal {
    label: string;
    target: string;
    icon: React.ComponentType;
    shadowColor: string;
}

const goals: Goal[] = [
    { label: "Doctor", target: "doctor", icon: IconDoctor, shadowColor: "rgba(16, 185, 129, 0.25)" },
    { label: "Engineer", target: "engineer", icon: IconEngineer, shadowColor: "rgba(59, 130, 246, 0.25)" },
    { label: "Commerce", target: "commerce", icon: IconCommerce, shadowColor: "rgba(245, 158, 11, 0.25)" },
    { label: "Classes 6–10", target: "foundation", icon: IconFoundation, shadowColor: "rgba(99, 102, 241, 0.25)" },
    { label: "Explore", target: "courses", icon: IconExplore, shadowColor: "rgba(100, 116, 139, 0.25)" },
];

// ------------------------------------
// SELECT GOAL SECTION
// Premium Institutional Refinement
// ------------------------------------

export default function SelectGoalSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full py-20 lg:py-24 overflow-hidden bg-base-light border-b border-white/50">
            {/* Abstract fluid background shape */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/50 to-purple-50/50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/2 -z-10 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Premium bordered container wrapping the entire section */}
                <div className="border border-t-2 border-slate-200 border-t-indigo-400 ring-1 ring-slate-200/70 rounded-[28px] bg-gradient-to-br from-white via-slate-50 to-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] py-14 px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* LEFT COLUMN: Header Text (Anchor) */}
                        <div className="lg:col-span-4 flex flex-col justify-center items-start text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-800 tracking-tight leading-tight">
                                Select your goal
                            </h2>
                            <p className="text-lg lg:text-xl text-slate-500 font-light mt-3 tracking-wide font-sans">
                                to explore our courses
                            </p>
                            {/* Visionary decorative line */}
                            <div className="mt-8 h-px w-24 bg-slate-200" />
                        </div>

                        {/* RIGHT COLUMN: Goal Pills Grid */}
                        <div className="lg:col-span-8 w-full">
                            {/* 
                               Grid Layout:
                               - Consistent gaps
                               - Auto-fit logic for responsiveness 
                               - Visual symmetry
                            */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {goals.map((goal) => (
                                    <TiltButton
                                        key={goal.label}
                                        goal={goal}
                                        onClick={() => scrollToSection(goal.target)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TiltButton({ goal, onClick }: { goal: Goal; onClick: () => void }) {
    const tiltRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 5,             // Calm tilt
                speed: 1000,        // Slow transition
                glare: true,
                "max-glare": 0.15,  // Very subtle glare (optical glass)
                scale: 1.01,        // Micro scale
                perspective: 1000,
                transition: true,
                gyroscope: false,
            });
        }
    }, []);

    // Helper to determine the "Ink Drop" color for the internal bloom
    const bloomColorMap: Record<string, string> = {
        "Doctor": "#10b981",    // Emerald
        "Engineer": "#3b82f6",  // Blue
        "Commerce": "#f59e0b",  // Amber
        "Classes 6–10": "#6366f1", // Indigo
        "Explore": "#64748b",   // Slate
    };

    // Contextual hover border colors
    const getHoverBorderClass = (label: string) => {
        switch (label) {
            case "Doctor": return "hover:border-emerald-400/60";
            case "Engineer": return "hover:border-indigo-400/60";
            case "Commerce": return "hover:border-amber-400/60";
            case "Classes 6–10": return "hover:border-sky-400/60";
            case "Explore": return "hover:border-slate-400/60";
            default: return "hover:border-slate-400/60";
        }
    };

    const bloomColor = bloomColorMap[goal.label] || "#64748b";
    const hoverBorderClass = getHoverBorderClass(goal.label);

    return (
        <button
            ref={tiltRef}
            onClick={onClick}
            // Passing the bloom color as a CSS variable for the ::before pseudo-element
            style={{ "--bloom-color": bloomColor } as React.CSSProperties}

            // PREMIUM BORDER SYSTEM
            // - Default: Subtle slate border with soft inner ring
            // - Hover: Contextual accent border with lift and shadow
            className={`group optical-glass optical-bloom relative flex items-center gap-4 px-6 py-4 w-full h-full min-h-[5rem] rounded-2xl text-left
                border border-slate-200 ring-1 ring-black/5
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:border-2 hover:ring-0
                ${hoverBorderClass}
            `}
            aria-label={`Select ${goal.label}`}
        >
            {/* CONTENT WRAPPER - Ensures text/icon sits ABOVE the internal bloom */}
            <div className="optical-content flex items-center gap-4 w-full">

                {/* Icon wrapper - Monoline styling */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/40 border border-white/30 text-slate-700 group-hover:bg-white/80 transition-colors duration-500">
                    <goal.icon />
                </div>

                {/* Typography */}
                <span className="text-base lg:text-lg font-semibold tracking-tight text-slate-700 group-hover:text-slate-900 transition-colors">
                    {goal.label}
                </span>
            </div>
        </button>
    );
}
