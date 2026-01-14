"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Premium Homepage
 * Design: Bold hero, structured sections, elegant cards, formal aesthetic
 */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  // Subtle fade-in on mount
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("fade-in");
    }
  }, []);

  return (
    <>
      {/* Hero Section - Bold, Formal, Premium */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center bg-base-light overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
          {/* Main heading - Large, confident typography */}
          <h1 className="text-display md:text-[5.5rem] lg:text-[6.5rem] font-bold text-text-primary mb-8 tracking-tight leading-none">
            RISE
          </h1>
          
          {/* Tagline - Elegant, understated */}
          <p className="text-h3 md:text-2xl text-text-secondary mb-6 font-light tracking-wide">
            Our Effort. Your Rise.
          </p>
          
          {/* Value proposition - Clear, professional */}
          <p className="text-body-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            Premium coaching for Class 11 and 12 students preparing for JEE and NEET.
            <br className="hidden sm:block" />
            <span className="text-text-DEFAULT"> Where discipline meets excellence, and consistency builds success.</span>
          </p>
          
          {/* CTA Buttons - Premium styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary min-w-[180px]">
              Enquire Now
            </Link>
            <Link href="/courses" className="btn-secondary min-w-[180px]">
              View Courses
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Value Proposition Section - Structured Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20 slide-up">
            <h2 className="text-h1 md:text-h1 text-text-primary mb-6">
              Why Choose RISE?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              A coaching institute that values discipline, clarity, and results over shortcuts.
            </p>
          </div>

          {/* Three-column grid - Premium cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "Discipline First",
                description:
                  "We believe in building strong foundations through consistent practice and disciplined study habits that lead to long-term success.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
                title: "Concept Clarity",
                description:
                  "Deep understanding over memorization. We focus on building conceptual clarity that enables students to solve complex problems with confidence.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                ),
                title: "Proven Results",
                description:
                  "Track record of success with students achieving their goals through systematic preparation and consistent effort.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon - Minimal, elegant */}
                <div className="w-16 h-16 bg-accent-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-accent-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-h4 text-text-primary mb-4">{item.title}</h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview - Elegant Card Grid */}
      <section className="section bg-base">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-h1 md:text-h1 text-text-primary mb-6">
              Our Programs
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive preparation for Class 11, Class 12, JEE, and NEET.
            </p>
          </div>

          {/* Two-column grid - Premium program cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Class 11 & 12",
                description:
                  "Strong foundation building with comprehensive syllabus coverage, regular assessments, and integrated board exam preparation.",
                link: "/courses",
              },
              {
                title: "JEE Preparation",
                description:
                  "Intensive coaching for Joint Entrance Examination with focus on Physics, Chemistry, and Mathematics. Problem-solving and time management.",
                link: "/courses",
              },
              {
                title: "NEET Preparation",
                description:
                  "Specialized coaching for National Eligibility cum Entrance Test covering all medical entrance requirements with emphasis on Biology.",
                link: "/courses",
              },
              {
                title: "Mentorship",
                description:
                  "Personalized guidance and support to help students navigate their preparation journey effectively with one-on-one attention.",
                link: "/approach",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="card group cursor-pointer slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-h3 text-text-primary mb-4 group-hover:text-accent-navy transition-smooth">
                  {program.title}
                </h3>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Link
                  href={program.link}
                  className="inline-flex items-center text-accent-navy font-medium hover:gap-2 gap-1 transition-all"
                >
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold, Confident */}
      <section className="section bg-accent-navy text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-h1 md:text-h1 mb-6 text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-body-lg mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join RISE and experience coaching that values discipline, clarity, and consistent effort.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-accent-navy rounded-button font-semibold hover:bg-base-light transition-smooth shadow-card hover:shadow-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
