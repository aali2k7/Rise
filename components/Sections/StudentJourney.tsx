"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import JourneyAnimation from "../Visuals/JourneyAnimation";
import { useScroll, useTransform, motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Orientation & Academic Onboarding",
        description: [
            "Student is introduced to RISE methodology.",
            "Expectations, pace, and goals are clearly set.",
            "Parents understand how guidance will work."
        ],
        highlight: "Setting the Foundation"
    },
    {
        id: "02",
        title: "Structured Study Material & Preparation",
        description: [
            "Carefully curated study resources.",
            "Material aligned with classroom teaching.",
            "Focus on understanding, not memorization."
        ],
        highlight: "Tools for Success"
    },
    {
        id: "03",
        title: "Batch Screening & Right-Fit Allotment",
        description: [
            "Students assessed for level and readiness.",
            "Batches formed to maintain learning balance.",
            "No overcrowding, no mismatch."
        ],
        highlight: "Optimal Learning Environment"
    },
    {
        id: "04",
        title: "Interactive Classes with Personal Attention",
        description: [
            "Small batch teaching with active dialogue.",
            "Active doubt resolution during class.",
            "Mentors track participation and progress."
        ],
        highlight: "Mentorship in Action"
    },
    {
        id: "05",
        title: "Regular Tests, Feedback & Improvement",
        description: [
            "Weekly assessments to track understanding.",
            "Clear performance feedback for parents.",
            "Weak areas addressed early and systematically."
        ],
        highlight: "Feedback Loop"
    },
    {
        id: "06",
        title: "Ace Your Exams. Rise & Fly with Confidence.",
        description: [
            "Exam readiness built steadily over time.",
            "Confidence backed by solid preparation.",
            "Students move forward with clarity."
        ],
        highlight: "The Outcome"
    }
];

export default function StudentJourney() {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 60%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const buttonGlow = useTransform(scrollYProgress, [0.85, 1], [
        "0px 0px 0px 0px rgba(244,121,32,0)",
        "0px 0px 40px 12px rgba(244,121,32,0.6)"
    ]);
    const buttonScale = useTransform(scrollYProgress, [0.85, 1], [1, 1.05]);

    return (
        <section ref={containerRef} className="relative w-full py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FDFCFB 0%, #FAF9F6 50%, #FDFCFB 100%)' }}>
            {/* Decorative warm glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#C9A96E]/[0.025] rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <header className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-[#1A2E44] tracking-tight sm:text-4xl mb-6">
                        The RISE Student Journey
                    </h2>
                    <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                        From orientation to outcomes — a structured path, guided at every step.
                    </p>
                </header>

                {/* Unified Timeline & CTA */}
                <div className="relative w-full mt-10 flex flex-col">
                    {/* Animated Vertical Line Container - Now joins the button */}
                    <div
                        className="absolute left-6 lg:left-1/2 top-0 bottom-[5rem] overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[#D4B896]/50 to-[#f47920]/80 lg:-translate-x-1/2 hidden md:block [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%)] z-0"
                    >
                        <motion.div
                            style={{ height: heightTransform, opacity: opacityTransform }}
                            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#f47920] via-orange-400 to-transparent rounded-full shadow-[0_0_10px_2px_rgba(244,121,32,0.6)]"
                        />
                    </div>

                    <div className="flex flex-col gap-24 lg:gap-32 w-full relative z-10">
                        {steps.map((step, index) => (
                            <JourneyStep key={step.id} step={step} index={index} />
                        ))}
                    </div>

                    {/* CTA Button joined to the line */}
                    <div className="mt-16 pt-8 pb-8 text-center relative z-20 flex justify-center">
                        <motion.button
                            style={{
                                boxShadow: buttonGlow,
                                scale: buttonScale
                            }}
                            onClick={() => router.push('/enquire')}
                            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-[#f47920] rounded-full hover:bg-[#e06510] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 relative transition-colors duration-200"
                        >
                            Start Your Journey Today
                        </motion.button>
                    </div>
                </div>

            </div>
        </section>
    );
}

function JourneyStep({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger once
                }
            },
            { threshold: 0.2, rootMargin: "0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
        >

            {/* Step Number Badge */}
            <div className="absolute left-6 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 shadow-sm hidden md:flex">
                <span className="text-sm font-bold text-[#1A3C5E]">{step.id}</span>
            </div>

            {/* Content Side */}
            <div className={`flex-1 w-full lg:w-1/2 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-xs font-semibold text-slate-500 mb-4 tracking-wide uppercase">
                    {step.highlight}
                </span>
                <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">
                    {step.title}
                </h3>
                <div className={`space-y-2 ${isEven ? "lg:ml-auto" : "lg:mr-auto"}`}>
                    {step.description.map((line, i) => (
                        <p key={i} className="text-slate-600 text-lg leading-relaxed">
                            {line}
                        </p>
                    ))}
                </div>
            </div>

            {/* Animation Side - Educational Character Storytelling */}
            <div className="flex-1 hidden lg:flex items-center justify-center">
                {/* Step 01: Girl entering RISE - default breathing */}
                {index === 0 && (
                    <JourneyAnimation
                        stepId="01"
                        illustration="/animations/step-01-girl.png"
                        side="right"
                    />
                )}
                {/* Step 02: Boy with books - default breathing */}
                {index === 1 && (
                    <JourneyAnimation
                        stepId="02"
                        illustration="/animations/step-02-boy-books.png"
                        side="left"
                    />
                )}
                {/* Step 03: Batch screening - default breathing */}
                {index === 2 && (
                    <JourneyAnimation
                        stepId="03"
                        illustration="/animations/step-03-batch.png"
                        side="right"
                    />
                )}
                {/* Step 04: Teacher interaction - nod micro-motion */}
                {index === 3 && (
                    <JourneyAnimation
                        stepId="04"
                        illustration="/animations/step-04-mentorship.png"
                        side="left"
                        variant="interaction"
                    />
                )}
                {/* Step 05: Parent meeting - clipboard tilt */}
                {index === 4 && (
                    <JourneyAnimation
                        stepId="05"
                        illustration="/animations/step-05-parents.png"
                        side="right"
                        variant="document"
                    />
                )}
                {/* Step 06: Achievement - certificate presence */}
                {index === 5 && (
                    <JourneyAnimation
                        stepId="06"
                        illustration="/animations/step-06-achievement.png"
                        side="left"
                        variant="document"
                    />
                )}
            </div>

            {/* Mobile-only connector (visual aid for mobile vertical rhythm) */}
            <div className="md:hidden flex items-center gap-4 mb-2">
                <span className="text-4xl font-bold text-slate-200 select-none">
                    {step.id}
                </span>
                <div className="h-px flex-1 bg-slate-100" />
            </div>

        </div>
    );
}
