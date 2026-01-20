"use client";
import Link from "next/link";

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
    colorTheme = {
        main: "text-[#1E3A8A]",
        accent: "border-[#1E3A8A]",
        bg: "bg-white",
        gradient: "from-white to-slate-50"
    }
}: ProgramCardProps) {
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
        <div className="group h-[420px] w-full perspective-1200 bg-transparent">
            {/* 
        The inner container handles the flip rotation, scale, and general shape.
        The faces allow the glass effect to be visible.
      */}
            <div className="flip-card-inner transition-all duration-300 ease-out group-hover:shadow-xl">

                {/* FRONT SIDE */}
                <div className={`flip-card-front flex flex-col p-7 border border-white/50 shadow-sm ${colorTheme.bg} backdrop-blur-md relative overflow-hidden`}>
                    {/* Top Accent Strip */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${colorTheme.accent.replace('text-', 'bg-').replace('border-', 'bg-')}`} />

                    <div className="max-w-md mb-6 pt-2">
                        <h3 className={`text-xl font-bold leading-snug ${colorTheme.main}`}>
                            {title}
                        </h3>
                        <p className={`mt-1 text-sm font-medium ${colorTheme.main} opacity-80`}>
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex-grow relative z-10">
                        {frontContent}
                    </div>
                    {/* Hover Hint */}
                    <div className="mt-auto pt-4 flex justify-end">
                        <div className={`text-xs font-semibold ${colorTheme.accent} opacity-60 group-hover:opacity-100 transition-opacity`}>
                            View Details →
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className={`flip-card-back flex flex-col justify-center p-8 bg-white border border-slate-100 shadow-inner relative overflow-hidden`}>
                    {/* Top Accent Strip (Back) */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${colorTheme.accent.replace('text-', 'bg-').replace('border-', 'bg-')} opacity-80`} />

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
                                    href="/enquire"
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
