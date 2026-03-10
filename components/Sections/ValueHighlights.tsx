import { Users, Clock, MessageCircle, TrendingUp, ClipboardCheck, Trophy, Sparkles } from "lucide-react";

export default function ValueHighlights() {
    const highlights = [
        {
            icon: Users,
            title: "Small Batches, Individual Attention",
            description: "We maintain a non-negotiable limit of 20 students per batch. This ensures every student receives the dedicated attention required for elite competitive preparation.",
            highlight: "limit of 20 students",
            colSpan: "md:col-span-2",
            theme: "light"
        },
        {
            icon: Clock,
            title: "Support Beyond Classroom Hours",
            description: "Learning does not conclude with the final bell. Our faculty remains accessible post-class to ensure concepts are mastered.",
            highlight: "accessible post-class",
            colSpan: "md:col-span-1",
            theme: "amber"
        },
        {
            icon: MessageCircle,
            title: "Weekly Mandatory Doubt-Clearing",
            description: "Doubt resolution is not optional. We enforce mandatory weekly sessions to dismantle conceptual bottlenecks.",
            highlight: "mandatory weekly sessions",
            colSpan: "md:col-span-1",
            theme: "dark"
        },
        {
            icon: TrendingUp,
            title: "Weekly Review & Guidance",
            description: "Continuous diagnostic screening allows us to identify specific content weaknesses and intervene immediately with personalized correction strategies.",
            highlight: "intervene immediately",
            colSpan: "md:col-span-2",
            theme: "light"
        },
        {
            icon: ClipboardCheck,
            title: "Reports for Parents",
            description: "We operate with radical transparency. Detailed performance audits and attendance logs are shared directly with parents weekly.",
            highlight: "radical transparency",
            colSpan: "md:col-span-2",
            theme: "light"
        },
        {
            icon: Trophy,
            title: "National Level Prep",
            description: "Our Class XI & XII standards curriculum is aligned to coveted national examinations — helping students reach top notch IITs and medical colleges.",
            highlight: "top notch IITs",
            colSpan: "md:col-span-1",
            theme: "emerald"
        },
    ];

    return (
        <section className="relative py-24 bg-[#FAF9F7] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8DFD3] to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C5E]/5 border border-[#1A3C5E]/10 mb-6">
                        <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                        <span className="text-sm font-bold text-[#1A3C5E] uppercase tracking-wider">The RISE Advantage</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A3C5E]">
                        Why Choose RISE?
                    </h2>
                    <p className="mt-6 text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A system built on <span className="text-[#059669]">discipline</span>, structural integrity, and measurable outcomes. We don&apos;t just teach, we train.
                    </p>
                </div>

                {/* Premium Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(220px,auto)]">
                    {highlights.map((item, index) => (
                        <BentoCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BentoCard({
    icon: Icon,
    title,
    description,
    highlight,
    colSpan,
    theme
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    highlight: string;
    colSpan: string;
    theme: string;
}) {
    const parts = description.split(highlight);

    // Theme Switcher for the Bento box
    const getThemeStyles = () => {
        switch (theme) {
            case 'dark':
                return {
                    bg: "bg-[#1A3C5E]",
                    text: "text-white",
                    desc: "text-blue-100",
                    highlight: "text-[#F59E0B]",
                    border: "border-transparent",
                    iconContainer: "bg-white/10 text-white",
                    hover: "hover:shadow-[0_20px_40px_-15px_rgba(26,60,94,0.5)]"
                };
            case 'amber':
                return {
                    bg: "bg-[#FFFbeb]", // amber-50
                    text: "text-[#1A3C5E]",
                    desc: "text-slate-700",
                    highlight: "text-[#D97706]", // amber-600
                    border: "border-amber-200",
                    iconContainer: "bg-amber-200/50 text-amber-700",
                    hover: "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)]"
                };
            case 'emerald':
                return {
                    bg: "bg-[#ECFDF5]", // emerald-50
                    text: "text-[#1A3C5E]",
                    desc: "text-slate-700",
                    highlight: "text-[#059669]", // emerald-600
                    border: "border-emerald-200",
                    iconContainer: "bg-emerald-200/50 text-emerald-700",
                    hover: "hover:shadow-[0_20px_40px_-15px_rgba(5,150,105,0.3)]"
                };
            default: // light
                return {
                    bg: "bg-white",
                    text: "text-[#1A3C5E]",
                    desc: "text-slate-600",
                    highlight: "text-[#059669]",
                    border: "border-[#E8DFD3]/60",
                    iconContainer: "bg-slate-50 text-slate-600",
                    hover: "hover:border-[#1A3C5E]/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
                };
        }
    };

    const s = getThemeStyles();

    return (
        <div
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 ${s.bg} ${s.border} border ${colSpan} ${s.hover}`}
        >
            {/* Background Giant Icon (Subtle) */}
            <Icon className={`absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.iconContainer} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} strokeWidth={2} />
                </div>

                <div className="mt-auto">
                    <h3 className={`text-xl font-bold tracking-tight mb-3 ${s.text}`}>
                        {title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed font-medium ${s.desc}`}>
                        {parts[0]}
                        {parts.length > 1 && <span className={`font-bold ${s.highlight}`}>{highlight}</span>}
                        {parts.length > 1 && parts[1]}
                    </p>
                </div>
            </div>
        </div>
    );
}
