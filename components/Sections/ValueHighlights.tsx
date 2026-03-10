import { Users, Clock, MessageCircle, TrendingUp, ClipboardCheck, Trophy } from "lucide-react";

const highlights = [
    {
        icon: Users,
        title: "Small Batches, Individual Attention",
        description: "A strict limit of 20 students per batch ensures every student gets focused, personalized guidance — not just a seat in a crowd.",
        stat: "≤ 20",
        statLabel: "students per batch",
    },
    {
        icon: Clock,
        title: "Support Beyond Class Hours",
        description: "Learning doesn't stop at the bell. Faculty remain accessible post-class so no concept goes unresolved.",
        stat: "∞",
        statLabel: "after-class access",
    },
    {
        icon: MessageCircle,
        title: "Mandatory Doubt-Clearing Sessions",
        description: "Weekly dedicated sessions to systematically dismantle doubts before they build into knowledge gaps.",
        stat: "Weekly",
        statLabel: "doubt sessions",
    },
    {
        icon: TrendingUp,
        title: "Weekly Student Review",
        description: "Continuous diagnostic tracking pinpoints weak areas and triggers immediate, personalized course corrections.",
        stat: "100%",
        statLabel: "tracked progress",
    },
    {
        icon: ClipboardCheck,
        title: "Transparent Parent Reports",
        description: "Detailed weekly performance audits and attendance logs are shared directly with parents — no surprises.",
        stat: "Every",
        statLabel: "week, to parents",
    },
    {
        icon: Trophy,
        title: "National Exam Aligned Curriculum",
        description: "Class XI & XII curriculum is fully aligned to JEE Main, JEE Advanced, NEET, and Olympiads — built for top results.",
        stat: "JEE+",
        statLabel: "NEET aligned",
    },
];

export default function ValueHighlights() {
    return (
        <section className="py-24 bg-[#FDFCFB]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header - left-aligned, editorial */}
                <div className="max-w-xl mb-16">
                    <p className="text-[#C9A96E] font-bold uppercase tracking-widest text-xs mb-3">
                        Why RISE Works
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C5E] tracking-tight leading-tight">
                        Why Families<br />Choose RISE
                    </h2>
                    <p className="mt-5 text-base text-slate-500 leading-relaxed">
                        A system built on discipline, structural integrity, and measurable outcomes.
                    </p>
                    <div className="mt-6 h-0.5 w-14 bg-[#F59E0B] rounded-full" />
                </div>

                {/* Two-column bordered list — no boxes, just clean rows */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                    {highlights.map((item, i) => {
                        const isLastPair = i >= highlights.length - 2;
                        return (
                            <div
                                key={i}
                                className={`group flex items-start gap-5 py-7 ${!isLastPair ? "border-b border-[#E8DFD3]/70" : ""}`}
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 rounded-full bg-[#1A3C5E]/6 text-[#1A3C5E] group-hover:bg-[#1A3C5E] group-hover:text-white transition-all duration-300">
                                    <item.icon size={18} strokeWidth={2} />
                                </div>

                                {/* Text content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-sm font-bold text-[#1A3C5E] leading-snug">
                                            {item.title}
                                        </h3>
                                        <div className="flex-shrink-0 text-right pl-2">
                                            <p className="text-base font-black text-[#F59E0B] leading-none">{item.stat}</p>
                                            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 whitespace-nowrap">
                                                {item.statLabel}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
