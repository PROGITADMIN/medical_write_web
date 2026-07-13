import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 — Hero Banner */}
      <section className="relative w-full h-[calc(100vh-5rem)] min-h-[600px] flex items-center overflow-hidden border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col gap-3 lg:gap-4">
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs md:text-sm">
                • GLOBAL NETWORK
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
                Advancing Medical Communication.
                <br /> Globally.
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-[var(--foreground)]/80 max-w-xl leading-relaxed mt-1 lg:mt-2">
                MedWrite Global Solutions is the premier professional hub for medical writers, regulatory communicators, and healthcare content specialists worldwide — connecting expertise, fostering excellence, and shaping the future of medical communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-2 lg:mt-4">
                <Link href="/join" className="inline-flex h-10 lg:h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-6 lg:px-8 text-sm lg:text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                  Join MedWrite Today
                </Link>
                <Link href="/services" className="inline-flex h-10 lg:h-12 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-6 lg:px-8 text-sm lg:text-base font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  Explore Our Services
                </Link>
              </div>
            </div>
            {/* Hero Image */}
            <div className="hidden md:block relative h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden bg-black/5">
              <img src="/images/hero.png" alt="Medical Writer Workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — About MedWrite (Intro Strip) */}
      <section className="py-20 md:py-24 bg-[var(--background)] border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">Your Professional Home</h2>
            <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed">
              MedWrite Global Solutions is a global network and professional solutions platform representing, supporting, and advancing medical writers, regulatory communicators, and healthcare content professionals across all sectors. Whether you work in-house at a pharmaceutical company, as a freelance medical writer, in a medical communications agency, or in academic publishing, MedWrite Global Solutions is your professional home.
            </p>
            <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed mt-4">
              We provide world-class education, a vibrant professional community, career resources, an industry-leading journal, and a gateway to global opportunities in medical writing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-sm border border-black/5">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4 text-[#1a1a1a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">A network spanning 50+ countries with members from pharmaceutical, biotech, CRO, medcomms, and academic sectors.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-sm border border-black/5">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4 text-[#1a1a1a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Professional Development</h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">Accredited training programmes, workshops, and certifications designed for every career stage.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-sm border border-black/5">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center mb-4 text-[#1a1a1a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Thriving Community</h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">Special Interest Groups, local chapters, events, and an annual conference that bring the profession together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Featured Pillars (3-Column Cards) */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
             <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
                • THE WORK THAT DRIVES US
              </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold max-w-2xl">Core service and feature highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col h-full bg-white/30 border border-black/5 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-black/10 w-full relative">
                 <img src="/images/membership.png" alt="Membership" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold mb-4">Membership</h3>
                <p className="text-[var(--foreground)]/80 mb-8 flex-1 leading-relaxed">
                  Become part of a global community of over 5,000 medical writing professionals. Access exclusive tools, resources, networking events, and career support — all in one place.
                </p>
                <Link href="/membership" className="inline-flex items-center text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors mt-auto">
                  Learn About Membership <span className="ml-2">↗</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col h-full bg-white/30 border border-black/5 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
               <div className="h-48 bg-black/10 w-full relative">
                 <img src="/images/education.png" alt="Education & Training" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold mb-4">Education & Training</h3>
                <p className="text-[var(--foreground)]/80 mb-8 flex-1 leading-relaxed">
                  Advance your skills with our Professional Development Programme — featuring 100+ workshops, certification pathways, on-demand webinars, and expert-led eLearning modules.
                </p>
                <Link href="/education" className="inline-flex items-center text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors mt-auto">
                  Explore Training <span className="ml-2">↗</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col h-full bg-white/30 border border-black/5 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
               <div className="h-48 bg-black/10 w-full relative">
                 <img src="/images/career.png" alt="Career Resources" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold mb-4">Career Resources</h3>
                <p className="text-[var(--foreground)]/80 mb-8 flex-1 leading-relaxed">
                  From getting your first role in medical writing to growing your freelance practice — our career guides, job board, salary benchmarking, and freelance directory give you the edge.
                </p>
                <Link href="/career" className="inline-flex items-center text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors mt-auto">
                  Browse Career Resources <span className="ml-2">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — What is Medical Writing? (Explainer Strip) */}
      <section className="py-20 md:py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">What Is Medical Writing?</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Medical writing is a specialist communication discipline that bridges scientific research and its communication to diverse audiences — from regulatory authorities and healthcare professionals to patients and the general public. Medical writers work across a broad spectrum of document types, including clinical study reports, regulatory submissions, journal manuscripts, patient information leaflets, training materials, medical education content, and much more.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                As the global pharmaceutical, biotech, and healthcare sectors continue to grow, the demand for skilled medical writers has never been greater. MedWrite Global Solutions exists to meet that demand — by empowering professionals at every career stage.
              </p>
              <Link href="/career" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                Explore a Career in Medical Writing
              </Link>
            </div>
             <div className="hidden md:block relative h-full min-h-[400px] w-full border border-white/20 rounded-sm overflow-hidden">
                <img src="/images/explainer.png" alt="What is Medical Writing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Stats Banner */}
      <section className="py-12 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10 text-center">
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl font-bold">5,000+</span>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Members Worldwide</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl font-bold">50+</span>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Countries Represented</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl font-bold">100+</span>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Training Workshops</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl font-bold">10,000+</span>
              <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Resources in Library</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Testimonials */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
             <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
                • MEMBER TESTIMONIALS
              </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Results that speak for themselves</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/40 border border-black/5 rounded-sm flex flex-col">
              <p className="text-[var(--foreground)]/80 italic mb-8 flex-1 leading-relaxed">
                &quot;MedWrite Global Solutions transformed my career. The workshops and mentorship I received through the Professional Development Programme gave me the confidence and skills to move from academia into industry medical writing within six months.&quot;
              </p>
              <div>
                <p className="font-bold font-serif">— Dr. Sarah K.</p>
                <p className="text-sm opacity-70">Regulatory Medical Writer, Germany</p>
              </div>
            </div>
            <div className="p-8 bg-white/40 border border-black/5 rounded-sm flex flex-col">
              <p className="text-[var(--foreground)]/80 italic mb-8 flex-1 leading-relaxed">
                &quot;The MedWrite Journal and resources library are invaluable. I reference them regularly for best-practice guidance on clinical trial reporting and publication planning.&quot;
              </p>
              <div>
                <p className="font-bold font-serif">— James O.</p>
                <p className="text-sm opacity-70">Senior Medical Writer, USA</p>
              </div>
            </div>
            <div className="p-8 bg-white/40 border border-black/5 rounded-sm flex flex-col">
              <p className="text-[var(--foreground)]/80 italic mb-8 flex-1 leading-relaxed">
                &quot;As a freelancer, the MedWrite Freelance Hub and job board have been essential tools for growing my client base internationally. The community is incredibly supportive.&quot;
              </p>
              <div>
                <p className="font-bold font-serif">— Priya M.</p>
                <p className="text-sm opacity-70">Freelance Medical Writer, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
