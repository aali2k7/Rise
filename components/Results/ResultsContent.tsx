"use client";

import { useState } from "react";

/**
 * Premium Results & Testimonials Page Content
 * Design: Statistics cards, elegant testimonials, professional presentation
 */
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
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
            } else {
                setFormStatus('error');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            setFormStatus('error');
            alert("Submission failed. Please check your connection.");
        }
    };

    const stats = [
        { label: "Students Mentored", value: "500+" },
        { label: "JEE Qualification Rate", value: "85%" },
        { label: "NEET Qualification Rate", value: "78%" },
        { label: "Exams Analyzed", value: "1000+" },
        { label: "Years of Proven Results", value: "5+" },
    ];

    const testimonials = [
        {
            name: "Aarav Sharma",
            course: "JEE Preparation",
            result: "JEE Advanced Rank: 1247",
            quote:
                "RISE's disciplined approach and focus on concept clarity helped me understand subjects deeply. The regular assessments kept me on track throughout my preparation.",
        },
        {
            name: "Priya Patel",
            course: "NEET Preparation",
            result: "NEET Score: 685",
            quote:
                "The mentorship and personalized guidance at RISE made a huge difference. The faculty's commitment to each student's success is truly remarkable.",
        },
        {
            name: "Rohan Mehta",
            course: "Class 12 + JEE",
            result: "JEE Main Rank: 2341",
            quote:
                "The integrated approach for board and competitive exams was perfect. I could prepare for both without feeling overwhelmed.",
        },
        {
            name: "Ananya Reddy",
            course: "NEET Preparation",
            result: "NEET Score: 672",
            quote:
                "Consistency and discipline were the keys. RISE helped me build study habits that I'll carry forward in my medical career.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 
        Goal: Make this section feel credible, premium, and confidence-driven. 
        Primary Audience: Parents & Students.
      */}

            {/* Page Header */}
            <section className="bg-white py-20 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-semibold text-[#1A3C5E] mb-6 tracking-tight">
                        Results & Testimonials
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        We focus on building understanding, discipline, and method — because lasting results are never accidental.
                    </p>
                    {/* PART 2: EDITORIAL PARTITION LINE */}
                    <div className="h-px w-24 bg-slate-200 mx-auto mt-8" />
                </div>
            </section>

            {/* PART 5: SUBTLE GREEN GRADIENT (EFFORTLESS DEPTH) */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F0FDF4]/30 via-white to-white pointer-events-none" />

                {/* PART 1 REPLACEMENT: "WHAT WE STAND FOR" (MANIFESTO PILLARS) */}
                <section className="py-24 relative z-10 bg-[#F8FCF8] border-b border-[#E2E8F0]/60">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mb-4 tracking-tight">
                                What We Stand For
                            </h2>
                            <p className="text-lg text-slate-600 font-medium">
                                Not promises. Not pressure. Just honest preparation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start text-left md:text-center">
                            {/* Pillar 1 */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-[#1A3C5E]">
                                    We Stand With the Student
                                </h3>
                                <p className="text-base leading-relaxed text-slate-700">
                                    From the first concept to the final exam, we stay involved.
                                    Not just as teachers — but as guides who understand pressure, doubt, and growth.
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-[#1A3C5E]">
                                    Methods Before Marks
                                </h3>
                                <p className="text-base leading-relaxed text-slate-700">
                                    We don’t chase results.
                                    We teach systems, discipline, and clarity — because results are a consequence, not a target.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-[#1A3C5E]">
                                    Consistency Over Hype
                                </h3>
                                <p className="text-base leading-relaxed text-slate-700">
                                    No shortcuts. No inflated claims.
                                    Just steady improvement, regular feedback, and honest evaluation — year after year.
                                </p>
                            </div>
                        </div>

                        {/* Single Line Anchor */}
                        <div className="mt-20 md:mt-24 text-center">
                            <p className="text-lg md:text-xl font-medium text-[#1A3C5E]/90">
                                Results matter. <br className="md:hidden" />
                                But what we build in a student matters more.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PART 2: PHILOSOPHY STATEMENT (PARENT ANCHOR) */}
                <section className="py-24 relative z-10">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1A3C5E] font-medium leading-relaxed">
                            &ldquo;At RISE, we don’t chase results.
                            <br className="hidden md:block" />
                            We build methods, discipline, and clarity — <span className="text-[#059669]">results follow naturally.</span>&rdquo;
                        </h2>
                    </div>
                </section>

                {/* PART 3: EXISTING TESTIMONIALS (STRUCTURAL REFINEMENT ONLY) */}
                <section className="py-20 bg-white relative z-10">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-semibold text-[#1A3C5E] mb-6">Student Success Stories</h2>
                            <div className="h-px w-16 bg-[#059669]/30 mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 flex flex-col h-full hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                                >
                                    <blockquote className="text-lg text-[#1A3C5E]/90 leading-relaxed mb-8 flex-grow italic relative">
                                        <span className="absolute -top-4 -left-2 text-6xl text-[#059669] opacity-10 font-serif">&ldquo;</span>
                                        {testimonial.quote}
                                    </blockquote>

                                    <div className="pt-6 border-t border-slate-200">
                                        <div className="flex flex-wrap justify-between items-end gap-2">
                                            <div>
                                                <div className="font-bold text-[#1A3C5E] text-lg mb-1">{testimonial.name}</div>
                                                <div className="text-sm text-slate-500 font-medium">{testimonial.course}</div>
                                            </div>
                                            <div className="bg-[#1A3C5E]/5 px-3 py-1 rounded-full">
                                                <div className="text-sm font-bold text-[#1A3C5E]">
                                                    {testimonial.result}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PART 4: NEW “SUBMIT A TESTIMONIAL” SECTION */}
                <section className="py-24 bg-gradient-to-br from-[#F0FDF4]/20 to-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* LEFT COLUMN — TRUST & CONTEXT */}
                            <div>
                                <h2 className="text-3xl font-semibold text-[#1A3C5E] mb-6 leading-tight">
                                    Share Your RISE Experience
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Students and parents are invited to share their journey with RISE.
                                    Every testimonial is reviewed and shared with care. Your experience helps future students and parents make informed decisions.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Students & Parents welcome",
                                        "Honest experiences encouraged",
                                        "No marketing edits"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-[#1A3C5E] font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* RIGHT COLUMN — FORM PLACEHOLDER */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
                                {/* 
                   INTEGRATION: Formspree (AJAX Submission) 
                   - No redirect
                   - Inline success message
                 */}
                                {formStatus === 'success' ? (
                                    <div className="py-12 text-center">
                                        <div className="w-16 h-16 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#1A3C5E] mb-2">Thank you!</h3>
                                        <p className="text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
                                            Thank you for taking the time to share your experience with RISE.
                                            Your testimonial has been received and is currently under review.
                                            Once verified, it will be published to help students and parents make informed decisions.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1A3C5E] focus:ring-0 outline-none transition-colors"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>

                                        {/* PART 1: ADD CONTACT NUMBER FIELD */}
                                        <div>
                                            <label htmlFor="contact_number" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Contact Number</label>
                                            <input
                                                type="tel"
                                                id="contact_number"
                                                name="contact_number"
                                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1A3C5E] focus:ring-0 outline-none transition-colors"
                                                placeholder="Your phone number (optional)"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="role" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Role</label>
                                                <select
                                                    id="role"
                                                    name="role"
                                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1A3C5E] focus:ring-0 outline-none transition-colors"
                                                >
                                                    <option value="Student">Student</option>
                                                    <option value="Parent">Parent</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="exam" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Exam Type</label>
                                                <select
                                                    id="exam"
                                                    name="exam_type"
                                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1A3C5E] focus:ring-0 outline-none transition-colors"
                                                >
                                                    <option value="JEE">JEE</option>
                                                    <option value="NEET">NEET</option>
                                                    <option value="Foundation">Foundation</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1A3C5E] focus:ring-0 outline-none transition-colors resize-none"
                                                placeholder="Share your experience..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="w-full py-4 bg-[#1A3C5E] text-white font-semibold rounded-lg hover:bg-[#1A3C5E]/90 transition-colors shadow-lg shadow-[#1A3C5E]/10 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? 'Submitting...' : 'Submit Testimonial'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Existing Outcomes Focus preserved as Footer-ish reinforcement */}
                <section className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl font-semibold text-[#1A3C5E] mb-6">What We Measure</h2>
                            <p className="text-lg text-slate-600">
                                Our success is defined by student outcomes, not just enrollment numbers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Exam Performance",
                                    description:
                                        "Consistent improvement in test scores and final exam results.",
                                },
                                {
                                    title: "Concept Mastery",
                                    description: "Deep understanding of subjects, not just memorization.",
                                },
                                {
                                    title: "Long-term Success",
                                    description:
                                        "Building skills and habits that serve students beyond exams.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6"
                                >
                                    <h3 className="text-lg font-semibold text-[#1A3C5E] mb-3">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
