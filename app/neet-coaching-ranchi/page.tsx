import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import MapSection from "@/components/Sections/MapSection";
import { CheckCircle2, Trophy, HeartPulse, Microscope, Target, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Best NEET Coaching in Ranchi | Top Medical Entrance Institute - RISE",
    description: "Secure your government medical seat with RISE Coaching Institute in Doranda. Expert Botany, Zoology & Physics faculty for NEET preparation.",
    alternates: {
        canonical: "/neet-coaching-ranchi",
    },
    openGraph: {
        title: "Best NEET Coaching in Ranchi - RISE Institute",
        description: "Crack NEET with Ranchi's most disciplined coaching institute. Located in Doranda.",
    },
};

export default function NEETCoachingPage() {
    const faqs = [
        {
            question: "How does RISE help with NEET Physics difficulty?",
            answer: "We know Physics is the biggest hurdle for medical aspirants. Our faculty starts from basic mathematics and focuses on concept visualization rather than just formulas."
        },
        {
            question: "What is the batch size for NEET candidates?",
            answer: "We maintain a strict ratio of 35-40 students per batch to ensure every student gets personal attention for Biology diagrams and Physics numericals."
        },
        {
            question: "Do you cover NCERT for Biology?",
            answer: "Yes, 100%. Our Biology curriculum is strictly line-by-line NCERT based, as 90% of NEET questions come directly from NCERT."
        },
        {
            question: "Are there separate sessions for doubt clearance?",
            answer: "Yes, daily doubt counters are available. You can ask questions from any book/module."
        }
    ];

    const neetTestimonials = [
        {
            text: "Physics was my nightmare, but the faculty at RISE made it my strongest subject. The visualization techniques really helped.",
            author: "NEET Aspirant (Score 650+)",
            year: "2024"
        },
        {
            text: "The Biology notes provided by RISE are gold. Pure NCERT extracted points that helped me revise quickly.",
            author: "Medical Student, RIMS",
            year: "2023"
        },
        {
            text: "Doranda center is very peaceful. No distractions like other coaching hubs. Just pure study.",
            author: "Parent of NEET Student",
            year: "2024"
        }
    ];

    return (
        <main className="bg-[#FDFCFB]">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-emerald-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6 border border-emerald-500/30">
                        Doctors in the Making - Session 2025-26
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Best NEET Coaching in <span className="text-emerald-500">Ranchi</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        Realize your dream of becoming a doctor.
                        NCERT-centric rigorous training at RISE Doranda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#enquire" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-500/25">
                            Book Free Demo Class
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose RISE for NEET */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] bg-emerald-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <span className="text-lg">Biology Lab / Class</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <HeartPulse className="w-10 h-10 text-rose-500" />
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">Dr. Faculty</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expert Mentors</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Why Future Doctors Choose <span className="text-emerald-600">RISE</span>?
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Neet preparation requires a different mindset than JEE. It&apos;s about accuracy, speed, and 100% command over NCERT.
                            At RISE, we don&apos;t just teach Science; we train you for the exam.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "NCERT Line-by-Line", desc: "Special focus on Biology & Chemistry NCERT." },
                                { title: "Physics for Medicos", desc: "Simplified Physics specifically designed for Biology students." },
                                { title: "Regular Mock Tests", desc: "Weekly tests exactly on the NTA pattern." },
                                { title: "Personal Attention", desc: "We know every student&apos;s weak areas." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-[#FAF9F7]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">NEET Mastery Program</h2>
                        <p className="text-slate-600 mt-2">Class 11, 12 & Dropper Batches</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 transition-all group">
                            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Microscope className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Biology</h3>
                            <p className="text-slate-600 text-sm">Deep dive into Botany and Zoology. Memorization techniques for complex terms and diagrams.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 transition-all group">
                            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Target className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Chemistry</h3>
                            <p className="text-slate-600 text-sm">Balancing Organic, Inorganic, and Physical Chemistry with reaction mechanisms and formula sheets.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 transition-all group">
                            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Calendar className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Speed Testing</h3>
                            <p className="text-slate-600 text-sm">OMR based offline tests from Day 1 to build exam temperament and speed.</p>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection testimonials={neetTestimonials} />
            <FAQSection faqs={faqs} />

            {/* CTA */}
            <section id="enquire" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Start Your Medical Journey</h2>
                    <p className="text-emerald-100 text-lg mb-10">
                        Join the league of top rankers. Visit RISE Doranda today.
                    </p>
                    <button className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl shadow-xl hover:bg-emerald-50 transition-all">
                        Call +91 82525 17726
                    </button>
                </div>
            </section>

            <MapSection />
        </main>
    );
}
