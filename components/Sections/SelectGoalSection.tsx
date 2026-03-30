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
        <section className="relative w-full py-10 sm:py-16 lg:py-24 overflow-hidden bg-white">
            {/* Abstract fluid background shape - subtle & professional */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Removed card box styling to create an open architectural flow */}
                <div className="relative">

                    {/* Subtle inner decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50/50 rounded-full blur-2xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">

                        {/* LEFT COLUMN: Header Text (Anchor) */}
                        <div className="lg:col-span-5 flex flex-col justify-center items-start text-left">
                            {/* Eyebrow Intro */}
                            <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                                Your Journey Begins
                            </span>

                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#1A3C5E] tracking-tight leading-[1.1] mb-4 sm:mb-6">
                                Select your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBC74] to-[#B48E4B]">goal.</span>
                            </h2>

                            <p className="text-[1rem] lg:text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                                Choose your desired path to explore our specialized coaching programs and methodologies tailored for uncompromising success.
                            </p>
                        </div>

                        {/* RIGHT COLUMN: Goal Pills Grid */}
                        <div className="lg:col-span-7 w-full">
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
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
                max: 3,             // Calm tilt
                speed: 1000,        // Slow transition
                glare: true,
                "max-glare": 0.05,  // Very subtle glare
                scale: 1.02,        // Micro scale
                perspective: 1000,
                transition: true,
                gyroscope: false,
            });
        }
    }, []);

    // Helper to determine the rich color themes for hover states
    const colorThemes: Record<string, { gradient: string, glow: string, border: string, textHover: string, iconBg: string }> = {
        "Doctor": { gradient: "from-emerald-500/10 to-emerald-500/0", glow: "group-hover:shadow-[0_8px_30px_-5px_rgba(16,185,129,0.25)]", border: "group-hover:border-emerald-500/30", textHover: "group-hover:text-emerald-700", iconBg: "group-hover:bg-emerald-50 group-hover:border-emerald-200/50" },
        "Engineer": { gradient: "from-blue-500/10 to-blue-500/0", glow: "group-hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.25)]", border: "group-hover:border-blue-500/30", textHover: "group-hover:text-blue-700", iconBg: "group-hover:bg-blue-50 group-hover:border-blue-200/50" },
        "Commerce": { gradient: "from-amber-500/10 to-amber-500/0", glow: "group-hover:shadow-[0_8px_30px_-5px_rgba(245,158,11,0.25)]", border: "group-hover:border-amber-500/30", textHover: "group-hover:text-amber-700", iconBg: "group-hover:bg-amber-50 group-hover:border-amber-200/50" },
        "Classes 6–10": { gradient: "from-indigo-500/10 to-indigo-500/0", glow: "group-hover:shadow-[0_8px_30px_-5px_rgba(99,102,241,0.25)]", border: "group-hover:border-indigo-500/30", textHover: "group-hover:text-indigo-700", iconBg: "group-hover:bg-indigo-50 group-hover:border-indigo-200/50" },
        "Explore": { gradient: "from-slate-500/10 to-slate-500/0", glow: "group-hover:shadow-[0_8px_30px_-5px_rgba(100,116,139,0.25)]", border: "group-hover:border-slate-400/30", textHover: "group-hover:text-slate-800", iconBg: "group-hover:bg-slate-100 group-hover:border-slate-300/50" },
    };

    const theme = colorThemes[goal.label] || colorThemes["Explore"];

    return (
        <button
            ref={tiltRef as any}
            onClick={onClick}
            // PREMIUM ANIMATION SYSTEM
            // - Lifts up more gracefully
            // - Triggers a colored volumetric glow & border matched to the card type
            className={`group relative flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 w-full h-full min-h-[4rem] sm:min-h-[5.5rem] rounded-xl sm:rounded-2xl text-left
                bg-white border border-slate-100 shadow-sm
                transition-all duration-500 ease-out overflow-hidden
                hover:-translate-y-1.5 ${theme.border} ${theme.glow}
            `}
            aria-label={`Select ${goal.label}`}
        >
            {/* Subtle Gradient Overlay that fades in on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 flex items-center gap-4 w-full">
                {/* Icon wrapper - Smooth background transition */}
                <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-100/60 bg-slate-50/50 text-slate-700 ${theme.iconBg} transition-colors duration-500`}>
                    <goal.icon />
                </div>

                {/* Typography */}
                <span className={`text-sm sm:text-[1rem] lg:text-lg font-bold tracking-tight text-slate-900 ${theme.textHover} transition-colors duration-500`}>
                    {goal.label}
                </span>
            </div>

            {/* Premium Animated Sliding Arrow */}
            <div className="relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={theme.textHover.replace('group-hover:', '')}>
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </button>
    );
}
