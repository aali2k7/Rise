import type { Metadata } from "next";
import FAQSection from "@/components/Sections/FAQSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import MapSection from "@/components/Sections/MapSection";
import { CheckCircle2, TrendingUp, BarChart3, Calculator, Briefcase } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Commerce Coaching in Ranchi (Class 11 & 12) | Accounts Tuition",
    description: "Top-rated Commerce coaching in Doranda, Ranchi. Expert faculty for Accounts, Economics, and Business Studies. Board exam focused preparation.",
    alternates: {
        canonical: "/commerce-coaching-ranchi",
    },
    openGraph: {
        title: "Best Commerce & Accounts Coaching in Ranchi - RISE Institute",
        description: "Score 95%+ in Boards with expert Commerce tuition in Doranda.",
    },
};

export default function CommercePage() {
    const faqs = [
        {
            question: "Which subjects are covered in Commerce coaching?",
            answer: "We cover Accountancy, Economics, Business Studies (BST), and Mathematics/Applied Math for Class 11 & 12."
        },
        {
            question: "Do you prepare students for CA Foundation?",
            answer: "Yes, our integrated curriculum covers the CA Foundation syllabus along with Board exam preparation."
        },
        {
            question: "Is the focus on CBSE or JAC boards?",
            answer: "We have separate batches/strategies for CBSE, ICSE, and JAC board students to ensure syllabus alignment."
        },
        {
            question: "Who are the faculty members?",
            answer: "We have Chartered Accountants (CA) and senior educators with 10+ years of experience teaching Accounts and Economics."
        }
    ];

    const commerceTestimonials = [
        {
            text: "Accounts concepts were very confusing for me until I joined RISE. The teacher explains with real-life business examples.",
            author: "Class 12 Commerce Student",
            year: "2024"
        },
        {
            text: "I scored 96 in Economics. The notes and test series were very helpful.",
            author: "Topper, JVM Shyamali",
            year: "2023"
        },
        {
            text: "Best place for Commerce in Doranda. Very professional and disciplined.",
            author: "Parent",
            year: "2024"
        }
    ];

    return (
        <main className="bg-[#FDFCFB]">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-300 text-sm font-semibold mb-6 border border-yellow-500/30">
                        Accounts & Economics Experts
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Best Commerce Coaching in <span className="text-yellow-500">Ranchi</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        Master Accounts and Economics with CAs and Experts.
                        Your pathway to SRCC and Top B-Schools starts at RISE Doranda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#enquire" className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-500/25">
                            Book Free Demo Class
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose RISE for Commerce */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] bg-yellow-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <span className="text-lg">Accounts Classroom</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <Briefcase className="w-10 h-10 text-purple-600" />
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">CA Prep</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Foundation Integrated</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Why Commerce Students Trust <span className="text-yellow-600">RISE</span>?
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Commerce is not just about balancing balance sheets; it&apos;s about understanding the economy.
                            Our practical approach helps students visualize concepts, making them ready for professional courses like CA, CS, and CMA.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "CA/MBA Faculty", desc: "Learn from professionals who have cleared the exams you aim for." },
                                { title: "Practical Learning", desc: "Case studies, balance sheet analysis, and real-world economics." },
                                { title: "Answer Writing", desc: "Special focus on how to write answers to score 100/100 in Boards." },
                                { title: "CUET Prep", desc: "Integrated preparation for University Entrance Exams." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-yellow-600" />
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
                        <h2 className="text-3xl font-bold text-slate-900">Expertise Areas</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-yellow-300 transition-all group">
                            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                                <Calculator className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Accountancy</h3>
                            <p className="text-slate-600 text-sm">From Journal Entries to Cash Flow Statements. Logic-based teaching, not rote learning.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-yellow-300 transition-all group">
                            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                                <TrendingUp className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Economics</h3>
                            <p className="text-slate-600 text-sm">Micro & Macro Economics explained with current affairs and graphical analysis.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-yellow-300 transition-all group">
                            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                                <BarChart3 className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Business Studies</h3>
                            <p className="text-slate-600 text-sm">Understanding management principles through case studies of top companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection testimonials={commerceTestimonials} />
            <FAQSection faqs={faqs} />

            {/* CTA */}
            <section id="enquire" className="py-20 bg-yellow-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Build a Career in Finance & Business</h2>
                    <p className="text-yellow-100 text-lg mb-10">
                        Start your journey to becoming a CA/CS or Business Leader.
                    </p>
                    <button className="px-8 py-4 bg-white text-yellow-900 font-bold rounded-xl shadow-xl hover:bg-yellow-50 transition-all">
                        Call +91 82525 17726
                    </button>
                </div>
            </section>

            <MapSection />
        </main>
    );
}
