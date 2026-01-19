"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Enquiry Page
 * Intent: Distraction-free, direct enquiry form.
 * Endpoint: https://formspree.io/f/mjggwoqz
 */
export default function Enquire() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/mjggwoqz", {
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

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 relative z-10">

                {/* Success Modal Overlay (Inline) */}
                {formStatus === 'success' ? (
                    <div className="text-center py-10 animate-fade-in-up">
                        <div className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-[#1A3C5E] mb-4">
                            Enquiry Received Successfully
                        </h2>
                        <p className="text-slate-600 mb-2 max-w-sm mx-auto leading-relaxed">
                            Thank you! Your details have been received successfully.
                            <br />
                            Our team will get in touch with you shortly.
                        </p>
                        <p className="text-sm text-slate-400 font-medium mb-8">
                            We typically respond within 24 hours.
                        </p>
                        <button
                            onClick={() => {
                                setFormStatus('idle');
                                // Reset form logic would go here if we had controlled inputs, 
                                // or we can reload/stay. Requirement says "Close (dismisses popup, stays on /enquire)"
                                // Ideally reset form.
                            }}
                            className="px-8 py-3 bg-[#1A3C5E] text-white font-semibold rounded-lg hover:bg-[#1A3C5E]/90 transition-colors shadow-lg shadow-[#1A3C5E]/10"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3C5E] mb-3 tracking-tight">
                                Start Your Journey with RISE
                            </h1>
                            <p className="text-slate-500 font-medium">
                                Structured guidance. Clear communication. Trusted mentorship.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-[#1A3C5E] focus:border-[#1A3C5E] focus:z-10 sm:text-sm"
                                    placeholder="Student or Parent Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-[#1A3C5E] focus:border-[#1A3C5E] focus:z-10 sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    pattern="[0-9]*"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-[#1A3C5E] focus:border-[#1A3C5E] focus:z-10 sm:text-sm"
                                    placeholder="10-digit mobile number"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="student_type" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Student Type</label>
                                    <select
                                        id="student_type"
                                        name="student_type"
                                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-300 text-slate-900 focus:outline-none focus:ring-[#1A3C5E] focus:border-[#1A3C5E] focus:z-10 sm:text-sm bg-white"
                                    >
                                        <option value="Student">Student</option>
                                        <option value="Parent">Parent</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="exam_interest" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Exam Interest</label>
                                    <select
                                        id="exam_interest"
                                        name="exam_interest"
                                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-300 text-slate-900 focus:outline-none focus:ring-[#1A3C5E] focus:border-[#1A3C5E] focus:z-10 sm:text-sm bg-white"
                                    >
                                        <option value="JEE">JEE</option>
                                        <option value="NEET">NEET</option>
                                        <option value="Foundation">Foundation</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-[#1A3C5E] mb-2">Message / Query <span className="text-slate-400 font-normal">(Optional)</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-[#1A3C5E] focus:border-[#1A3C5E] focus:z-10 sm:text-sm resize-none"
                                    placeholder="Any specific questions?"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-[#1A3C5E] hover:bg-[#1A3C5E]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A3C5E] shadow-lg shadow-[#1A3C5E]/20 transition-all disabled:opacity-70"
                                >
                                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-50" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1A3C5E]/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl opacity-50" />
            </div>
        </div>
    );
}
