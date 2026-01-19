export default function ResultsSection() {
  const metrics = [
    {
      value: "500+",
      label: "Active Students",
      description: "Trusting us with their future"
    },
    {
      value: "85%",
      label: "Grade Improvement",
      description: "Average increase in scores"
    },
    {
      value: "78%",
      label: "JEE Qualifiers",
      description: "Consistently cracking top exams"
    },
    {
      value: "92%",
      label: "Retention Rate",
      description: "Students choosing to stay"
    }
  ];

  return (
    <section id="results" className="w-full bg-gradient-to-b from-[#F9FAFB] via-white to-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">

        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-3xl font-semibold text-[#1A3C5E] sm:text-4xl leading-tight relative z-10">
              Consistent Academic Progress
            </h2>
            {/* Decorative underline */}
            <div className="mt-6 h-px w-24 bg-[#74B49B] mx-auto opacity-60" />
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Our students demonstrate steady improvement through structured mentorship and consistent guidance.
          </p>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 relative">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-4 md:p-0"
            >
              {/* Value */}
              <div className="relative mb-3">
                <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight transition-colors duration-200 group-hover:text-[#1A3C5E]">
                  {metric.value}
                </span>
                {/* Hover Underline (Growth) */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 w-0 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {metric.label}
              </h3>

              {/* Description (Visible but subtle) */}
              <p className="text-sm text-slate-500 font-medium opacity-80 max-w-[140px] leading-snug">
                {metric.description}
              </p>

              {/* Divider (Desktop Only, except last item) */}
              {index !== metrics.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-slate-200 opacity-60" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Transition Fade to Testimonials */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
