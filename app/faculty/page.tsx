import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Faculty | RISE",
  description: "Learn from the masters. Our experienced faculty provides mentorship and guidance for JEE and NEET aspirants.",
};

import FacultyGrid from "@/components/faculty/FacultyGrid";

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Header Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#1A3C5E] sm:text-5xl mb-6">
            Mentored by Masters
          </h1>
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
