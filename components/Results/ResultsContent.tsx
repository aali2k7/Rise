"use client";

import { useState } from "react";
import { ContainerScroll } from "@/components/UI/container-scroll-animation";
import { Quote } from "lucide-react";

export default function ResultsContent() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/mdaagdoo", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) setFormStatus('success');
            else {
                setFormStatus('error');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus('error');
            alert("Submission failed. If you have an Adblocker (like uBlock or Brave Shields), it might be blocking Formspree. Please disable it and try again, or check your console for details.");
        }
    };

    const testimonials = [
        {
            name: "Aarav Sharma",
            course: "JEE Preparation",
            result: "JEE Advanced Rank: 1247",
            quote: "RISE's disciplined approach and focus on concept clarity helped me understand subjects deeply.",
        },
        {
            name: "Priya Patel",
            course: "NEET Preparation",
            result: "NEET Score: 685",
            quote: "The mentorship and personalized guidance made a huge difference. The faculty's commitment is amazing.",
        },
        {
            name: "Rohan Mehta",
            course: "Class 12 + JEE",
            result: "JEE Main Rank: 2341",
            quote: "The integrated approach for board and competitive exams was perfect. Highly recommended.",
        },
        {
            name: "Ananya Reddy",
            course: "NEET Preparation",
            result: "NEET Score: 672",
            quote: "Consistency and discipline were the keys. RISE helped me build study habits that I'll carry forward.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCFB] overflow-hidden">

            {/* Minimal Hero */}
            <section className="bg-[#FAF9F7] py-24 border-b border-[#E8DFD3]/20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFB] to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-semibold text-[#1A3C5E] mb-6 tracking-tight">
                        Results & <span className="text-[#F59E0B]">Testimonials</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        We don&apos;t chase numbers. We focus on building understanding and discipline — lasting results follow naturally.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid (Redesigned for premium look) */}
            <section className="py-24 bg-[#FDFCFB]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="group relative bg-[#FAF9F7] p-8 md:p-10 rounded-3xl border border-[#E8DFD3]/30 hover:border-[#1A3C5E]/20 transition-all duration-300">
                                <Quote className="w-10 h-10 text-[#059669]/20 absolute top-8 right-8 group-hover:scale-110 transition-transform duration-300" />
                                <blockquote className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>
                                <div className="flex items-end justify-between border-t border-[#E8DFD3]/50 pt-6">
                                    <div>
                                        <div className="font-bold text-[#1A3C5E] text-lg">{testimonial.name}</div>
                                        <div className="text-sm font-medium text-slate-500">{testimonial.course}</div>
                                    </div>
                                    <div className="bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                                        {testimonial.result}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cinematic Form Scroll Animation */}
            <section className="bg-[#FAF9F7] border-t border-[#E8DFD3]/20">
                <ContainerScroll
                    titleComponent={
                        <div className="mb-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C5E]">
                                Share Your <br />
                                <span className="text-3xl md:text-5xl font-bold mt-2 text-[#F59E0B] leading-none">
                                    RISE Experience
                                </span>
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 font-medium">
                                Let your journey inspire the next generation of achievers.
                            </p>
                        </div>
                    }
                >
                    <div className="max-w-3xl mx-auto py-4 md:py-8 h-full flex flex-col justify-center">
                        {formStatus === 'success' ? (
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-[#1A3C5E] mb-4">Thank You!</h3>
                                <p className="text-lg text-slate-600 font-medium">
                                    Your testimonial has been securely submitted and is under review.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Student Name</label>
                                        <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all" required />
                                    </div>
                                    <div>
                                        <label htmlFor="contact_number" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Contact Number</label>
                                        <input type="tel" id="contact_number" name="contact_number" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="role" className="block text-sm font-semibold text-[#1A3C5E] mb-2">I am a...</label>
                                        <select id="role" name="role" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all">
                                            <option value="Student">Student</option>
                                            <option value="Parent">Parent</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="exam" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Preparation Track</label>
                                        <select id="exam" name="exam_type" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all">
                                            <option value="JEE">JEE / Engineering</option>
                                            <option value="NEET">NEET / Medical</option>
                                            <option value="Foundation">Foundation (Class 8-10)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Your Testimonial</label>
                                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all resize-none" placeholder="How did RISE help you?" required></textarea>
                                </div>

                                <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 bg-[#1A3C5E] text-white font-bold rounded-xl hover:bg-[#0f243a] hover:shadow-xl transition-all disabled:opacity-50">
                                    {formStatus === 'submitting' ? 'Submitting securely...' : 'Submit Testimonial'}
                                </button>
                            </form>
                        )}
                    </div>
                </ContainerScroll>
            </section>
        </div>
    );
}
