"use client";

import { useEffect, useState } from "react";
import ScientificMandala from "../Visuals/ScientificMandala";
import Link from "next/link";

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
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FDFCFB 0%, #FAF9F6 30%, #F9F7F4 60%, #FDFCFB 100%)' }}
    >
      {/* Decorative Abstract Shapes — subtle warmth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right — faint Navy */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#1A2E44]/[0.03] rounded-full blur-[100px] mix-blend-multiply" />
        {/* Bottom Left — whisper of warmth */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#C9A96E]/[0.04] rounded-full blur-[80px] mix-blend-multiply" />
        {/* Center — barely there gold */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4B896]/[0.02] rounded-full blur-[120px] opacity-60" />
      </div>

      {/* Scientific Mandala — hidden on phones, faint on tablets, full on desktop */}
      <div className="hidden sm:block absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 lg:left-auto lg:-translate-x-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-0 sm:opacity-[0.06] lg:opacity-80 scale-100 mix-blend-multiply pointer-events-none">
        <ScientificMandala />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-[1.75rem] sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#1E3A8A] leading-[1.25] sm:leading-[1.2] lg:leading-[1.1]">
            <span className="relative inline-block mb-1 sm:mb-0">
              Best Coaching
              <svg className="absolute w-full h-1.5 sm:h-3 -bottom-0.5 sm:-bottom-1 left-0 text-[#10B981] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>{" "}
            Institute in{" "}
            <span className="text-[#10B981] block sm:inline">Doranda, Ranchi</span> —{" "}
            <span className="text-[#F59E0B] block lg:inline-block mt-1 sm:mt-2 lg:mt-0">RISE Coaching Institute</span>
          </h1>

          {/* Typewriter Subheading */}
          <div className="mt-5 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <div className="h-px w-8 sm:w-12 bg-[#1E3A8A]/30"></div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#0F172A]">
              {visibleText}
              <span className="animate-pulse text-[#F59E0B]">|</span>
            </h2>
          </div>

          {/* CTAs */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5">
            {/* Primary CTA */}
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-[1rem] sm:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#1E3A8A] to-blue-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1"
            >
              Enquire Now
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#footer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-[1rem] sm:text-lg font-bold text-blue-900 transition-all duration-300 bg-white border-2 border-blue-900 rounded-xl shadow-sm hover:bg-blue-50 hover:border-blue-700 hover:-translate-y-1"
            >
              Talk to a Counselor
            </Link>
          </div>

          {/* Trust Indicator */}
          <div className="mt-10 sm:mt-16 flex items-center gap-4 text-[#0F172A]/60">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest">
              A unit of Visual Informatics • Est. 1999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
