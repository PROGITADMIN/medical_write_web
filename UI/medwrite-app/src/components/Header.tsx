import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)] border-b border-black/5">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-[var(--foreground)]">MedWrite</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--foreground)]/80">
          <Link href="/about" className="hover:text-[var(--foreground)] transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-[var(--foreground)] transition-colors">Services</Link>
          <Link href="/membership" className="hover:text-[var(--foreground)] transition-colors">Membership</Link>
          <Link href="/education" className="hover:text-[var(--foreground)] transition-colors">Education</Link>
          <Link href="/career" className="hover:text-[var(--foreground)] transition-colors">Career</Link>
          <Link href="/resources" className="hover:text-[var(--foreground)] transition-colors">Resources</Link>
          <Link href="/community" className="hover:text-[var(--foreground)] transition-colors">Community</Link>
          <Link href="/news" className="hover:text-[var(--foreground)] transition-colors">News</Link>
          <Link href="/contact" className="hover:text-[var(--foreground)] transition-colors">Contact Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:inline-flex text-sm font-medium hover:underline text-[var(--foreground)]">
            Login
          </Link>
          <Link href="/join" className="inline-flex h-10 items-center justify-center rounded-sm bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
