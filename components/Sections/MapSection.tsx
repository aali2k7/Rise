"use client";

export default function MapSection() {
    return (
        <section className="py-0 relative z-0">
            <div className="w-full h-[400px] bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://maps.google.com/maps?q=Doranda,Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RISE Coaching Institute Location"
                ></iframe>
            </div>
            <div className="bg-blue-900 text-white py-8 px-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Visit RISE Coaching Institute</h3>
                <p className="opacity-90">Doranda, Ranchi, Jharkhand 834002</p>
                <p className="font-mono mt-2 text-yellow-400">+91 82525 17726</p>
            </div>
        </section>
    );
}
