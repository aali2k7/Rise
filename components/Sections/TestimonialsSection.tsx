export default function TestimonialsSection() {
    const testimonials = [
        {
            text: "The structured approach at RISE helped my daughter build confidence in mathematics. The regular progress updates and personalized attention made all the difference.",
            author: "Parent of Grade 10 Student",
            year: "Academic Year 2023-24",
        },
        {
            text: "We appreciate how the faculty takes genuine interest in our son's progress. The mentorship goes beyond academics and focuses on overall development.",
            author: "Parent of Grade 12 Student",
            year: "Academic Year 2023-24",
        },
        {
            text: "The patient teaching methodology helped our child overcome learning challenges. Consistent support and clear communication from the entire team.",
            author: "Parent of Grade 9 Student",
            year: "Academic Year 2023-24",
        }
    ];

    return (
        <section className="w-full py-20 sm:py-24 lg:py-28 bg-slate-50 relative overflow-hidden text-left">
            {/* Background Decoration (Subtle Gradient from Results) */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-[#fdfdfd] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <header className="mb-20 text-center">
                    <h2 className="text-3xl font-semibold text-[#1A3C5E] sm:text-4xl leading-tight">
                        What Parents Say
                    </h2>
                    <div className="mt-6 h-px w-16 bg-[#94A3B8] mx-auto opacity-50" />
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        Experiences from families who have trusted us with their children's academic journey.
                    </p>
                </header>

                {/* Scrollable Container (Mask) */}
                <div className="relative w-full overflow-hidden ticker-container">

                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

                    {/* Animated Track */}
                    <div className="flex w-max animate-marquee-infinite gap-8 hover:[animation-play-state:paused] py-10 pl-6 pr-2">
                        {/* Duplicate the list to ensure seamless infinite loop (Original + Duplicate) */}
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="w-[320px] md:w-[450px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05),0_0_2px_rgba(0,0,0,0.02)] border border-slate-100/50 
                                         relative group transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] select-none"
                            >
                                {/* Quote Icon (Decoration) */}
                                <div className="absolute top-6 left-6 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.12]">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="#1A3C5E">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                </div>

                                <div className="relative z-10 pt-4">
                                    <p className="text-[#1A3C5E] text-lg leading-relaxed font-medium tracking-normal italic opacity-90 mb-8 whitespace-normal">
                                        "{item.text}"
                                    </p>

                                    <div className="pt-6 border-t border-slate-100 flex flex-col gap-1">
                                        <p className="font-bold text-[#1A3C5E] tracking-tight">
                                            {item.author}
                                        </p>
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                                            {item.year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
