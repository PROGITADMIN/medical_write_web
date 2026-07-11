"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ── Nav hierarchy data ───────────────────────────────────────── */
const navItems = [
  {
    label: "About Us",
    href: "/about",
    columns: [
      {
        heading: "Organisation",
        links: [
          { label: "About MedWrite Global Solutions", href: "/about", desc: "Our mission, model and governance" },
          { label: "Mission & Values", href: "/about/story", desc: "What we stand for and why it matters" },
          { label: "Team & Governance", href: "/about/team", desc: "The people who lead and support the network" },
          { label: "Local Chapters", href: "/community/chapters", desc: "Find your regional community" },
        ],
      },
      {
        heading: "Transparency",
        links: [
          { label: "Governance, Conduct & Policies", href: "/legal", desc: "Our standards and commitments" },
          { label: "News & Updates", href: "/news", desc: "What is happening across the network" },
          { label: "Get Involved", href: "/get-involved", desc: "Volunteer, contribute and lead" },
          { label: "Partnerships & Sponsors", href: "/partner", desc: "How we work with partners" },
        ],
      },
    ],
    cta: { label: "Read our mission", href: "/about/story", color: "teal" },
  },
  {
    label: "Membership",
    href: "/membership",
    columns: [
      {
        heading: "Join",
        links: [
          { label: "Membership Hub", href: "/membership", desc: "Overview of all membership routes" },
          { label: "Individual Membership", href: "/membership/individual", desc: "For professionals at every career stage" },
          { label: "Student & Early Career", href: "/membership/student", desc: "Accessible entry for those starting out" },
          { label: "Organisational Membership", href: "/membership/organisational", desc: "For employers and healthcare organisations" },
        ],
      },
      {
        heading: "Value",
        links: [
          { label: "Team Membership", href: "/membership/team", desc: "Bring your whole team into the network" },
          { label: "Member Benefits", href: "/membership/benefits", desc: "Full list of what membership includes" },
          { label: "Membership Application", href: "/checkout", desc: "Start your membership today" },
          { label: "Member Account", href: "/dashboard", desc: "Manage your profile and settings" },
        ],
      },
    ],
    cta: { label: "Join MedWrite Global Solutions", href: "/checkout", color: "coral" },
  },
  {
    label: "Learning",
    href: "/learning",
    columns: [
      {
        heading: "Programmes",
        links: [
          { label: "Learning Hub", href: "/learning", desc: "All learning routes in one place" },
          { label: "Learning Pathways", href: "/learning/pathways", desc: "Structured routes matched to your goals" },
          { label: "Professional Certificate", href: "/learning/certificate", desc: "Framework for recognised development" },
          { label: "Courses & Workshops", href: "/learning/courses", desc: "Practical sessions led by experienced professionals" },
        ],
      },
      {
        heading: "Formats",
        links: [
          { label: "Webinars", href: "/learning/webinars", desc: "Short, useful learning for a changing profession" },
          { label: "Become a Learning Contributor", href: "/learning/contribute", desc: "Share your expertise with the community" },
          { label: "Learning Passport", href: "/learning/passport", desc: "Track and showcase your development" },
          { label: "Course Detail", href: "/learning/courses", desc: "Find sessions that fit your schedule" },
        ],
      },
    ],
    cta: { label: "Browse learning", href: "/learning", color: "lilac" },
  },
  {
    label: "Community",
    href: "/community",
    columns: [
      {
        heading: "Connect",
        links: [
          { label: "Community Hub", href: "/community", desc: "Your gateway to peer connection" },
          { label: "Practice Circles", href: "/community/circles", desc: "Specialist groups around shared work interests" },
          { label: "Local Chapters", href: "/community/chapters", desc: "Regional events and connections" },
          { label: "Discussion Boards", href: "/community/boards", desc: "Thoughtful conversation on professional questions" },
        ],
      },
      {
        heading: "Grow",
        links: [
          { label: "Peer Labs", href: "/community/peer-labs", desc: "Small-group work-in-progress sessions" },
          { label: "Member Stories", href: "/community/stories", desc: "Perspectives from across the community" },
          { label: "Mentoring Programme", href: "/community/mentoring", desc: "Structured one-to-one professional support" },
          { label: "Expert Finder", href: "/career/experts", desc: "Find or become a listed independent expert" },
        ],
      },
    ],
    cta: { label: "Explore community", href: "/community", color: "teal" },
  },
  {
    label: "Career Centre",
    href: "/career",
    columns: [
      {
        heading: "Develop",
        links: [
          { label: "Career Navigator", href: "/career/navigator", desc: "Practical guidance for your next step" },
          { label: "Job Board", href: "/career/jobs", desc: "Search roles across medical communication" },
          { label: "Independent Practice Hub", href: "/career/independent", desc: "Support for consultants and freelancers" },
          { label: "Expert Finder", href: "/career/experts", desc: "Transparent directory with privacy controls" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Career Guides", href: "/career/navigator", desc: "Original articles on skills and transitions" },
          { label: "Downloadable Tools", href: "/career/navigator", desc: "CV tracker, portfolio review, planner" },
          { label: "Post a Job", href: "/contact", desc: "Reach qualified medical communicators" },
          { label: "Volunteer Opportunities", href: "/get-involved/volunteer", desc: "Contribute your time and expertise" },
        ],
      },
    ],
    cta: { label: "Explore careers", href: "/career", color: "coral" },
  },
  {
    label: "Resources",
    href: "/knowledge/library",
    columns: [
      {
        heading: "Knowledge",
        links: [
          { label: "Knowledge Library", href: "/knowledge/library", desc: "Practical guides on core topics" },
          { label: "MedCom Review Journal", href: "/knowledge/journal", desc: "Thoughtful editorial for the profession" },
          { label: "Standards Studio", href: "/knowledge/standards", desc: "Shared guidance for responsible practice" },
          { label: "Resource Library", href: "/knowledge/library", desc: "Templates, checklists and curated references" },
        ],
      },
      {
        heading: "Contribute",
        links: [
          { label: "Book & Tool Reviews", href: "/knowledge/reviews", desc: "Practical reviews focused on usefulness" },
          { label: "Contribute to Knowledge", href: "/knowledge/contribute", desc: "Write an article or suggest a resource" },
          { label: "Article Detail", href: "/knowledge/journal", desc: "Long-form analysis and professional insight" },
          { label: "Suggest a Resource", href: "/knowledge/contribute", desc: "Help us build a better library" },
        ],
      },
    ],
    cta: { label: "Browse resources", href: "/knowledge/library", color: "lilac" },
  },
  {
    label: "Events",
    href: "/events",
    columns: [
      {
        heading: "Attend",
        links: [
          { label: "Events Hub", href: "/events", desc: "All upcoming events and programmes" },
          { label: "Annual MedCom Congress", href: "/events/congress", desc: "Our flagship in-person and hybrid event" },
          { label: "Digital Learning Week", href: "/events/digital-week", desc: "A week of focused online learning" },
          { label: "Regional & Community Events", href: "/events/regional", desc: "Smaller, local and online gatherings" },
        ],
      },
      {
        heading: "Archive",
        links: [
          { label: "Event Detail & Booking", href: "/events/congress", desc: "Find full programme and book your place" },
          { label: "Past Events & Archives", href: "/events/archives", desc: "Past programmes and selected resources" },
          { label: "Host an Event", href: "/events/regional", desc: "Propose a local or online gathering" },
          { label: "Partner with Us", href: "/partner", desc: "Commercial and exhibition opportunities" },
        ],
      },
    ],
    cta: { label: "View all events", href: "/events", color: "teal" },
  },
];

const ctaColors: Record<string, string> = {
  teal:  "bg-[#00B4C5] hover:bg-[#0099AA] text-white",
  coral: "bg-[#F26A4B] hover:bg-[#d45030] text-white",
  lilac: "bg-[#8B75D7] hover:bg-[#7060c0] text-white",
};

/* ── Component ────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Inline styles for Theraflow navbar (CSS-only hover, no JS event handlers) */}
      <style>{`
        .tf-nav-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: linear-gradient(to right, #064E3B, #022C22);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          transition: box-shadow 0.3s;
        }
        .tf-nav-header.scrolled {
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .tf-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #ffffff;
          border-radius: 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.15s;
        }
        .tf-nav-btn:hover, .nav-item:hover .tf-nav-btn {
          background: transparent;
          color: rgba(255,255,255,0.7);
        }
        .tf-nav-chevron {
          width: 0.875rem;
          height: 0.875rem;
          color: currentColor;
          transition: transform 0.2s;
          flex-shrink: 0;
          opacity: 0.7;
        }
        .nav-item:hover .tf-nav-chevron {
          transform: rotate(180deg);
          color: #777777;
        }
        .tf-search-btn {
          width: 2.25rem;
          height: 2.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.9);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .tf-search-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #ffffff;
        }
        .tf-dropdown-link {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.7rem 0.875rem;
          border-radius: 0.625rem;
          text-decoration: none;
          transition: background 0.15s, box-shadow 0.15s;
          position: relative;
        }
        .tf-dropdown-link:hover {
          background: rgba(255,255,255,0.85);
          box-shadow: 0 2px 12px rgba(45,35,25,0.07);
        }
        .tf-dropdown-link-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 0.5rem;
          background: var(--cream-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.8rem;
          transition: background 0.15s;
        }
        .tf-dropdown-link:hover .tf-dropdown-link-icon {
          background: var(--brown-dark);
          color: #fff;
        }
        .tf-dropdown-link-text { flex: 1; min-width: 0; }
        .tf-dropdown-link-title {
          font-size: 0.8375rem;
          font-weight: 600;
          color: var(--brown-dark);
          transition: color 0.15s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .tf-dropdown-link-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.15s, transform 0.15s;
          font-size: 0.75rem;
          color: var(--brown-mid);
        }
        .tf-dropdown-link:hover .tf-dropdown-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .tf-dropdown-link-desc {
          font-size: 0.73rem;
          color: var(--text-muted);
          margin-top: 0.1rem;
          line-height: 1.45;
        }
        .tf-mobile-item-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--brown-dark);
          border-radius: 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
        }
        .tf-mobile-item-btn:hover { background: var(--cream-dark); }
        .tf-mobile-sub-link {
          display: block;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--brown-text);
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background 0.15s;
        }
        .tf-mobile-sub-link:hover { background: var(--cream-dark); }
      `}</style>

      <header ref={navRef} className={`tf-nav-header ${scrolled ? "scrolled" : ""}`}>
        <nav style={{ height: "72px", display: "flex", alignItems: "center", gap: "0", width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "0 2rem" }}>

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center flex-shrink-0" style={{ textDecoration: "none", gap: "0.2rem", marginRight: "1rem" }}>
            <span
              className="font-display leading-none tracking-tight"
              style={{ fontSize: "1.35rem", color: "#ffffff", whiteSpace: "nowrap" }}
            >
              MedWrite
            </span>
            <span
              className="font-display leading-none tracking-tight"
              style={{ fontSize: "1.35rem", color: "rgba(255,255,255,0.7)", fontStyle: "italic", whiteSpace: "nowrap" }}
            >
              Global Solutions
            </span>
          </Link>

          {/* ── Desktop Nav — flex, fills remaining space ── */}
          <ul
            className="hidden lg:flex items-center list-none"
            style={{ flex: 1, gap: "0", justifyContent: "center" }}
          >
            {navItems.map((item) => (
              <li key={item.label} className="nav-item relative group">
                <button className="tf-nav-btn">
                  {item.label}
                </button>

                {/* Mega Dropdown — redesigned */}
                <div className="mega-dropdown" style={{ minWidth: "480px", maxWidth: "480px" }}>
                  {/* Two-column layout: unified background */}
                  <div style={{ display: "flex", minHeight: "0", background: "#ffffff" }}>

                    {/* ── LEFT: Column A ── */}
                    <div
                      style={{
                        flex: 1,
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.125rem",
                        borderRight: "1px solid rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Column A heading */}
                      <p
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--text-light)",
                          marginBottom: "0.5rem",
                          paddingBottom: "0.4rem",
                          borderBottom: "1px solid rgba(45,35,25,0.1)",
                        }}
                      >
                        {item.columns[0].heading}
                      </p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
                        {item.columns[0].links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="tf-dropdown-link" style={{ padding: "0.45rem 0.6rem", gap: "0.5rem" }}>
                              <div className="tf-dropdown-link-icon" style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.375rem" }}>
                                <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                              <div className="tf-dropdown-link-text">
                                <span className="tf-dropdown-link-title" style={{ fontSize: "0.775rem" }}>
                                  {link.label}
                                  <span className="tf-dropdown-link-arrow">→</span>
                                </span>
                                <span className="tf-dropdown-link-desc" style={{ fontSize: "0.67rem" }}>{link.desc}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ── RIGHT: Column B ── */}
                    <div style={{ flex: 1, padding: "1rem", background: "#ffffff", display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                      {/* Column B heading */}
                      <p
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--text-light)",
                          marginBottom: "0.5rem",
                          paddingBottom: "0.4rem",
                          borderBottom: "1px solid var(--cream-dark)",
                        }}
                      >
                        {item.columns[1]?.heading}
                      </p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
                        {item.columns[1]?.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="tf-dropdown-link" style={{ padding: "0.45rem 0.6rem", gap: "0.5rem" }}>
                              <div className="tf-dropdown-link-icon" style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.375rem" }}>
                                <svg width="8" height="8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                              <div className="tf-dropdown-link-text">
                                <span className="tf-dropdown-link-title" style={{ fontSize: "0.775rem" }}>
                                  {link.label}
                                  <span className="tf-dropdown-link-arrow">→</span>
                                </span>
                                <span className="tf-dropdown-link-desc" style={{ fontSize: "0.67rem" }}>{link.desc}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ── CTA strip ── */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1rem",
                      background: "#F8F9FA",
                      borderTop: "1px solid rgba(0,0,0,0.04)",
                      borderBottomLeftRadius: "0.75rem",
                      borderBottomRightRadius: "0.75rem",
                    }}
                  >
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: 0, fontWeight: 500 }}>
                      Need help finding the right page?
                    </p>
                    <Link
                      href={item.cta.href}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "0.3rem 0.8rem",
                        borderRadius: "3rem",
                        background: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "var(--brown-text)",
                        textDecoration: "none",
                        transition: "background 0.15s, box-shadow 0.15s",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.cta.label} →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* ── Right Actions ── */}
          <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: "1rem", marginLeft: "1.5rem" }}>
            <button id="search-btn" aria-label="Search" className="tf-search-btn">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <Link href="/signin" id="signin-btn" style={{ fontSize: "0.95rem", fontWeight: 500, color: "#ffffff", textDecoration: "none" }}>
              Sign In
            </Link>
            <Link href="/membership/apply" id="join-btn" style={{ 
              fontSize: "0.95rem", 
              fontWeight: 500, 
              padding: "0.6rem 1.5rem", 
              background: "#ffffff", 
              color: "#064E3B",
              borderRadius: "0.25rem",
              textDecoration: "none",
              whiteSpace: "nowrap" 
            }}>
              Join Now
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden hamburger flex flex-col gap-1.5 p-2 ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff" }} />
            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff" }} />
            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff" }} />
          </button>
        </nav>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t shadow-xl max-h-[85vh] overflow-y-auto"
            style={{ background: "var(--cream)", borderColor: "var(--cream-dark)" }}
          >
            <div className="container-site py-4 space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b last:border-0"
                  style={{ borderColor: "var(--cream-dark)" }}
                >
                  <button
                    className="tf-mobile-item-btn"
                    onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      style={{ color: "var(--text-light)", flexShrink: 0 }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pb-3 pl-3">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="mt-3">
                          <p
                            className="text-[0.7rem] font-bold uppercase tracking-widest px-3 mb-1"
                            style={{ color: "var(--text-light)" }}
                          >
                            {col.heading}
                          </p>
                          {col.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="tf-mobile-sub-link"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className="mt-3 px-3">
                        <Link
                          href={item.cta.href}
                          className={`inline-flex text-sm font-medium px-4 py-2 rounded-full transition-all ${ctaColors[item.cta.color]}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.cta.label} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-4 pb-2 flex flex-col gap-3">
                <Link href="/signin" className="btn-secondary text-center" onClick={() => setMobileOpen(false)}>
                  Sign In
                </Link>
                <Link href="/membership/apply" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
                  Join MedWrite Global Solutions
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
