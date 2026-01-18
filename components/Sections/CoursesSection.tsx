"use client";

import { usePathname } from "next/navigation";
import ProgramCard from "../Visuals/ProgramCard";
import { useEffect, useRef, useState } from "react";

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
                        Structured learning paths designed for every stage of your child's academic journey.
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
        <section id="programs" className="w-full bg-[#fcfcfd]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
                <header className="max-w-3xl">
                    <h2 className="text-3xl font-semibold leading-tight text-[#1A3C5E] sm:text-4xl">
                        Programs Built Around Academic Stages
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Each stage needs a different kind of guidance. Our programs evolve with your child’s
                        phase — building foundations early, then adding structure, revision, and exam readiness
                        with consistent mentor support.
                    </p>
                </header>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Class 5-8 */}
                    <div id="foundation" className="scroll-mt-32">
                        <ProgramCard
                            title="Class 5–8"
                            subtitle="School Exam Excellence"
                            frontContent={
                                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
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
                            backCTA="Enquire Now →"
                        />
                    </div>

                    {/* Class 9-10 */}
                    <div className="scroll-mt-32">
                        <ProgramCard
                            title="Class 9–10"
                            subtitle="Board Exam Mastery"
                            frontContent={
                                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
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
                            backCTA="Enquire Now →"
                        />
                    </div>

                    {/* Class 11-12 (Medical) */}
                    <div id="doctor" className="scroll-mt-32">
                        <ProgramCard
                            title="Class 11–12 (Medical)"
                            subtitle="Boards + NEET Preparation"
                            frontContent={
                                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                                    <li>Strict adherence to NCERT with deep conceptual clarity.</li>
                                    <li>Continuous revision cycles to build high retention.</li>
                                    <li>Weekly mock tests to perfect speed and accuracy.</li>
                                </ul>
                            }
                            backContent={{
                                benefits: "A disciplined system designed for high retention and rank consistency.",
                                duration: "2 Years | Integrated Program",
                                reason: "NEET requires stamina and precision. We build both day by day."
                            }}
                            backCTA="Enquire Now →"
                        />
                    </div>

                    {/* Class 11-12 (Engineering) */}
                    <div id="engineer" className="scroll-mt-32">
                        <ProgramCard
                            title="Class 11–12 (Engineering)"
                            subtitle="Boards + JEE Preparation"
                            frontContent={
                                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                                    <li>Advanced logic building and problem-solving techniques.</li>
                                    <li>Focus on application-based learning for JEE Mains & Advanced.</li>
                                    <li>Strategic error analysis to minimize negative marking.</li>
                                </ul>
                            }
                            backContent={{
                                benefits: "Develops the analytical depth required to crack top engineering ranks.",
                                duration: "2 Years | Integrated Program",
                                reason: "We move beyond rote learning to true problem-solving intuition."
                            }}
                            backCTA="Enquire Now →"
                        />
                    </div>

                    {/* Class 11-12 (Commerce) */}
                    <div id="commerce" className="scroll-mt-32">
                        <ProgramCard
                            title="Class 11–12 (Commerce)"
                            subtitle="Boards + Professional Prep"
                            frontContent={
                                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                                    <li>Conceptual mastery of Accountancy, Economics, and Business.</li>
                                    <li>Preparation for Board exams and professional entrance tests.</li>
                                    <li>Focus on real-world application and financial literacy.</li>
                                </ul>
                            }
                            backContent={{
                                benefits: "Secures top Board scores and lays a solid foundation for CA/CUET.",
                                duration: "2 Years | Integrated Program",
                                reason: "Commerce mastery is about clarity, not just balancing balance sheets."
                            }}
                            backCTA="Enquire Now →"
                        />
                    </div>

                    {/* Class 11-12 (Arts) */}
                    <div id="arts" className="scroll-mt-32">
                        <ProgramCard
                            title="Class 11–12 (Arts)"
                            subtitle="Boards + Humanities"
                            frontContent={
                                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                                    <li>In-depth understanding of History, Political Science & Sociology.</li>
                                    <li>Develops critical thinking vs. just memorization.</li>
                                    <li>Guidance for future pathways in Law, Policy, and Civil Services.</li>
                                </ul>
                            }
                            comingSoon={true}
                            backContent={{
                                benefits: "",
                                duration: "",
                                reason: ""
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
