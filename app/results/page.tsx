import { Metadata } from "next";
import ResultsContent from "@/components/Results/ResultsContent";

export const metadata: Metadata = {
  title: "Student Results & Testimonials | RISE",
  description: "See our proven track record in JEE and NEET. Read testimonials from students and parents about the RISE difference.",
};

export default function Results() {
  return <ResultsContent />;
}
