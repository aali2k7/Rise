"use client";

export default function ValueHighlights() {
  return (
    <section
      id="value-highlights"
      className="relative w-full bg-slate-50 py-20 overflow-hidden"
    >
      {/* Ambient Orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute left-[10%] top-[35%]
                     h-[600px] w-[600px]
                     rounded-full
                     bg-emerald-400/40
                     blur-[160px]
                     animate-orb"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
        {/* Header */}
        <header className="mb-14 max-w-2xl">
          <p className="text-support font-medium tracking-wide">
            Built for long-term growth
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#1A3C5E]">
            What Makes RISE Different
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A calm, structured approach that prioritizes mentorship, discipline,
            and clarity — with parents kept informed at every step.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: "Personal Mentorship",
              text: "One-on-one academic guidance beyond classroom teaching.",
              icon: (
                <>
                  <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Z" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </>
              ),
            },
            {
              title: "Limited Batch Strength",
              text: "Small groups to ensure attention, accountability, and clarity.",
              icon: (
                <>
                  <path d="M9 21v-7a3 3 0 0 1 6 0v7" />
                  <path d="M7 21h10" />
                  <path d="M8 9a4 4 0 1 1 8 0" />
                </>
              ),
            },
            {
              title: "Structured Academic Roadmaps",
              text: "Clear planning for exams, revisions, and long-term goals.",
              icon: (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 10h10" />
                  <path d="M4 14h16" />
                  <path d="M4 18h10" />
                </>
              ),
            },
            {
              title: "Continuous Doubt Resolution",
              text: "Doubts addressed consistently, not postponed or ignored.",
              icon: (
                <>
                  <path d="M8 15l2-2 2 2 4-4" />
                  <path d="M12 2v1.5" />
                  <path d="M12 20.5V22" />
                </>
              ),
            },
            {
              title: "Parent Transparency",
              text: "Regular updates and open communication with parents.",
              icon: (
                <>
                  <path d="M6 3h12" />
                  <path d="M8 7h8" />
                  <path d="M6 21h12" />
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex h-full max-w-[18rem] flex-col
                         rounded-2xl border border-slate-200 bg-white p-6
                         transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#74B49B]/20">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="#1A3C5E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>

              <h3 className="mb-2 text-sm font-semibold text-[#1A3C5E]">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content for the section (Already configured above) */}
    </section>
  );
}
