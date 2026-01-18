"use client";

import React from "react";

export default function ValueHighlights() {
    const highlights = [
        {
            title: "Small Batches, Individual Attention",
            description:
                "We maintain a non-negotiable limit of 20 students per batch. This ensures every student receives the dedicated attention required for elite competitive preparation.",
        },
        {
            title: "Learning Support Beyond Classroom Hours",
            description:
                "Learning does not conclude with the final bell. Our faculty remains accessible post-class to ensure concepts are mastered, not just taught.",
        },
        {
            title: "Weekly Mandatory Doubt-Clearing Sessions",
            description:
                "Doubt resolution is not optional. We enforce mandatory weekly sessions to dismantle conceptual bottlenecks before they compound.",
        },
        {
            title: "Weekly Student Review & Personal Guidance",
            description:
                "Continuous diagnostic screening allows us to identify specific content weaknesses and intervene immediately with personalized correction strategies.",
        },
        {
            title: "Weekly Performance Reports for Parents",
            description:
                "We operate with radical transparency. Detailed performance audits and attendance logs are shared directly with parents weekly.",
        },
    ];

    return (
        <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
            {/* Subtle Background Radial */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                   bg-[radial-gradient(closest-side,rgba(26,60,94,0.03),transparent)] pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1A3C5E] sm:text-4xl">
                        Why Choose RISE?
                    </h2>
                    <p className="mt-4 text-lg font-medium text-slate-600 max-w-2xl mx-auto">
                        A system built on discipline, structural integrity, and measurable outcomes.
                    </p>
                </div>

                {/* 
            Grid Layout:
            Desktop: 3 top, 2 bottom (centered)
            Mobile/Tablet: Stacked/Grid
        */}
                <div className="flex flex-col gap-8">
                    {/* Row 1: 3 Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.slice(0, 3).map((item, index) => (
                            <PremiumPlacard key={index} {...item} />
                        ))}
                    </div>

                    {/* Row 2: 2 Items (Centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:w-2/3 lg:mx-auto">
                        {highlights.slice(3, 5).map((item, index) => (
                            <PremiumPlacard key={index + 3} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PremiumPlacard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div
            className="group relative h-full w-full rounded-xl bg-white p-8
                 border border-slate-100/80
                 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                 shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                 hover:-translate-y-2
                 hover:shadow-[0_20px_40px_rgba(26,60,94,0.08)]
                 hover:border-slate-200"
        >
            {/* Decorative Top Accent (Subtle) */}
            <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1A3C5E]/10 to-transparent 
                   opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="flex flex-col h-full">
                {/* Title */}
                <h3
                    className="text-xl font-bold tracking-tight text-[#1A3C5E] mb-4 
                       transition-colors duration-300 group-hover:text-[#0F2942]"
                >
                    {title}
                </h3>

                {/* Description */}
                <p className="text-base font-medium text-slate-600 leading-relaxed
                      transition-colors duration-300 group-hover:text-[#1A3C5E]"
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
