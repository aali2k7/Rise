import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-slate-900 text-white relative overflow-hidden">
      {/* Full-width Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-slate-900 to-[#0F172A] opacity-90" />

      <div className="relative z-10 content-container section-spacing pt-20 pb-12">

        {/* Main CTA Section (Before Links) */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your <span className="text-[#F59E0B]">Rise</span>?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Join a community where potential meets discipline. Let&apos;s build your academic future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] text-[#0F172A] text-lg font-bold rounded-xl hover:bg-[#d97706] transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Enquire Now
            </Link>
            <Link
              href="/faculty"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-600 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all"
            >
              Meet Our Faculty
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-700/50 pt-16">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              {/* RISE Logo */}
              <Image
                src="/brand/RISE Logo.jpeg"
                alt="RISE"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight">RISE</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Structured mentorship for long-term academic growth. Building confidence through patient guidance and consistent support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/courses" className="text-slate-400 hover:text-[#10B981] transition-colors">Courses</Link></li>
              <li><Link href="/results" className="text-slate-400 hover:text-[#10B981] transition-colors">Results</Link></li>
              <li><Link href="/faculty" className="text-slate-400 hover:text-[#10B981] transition-colors">Faculty</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="/#programs" className="text-slate-400 hover:text-[#10B981] transition-colors">Foundation (5–8)</Link></li>
              <li><Link href="/#programs" className="text-slate-400 hover:text-[#10B981] transition-colors">Boards (9–10)</Link></li>
              <li><Link href="/#programs" className="text-slate-400 hover:text-[#10B981] transition-colors">Medical (NEET)</Link></li>
              <li><Link href="/#programs" className="text-slate-400 hover:text-[#10B981] transition-colors">Engineering (JEE)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-4 text-slate-400">
              <a href="tel:+919334332340" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[#F59E0B]" />
                <span>+91 93343 323 40</span>
              </a>
              <a href="tel:+918252517726" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[#F59E0B]" />
                <span>+91 82525 17726</span>
              </a>
              <Link href="/contact" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin size={18} className="text-[#F59E0B] mt-1 shrink-0" />
                <span>Visual Informatics, Doranda, Ranchi, Jharkhand, 834002</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2025 RISE Institute. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
