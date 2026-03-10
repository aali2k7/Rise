export default function ResultsSection() {
  const metrics = [
    {
      value: "500+",
      label: "Active Students",
      description: "Trusting us with their future",
      color: "text-[#F59E0B]"
    },
    {
      value: "85%",
      label: "Grade Improvement",
      description: "Average increase in scores",
      color: "text-[#10B981]"
    },
    {
      value: "78%",
      label: "JEE Qualifiers",
      description: "Consistently cracking top exams",
      color: "text-[#F59E0B]"
    },
    {
      value: "92%",
      label: "Retention Rate",
      description: "Students choosing to stay",
      color: "text-[#10B981]"
    }
  ];

  const toppers = [
    {
      name: "Tanish Agarwal",
      tag: "Ranchi City Topper 2022",
      exam: "IIT JEE Advanced 2022",
      detail: "Secured city rank in the coveted national level competitive examination of JEE Advanced 2022 question paper.",
    },
    {
      name: "RISE Students",
      tag: "JEE Advanced 2023 — Multiple Qualifiers",
      exam: "IIT JEE Advanced 2023",
      detail: "Class 11–12 students across years classroom course cleared JEE Advanced 2023 with top ranks from Doranda.",
    },
    {
      name: "RISE Batch 2024",
      tag: "JEE Advanced 2024 — Record Results",
      exam: "IIT JEE Advanced 2024",
      detail: "Our IIT JEE Advanced 2024 batch achieved highest-ever selections to top notch IITs and national level competitive examinations.",
    },
  ];

  return (
    <section id="results" className="w-full relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #0F1A2E 0%, #1A2E44 40%, #0F1A2E 100%)' }}>
      {/* Background Glows — warm gold + deep emerald */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1A2E44]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10B981]/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A96E]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header */}
        <header className="text-center mb-24">
          <div className="inline-block relative">
            <h2 className="text-3xl font-bold text-white sm:text-5xl leading-tight relative z-10">
              Consistent <span className="text-[#10B981]">Academic Progress</span>
            </h2>
            {/* Decorative underline */}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#10B981] to-[#C9A96E] mx-auto rounded-full" />
          </div>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Our students demonstrate steady improvement through structured mentorship and consistent guidance.
          </p>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-8">
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

        {/* Toppers Spotlight */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold text-white mb-2">
            Our <span className="text-[#F59E0B]">Toppers</span>
          </h3>
          <p className="text-center text-slate-400 text-sm mb-10 max-w-xl mx-auto">
            RISE students have consistently cracked IIT JEE Main &amp; Advanced — the most coveted national level competitive examinations for Class XI &amp; XII standards across India, securing seats at top notch IITs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toppers.map((topper, i) => (
              <div key={i} className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 hover:border-[#10B981]/50 transition-all duration-300">
                <span className="block text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">{topper.exam}</span>
                <h4 className="text-lg font-bold text-white mb-1">{topper.name}</h4>
                <span className="block text-sm font-semibold text-[#10B981] mb-3">{topper.tag}</span>
                <p className="text-sm text-slate-400 leading-relaxed">{topper.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
