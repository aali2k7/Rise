"use client";

import { MapPin, Building2, TrainFront, School } from "lucide-react";

export default function WhyRiseDoranda() {
    const landmarks = [
        {
            icon: <School className="w-6 h-6 text-orange-500" />,
            title: "Near Doranda College",
            description: "Just a 5-minute walk for college students seeking JEE/NEET prep.",
        },
        {
            icon: <TrainFront className="w-6 h-6 text-blue-600" />,
            title: "Accessible from Railway Station",
            description: "Easy commute for students coming from outside Ranchi.",
        },
        {
            icon: <Building2 className="w-6 h-6 text-emerald-600" />,
            title: "Located in Hinoo & Argora Hub",
            description: "Central educational hub for students in South Ranchi.",
        },
        {
            icon: <MapPin className="w-6 h-6 text-indigo-600" />,
            title: "Serving All of Ranchi",
            description: "The preferred choice for serious aspirants across Jharkhand.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Why Choose RISE in <span className="text-blue-700">Doranda, Ranchi?</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Conveniently located in the heart of Ranchi&apos;s educational district, providing world-class coaching to local students.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {landmarks.map((landmark, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                {landmark.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">{landmark.title}</h3>
                            <p className="text-slate-600 text-sm">{landmark.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
