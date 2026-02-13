import type { Metadata } from "next";
import MapSection from "@/components/Sections/MapSection";
import WhyRiseDoranda from "@/components/Sections/WhyRiseDoranda";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Coaching Institute in Doranda, Ranchi | Best Tuition Classes - RISE",
    description: "Looking for the best coaching in Doranda? RISE Institute offers expert tuition for JEE, NEET, Class 8-12, and Commerce. Located near Doranda College.",
    alternates: {
        canonical: "/coaching-in-doranda",
    },
    openGraph: {
        title: "Best Coaching Institute in Doranda",
        description: "Your local expert coaching center. Visit RISE today.",
    },
};

export default function DorandaLocationPage() {
    const localTestimonials = [
        {
            text: "We live in Hinoo and sending my daughter to RISE Doranda was the best decision. It's safe, nearby, and the quality of education is better than Lalpur coaching centers.",
            author: "Mrs. Sharma (Hinoo)",
            year: "Parent"
        },
        {
            text: "I travel from Dhurwa. The location is very accessible. The teachers are always available for doubts.",
            author: "Rohan Kumar",
            year: "Class 11 Student"
        },
        {
            text: "Finally a good institute in Doranda. No need to waste 2 hours travelling to other parts of Ranchi.",
            author: "Mr. Ansari",
            year: "Parent"
        }
    ];

    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Premium Coaching in <span className="text-yellow-400">Doranda, Ranchi</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        World-class education right in your neighborhood.
                        Save travel time, focus on studies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg flex items-center gap-2 border border-white/20">
                            <MapPin className="w-5 h-5 text-yellow-400" />
                            <span>Near Doranda College, Ranchi</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg flex items-center gap-2 border border-white/20">
                            <Phone className="w-5 h-5 text-yellow-400" />
                            <span>+91 82525 17726</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Doranda Section REUSED */}
            <WhyRiseDoranda />

            {/* Directions & Info */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Reach Us</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Navigation className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">From Hinoo / Airport</h3>
                                    <p className="text-slate-600">Take the Doranda Main Road towards Doranda College. We are located 500m before the college gate.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Navigation className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">From Railway Station</h3>
                                    <p className="text-slate-600">5-minute auto ride. Ask for Doranda College stop.</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl mt-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-6 h-6 text-blue-700" />
                                    <h3 className="font-bold text-blue-900">Office Hours</h3>
                                </div>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex justify-between"><span>Monday - Saturday:</span> <span className="font-bold">9:00 AM - 8:00 PM</span></li>
                                    <li className="flex justify-between"><span>Sunday:</span> <span className="font-bold">10:00 AM - 2:00 PM</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://maps.google.com/maps?q=Doranda,Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Map Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            <TestimonialsSection testimonials={localTestimonials} />

            {/* Final Call to Action */}
            <div className="bg-slate-900 text-white text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Visit Our Campus Today</h2>
                <p className="mb-6 opacity-80">Experience the best learning environment in Ranchi.</p>
                <a href="tel:+918252517726" className="inline-block bg-yellow-500 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
                    Call Now for Directions
                </a>
            </div>
        </main>
    );
}
