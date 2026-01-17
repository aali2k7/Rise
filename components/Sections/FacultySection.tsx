export default function FacultySection() {
  const facultyMembers = [
    { name: "Dr. A. Rahman", qualification: "PhD Physics • 12 Yrs Exp", color: "bg-blue-100" },
    { name: "Prof. S. Mehta", qualification: "M.Sc. Mathematics • 15 Yrs Exp", color: "bg-emerald-100" },
    { name: "Dr. K. Sharma", qualification: "PhD Chemistry • 10 Yrs Exp", color: "bg-amber-100" },
    { name: "Mrs. P. Verma", qualification: "M.Ed. Biology • 14 Yrs Exp", color: "bg-purple-100" },
  ];

  return (
    <section className="relative py-16 w-full bg-section-secondary">
      {/* Container condensed to max-w-5xl (approx 1024px) for tighter alignment */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8">

        {/* Existing Content */}
        {/* Header */}
        <header className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-[#1A3C5E]">
            Experienced Faculty
          </h2>

          <div className="mt-4 h-px w-20 bg-[#74B49B]" />

          <p className="mt-4 text-lg text-slate-600">
            Our mentors bring years of academic experience and a commitment to
            student development.
          </p>
        </header>

        {/* Condensed Grid - Gap 1.5rem (6) */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A3C5E]">
              Subject Matter Experts
            </h3>
            <p className="mt-2 text-slate-600">
              Faculty members with deep subject knowledge and years of classroom
              teaching experience.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A3C5E]">
              Mentorship Approach
            </h3>
            <p className="mt-2 text-slate-600">
              Personalized guidance that adapts to individual learning styles
              and academic needs.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A3C5E]">
              Continuous Development
            </h3>
            <p className="mt-2 text-slate-600">
              Ongoing training and academic planning to maintain teaching
              excellence.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A3C5E]">
              Student-Centered Focus
            </h3>
            <p className="mt-2 text-slate-600">
              Commitment to understanding each student’s strengths, pace, and
              challenges.
            </p>
          </div>

        </div>

        {/* --- New Section: Meet Our Faculty --- */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-[#1A3C5E] mb-8">Meet Our Faculty</h3>

          {/* 4-column Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member) => (
              <div key={member.name} className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-md">
                {/* 
                           Background Image Placeholder 
                           (Using a colored div here, but in production this would be <Image src={photo} layout="fill" objectFit="cover" />)
                        */}
                <div className={`absolute inset-0 ${member.color} transition-transform duration-700 ease-out group-hover:scale-105`} />

                {/* Gradient Overlay: Bottom black/90 to transparent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                {/* Content: Anchored to Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {member.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
