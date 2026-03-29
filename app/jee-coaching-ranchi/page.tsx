import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import { CheckCircle2, Cpu, Infinity, Beaker, Calculator, Rocket } from "lucide-react";

export const metadata: Metadata = {
    title: "Best JEE Coaching in Ranchi | Top Engineering Entrance Institute - RISE",
    description: "Crack IIT-JEE Mains and Advanced with RISE Coaching Institute. Expert Math, Physics & Chemistry faculty.",
};

export default function JEECoachingPage() {
    const jeeTestimonials = [
        {
            text: "The conceptual depth in Mathematics taught here is unmatched. It completely changed my approach to advanced problems.",
            author: "JEE Advanced Top Ranker",
            year: "2024"
        },
        {
            text: "RISE focuses on application, not just theory. The weekly tests helped me identify my weak spots early and fix them.",
            author: "NIT Aspirant (99.5%ile)",
            year: "2024"
        },
        {
            text: "A very competitive but healthy environment. Faculty is always available for doubt clearance till late evening.",
            author: "Engineering Student",
            year: "2023"
        }
    ];

    const faqs = [
        { question: "How is JEE preparation different from Board preparation?", answer: "JEE requires deep analytical thinking and application of concepts to novel problems, whereas Boards focus more on standard derivations and theoretical recall." },
        { question: "What is the frequency of mock tests?", answer: "We conduct weekly part-tests and monthly full-syllabus tests strictly adhering to the latest NTA JEE Main and Advanced patterns." },
        { question: "Do you focus on JEE Advanced from day one?", answer: "Yes. Our curriculum is integrated. We build the base with NCERT/Mains level and gradually scale up to JEE Advanced difficulty within the same topic." },
        { question: "Are study materials provided?", answer: "Absolutely. You will receive comprehensive modules with graded exercises (Level 1 to Advanced)." }
    ];

    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative w-full pt-32 pb-24 lg:pt-44 lg:pb-36 flex flex-col items-center justify-center bg-[#0f172a] text-center px-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#f97316]/10 text-[#fdba74] text-sm font-bold mb-6 border border-[#fdba74]/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] tracking-wide">
                    Engineers in the Making - Session 2025-26
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 tracking-tight leading-tight">
                    Best JEE Coaching in <span className="text-[#f97316]">Ranchi</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                    Master the logic to decode the toughest entrances. Advanced analytical training at RISE Doranda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold transition-all shadow-lg text-lg">
                        Book Free Demo Class
                    </button>
                </div>
            </section>

            {/* WHY FUTURE ENGINEERS CHOOSE RISE */}
            <section className="py-24 lg:py-32 bg-[#FAFAFA] w-full">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] bg-[#E2E8F0] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200 flex items-center justify-center">
                            <span className="text-xl text-slate-400 font-medium">Interactive Smart Class</span>
                        </div>
                        <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4">
                            <Rocket className="w-10 h-10 text-orange-500" strokeWidth={2.5} />
                            <div>
                                <p className="text-xl font-bold text-slate-900 leading-tight">IITian Faculty</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Top Ranks</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] mb-6 tracking-tight">
                            Why Future Engineers Choose <span className="text-[#f97316]">RISE</span>?
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            Engineering entrances demand extreme problem-solving intuition. We go beyond standard derivations. At RISE, we teach you how to think, analyze, and optimize your approach for JEE.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: "Logic Over Rote", desc: "No blindly memorizing formulas. We derive and apply." },
                                { title: "Error Analysis", desc: "Strategic review of negative marks to maximize your final score." },
                                { title: "Graded Complexity", desc: "Assignments designed to take you from Mains to Advanced." },
                                { title: "Doubt Resolution", desc: "Faculty accessible daily for complex numerical breakdowns." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
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

            {/* JEE MASTERY PROGRAM */}
            <section className="py-24 lg:py-32 bg-white w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] tracking-tight mb-4">JEE Mastery Program</h2>
                        <p className="text-lg text-slate-500">Class 11, 12 & Dropper Batches</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                                <Infinity className="w-7 h-7 text-orange-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Physics</h3>
                            <p className="text-slate-500 leading-relaxed">Advanced mechanics, electromagnetism, and optics taught with real-world visualizations.</p>
                        </div>
                        {/* Card 2 - Math (Featured) */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(249,115,22,0.1)] border border-orange-500 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mb-8">
                                <Calculator className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Mathematics</h3>
                            <p className="text-slate-500 leading-relaxed">Calculus, coordinate geometry, and algebra tackled with speed-enhancing heuristics and shortcuts.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                                <Beaker className="w-7 h-7 text-orange-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Chemistry</h3>
                            <p className="text-slate-500 leading-relaxed">Mastering Organic mechanisms and Physical chemistry numericals for high scoring accuracy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT PARENTS SAY */}
            <TestimonialsSection testimonials={jeeTestimonials} />

            {/* FAQ */}
            <FAQSection faqs={faqs} />
        </main>
    );
}
