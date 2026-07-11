import Link from "next/link";
import type { Metadata } from "next";
import { PenTool, ShieldCheck, BookOpen, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import SectionLayout from "@/components/Shared/SectionLayout";

export const metadata: Metadata = {
  title: "MedWrite Global Solutions — Professional Network for Medical Communicators",
  description:
    "Join a member-driven professional network for medical writers, editors, publication professionals and regulatory communicators. Learning, community, career support and standards — all in one place.",
};

/* ── Static data ───────────────────────────────────────────── */

const stats = [
  { value: "12,000+", label: "Members worldwide" },
  { value: "56",      label: "Website sections & resources" },
  { value: "200+",    label: "Courses & workshops" },
  { value: "40+",     label: "Countries represented" },
];

const services = [
  { label: "Medical Writing",        image: "/medical_writing_card_1783766192188.png",  href: "/community/circles" },
  { label: "Publication Practice",   image: "/publication_practice_card_1783766204797.png",  href: "/learning/pathways" },
  { label: "Regulatory Writing",     image: "/regulatory_writing_card_1783766216153.png",  href: "/career/navigator" },
  { label: "Medical Affairs",        image: "/medical_affairs_card_1783766227951.png",  href: "/community/circles" },
  { label: "Evidence Communication", image: "/evidence_communication_card_1783766249214.png",  href: "/knowledge/library" },
  { label: "Patient Information",    image: "/patient_information_card_1783766261810.png",  href: "/learning/pathways" },
  { label: "AI & Digital Tools",     image: "/ai_digital_tools_card_1783766273604.png",  href: "/knowledge/standards" },
  { label: "Career Development",     image: "/career_development_card_1783766283611.png",  href: "/career" },
];

const features = [
  {
    image: "/feature_certificate_1783369053816.png",
    tag: "LEARN",
    tagColor: "text-[#F26A4B] bg-[#FEF0EC]",
    title: "Professional Certificate",
    desc: "A flexible, evidence-based framework for recognising your development. Build your Learning Passport, work through practical pathways and earn a certificate that reflects real professional growth.",
    link: "/learning/certificate",
  },
  {
    image: "/feature_circles_1783369126840.png",
    tag: "CONNECT",
    tagColor: "text-[#00B4C5] bg-[#E0F9FB]",
    title: "Practice Circles",
    desc: "Specialist peer groups for writers, editors, regulatory communicators and patient-information specialists. Participate in live discussions, peer labs and collaborative problem-solving.",
    link: "/community/circles",
  },
  {
    image: "/feature_standards_1783369149176.png",
    tag: "TRUSTED",
    tagColor: "text-[#8B75D7] bg-[#F0ECFF]",
    title: "Standards Studio",
    desc: "Shared guidance on transparency, authorship, accessible content, quality review and the responsible use of assistive tools. Developed through member consultation and scheduled for review.",
    link: "/knowledge/standards",
  },
];

const news = [
  {
    date: "June 12, 2026",
    category: "Events",
    title: "Save the date: Annual MedCom Congress 2027",
    desc: "We are pleased to share the early dates and first theme direction for the next Annual MedCom Congress. More practical information will follow as the programme develops.",
    href: "/news",
    categoryColor: "bg-[#E6F8F1] text-[#008A5E]",
    image: "/news_congress_new.png",
  },
  {
    date: "June 05, 2026",
    category: "Learning",
    title: "New pathway: Writing across markets — localisation and meaning",
    desc: "A fresh learning pathway designed for writers who need to adapt content responsibly across regulatory environments and audiences without flattening scientific meaning.",
    href: "/learning/pathways",
    categoryColor: "bg-[#E6F8F1] text-[#008A5E]",
    image: "/news_pathway_new.png",
  },
  {
    date: "May 28, 2026",
    category: "Community",
    title: "Peer Labs now open for Q3 registration",
    desc: "Small-group, work-in-progress sessions facilitated by experienced practitioners. Bring a real challenge from your practice and leave with structured feedback and fresh thinking.",
    href: "/community/peer-labs",
    categoryColor: "bg-[#E6F8F1] text-[#008A5E]",
    image: "/news_peerlabs_new.png",
  },
  {
    date: "May 15, 2026",
    category: "Standards",
    title: "Responsible use of assistive tools — new guidance published",
    desc: "MedWrite Global Solutions has published updated guidance on the responsible use of assistive tools in medical communication, developed through member consultation.",
    href: "/knowledge/standards",
    categoryColor: "bg-[#E6F8F1] text-[#008A5E]",
    image: "/news_assistive_new.png",
  },
];

const audienceRoutes = [
  {
    icon: <img src="/icon_medical_writer_1783766558505.png" alt="Medical Writer Icon" style={{ width: "112px", height: "112px", objectFit: "contain" }} />,
    iconColor: "text-[var(--brown-dark)]",
    label: "Medical Writers & Editors",
    desc: "Practical learning, peer community and career tools for writers at every stage.",
    href: "/membership/individual",
  },
  {
    icon: <img src="/icon_regulatory_1783766568009.png" alt="Regulatory Communicators Icon" style={{ width: "112px", height: "112px", objectFit: "contain" }} />,
    iconColor: "text-[var(--teal)]",
    label: "Regulatory Communicators",
    desc: "Specialist pathways, standards guidance and a peer network that understands your work.",
    href: "/community/circles",
  },
  {
    icon: <img src="/icon_publication_1783766579416.png" alt="Publication Professionals Icon" style={{ width: "112px", height: "112px", objectFit: "contain" }} />,
    iconColor: "text-[var(--brown-mid)]",
    label: "Publication Professionals",
    desc: "Resources on authorship, evidence ethics, review cycles and practical publication strategy.",
    href: "/knowledge/library",
  },
  {
    icon: <img src="/icon_student_1783766589542.png" alt="Students & Early Career Icon" style={{ width: "112px", height: "112px", objectFit: "contain" }} />,
    iconColor: "text-[var(--coral)]",
    label: "Students & Early Career",
    desc: "An accessible entry point with reduced fees, mentoring and a welcoming community.",
    href: "/membership/student",
  },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: "100dvh",
          paddingTop: "72px",
        }}
      >
        {/* ── Background Image ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero_doctor_patient.png"
            alt="MedWrite Global Solutions"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
          />
          {/* Dark overlay for text readability */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 text-left w-full mx-auto px-6 md:px-12" style={{ color: "var(--cream-dark)", maxWidth: "1400px", marginLeft: "max(10vw, 4rem)", marginTop: "35vh" }}>
          <h1 className="font-display italic text-5xl md:text-6xl lg:text-7xl mb-6 font-bold leading-[1.1] max-w-3xl" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.8)" }}>
            MedWrite Global Solutions
          </h1>
          <p className="italic text-lg md:text-2xl opacity-90 max-w-xl leading-relaxed font-light" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
            Transforming Science into Clear Communication <br className="hidden md:block"/> Accuracy You Can Trust
          </p>
        </div>
      </section>

      {/* ── About Section (Moved from Hero) ── */}
      <section className="section" style={{ background: "var(--warm-bg-2)" }}>
        <div
          className="container-site flex flex-col items-center text-center w-full max-w-4xl px-6 py-12 md:py-20"
        >
          <Reveal delay={0.1}>
            <span className="section-badge mb-6 shadow-sm" style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.05)" }}>
              About MedWrite Global Solutions
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 400,
                color: "var(--brown-dark)",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              Communicate with clarity, <br className="hidden md:block" /> care and confidence.
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                maxWidth: "600px",
                marginBottom: "2.5rem",
              }}
            >
              MedWrite Global Solutions is a member-driven professional network for medical writers, editors, publication professionals, regulatory communicators and everyone who believes that responsible healthcare communication matters.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem" }}>
              <Link href="/membership/apply" className="btn-primary">
                Join MedWrite Global Solutions →
              </Link>
              <Link href="/about" className="btn-secondary">
                Explore the network
              </Link>
            </div>
          </Reveal>

          {/* Trust indicators */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
            {[
              "Member-led governance",
              "Practical, work-based learning",
              "Open to all career stages",
            ].map((text) => (
              <div
                key={text}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 500 }}
              >
                <span
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    borderRadius: "50%",
                    background: "var(--brown-dark)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ═══ SERVICES / SPECIALISMS ══════════════════════════════ */}
      <section className="section" style={{ background: "var(--warm-bg)" }}>
        <div className="container-site">
          <div className="text-center flex flex-col items-center" style={{ marginBottom: "2.25rem" }}>
            <Reveal delay={0.1}>
              <span className="section-badge mb-6">Who We Serve</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--brown-dark)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem" }}
              >
                Specialisms &amp; Disciplines
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl max-w-4xl mx-auto text-center" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                MedWrite Global Solutions serves the full breadth of medical communication — from writing and editing to regulatory, digital, patient and leadership roles.
              </p>
            </Reveal>
          </div>

          {/* Theraflow-style service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="group block tf-card"
              >
                {/* Image top for service card */}
                <div
                  className="tf-card-img-placeholder"
                  style={{ height: "160px", position: "relative", padding: 0 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={svc.image} alt={svc.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="tf-card-body">
                  <h3
                    className="font-semibold text-base mb-3"
                    style={{ color: "var(--brown-dark)" }}
                  >
                    {svc.label}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                    Specialist pathways, standards guidance and a peer network that understands your work.
                  </p>
                  <span className="learn-more-link text-sm">
                    Learn more &nbsp;→
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pb-6" style={{ marginTop: "4rem" }}>
            <Link href="/community/circles" className="btn-secondary">
              Explore all practice areas
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ AUDIENCE ROUTES ════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--warm-bg-2)" }}>
        <div className="container-site">
          <div className="text-center flex flex-col items-center" style={{ marginBottom: "2.25rem" }}>
            <Reveal delay={0.1}>
              <span className="section-badge mb-6">Find Your Path</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--brown-dark)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem" }}
              >
                Where do you fit?
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                MedWrite Global Solutions is designed for every professional in <br className="hidden sm:block" />
                medical communication — whatever your background, role or stage.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audienceRoutes.map((r, i) => (
              <Reveal key={r.label} delay={0.1 * (i + 1)}>
                <Link
                  href={r.href}
                  className="flex flex-col h-full items-center text-center bg-[#f0f9f6] rounded-[1.5rem] p-8 shadow-sm border border-[#d1ebe0] hover:-translate-y-3 hover:shadow-lg hover:border-[var(--teal)] transition-all duration-300 group"
                >
                  <div
                    className={`flex items-center justify-center transition-transform duration-500`}
                    style={{ marginBottom: '2rem' }}
                  >
                    {r.icon}
                  </div>
                  <div className="flex flex-col flex-grow items-center w-full">
                    <h3 className="font-semibold text-lg mb-5" style={{ color: "var(--brown-dark)" }}>
                      {r.label}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-muted)", marginBottom: '2.5rem' }}>
                      {r.desc}
                    </p>
                    <div className="w-full" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                      <span className="learn-more-link text-sm">
                        Find out more &nbsp;→
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURE CARDS ═══════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--warm-bg)" }}>
        <div className="container-site">
          <div className="text-center flex flex-col items-center" style={{ marginBottom: "2.25rem" }}>
            <span className="section-badge mb-6">What We Offer</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--brown-dark)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.5rem" }}
            >
              Built for how you actually work
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
              Every feature of MedWrite Global Solutions is designed to support real <br className="hidden sm:block" />
              professional decisions — not to create noise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <Link
                key={f.title}
                href={f.link}
                className="group block tf-card"
              >
                {/* Image-style top with photo */}
                <div
                  className="tf-card-img-placeholder"
                  style={{ height: "200px", position: "relative", padding: 0 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.image} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="tf-card-body flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`pill text-xs ${f.tagColor} py-0.5`}>{f.tag}</span>
                  </div>
                  <h3 className="font-semibold text-lg" style={{ color: "var(--brown-dark)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {f.desc}
                  </p>
                  <span className="learn-more-link text-sm mt-1">
                    Learn more &nbsp;→
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* ═══ NEWS CARDS ══════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--warm-bg-2)" }}>
        <div className="container-site">
          <div className="flex items-end justify-between flex-wrap gap-4" style={{ marginBottom: "2.25rem" }}>
            <div>
              <span className="section-badge mb-6">Latest</span>
              <h2
                className="font-display mt-4 md:mt-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--brown-dark)", fontWeight: 400, lineHeight: 1.1 }}
              >
                News &amp; Updates
              </h2>
            </div>
            <Link href="/news" className="btn-secondary !px-5 !py-2.5 text-sm">
              View all news
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((n) => (
              <Link key={n.title} href={n.href} className="group flex flex-col rounded-[1.5rem] border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2" style={{ backgroundColor: "var(--warm-card)" }}>
                {/* Image */}
                <div className="w-full h-48 sm:h-56 relative overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={n.image} alt={n.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                {/* Body */}
                <div className="flex flex-col flex-grow" style={{ padding: "1.5rem" }}>
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    <span className="text-xs font-semibold tracking-wide" style={{ background: "#E6F8F1", color: "#008A5E", padding: "0.35rem 0.85rem", borderRadius: "9999px" }}>
                      {n.category}
                    </span>
                    <span className="text-gray-300 text-xs px-1">•</span>
                    <span className="text-gray-500 text-xs font-medium">{n.date}</span>
                  </div>
                  <h3
                    className="font-semibold text-xl leading-tight mb-4 text-[#1C2C25] transition-colors"
                  >
                    {n.title}
                  </h3>
                  <p className="text-sm md:text-[0.95rem] leading-relaxed text-[#4A5D54]">
                    {n.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pb-6" style={{ marginTop: "4rem" }}>
            <Link href="/news" className="btn-primary">
              Show all posts
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}
