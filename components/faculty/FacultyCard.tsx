"use client";

import Image from "next/image";
import { useState } from "react";

export interface FacultyMember {
    id: number;
    name: string;
    role: string;
    department: "medical" | "engineering" | "foundation";
    tagline?: string; // One-liner drop reveal
    image?: string; // Optional URL
}

interface FacultyCardProps extends FacultyMember {
    isHovered?: boolean;
    isNeighbor?: boolean;
}

export default function FacultyCard({ name, role, department, tagline, image, isHovered = false, isNeighbor = false }: FacultyCardProps) {
    // Initials fallback
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    return (
        <div
            className={`
                relative w-full bg-white rounded-2xl border border-slate-100 
                flex flex-col items-center text-center p-6
                transition-all duration-300 ease-out
                ${isHovered
                    ? 'shadow-xl -translate-y-1 z-20 border-b-4 border-b-[#10B981]'
                    : 'shadow-sm border-b-4 border-b-transparent'}
                /* Neighbor logic or other classes can be simplified or removed if strictly "No layout shifts" */
                cursor-pointer overflow-hidden
            `}
        >
            {/* Photo Container */}
            <div className={`
                relative w-28 h-28 mb-5 rounded-full overflow-hidden bg-slate-50 border-2 border-white shadow-inner flex items-center justify-center shrink-0 
                transition-transform duration-300
                ${isHovered ? 'scale-105' : ''}
            `}>
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="112px"
                        className="object-cover"
                    />
                ) : (
                    <span className="text-xl font-bold text-[#1E3A8A]/40 tracking-wider">
                        {initials}
                    </span>
                )}
            </div>

            {/* Main Info */}
            <div className="flex flex-col items-center w-full z-10">
                <h3 className={`
                    text-lg text-[#1E3A8A] mb-1 transition-colors duration-300
                    ${isHovered ? 'font-bold' : 'font-semibold'}
                `}>
                    {name}
                </h3>

                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    {role}
                </p>
            </div>

            {/* Revealed Content (Reserved Space) */}
            <div className="h-10 w-full flex items-center justify-center mt-3 relative">
                <p className={`
                    text-xs text-[#10B981] font-medium leading-relaxed italic absolute w-full transition-all duration-300 ease-out
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}>
                    &quot;{tagline || "Dedicated to excellence."}&quot;
                </p>
            </div>
        </div>
    );
}
