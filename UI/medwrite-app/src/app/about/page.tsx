import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* 2.1 — About Us (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • WHO WE ARE
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              About MedWrite Global Solutions
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Our story, our purpose, and the values that drive everything we do.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
              MedWrite Global Solutions was founded with a single, unwavering purpose: to elevate the global standard of medical communication by empowering the professionals who create it. We are a globally oriented organisation dedicated to representing, supporting, educating, and connecting medical writers, regulatory communicators, and healthcare content professionals across every sector of the life sciences and healthcare industry.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto mt-4">
              From regulatory affairs and clinical development to medical education, patient communication, and scientific journalism, our members span the full breadth of the medical writing profession — across more than 50 countries and growing.
            </p>
          </div>
        </div>
      </section>

      {/* 2.2 — Our Story */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-4">
                MedWrite Global Solutions grew out of a recognised need within the international medical writing community for a truly global platform — one that could serve professionals not only in established markets but in emerging regions where the profession is rapidly expanding.
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-4">
                We began as a community of passionate medical communications specialists who recognised that the profession, while well-established in North America and Europe, deserved a globally inclusive platform where professionals from all regions could access world-class training, networking, and career support.
              </p>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
                Today, MedWrite Global Solutions has grown into a comprehensive professional solutions hub — offering membership, education, career tools, an industry journal, and a global community network — all underpinned by the highest standards of professional conduct and scientific integrity.
              </p>
            </div>
            
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h3 className="font-serif text-2xl font-bold mb-6">Key Milestones</h3>
              <div className="flex flex-col gap-6 relative border-l border-[var(--accent)] ml-3 pl-6">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[1.95rem] top-1.5 ring-4 ring-white" />
                  <p className="font-bold">Year 1</p>
                  <p className="text-sm text-[var(--foreground)]/70">MedWrite Global Solutions founded. Initial membership drive launched globally.</p>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[1.95rem] top-1.5 ring-4 ring-white" />
                  <p className="font-bold">Year 2</p>
                  <p className="text-sm text-[var(--foreground)]/70">First Professional Development Programme launched with 30 core workshops.</p>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[1.95rem] top-1.5 ring-4 ring-white" />
                  <p className="font-bold">Year 3</p>
                  <p className="text-sm text-[var(--foreground)]/70">MedWrite Global Journal published for the first time — quarterly, peer-reviewed.</p>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[1.95rem] top-1.5 ring-4 ring-white" />
                  <p className="font-bold">Year 4</p>
                  <p className="text-sm text-[var(--foreground)]/70">Annual Global Conference held for the first time, attracting delegates from 20+ countries.</p>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[1.95rem] top-1.5 ring-4 ring-white" />
                  <p className="font-bold">Year 5</p>
                  <p className="text-sm text-[var(--foreground)]/70">Certification Programme launched — MedWrite Certified Medical Writer (MCMW) credential introduced.</p>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[1.95rem] top-1.5 ring-4 ring-white" />
                  <p className="font-bold">Year 6</p>
                  <p className="text-sm text-[var(--foreground)]/70">Membership surpasses 5,000. Global Chapters established in Asia-Pacific, Africa, Latin America.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 — Our Mission & Vision */}
      <section className="py-20 md:py-24 bg-[#1a1a1a] text-[#efebe2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div className="bg-white/5 p-8 rounded-sm border border-white/10">
              <h2 className="font-serif text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90 italic">
                &quot;To advance the global medical writing profession by providing exceptional education, fostering a vibrant professional community, advocating for the highest standards of medical communication, and supporting the career development of our members at every stage of their journey.&quot;
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-sm border border-white/10">
              <h2 className="font-serif text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-90 italic">
                &quot;A world where every medical communication is clear, accurate, ethical, and impactful — produced by skilled, well-supported, and recognised professionals who are connected through a global community of excellence.&quot;
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              <div>
                <div className="font-bold text-[var(--accent)] text-xl mb-2">Excellence</div>
                <p className="text-sm opacity-80">We uphold the highest standards in all aspects of medical communication and professional conduct.</p>
              </div>
              <div>
                <div className="font-bold text-[var(--accent)] text-xl mb-2">Integrity</div>
                <p className="text-sm opacity-80">We are committed to ethical practice, transparency, and accountability in all that we do.</p>
              </div>
              <div>
                <div className="font-bold text-[var(--accent)] text-xl mb-2">Inclusivity</div>
                <p className="text-sm opacity-80">We welcome professionals from all backgrounds, regions, specialisms, and career stages.</p>
              </div>
              <div>
                <div className="font-bold text-[var(--accent)] text-xl mb-2">Innovation</div>
                <p className="text-sm opacity-80">We embrace new technologies and approaches that advance the profession, including responsible AI in medical writing.</p>
              </div>
              <div>
                <div className="font-bold text-[var(--accent)] text-xl mb-2">Community</div>
                <p className="text-sm opacity-80">We believe in the power of connection, collaboration, and mutual support to advance both individuals and the profession as a whole.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.4 — Our Team & 2.5 — Code of Ethics */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Our Team */}
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
                MedWrite Global Solutions is governed by a dedicated Executive Committee and is supported by a network of volunteer committees, working groups, and regional representatives who contribute their time and expertise to advance the organisation and its members.
              </p>
              <h3 className="font-bold text-xl mb-3">Executive Committee & Advisory Board</h3>
              <p className="text-sm text-[var(--foreground)]/70 mb-6">
                Led by our President, Vice President, Secretary General, Treasurer, and Directors of Education, Membership, and Communications. Supported by four Regional Directors and a senior Advisory Board spanning pharmaceutical, regulatory, academic, and medcomms sectors.
              </p>
              <h3 className="font-bold text-xl mb-3">Committees</h3>
              <ul className="list-disc pl-5 text-sm text-[var(--foreground)]/70 space-y-2">
                <li><strong>Education Committee:</strong> Oversees the Professional Development Programme, Certification, Workshops, and Webinars.</li>
                <li><strong>Membership Committee:</strong> Manages membership recruitment, retention, and benefits.</li>
                <li><strong>Publications Committee:</strong> Oversees the MedWrite Global Journal and member publications.</li>
                <li><strong>Ethics Committee:</strong> Develops and enforces the Code of Ethics and professional conduct guidelines.</li>
                <li><strong>Events Committee:</strong> Plans and executes the Annual Conference and regional events.</li>
                <li><strong>Career Development Committee:</strong> Manages the Getting Into Medical Writing programme, Job Board, and Freelance Hub.</li>
              </ul>
            </div>

            {/* Code of Ethics */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h2 className="font-serif text-3xl font-bold mb-6">Code of Ethics</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Medical writing carries significant responsibility. The documents and communications created by medical writers directly influence healthcare decisions, regulatory approvals, patient safety, and scientific understanding. At MedWrite Global Solutions, we hold all members to a rigorous Code of Ethics that reflects the highest standards of the profession.
              </p>
              <h3 className="font-bold text-lg mb-3">Core Ethical Principles</h3>
              <ul className="space-y-3 text-sm mb-8">
                <li><strong>Accuracy:</strong> All medical communications must be based on accurate, complete, and scientifically sound information.</li>
                <li><strong>Transparency:</strong> Authors&apos; and medical writers&apos; contributions must be clearly disclosed. Ghost-writing without acknowledgement is not condoned.</li>
                <li><strong>Independence:</strong> Medical writers must maintain scientific objectivity and independence from undue commercial influence.</li>
                <li><strong>Confidentiality:</strong> Members must protect the confidentiality of client data, patient information, and proprietary information at all times.</li>
                <li><strong>Accountability:</strong> Members are accountable for the quality and integrity of their work and must comply with applicable laws, regulations, and guidelines.</li>
                <li><strong>Continuous Learning:</strong> Members are committed to ongoing professional development to ensure their knowledge and skills remain current.</li>
              </ul>
              <Link href="#" className="inline-flex h-10 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-6 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                Download Full Code of Ethics PDF
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
