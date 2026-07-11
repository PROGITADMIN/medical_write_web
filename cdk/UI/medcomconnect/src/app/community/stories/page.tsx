import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
import ContentCard from "@/components/Shared/ContentCard";
export default function StoriesPage() {
  return (
    <main>
      <PageHero
        badge="Community Hub"
        title="Member Stories"
        description="Perspectives from across the community. Read real stories from members who have navigated career transitions, completed learning frameworks, and applied new skills to their roles."
      />
      <section className="section bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContentCard
              badge="Inspiration"
              title="Career Transitions"
              description="Discover how members successfully transitioned into medical communication from clinical, academic, or other professional backgrounds."
              href="/career"
              cta="Read transition stories"
            />
            <ContentCard
              badge="Impact"
              title="Applied Practice"
              description="Learn how professionals are using MedWrite Global Solutions resources and networks to drive tangible results in their daily work."
              href="/knowledge/library"
              cta="Read impact stories"
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}
