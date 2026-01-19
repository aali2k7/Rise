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
}

export default function ProgramCard({
    title,
    subtitle,
    frontContent,
    backContent,
    comingSoon = false,
    backCTA,
}: ProgramCardProps) {
    if (comingSoon) {
        return (
            <div className="h-full rounded-xl border border-[#1A3C5E]/10 bg-white/60 p-7 shadow-sm opacity-70 cursor-not-allowed backdrop-blur-sm">
                <div className="flex items-start justify-between gap-6">
                    <div className="max-w-md">
                        <h3 className="text-lg font-semibold leading-snug text-[#1A3C5E]">
                            {title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#1A3C5E]/70">
                            {subtitle}
                        </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#1A3C5E]/15 px-3 py-1 text-xs font-semibold text-[#1A3C5E]/70">
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
            <div className="flip-card-inner">

                {/* FRONT SIDE */}
                <div className="flip-card-front card-glass-premium flex flex-col p-7">
                    <div className="max-w-md mb-6">
                        <h3 className="text-lg font-semibold leading-snug text-[#1A3C5E]">
                            {title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#1A3C5E]/70">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex-grow">
                        {frontContent}
                    </div>
                    {/* Subtle indicator to maintain usability */}
                    <div className="mt-auto pt-4 flex justify-end">
                        <div className="h-1 w-12 bg-slate-200 rounded-full opacity-50 group-hover:opacity-0 transition-opacity" />
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="flip-card-back card-glass-premium flex flex-col justify-center p-8">
                    <div className="space-y-6">

                        {/* Benefits */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-[#1A3C5E] mb-2 border-l-2 border-orange-500 pl-3">
                                Student Benefit
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium pl-3.5">
                                {backContent.benefits}
                            </p>
                        </div>

                        {/* Duration */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-[#1A3C5E] mb-2 border-l-2 border-orange-500 pl-3">
                                Duration
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium pl-3.5">
                                {backContent.duration}
                            </p>
                        </div>

                        {/* Reason */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-[#1A3C5E] mb-2 border-l-2 border-orange-500 pl-3">
                                Why Choose This?
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium pl-3.5">
                                {backContent.reason}
                            </p>
                        </div>

                        {/* ENQUIRE CTA (Restored) */}
                        {backCTA && (
                            <div className="mt-auto pt-6 border-t border-slate-100/50">
                                <Link
                                    href="/enquire"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
                                >
                                    {backCTA}
                                    <span className="text-lg leading-none">→</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
