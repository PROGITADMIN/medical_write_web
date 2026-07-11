import Link from "next/link";

const footerColumns = [
  {
    heading: "MEMBERSHIP",
    links: [
      { label: "Individual Membership", href: "/membership/individual" },
      { label: "Student & Early Career", href: "/membership/student" },
      { label: "Organisational Membership", href: "/membership/organisational" },
      { label: "Team Membership", href: "/membership/team" },
      { label: "Member Benefits", href: "/membership/benefits" },
      { label: "Join Now", href: "/membership/apply" },
    ],
  },
  {
    heading: "LEARNING",
    links: [
      { label: "Learning Pathways", href: "/learning/pathways" },
      { label: "Professional Certificate", href: "/learning/certificate" },
      { label: "Courses & Workshops", href: "/learning/courses" },
      { label: "Webinars", href: "/learning/webinars" },
      { label: "Learning Passport", href: "/learning/passport" },
      { label: "Become a Contributor", href: "/learning/contribute" },
    ],
  },
  {
    heading: "COMMUNITY",
    links: [
      { label: "Practice Circles", href: "/community/circles" },
      { label: "Peer Labs", href: "/community/peer-labs" },
      { label: "Mentoring Programme", href: "/community/mentoring" },
      { label: "Career Navigator", href: "/career/navigator" },
      { label: "Job Board", href: "/career/jobs" },
      { label: "Expert Finder", href: "/career/expert-finder" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Knowledge Library", href: "/resources/library" },
      { label: "MedCom Review Journal", href: "/resources/journal" },
      { label: "Standards Studio", href: "/resources/standards" },
      { label: "Annual Congress", href: "/events/congress" },
      { label: "Digital Learning Week", href: "/events/digital-week" },
      { label: "Past Events", href: "/events/archive" },
    ],
  },
  {
    heading: "ABOUT US",
    links: [
      { label: "About MedWrite", href: "/about" },
      { label: "Mission & Values", href: "/about/mission" },
      { label: "Team & Governance", href: "/about/team" },
      { label: "News & Updates", href: "/about/news" },
      { label: "Get Involved", href: "/about/get-involved" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-root font-sans" style={{ background: "linear-gradient(to right, #064E3B, #022C22)", color: "#ffffff" }}>
      {/* ── Main content ── */}
      <div className="container-site" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">

          {/* Logo column */}
          <div className="lg:w-1/4 xl:w-1/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="font-display flex flex-col items-center mb-6 text-white text-decoration-none group">
               <div className="w-20 h-20 rounded-full border border-white/20 mb-4 flex items-center justify-center overflow-hidden bg-white/5 group-hover:bg-white/10 transition-colors">
                 <span className="text-5xl font-display italic leading-none pt-2 pr-1">M</span>
               </div>
               <span className="text-xl font-bold tracking-wider uppercase mb-1">MedWrite</span>
               <span className="text-[0.65rem] font-medium tracking-[0.2em] text-white/60">GLOBAL SOLUTIONS</span>
            </Link>
          </div>

          {/* Navigation columns */}
          <div className="lg:w-3/4 xl:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-4">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[0.85rem] font-bold tracking-wider mb-6 text-white uppercase">{col.heading}</h4>
                <ul className="flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-site">
        <div className="border-t border-white/10 pt-8 pb-12 flex flex-col xl:flex-row items-center justify-between gap-8">
          
          {/* Bottom Links separated by | */}
          <div className="flex flex-wrap justify-center xl:justify-start items-center text-[0.75rem] text-white/70 gap-x-4 gap-y-3 max-w-4xl">
            {[
              { label: "Sitemap", href: "#" },
              { label: "Terms & Conditions", href: "/legal" },
              { label: "Privacy Notice", href: "/legal" },
              { label: "Cookie Preferences", href: "/legal" },
              { label: "Whistleblowing Hotline", href: "#" },
              { label: "Modern Slavery Act", href: "#" },
              { label: "Vulnerability Disclosure", href: "#" },
              { label: "Code of Ethics", href: "#" },
            ].map((l, i) => (
              <div key={l.label} className="flex items-center gap-4">
                <Link href={l.href} className="hover:text-white transition-colors whitespace-nowrap">{l.label}</Link>
                {i !== 7 && <span className="text-white/20">|</span>}
              </div>
            ))}
          </div>
          
          {/* Socials on the right */}
          <div className="flex items-center gap-6 mt-2 xl:mt-0">
             <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-transform hover:scale-110">
               <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[18px] h-[18px]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
             <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white transition-transform hover:scale-110">
               <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[18px] h-[18px]"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </a>
             <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-transform hover:scale-110">
               <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[18px] h-[18px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
             <a href="#" aria-label="X" className="text-white/80 hover:text-white transition-transform hover:scale-110">
               <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[18px] h-[18px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
             </a>
             <a href="#" aria-label="YouTube" className="text-white/80 hover:text-white transition-transform hover:scale-110">
               <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-[18px] h-[18px]"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
             </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
