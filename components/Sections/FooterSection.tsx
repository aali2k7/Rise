import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-[#0B1120] text-white">
      <div className="content-container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">RISE</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Structured mentorship for long-term academic growth.
              Building confidence through patient guidance and consistent support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faculty" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#about-rise" className="text-sm text-slate-300 hover:text-white transition-colors">
                  About RISE
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-300">For Enquiries:</p>
                <a href="tel:+919334332340" className="text-sm text-white hover:text-[#74B49B] transition-colors">
                  +91 93343 323 40
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-300">For Admissions:</p>
                <a href="tel:+919334332340" className="text-sm text-white hover:text-[#74B49B] transition-colors">
                  +91 93343 323 40
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/enquire"
                  className="inline-block px-4 py-2 bg-[#F4A261] text-[#1A3C5E] text-sm font-medium rounded hover:bg-[#F4A261]/90 transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2025 RISE Institute. All rights reserved.
            </p>
            <p className="text-sm text-slate-400">
              Building academic confidence through structured mentorship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
