"use client";

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
}

export default function ProgramCard({
    title,
    subtitle,
    frontContent,
    backContent,
    comingSoon = false,
}: ProgramCardProps) {
    if (comingSoon) {
        return (
            <div className="h-full rounded-xl border border-[#1A3C5E]/10 bg-white p-7 shadow-sm opacity-70 cursor-not-allowed">
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
        <div className="group h-[420px] w-full perspective-1000 bg-transparent">
            <div className="flip-card-inner h-full w-full rounded-xl border border-[#1A3C5E]/10 shadow-sm transition-all duration-700 bg-white">

                {/* FRONT SIDE */}
                <div className="flip-card-front flex flex-col p-7 bg-white rounded-xl">
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
                    <div className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-0">
                        Hover for details
                        {/* Note: This is optional hint, but cleaner to hide on hover */}
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="flip-card-back flex flex-col justify-center p-8 bg-white rounded-xl border border-[#1A3C5E]/10">
                    <div className="space-y-6">

                        {/* Benefits */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-[#1A3C5E] mb-2">
                                Student Benefit
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                {backContent.benefits}
                            </p>
                        </div>

                        {/* Duration */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-[#1A3C5E] mb-2">
                                Duration
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                {backContent.duration}
                            </p>
                        </div>

                        {/* Reason */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-[#1A3C5E] mb-2">
                                Why Choose This?
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                {backContent.reason}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
