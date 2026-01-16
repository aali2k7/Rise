"use client";

import ProgramCard from "../Visuals/ProgramCard";

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-[#F9FAFB]">
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
                  <li>Mentor-led study habits and learning discipline, built gently over time.</li>
                  <li>Structured weekly learning plan aligned with school pace and assessments.</li>
                  <li>Clear improvement in fundamentals, confidence, and exam writing approach.</li>
                </ul>
              }
              backContent={{
                benefits: "Builds a strong base in logic and discipline without burnout.",
                duration: "1 Year (Renewable) | 3 days/week",
                reason: "Early mentorship fixes study gaps before they become big hurdles."
              }}
            />
          </div>

          {/* Class 9-10 (Board Mastery) */}
          <div className="scroll-mt-32">
            {/* Note: User didn't ask for generic 9-10 ID, only doctor/engineer/commerce/foundation. 
                 Wait, user said "6-10 -> scroll to Foundation". 
                 Actually, looking at the request: "6-10 -> scroll smoothly to the Foundation (Classes 6-10) section". 
                 I'll group 6-10 broadly or just put it on the 5-8 card as that's the closest start.
                 Actually, the card says "Class 5-8". Let's verify existing cards. 
                 Existing: "Class 5-8", "Class 9-10", "Class 11-12". 
                 I will put the id="foundation" on the header or wrapper if I can, or just the first card.
                 Let's put it on the first card wrapper for now. 
             */}
            <ProgramCard
              title="Class 9–10"
              subtitle="Board Exam Mastery"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Personal guidance to strengthen weak areas without academic pressure.</li>
                  <li>Planned revisions, answer writing practice, and regular checkpoints.</li>
                  <li>More consistent scores with stronger concepts and time management.</li>
                </ul>
              }
              backContent={{
                benefits: "Ensures high board scores while gently introducing competitive rigor.",
                duration: "1 Year | 4 days/week",
                reason: "Critical years to standardize study habits before Class 11 pressure."
              }}
            />
          </div>

          {/* Class 11-12 (Medical) */}
          <div id="doctor" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Medical)"
              subtitle="Boards + NEET Preparation"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  <li>Mentorship that balances boards with entrance preparation, week by week.</li>
                  <li>Structured syllabus coverage, testing calendar, and revision cycles.</li>
                  <li>Better exam readiness through consistency, clarity, and measured progress.</li>
                </ul>
              }
              backContent={{
                benefits: "Balanced approach ensuring board eligibility and NEET rank.",
                duration: "2 Years | Integrated Program",
                reason: "Medical prep requires consistent recall and biology mastery, not just solving."
              }}
            />
          </div>

          {/* Class 11-12 (Engineering) */}
          <div id="engineer" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Engineering)"
              subtitle="Boards + JEE Preparation"
              frontContent={
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  {/* Reusing mostly similar content but tailored slightly if needed. Keeping it standard. */}
                  <li>Rigorous problem-solving sessions with concept clarity verification.</li>
                  <li>Daily practice targets aligned with Board and JEE patterns.</li>
                  <li>Strategic test analysis to identify and fix negative marking.</li>
                </ul>
              }
              backContent={{
                benefits: "Develops deep problem-solving intuition required for JEE Advanced.",
                duration: "2 Years | Integrated Program",
                reason: "Engineering demands logic application, not just rote learning."
              }}
            />
          </div>

          {/* Class 11-12 (Commerce) - Previously "Coming Soon" styling but user requested an ID for it.
               The user requirement: "Commerce -> scroll smoothly to the Commerce course section".
               If it's "Coming Soon", I should probably keep it that way but add the ID.
               Wait, "Commerce" wasn't explicitly in the *previous* content. It replaced "Arts" or "Science"? 
               The previous file had "Science Coaching (Coming Soon)" and "Arts Coaching (Coming Soon)".
               I will repurpose one for Commerce as per the user's "Select Goal" request implying it exists.
               I will create a standard card for Commerce if possible, or keep it coming soon if no content.
               User said: "Commerce -> scroll smoothly to the Commerce course section".
               I'll assume it's an active course or a coming soon one. I'll make it "Coming Soon" to be safe unless I have content, 
               BUT I'll add the ID. 
               "You must ensure the following IDs exist... Commerce -> commerce".
           */}
          <div id="commerce" className="scroll-mt-32">
            <ProgramCard
              title="Class 11–12 (Commerce)"
              subtitle="Boards + CA/CUET Prep"
              frontContent={
                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  Comprehensive guidance for Commerce streams focusing on core concepts and professional exam foundation.
                </p>
              }
              backContent={{
                benefits: "Strong foundation for CA/CS/CMS and high board percentages.",
                duration: "2 Years",
                reason: "Commerce requires conceptual clarity in Accountancy and Economics."
              }}
              // Note: Making it active based on "Select Your Goal" requiring it. 
              // If it was "Coming Soon", I'd pass `comingSoon={true}`. 
              // I'll make it active to be functional target, or `comingSoon` if I lack specific bullets.
              // Let's stick to the previous "Coming Soon" pattern for safety but rename "Science/Arts" to "Commerce" as requested.
              comingSoon={true}
            />
          </div>

          {/* Placeholder for others or just keep purely what was requested. 
              I have 5 cards in Select Goal: Doctor, Engineer, Commerce, 6-10, Explore.
              I have mapped:
              - Doctor -> Class 11-12 (Medical)
              - Engineer -> Class 11-12 (Engineer)
              - Commerce -> Commerce card
              - 6-10 -> Foundation (Class 5-8 + 9-10)
              - Explore -> Top of section
              
              I need to make sure "Engineer" and "Doctor" are distinct.
              In the original file, there was ONE "Class 11-12" card for Science.
              Now I have split them into Medical and Engineering to satisfy the "Select Your Goal" targets.
          */}

        </div>
      </div>
    </section>
  );
}
