"use client";

export default function StudyResources() {
    return (
        <section id="study-resources" className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Header */}
                <header className="text-center mb-24">
                    <div className="inline-block relative">
                        <h2 className="text-3xl font-bold text-[#1A3C5E] tracking-tight sm:text-4xl">
                            Study Resources & Support
                        </h2>
                        <div className="mt-6 h-px w-24 bg-[#1A3C5E]/20 mx-auto" />
                    </div>
                    <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Everything your child needs to turn effort into results.
                    </p>
                </header>

                {/* 3-Column Value Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Block 1 */}
                    <div className="flex flex-col items-start relative">
                        <span className="absolute -top-12 left-0 text-6xl font-bold text-slate-100 select-none -z-10">01</span>

                        <h3 className="text-xl font-bold text-[#1A3C5E] mb-4 pr-4 leading-tight">
                            Material That Builds Concepts, Not Rote Learning
                        </h3>

                        <p className="text-[#f47920] font-medium text-sm mb-6 uppercase tracking-wider">
                            Why it matters
                        </p>

                        <p className="text-slate-700 font-medium text-lg mb-6 leading-relaxed border-l-2 border-[#f47920] pl-4">
                            We ensure your child understands <span className="italic">why</span> an answer is correct, not just what to write.
                        </p>

                        <ul className="space-y-3 w-full">
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Notes designated for clarity, avoiding jargon.
                            </li>
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Questions that test logic, not memory.
                            </li>
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Daily alignment with classroom teaching.
                            </li>
                        </ul>
                    </div>

                    {/* Block 2 */}
                    <div className="flex flex-col items-start relative">
                        <span className="absolute -top-12 left-0 text-6xl font-bold text-slate-100 select-none -z-10">02</span>

                        <h3 className="text-xl font-bold text-[#1A3C5E] mb-4 pr-4 leading-tight">
                            Practice Under Guidance, Not Isolation
                        </h3>

                        <p className="text-[#f47920] font-medium text-sm mb-6 uppercase tracking-wider">
                            Why it matters
                        </p>

                        <p className="text-slate-700 font-medium text-lg mb-6 leading-relaxed border-l-2 border-[#f47920] pl-4">
                            Your child solves problems while a mentor watches their approach.
                        </p>

                        <ul className="space-y-3 w-full">
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Real-time correction of solving methods.
                            </li>
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Doubts cleared instantly during practice.
                            </li>
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Confidence built through consistent drills.
                            </li>
                        </ul>
                    </div>

                    {/* Block 3 */}
                    <div className="flex flex-col items-start relative">
                        <span className="absolute -top-12 left-0 text-6xl font-bold text-slate-100 select-none -z-10">03</span>

                        <h3 className="text-xl font-bold text-[#1A3C5E] mb-4 pr-4 leading-tight">
                            Assessments That Remove Exam Fear
                        </h3>

                        <p className="text-[#f47920] font-medium text-sm mb-6 uppercase tracking-wider">
                            Why it matters
                        </p>

                        <p className="text-slate-700 font-medium text-lg mb-6 leading-relaxed border-l-2 border-[#f47920] pl-4">
                            We track actual understanding so there are no surprises in the final exam.
                        </p>

                        <ul className="space-y-3 w-full">
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Scheduled reviews to prevent forgetting.
                            </li>
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Tests mirror actual board patterns.
                            </li>
                            <li className="text-slate-600 text-base border-t border-slate-100 pt-3">
                                Weak areas identified and fixed early.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
