"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CoursesSection() {
    const [activeTab, setActiveTab] = useState("Medical");

    const tabs = [
        { id: "Medical", label: "Medical", color: "text-blue-500", dot: "bg-blue-500", highlight: "bg-blue-50" },
        { id: "Engineering", label: "Engineering", color: "text-orange-500", dot: "bg-orange-500", highlight: "bg-orange-50" },
        { id: "Commerce", label: "Commerce", color: "text-amber-500", dot: "bg-amber-500", highlight: "bg-amber-50" },
        { id: "Arts", label: "Arts", color: "text-slate-500", dot: "bg-slate-500", highlight: "bg-slate-50" }
    ];

    const tabContent: Record<string, any> = {
        "Medical": {
            super: "BOARDS + NEET PREPARATION",
            title: "Class 11–12 (Medical)",
            bullets: [
                "Strict adherence to NCERT with deep conceptual clarity.",
                "Continuous revision cycles to build high retention.",
                "Weekly mock tests to perfect speed and accuracy."
            ],
            benefit: "A disciplined system designed for high retention and rank consistency.",
            duration: "2 Years | Integrated Program",
            href: "/neet-coaching-ranchi"
        },
        "Engineering": {
            super: "BOARDS + JEE PREPARATION",
            title: "Class 11–12 (Engineering)",
            bullets: [
                "Advanced logic building and problem-solving techniques.",
                "Focus on application-based learning for JEE Mains & Advanced.",
                "Strategic error analysis to minimize negative marking."
            ],
            benefit: "Develops the analytical depth required to crack top engineering ranks.",
            duration: "2 Years | Integrated Program",
            href: "/jee-coaching-ranchi"
        },
        "Commerce": {
            super: "BOARDS + PROFESSIONAL PREP",
            title: "Class 11–12 (Commerce)",
            bullets: [
                "Conceptual mastery of Accountancy, Economics, and Business.",
                "Preparation for Board exams and professional entrance tests.",
                "Focus on real-world application and financial literacy."
            ],
            benefit: "Secures top Board scores and lays a solid foundation for professional courses.",
            duration: "2 Years | Integrated Program",
            href: "/commerce-coaching-ranchi"
        },
        "Arts": {
            super: "BOARDS + HUMANITIES PREP",
            title: "Class 11–12 (Arts)",
            bullets: [
                "In-depth understanding of History, Political Science & Sociology.",
                "Develops critical thinking vs. just memorization.",
                "Guidance for future pathways in Law, Policy, and Civil Services."
            ],
            benefit: "Builds a strong foundation for civil services and law entrance exams.",
            duration: "2 Years | Integrated Program",
            href: "/arts-coaching-ranchi"
        }
    };

    const activeContent = tabContent[activeTab];

    return (
        <section className="w-full py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20">
                {/* Part 1 */}
                <div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A3C5E] tracking-tight mb-6">
                        Programs Built Around <span className="text-[#10B981]">Academic<br/>Stages</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mb-12 leading-relaxed">
                        Each stage needs a different kind of guidance. Our programs evolve with your child&apos;s phase — building foundations early, then adding structure, revision, and exam readiness.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-[#1E3A8A] mb-2">Class 5–8</h3>
                            <p className="text-sm font-bold tracking-widest text-[#1E3A8A] uppercase mb-8">School Exam Excellence</p>
                            <ul className="space-y-4">
                                {["Building the habit of daily, disciplined self-study.", "Strengthening core concepts in Maths and Science.", "Improving answer-writing skills for school exams."].map((pt, i) => (
                                    <li key={i} className="flex items-baseline gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span className="text-slate-600 leading-relaxed text-[15px]">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
                            <h3 className="text-3xl font-bold text-[#065F46] mb-2">Class 9–10</h3>
                            <p className="text-sm font-bold tracking-widest text-[#065F46] uppercase mb-8">Board Exam Mastery</p>
                            <ul className="space-y-4">
                                {["Comprehensive coverage of Board syllabus with revision.", "Regular testing to eliminate fear of exams.", "Balancing school curriculum with competitive foundations."].map((pt, i) => (
                                    <li key={i} className="flex items-baseline gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                        <span className="text-slate-600 leading-relaxed text-[15px]">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Part 2: Senior Secondary */}
                <div>
                    <div className="flex bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 bg-white p-8 lg:p-10 border-r border-slate-100">
                            <div className="mb-8">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Stage 3
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A3C5E] mb-2">Senior Secondary</h3>
                            <p className="text-slate-500 text-sm mb-8">Select your path to excellence</p>
                            
                            <div className="space-y-2">
                                {tabs.map(tab => {
                                    const active = activeTab === tab.id;
                                    return (
                                        <button 
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center justify-between px-6 py-4 rounded-xl text-left transition-all ${active ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100' : 'hover:bg-slate-50 text-slate-500 font-medium'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${active ? tab.dot : 'bg-slate-300'}`} />
                                                <span className={`${active ? 'font-bold text-[#1A3C5E]' : ''}`}>{tab.label}</span>
                                            </div>
                                            {active && <div className={`w-1.5 h-1.5 rounded-full ${tab.dot}`} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 p-8 lg:p-12">
                            <p className="text-xs font-bold tracking-widest text-[#3B82F6] uppercase mb-3">
                                {activeContent.super}
                            </p>
                            <h3 className="text-3xl font-bold text-[#1A3C5E] mb-8">{activeContent.title}</h3>
                            
                            <ul className="space-y-5 mb-12">
                                {activeContent.bullets.map((pt: string, i: number) => (
                                    <li key={i} className="text-slate-600 leading-relaxed text-[15px]">
                                        {pt}
                                    </li>
                                ))}
                            </ul>

                            <hr className="border-slate-100 mb-8" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Core Benefit</p>
                                    <p className="text-[#1A3C5E] font-bold text-[15px] leading-relaxed max-w-xs">{activeContent.benefit}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Duration</p>
                                    <p className="text-[#1A3C5E] font-bold text-[15px] leading-relaxed">{activeContent.duration}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-12">
                                <p className="text-xs text-slate-400 italic">Personalized mentorship included.</p>
                                <Link href={activeContent.href || "#"} className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#1e293b] transition-colors">
                                    View Syllabus <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
