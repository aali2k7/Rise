"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function MentorshipStatement() {
  return (
    <section id="mentorship" className="w-full relative py-32 lg:py-48 overflow-hidden bg-white">
      {/* 
          ELITE BACKGROUND: 
          Minimalist and surgical. Using high-diffusion gradients to create depth without clutter.
      */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* LEFT: The "Manifesto" Header */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 mb-8">
                <div className="w-1 h-1 rounded-full bg-slate-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">The Rise Philosophy</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[0.95] mb-10">
                Mentorship that <br />
                <span className="text-slate-300 italic font-serif font-light italic">stays.</span>
              </h2>

              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-sm">
                We believe education is a relationship, not a transaction. Our goal is to stay with a student until they reach their peak.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: The Premium Statement Card */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative group"
            >
              {/* Architectural Shadow/Glow Case */}
              <div className="absolute -inset-1 bg-gradient-to-b from-slate-100 to-transparent rounded-[3rem] blur-xl opacity-50 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none" />

              <div className="relative bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] rounded-[2.5rem] p-10 lg:p-16 overflow-hidden">
                {/* Visual Anchor: Giant soft quote mark */}
                <span className="absolute -top-10 -right-4 text-[12rem] font-serif text-slate-50 opacity-40 select-none pointer-events-none italic">
                  &ldquo;
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-0.5 w-12 bg-amber-500/40" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-600">Core Commitment</span>
                  </div>

                  <p className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-snug mb-12">
                    RISE is not just coaching. It is a <span className="underline decoration-amber-200 decoration-4 underline-offset-8">long-term mentorship ecosystem</span> designed to support academic growth and clarity.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-12 lg:col-span-11">
                      <p className="text-lg leading-relaxed text-slate-500 font-medium border-l-2 border-slate-100 pl-8">
                        Our approach is deeply personal. We don&apos;t just track scores; we track progress, confidence, and the discipline required to maintain it. Parents are equal partners in this journey, kept informed through consistent, honest mapping of a student&apos;s trajectory.
                      </p>
                    </div>
                  </div>

                  <div className="mt-16 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-serif italic text-lg shadow-lg">
                      R
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase tracking-widest">The RISE Promise</p>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mt-0.5">Established excellence in Ranchi</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
