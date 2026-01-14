"use client";

/**
 * Premium Teaching Approach Page
 * Design: Structured principles, elegant cards, formal presentation
 */
export default function Approach() {
  const principles = [
    {
      title: "Discipline",
      description:
        "We believe that consistent, disciplined effort is the foundation of success. Our programs are structured to build and maintain study habits that lead to long-term achievement.",
      details: [
        "Regular attendance tracking",
        "Structured daily schedules",
        "Accountability systems",
        "Progress monitoring",
      ],
    },
    {
      title: "Concept Clarity",
      description:
        "Deep understanding over surface-level memorization. We focus on building conceptual clarity that enables students to solve complex problems with confidence.",
      details: [
        "Step-by-step concept building",
        "Visual and interactive learning",
        "Real-world applications",
        "Foundation before advanced topics",
      ],
    },
    {
      title: "Consistency",
      description:
        "Success comes from steady, consistent effort rather than sporadic bursts. Our approach emphasizes regular practice and continuous improvement.",
      details: [
        "Daily practice schedules",
        "Regular revision cycles",
        "Continuous assessment",
        "Incremental progress tracking",
      ],
    },
    {
      title: "Mentorship",
      description:
        "Beyond teaching, we provide mentorship. Our faculty guide students not just academically, but also help them navigate challenges and stay motivated.",
      details: [
        "One-on-one guidance sessions",
        "Career counseling",
        "Stress management support",
        "Personalized attention",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-base-light">
      {/* Page Header */}
      <section className="bg-white py-20 border-b border-base-subtle">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-h1 md:text-[3.5rem] text-text-primary mb-6">
            Our Teaching Approach
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            A methodology built on discipline, clarity, consistency, and mentorship.
          </p>
        </div>
      </section>

      {/* Core Principles - Premium Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="card slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="text-h3 text-text-primary mb-4">{principle.title}</h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  {principle.description}
                </p>
                <ul className="space-y-3">
                  {principle.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-accent-navy mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-body-sm text-text-secondary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Elegant List */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-6">How We Teach</h2>
            <p className="text-body-lg text-text-secondary">
              Our methodology prioritizes understanding over shortcuts.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                title: "Foundation First",
                description:
                  "We ensure students have a solid grasp of fundamentals before moving to advanced topics. No concept is left unclear.",
              },
              {
                title: "Problem-Solving Focus",
                description:
                  "Regular practice with diverse problem sets helps students develop analytical thinking and problem-solving skills.",
              },
              {
                title: "Interactive Learning",
                description:
                  "Classes are interactive, encouraging questions and discussions. We believe in active learning over passive listening.",
              },
              {
                title: "Regular Feedback",
                description:
                  "Continuous assessment and feedback help students understand their progress and areas that need attention.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-accent-navy pl-8 slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-h4 text-text-primary mb-3">{item.title}</h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy - Centered Quote */}
      <section className="section bg-base">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-h2 text-text-primary mb-8">Our Philosophy</h2>
          <blockquote className="text-body-lg md:text-xl text-text-secondary leading-relaxed mb-6 italic">
            "We don't promise shortcuts or magic formulas. We believe in the power of disciplined
            effort, clear understanding, and consistent practice. Success in competitive exams comes
            from building strong foundations and maintaining steady progress."
          </blockquote>
          <p className="text-body font-medium text-text-primary">— RISE Coaching Institute</p>
        </div>
      </section>
    </div>
  );
}
