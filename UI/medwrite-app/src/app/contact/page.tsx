export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* 10.0 — Contact Us (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • GET IN TOUCH
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Contact MedWrite Global Solutions
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              We are here to support you. Reach out to our team with any questions about membership, education, or partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* 10.1 — General Enquiries Form */}
            <div className="bg-white/40 p-8 rounded-sm border border-black/5">
              <h2 className="font-serif text-3xl font-bold mb-6">Send us a message</h2>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-semibold">First Name *</label>
                    <input type="text" id="firstName" className="h-12 px-4 rounded-sm border border-black/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-semibold">Last Name *</label>
                    <input type="text" id="lastName" className="h-12 px-4 rounded-sm border border-black/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" required />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold">Email Address *</label>
                  <input type="email" id="email" className="h-12 px-4 rounded-sm border border-black/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" required />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-semibold">Subject *</label>
                  <select id="subject" className="h-12 px-4 rounded-sm border border-black/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" required>
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Enquiry</option>
                    <option value="education">Education & Workshops</option>
                    <option value="journal">Journal Submissions</option>
                    <option value="partnerships">Corporate Partnerships</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold">Message *</label>
                  <textarea id="message" rows={5} className="p-4 rounded-sm border border-black/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-y" required></textarea>
                </div>
                
                <button type="submit" className="h-12 inline-flex items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-white shadow transition-colors hover:opacity-90 mt-2">
                  Send Message
                </button>
              </form>
            </div>

            {/* 10.2, 10.3, 10.4 — Contacts & Locations */}
            <div className="flex flex-col gap-12">
              
              {/* 10.3 — Office Locations */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Office Locations</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-1">Global Headquarters (UK)</h3>
                    <p className="text-sm text-[var(--foreground)]/80">123 Global Professional Way<br/>London, W1D 4HQ<br/>United Kingdom</p>
                    <p className="text-sm text-[var(--foreground)]/80 mt-1">Tel: +44 20 1234 5678</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">North America Regional Hub</h3>
                    <p className="text-sm text-[var(--foreground)]/80">456 Medical Center Blvd, Suite 200<br/>Boston, MA 02115<br/>USA</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Asia-Pacific Regional Hub</h3>
                    <p className="text-sm text-[var(--foreground)]/80">88 Science Park Drive<br/>Singapore 118256</p>
                  </div>
                </div>
              </div>

              {/* 10.2 — Department Contacts */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Department Contacts</h2>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Membership Services</span>
                    <a href="mailto:membership@medwriteglobal.com" className="text-[var(--accent)] hover:underline">membership@medwriteglobal.com</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Education & Certification</span>
                    <a href="mailto:education@medwriteglobal.com" className="text-[var(--accent)] hover:underline">education@medwriteglobal.com</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">The MedWrite Journal Editorial Office</span>
                    <a href="mailto:journal@medwriteglobal.com" className="text-[var(--accent)] hover:underline">journal@medwriteglobal.com</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Corporate Partnerships & Sponsorship</span>
                    <a href="mailto:partnerships@medwriteglobal.com" className="text-[var(--accent)] hover:underline">partnerships@medwriteglobal.com</a>
                  </div>
                </div>
              </div>

              {/* 10.4 — Social Media Links */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Connect With Us</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/50 border border-black/10 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/50 border border-black/10 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/50 border border-black/10 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
