import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RISE',
  description: 'Privacy Policy for Rise in Rise Institute, Doranda, Ranchi.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3C5E] mb-4 sm:mb-6 tracking-tight">
                Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                At <strong className="text-[#1A3C5E]">Rise in Rise, Doranda, Ranchi</strong>, we value your privacy and are committed to protecting the personal information of our students and parents. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
        </div>

        {/* Content Sheet */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] border border-slate-100/50">
            
            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">1</span>
                    Information We Collect
                </h2>
                <p className="text-slate-600 mb-4 font-medium">We may collect the following details:</p>
                <ul className="list-none space-y-3">
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3"></span>Student name, parent name</li>
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3"></span>Phone number, email address</li>
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3"></span>Class and academic details</li>
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3"></span>Address (if required for records)</li>
                </ul>
            </section>

            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">2</span>
                    How We Use Your Information
                </h2>
                <p className="text-slate-600 mb-4 font-medium">The information collected is used for:</p>
                <ul className="list-none space-y-3">
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>Student registration and admission</li>
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>Communication regarding classes, tests, and updates</li>
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>Academic performance tracking</li>
                    <li className="flex items-center text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>Sharing important notices and offers</li>
                </ul>
            </section>

            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">3</span>
                    Data Protection
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    We ensure that your personal data is secure and protected. We do not sell, trade, or share your information with third parties without your consent.
                </p>
            </section>

            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">4</span>
                    Communication
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    By providing your contact details, you agree to receive calls, messages, or WhatsApp updates related to classes, schedules, and important announcements.
                </p>
            </section>

            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">5</span>
                    Third-Party Sharing
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    We do not share your personal information with any external parties except when required by law.
                </p>
            </section>

            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">6</span>
                    Consent
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    By enrolling or submitting your details, you consent to our Privacy Policy.
                </p>
            </section>

            <section className="mb-10 lg:mb-12">
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">7</span>
                    Updates to Policy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    Rise in Rise reserves the right to update this policy at any time. Changes will be updated on our official platforms.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-[#1A3C5E] mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 text-sm font-black">8</span>
                    Contact Us
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                    For any queries regarding this Privacy Policy, you can contact us:
                </p>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-inner">
                    <div className="flex items-start mb-4">
                        <span className="mr-4 text-xl mt-0.5">📍</span> 
                        <span className="text-slate-700 font-medium leading-relaxed">
                            Park Lane, Beside Sri Krishna Park, <br className="hidden sm:block"/>
                            opposite Doranda College Road, <br className="hidden sm:block"/>
                            Doranda, Ranchi, Jharkhand 834002
                        </span>
                    </div>
                    <div className="flex items-start">
                        <span className="mr-4 text-xl mt-0.5">📞</span> 
                        <div className="flex flex-col text-slate-700 font-medium leading-relaxed">
                            <span>+91 82525 17726</span>
                            <span>+91 93343 32340</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
