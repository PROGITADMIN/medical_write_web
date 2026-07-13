import Link from 'next/link';

export default function Membership() {
  return (
    <div className="flex flex-col w-full">
      {/* 4.0 — Membership (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • BECOME A MEMBER
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Your Global Professional Home in Medical Writing
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of medical writing professionals worldwide and unlock everything MedWrite Global Solutions has to offer.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#pricing" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-[#1a1a1a] shadow transition-colors hover:opacity-90">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.1 — Membership Benefits */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center">Membership Benefits</h2>
          <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-3xl mx-auto text-center mb-16">
            At MedWrite Global Solutions, membership is more than a subscription — it&apos;s an investment in your professional future. As a member, you gain access to a comprehensive suite of resources, tools, and opportunities designed to advance your career, expand your knowledge, and connect you with a thriving global community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-[#1a1a1a] flex items-center justify-center text-sm font-sans">1</span>
                Professional Development
              </h3>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 pl-11">
                <li><strong>Training Workshops:</strong> Priority access to our Professional Development Programme workshops at conferences and online events.</li>
                <li><strong>Certification:</strong> Eligibility to apply for the MedWrite Certified Medical Writer (MCMW) credential.</li>
                <li><strong>Webinars:</strong> Free and discounted access to our live and on-demand webinar programme.</li>
                <li><strong>eLearning:</strong> Access to our growing library of self-paced online learning modules.</li>
              </ul>
            </div>
            
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-[#1a1a1a] flex items-center justify-center text-sm font-sans">2</span>
                Community & Networking
              </h3>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 pl-11">
                <li><strong>Special Interest Groups:</strong> Participate in member-led SIGs covering regulatory writing, publications, pharmacovigilance, AI in medical writing, and more.</li>
                <li><strong>Global Chapters:</strong> Engage with your local MedWrite chapter for regional events, networking, and mentorship.</li>
                <li><strong>Annual Conference:</strong> Member-rate access to our flagship annual global conference.</li>
                <li><strong>Online Community Platform:</strong> Access to our member-only discussion forums, resource-sharing space, and peer network.</li>
              </ul>
            </div>

            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-[#1a1a1a] flex items-center justify-center text-sm font-sans">3</span>
                Career Support
              </h3>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 pl-11">
                <li><strong>Job Board:</strong> Access to exclusive job listings from global pharmaceutical, biotech, CRO, and medcomms employers.</li>
                <li><strong>Freelance Hub:</strong> List your services in the MedWrite Freelance Directory and connect with clients worldwide.</li>
                <li><strong>Career Guides:</strong> Downloadable guides on CVs, interviews, transitioning into medical writing, and more.</li>
                <li><strong>Salary Benchmarking:</strong> Access to the annual MedWrite Salary & Remuneration Survey data.</li>
              </ul>
            </div>

            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-[#1a1a1a] flex items-center justify-center text-sm font-sans">4</span>
                Resources & Publications
              </h3>
              <ul className="space-y-3 text-sm text-[var(--foreground)]/80 pl-11">
                <li><strong>MedWrite Global Journal:</strong> Full access to our quarterly peer-reviewed journal and its complete digital archive.</li>
                <li><strong>Guidelines Library:</strong> Access to industry position papers, ethical guidelines, and best-practice documents.</li>
                <li><strong>Reading Resources:</strong> Curated library of useful reading, book reviews, and learning materials.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 — Membership Types & Fees */}
      <section id="pricing" className="py-20 md:py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Membership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col">
              <h3 className="font-bold text-xl mb-2">Student / Early Career</h3>
              <p className="text-sm text-white/60 mb-6 flex-1">Discounted rate for students and those within their first two years of medical writing employment.</p>
              <div className="text-3xl font-serif font-bold mb-6">$95<span className="text-sm font-sans font-normal text-white/60"> / year</span></div>
              <ul className="space-y-3 text-sm mb-8 text-white/80">
                <li className="flex items-start gap-2"><span>✓</span> Full access to core benefits</li>
                <li className="flex items-start gap-2"><span>✓</span> Access to Early Career Network</li>
                <li className="flex items-start gap-2"><span>✓</span> Digital journal access</li>
              </ul>
              <Link href="/join/student" className="mt-auto block w-full text-center py-3 rounded-sm border border-white/20 hover:bg-white/10 transition-colors">Select Plan</Link>
            </div>

            <div className="bg-[var(--accent)] text-[#1a1a1a] border border-[var(--accent)] p-8 rounded-sm flex flex-col transform md:-translate-y-4 shadow-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">Most Popular</div>
              <h3 className="font-bold text-xl mb-2">Individual Member</h3>
              <p className="text-sm opacity-80 mb-6 flex-1">Suitable for employed and freelance medical writing professionals.</p>
              <div className="text-3xl font-serif font-bold mb-6">$185<span className="text-sm font-sans font-normal opacity-80"> / year</span></div>
              <ul className="space-y-3 text-sm mb-8 font-medium">
                <li className="flex items-start gap-2"><span>✓</span> Full access to all member benefits</li>
                <li className="flex items-start gap-2"><span>✓</span> Eligibility for Certification (MCMW)</li>
                <li className="flex items-start gap-2"><span>✓</span> Print & digital journal access</li>
                <li className="flex items-start gap-2"><span>✓</span> Freelance directory listing</li>
              </ul>
              <Link href="/join/individual" className="mt-auto block w-full text-center py-3 rounded-sm bg-[#1a1a1a] text-white hover:bg-black transition-colors font-semibold">Join Now</Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col">
              <h3 className="font-bold text-xl mb-2">Corporate / Organisational</h3>
              <p className="text-sm text-white/60 mb-6 flex-1">Team memberships for organisations. Includes seats for multiple staff members.</p>
              <div className="text-3xl font-serif font-bold mb-6">Custom</div>
              <ul className="space-y-3 text-sm mb-8 text-white/80">
                <li className="flex items-start gap-2"><span>✓</span> Volume discount pricing</li>
                <li className="flex items-start gap-2"><span>✓</span> Centralised billing</li>
                <li className="flex items-start gap-2"><span>✓</span> Employer-facing tools</li>
                <li className="flex items-start gap-2"><span>✓</span> Company profile listing</li>
              </ul>
              <Link href="/contact" className="mt-auto block w-full text-center py-3 rounded-sm border border-white/20 hover:bg-white/10 transition-colors">Contact Us</Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4.3 — FAQs & 4.4 — Awards */}
      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* FAQs */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Membership FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Q: Who can become a member of MedWrite Global Solutions?</h4>
                  <p className="text-sm text-[var(--foreground)]/70">A: Membership is open to anyone working in or interested in the field of medical writing and communications — including regulatory medical writers, medical communications specialists, publications writers, freelancers, healthcare professionals, academics, journalists, and students with a scientific background.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Q: How do I apply for membership?</h4>
                  <p className="text-sm text-[var(--foreground)]/70">A: Simply complete our online membership application form. Once your application is reviewed and approved, you will receive access to all member benefits immediately upon payment.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Q: Can I join if I am based outside of [primary region]?</h4>
                  <p className="text-sm text-[var(--foreground)]/70">A: Absolutely. MedWrite Global Solutions is a truly global organisation. We welcome members from all countries and actively support a diverse, international membership community.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Q: What is the difference between a Student/Early Career membership and a full Individual membership?</h4>
                  <p className="text-sm text-[var(--foreground)]/70">A: Student/Early Career memberships are offered at a reduced rate to make professional development accessible to those who are newer to the field. The core benefits are largely equivalent, with some differences in access levels.</p>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h2 className="font-serif text-3xl font-bold mb-6">Recognition & Awards</h2>
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mb-6">
                MedWrite Global Solutions recognises exceptional contributions to the profession through a range of annual awards and honours. These awards celebrate the achievements of medical writers who have demonstrated outstanding commitment to professional excellence, mentorship, innovation, and service to the community.
              </p>
              <h3 className="font-bold text-lg mb-3">Annual Award Categories</h3>
              <ul className="space-y-3 text-sm mb-8 text-[var(--foreground)]/80">
                <li><strong>MedWrite Excellence Award:</strong> Recognising outstanding achievement in medical writing practice over the course of a career.</li>
                <li><strong>Rising Star Award:</strong> Celebrating a new or early-career medical writer who has demonstrated exceptional promise and achievement.</li>
                <li><strong>Mentor of the Year Award:</strong> Honouring a member who has made a sustained and significant contribution to mentoring and supporting others in the profession.</li>
                <li><strong>Innovation in Medical Communication Award:</strong> Recognising a member or team that has pioneered a new approach, method, or tool in medical communication.</li>
                <li><strong>Community Contribution Award:</strong> Celebrating a member who has given outstanding voluntary service to MedWrite Global Solutions or the wider profession.</li>
              </ul>
              <Link href="/awards/nominate" className="inline-flex h-10 items-center justify-center rounded-sm border border-[var(--foreground)] bg-transparent px-6 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                Nominate a Colleague
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
