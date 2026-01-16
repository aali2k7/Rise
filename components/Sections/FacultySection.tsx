"use client";

export default function FacultySection() {
  return (
    <section id="faculty" className="w-full bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 lg:py-28">
        <header className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl font-semibold text-[#1A3C5E] sm:text-4xl leading-tight">
              Experienced Faculty
            </h2>
            <div className="mt-6 h-px w-16 bg-[#74B49B] mx-auto" />
          </div>
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our mentors bring years of academic experience and a commitment to student development.
          </p>
        </header>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Subject Matter Experts</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Faculty members with deep subject knowledge and teaching experience in their respective fields.
              </p>
            </div>

            <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Mentorship Approach</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Personalized guidance that adapts to individual learning styles and academic needs.
              </p>
            </div>

            <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Continuous Development</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Regular training and professional development to maintain teaching excellence.
              </p>
            </div>

            <div className="border border-slate-200/40 bg-gradient-to-br from-white to-slate-50/30 backdrop-blur-sm ring-1 ring-slate-200/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-medium text-[#1A3C5E] leading-tight">Student-Centered Focus</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Commitment to understanding each student's unique challenges and strengths.
              </p>
            </div>
          </div>

        <div className="mt-24 border-t border-slate-200/40 pt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium text-[#1A3C5E] leading-tight">Our Teaching Philosophy</h3>
            <div className="mt-4 h-px w-20 bg-[#74B49B] mx-auto" />
            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              We believe in building strong academic foundations through patient guidance and structured learning. 
              Our faculty serves as mentors who take responsibility for each student's progress, ensuring 
              steady improvement and confidence building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
