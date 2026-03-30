"use client";
import { useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export interface FacultyMember {
    id: number;
    name: string;
    role: string;
    department: "medical" | "engineering" | "foundation";
    tagline?: string;
    imageFolder?: string;
    image?: string;
}

interface FacultyCardProps extends FacultyMember {
    delay: number;
}

export default function FacultyCard({ name, role, department, tagline, imageFolder, image, delay }: FacultyCardProps) {
    // We assume the user will upload 'profile.jpg' into the respective folder down the line, or provide a specific image URL.
    const expectedImagePath = image || `/faculty/${imageFolder}/profile.jpg`;

    // State to track if the custom image exists/loads correctly
    const [imageError, setImageError] = useState(false);

    // Initial fallback logic
    const initials = name
        .replace(/(Dr\.|Prof\.|Mrs\.|Mr\.|Er\.|Ms\.)/g, "") // Strip titles 
        .trim()
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    // Map departments to subtle gradient themes
    const themeMap = {
        medical: "from-emerald-50 to-teal-100/50 text-emerald-700 ring-emerald-200",
        engineering: "from-blue-50 to-indigo-100/50 text-blue-700 ring-blue-200",
        foundation: "from-amber-50 to-orange-100/50 text-amber-700 ring-amber-200"
    };

    const gradientClass = themeMap[department];

    return (
        <div
            className="group relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-300 ease-out"
        >
            {/* The Photo or Fallback Avatar */}
            <div className={`relative w-32 h-32 mb-6 rounded-full p-1 ring-1 overflow-hidden shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:ring-2 bg-gradient-to-br ${gradientClass}`}>
                {/* 
                    If the image hasn't errored out, try rendering it. 
                    Next/Image will trigger onError if the file isn't in the folder yet. 
                */}
                {!imageError && (
                    <Image
                        src={expectedImagePath}
                        alt={name}
                        fill
                        sizes="128px"
                        className="object-cover rounded-full z-10"
                        onError={() => setImageError(true)}
                        unoptimized // Allows local missing files to fail quickly without Next.js optimization errors
                    />
                )}

                {/* The beautiful fallback if image is missing */}
                {imageError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-white/50 backdrop-blur-sm z-0">
                        <span className="text-3xl font-extrabold tracking-widest opacity-80 mix-blend-multiply">
                            {initials}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="w-full relative z-10 flex-col flex flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A3C5E] mb-1 group-hover:text-orange-500 transition-colors">
                    {name}
                </h3>

                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 w-full pb-2">
                    {role}
                </p>

                {/* Animated Dropdown Tagline */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out w-full max-w-[240px] overflow-hidden">
                    <div className="min-h-0">
                        <div className="pt-4 mt-2 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 relative">
                            <BookOpen className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-slate-200 group-hover:text-orange-300 transition-colors duration-300" />
                            <p className="text-slate-500 font-medium italic text-sm leading-relaxed mt-2">
                                &quot;{tagline || "Dedicated to academic excellence and student success."}&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
