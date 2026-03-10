import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Faculty | RISE",
  description: "Learn from the masters. Our experienced faculty provides mentorship and guidance for JEE and NEET aspirants.",
  alternates: {
    canonical: "/faculty",
  },
};

import FacultyGrid from "@/components/faculty/FacultyGrid";

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">

      {/* Header Section */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-16 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center relative z-10 flex flex-col items-center">

          <div className="relative flex flex-col items-center justify-center py-16 sm:py-24 w-full">

            {/* Massive Background Rotating Mandala encircling the text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] pointer-events-none z-0 opacity-[0.15] animate-[spin_60s_linear_infinite]">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gold-mandala-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DFBC74" />
                    <stop offset="50%" stopColor="#B48E4B" />
                    <stop offset="100%" stopColor="#F9E596" />
                  </linearGradient>
                </defs>
                <g stroke="url(#gold-mandala-bg)" strokeWidth="0.5" fill="none">
                  {/* Majestic Outer Rings */}
                  <circle cx="100" cy="100" r="98" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="90" strokeWidth="1" />
                  <circle cx="100" cy="100" r="88" strokeWidth="0.5" opacity="0.5" />

                  {/* 24-Petal Intricate Flower Pattern overlapping */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <g key={i} transform={`rotate(${i * 15} 100 100)`}>
                      <path d="M100,100 C110,50 160,50 100,10 C40,50 90,50 100,100 Z" fill="url(#gold-mandala-bg)" fillOpacity="0.05" />
                      <path d="M100,100 Q120,55 100,10 Q80,55 100,100 Z" strokeWidth="0.5" />
                      <line x1="100" y1="10" x2="100" y2="100" opacity="0.2" />
                    </g>
                  ))}

                  {/* Inner Halo rings */}
                  <circle cx="100" cy="100" r="45" strokeWidth="0.5" strokeDasharray="1 3" />
                  <circle cx="100" cy="100" r="30" strokeWidth="1" />
                </g>
              </svg>
            </div>

            {/* Foreground Text */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="text-amber-600 font-extrabold tracking-[0.3em] text-sm sm:text-base uppercase mb-4 block drop-shadow-sm">
                Excellence in Education
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-[#1A3C5E] leading-tight mb-2 drop-shadow-md">
                Mentored by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBC74] via-[#B48E4B] to-[#DFBC74]">Masters</span>
              </h1>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 font-medium leading-relaxed mt-4">
            Learn from the visionaries who have architected some of the finest academic success stories in the nation.
          </p>

        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24 lg:pb-32 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <FacultyGrid />
        </div>
      </section>

    </div>
  );
}
