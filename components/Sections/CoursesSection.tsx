"use client";

import ProgramCard from "../Visuals/ProgramCard";

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-[#fcfcfd]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <header className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-[#1A3C5E] sm:text-4xl">
            Programs Built Around Academic Stages
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each stage needs a different kind of guidance. Our programs evolve with your child’s
            phase — building foundations early, then adding structure, revision, and exam readiness
            with consistent mentor support.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Class 5-8 (Foundation) */}
          <div id="foundation" className="scroll-mt-32">
            <ProgramCard
              title="Class 5–8"
              subtitle="School Exam Excellence"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Building the habit of daily, disciplined self-study.</li>
                  <li>Strengthening core concepts in Maths and Science.</li>
                  <li>Improving answer-writing skills for school exams.</li>
                </ul>
              }
              backContent={{
                benefits: "Creates a calm, confident learner who enjoys the process of studying.",
                duration: "1 Year (Renewable) | 3 days/week",
                reason: "Early mentorship prevents the need for intense pressure in later years."
              }}
              backCTA="Enquire Now →"
            />
          </div>

          {/* Class 9-10 (Board Mastery) */}
          <div className="scroll-mt-32">
            <ProgramCard
              title="Class 9–10"
              subtitle="Board Exam Mastery"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Comprehensive coverage of Board syllabus with revision.</li>
                  <li>Regular testing to eliminate fear of exams.</li>
                  <li>Balancing school curriculum with competitive foundations.</li>
                </ul>
              }
              backContent={{
                benefits: "Ensures high Board percentage while subtly building competitive logic.",
                duration: "1 Year | 4 days/week",
                reason: "We stabilize performance so students enter Class 11 with momentum."
              }}
              backCTA="Enquire Now →"
            />
          </div>

          {/* Class 11-12 (Medical) */}
          <div id="doctor" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Medical)"
              subtitle="Boards + NEET Preparation"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Strict adherence to NCERT with deep conceptual clarity.</li>
                  <li>Continuous revision cycles to build high retention.</li>
                  <li>Weekly mock tests to perfect speed and accuracy.</li>
                </ul>
              }
              backContent={{
                benefits: "A disciplined system designed for high retention and rank consistency.",
                duration: "2 Years | Integrated Program",
                reason: "NEET requires stamina and precision. We build both day by day."
              }}
              backCTA="Enquire Now →"
            />
          </div>

          {/* Class 11-12 (Engineering) */}
          <div id="engineer" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Engineering)"
              subtitle="Boards + JEE Preparation"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Advanced logic building and problem-solving techniques.</li>
                  <li>Focus on application-based learning for JEE Mains & Advanced.</li>
                  <li>Strategic error analysis to minimize negative marking.</li>
                </ul>
              }
              backContent={{
                benefits: "Develops the analytical depth required to crack top engineering ranks.",
                duration: "2 Years | Integrated Program",
                reason: "We move beyond rote learning to true problem-solving intuition."
              }}
              backCTA="Enquire Now →"
            />
          </div>

          {/* Class 11-12 (Commerce) */}
          <div id="commerce" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Commerce)"
              subtitle="Boards + Professional Prep"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Conceptual mastery of Accountancy, Economics, and Business.</li>
                  <li>Preparation for Board exams and professional entrance tests.</li>
                  <li>Focus on real-world application and financial literacy.</li>
                </ul>
              }
              backContent={{
                benefits: "Secures top Board scores and lays a solid foundation for CA/CUET.",
                duration: "2 Years | Integrated Program",
                reason: "Commerce mastery is about clarity, not just balancing balance sheets."
              }}
              backCTA="Enquire Now →"
            />
          </div>

          {/* Class 11-12 (Arts) - New Card */}
          <div id="arts" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Arts)"
              subtitle="Boards + Humanities"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>In-depth understanding of History, Political Science & Sociology.</li>
                  <li>Develops critical thinking vs. just memorization.</li>
                  <li>Guidance for future pathways in Law, Policy, and Civil Services.</li>
                </ul>
              }
              // Coming Soon behavior: back content is generally hidden or simple, no CTA
              comingSoon={true}
              backContent={{
                benefits: "",
                duration: "",
                reason: ""
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
