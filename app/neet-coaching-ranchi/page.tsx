import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import { CheckCircle2, HeartPulse, Microscope, Target, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Best NEET Coaching in Ranchi | Top Medical Entrance Institute - RISE",
    description: "Secure your government medical seat with RISE Coaching Institute in Doranda.",
};

export default function NEETCoachingPage() {
    const neetTestimonials = [
        {
            text: "Doranda center is very peaceful. No distractions like other coaching hubs. Just pure study.",
            author: "Parent of NEET Student",
            year: "2024"
        },
        {
            text: "Physics was my nightmare, but the faculty at RISE made it my strongest subject. The visualization techniques really helped.",
            author: "NEET Aspirant (Score 650+)",
            year: "2024"
        },
        {
            text: "The Biology notes are Pure NCERT extracts. Easy to revise quickly.",
            author: "Medical Student, RIMS",
            year: "2023"
        }
    ];

    const faqs = [
        { question: "How does RISE help with NEET Physics difficulty?", answer: "We focus on concept visualization rather than just formulas." },
        { question: "What is the batch size for NEET candidates?", answer: "We maintain a strict ratio of 35-40 students per batch to ensure every student gets personal attention for Biology diagrams and Physics numericals." },
        { question: "Do you cover NCERT for Biology?", answer: "Yes, 100%. Our Biology curriculum is strictly line-by-line NCERT based." },
        { question: "Are there separate sessions for doubt clearance?", answer: "Yes, daily doubt counters are available." }
    ];

    return (
        <main className="bg-white">
            {/* HERO SECTION - image 1 */}
            <section className="relative w-full pt-32 pb-24 lg:pt-44 lg:pb-36 flex flex-col items-center justify-center bg-[#052e16] text-center px-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#10b981]/10 text-[#34d399] text-sm font-bold mb-6 border border-[#34d399]/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] tracking-wide">
                    Doctors in the Making - Session 2025-26
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 tracking-tight leading-tight">
                    Best NEET Coaching in <span className="text-[#10b981]">Ranchi</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                    Realize your dream of becoming a doctor. NCERT-centric rigorous training at RISE Doranda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white rounded-xl font-bold transition-all shadow-lg text-lg">
                        Book Free Demo Class
                    </button>
                </div>
            </section>

            {/* WHY FUTURE DOCTORS CHOOSE RISE */}
            <section className="py-24 lg:py-32 bg-[#FAFAFA] w-full">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] mb-6 tracking-tight">
                            Why Future Doctors Choose <span className="text-[#10B981]">RISE</span>?
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                            Neet preparation requires a different mindset than JEE. It&apos;s about accuracy, speed, and 100% command over NCERT. At RISE, we don&apos;t just teach Science; we train you for the exam.
                        </p>
                    </div>

                    <div className="space-y-10 max-w-3xl mx-auto">
                        {[
                            { title: "NCERT Line-by-Line", desc: "Special focus on Biology & Chemistry NCERT." },
                            { title: "Physics for Medicos", desc: "Simplified Physics specifically designed for Biology students." },
                            { title: "Regular Mock Tests", desc: "Weekly tests exactly on the NTA pattern." },
                            { title: "Personal Attention", desc: "We know every student's weak areas." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-full bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-7 h-7 text-[#10B981]" strokeWidth={2.5} />
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-bold text-xl text-[#1A3C5E] mb-2 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEET MASTERY PROGRAM - image 3 */}
            <section className="py-24 lg:py-32 bg-white w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] tracking-tight mb-4">NEET Mastery Program</h2>
                        <p className="text-lg text-slate-500">Class 11, 12 & Dropper Batches</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-[#ecfdf5] rounded-2xl flex items-center justify-center mb-8">
                                <Microscope className="w-7 h-7 text-[#10B981]" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Biology</h3>
                            <p className="text-slate-500 leading-relaxed">Deep dive into Botany and Zoology. Memorization techniques for complex terms and diagrams.</p>
                        </div>
                        {/* Card 2 - Chemistry (Featured) */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(16,185,129,0.1)] border border-[#10B981] transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-[#059669] rounded-2xl flex items-center justify-center mb-8">
                                <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Chemistry</h3>
                            <p className="text-slate-500 leading-relaxed">Balancing Organic, Inorganic, and Physical Chemistry with reaction mechanisms and formula sheets.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-[#ecfdf5] rounded-2xl flex items-center justify-center mb-8">
                                <Calendar className="w-7 h-7 text-[#10B981]" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Speed Testing</h3>
                            <p className="text-slate-500 leading-relaxed">OMR based offline tests from Day 1 to build exam temperament and speed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT PARENTS SAY - image 4 */}
            <TestimonialsSection testimonials={neetTestimonials} />

            {/* FAQ - image 5 */}
            <FAQSection faqs={faqs} />
        </main>
    );
}
