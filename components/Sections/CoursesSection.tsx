"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ProgramCard from "../Visuals/ProgramCard";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data for Courses Page Variant ---
const premiumCourses = [
    {
        id: "foundation",
        badge: "Foundation",
        title: "Class 5–8",
        description: "Building strong logic and core concepts early.",
        subjects: ["Maths", "Science", "English"],
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        id: "boards",
        badge: "Board Prep",
        title: "Class 9–10",
        description: "Mastering school exams with a competitive edge.",
        subjects: ["All Subjects", "Olympiads", "NTSE"],
        gradient: "from-emerald-500 to-teal-400"
    },
    {
        id: "integrated",
        badge: "Integrated",
        title: "Class 11–12",
        description: "Boards + Entrance prep in perfect sync.",
        subjects: ["Medical", "Engineering", "Commerce"],
        gradient: "from-orange-500 to-amber-400"
    },
    {
        id: "competitive",
        badge: "Competitive",
        title: "JEE / NEET",
        description: "Focused rigorous training for top ranks.",
        subjects: ["Advanced Problem Solving", "Mock Tests"],
        gradient: "from-rose-500 to-pink-400"
    }
];

export default function CoursesSection() {
    const pathname = usePathname();
    const isCoursesPage = pathname === "/courses";

    if (isCoursesPage) {
        return <CoursesPageVariant />;
    }

    return <HomePageVariant />;
}

