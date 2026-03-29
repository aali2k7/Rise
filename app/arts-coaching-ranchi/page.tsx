import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import { CheckCircle2, BookOpen, Globe2, Landmark, Library, Users2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Arts & Humanities Coaching in Ranchi | Class 11 & 12 - RISE",
    description: "Premium coaching for Arts & Humanities fields. Expert guidance for Boards, CUET and Civil Services foundation.",
};

export default function ArtsCoachingPage() {
    const artsTestimonials = [
        {
            text: "RISE transformed History from a boring memorization subject to a fascinating story of humanity. Scoring was easy.",
            author: "Arts Board Topper",
            year: "2024"
        },
        {
            text: "The conceptual clarity in Political Science helped me immensely in my CUET preparation. Phenomenal teachers.",
            author: "CUET High Scorer",
            year: "2024"
        },
        {
            text: "Very grateful to the faculty for encouraging critical debate and thoughtful analysis instead of just textbook reading.",
            author: "Parent of Student",
            year: "2023"
        }
    ];

    const faqs = [
        { question: "How does this program help with Civil Services?", answer: "Our Humanities curriculum is heavily aligned with the foundational knowledge required for UPSC and State PSC exams." },
        { question: "Do you focus on answer writing?", answer: "Yes. In Arts, how you articulate your answer is as important as what you know. We hold dedicated subjective answer writing sessions." },
        { question: "Which subjects do you cover?", answer: "We cover Political Science, History, Geography, Sociology, and Economics." },
        { question: "Is CUET preparation separate?", answer: "CUET pattern objective testing is integrated directly into our regular weekend assessments." }
    ];

    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative w-full pt-32 pb-24 lg:pt-44 lg:pb-36 flex flex-col items-center justify-center bg-[#1A3C5E] text-center px-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#38bdf8]/10 text-[#7dd3fc] text-sm font-bold mb-6 border border-[#7dd3fc]/20 shadow-[0_0_15px_rgba(56,189,248,0.15)] tracking-wide">
                    Thinkers & Leaders - Session 2025-26
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 tracking-tight leading-tight">
                    Best Arts & Humanities Coaching in <span className="text-[#38bdf8]">Ranchi</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                    Cultivate deep critical thinking, master your Boards, and build a powerful foundation for Civil Services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-[#38bdf8] hover:bg-[#0284c7] text-white rounded-xl font-bold transition-all shadow-lg text-lg">
                        Book Free Demo Class
                    </button>
                </div>
            </section>

            {/* WHY CHOOSE RISE */}
            <section className="py-24 lg:py-32 bg-[#FAFAFA] w-full">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] bg-[#E2E8F0] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200 flex items-center justify-center">
                            <span className="text-xl text-slate-400 font-medium">Discussion & Debate Forum</span>
                        </div>
                        <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4">
                            <BookOpen className="w-10 h-10 text-sky-500" strokeWidth={2.5} />
                            <div>
                                <p className="text-xl font-bold text-slate-900 leading-tight">Subject Experts</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">UPSC Mentors</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] mb-6 tracking-tight">
                            Why Humanities Students Choose <span className="text-[#38bdf8]">RISE</span>?
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            Arts subjects require analytical thinking and eloquent expression, not just memorization. We train you to analyze historical events, political structures, and social dynamics.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: "Analytical Approach", desc: "Understanding the 'how' and 'why' behind historical and political shifts." },
                                { title: "Answer Writing Skill", desc: "Dedicated sessions to drastically improve your subjective answering speed and structure." },
                                { title: "CUET Readiness", desc: "Objective MCQs built directly into the weekly testing framework." },
                                { title: "Civil Services Base", desc: "Our notes and lectures act as your very first step toward UPSC." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-sky-500" strokeWidth={2.5} />
                                    </div>
                                    <div className="pt-1.5">
                                        <h3 className="font-bold text-lg text-[#1A3C5E] mb-1">{item.title}</h3>
                                        <p className="text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ARTS MASTERY PROGRAM */}
            <section className="py-24 lg:py-32 bg-white w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] tracking-tight mb-4">Humanities Mastery Program</h2>
                        <p className="text-lg text-slate-500">Class 11, 12 Boards & CUET target</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-8">
                                <Library className="w-7 h-7 text-sky-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">History</h3>
                            <p className="text-slate-500 leading-relaxed">Connect the dots across timelines to write eloquent, high-scoring structured answers for your boards.</p>
                        </div>
                        {/* Card 2 - Political Science (Featured) */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(56,189,248,0.1)] border border-sky-500 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-8">
                                <Landmark className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Political Science</h3>
                            <p className="text-slate-500 leading-relaxed">Deep analysis of constitutions, political systems, and international relations for absolute mastery.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-8">
                                <Users2 className="w-7 h-7 text-sky-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Sociology & Geo</h3>
                            <p className="text-slate-500 leading-relaxed">Evaluating social institutions and geographical phenomena to develop a well-rounded civil-services mindset.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT PARENTS SAY */}
            <TestimonialsSection testimonials={artsTestimonials} />

            {/* FAQ */}
            <FAQSection faqs={faqs} />
        </main>
    );
}
