"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import JourneyAnimation from "../Visuals/JourneyAnimation";

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
    return (
        <section className="relative w-full py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <header className="text-center mb-24">
                    <h2 className="text-3xl font-bold text-[#1A3C5E] tracking-tight sm:text-4xl mb-6">
                        The RISE Student Journey
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From orientation to outcomes — a structured path, guided at every step.
                    </p>
                </header>

                {/* Vertical Timeline */}
                <div className="relative flex flex-col gap-24 lg:gap-32">
                    {/* Vertical Line */}
                    <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 lg:-translate-x-1/2 hidden md:block" />

                    {steps.map((step, index) => (
                        <JourneyStep key={step.id} step={step} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="section-boundary mt-32 pt-16 pb-8 text-center">
                    <button
                        onClick={() => router.push('/enquire')}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#f47920] rounded-full hover:bg-[#e06510] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Start Your Journey Today
                    </button>
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
