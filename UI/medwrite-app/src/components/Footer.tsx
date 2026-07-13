import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] py-12 md:py-16 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[var(--accent)]">MedWrite</span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              MedWrite Global Solutions — Advancing Medical Communication Worldwide.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <Link href="/" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Home</Link>
            <Link href="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">About Us</Link>
            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Services</Link>
            <Link href="/membership" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Membership</Link>
            <Link href="/education" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Education</Link>
            <Link href="/career" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Career</Link>
            <Link href="/resources" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Resources</Link>
            <Link href="/community" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Events</Link>
            <Link href="/news" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">News</Link>
            <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Contact</Link>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Member Area</h4>
            <Link href="/login" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Login</Link>
            <Link href="/account" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">My Account</Link>
            <Link href="/membership" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Member Benefits</Link>
            <Link href="/renew" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors">Renew Membership</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Contact Info</h4>
            <span className="text-sm opacity-80">Email: info@medwriteglobal.com</span>
            <span className="text-sm opacity-80">Tel: +44 20 1234 5678</span>
            <span className="text-sm opacity-80">Address: 123 Global Professional Way, London, UK</span>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--background)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2025 MedWrite Global Solutions. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:opacity-100 hover:text-[var(--accent)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 hover:text-[var(--accent)]">Terms & Conditions</Link>
            <Link href="/cookies" className="hover:opacity-100 hover:text-[var(--accent)]">Cookie Policy</Link>
            <Link href="/sitemap" className="hover:opacity-100 hover:text-[var(--accent)]">Sitemap</Link>
          </div>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <span className="hover:opacity-100 hover:text-[var(--accent)] cursor-pointer">LinkedIn</span>
            <span className="hover:opacity-100 hover:text-[var(--accent)] cursor-pointer">Twitter/X</span>
            <span className="hover:opacity-100 hover:text-[var(--accent)] cursor-pointer">YouTube</span>
            <span className="hover:opacity-100 hover:text-[var(--accent)] cursor-pointer">Facebook</span>
            <span className="hover:opacity-100 hover:text-[var(--accent)] cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
