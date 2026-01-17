"use client";

import { useEffect, useRef } from "react";
import GeminiCursor from "@/components/Visuals/GeminiCursor";
import Image from "next/image";

// Types
interface Goal {
  id: string;
  label: string;
  active?: boolean;
}

interface FacultyMember {
  id: number;
  name: string;
  role: string;
  qualification: string;
  image: string; // In real app, this would be a URL
}

const goals: Goal[] = [
  { id: 'all', label: 'All Departments', active: true },
  { id: 'medical', label: 'Medical (NEET)' },
  { id: 'engineering', label: 'Engineering (JEE)' },
  { id: 'foundation', label: 'Foundation' },
];

const faculty: FacultyMember[] = [
  { id: 1, name: "Dr. A. Rahman", role: "Physics HOD", qualification: "PhD Physics • 12 Yrs Exp", image: "" },
  { id: 2, name: "Prof. S. Mehta", role: "Mathematics", qualification: "M.Sc. Maths • 15 Yrs Exp", image: "" },
  { id: 3, name: "Dr. K. Sharma", role: "Chemistry", qualification: "PhD Chemistry • 10 Yrs Exp", image: "" },
  { id: 4, name: "Mrs. P. Verma", role: "Biology", qualification: "M.Ed. Biology • 14 Yrs Exp", image: "" },
  { id: 5, name: "Er. R. Singh", role: "Physics", qualification: "B.Tech IIT • 8 Yrs Exp", image: "" },
  { id: 6, name: "Dr. L. Das", role: "Zoology", qualification: "PhD Zoology • 11 Yrs Exp", image: "" },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Custom Cursor explicitly for this page as requested */}
      <GeminiCursor />

      {/* Background Ambient Effects if needed (optional based on prompt "Dark, Sober") */}

      <main className="relative z-10 pt-24 pb-20 px-6 sm:px-8 lg:px-12">

        {/* Section A: Condensed Filter Bar */}
        <div className="mx-auto max-w-[900px] mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            {goals.map((goal) => (
              <button
                key={goal.id}
                className={`
                                    relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                    border border-white/10 backdrop-blur-md
                                    hover:-translate-y-[5px] hover:shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)]
                                    ${goal.active
                    ? "bg-white/10 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }
                                `}
              >
                {goal.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section B: 3D Glass Faculty Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {faculty.map((member) => (
              <div
                key={member.id}
                className="group relative w-full aspect-[3/4] rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                           hover:-translate-y-3 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]
                                           shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] perspective-1000"
              >
                {/* Background Image (Placeholder color for now) */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-700">
                  {/* <Image ... /> would go here. Using a gradient placeholder. */}
                  <div className="w-full h-full bg-gradient-to-b from-slate-600 to-slate-800 group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Frosted Glass Info Pane - Bottom 35% */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] rounded-b-2xl border-t border-white/15
                                                bg-slate-900/60 backdrop-blur-xl p-6
                                                group-hover:border-white/40 transition-colors duration-500">
                  <div className="flex flex-col h-full justify-center">
                    <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm text-slate-300 mt-1">
                      {member.role}
                    </p>
                    <p className="font-sans text-xs text-slate-400 mt-1 opacity-80">
                      {member.qualification}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
