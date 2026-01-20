export default function ResultsSection() {
  const metrics = [
    {
      value: "500+",
      label: "Active Students",
      description: "Trusting us with their future",
      color: "text-[#F59E0B]" // Amber
    },
    {
      value: "85%",
      label: "Grade Improvement",
      description: "Average increase in scores",
      color: "text-[#10B981]" // Emerald
    },
    {
      value: "78%",
      label: "JEE Qualifiers",
      description: "Consistently cracking top exams",
      color: "text-[#F59E0B]" // Amber
    },
    {
      value: "92%",
      label: "Retention Rate",
      description: "Students choosing to stay",
      color: "text-[#10B981]" // Emerald
    }
  ];

  return (
    <section id="results" className="w-full bg-[#0F172A] relative overflow-hidden py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header */}
        <header className="text-center mb-24">
          <div className="inline-block relative">
            <h2 className="text-3xl font-bold text-white sm:text-5xl leading-tight relative z-10">
              Consistent <span className="text-[#10B981]">Academic Progress</span>
            </h2>
            {/* Decorative underline */}
            <div className="mt-6 h-1 w-24 bg-[#10B981] mx-auto rounded-full" />
          </div>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Our students demonstrate steady improvement through structured mentorship and consistent guidance.
          </p>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-4 md:p-6 rounded-2xl transition-all duration-300 hover:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Value */}
              <div className="relative mb-4">
                <span className={`text-5xl sm:text-6xl font-extrabold tracking-tight ${metric.color}`}>
                  {metric.value}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-white mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 font-medium opacity-80 max-w-[160px] leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
