"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function DirectorsDesk() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Ambience - Minimalist & Focused */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: The Brand Hallmark */}
          <div className="lg:col-span-12 xl:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square max-w-[200px] sm:max-w-[340px] mx-auto xl:mx-0 flex items-center justify-center group/logo"
            >
              {/* Internal brand glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-amber-50/30 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-1000" />

              <div className="relative w-full h-full">
                <Image
                  src="/brand/RISE Logo.jpeg"
                  alt="RISE Official Logo"
                  fill
                  className="object-contain scale-[0.85] group-hover/logo:scale-95 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            {/* Premium Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Minimalist orbital ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-slate-50 rounded-[3rem] rotate-12 pointer-events-none opacity-60" />
          </div>

          {/* RIGHT: The Executive Message */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <header className="mb-10">

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Patience as a <br />
                  <span className="text-blue-600">fundamental principle.</span>
                </h2>
              </header>

              <div className="space-y-6">
                <blockquote className="relative italic font-serif text-lg sm:text-xl lg:text-2xl text-slate-400 font-light leading-snug pl-4 sm:pl-6 border-l-2 border-slate-100">
                  When I started RISE, the goal was simple: to create a space where students are guided with patience, not pressure.
                </blockquote>

                <div className="space-y-4 sm:space-y-5 text-sm sm:text-[1rem] lg:text-lg text-slate-600 font-medium leading-[1.7] sm:leading-[1.8]">
                  <p>
                    Academic success is paramount, but it should never come at the cost of a student&apos;s
                    core confidence. At RISE, we take personal responsibility for each child&apos;s progress.
                    This isn&apos;t a transaction; it&apos;s a partnership built on honest mentorship and
                    consistent follow-through.
                  </p>
                  <p>
                    My promise is straightforward: we will treat your child with the same care and expectation
                    we would want for our own. No shortcuts—only steady, structured effort that prepares
                    them for more than just an exam.
                  </p>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-serif italic text-slate-900 font-medium tracking-tight">
                      Arbaaz Rahman
                    </p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">
                      Founder & Director, RISE
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 opacity-60">
                    <span className="text-xl font-serif text-slate-300">R</span>
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
