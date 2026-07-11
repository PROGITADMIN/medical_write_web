import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
import ContentCard from "@/components/Shared/ContentCard";
export default function MentoringPage() {
  return (
    <main>
      <PageHero
        badge="Community Hub"
        title="Mentoring Programme"
        description="Structured one-to-one professional support. Whether you are seeking guidance for your next career step or looking to share your experience with the next generation of communicators, our mentoring programme connects you with the right match."
      />
      <section className="section bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContentCard
              badge="Learn"
              title="Find a Mentor"
              description="Get paired with an experienced professional who can offer advice, review your work, and help you navigate the medical communication industry."
              href="/career"
              cta="Apply for a mentor"
            />
            <ContentCard
              badge="Lead"
              title="Become a Mentor"
              description="Give back to the profession by sharing your expertise. Mentors receive dedicated training and support from the MedWrite Global Solutions team."
              href="/get-involved"
              cta="Apply to mentor"
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}
