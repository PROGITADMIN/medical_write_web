import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
export default async function GenericKnowledgePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main>
      <PageHero
        badge="Knowledge Library"
        title={title}
        description={`We are actively working on the ${title} section. Check back soon for comprehensive updates.`}
      />
      <section className="section bg-white min-h-[60vh] flex flex-col items-center justify-center py-32">

        <div className="container-site max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="p-16 md:p-24 rounded-[3rem] bg-[var(--warm-bg-2)] shadow-md border border-[var(--cream-dark)] w-full">
            <h2 className="font-display text-3xl text-[var(--brown-dark)] mb-4">{title} content is under construction</h2>
            <p className="text-lg text-[var(--text-muted)] mb-8">
              This detailed knowledge resource is currently being curated by our editorial team. In the meantime, you can explore the main Knowledge hub or reach out to our team.
            </p>
          </div>
        </div>
      
      </section>
      
    </main>
  );
}
