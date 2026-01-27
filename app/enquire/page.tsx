import { Metadata } from "next";
import EnquireContent from "@/components/Enquire/EnquireContent";

export const metadata: Metadata = {
    title: "Admission Enquiry | RISE",
    description: "Start your journey with RISE. Fill out the enquiry form for course details, admission process, and counseling.",
};

export default function Enquire() {
    return <EnquireContent />;
}
