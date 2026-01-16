"use client";

import AboutRISE from "@/components/Sections/AboutRISE";
import DirectorsDesk from "@/components/Sections/DirectorsDesk";
import FacultySection from "@/components/Sections/FacultySection";
import FooterSection from "@/components/Sections/FooterSection";
import HeroSection from "@/components/Sections/HeroSection";
import MentorshipStatement from "@/components/Sections/MentorshipStatement";
import CoursesSection from "@/components/Sections/CoursesSection";
import SelectGoalSection from "@/components/Sections/SelectGoalSection";
import StudyResources from "@/components/Sections/StudyResources";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ValueHighlights from "@/components/Sections/ValueHighlights";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />

      {/* Select Goal Section - Navigation Aid */}
      <SelectGoalSection />

      {/* Alternating sections with visual rhythm */}
      <div className="relative">
        {/* Secondary background - light tint */}
        <div className="bg-section-secondary">
          <ValueHighlights />
        </div>

        {/* Primary background - white */}
        <div className="bg-section-primary section-divider">
          <CoursesSection />
        </div>

        {/* Tertiary background - subtle gradient */}
        <div className="bg-section-tertiary">
          <MentorshipStatement />
        </div>

        {/* Primary background - white */}
        <div className="bg-section-primary section-divider">
          <DirectorsDesk />
        </div>

        {/* Secondary background - light tint */}
        <div className="bg-section-secondary">
          <FacultySection />
        </div>

        {/* Tertiary background - subtle gradient */}
        <div className="bg-section-tertiary">
          <TestimonialsSection />
        </div>

        {/* Primary background - white */}
        <div className="bg-section-primary section-divider">
          <StudyResources />
        </div>

        {/* Secondary background - light tint */}
        <div className="bg-section-secondary">
          <AboutRISE />
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
