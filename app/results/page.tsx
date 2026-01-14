"use client";

/**
 * Premium Results & Testimonials Page
 * Design: Statistics cards, elegant testimonials, professional presentation
 */
export default function Results() {
  const stats = [
    { label: "Students Enrolled", value: "500+" },
    { label: "JEE Qualified", value: "85%" },
    { label: "NEET Qualified", value: "78%" },
    { label: "Satisfaction Rate", value: "92%" },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      course: "JEE Preparation",
      result: "JEE Advanced Rank: 1247",
      quote:
        "RISE's disciplined approach and focus on concept clarity helped me understand subjects deeply. The regular assessments kept me on track throughout my preparation.",
    },
    {
      name: "Priya Patel",
      course: "NEET Preparation",
      result: "NEET Score: 685",
      quote:
        "The mentorship and personalized guidance at RISE made a huge difference. The faculty's commitment to each student's success is truly remarkable.",
    },
    {
      name: "Rohan Mehta",
      course: "Class 12 + JEE",
      result: "JEE Main Rank: 2341",
      quote:
        "The integrated approach for board and competitive exams was perfect. I could prepare for both without feeling overwhelmed.",
    },
    {
      name: "Ananya Reddy",
      course: "NEET Preparation",
      result: "NEET Score: 672",
      quote:
        "Consistency and discipline were the keys. RISE helped me build study habits that I'll carry forward in my medical career.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-light">
      {/* Page Header */}
      <section className="bg-white py-20 border-b border-base-subtle">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-h1 md:text-[3.5rem] text-text-primary mb-6">
            Results & Testimonials
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what our students have achieved.
          </p>
        </div>
      </section>

      {/* Statistics - Premium Cards */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-h1 md:text-5xl font-bold text-accent-navy mb-3">
                  {stat.value}
                </div>
                <div className="text-body-sm text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-6">Student Success Stories</h2>
            <p className="text-body-lg text-text-secondary">Real achievements from our students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <blockquote className="text-body text-text-primary leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-6 border-t border-base-subtle">
                  <div className="font-semibold text-text-primary mb-1">{testimonial.name}</div>
                  <div className="text-body-sm text-text-secondary mb-2">{testimonial.course}</div>
                  <div className="text-body-sm font-medium text-accent-navy">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Focus */}
      <section className="section bg-base">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-6">What We Measure</h2>
            <p className="text-body-lg text-text-secondary">
              Our success is defined by student outcomes, not just enrollment numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exam Performance",
                description:
                  "Consistent improvement in test scores and final exam results.",
              },
              {
                title: "Concept Mastery",
                description: "Deep understanding of subjects, not just memorization.",
              },
              {
                title: "Long-term Success",
                description:
                  "Building skills and habits that serve students beyond exams.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-h4 text-text-primary mb-3">{item.title}</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
