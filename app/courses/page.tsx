import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Courses | RISE",
  description: "Explore our structured programs for Class 11, Class 12, JEE, and NEET preparation. Comprehensive syllabus coverage with expert guidance.",
  alternates: {
    canonical: "/courses",
  },
};

/**
 * Premium Courses Page
 * Design: Structured cards, clear hierarchy, professional presentation
 */
export default function Courses() {
  const courses = [
    {
      title: "Class 11",
      duration: "Full Year Program",
      description:
        "Build a strong foundation in Physics, Chemistry, and Mathematics. Comprehensive syllabus coverage with regular assessments and doubt-clearing sessions.",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      focus: "Foundation Building",
    },
    {
      title: "Class 12",
      duration: "Full Year Program",
      description:
        "Advanced concepts and board exam preparation alongside competitive exam readiness. Integrated approach for both board and entrance exams.",
      subjects: ["Physics", "Chemistry", "Mathematics/Biology"],
      focus: "Board + Competitive Prep",
    },
    {
      title: "JEE Preparation",
      duration: "Intensive Program",
      description:
        "Comprehensive coaching for Joint Entrance Examination (Main & Advanced). Focus on problem-solving, time management, and advanced concepts.",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      focus: "JEE Main & Advanced",
    },
    {
      title: "NEET Preparation",
      duration: "Intensive Program",
      description:
        "Specialized coaching for National Eligibility cum Entrance Test. Complete coverage of Physics, Chemistry, and Biology with emphasis on medical entrance requirements.",
      subjects: ["Physics", "Chemistry", "Biology"],
      focus: "Medical Entrance",
    },
  ];

  return (
    <div className="min-h-screen bg-base-light">
      {/* Page Header - Premium typography */}
      <section className="bg-white py-20 border-b border-base-subtle">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-h1 md:text-[3.5rem] text-text-primary mb-6">
            Our Courses
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Structured programs designed for Class 11, Class 12, JEE, and NEET aspirants.
          </p>
        </div>
      </section>

      {/* Courses Grid - Premium cards */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="card slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header with badge */}
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-h3 text-text-primary">{course.title}</h2>
                  <span className="text-body-sm text-text-secondary bg-base px-3 py-1.5 rounded-full font-medium">
                    {course.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Subjects */}
                <div className="mb-6">
                  <h3 className="text-body-sm font-semibold text-text-primary mb-3">
                    Subjects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="text-body-sm text-accent-navy bg-accent-navy/10 px-3 py-1.5 rounded-md font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus */}
                <div className="pt-6 border-t border-base-subtle">
                  <p className="text-body-sm font-medium text-text-primary">
                    Focus: <span className="text-text-secondary font-normal">{course.focus}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure - Elegant list */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-6">Program Structure</h2>
            <p className="text-body-lg text-text-secondary">
              Every program follows a structured approach to ensure comprehensive learning.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Regular Classes",
                description:
                  "Structured classroom sessions with concept explanation, problem-solving, and interactive learning.",
              },
              {
                number: "2",
                title: "Regular Assessments",
                description:
                  "Weekly tests, monthly exams, and mock tests to track progress and identify areas for improvement.",
              },
              {
                number: "3",
                title: "Doubt Clearing",
                description:
                  "Dedicated sessions for addressing individual doubts and providing personalized guidance.",
              },
              {
                number: "4",
                title: "Study Material",
                description:
                  "Comprehensive study materials, practice problems, and revision notes curated by experienced faculty.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number badge */}
                <div className="flex-shrink-0 w-12 h-12 bg-accent-navy/10 rounded-full flex items-center justify-center">
                  <span className="text-accent-navy font-bold text-lg">{item.number}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-h4 text-text-primary mb-2">{item.title}</h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
