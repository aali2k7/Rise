export default function ResultsSection() {
  return (
    <section id="results" className="w-full bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 lg:py-28">
        <header className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl font-semibold text-[#1A3C5E] sm:text-4xl leading-tight">
              Consistent Academic Progress
            </h2>
            <div className="mt-6 h-px w-16 bg-[#74B49B] mx-auto" />
          </div>
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our students demonstrate steady improvement through structured mentorship and consistent guidance.
          </p>
        </header>

        <div className="mt-16 space-y-8">
          <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/20 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Academic Foundation</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Students build strong conceptual understanding that supports long-term learning success.
            </p>
          </div>

          <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/20 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Confidence Growth</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Regular progress tracking and personalized attention help students develop academic confidence.
            </p>
          </div>

          <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/20 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Sustained Performance</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Focus on consistent improvement rather than short-term results ensures lasting academic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
