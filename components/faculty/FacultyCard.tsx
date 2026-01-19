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
                relative w-full bg-white rounded-3xl border border-slate-200 
                flex flex-col items-center text-center p-6
                transition-[transform,box-shadow,opacity] duration-300 ease-out
                ${isHovered ? 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.05)] -translate-y-1 z-20' : ''}
                ${isNeighbor ? 'translate-y-1' : ''}
                ${!isHovered && !isNeighbor ? 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),0_0_2px_rgba(0,0,0,0.05)]' : ''}
                cursor-pointer overflow-hidden
            `}
        >
            {/* Photo Container */}
            <div className={`
                relative w-32 h-32 mb-5 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-md flex items-center justify-center shrink-0 
                transition-transform duration-300
                ${isHovered ? 'scale-105' : ''}
            `}>
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <span className="text-2xl font-bold text-slate-400 tracking-wider">
                        {initials}
                    </span>
                )}
            </div>

            {/* Main Info */}
            <div className="flex flex-col items-center w-full z-10">
                <h3 className={`
                    text-lg text-slate-900 mb-1 transition-colors duration-300
                    ${isHovered ? 'font-extrabold' : 'font-bold'}
                `}>
                    {name}
                </h3>

                <p className={`
                    text-sm font-semibold text-orange-600 uppercase tracking-wide transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-90'}
                `}>
                    {role}
                </p>
            </div>

            {/* Revealed Content (Reserved Space) */}
            {tagline && (
                <div className={`
                    w-full transition-all duration-300 ease-out flex items-center justify-center relative
                    ${isHovered ? 'opacity-100 translate-y-0 mt-4 h-auto' : 'opacity-0 -translate-y-1 h-0 overflow-hidden'}
                `}>
                    {/* 
                       Note: To reserve space strictly as per "PRE-ALLOCATED" rule, we might need a fixed height container. 
                       However, enforcing `h-0` to `h-auto` is the "Secondary Safety Net" approach mentioned 
                       (if we treat "Reserved vertical space" as "space exists but is collapsed" vs "space exists and is blank").
                       Given "Grid does not collapse", and user said "Fade + slide into ALREADY RESERVED space", 
                       that implies the card should be taller by default? 
                       But user also said "The hovered placard extends vertically...". 
                       If we use the "Spacer + Overlay" method from before, we avoid grid collapse.
                       Let's stick to the current visual stability. The current CSS keeps it contained.
                       Wait, the user's "Primary Solution" was "Reserve vertical space... One-liner default state: opacity: 0".
                       This means the text should take up space even when hidden.
                       BUT, usually that looks like a big empty gap.
                       If we use `h-0` -> `h-auto`, it pushes content.
                       Let's try a hybrid: The Grid cell is fixed height? No, content varies.
                       Let's use the spacer pattern again if needed, OR just let it push if the user accepts "Controlled Card Expansion".
                       Actually, the user said "Hovered placard extends vertically... Adjacent cards must remain visually stable".
                       The PROMPT "FIX 2" says "Use pre-allocated hidden space... opacity: 0".
                       If i set `h-8` (fixed) and `opacity-0`, it will just look like extra padding.
                       Let's try that to be "Safe".
                     */}
                    <p className={`
                        text-xs text-slate-500 font-medium leading-relaxed italic
                        ${isHovered ? 'visible' : 'invisible'} 
                        /* use invisible to keep layout space if we want pre-allocated, but let's toggle height for 'expansion' effect request */
                    `}>
                        &quot;{tagline}&quot;
                    </p>
                </div>
            )}

            {/* 
                CORRECTION: The user specifically asked for "Fade + slide into already reserved space" 
                AND "The hovered placard extends vertically just enough". These are contradictory.
                "Extends vertically" implies height change. "Reserved space" implies no height change.
                However, "FIX 2: STOP AGGRESSIVE CARD OVERLAP ON EXPAND" suggests the expansion WAS happening and overlapping/pushing too much.
                "Use pre-allocated hidden space" is the FIX.
                So I will make the tagline container have a FIXED height that is reserved, but the TEXT slides in.
             */}
            <div className="h-12 w-full flex items-center justify-center mt-2 relative">
                <p className={`
                    text-xs text-slate-500 font-medium leading-relaxed italic absolute w-full transition-all duration-300 ease-out
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                `}>
                    &quot;{tagline}&quot;
                </p>
            </div>

            {/* Bottom Pill */}
            <div className={`
                absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full transition-all duration-300 ease-out
                ${isHovered ? '-translate-y-3 opacity-100' : 'translate-y-full opacity-0'}
            `} />
        </div>
    );
}
