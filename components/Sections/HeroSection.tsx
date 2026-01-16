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
      className="relative h-[calc(100vh-80px)] w-full overflow-hidden
                 bg-[radial-gradient(circle_at_70%_50%,rgba(116,180,155,0.08),transparent_60%)]"
    >
      {/* Ambient pulsating orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute right-[15%] top-[35%] h-[520px] w-[520px]
                     rounded-full bg-emerald-300/20 blur-[130px]
                     animate-orb"
        />
      </div>

      {/* Scientific Mandala */}
      <ScientificMandala />

      {/* Content */}
      <div className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 pl-6 lg:pl-16">
          <div>
            {/* Eyebrow */}
            <p className="text-support font-medium tracking-wide text-slate-600">
              Premium coaching, built around mentorship
            </p>

            {/* Main headline */}
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[#1A3C5E] sm:text-5xl">
              Structured guidance for every stage of your child's academic journey —{" "}
              <span className="text-[#74B49B]">
                with long-term mentorship
              </span>{" "}
              at the core.
            </h1>

            {/* Divider for rhythm */}
            <div className="mt-10 mb-4 h-px w-16 bg-slate-300" />

            {/* TYPEWRITER STATEMENT */}
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#1A3C5E]">
              {visibleText.replace("Rise", "")}
              <span className="text-[#74B49B]">
                {visibleText.includes("Rise") ? "Rise" : ""}
              </span>
            </h2>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#footer" className="btn-primary">
                Enquire Now
              </a>
              <a
                href="#footer"
                className="rounded-md border border-[#1A3C5E]/25 px-6 py-3 text-sm font-semibold text-[#1A3C5E]"
              >
                Talk to a Counselor
              </a>
            </div>

            {/* Reassurance */}
            <p className="mt-5 max-w-xl text-support text-slate-500">
              For parents who value consistency, accountability, and calm, expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
