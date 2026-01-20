import { Users, Clock, MessageCircle, TrendingUp, ClipboardCheck } from "lucide-react";

export default function ValueHighlights() {
    const highlights = [
        {
            icon: Users,
            title: "Small Batches, Individual Attention",
            description: "We maintain a non-negotiable limit of 20 students per batch. This ensures every student receives the dedicated attention required for elite competitive preparation.",
            highlight: "limit of 20 students"
        },
        {
            icon: Clock,
            title: "Learning Support Beyond Classroom Hours",
            description: "Learning does not conclude with the final bell. Our faculty remains accessible post-class to ensure concepts are mastered, not just taught.",
            highlight: "accessible post-class"
        },
        {
            icon: MessageCircle,
            title: "Weekly Mandatory Doubt-Clearing Sessions",
            description: "Doubt resolution is not optional. We enforce mandatory weekly sessions to dismantle conceptual bottlenecks before they compound.",
            highlight: "mandatory weekly sessions"
        },
        {
            icon: TrendingUp,
            title: "Weekly Student Review & Personal Guidance",
            description: "Continuous diagnostic screening allows us to identify specific content weaknesses and intervene immediately with personalized correction strategies.",
            highlight: "intervene immediately"
        },
        {
            icon: ClipboardCheck,
            title: "Weekly Performance Reports for Parents",
            description: "We operate with radical transparency. Detailed performance audits and attendance logs are shared directly with parents weekly.",
            highlight: "radical transparency"
        },
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-b border-slate-200/60 overflow-hidden">
            {/* STEP 1: Recessed background - radial gradient creating concave light surface */}
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(30,58,138,0.06),transparent)]" />

            {/* Atmospheric color washes - soft indigo (top-left) and emerald (bottom-right) */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-[0.07] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-[0.06] pointer-events-none translate-x-1/4 translate-y-1/4" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1E3A8A] sm:text-4xl">
                        Why Choose RISE?
                    </h2>
                    <p className="mt-4 text-lg font-medium text-slate-600 max-w-2xl mx-auto">
                        A system built on <span className="text-[#10B981]">discipline</span>, structural integrity, and measurable outcomes.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* STEP 5: Top-row cards with stronger shadow */}
                    {highlights.slice(0, 3).map((item, index) => (
                        <PremiumPlacard key={index} {...item} isTopRow={true} />
                    ))}
                    {/* Centering the last two - bottom row with softer shadow */}
                    <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-8 lg:w-2/3 lg:mx-auto">
                        {highlights.slice(3, 5).map((item, index) => (
                            <PremiumPlacard key={index + 3} {...item} isTopRow={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PremiumPlacard({
    icon: Icon,
    title,
    description,
    highlight,
    isTopRow = true
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    highlight: string;
    isTopRow?: boolean;
}) {
    // Helper to bold highlight text
    const parts = description.split(highlight);

    // STEP 5: Shadow variation - stronger for top row, softer for bottom row
    const baseShadow = isTopRow
        ? "shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
        : "shadow-[0_10px_25px_rgba(15,23,42,0.06)]";

    const hoverShadow = isTopRow
        ? "hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
        : "hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

    return (
        <div
            className={`group relative z-10 h-full w-full rounded-2xl p-8
                 bg-gradient-to-b from-white via-white to-slate-50
                 ${baseShadow}
                 transition-all duration-300 ease-out
                 hover:-translate-y-2 ${hoverShadow}`}
        >
            {/* STEP 6: Icon with embedded depth cue */}
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 shadow-inner text-[#10B981]">
                <Icon size={24} strokeWidth={2.5} />
            </div>

            <div className="flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#1E3A8A] mb-3 group-hover:text-[#0F172A]">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed">
                    {parts[0]}
                    <span className="font-semibold text-[#10B981]">{highlight}</span>
                    {parts[1]}
                </p>
            </div>
        </div>
    );
}

