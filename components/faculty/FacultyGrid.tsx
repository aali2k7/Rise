"use client";

import { useState } from "react";
import FacultyCard, { FacultyMember } from "./FacultyCard";

const facultyData: FacultyMember[] = [
    {
        id: 1,
        name: "Dr. A. Rahman",
        role: "Physics HOD",
        department: "medical",
        tagline: "Unraveling the universe, one equation at a time.",
        imageFolder: "a-rahman" // public/faculty/a-rahman/profile.jpg
    },
    {
        id: 2,
        name: "Prof. S. Mehta",
        role: "Mathematics",
        department: "engineering",
        tagline: "Logic is the beginning of wisdom, not the end.",
        imageFolder: "s-mehta"
    },
    {
        id: 3,
        name: "Dr. K. Sharma",
        role: "Chemistry",
        department: "medical",
        tagline: "Reactions that transform curiosity into knowledge.",
        imageFolder: "k-sharma"
    },
    {
        id: 4,
        name: "Mrs. P. Verma",
        role: "Biology",
        department: "medical",
        tagline: "Exploring the intricate web of life.",
        imageFolder: "p-verma"
    },
    {
        id: 5,
        name: "Er. R. Singh",
        role: "Physics",
        department: "engineering",
        tagline: "Building foundations for future innovators.",
        imageFolder: "r-singh"
    },
    {
        id: 6,
        name: "Dr. L. Das",
        role: "Zoology",
        department: "foundation",
        tagline: "Discovering the animal kingdom's secrets.",
        imageFolder: "l-das"
    },
    {
        id: 7,
        name: "Mr. V. Kapoor",
        role: "Mathematics",
        department: "foundation",
        tagline: "Simplifying complexities for young minds.",
        imageFolder: "v-kapoor"
    },
    {
        id: 8,
        name: "Ms. T. Iyer",
        role: "Chemistry",
        department: "foundation",
        tagline: "Catalyzing a passion for science.",
        imageFolder: "t-iyer"
    },
];

const tabs = [
    { id: 'all', label: 'All Departments' },
    { id: 'medical', label: 'Medical (NEET)' },
    { id: 'engineering', label: 'Engineering (JEE)' },
    { id: 'foundation', label: 'Foundation' },
];

export default function FacultyGrid() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredFaculty = activeTab === 'all'
        ? facultyData
        : facultyData.filter(m => m.department === activeTab);

    return (
        <div className="w-full relative py-12 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute top-0 right-[10%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-[10%] w-[20%] h-[40%] bg-orange-100/40 rounded-full blur-[80px] pointer-events-none" />

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10 px-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            px-8 py-3 rounded-full text-base font-bold transition-all duration-300
                            ${activeTab === tab.id
                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_10px_20px_rgba(234,88,12,0.3)] shadow-orange-500/30 scale-105 border border-orange-400"
                                : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:shadow hover:bg-slate-50 hover:border-slate-300 hover:text-orange-600"
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Premium Grid layout for the cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 sm:px-12 relative z-10">
                {filteredFaculty.map((member, index) => {
                    // Staggered reveal based on grid position
                    const cascadeDelay = (index % 4) * 100;

                    return (
                        <FacultyCard
                            key={member.id}
                            {...member}
                            delay={cascadeDelay}
                        />
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredFaculty.length === 0 && (
                <div className="text-center py-32 px-6">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                        <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A3C5E] mb-2">No Profiles Found</h3>
                    <p className="text-slate-500 text-lg">There are currently no faculty members assigned to this department.</p>
                </div>
            )}
        </div>
    );
}
