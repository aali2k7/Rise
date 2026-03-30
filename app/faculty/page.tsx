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

      {/* Premium Light Structured Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-[#FDFCFB] border-b border-[#E8DFD3]/60">
        
        {/* Background Rotating Mandala */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] pointer-events-none z-0 opacity-20 animate-[spin_60s_linear_infinite]">
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
              <circle cx="100" cy="100" r="98" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="90" strokeWidth="1" />
              <circle cx="100" cy="100" r="88" strokeWidth="0.5" opacity="0.5" />
              {Array.from({ length: 24 }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 15} 100 100)`}>
                  <path d="M100,100 C110,50 160,50 100,10 C40,50 90,50 100,100 Z" fill="url(#gold-mandala-bg)" fillOpacity="0.05" />
                  <path d="M100,100 Q120,55 100,10 Q80,55 100,100 Z" strokeWidth="0.5" />
                  <line x1="100" y1="10" x2="100" y2="100" opacity="0.2" />
                </g>
              ))}
              <circle cx="100" cy="100" r="45" strokeWidth="0.5" strokeDasharray="1 3" />
              <circle cx="100" cy="100" r="30" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10 flex flex-col items-center">
          
          <div className="w-full text-center flex flex-col items-center pt-8 pb-4">
            
            {/* High-visibility Eyebrow Pill */}
            <div className="inline-flex items-center justify-center px-5 py-2 mb-6 rounded-full bg-amber-100/80 border border-amber-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <span className="text-amber-800 font-black tracking-[0.25em] text-xs sm:text-sm uppercase">
                    Excellence in Education
                </span>
            </div>

            {/* Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A3C5E] mb-4 drop-shadow-sm">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBC74] via-[#B48E4B] to-[#DFBC74]">Faculty</span>
            </h1>

            <p className="max-w-xl mx-auto text-[1rem] sm:text-lg text-slate-600 font-medium leading-relaxed">
                Learn from experienced mentors and top educators.
            </p>
          </div>
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
