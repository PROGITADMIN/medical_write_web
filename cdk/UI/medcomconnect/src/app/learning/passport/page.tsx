import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
import ContentCard from "@/components/Shared/ContentCard";
export default function LearningPassportPage() {
  return (
    <main>
      <PageHero
        badge="Learning Hub"
        title="Learning Passport"
        description="Track and showcase your development. The Learning Passport is your centralized dashboard for managing your professional development journey with MedWrite Global Solutions."
      />
      <section className="section bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContentCard
              badge="Track"
              title="Your Learning Record"
              description="Automatically track the courses, webinars, and pathways you have completed. Export your record at any time for employer reviews or professional portfolios."
              href="/dashboard"
              cta="View your passport"
            />
            <ContentCard
              badge="Plan"
              title="Set Your Goals"
              description="Identify your next career milestone and let the passport recommend specific learning resources to help you bridge your skill gaps."
              href="/learning/pathways"
              cta="Explore pathways"
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}
