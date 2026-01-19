"use client";

import { useState, useEffect } from "react";
import FacultyCard, { FacultyMember } from "./FacultyCard";

const facultyData: FacultyMember[] = [
    {
        id: 1,
        name: "Dr. A. Rahman",
        role: "Physics HOD",
        department: "medical",
        tagline: "Unraveling the universe, one equation at a time."
    },
    {
        id: 2,
        name: "Prof. S. Mehta",
        role: "Mathematics",
        department: "engineering",
        tagline: "Logic is the beginning of wisdom, not the end."
    },
    {
        id: 3,
        name: "Dr. K. Sharma",
        role: "Chemistry",
        department: "medical",
        tagline: "Reactions that transform curiosity into knowledge."
    },
    {
        id: 4,
        name: "Mrs. P. Verma",
        role: "Biology",
        department: "medical",
        tagline: "Exploring the intricate web of life."
    },
    {
        id: 5,
        name: "Er. R. Singh",
        role: "Physics",
        department: "engineering",
        tagline: "Building foundations for future innovators."
    },
    {
        id: 6,
        name: "Dr. L. Das",
        role: "Zoology",
        department: "foundation",
        tagline: "Discovering the animal kingdom's secrets."
    },
    {
        id: 7,
        name: "Mr. V. Kapoor",
        role: "Mathematics",
        department: "foundation",
        tagline: "Simplifying complexities for young minds."
    },
    {
        id: 8,
        name: "Ms. T. Iyer",
        role: "Chemistry",
        department: "foundation",
        tagline: "Catalyzing a passion for science."
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
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [columns, setColumns] = useState(4); // Default to xl

    // Update columns on resize
    const updateColumns = () => {
        if (typeof window === 'undefined') return;
        const width = window.innerWidth;
        if (width >= 1280) setColumns(4); // xl
        else if (width >= 1024) setColumns(3); // lg
        else if (width >= 640) setColumns(2); // sm
        else setColumns(1); // mobile
    };

    useEffect(() => {
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const filteredFaculty = activeTab === 'all'
        ? facultyData
        : facultyData.filter(m => m.department === activeTab);

    // Neighbor logic
    const getNeighborStatus = (index: number) => {
        if (hoveredId === null) return false;

        // Find index of hovered item in the *filtered* list
        const hoveredIndex = filteredFaculty.findIndex(m => m.id === hoveredId);
        if (hoveredIndex === -1) return false;

        // Row/Col math
        const hoveredRow = Math.floor(hoveredIndex / columns);
        const hoveredCol = hoveredIndex % columns;

        const currentRow = Math.floor(index / columns);
        const currentCol = index % columns;

        // Check if adjacent
        const isSameRow = hoveredRow === currentRow;
        const isSameCol = hoveredCol === currentCol;

        // Adjacent in row (left/right)
        const isHorizontalNeighbor = isSameRow && Math.abs(currentCol - hoveredCol) === 1;

        // Adjacent in col (up/down)
        const isVerticalNeighbor = isSameCol && Math.abs(currentRow - hoveredRow) === 1;

        return isHorizontalNeighbor || isVerticalNeighbor;
    };

    return (
        <div className="w-full relative">
            {/* Background Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-radial from-green-900/5 to-transparent opacity-0 pointer-events-none transition-opacity duration-500"
                style={{ opacity: hoveredId ? 0.4 : 0 }} />

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                    px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                    ${activeTab === tab.id
                                ? "bg-orange-600 text-white shadow-md transform scale-105"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                            }
                `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                {filteredFaculty.map((member, index) => (
                    <div
                        key={member.id}
                        onMouseEnter={() => setHoveredId(member.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="h-full" // Ensure height consistency
                    >
                        <FacultyCard
                            {...member}
                            isHovered={hoveredId === member.id}
                            isNeighbor={getNeighborStatus(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredFaculty.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500">No faculty members found for this department.</p>
                </div>
            )}
        </div>
    );
}
