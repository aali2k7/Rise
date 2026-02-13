import type { Metadata } from "next";
import HeroSection from "@/components/Sections/HeroSection"; // We might want a custom hero for subpages, but strictly using existing components for now or custom inline.
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import MapSection from "@/components/Sections/MapSection";
import { CheckCircle2, Trophy, Users, BookOpen, Target, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Best JEE Coaching in Ranchi | Top IIT JEE Institute - RISE",
    description: "Join RISE Coaching Institute in Doranda, Ranchi for the best JEE Mains & Advanced preparation. Expert faculty, small batches, and proven results.",
    alternates: {
        canonical: "/jee-coaching-ranchi",
    },
    openGraph: {
        title: "Best JEE Coaching in Ranchi - RISE Institute",
        description: "Crack IIT JEE with Ranchi's most disciplined coaching institute. Located in Doranda.",
    },
};

export default function JEECoachingPage() {
    const faqs = [
        {
            question: "Why is RISE considered the best JEE coaching in Ranchi?",
            answer: "RISE combines personalized mentorship, small batch sizes (max 40), and expert faculty from Kota & Hyderabad. Located centrally in Doranda, we ensure every student gets individual attention, unlike crowded institutes."
        },
        {
            question: "What is the fee structure for JEE Coaching in Ranchi at RISE?",
            answer: "We offer the most affordable premium coaching in Ranchi. Our fees are transparent with no hidden charges. We also offer scholarships based on our entrance test (RISE-SAT). Visit our Doranda center for details."
        },
        {
            question: "Do you provide hostel facilities for students from outside Ranchi?",
            answer: "Yes, we have verified hostel tie-ups near our Doranda campus (walking distance) specifically for students from Hazarihagh, Bokaro, and other districts."
        },
        {
            question: "How are doubts handled?",
            answer: "We have a dedicated &apos;Doubt Removal Counter&apos; active 6 hours a day. Students can walk in anytime to clear concepts."
        }
    ];

    return (
        <main className="bg-white">
            {/* Custom Hero for JEE Page */}
            <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
                        Admissions Open for Session 2025-26
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Best JEE Coaching in <span className="text-blue-500">Ranchi</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        Crack JEE Mains & Advanced with structured guidance, not just lectures.
                        Join the most student-centric institute in Doranda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#enquire" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                            Book Free Demo Class
                        </a>
                        <a href="#curriculum" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold backdrop-blur-sm transition-all">
                            View Syllabus
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose RISE for JEE - Hyperlocal & Trust */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Why Serious Aspirants Choose <span className="text-blue-600">RISE Doranda</span>?
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            In the crowded coaching market of Ranchi (Lalpur/Hari Om Tower), students often get lost in the crowd.
                            At RISE Doranda, we bring the rigor of Kota with the care of personal tutoring.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Small Batches", desc: "Strictly 40 students per batch. No mob mentality." },
                                { title: "Personal Mentorship", desc: "Weekly 1-on-1 progress tracking by senior faculty." },
                                { title: "Doranda Advantage", desc: "Peaceful learning environment, away from the chaos of Lalpur." },
                                { title: "Proven Methodology", desc: "Daily Practice Papers (DPPs) + All India Test Series." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600" />
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
                        <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            {/* Placeholder for classroom image */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <span className="text-lg">Students in Classroom</span>
                            </div>
                        </div>
                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <Trophy className="w-10 h-10 text-yellow-500" />
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">98.5%</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Selection Ratio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Structure Section */}
            <section id="curriculum" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Comprehensive JEE Curriculum</h2>
                        <p className="text-slate-600 mt-2">From Foundation to Advanced Level</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <BookOpen className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Phase 1: Concepts</h3>
                            <p className="text-slate-600 text-sm">NCERT level mastery to build a rock-solid foundation. Focus on Board syllabus + JEE Main basics.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <Target className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Phase 2: Application</h3>
                            <p className="text-slate-600 text-sm">Advanced problem solving, previous year questions (PYQs), and speed enhancement techniques.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <Calendar className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Phase 3: Testing</h3>
                            <p className="text-slate-600 text-sm">Rigorous All India Test Series (AITS), full syllabus mock tests, and error analysis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <FAQSection faqs={faqs} />

            {/* CTA Section */}
            <section id="enquire" className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Start Your JEE Journey in Ranchi</h2>
                    <p className="text-blue-100 text-lg mb-10">
                        Don&apos;t just dream of IIT. Prepare for it with Ranchi&apos;s best mentors.
                        Visit our Doranda Center today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-xl hover:bg-blue-50 transition-all">
                            Call +91 82525 17726
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                            Get Directions
                        </button>
                    </div>
                </div>
            </section>

            <MapSection />
        </main>
    );
}
