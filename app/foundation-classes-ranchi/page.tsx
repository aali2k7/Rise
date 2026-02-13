import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import MapSection from "@/components/Sections/MapSection";
import { CheckCircle2, Rocket, Brain, Puzzle, Calculator, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Foundation Classes in Ranchi (Class 8-10) | RISE Institute",
    description: "Build a strong base for JEE/NEET with RISE Foundation Classes in Doranda, Ranchi. For Class 8, 9, and 10 students.",
    alternates: {
        canonical: "/foundation-classes-ranchi",
    },
    openGraph: {
        title: "Foundation Classes (8-10) in Ranchi - RISE Institute",
        description: "Start early for JEE/NEET success. Best foundation coaching in Doranda.",
    },
};

export default function FoundationPage() {
    const faqs = [
        {
            question: "Why start coaching in Class 8 or 9?",
            answer: "Starting early builds strong fundamentals (logic, reasoning, basic math) which makes Class 11 & 12 much easier and stress-free."
        },
        {
            question: "Will this burden the child alongside school?",
            answer: "No. Our classes are scheduled after school hours (evening batches) and we focus on concept clarity which actually helps them score better in school exams too."
        },
        {
            question: "Do you prepare for Olympiads and NTSE?",
            answer: "Yes, our foundation course includes preparation for NTSE, various Olympiads (SOF, Silverzone), and scholarship exams."
        },
        {
            question: "Is transport available?",
            answer: "We are located centrally in Doranda. Many pool cars and vans operate from our center to Hinoo, Argora, and nearby areas."
        }
    ];

    const foundationTestimonials = [
        {
            text: "Joining RISE in Class 9 gave my son a huge advantage. He is now finding Class 11 Physics very easy compared to his peers.",
            author: "Parent of Class 11 Student",
            year: "2024"
        },
        {
            text: "The foundation faculty is very caring. They don't just teach, they mentor. My daughter loves the science experiments.",
            author: "Mother of Class 8 Student",
            year: "2023"
        },
        {
            text: "Best decision for NTSE preparation. The study material is very detailed.",
            author: "Class 10 Student",
            year: "2024"
        }
    ];

    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-indigo-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6 border border-indigo-500/30">
                        Early Start Advantage - Class 8, 9 & 10
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Best Foundation Classes in <span className="text-indigo-400">Ranchi</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        Build a rock-solid foundation for JEE, NEET & Boards.
                        Nurturing young minds in Doranda with care and excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#enquire" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25">
                            Book Assessment Test
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose RISE for Foundation */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Why Start Early with <span className="text-indigo-600">RISE</span>?
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            The competition for IITs and AIIMS is getting tougher every year.
                            Top rankers don&apos;t wait for Class 11; they start building their aptitude from Class 8.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Logic & Reasoning", desc: "We develop critical thinking skills, not just rote learning." },
                                { title: "School + Competitive", desc: "Balance school syllabus with competitive edge (Olympiads/NTSE)." },
                                { title: "Math Mastery", desc: "Removing fear of mathematics through visual learning." },
                                { title: "Safe Environment", desc: "Caring & disciplined environment in Doranda." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] bg-indigo-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <span className="text-lg">Classroom Interaction</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <Rocket className="w-10 h-10 text-orange-500" />
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">Future Ready</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Olympiad Prep</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">360° Development Program</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <Calculator className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mathematical Aptitude</h3>
                            <p className="text-slate-600 text-sm">Vedic math, mental ability, and logical reasoning to boost calculation speed.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <Brain className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Science Concepts</h3>
                            <p className="text-slate-600 text-sm">Understanding &apos;Why&apos; and &apos;How&apos; behind every scientific phenomenon.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <GraduationCap className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Boards Excellence</h3>
                            <p className="text-slate-600 text-sm">Full coverage of CBSE/ICSE syllabus to ensure 95%+ in school exams.</p>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection testimonials={foundationTestimonials} />
            <FAQSection faqs={faqs} />

            {/* CTA */}
            <section id="enquire" className="py-20 bg-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Invest in Your Child&apos;s Future</h2>
                    <p className="text-indigo-100 text-lg mb-10">
                        The right guidance at the right time changes everything.
                    </p>
                    <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl shadow-xl hover:bg-indigo-50 transition-all">
                        Call +91 82525 17726
                    </button>
                </div>
            </section>

            <MapSection />
        </main>
    );
}
