import Link from 'next/link';

export default function Community() {
  return (
    <div className="flex flex-col w-full">
      {/* 8.0 — Community (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • YOUR NETWORK
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Connect. Collaborate. Grow Together.
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Medical writing can sometimes feel solitary. At MedWrite Global Solutions, you are part of a vibrant, supportive, and truly global professional community.
            </p>
          </div>
        </div>
      </section>

      {/* 8.1 — Global Chapters & 8.2 — SIGs */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                8.1
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">Global Chapters</h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                While we are a global organisation, we recognise the importance of local connection and context. MedWrite Global Solutions operates a network of Regional Chapters that organise local networking events, seminars, and social gatherings.
              </p>
              <h3 className="font-bold text-xl mb-4">Current Chapters:</h3>
              <ul className="space-y-2 text-[var(--foreground)]/80 list-disc pl-5 mb-8">
                <li>North America (USA & Canada)</li>
                <li>Europe (EU & UK)</li>
                <li>Asia-Pacific (APAC)</li>
                <li>Latin America (LATAM)</li>
                <li>Middle East & Africa (MEA)</li>
              </ul>
              <Link href="/community/chapters" className="inline-flex h-10 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-6 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                Find Your Local Chapter
              </Link>
            </div>

            <div>
               <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                8.2
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">Special Interest Groups (SIGs)</h2>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                Connect with members who share your specific professional interests. SIGs are member-led communities that hold virtual meetings, run specific forum discussions, and contribute to MedWrite resources in their specialist areas.
              </p>
              <div className="bg-white/40 p-6 rounded-sm border border-black/5">
                 <h4 className="font-bold text-sm mb-3">Active SIGs include:</h4>
                 <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-black/5 px-3 py-1.5 rounded-full">Regulatory Writing</span>
                    <span className="text-xs bg-black/5 px-3 py-1.5 rounded-full">Medical Communications</span>
                    <span className="text-xs bg-black/5 px-3 py-1.5 rounded-full">Freelance Hub</span>
                    <span className="text-xs bg-black/5 px-3 py-1.5 rounded-full">AI in Medical Writing</span>
                    <span className="text-xs bg-black/5 px-3 py-1.5 rounded-full">Publications & Ethics</span>
                    <span className="text-xs bg-black/5 px-3 py-1.5 rounded-full">Patient Communications</span>
                 </div>
                 <Link href="/community/sigs" className="inline-block mt-6 text-[var(--accent)] font-semibold text-sm hover:underline text-[#1a1a1a]">
                  Join a SIG →
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8.3 — Annual Global Conference */}
      <section className="py-20 md:py-32 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                8.3
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">Annual Global Conference</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The highlight of the MedWrite calendar. Our Annual Global Conference brings together hundreds of medical writing professionals from around the world for three days of intensive learning, networking, and inspiration.
              </p>
              <ul className="space-y-4 text-white/80 mb-8">
                <li><strong className="text-white">Keynote Speakers:</strong> Hear from industry leaders on the future of medical communication.</li>
                <li><strong className="text-white">Workshops:</strong> Participate in deep-dive PDP workshops.</li>
                <li><strong className="text-white">Networking:</strong> Connect with peers, clients, and employers at social events.</li>
                <li><strong className="text-white">Exhibition:</strong> Meet vendors and service providers supporting the profession.</li>
              </ul>
              <Link href="/conference" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                Register for Next Conference
              </Link>
            </div>
            
            <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-sm overflow-hidden relative">
              <img src="/images/conference.png" alt="Conference Video Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 — Forums & 8.5 — Mentorship */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* 8.4 */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h2 className="font-serif text-3xl font-bold mb-4">Discussion Forums</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
                Our secure, members-only online platform is the place to ask questions, share knowledge, and discuss industry developments. Whether you need advice on a tricky grammatical point, guidance on interpreting a new regulatory guideline, or recommendations for freelance tools, the community is there to help.
              </p>
              <Link href="/forums" className="text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                Go to Forums <span>↗</span>
              </Link>
            </div>

            {/* 8.5 */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h2 className="font-serif text-3xl font-bold mb-4">Mentorship Programme</h2>
              <p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
                The MedWrite Mentorship Programme connects early-career professionals with experienced senior medical writers for a structured six-month mentoring relationship. It is an invaluable opportunity for guidance, career planning, and professional growth.
              </p>
              <div className="flex gap-4">
                 <Link href="/community/mentorship/apply" className="text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                  Find a Mentor <span>↗</span>
                </Link>
                 <Link href="/community/mentorship/volunteer" className="text-[var(--foreground)] font-semibold hover:text-[var(--accent)] transition-colors text-sm">
                  Become a Mentor <span>↗</span>
                </Link>
              </div>
            </div>

           </div>
        </div>
      </section>
    </div>
  );
}
