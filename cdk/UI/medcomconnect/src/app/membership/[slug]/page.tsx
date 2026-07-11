import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";

const contentMap: Record<string, { title: string, badge: string, desc: string, price: string, features: string[] }> = {
  "individual": {
    title: "Individual Professional Membership",
    badge: "Membership Route",
    desc: "For working professionals seeking ongoing development and peer connection.",
    price: "$150 / year",
    features: [
      "Access to all Practice Circles and Discussion Boards",
      "Reduced rates on Learning Pathways and Professional Certificate",
      "Full access to the Knowledge Library and MedCom Review Journal",
      "Voting rights in network governance"
    ]
  },
  "student": {
    title: "Student & Early Career Membership",
    badge: "Membership Route",
    desc: "Accessible entry for students and those transitioning into the field.",
    price: "$50 / year",
    features: [
      "Access to Mentoring Programme and Early Career Circle",
      "Reduced rates on all entry-level Courses & Workshops",
      "Full access to the Knowledge Library",
      "Career Navigator tools and CV tracker"
    ]
  },
  "organisational": {
    title: "Organisational Membership",
    badge: "Membership Route",
    desc: "For employers and healthcare organisations.",
    price: "Custom Pricing",
    features: [
      "Flexible seat administration for your team",
      "Employer branding on the Job Board",
      "Access to aggregate Learning Passport data for your team",
      "Priority sponsorship opportunities at Events"
    ]
  },
  "team": {
    title: "Team Membership",
    badge: "Membership Route",
    desc: "Bring your whole communications team into the network.",
    price: "$600 / year (up to 5 members)",
    features: [
      "Centralised billing and administration",
      "Shared resource library access",
      "Team discounts for the Annual MedCom Congress",
      "Dedicated onboarding support"
    ]
  },
  "benefits": {
    title: "Member Benefits",
    badge: "Value & Returns",
    desc: "Everything included when you join MedWrite Global Solutions.",
    price: "Included in all plans",
    features: [
      "Unrestricted access to the Knowledge Library",
      "Participation in Peer Labs and Practice Circles",
      "Discounts on Professional Certificate courses",
      "Exclusive access to the Expert Finder directory"
    ]
  }
};

export default async function MembershipDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = contentMap[resolvedParams.slug];
  if (!data) return notFound();

  return (
    <main>
      <PageHero
        badge={data.badge}
        title={data.title}
        description={data.desc}
      />
      <section className="section bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <div className="p-10 md:p-14 rounded-[2rem] bg-[var(--cream)] border border-[var(--cream-dark)] mb-12 shadow-sm">
            <h2 className="font-display text-3xl text-[var(--brown-dark)] mb-3">{data.title}</h2>
            <p className="text-xl font-medium text-[#F26A4B] mb-8">{data.price}</p>
            <h3 className="font-semibold text-[var(--brown-dark)] mb-4">What&apos;s included:</h3>
            <ul className="flex flex-col gap-4 mb-10">
              {data.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E0F9FB] text-[#00B4C5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--text-muted)] leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-[rgba(45,35,25,0.05)]">
              <Link href="/checkout" className="btn-primary">Apply Now</Link>
              <Link href="/contact" className="btn-secondary">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
