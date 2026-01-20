"use client";

import { useEffect, useState } from "react";
import ScientificMandala from "../Visuals/ScientificMandala";

export default function HeroSection() {
  const fullText = "Our Effort. Your Rise";
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-indigo-50/50"
    >
      {/* Decorative Abstract Shapes (Blurred Blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Blob */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#1E3A8A]/5 rounded-full blur-[100px] mix-blend-multiply" />
        {/* Bottom Left Blob */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[80px] mix-blend-multiply" />
        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-[120px] opacity-60" />
      </div>

      {/* Scientific Mandala (Preserved but styled if needed) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-80 scale-90 lg:scale-100">
        <ScientificMandala />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#1E3A8A] leading-[1.1]">
            <span className="relative inline-block">
              Structured
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#10B981] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>{" "}
            guidance for your child&apos;s{" "}
            <span className="text-[#10B981]">Academic Journey</span> — with{" "}
            <span className="text-[#F59E0B]">Mentorship</span> at the core.
          </h1>

          {/* Typewriter Subheading */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[#1E3A8A]/30"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A]">
              {visibleText}
              <span className="animate-pulse text-[#F59E0B]">|</span>
            </h2>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            {/* Primary CTA */}
            <a
              href="/enquire"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#1E3A8A] to-blue-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1"
            >
              Enquire Now
            </a>

            {/* Secondary CTA */}
            <a
              href="#footer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#1E3A8A] transition-all duration-300 bg-transparent border-2 border-[#1E3A8A]/10 rounded-xl hover:bg-[#F59E0B]/10 hover:border-[#F59E0B]/20 hover:text-[#F59E0B]"
            >
              Talk to a Counselor
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 flex items-center gap-4 text-[#0F172A]/60">
            <p className="text-sm font-semibold uppercase tracking-widest">
              A unit of Visual Informatics • Est. 1999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
