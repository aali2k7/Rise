import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-slate-900 to-[#0F172A] opacity-90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="mb-8 sm:mb-12 flex flex-col lg:flex-row items-center justify-between bg-white/[0.04] p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Ready to Start Your <span className="text-[#F59E0B]">Rise</span>?</h2>
            <p className="text-slate-400 text-sm md:text-[1rem]">Join a community where potential meets discipline. Let&apos;s build your future together.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/enquire" className="inline-flex items-center justify-center px-6 py-3 bg-[#F59E0B] text-[#0F172A] font-bold rounded-xl hover:bg-[#d97706] transition-transform hover:scale-105 shadow-md">Enquire Now</Link>
            <a href="https://wa.me/917781073369?text=Hi%2C%20I%20want%20to%20know%20more%20about%20admissions%20at%20Rise%20In%20Rise%20Institute." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1fba58] transition-colors shadow-md">WhatsApp Us</a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/brand/RISE Logo.jpeg" alt="Rise In Rise Institute" width={36} height={36} className="rounded-lg" />
              <span className="text-lg font-bold tracking-tight text-white leading-tight">Rise In Rise<br /><span className="text-xs font-normal text-slate-400">Institute</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">Focus · Discipline · Success. Expert coaching for JEE, NEET, Foundation & Commerce in Doranda, Ranchi since 1999.</p>
            <div className="flex gap-3 pt-1">
              <a href="https://www.instagram.com/riseinriseinstitute" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors text-xs font-semibold">Instagram</a>
              <a href="https://www.facebook.com/riseinriseinstitute" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-xs font-semibold">Facebook</a>
              <a href="https://www.youtube.com/@riseinriseinstitute" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-400 transition-colors text-xs font-semibold">YouTube</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/courses" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Courses</Link></li>
              <li><Link href="/results" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Results</Link></li>
              <li><Link href="/faculty" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Faculty</Link></li>
              <li><Link href="/approach" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Our Approach</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2.5">
              <li><Link href="/foundation-classes-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Foundation (Class 6-10)</Link></li>
              <li><Link href="/jee-coaching-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Engineering (JEE)</Link></li>
              <li><Link href="/neet-coaching-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Medical (NEET)</Link></li>
              <li><Link href="/commerce-coaching-ranchi" className="text-sm text-slate-400 hover:text-[#10B981] transition-colors">Commerce (11-12)</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="tel:+917781073369" className="flex items-center gap-3 hover:text-white transition-colors"><Phone size={16} className="text-[#F59E0B]" /><span>+91 77810 73369</span></a>
              <a href="tel:+918252517726" className="flex items-center gap-3 hover:text-white transition-colors"><Phone size={16} className="text-[#F59E0B]" /><span>+91 82525 17726</span></a>
              <div className="flex items-start gap-3"><MapPin size={16} className="text-[#F59E0B] mt-0.5 shrink-0" /><span>Park Lane, beside Sri Krishna Park, opposite Doranda College, Ranchi - 834002</span></div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Rise In Rise Institute. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}