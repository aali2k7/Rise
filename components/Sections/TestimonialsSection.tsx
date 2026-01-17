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
        },
        {
            text: "RISE has completely transformed how my son approaches his studies. The discipline they instill is remarkable.",
            author: "Parent of Grade 11 Student",
            year: "Academic Year 2023-24",
        },
        {
            text: "The best decision we made for our daughter's JEE preparation. The faculty is simply world-class.",
            author: "Parent of JEE Aspirant",
            year: "Academic Year 2023-24",
        },
    ];

    // Duplicate for seamless infinite loop logic
    // We append the list to itself to allow continuous scrolling
    // without visible jumps when the animation resets.
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="w-full py-20 sm:py-24 lg:py-28 bg-[#fcfcfd] overflow-hidden relative">
            {/*
             BACKGROUND DECORATION (Subtle institutional feel)
             Very faint grid or gradient could go here, but keeping it clean white/off-white per instructions.
           */}

            <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
                <h2 className="text-3xl font-semibold text-[#1A3C5E] sm:text-4xl leading-tight">
                    What Parents Say
                </h2>
                <div className="mt-6 h-px w-16 bg-[#94A3B8] mx-auto opacity-50" />
                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                    Experiences from families who have trusted us with their children's academic journey.
                </p>
            </div>

            {/* 
            MARQUEE TRACK CONTAINER 
            - Hides overflow
            - Provides gradient masks for smooth entry/exit
          */}
            <div className="relative w-full group">
                {/* Gradient Masks (Left & Right) */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#fcfcfd] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#fcfcfd] to-transparent z-10 pointer-events-none" />

                {/* 
              SCROLLING TRACK
              - Uses our custom CSS animation 'animate-marquee-infinite'
              - Flex container to hold cards side-by-side
              - Gap ensures consistent spacing
            */}
                <div className="animate-marquee-infinite gap-8 pl-8">
                    {allTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="testimonial-glass w-[400px] md:w-[480px] p-8 md:p-10 rounded-2xl flex-shrink-0 select-none"
                        >
                            {/* Quote Icon (Subtle Decoration) */}
                            <div className="mb-6 opacity-20">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="#1A3C5E">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>

                            <p className="text-[#1A3C5E] text-lg md:text-xl leading-relaxed font-medium tracking-wide italic opacity-90">
                                "{item.text}"
                            </p>

                            <div className="mt-8 pt-6 border-t border-[#1A3C5E]/10">
                                <p className="font-bold text-[#1A3C5E] tracking-tight">
                                    {item.author}
                                </p>
                                <p className="text-sm text-slate-500 mt-1 font-medium tracking-wide uppercase">
                                    {item.year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
