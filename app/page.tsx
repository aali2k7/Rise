"use client";

import AboutRISE from "@/components/Sections/AboutRISE";
import DirectorsDesk from "@/components/Sections/DirectorsDesk";
import FacultySection from "@/components/Sections/FacultySection";
import FooterSection from "@/components/Sections/FooterSection";
import HeroSection from "@/components/Sections/HeroSection";
import MentorshipStatement from "@/components/Sections/MentorshipStatement";
import ProgramsSection from "@/components/Sections/ProgramsSection";
import StudyResources from "@/components/Sections/StudyResources";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ValueHighlights from "@/components/Sections/ValueHighlights";

/**
 * Premium Homepage
 * Design: Bold hero, structured sections, elegant cards, formal aesthetic
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueHighlights />
      <ProgramsSection />
      <MentorshipStatement />
      <DirectorsDesk />
      <FacultySection />
      <TestimonialsSection />
      <StudyResources />
      <AboutRISE />
      <FooterSection />
    </>
  );
}
