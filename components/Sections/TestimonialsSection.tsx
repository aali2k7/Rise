export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 lg:py-28">
        <header className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl font-semibold text-[#1A3C5E] sm:text-4xl leading-tight">
              What Parents Say
            </h2>
            <div className="mt-6 h-px w-16 bg-[#74B49B] mx-auto" />
          </div>
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experiences from families who have trusted us with their children's academic journey.
          </p>
        </header>

        <div className="mt-16 space-y-8">
          <div className="bg-gradient-to-br from-white/90 to-slate-50/40 backdrop-blur-sm border border-slate-200/40 ring-1 ring-slate-200/30 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-slate-700 leading-relaxed text-lg max-w-none">
              "The structured approach at RISE helped my daughter build confidence in mathematics.
              The regular progress updates and personalized attention made all the difference."
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1A3C5E]">Parent of Grade 10 Student</p>
              <p className="text-sm text-slate-600 mt-2">Academic Year 2023-24</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-slate-50/40 backdrop-blur-sm border border-slate-200/40 ring-1 ring-slate-200/30 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-slate-700 leading-relaxed text-lg max-w-none">
              "We appreciate how the faculty takes genuine interest in our son's progress.
              The mentorship goes beyond academics and focuses on overall development."
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1A3C5E]">Parent of Grade 12 Student</p>
              <p className="text-sm text-slate-600 mt-2">Academic Year 2023-24</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-slate-50/40 backdrop-blur-sm border border-slate-200/40 ring-1 ring-slate-200/30 rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-slate-700 leading-relaxed text-lg max-w-none">
              "The patient teaching methodology helped our child overcome learning challenges.
              Consistent support and clear communication from the entire team."
            </p>
            <div className="mt-8">
              <p className="font-medium text-[#1A3C5E]">Parent of Grade 9 Student</p>
              <p className="text-sm text-slate-600 mt-2">Academic Year 2023-24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
