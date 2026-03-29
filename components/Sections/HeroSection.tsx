"use client";

import { useEffect, useState } from "react";
import ScientificMandala from "../Visuals/ScientificMandala";
import Link from "next/link";

export default function HeroSection() {
  const [visibleText, setVisibleText] = useState("");
  const fullText = "Our Effort. Your Rise";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden bg-white">
      {/* Absolute faint background pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-10 sm:opacity-20 lg:opacity-30 scale-100 pointer-events-none">
        <ScientificMandala />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight text-[#1A3C5E] leading-[1.1] relative">
            <span className="relative z-10 block">
              Best Coaching Institute
              <span className="absolute left-0 -bottom-2 w-[85%] h-1 bg-emerald-400 opacity-80" style={{borderRadius: '4px'}} />
            </span>
            <span className="block mt-2">
              in <span className="text-[#10B981]">Doranda, Ranchi</span> —
            </span>
            <span className="block text-[#F59E0B] mt-2">
              RISE Coaching Institute
            </span>
          </h1>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-10 bg-slate-300"></div>
            <h2 className="text-2xl lg:text-[1.75rem] font-bold text-[#0F172A]">
              {visibleText}
              <span className="animate-pulse text-[#F59E0B]">|</span>
            </h2>
          </div>

          <div className="mt-12 flex flex-col justify-start sm:flex-row gap-4">
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-[#1e40af] rounded-lg shadow-sm hover:bg-[#1e3a8a]"
            >
              Enquire Now
            </Link>
            <Link
              href="#footer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-blue-900 transition-all duration-300 bg-white border-2 border-blue-900 rounded-lg shadow-sm hover:bg-blue-50"
            >
              Talk to a Counselor
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-4 text-slate-500">
            <p className="text-xs font-bold uppercase tracking-widest">
              A unit of Visual Informatics • Est. 1999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
