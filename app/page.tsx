import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best JEE & NEET Coaching | RISE Institute",
  description: "RISE helps students crack JEE and NEET with disciplined mentorship and concept mastery. Join the best coaching institute in Ranchi.",
};


import DirectorsDesk from "@/components/Sections/DirectorsDesk";

import FooterSection from "@/components/Sections/FooterSection";
import HeroSection from "@/components/Sections/HeroSection";
import MentorshipStatement from "@/components/Sections/MentorshipStatement";
import CoursesSection from "@/components/Sections/CoursesSection";
import SelectGoalSection from "@/components/Sections/SelectGoalSection";
import StudyResources from "@/components/Sections/StudyResources";
import StudentJourney from "@/components/Sections/StudentJourney";
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

        {/* Student Journey - Flow after Philosophy */}
        <div className="bg-section-secondary">
          <StudentJourney />
        </div>

        {/* Primary background - white */}
        <div className="bg-section-primary section-divider">
          <DirectorsDesk />
        </div>



        {/* Tertiary background - subtle gradient */}
        <div className="bg-section-tertiary">
          <TestimonialsSection />
        </div>

        {/* Primary background - white */}
        <div className="bg-section-primary section-divider">
          <StudyResources />
        </div>


      </div>

      <FooterSection />
    </div>
  );
}
