"use client";
import { useState } from "react";
import { ContainerScroll } from "@/components/UI/container-scroll-animation";
import { Quote, Trophy, Star } from "lucide-react";
const toppers = [
  { rank: "1st", name: "Anha", score: "90%", cls: "Class 10 CBSE", year: "2025-26", color: "from-yellow-400 to-amber-500" },
  { rank: "2nd", name: "Alisha Praveen", score: "85%", cls: "Class 10 CBSE", year: "2025-26", color: "from-slate-300 to-slate-400" },
  { rank: "3rd", name: "Md. Ayan", score: "81%", cls: "Class 10 CBSE", year: "2025-26", color: "from-amber-600 to-amber-700" },
];
const testimonials = [
  { name: "Anha", course: "Class 10 - CBSE Board 2025-26", result: "90% - Batch Topper", quote: "The homework culture at RISE is what made the difference. Every single day there was an assignment, sir personally checked it the next class. By the time the boards came, I had already revised everything three times without realising it." },
  { name: "Alisha Praveen", course: "Class 10 - CBSE Board 2025-26", result: "85% - 2nd Rank", quote: "I used to struggle with Maths and Science. At RISE the concept is taught first, then the formula comes. Sir never let us mug up anything. The daily practice sheets were tough but that is exactly why I scored well." },
  { name: "Md. Ayan", course: "Class 10 - CBSE Board 2025-26", result: "81% - 3rd Rank", quote: "The Sunday tests were tougher than actual board papers. That was the plan. When I sat in the real exam I was calm because I had already faced harder questions. RISE builds exam confidence slowly without you noticing." },
  { name: "Adarsh Kumar", course: "Class 12 - Science (PCM)", result: "81% - Board 2025-26", quote: "The faculty tracked my test scores each week and identified exactly which chapters I was losing marks in. Sir gave targeted revision sheets for those chapters. That personalised tracking is what you will not get in a big coaching." },
  { name: "Akshit Kumar", course: "Class 12 - Science (PCM)", result: "80% - Board 2025-26", quote: "Homework at RISE is non-negotiable. Every day without fail. Within a month it became habit. By board season, studying felt normal not stressful. That daily discipline is the real secret of RISE." },
];
export default function ResultsContent() {
  const [formStatus, setFormStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault(); setFormStatus("submitting");
    try {
      const r = await fetch("https://formspree.io/f/mdaagdoo", { method: "POST", body: new FormData(e.currentTarget), headers: { Accept: "application/json" } });
      if (r.ok) setFormStatus("success"); else { setFormStatus("error"); alert("Something went wrong."); }
    } catch { setFormStatus("error"); alert("Submission failed."); }
  };
  return (
    <div className="min-h-screen bg-[#FDFCFB] overflow-hidden">
      <section className="bg-[#FAF9F7] py-24 border-b border-[#E8DFD3]/20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#1A3C5E] mb-6 tracking-tight">Results & <span className="text-[#F59E0B]">Toppers</span></h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">Real students. Real scores. Class 10 & 12 CBSE results 2025-26 from Rise In Rise Institute, Doranda.</p>
        </div>
      </section>
      <section className="py-20 bg-[#FDFCFB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-4"><Trophy className="w-4 h-4 text-amber-500" /><span className="text-sm font-bold text-amber-700 uppercase tracking-wider">CBSE Board Results 2025-26</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E]">Our Batch Topped This Year</h2>
            <p className="text-slate-500 mt-3 font-medium">First year of Class 10 results at Rise In Rise Institute</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toppers.map((t, i) => (
              <div key={i} className={"relative bg-white rounded-3xl border border-[#E8DFD3]/40 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 " + (i === 0 ? "md:-translate-y-4 ring-2 ring-amber-300/50" : "")}>
                <div className={"w-16 h-16 rounded-full bg-gradient-to-br " + t.color + " flex items-center justify-center mx-auto mb-4 shadow-lg"}><span className="text-white font-black text-lg">{t.rank}</span></div>
                <div className="text-4xl font-black text-[#1A3C5E] mb-1">{t.score}</div>
                <div className="text-xl font-bold text-slate-700 mb-1">{t.name}</div>
                <div className="text-sm text-slate-500 font-medium">{t.cls} · {t.year}</div>
                {i === 0 && <div className="mt-3 inline-flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-bold px-3 py-1 rounded-full"><Star className="w-3 h-3" /> Batch Topper</div>}
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-[#E8DFD3]/40 p-6 flex items-center gap-5"><div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0"><span className="text-blue-700 font-black text-sm">81%</span></div><div><div className="font-bold text-[#1A3C5E] text-lg">Adarsh Kumar</div><div className="text-sm text-slate-500">Class 12 Science (PCM) · CBSE 2025-26</div></div></div>
            <div className="bg-white rounded-2xl border border-[#E8DFD3]/40 p-6 flex items-center gap-5"><div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0"><span className="text-blue-700 font-black text-sm">80%</span></div><div><div className="font-bold text-[#1A3C5E] text-lg">Akshit Kumar</div><div className="text-sm text-slate-500">Class 12 Science (PCM) · CBSE 2025-26</div></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#FAF9F7] border-t border-[#E8DFD3]/30">
        <div className="max-w-7xl mx-auto px-6"><div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E]">What Our Students Say</h2><p className="text-slate-500 mt-3 font-medium">In their own words about the RISE homework culture and discipline</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{testimonials.map((t, i) => (<div key={i} className="group relative bg-white p-8 md:p-10 rounded-3xl border border-[#E8DFD3]/30 shadow-sm"><Quote className="w-10 h-10 text-[#059669]/20 absolute top-8 right-8" /><blockquote className="text-lg text-slate-700 leading-relaxed font-medium mb-8">&ldquo;{t.quote}&rdquo;</blockquote><div className="flex items-end justify-between border-t border-[#E8DFD3]/50 pt-6"><div><div className="font-bold text-[#1A3C5E] text-lg">{t.name}</div><div className="text-sm font-medium text-slate-500">{t.course}</div></div><div className="bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-bold">{t.result}</div></div></div>))}</div>
        </div>
      </section>
      <section className="bg-[#FAF9F7] border-t border-[#E8DFD3]/20">
        <ContainerScroll titleComponent={<div className="mb-10"><h2 className="text-4xl md:text-5xl font-bold text-[#1A3C5E]">Share Your RISE Experience</h2><p className="mt-4 text-lg text-slate-600 font-medium">Let your journey inspire the next generation.</p></div>}>
          <div className="max-w-3xl mx-auto py-4 md:py-8 h-full flex flex-col justify-center">
            {formStatus === "success" ? (<div className="text-center"><h3 className="text-3xl font-bold text-[#1A3C5E] mb-4">Thank You!</h3><p className="text-lg text-slate-600">Your testimonial has been submitted.</p></div>) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label className="block text-sm font-semibold text-[#1A3C5E] mb-2">Student Name</label><input type="text" name="name" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none" required /></div><div><label className="block text-sm font-semibold text-[#1A3C5E] mb-2">Contact Number</label><input type="tel" name="contact_number" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none" required /></div></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label className="block text-sm font-semibold text-[#1A3C5E] mb-2">I am a...</label><select name="role" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none"><option value="Student">Student</option><option value="Parent">Parent</option></select></div><div><label className="block text-sm font-semibold text-[#1A3C5E] mb-2">Program</label><select name="exam_type" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none"><option value="Foundation">Foundation (Class 6-10)</option><option value="JEE">JEE / Engineering</option><option value="NEET">NEET / Medical</option><option value="Commerce">Commerce</option></select></div></div>
                <div><label className="block text-sm font-semibold text-[#1A3C5E] mb-2">Your Testimonial</label><textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none resize-none" placeholder="How did RISE help you?" required></textarea></div>
                <button type="submit" disabled={formStatus === "submitting"} className="w-full py-4 bg-[#1A3C5E] text-white font-bold rounded-xl hover:bg-[#0f243a] transition-all disabled:opacity-50">{formStatus === "submitting" ? "Submitting..." : "Submit Testimonial"}</button>
              </form>
            )}
          </div>
        </ContainerScroll>
      </section>
    </div>
  );
}