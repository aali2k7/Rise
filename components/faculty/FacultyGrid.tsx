"use client";

import FacultyCard, { FacultyMember } from "./FacultyCard";

const facultyData: FacultyMember[] = [
    {
        id: 1,
        name: "Abhishek Ghosh",
        role: "Physics",
        department: "engineering",
        tagline: "Empowering minds and engineering futures.",
        image: "/faculty/Abhishek%20Ghosh/IMG_20260123_083054863_HDR.jpg.jpeg"
    },
    {
        id: 2,
        name: "Priyam Mam",
        role: "Chemistry",
        department: "medical",
        tagline: "Unraveling the universe, one reaction at a time.",
        image: "/faculty/priyam.jpg"
    },
    {
        id: 3,
        name: "Manish Verma",
        role: "Mathematics",
        department: "foundation",
        tagline: "Simplifying complexities for young minds.",
        image: "/faculty/manish.jpg"
    }
];

export default function FacultyGrid() {
    return (
        <div className="w-full relative py-12 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute top-0 right-[10%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-[10%] w-[20%] h-[40%] bg-orange-100/40 rounded-full blur-[80px] pointer-events-none" />

            {/* Premium Grid layout for the cards - Centered to look great with 3 cards */}
            <div className="flex flex-wrap items-center justify-center gap-8 py-8 px-8 sm:px-12 relative z-10 w-full max-w-6xl mx-auto">
                {facultyData.map((member, index) => {
                    // Staggered reveal based on grid position
                    const cascadeDelay = (index % 4) * 100;

                    return (
                        <div key={member.id} className="w-[300px] shrink-0">
                            <FacultyCard
                                {...member}
                                delay={cascadeDelay}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