// --- Variant 1: Premium Glass Layout (Courses Page) ---
function CoursesPageVariant() {
    return (
        <section id="courses" className="relative w-full py-24 bg-[#f8fafc]">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-orange-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] bg-blue-100/40 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                        Our Courses
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Structured learning paths designed for every stage of your child&apos;s academic journey.
                    </p>
                </div>

                {/* Cards Grid */}
                <div id="courses-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
                    {premiumCourses.map((course, index) => (
                        <PremiumCourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function PremiumCourseCard({ course, index }: { course: typeof premiumCourses[0]; index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`group relative flex flex-col items-start p-6 h-full rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg transition-all duration-400 ease-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-white/80 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{
                transitionDelay: `${index * 100}ms`,
                transformStyle: "preserve-3d"
            }}
        >
            {/* Content Layer */}
            <div className="relative z-10 w-full">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent border border-slate-200/50 mb-4 bg-white/50 shadow-sm`}>
                    {course.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {course.title}
                </h3>

                <p className="text-sm font-medium text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {course.subjects.map((subject, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-[11px] font-medium text-slate-500 bg-slate-100/50 rounded-md border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all"
                        >
                            {subject}
                        </span>
                    ))}
                </div>
            </div>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-400 pointer-events-none`} />
        </div>
    );
}

// --- Variant 2: Original Home Page Layout (Safekeep) ---
function HomePageVariant() {
    return (
        <section id="programs" className="w-full bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 lg:py-28">
                <header className="max-w-3xl mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E3A8A] sm:text-5xl">
                        Programs Built Around <span className="text-[#10B981]">Academic Stages</span>
                    </h2>
                    <p className="mt-4 sm:mt-6 text-[1rem] sm:text-lg leading-relaxed text-slate-600">
                        Each stage needs a different kind of guidance. Our programs evolve with your child&rsquo;s
                        phase — building foundations early, then adding structure, revision, and exam readiness.
                    </p>
                </header>

                <div className="space-y-8 sm:space-y-12">
                    {/* FIRST ROW: Foundation Stages */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Class 5-8 - Foundation (Blue) */}
                        <div id="foundation" className="scroll-mt-32">
                            <ProgramCard
                                title="Class 5–8"
                                subtitle="School Exam Excellence"
                                colorTheme={{
                                    main: "text-[#1E3A8A]",
                                    accent: "text-blue-600 border-blue-500",
                                    bg: "bg-blue-50/50",
                                    gradient: "from-blue-100/20 to-white"
                                }}
                                frontContent={
                                    <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-700 marker:text-blue-500">
                                        <li>Building the habit of daily, disciplined self-study.</li>
                                        <li>Strengthening core concepts in Maths and Science.</li>
                                        <li>Improving answer-writing skills for school exams.</li>
                                    </ul>
                                }
                                backContent={{
                                    benefits: "Creates a calm, confident learner who enjoys the process of studying.",
                                    duration: "1 Year (Renewable) | 3 days/week",
                                    reason: "Early mentorship prevents the need for intense pressure in later years."
                                }}
                                backCTA="View Program"
                                ctaLink="/foundation-classes-ranchi"
                            />
                        </div>

                        {/* Class 9-10 - Board Prep (Emerald) */}
                        <div className="scroll-mt-32">
                            <ProgramCard
                                title="Class 9–10"
                                subtitle="Board Exam Mastery"
                                colorTheme={{
                                    main: "text-[#064E3B]",
                                    accent: "text-emerald-600 border-emerald-500",
                                    bg: "bg-emerald-50/50",
                                    gradient: "from-emerald-100/20 to-white"
                                }}
                                frontContent={
                                    <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-700 marker:text-emerald-500">
                                        <li>Comprehensive coverage of Board syllabus with revision.</li>
                                        <li>Regular testing to eliminate fear of exams.</li>
                                        <li>Balancing school curriculum with competitive foundations.</li>
                                    </ul>
                                }
                                backContent={{
                                    benefits: "Ensures high Board percentage while subtly building competitive logic.",
                                    duration: "1 Year | 4 days/week",
                                    reason: "We stabilize performance so students enter Class 11 with momentum."
                                }}
                                backCTA="View Program"
                                ctaLink="/foundation-classes-ranchi"
                            />
                        </div>
                    </div>

                    {/* SECOND ROW: Grouped 11-12 Section */}
                    <div className="mt-8">
                        <SeniorSecondaryGroup />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SeniorSecondaryGroup() {
    const [activeStream, setActiveStream] = useState<'medical' | 'engineering' | 'commerce' | 'arts'>('medical');

    const streams = {
        medical: {
            id: 'medical',
            title: "Class 11–12 (Medical)",
            subtitle: "Boards + NEET Preparation",
            accent: "text-indigo-600",
            bg: "bg-indigo-50/20",
            gradient: "from-indigo-400 to-blue-500",
            marker: "marker:text-indigo-500",
            points: [
                "Strict adherence to NCERT with deep conceptual clarity.",
                "Continuous revision cycles to build high retention.",
                "Weekly mock tests to perfect speed and accuracy."
            ],
            details: {
                benefits: "A disciplined system designed for high retention and rank consistency.",
                duration: "2 Years | Integrated Program",
                cta: "/neet-coaching-ranchi"
            }
        },
        engineering: {
            id: 'engineering',
            title: "Class 11–12 (Engineering)",
            subtitle: "Boards + JEE Preparation",
            accent: "text-orange-600",
            bg: "bg-orange-50/20",
            gradient: "from-orange-400 to-amber-500",
            marker: "marker:text-orange-500",
            points: [
                "Advanced logic building and problem-solving for national level exams.",
                "Focus on application-based learning for JEE Main & Advanced.",
                "Strategic error analysis to minimize negative marking."
            ],
            details: {
                benefits: "Develops the analytical depth required to crack top engineering ranks.",
                duration: "2 Years | Integrated Program",
                cta: "/jee-coaching-ranchi"
            }
        },
        commerce: {
            id: 'commerce',
            title: "Class 11–12 (Commerce)",
            subtitle: "Boards + Professional Prep",
            accent: "text-amber-600",
            bg: "bg-amber-50/20",
            gradient: "from-amber-400 to-yellow-500",
            marker: "marker:text-amber-500",
            points: [
                "Conceptual mastery of Accountancy, Economics, and Business.",
                "Preparation for Board exams and professional entrance tests.",
                "Focus on real-world application and financial literacy."
            ],
            details: {
                benefits: "Secures top Board scores and lays a solid foundation for CA/CUET.",
                duration: "2 Years | Integrated Program",
                cta: "/commerce-coaching-ranchi"
            }
        },
        arts: {
            id: 'arts',
            title: "Class 11–12 (Arts)",
            subtitle: "Coming Soon",
            accent: "text-slate-500",
            bg: "bg-slate-50/20",
            gradient: "from-slate-400 to-slate-500",
            marker: "marker:text-slate-400",
            points: [
                "In-depth understanding of History, Political Science & Sociology.",
                "Develops critical thinking vs. just memorization.",
                "Guidance for future pathways in Law and Civil Services."
            ],
            details: {
                benefits: "Coming Soon",
                duration: "N/A",
                cta: "#"
            }
        }
    };

    const current = streams[activeStream];

    return (
        <div className="w-full bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[400px]">
                {/* LEFT: Tab Navigation */}
                <div className="lg:col-span-4 bg-slate-50/50 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-100/80">
                    <div className="mb-4 sm:mb-8">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-100 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Stage 3</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">Senior Secondary</h3>
                        <p className="text-[13px] text-slate-500 font-medium mt-1">Select your path to excellence</p>
                    </div>

                    <div className="flex lg:flex-col gap-2 sm:gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 relative">
                        {/* THEME: Floating indicator background */}
                        <div className="absolute inset-0 pointer-events-none">
                            {(Object.keys(streams) as Array<keyof typeof streams>).map((key, i) => (
                                activeStream === key && (
                                    <motion.div
                                        key="indicator"
                                        layoutId="tab-indicator"
                                        className="absolute left-0 right-0 h-[56px] bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)] border border-slate-200/60"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        style={{ top: i * (56 + 6) }} // Adjusting for height + gap
                                    />
                                )
                            ))}
                        </div>

                        {(Object.keys(streams) as Array<keyof typeof streams>).map((key) => {
                            const isActive = activeStream === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveStream(key)}
                                    className={`w-auto lg:w-full h-auto lg:h-[56px] text-left px-4 sm:px-5 py-2.5 lg:py-0 rounded-xl transition-all duration-300 relative group flex items-center justify-between z-10 flex-shrink-0 ${isActive
                                        ? "text-slate-900 bg-white shadow-sm border border-slate-200/60 lg:bg-transparent lg:shadow-none lg:border-none"
                                        : "text-slate-500 hover:text-slate-700"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${streams[key].gradient} ${isActive ? 'scale-110 shadow-sm' : 'opacity-30 scale-90 group-hover:opacity-100'} transition-all duration-300`} />
                                        <span className={`font-semibold tracking-tight transition-all duration-300 ${isActive ? 'text-[15px]' : 'text-[14px]'}`}>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </span>
                                    </div>

                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${current.gradient} animate-pulse`} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: Dynamic Content Body with Smooth Transitions */}
                <div className="lg:col-span-8 p-4 sm:p-6 lg:p-10 flex flex-col justify-center bg-white relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStream}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex flex-col h-full relative z-10"
                        >
                            {/* Theme background glow */}
                            <div className={`absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br ${current.gradient} opacity-[0.03] blur-3xl rounded-full pointer-events-none`} />

                            <div className="mb-8">
                                <span className={`inline-block text-[11px] font-bold uppercase tracking-widest ${current.accent} mb-2`}>
                                    {current.subtitle}
                                </span>
                                <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                                    {current.title}
                                </h4>
                            </div>

                            <div className="space-y-6 flex-grow">
                                <ul className={`space-y-4 ${current.marker} pl-4`}>
                                    {current.points.map((point, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05) }}
                                            key={i}
                                            className="text-slate-600 text-[14px] leading-relaxed font-medium"
                                        >
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                                    <div>
                                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Core Benefit</h5>
                                        <p className="text-[14px] text-slate-800 font-semibold leading-relaxed">{current.details.benefits}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Duration</h5>
                                        <p className="text-[14px] text-slate-800 font-semibold leading-relaxed">{current.details.duration}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 flex items-center justify-between border-t border-slate-100">
                                <p className="hidden sm:block text-[11px] font-medium text-slate-400">
                                    Personalized mentorship included.
                                </p>

                                {current.id !== 'arts' ? (
                                    <Link
                                        href={current.details.cta}
                                        className={`group px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-semibold transition-all shadow-sm flex items-center gap-2`}
                                    >
                                        View Syllabus
                                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                                        <span className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest">June 2026</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
