import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import { CheckCircle2, Building2, TrendingUp, Briefcase, Landmark, Calculator } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Commerce Coaching in Ranchi | Class 11, 12 & CA Foundation - RISE",
    description: "Premium Commerce coaching for Class 11, 12, CUET and CA Foundation. Expert Accountancy & Economics faculty.",
};

export default function CommerceCoachingPage() {
    const commerceTestimonials = [
        {
            text: "Accountancy felt overwhelming initially, but the systematic teaching methodology here cleared all my concepts.",
            author: "Class 12 Board Topper",
            year: "2024"
        },
        {
            text: "The focus on real-world business scenarios makes Economics so much more interesting. Very happy with RISE.",
            author: "Commerce Student",
            year: "2024"
        },
        {
            text: "My son secured an excellent score in CUET thanks to the integrated preparation approach provided by the faculty.",
            author: "Parent of Commerce Student",
            year: "2023"
        }
    ];

    const faqs = [
        { question: "Do you prepare students for CA Foundation?", answer: "Yes, our Class 11 and 12 curriculum builds the exact analytical foundation required to easily tackle the CA Foundation examinations." },
        { question: "Is CUET preparation included?", answer: "Absolutely. We align Board preparation with CUET-specific objective testing methodologies so you are ready for both." },
        { question: "Are classes strictly theoretical?", answer: "No. We integrate case studies, real-world corporate examples, and financial scenarios to make learning highly practical." },
        { question: "What subjects are covered?", answer: "We cover Accountancy, Applied & Core Mathematics, Economics, and Business Studies in depth." }
    ];

    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative w-full pt-32 pb-24 lg:pt-44 lg:pb-36 flex flex-col items-center justify-center bg-[#1e293b] text-center px-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#f59e0b]/10 text-[#fcd34d] text-sm font-bold mb-6 border border-[#fcd34d]/20 shadow-[0_0_15px_rgba(245,158,11,0.15)] tracking-wide">
                    Leaders in the Making - Session 2025-26
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 tracking-tight leading-tight">
                    Best Commerce Coaching in <span className="text-[#f59e0b]">Ranchi</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                    Build a bulletproof foundation in Finance, Economics, and Business. Superior academic training at RISE.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-xl font-bold transition-all shadow-lg text-lg">
                        Book Free Demo Class
                    </button>
                </div>
            </section>

            {/* WHY CHOOSE RISE */}
            <section className="py-24 lg:py-32 bg-[#FAFAFA] w-full">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] bg-[#E2E8F0] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200 flex items-center justify-center">
                            <span className="text-xl text-slate-400 font-medium">Financial Literacy Lab</span>
                        </div>
                        <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4">
                            <Briefcase className="w-10 h-10 text-amber-500" strokeWidth={2.5} />
                            <div>
                                <p className="text-xl font-bold text-slate-900 leading-tight">CA & MBA Mentors</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Industry Experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] mb-6 tracking-tight">
                            Why Future Leaders Choose <span className="text-[#f59e0b]">RISE</span>?
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            Commerce is not just about balancing sheets; it&apos;s about understanding how the world operates. We bridge the gap between textbook accounting and real-world economics.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: "Conceptual Accountancy", desc: "No blindly remembering ledger rules. We teach the 'why'." },
                                { title: "CUET Integration", desc: "Board exams and university entrance strategies combined." },
                                { title: "Practical Economics", desc: "Relating micro and macro concepts to current market trends." },
                                { title: "Answer Formatting", desc: "Training on how to structure answers for maximum board marks." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-amber-500" strokeWidth={2.5} />
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

            {/* COMMERCE MASTERY PROGRAM */}
            <section className="py-24 lg:py-32 bg-white w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] tracking-tight mb-4">Commerce Mastery Program</h2>
                        <p className="text-lg text-slate-500">Class 11, 12 & Foundation</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                                <TrendingUp className="w-7 h-7 text-amber-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Economics</h3>
                            <p className="text-slate-500 leading-relaxed">Micro and Macro Economics taught through case studies, graphs, and live market data analysis.</p>
                        </div>
                        {/* Card 2 - Accountancy (Featured) */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(245,158,11,0.1)] border border-amber-500 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-8">
                                <Calculator className="w-7 h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Accountancy</h3>
                            <p className="text-slate-500 leading-relaxed">The backbone of commerce. Mastering company accounts, partnership, and cash flow with zero errors.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                                <Building2 className="w-7 h-7 text-amber-500" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">Business Studies</h3>
                            <p className="text-slate-500 leading-relaxed">Understanding management principles, corporate finance, and marketing frameworks for high board scores.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT PARENTS SAY */}
            <TestimonialsSection testimonials={commerceTestimonials} />

            {/* FAQ */}
            <FAQSection faqs={faqs} />
        </main>
    );
}
