import Link from 'next/link';

export default function Resources() {
  return (
    <div className="flex flex-col w-full">
      {/* 7.0 — Resources (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • RESOURCES
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Essential Tools for Your Practice
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Access the guidelines, templates, research, and literature you need to perform at the highest level.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
              Our comprehensive resources library is one of the most valued benefits of MedWrite Global Solutions membership. Designed to support daily practice and ensure adherence to the highest industry standards, the library includes our peer-reviewed journal, a curated collection of global guidelines, and practical templates.
            </p>
          </div>
        </div>
      </section>

      {/* 7.1 — The MedWrite Global Journal */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                7.1
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">The MedWrite Global Journal</h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                The MedWrite Global Journal is our flagship quarterly publication. Peer-reviewed and editorially independent, the journal publishes original research, review articles, opinion pieces, and practical guides relating to all aspects of medical writing and communications.
              </p>
              
              <ul className="space-y-4 text-sm text-[var(--foreground)]/80 mb-8">
                <li><strong className="text-[var(--foreground)]">Access:</strong> Members receive full digital access to the current issue and the complete historical archive. Selected articles are available open-access.</li>
                <li><strong className="text-[var(--foreground)]">Content:</strong> Articles cover regulatory updates, publication ethics, writing techniques, industry trends, and professional development.</li>
                <li><strong className="text-[var(--foreground)]">Submissions:</strong> We welcome submissions from members and non-members alike. All research and review articles are subject to rigorous peer review.</li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/resources/journal" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                  Read Current Issue
                </Link>
                <Link href="/resources/journal/submit" className="inline-flex h-12 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-8 text-base font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  Submit an Article
                </Link>
              </div>
            </div>
            
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
               {/* Cover Image */}
               <div className="w-full aspect-[3/4] bg-black/10 relative shadow-lg overflow-hidden mb-6">
                 <img src="/images/journal.png" alt="Journal Cover" className="w-full h-full object-cover" />
               </div>
               <h3 className="font-bold text-lg mb-2 text-center">Volume 12, Issue 4</h3>
               <p className="text-sm text-[var(--foreground)]/70 text-center">Focus on Artificial Intelligence in Medical Communications</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.2, 7.3, 7.4 — Libraries */}
      <section className="py-20 md:py-32 border-b border-black/10 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* 7.2 — Guidelines Library */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col">
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                7.2
              </span>
              <h2 className="font-serif text-2xl font-bold mb-4">Guidelines Library</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                A curated, regularly updated directory of essential guidelines, regulations, and position statements governing medical communications worldwide. This centralised resource saves members time and ensures they are working to current standards.
              </p>
              <ul className="text-sm text-white/80 space-y-2 mb-8 flex-1 list-disc pl-4">
                <li>ICH Guidelines (E3, E6, etc.)</li>
                <li>ICMJE Recommendations</li>
                <li>CONSORT, PRISMA, and other reporting guidelines (EQUATOR Network)</li>
                <li>GPP (Good Publication Practice)</li>
                <li>Regional regulatory body guidance (FDA, EMA, MHRA)</li>
              </ul>
              <Link href="/resources/guidelines" className="text-white font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                Access Library <span>↗</span>
              </Link>
            </div>

            {/* 7.3 — Templates Library */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col">
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                7.3
              </span>
              <h2 className="font-serif text-2xl font-bold mb-4">Templates Library</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                A collection of downloadable, customisable templates designed by senior medical writers. These templates provide a robust starting point for common document types and administrative tasks.
              </p>
              <ul className="text-sm text-white/80 space-y-2 mb-8 flex-1 list-disc pl-4">
                <li>Regulatory document structures</li>
                <li>Publication plans</li>
                <li>Style guide templates</li>
                <li>Quality control (QC) checklists</li>
                <li>Freelance contract and invoice templates</li>
              </ul>
              <Link href="/resources/templates" className="text-white font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                Download Templates <span>↗</span>
              </Link>
            </div>

            {/* 7.4 — Recommended Reading */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col">
               <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                7.4
              </span>
              <h2 className="font-serif text-2xl font-bold mb-4">Recommended Reading</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                A curated list of books, external articles, blogs, and reference materials that the MedWrite Global Solutions Education Committee recommends for professional development.
              </p>
              <ul className="text-sm text-white/80 space-y-2 mb-8 flex-1 list-disc pl-4">
                <li>Scientific writing style and grammar</li>
                <li>Medical statistics for writers</li>
                <li>Career development and business skills</li>
                <li>Review of notable new publications</li>
              </ul>
              <Link href="/resources/reading" className="text-white font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                View Recommendations <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
