"use client";

export default function StudyResources() {
    return (
        <section id="study-resources" className="w-full bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <header className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight sm:text-4xl mb-6">
                        Study Resources & Support
                    </h2>
                    {/* Accent Divider */}
                    <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />

                    <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Everything your child needs to turn effort into results.
                    </p>
                </header>

                {/* 3-Column Value Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

                    {/* Block 1 */}
                    <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        {/* Accent Dot */}
                        <div className="w-2 h-2 rounded-full bg-orange-500 mb-6" />

                        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
                            Material That Builds Concepts
                        </h3>

                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">
                            Why it matters
                        </p>

                        <p className="text-slate-700 font-medium text-base mb-6 leading-relaxed">
                            We ensure your child understands <span className="italic">why</span> an answer is correct, not just what to write.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Notes designated for clarity, avoiding jargon.
                            </li>
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Questions that test logic, not memory.
                            </li>
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Daily alignment with classroom teaching.
                            </li>
                        </ul>
                    </div>

                    {/* Block 2 */}
                    <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        {/* Accent Dot */}
                        <div className="w-2 h-2 rounded-full bg-orange-500 mb-6" />

                        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
                            Practice Under Guidance
                        </h3>

                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">
                            Why it matters
                        </p>

                        <p className="text-slate-700 font-medium text-base mb-6 leading-relaxed">
                            Your child solves problems while a mentor watches their approach.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Real-time correction of solving methods.
                            </li>
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Doubts cleared instantly during practice.
                            </li>
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Confidence built through consistent drills.
                            </li>
                        </ul>
                    </div>

                    {/* Block 3 */}
                    <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        {/* Accent Dot */}
                        <div className="w-2 h-2 rounded-full bg-orange-500 mb-6" />

                        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
                            Assessments & Testing
                        </h3>

                        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">
                            Why it matters
                        </p>

                        <p className="text-slate-700 font-medium text-base mb-6 leading-relaxed">
                            We track actual understanding so there are no surprises in the final exam.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Scheduled reviews to prevent forgetting.
                            </li>
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Tests mirror actual board patterns.
                            </li>
                            <li className="flex items-start text-slate-600 text-sm leading-relaxed">
                                <span className="mr-2 text-orange-400">•</span>
                                Weak areas identified and fixed early.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
