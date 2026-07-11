import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
export default async function GenericAboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="About Us"
        title={title}
        description={`We are actively working on the ${title} section. Check back soon for comprehensive updates.`}
      />
      <section className="py-24 bg-[var(--warm-bg-2)]">
        <div className="container-site max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-white shadow-[0_4px_20px_rgba(15,41,66,0.06)] border border-[var(--cream-dark)]">
            <div className="w-16 h-16 bg-[var(--warm-card)] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[var(--cream-dark)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20507B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h2 className="font-display text-3xl text-[var(--brown-dark)] mb-4">{title} content is under construction</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--brown-mid)] to-[var(--text-light)] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[var(--text-muted)] mb-0">
              This detailed module is currently being developed according to our content roadmap. In the meantime, you can explore the main About hub or reach out to our team.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
