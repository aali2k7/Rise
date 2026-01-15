export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <header className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-[#1A3C5E] sm:text-4xl">
            Programs Built Around Academic Stages
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each program is designed around your child’s phase — building steady foundations first,
            then strengthening exam readiness with structured planning and mentor oversight.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-[#74B49B]/25">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1A3C5E]">Class 5–8</h3>
                <p className="mt-1 text-sm font-medium text-[#1A3C5E]/80">
                  School Exam Excellence
                </p>
              </div>
              <div className="h-10 w-px bg-[#74B49B]/25" aria-hidden="true" />
            </div>

            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>Mentor-led study habits and learning discipline, built gently over time.</li>
              <li>Structured weekly learning plan aligned with school pace and assessments.</li>
              <li>Clear improvement in fundamentals, confidence, and exam writing approach.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-[#74B49B]/25">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1A3C5E]">Class 9–10</h3>
                <p className="mt-1 text-sm font-medium text-[#1A3C5E]/80">Board Exam Mastery</p>
              </div>
              <div className="h-10 w-px bg-[#74B49B]/25" aria-hidden="true" />
            </div>

            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>Personal guidance to strengthen weak areas without academic pressure.</li>
              <li>Planned revisions, answer writing practice, and regular checkpoints.</li>
              <li>More consistent scores with stronger concepts and time management.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-[#74B49B]/25">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1A3C5E]">Class 11–12</h3>
                <p className="mt-1 text-sm font-medium text-[#1A3C5E]/80">
                  Boards + JEE / NEET Preparation
                </p>
              </div>
              <div className="h-10 w-px bg-[#74B49B]/25" aria-hidden="true" />
            </div>

            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>Mentorship that balances boards with entrance preparation, week by week.</li>
              <li>Structured syllabus coverage, testing calendar, and revision cycles.</li>
              <li>Better exam readiness through consistency, clarity, and measured progress.</li>
            </ul>
          </div>

          <div className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 opacity-70">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1A3C5E]">Class 11–12 Science Coaching</h3>
                <p className="mt-1 text-sm font-medium text-[#1A3C5E]/70">Coming Soon</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#1A3C5E]/15 px-3 py-1 text-xs font-semibold text-[#1A3C5E]/70">
                Coming Soon
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              A dedicated pathway for science students with structured mentoring and academic planning.
            </p>
          </div>

          <div className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 opacity-70">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1A3C5E]">Class 11–12 Arts Coaching</h3>
                <p className="mt-1 text-sm font-medium text-[#1A3C5E]/70">Coming Soon</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#1A3C5E]/15 px-3 py-1 text-xs font-semibold text-[#1A3C5E]/70">
                Coming Soon
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              An upcoming program for arts students focused on steady preparation and exam readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
