import Link from 'next/link';

export default function Education() {
  return (
    <div className="flex flex-col w-full">
      {/* 5.0 — Education & Training (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • EDUCATION & TRAINING
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Invest in Your Expertise. Advance Your Career.
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Our comprehensive education portfolio provides medical writing professionals with the structured, expert-led training they need to grow, specialise, and excel at every stage of their career.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
              MedWrite Global Solutions believes that continuous learning is not just a professional obligation — it is the engine of excellence in medical communication. Our education and training programme is designed to serve everyone from those exploring a career in medical writing for the first time, to seasoned specialists seeking to deepen expertise in highly technical areas.
            </p>
          </div>
        </div>
      </section>

      {/* 5.1 — Professional Development Programme (PDP) */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                5.1
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">Professional Development Programme (PDP)</h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                The MedWrite Professional Development Programme (PDP) is our flagship structured training initiative. It provides high-quality, expert-delivered training for medical writers at all levels through a combination of live workshops, pre- and post-session assignments, and online learning components.
              </p>
              
              <h3 className="font-bold text-xl mb-4">How the PDP Works</h3>
              <ul className="space-y-4 text-[var(--foreground)]/80 mb-8">
                <li><strong className="text-[var(--foreground)]">Credit System:</strong> Each workshop completed earns a defined number of professional development credits, logged automatically in your personal training record.</li>
                <li><strong className="text-[var(--foreground)]">Certificate Levels:</strong> Upon accumulating the required credits in prescribed combinations, members may apply for MedWrite Foundation or Advanced Certificates.</li>
                <li><strong className="text-[var(--foreground)]">Expert Facilitators:</strong> All workshops are delivered by experienced medical writing professionals with hands-on expertise in their subject area.</li>
                <li><strong className="text-[var(--foreground)]">Quality Assured:</strong> All workshops undergo rigorous review by the MedWrite Education Committee to ensure quality and relevance.</li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/education/pdp-brochure" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                  Download PDP Brochure
                </Link>
                <Link href="/education/workshops" className="inline-flex h-12 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-8 text-base font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  Browse All Workshops
                </Link>
              </div>
            </div>
            
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h3 className="font-bold text-xl mb-6">PDP Workshop Categories</h3>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Writing & Language Skills</strong> — grammar, scientific writing style, plain language, editing and proofreading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Regulatory Writing</strong> — CTDs, CSRs, PSURs, product labelling, regulatory strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Medical Science & Pharmacology</strong> — disease areas, drug mechanisms, clinical pharmacology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Clinical Trial Design & Reporting</strong> — ICH guidelines, statistical concepts, data presentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Publications Writing</strong> — manuscript preparation, publication ethics, ICMJE guidelines, systematic reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Medical Communications</strong> — advisory boards, congress materials, digital communications, HCP communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Health Economics & Outcomes Research</strong> — HEOR writing, value dossiers, reimbursement submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Pharmacovigilance Writing</strong> — PSURs, RMPs, ICSR writing, signal management documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Medical Education</strong> — CME/CPD content, patient education, e-learning authoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span><strong>Professional Skills</strong> — project management, business development, AI tools in medical writing, freelancing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 — Certification */}
      <section className="py-20 md:py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
              5.2
            </span>
            <h2 className="font-serif text-4xl font-bold mb-6">Certification</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              The MedWrite Certified Medical Writer (MCMW) credential is a globally recognised mark of professional excellence in medical writing. It signals to employers, clients, and collaborators that you have met a defined standard of knowledge, skill, and ethical practice in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-center">
              <h3 className="font-serif text-2xl font-bold mb-3 text-[var(--accent)]">Foundation Certificate</h3>
              <p className="text-sm text-white/70">Earned by completing a defined set of core PDP credits spanning writing skills, medical science, and professional practice.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-center">
              <h3 className="font-serif text-2xl font-bold mb-3 text-[var(--accent)]">Advanced Certificate</h3>
              <p className="text-sm text-white/70">Earned by completing an expanded set of PDP credits including specialist areas such as regulatory, publications, or medical communications.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-center">
              <h3 className="font-serif text-2xl font-bold mb-3 text-[var(--accent)]">Specialist Endorsements</h3>
              <p className="text-sm text-white/70">Optional add-on endorsements in specific domains: Regulatory Writing, Publications, Pharmacovigilance, Medical Communications.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-xl mb-4">Eligibility & Application</h3>
            <p className="text-white/80 mb-8">
              To apply for certification, members must: hold an active MedWrite Global Solutions membership; have completed the required PDP credits within the specified timeframe; submit a completed application form along with supporting evidence.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/certification/requirements" className="inline-flex h-10 items-center justify-center rounded-sm bg-[var(--accent)] px-6 text-sm font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                View Requirements
              </Link>
              <Link href="/certification/apply" className="inline-flex h-10 items-center justify-center rounded-sm border border-white/20 bg-transparent px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-white/10">
                Apply for Certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3, 5.4, 5.5 — Workshops, Webinars, eLearning */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* 5.3 — Workshops */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5 flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">Workshops</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                MedWrite Global Solutions runs workshops at our Annual Global Conference and through a growing portfolio of regional and virtual events throughout the year. Workshops range from half-day foundational sessions to full-day intensive deep-dives.
              </p>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 mb-8 flex-1">
                <li><strong>Interactive:</strong> Designed to encourage active participation and group discussion.</li>
                <li><strong>Pre-Work:</strong> Selected workshops include pre-session reading or assignments.</li>
                <li><strong>Post-Work:</strong> Some include post-session assignments to consolidate learning and earn additional credits.</li>
              </ul>
              <Link href="/education/workshops" className="inline-flex items-center text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors mt-auto">
                View Upcoming Workshops <span>↗</span>
              </Link>
            </div>

            {/* 5.4 — Webinars */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5 flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">Webinars</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Our webinar programme brings expert insight directly to your screen — wherever you are in the world. We host live webinars throughout the year on topics that are current, practical, and directly relevant to the medical writing profession.
              </p>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 mb-8 flex-1">
                <li><strong>Live Q&A:</strong> Dedicated Q&A sessions with presenters.</li>
                <li><strong>On-Demand Archive:</strong> Members have access to a growing library of recorded webinars.</li>
                <li><strong>PDP Credits:</strong> Selected webinars are credit-bearing under the PDP.</li>
              </ul>
              <Link href="/education/webinars" className="inline-flex items-center text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors mt-auto">
                Explore Webinar Library <span>↗</span>
              </Link>
            </div>

            {/* 5.5 — eLearning */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5 flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">eLearning</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Our eLearning portal provides self-paced, interactive online courses for medical writing professionals who prefer flexible, on-demand learning. Modules are available on a range of topics.
              </p>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 mb-8 flex-1">
                <li><strong>Intro to Medical Writing:</strong> Ideal starting point for beginners.</li>
                <li><strong>Regulatory Essentials:</strong> Foundational knowledge of documentation.</li>
                <li><strong>Publications Ethics:</strong> Deep dive into ICMJE guidelines.</li>
                <li><strong>AI in Medical Writing:</strong> Responsible use of AI tools.</li>
                <li><strong>Statistics for Medical Writers:</strong> Study design and data interpretation.</li>
              </ul>
              <Link href="/education/elearning" className="inline-flex items-center text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors mt-auto">
                Browse eLearning Courses <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
