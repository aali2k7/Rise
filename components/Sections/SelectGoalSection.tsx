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

export default function SelectGoalSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full py-16 overflow-hidden bg-base-light border-b border-white/50">
            {/* Abstract fluid background shape */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/50 to-purple-50/50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/2 -z-10 pointer-events-none" />


            <div className="mx-auto max-w-5xl px-6 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                    {/* Header */}
                    <div className="flex flex-col max-w-xs">
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800 tracking-tight leading-tight">
                            Select your goal
                        </h2>
                        <p className="text-lg text-slate-400 font-light mt-2 tracking-wide font-sans">
                            to explore our courses
                        </p>
                    </div>

                    {/* Cards Container - Gap 1.5rem (24px) */}
                    <div className="flex flex-wrap gap-6 justify-start lg:justify-end">
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
        </section>
    );
}

function TiltButton({ goal, onClick }: { goal: Goal; onClick: () => void }) {
    const tiltRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 12,           // Max tilt rotation (degrees)
                speed: 400,        // Speed of the enter/exit transition
                glare: true,       // Add glare effect
                "max-glare": 0.3,  // Max opacity of glare
                scale: 1.05,       // Scale up on hover
                perspective: 1000, // Transform perspective
                transition: true,  // Smooth transition
                gyroscope: false,   // Disable gyroscope
            });
        }
    }, []);

    // Dynamic styles for the colored shadow - strict "Gemini Orb & Antigravity" master prompt spec
    // Shadow: 0 20px 40px rgba(0,0,0,0.15) for depth
    const shadowStyle = {
        boxShadow: `0 20px 40px -10px ${goal.shadowColor}, 0 20px 40px 0 rgba(0, 0, 0, 0.15)`,
    };

    return (
        <button
            ref={tiltRef}
            onClick={onClick}
            style={shadowStyle}
            // Updated styles: 
            // - bg-white (no opacity)
            // - text-slate-800 (#1e293b) for high contrast
            // - px-8 py-5 for slightly larger pill
            // - custom transition bezier for inertia/bounce
            // - hover:translate-y-[-10px] for significant lift
            // - Compact padding: px-6 py-3
            className="group relative flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-slate-100/80 text-slate-800 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] preserve-3d hover:-translate-y-[10px]"
            aria-label={`Select ${goal.label}`}
        >
            {/* Icon wrapper with subtle background */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white transition-colors border border-slate-100">
                <goal.icon />
            </div>

            {/* Typography: Dark Slate / Charcoal (#1e293b is slate-800), Semi-bold (600) */}
            <span className="text-lg font-semibold tracking-tight text-slate-800 group-hover:text-black transition-colors">
                {goal.label}
            </span>

            {/* Glossy overlay hint (optional extra polish) - keeping it subtle */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5 group-hover:ring-black/10 pointer-events-none" />
        </button>
    );
}
