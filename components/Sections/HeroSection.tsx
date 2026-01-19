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
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
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
              <a href="/enquire" className="btn-primary">
                Enquire Now
              </a>
              <a
                href="#footer"
                className="rounded-md border border-[#1A3C5E]/25 px-6 py-3 text-sm font-semibold text-[#1A3C5E]"
              >
                Talk to a Counselor
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="mt-12 flex items-center gap-3 opacity-80">
              <div className="h-px w-8 bg-slate-400/50"></div>
              <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                A unit of Visual Informatics — guiding students since 1999
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
