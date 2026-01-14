import Link from "next/link";

/**
 * Premium Footer Component
 * Design: Clean, minimal, formal with structured information hierarchy
 */
export default function Footer() {
  return (
    <footer className="bg-accent-navy text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">RISE</h3>
            <p className="text-body-sm text-white/70 mb-4 leading-relaxed">
              Our Effort. Your Rise.
            </p>
            <p className="text-body-sm text-white/60 leading-relaxed">
              Premium coaching for JEE and NEET aspirants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/courses", label: "Courses" },
                { href: "/approach", label: "Teaching Approach" },
                { href: "/results", label: "Results" },
                { href: "/faculty", label: "Faculty" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/70 hover:text-white transition-smooth inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-body-sm text-white/70 hover:text-white transition-smooth inline-block"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-body-sm text-white/50">
                © {new Date().getFullYear()} RISE. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
