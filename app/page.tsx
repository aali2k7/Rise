import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best JEE & NEET Coaching | RISE Institute",
  description: "RISE helps students crack JEE and NEET with disciplined mentorship and concept mastery. Join the best coaching institute in Ranchi.",
  alternates: {
    canonical: "/",
  },
};



import DirectorsDesk from "@/components/Sections/DirectorsDesk";

import FooterSection from "@/components/Sections/FooterSection";
import HeroSection from "@/components/Sections/HeroSection";
import MentorshipStatement from "@/components/Sections/MentorshipStatement";
import CoursesSection from "@/components/Sections/CoursesSection";
import SelectGoalSection from "@/components/Sections/SelectGoalSection";
import StudentJourney from "@/components/Sections/StudentJourney";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import WhyChooseRise from "@/components/Sections/WhyChooseRise";

import MapSection from "@/components/Sections/MapSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />

      {/* Select Goal Section - Navigation Aid */}
      <SelectGoalSection />



      {/* Alternating sections with visual rhythm */}
      <div className="relative">
        {/* Warm beige wash */}
        <div id="about" className="bg-section-warm">
          <WhyChooseRise />
        </div>

        {/* Primary beige canvas */}
        <div className="bg-section-primary section-divider">
          <CoursesSection />
        </div>

        {/* Warm parchment tint */}
        <div className="bg-section-tertiary">
          <MentorshipStatement />
        </div>

        {/* Student Journey - warm sand wash */}
        <div className="bg-section-warm">
          <StudentJourney />
        </div>

        {/* Primary beige canvas */}
        <div className="bg-section-primary section-divider">
          <DirectorsDesk />
        </div>



        {/* Warm testimonial section */}
        <div className="bg-section-secondary">
          <TestimonialsSection />
        </div>

        {/* Map Section */}
        <MapSection />


      </div>

      <FooterSection />
    </div>
  );
}
