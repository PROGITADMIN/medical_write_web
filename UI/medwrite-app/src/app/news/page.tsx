import Link from 'next/link';

export default function News() {
  return (
    <div className="flex flex-col w-full">
      {/* 9.0 — News & Blog (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • LATEST UPDATES
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              News & Perspectives
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Stay informed with the latest updates from MedWrite Global Solutions, industry news, and expert opinions from our community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* 9.1 — MedWrite News */}
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                9.1
              </span>
              <h2 className="font-serif text-3xl font-bold mb-6">MedWrite News</h2>
              <div className="space-y-8">
                <article className="pb-8 border-b border-black/10">
                  <span className="text-xs text-[var(--foreground)]/60 mb-2 block">October 15, 2025</span>
                  <h3 className="font-bold text-xl mb-3"><Link href="#" className="hover:text-[var(--accent)] transition-colors">Registration Open for Annual Global Conference</Link></h3>
                  <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">Join us in London this November for three days of intensive workshops, networking, and expert keynotes...</p>
                  <Link href="#" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Read More <span>↗</span></Link>
                </article>
                <article className="pb-8 border-b border-black/10">
                  <span className="text-xs text-[var(--foreground)]/60 mb-2 block">September 28, 2025</span>
                  <h3 className="font-bold text-xl mb-3"><Link href="#" className="hover:text-[var(--accent)] transition-colors">New PDP Workshops Announced for Q4</Link></h3>
                  <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">We are expanding our Professional Development Programme with five new workshops covering AI tools...</p>
                  <Link href="#" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Read More <span>↗</span></Link>
                </article>
              </div>
            </div>

            {/* 9.2 — Industry News */}
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                9.2
              </span>
              <h2 className="font-serif text-3xl font-bold mb-6">Industry Updates</h2>
              <div className="space-y-8">
                <article className="pb-8 border-b border-black/10">
                  <span className="text-xs text-[var(--foreground)]/60 mb-2 block">October 10, 2025</span>
                  <h3 className="font-bold text-xl mb-3"><Link href="#" className="hover:text-[var(--accent)] transition-colors">EMA Updates Guidelines on Clinical Trial Reporting</Link></h3>
                  <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">A summary of the recent changes to EMA guidelines concerning the lay summary requirements for clinical trials...</p>
                  <Link href="#" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Read More <span>↗</span></Link>
                </article>
                <article className="pb-8 border-b border-black/10">
                  <span className="text-xs text-[var(--foreground)]/60 mb-2 block">September 15, 2025</span>
                  <h3 className="font-bold text-xl mb-3"><Link href="#" className="hover:text-[var(--accent)] transition-colors">ICMJE Releases Revised Recommendations</Link></h3>
                  <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">The International Committee of Medical Journal Editors has updated its guidance on the role of AI in authorship...</p>
                  <Link href="#" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Read More <span>↗</span></Link>
                </article>
              </div>
            </div>

            {/* 9.3 — Expert Perspectives */}
            <div>
               <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                9.3
              </span>
              <h2 className="font-serif text-3xl font-bold mb-6">Expert Perspectives</h2>
              <div className="space-y-8">
                <article className="pb-8 border-b border-black/10">
                  <span className="text-xs text-[var(--foreground)]/60 mb-2 block">October 5, 2025 • By Dr. Elena Rostova</span>
                  <h3 className="font-bold text-xl mb-3"><Link href="#" className="hover:text-[var(--accent)] transition-colors">The Future of Pharmacovigilance Writing</Link></h3>
                  <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">How automation is changing the landscape of routine safety reporting and what it means for writers...</p>
                  <Link href="#" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Read More <span>↗</span></Link>
                </article>
                <article className="pb-8 border-b border-black/10">
                   <span className="text-xs text-[var(--foreground)]/60 mb-2 block">September 20, 2025 • By David Chen</span>
                  <h3 className="font-bold text-xl mb-3"><Link href="#" className="hover:text-[var(--accent)] transition-colors">Building a Sustainable Freelance Practice</Link></h3>
                  <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">Five strategies for independent medical writers to manage workflow peaks and troughs effectively...</p>
                  <Link href="#" className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Read More <span>↗</span></Link>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
