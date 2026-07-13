import Link from 'next/link';

export default function Career() {
  return (
    <div className="flex flex-col w-full">
      {/* 6.0 — Career (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • YOUR FUTURE
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Build the Medical Writing Career You Deserve
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you&apos;re starting out, pivoting from another field, growing your freelance practice, or looking for your next step — MedWrite Global Solutions has the tools and resources to support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* 6.1 — Getting Into Medical Writing */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                6.1
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">Getting Into Medical Writing</h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                Medical writing is one of the most rewarding careers for scientifically trained individuals who have a talent for clear communication. It offers excellent earning potential, intellectual variety, the opportunity to work across diverse therapy areas, and the flexibility of both in-house and freelance career models.
              </p>
              
              <h3 className="font-bold text-xl mb-3">What Qualifications Do I Need?</h3>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Most medical writers hold at least an undergraduate degree in a science, health, or life sciences discipline. Many have postgraduate qualifications (MSc, PhD, PharmD, MD) and prior research experience. However, the most important attributes are strong written communication skills, scientific rigour, attention to detail, and the ability to translate complex information clearly and accurately. Several members have successfully transitioned into medical writing from clinical practice, academia, nursing, pharmacy, and other health sciences backgrounds.
              </p>

              <h3 className="font-bold text-xl mb-3">Types of Medical Writing Roles</h3>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 mb-8">
                <li><strong>Regulatory Medical Writer:</strong> Specialises in documentation for regulatory submissions and drug approval processes.</li>
                <li><strong>Publications Medical Writer:</strong> Focuses on scientific manuscripts, abstracts, and posters for peer-reviewed publication.</li>
                <li><strong>Medical Communications Writer:</strong> Creates content for healthcare professional audiences in a commercial communications context.</li>
                <li><strong>Medical Education Writer:</strong> Develops CME/CPD programmes and educational content for HCPs and patients.</li>
                <li><strong>Pharmacovigilance Writer:</strong> Specialises in safety documentation and pharmacovigilance submissions.</li>
                <li><strong>Freelance Medical Writer:</strong> Works independently across multiple client organisations on a project or retainer basis.</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/career/guide" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                  Download Career Guide
                </Link>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
              <h2 className="font-serif text-3xl font-bold mb-4">What Does a Medical Writer Do?</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Medical writers create a wide range of written documents that communicate scientific and clinical information to various audiences. Depending on their specialism, they may write clinical study reports, regulatory submissions, journal manuscripts, patient information leaflets, educational materials, congress posters, advisory board documents, or digital health content.
              </p>
              <h3 className="font-serif text-xl font-bold mb-4 text-[var(--accent)]">Getting into Medical Writing — Programme</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                MedWrite Global Solutions runs a dedicated programme for aspiring and early-career medical writers, including virtual sessions, mentoring, networking events, and a dedicated Career Guide.
              </p>
              <Link href="/career/programme" className="inline-flex h-10 items-center justify-center rounded-sm border border-white/20 bg-transparent px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-white/10">
                Sign Up for Next Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 & 6.3 & 6.4 & 6.5 — Other Career Resources */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* 6.2 — Freelance Hub */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5 flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">Freelance Hub</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Freelance medical writing is a growing and popular career model. Many of our members operate as independent consultants, serving pharmaceutical companies, medical communications agencies, academic institutions, and publishers on a project or retainer basis.
              </p>
              <div className="mb-8 flex-1">
                <h4 className="font-bold mb-2">Freelance Directory</h4>
                <p className="text-xs text-[var(--foreground)]/70 mb-4">A searchable online directory listing member medical writers who are available for freelance and contract work. Search by specialism, therapy area, language, and region.</p>
                <h4 className="font-bold mb-2">Freelance Resources</h4>
                <ul className="text-xs text-[var(--foreground)]/70 space-y-1">
                  <li>• Setting Your Rate: Benchmarking guidance</li>
                  <li>• Contracts & Legal: Template agreements</li>
                  <li>• Tax & Business Setup</li>
                  <li>• Finding Clients</li>
                  <li>• Managing Projects</li>
                </ul>
              </div>
              <div className="flex gap-4">
                 <Link href="/freelance/directory" className="text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                  Search Directory <span>↗</span>
                </Link>
                 <Link href="/freelance/resources" className="text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                  View Resources <span>↗</span>
                </Link>
              </div>
            </div>

            {/* 6.3 — Job Board */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5 flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">Job Board</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                The MedWrite Global Solutions Job Board is the leading destination for medical writing job listings worldwide. Employers post vacancies for full-time, part-time, contract, and freelance roles across all areas of the profession.
              </p>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-8 flex-1">
                Job seekers can search by role type, specialism, location, experience level, and sector. All listings are reviewed to ensure relevance and quality.
              </p>
              <div className="flex gap-4">
                 <Link href="/jobs" className="inline-flex h-10 items-center justify-center rounded-sm bg-[var(--accent)] px-6 text-sm font-semibold text-[#1a1a1a] transition-colors hover:opacity-90">
                  Browse & Apply
                </Link>
                 <Link href="/jobs/post" className="inline-flex h-10 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-6 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  Post a Vacancy
                </Link>
              </div>
            </div>

            {/* 6.4 — Career Guides */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5 flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">Career Guides</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Our Career Guides library provides practical, professionally written guidance documents on every aspect of building and advancing a career in medical writing. All guides are available to download free of charge for MedWrite members.
              </p>
              <ul className="text-sm text-[var(--foreground)]/80 space-y-2 mb-8 flex-1">
                <li>• <strong>Intro to Medical Writing:</strong> The definitive starting point.</li>
                <li>• <strong>CV & LinkedIn Guide:</strong> Positioning your experience effectively.</li>
                <li>• <strong>Academia to Industry:</strong> A practical roadmap.</li>
                <li>• <strong>Freelance Business Guide:</strong> Setting up your practice.</li>
                <li>• <strong>Moving Up:</strong> Junior to Senior career development.</li>
                <li>• <strong>Interview Guide:</strong> Preparation tips and common questions.</li>
              </ul>
              <Link href="/career/guides" className="text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                Browse All Guides <span>↗</span>
              </Link>
            </div>

            {/* 6.5 — Salary Survey */}
            <div className="bg-[#1a1a1a] text-white p-8 rounded-sm flex flex-col">
              <h2 className="font-serif text-3xl font-bold mb-4">Salary Survey</h2>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                The annual MedWrite Global Salary & Remuneration Survey is the most comprehensive benchmarking resource available to medical writing professionals worldwide. The survey collects data on salaries, freelance rates, benefits, and working conditions across sectors, regions, seniority levels, and specialisms.
              </p>
              <p className="text-sm text-[var(--accent)] leading-relaxed mb-8 flex-1 italic">
                Members receive full access to the survey results, enabling them to benchmark their own remuneration, negotiate with confidence, and stay informed about market trends.
              </p>
              <div className="flex gap-4 mt-auto">
                 <Link href="/salary-survey" className="inline-flex h-10 items-center justify-center rounded-sm bg-[var(--accent)] px-6 text-sm font-semibold text-[#1a1a1a] transition-colors hover:opacity-90">
                  Access Latest Survey
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
