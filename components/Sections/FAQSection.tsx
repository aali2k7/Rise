"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    description?: string;
    faqs: FAQItem[];
}

export default function FAQSection({
    title = "Frequently Asked Questions",
    description = "Get answers to common questions about our coaching programs in Ranchi.",
    faqs,
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-slate-600">{description}</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-lg text-slate-900 pr-8">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
