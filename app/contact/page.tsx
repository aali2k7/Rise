"use client";

/**
 * Contact Page
 * Intent: Physical presence, trust, reachability.
 * No forms, just direct contact methods.
 */
export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A3C5E] mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            We are here to answer your questions. <br className="hidden md:block" />
            Reach out to us directly or visit our campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT COLUMN: PHONE NUMBERS & ADDRESS */}
          <div className="flex flex-col gap-12">

            {/* Phone Numbers */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-[#1A3C5E] mb-8">
                Call Us
              </h2>
              <div className="flex flex-col gap-6">
                <a
                  href="tel:+919334332340"
                  className="text-3xl md:text-4xl font-bold text-[#1A3C5E] hover:text-[#059669] transition-colors tracking-tight"
                >
                  +91 93343 323 40
                </a>
                <a
                  href="tel:+918552517726"
                  className="text-3xl md:text-4xl font-bold text-[#1A3C5E] hover:text-[#059669] transition-colors tracking-tight"
                >
                  +91 85525 177 26
                </a>
              </div>
              <p className="mt-8 text-slate-500 font-medium">
                Available Mon-Sat, 9:00 AM — 7:00 PM
              </p>
            </div>

            {/* Address */}
            <div className="px-4 md:px-0 text-center lg:text-left">
              <h3 className="text-lg font-semibold text-[#1A3C5E] mb-4 uppercase tracking-wider">
                Visit Campus
              </h3>
              <address className="text-lg text-slate-600 not-italic leading-relaxed">
                Park Ln, beside Sri Krishna Park,<br />
                opposite Doranda College Road,<br />
                Darzee Mohalla, Shyamali Colony,<br />
                Doranda, Ranchi, Jharkhand 834002
              </address>
            </div>
          </div>

          {/* RIGHT COLUMN: GOOGLE MAP */}
          <div className="h-[400px] md:h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.431249374942!2d85.3189629!3d23.3363858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1ca0008d2e7%3A0x939448a2982e890!2sVISUAL%20INFORMATICS!5e0!3m2!1sen!2sin!4v1768804122077!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RISE Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
