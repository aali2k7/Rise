"use client";
export default function MapSection() {
    return (
        <section className="py-0 relative z-0">
            <div className="w-full h-[400px] bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe src="https://maps.google.com/maps?q=Rise+In+Rise+Institute,+Park+Lane,+Doranda,+Ranchi,+Jharkhand+834002&t=&z=17&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Rise In Rise Institute Location - Park Lane, Doranda, Ranchi"></iframe>
            </div>
            <div className="bg-blue-900 text-white py-8 px-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Visit Rise In Rise Institute</h3>
                <p className="opacity-90">Park Lane, beside Sri Krishna Park, opposite Doranda College, Ranchi - 834002</p>
                <div className="flex items-center justify-center gap-6 mt-3 flex-wrap">
                    <a href="tel:+917781073369" className="font-mono text-yellow-400 hover:text-yellow-300 transition-colors">+91 77810 73369</a>
                    <a href="tel:+918252517726" className="font-mono text-yellow-400 hover:text-yellow-300 transition-colors">+91 82525 17726</a>
                </div>
            </div>
        </section>
    );
}