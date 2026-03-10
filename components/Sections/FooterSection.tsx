import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-slate-900 text-white relative overflow-hidden">
      {/* Full-width Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-slate-900 to-[#0F172A] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8">

        {/* Compact CTA Banner */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between bg-white/[0.04] p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Start Your <span className="text-[#F59E0B]">Rise</span>?
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Join a community where potential meets discipline. Let&apos;s build your future together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/enquire"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F59E0B] text-[#0F172A] font-bold rounded-xl hover:bg-[#d97706] transition-transform hover:scale-105 shadow-md"
            >
              Enquire Now
            </Link>
            <Link
              href="/faculty"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-colors"
            >
              Meet Our Faculty
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/RISE Logo.jpeg"
                alt="RISE"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight text-white">RISE</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Structured mentorship for long-term academic growth. Building confidence through patient guidance and consistent support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/courses" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Courses</Link></li>
              <li><Link href="/results" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Results</Link></li>
              <li><Link href="/faculty" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Faculty</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2.5">
              <li><Link href="/foundation-classes-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Foundation (Class 8-10)</Link></li>
              <li><Link href="/commerce-coaching-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Commerce (11-12)</Link></li>
              <li><Link href="/neet-coaching-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Medical (NEET)</Link></li>
              <li><Link href="/jee-coaching-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Engineering (JEE)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="tel:+919334332340" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-[#F59E0B]" />
                <span>+91 93343 323 40</span>
              </a>
              <a href="tel:+918252517726" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-[#F59E0B]" />
                <span>+91 82525 17726</span>
              </a>
              <Link href="/contact" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin size={16} className="text-[#F59E0B] mt-0.5 shrink-0" />
                <span>Visual Informatics, Doranda, Ranchi, 834002</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 RISE Institute. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
