import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
import ContentCard from "@/components/Shared/ContentCard";
export default function KnowledgeContributePage() {
  return (
    <main>
      <PageHero
        badge="Knowledge Hub"
        title="Contribute to Knowledge"
        description="Write an article or suggest a resource. Help us build a better, more comprehensive library of practical guidance for the medical communication profession."
      />
      <section className="section bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContentCard
              badge="Publish"
              title="Write for the Journal"
              description="Submit original articles, case studies, or methodology papers to the MedCom Review Journal. Our editorial board reviews submissions on a rolling basis."
              href="/knowledge/journal"
              cta="View submission guidelines"
            />
            <ContentCard
              badge="Share"
              title="Suggest a Resource"
              description="Know of a great template, checklist, or external guide that would benefit the community? Let us know so we can add it to the Resource Library."
              href="/contact"
              cta="Suggest resource"
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}
