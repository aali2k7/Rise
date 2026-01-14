"use client";

/**
 * Premium Faculty Page
 * Design: Professional cards, credible presentation, structured layout
 */
export default function Faculty() {
  const faculty = [
    {
      name: "Manish verma",
      subject: "Maths",
      qualification: "XYZ in XYZ, XYZ Delhi",
      experience: "15+ years",
      expertise: "Mechanics, Thermodynamics, Optics",
    },
    {
      name: "Manish verma",
      subject: "Maths",
      qualification: "XYZ in XYZ, XYZ Delhi",
      experience: "15+ years",
      expertise: "Mechanics, Thermodynamics, Optics",
    },
    {
      name: "Manish verma",
      subject: "Maths",
      qualification: "XYZ in XYZ, XYZ Delhi",
      experience: "15+ years",
      expertise: "Mechanics, Thermodynamics, Optics",
    },
    {
      name: "Manish verma",
      subject: "Maths",
      qualification: "XYZ in XYZ, XYZ Delhi",
      experience: "15+ years",
      expertise: "Mechanics, Thermodynamics, Optics",
    },
    {
      name: "Manish verma",
      subject: "Maths",
      qualification: "XYZ in XYZ, XYZ Delhi",
      experience: "15+ years",
      expertise: "Mechanics, Thermodynamics, Optics",
    },
    {
      name: "Manish verma",
      subject: "Maths",
      qualification: "XYZ in XYZ, XYZ Delhi",
      experience: "15+ years",
      expertise: "Mechanics, Thermodynamics, Optics",
    },
  ];

  return (
    <div className="min-h-screen bg-base-light">
      {/* Page Header */}
      <section className="bg-white py-20 border-b border-base-subtle">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-h1 md:text-[3.5rem] text-text-primary mb-6">Our Faculty</h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Experienced educators committed to student success through clarity, discipline, and
            mentorship.
          </p>
        </div>
      </section>

      {/* Faculty Grid - Premium Cards */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="card slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <h2 className="text-h4 text-text-primary mb-2">{member.name}</h2>
                  <p className="text-accent-navy font-semibold text-body-sm mb-4">
                    {member.subject}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-body-sm text-text-secondary block mb-1">
                      Qualification
                    </span>
                    <span className="text-body-sm text-text-primary font-medium">
                      {member.qualification}
                    </span>
                  </div>
                  <div>
                    <span className="text-body-sm text-text-secondary block mb-1">Experience</span>
                    <span className="text-body-sm text-text-primary font-semibold">
                      {member.experience}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-base-subtle">
                    <span className="text-body-sm text-text-secondary block mb-2">Expertise</span>
                    <span className="text-body-sm text-text-primary">{member.expertise}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Philosophy */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-6">Our Teaching Philosophy</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Student-Centric Approach",
                description:
                  "Every student is unique. Our faculty adapt their teaching methods to ensure each student understands concepts clearly.",
              },
              {
                title: "Continuous Learning",
                description:
                  "Our faculty stay updated with the latest exam patterns, syllabus changes, and teaching methodologies.",
              },
              {
                title: "Accessible & Approachable",
                description:
                  "Students can approach faculty with doubts anytime. We believe in open communication and supportive learning environments.",
              },
              {
                title: "Results-Oriented",
                description:
                  "Our faculty measure success by student outcomes. They are committed to helping every student achieve their goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-accent-navy rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-h4 text-text-primary mb-3">{item.title}</h3>
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
