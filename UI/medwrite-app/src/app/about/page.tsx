import Link from 'next/link';
import Timeline from '@/components/Timeline';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* 2.1 — About Us (Parent Page) */}
      <section className="relative w-full h-[calc(100vh-5rem)] flex items-end pb-12 md:pb-16 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img src="/images/side-view-doctor-with-stethoscope-working-laptop-writing-paper.jpg" alt="About MedWrite" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4 drop-shadow-lg">
              About MedWrite<br />Global Solutions.
            </h1>
            <p className="text-lg md:text-xl font-serif text-white/90 italic leading-relaxed mb-6 drop-shadow-md">
              Our story, our purpose, and the values that drive everything we do.
            </p>
          </div>
          
          <div className="shrink-0 mb-2 md:mb-6">
            <Link href="/join" className="inline-flex h-10 lg:h-12 items-center justify-center rounded-lg bg-white px-6 lg:px-8 text-sm lg:text-base font-bold text-black shadow-xl transition-transform hover:-translate-y-1">
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* 2.2 — Our Story */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 max-w-4xl mx-auto">
            <div className="text-center">
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
            
            <div className="w-full pt-8">
              <h3 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-center">Key Milestones</h3>
              <Timeline />
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

      {/* 2.4 — Our Team */}
      <section className="py-20 md:py-24 border-b border-black/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-[var(--foreground)]/80 leading-relaxed">
              MedWrite Global Solutions is governed by a dedicated Executive Committee and is supported by a network of volunteer committees, working groups, and regional representatives who contribute their time and expertise to advance the organisation and its members.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
            
            {/* Left Column */}
            <div className="flex flex-col gap-10 lg:w-1/3">
              {[
                { title: "Executive & Advisory", desc: "Led by our President and Directors, supported by Regional Directors and a senior Advisory Board.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
                { title: "Education Committee", desc: "Oversees the Professional Development Programme, Certification, Workshops, and Webinars.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                { title: "Membership Committee", desc: "Manages membership recruitment, retention, and benefits.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--foreground)]">{item.title}</h4>
                    <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="lg:w-1/3 flex justify-center relative py-6">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl relative z-10 border-8 border-[var(--background)]">
                <img src="/images/membership.png" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              {/* Optional decorative background blob behind image */}
              <div className="absolute inset-0 bg-[var(--accent)]/5 rounded-full scale-110 -z-0"></div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-10 lg:w-1/3">
              {[
                { title: "Publications Committee", desc: "Oversees the MedWrite Global Journal and member publications.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /> },
                { title: "Ethics Committee", desc: "Develops and enforces the Code of Ethics and professional conduct guidelines.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /> },
                { title: "Career Development", desc: "Manages the Getting Into Medical Writing programme, Job Board, and Freelance Hub.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--foreground)]">{item.title}</h4>
                    <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 — Code of Ethics */}
      <section className="py-20 md:py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Text & List */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-5">Code of Ethics</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                Medical writing carries significant responsibility. The documents and communications created by medical writers directly influence healthcare decisions, regulatory approvals, patient safety, and scientific understanding. At MedWrite Global Solutions, we hold all members to a rigorous Code of Ethics that reflects the highest standards of the profession.
              </p>
              
              <h3 className="font-bold text-base mb-4">Core Ethical Principles</h3>
              <div className="flex flex-col gap-3">
                {[
                  { title: "Accuracy", desc: "All medical communications must be based on accurate, complete, and scientifically sound information." },
                  { title: "Transparency", desc: "Authors' and medical writers' contributions must be clearly disclosed. Ghost-writing without acknowledgement is not condoned." },
                  { title: "Independence", desc: "Medical writers must maintain scientific objectivity and independence from undue commercial influence." },
                  { title: "Confidentiality", desc: "Members must protect the confidentiality of client data, patient information, and proprietary information at all times." },
                  { title: "Accountability", desc: "Members are accountable for the quality and integrity of their work and must comply with applicable laws, regulations, and guidelines." },
                  { title: "Continuous Learning", desc: "Members are committed to ongoing professional development to ensure their knowledge and skills remain current." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--accent)]/15 flex items-center justify-center text-[var(--accent)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-[var(--foreground)]/80 leading-snug">
                      <strong className="text-[var(--foreground)]">{item.title}:</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image Gallery */}
            <div className="flex gap-4 w-full h-[350px] lg:h-[450px]">
              <div className="w-2/3 h-full rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/side-view-doctor-with-stethoscope-working-laptop-writing-paper.jpg" 
                  alt="Doctor working on laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/3 h-full rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/hand-holding-pen-close-up.jpg" 
                  alt="Writing with pen" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
