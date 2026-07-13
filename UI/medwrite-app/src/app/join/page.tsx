import Link from 'next/link';

export default function Join() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • BECOME A MEMBER
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Join MedWrite Global Solutions
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              Take the next step in your medical writing career.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
              Join a global network of medical communication professionals. Gain access to exclusive training, career resources, and a vibrant community dedicated to excellence in healthcare content.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white/40 p-8 rounded-sm border border-black/5">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">Registration Coming Soon</h2>
            <p className="text-center text-[var(--foreground)]/80 mb-8">
              We are currently updating our membership portal. Please check back later to register, or contact our support team if you have any questions.
            </p>
            <div className="flex justify-center">
              <Link href="/" className="inline-flex h-12 items-center justify-center rounded-sm bg-[var(--accent)] px-8 text-base font-semibold text-white shadow transition-colors hover:opacity-90">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
