"use client";
import Link from "next/link";
import { useState } from "react";

interface ProgramCardProps {
    title: string;
    subtitle: string;
    frontContent: React.ReactNode;
    backContent: {
        benefits: string;
        duration: string;
        reason: string;
    };
    comingSoon?: boolean;
    backCTA?: string;
    ctaLink?: string;
    colorTheme?: {
        main: string;    // Text color (e.g., text-blue-900)
        accent: string;  // Border/Highlight (e.g., border-blue-500, text-blue-600)
        bg: string;      // Background tint (e.g., bg-blue-50/30)
        gradient: string; // Subtle gradient for active states
    };
}

export default function ProgramCard({
    title,
    subtitle,
    frontContent,
    backContent,
    comingSoon = false,
    backCTA,
    ctaLink = "/enquire",
    colorTheme = {
        main: "text-[#1E3A8A]",
        accent: "border-[#1E3A8A]",
        bg: "bg-white",
        gradient: "from-white to-slate-50"
    }
}: ProgramCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    if (comingSoon) {
        return (
            <div className={`h-full rounded-xl border border-slate-200/60 ${colorTheme.bg} p-7 shadow-sm opacity-70 cursor-not-allowed backdrop-blur-sm`}>
                <div className="flex items-start justify-between gap-6">
                    <div className="max-w-md">
                        <h3 className={`text-lg font-bold leading-snug ${colorTheme.main}`}>
                            {title}
                        </h3>
                        <p className={`mt-1 text-sm font-medium ${colorTheme.main} opacity-70`}>
                            {subtitle}
                        </p>
                    </div>
                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${colorTheme.main} opacity-70`}>
                        Coming Soon
                    </span>
                </div>
                <div className="mt-6 text-sm leading-relaxed text-slate-600">
                    {frontContent}
                </div>
            </div>
        );
    }



    return (
        <div
            className="group h-[420px] w-full perspective-1200 bg-transparent cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/*
        The inner container handles the flip rotation, scale, and general shape.
        The faces allow the glass effect to be visible.
      */}
            <div className={`flip-card-inner transition-all duration-300 ease-out group-hover:shadow-xl ${isFlipped ? "flipped" : ""}`}>

                {/* FRONT SIDE */}
                <div className={`flip-card-front flex flex-col p-8 rounded-[1.5rem] border border-slate-100/80 ring-1 ring-slate-100/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-xl relative overflow-hidden h-full w-full`}>
                    {/* Ambient Glow based on theme */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorTheme.gradient} opacity-60 pointer-events-none`} />

                    <div className="max-w-md mb-6 relative z-10">
                        <h3 className={`text-xl sm:text-2xl font-bold leading-tight ${colorTheme.main}`}>
                            {title}
                        </h3>
                        <p className={`mt-2 text-sm font-semibold tracking-wide uppercase ${colorTheme.main} opacity-70`}>
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex-grow flex flex-col relative z-10">
                        {frontContent}
                    </div>

                    {/* Hover Hint */}
                    <div className="mt-auto pt-6 flex justify-end relative z-10">
                        <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${colorTheme.accent} opacity-60 group-hover:opacity-100 transition-all duration-300`}>
                            Flip to Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className={`flip-card-back flex flex-col justify-center p-8 rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] relative overflow-hidden h-full w-full`}>
                    {/* Subtle Ambient Glow for back side */}
                    <div className={`absolute inset-0 bg-gradient-to-tl ${colorTheme.gradient} opacity-20 pointer-events-none`} />

                    <div className="space-y-6 relative z-10">

                        {/* Benefits */}
                        <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wider ${colorTheme.main} mb-2`}>
                                Student Benefit
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                {backContent.benefits}
                            </p>
                        </div>

                        {/* Duration */}
                        <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wider ${colorTheme.main} mb-2`}>
                                Duration
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                {backContent.duration}
                            </p>
                        </div>

                        {/* Reason */}
                        <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wider ${colorTheme.main} mb-2`}>
                                Why This Program?
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                {backContent.reason}
                            </p>
                        </div>

                        {/* ENQUIRE CTA */}
                        {backCTA && (
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <Link
                                    href={ctaLink}
                                    className={`inline-flex items-center gap-2 text-sm font-bold ${colorTheme.accent} hover:underline decoration-2 underline-offset-4 transition-all`}
                                >
                                    {backCTA}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
