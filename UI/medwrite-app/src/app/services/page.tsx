import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* 3.0 — Services (Parent Page) */}
      <section className="relative w-full py-20 md:py-32 border-b border-black/10 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-sm mb-4 block">
              • OUR SERVICES
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              Medical Writing Services for Every Need
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[var(--foreground)]/90 italic max-w-3xl mx-auto leading-relaxed mb-8">
              From first-in-human regulatory submissions to peer-reviewed publications and patient-facing communications — MedWrite Global Solutions connects you with the expertise and resources to deliver.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
              At MedWrite Global Solutions, our services directory and expert network exist to support organisations and professionals across the full medical communications spectrum. Whether you are a pharmaceutical company seeking specialist regulatory writing support, a medical communications agency looking to grow your team, or a researcher navigating the publication process, we provide the frameworks, networks, and guidance to achieve exceptional outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-20 md:py-32 border-b border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24 max-w-5xl mx-auto">
            
            {/* 3.1 — Regulatory Writing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                  3.1
                </span>
                <h2 className="font-serif text-4xl font-bold mb-4">Regulatory Writing</h2>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                  Regulatory medical writers specialise in the creation of complex documentation required by global regulatory authorities such as the US FDA, EMA, PMDA, and others. This is one of the most technically demanding areas of medical writing, requiring an in-depth understanding of drug development, clinical trial methodology, and regulatory requirements.
                </p>
              </div>
              <div className="bg-white/40 p-8 rounded-sm border border-black/5">
                <h3 className="font-bold text-lg mb-4">Document Types Covered</h3>
                <ul className="space-y-3 text-sm text-[var(--foreground)]/80">
                  <li><strong>Clinical Study Reports (CSRs):</strong> Comprehensive reports summarising the design, conduct, and results of clinical trials, prepared to ICH E3 standards.</li>
                  <li><strong>Common Technical Documents (CTDs):</strong> Integrated regulatory submissions for global marketing authorisation applications.</li>
                  <li><strong>Investigational Medicinal Product Dossiers (IMPDs):</strong> Documentation supporting clinical trial authorisation applications.</li>
                  <li><strong>Investigator&apos;s Brochures (IBs):</strong> Summaries of clinical and non-clinical data relevant to the study of an investigational product in human subjects.</li>
                  <li><strong>Summary of Product Characteristics (SmPC) / Package Inserts:</strong> Prescribing information documents for approved medicinal products.</li>
                  <li><strong>Patient Information Leaflets (PILs):</strong> Clear, accurate, and accessible written information for patients.</li>
                  <li><strong>Regulatory Responses & Queries:</strong> Written responses to questions from regulatory authorities during the review process.</li>
                  <li><strong>Pharmacovigilance Documents:</strong> Periodic Safety Update Reports (PSURs), Risk Management Plans (RMPs), and related safety documentation.</li>
                </ul>
              </div>
            </div>

            <hr className="border-black/5" />

            {/* 3.2 — Medical Communications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="md:order-2">
                <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                  3.2
                </span>
                <h2 className="font-serif text-4xl font-bold mb-4">Medical Communications</h2>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                  Medical communications (medcomms) encompasses the creation of content that communicates scientific and clinical information to healthcare professionals, payers, and other stakeholders. This is a fast-paced, creative, and strategically driven area of the profession.
                </p>
              </div>
              <div className="bg-white/40 p-8 rounded-sm border border-black/5 md:order-1">
                <h3 className="font-bold text-lg mb-4">Document Types Covered</h3>
                <ul className="space-y-3 text-sm text-[var(--foreground)]/80">
                  <li><strong>Congress Materials:</strong> Abstracts, posters, oral presentations, and symposium slide decks for scientific congresses and conferences.</li>
                  <li><strong>Advisory Board Documentation:</strong> Meeting materials, briefing documents, pre-read packs, and reports for medical advisory boards.</li>
                  <li><strong>Medical Affairs Writing:</strong> Medical information letters, clinical summaries, and field medical team materials.</li>
                  <li><strong>Health Economics & Outcomes Research (HEOR):</strong> Manuscripts, posters, and dossiers supporting value and reimbursement submissions.</li>
                  <li><strong>Slide Kits & Speaker Decks:</strong> Scientifically accurate, visually compelling presentations for HCP audiences.</li>
                  <li><strong>Digital Content:</strong> Online learning modules, medical websites, disease awareness content, and digital campaigns.</li>
                </ul>
              </div>
            </div>

            <hr className="border-black/5" />

            {/* 3.3 — Publications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                  3.3
                </span>
                <h2 className="font-serif text-4xl font-bold mb-4">Publications</h2>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                  Scientific publication is a cornerstone of medical evidence dissemination. Our resources and guidance support the ethical development of high-quality manuscripts for peer-reviewed journals, in full compliance with industry guidelines.
                </p>
              </div>
              <div className="bg-white/40 p-8 rounded-sm border border-black/5">
                <h3 className="font-bold text-lg mb-4">Areas Covered</h3>
                <ul className="space-y-3 text-sm text-[var(--foreground)]/80">
                  <li><strong>Original Research Manuscripts:</strong> Preparation of primary publications reporting the results of clinical and preclinical studies.</li>
                  <li><strong>Review Articles:</strong> Systematic reviews, narrative reviews, and meta-analyses.</li>
                  <li><strong>Case Reports & Case Series:</strong> Documentation of clinically important individual patient cases.</li>
                  <li><strong>Publication Planning:</strong> Strategic planning of publication programmes for clinical development programmes.</li>
                  <li><strong>Ethical Authorship:</strong> Guidance on adherence to ICMJE authorship criteria, disclosure of medical writing assistance, and ethical publication practice.</li>
                  <li><strong>Journal Selection & Submission:</strong> Strategic guidance on target journal selection and manuscript submission processes.</li>
                </ul>
              </div>
            </div>

            <hr className="border-black/5" />

            {/* 3.4 — Medical Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="md:order-2">
                <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                  3.4
                </span>
                <h2 className="font-serif text-4xl font-bold mb-4">Medical Education</h2>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                  Medical education writing serves to inform, train, and upskill healthcare professionals, patients, and carers. This area requires a particular ability to translate complex clinical information into clear, accessible, and engaging learning content.
                </p>
              </div>
              <div className="bg-white/40 p-8 rounded-sm border border-black/5 md:order-1">
                <h3 className="font-bold text-lg mb-4">Content Types</h3>
                <ul className="space-y-3 text-sm text-[var(--foreground)]/80">
                  <li><strong>Continuing Medical Education (CME/CPD) Programmes:</strong> Accredited educational content for healthcare professionals.</li>
                  <li><strong>E-Learning Modules:</strong> Interactive digital learning tools for online delivery.</li>
                  <li><strong>Training Materials:</strong> Internal training documents for pharmaceutical, biotech, and healthcare organisations.</li>
                  <li><strong>Patient Education Materials:</strong> Clear, empathetic content designed to help patients and carers understand conditions, treatments, and self-management.</li>
                  <li><strong>Disease Awareness Campaigns:</strong> Evidence-based content to raise awareness of conditions among patient and HCP audiences.</li>
                </ul>
              </div>
            </div>

            <hr className="border-black/5" />

            {/* 3.5 — Consulting & Strategic Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[var(--accent)] font-semibold uppercase tracking-widest text-xs mb-2 block">
                  3.5
                </span>
                <h2 className="font-serif text-4xl font-bold mb-4">Consulting & Strategic Support</h2>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                  Beyond document production, MedWrite Global Solutions connects organisations with senior medical writing consultants who can provide strategic guidance, quality oversight, and specialist input at every stage of the drug development and communications lifecycle.
                </p>
              </div>
              <div className="bg-[#1a1a1a] text-white p-8 rounded-sm">
                <ul className="space-y-4 text-sm text-white/80">
                  <li><strong className="text-white block mb-1">Medical Writing Strategy:</strong> Development of document strategies, publication plans, and regulatory communication strategies.</li>
                  <li><strong className="text-white block mb-1">Freelance Network Access:</strong> Access to our vetted global network of freelance medical writers across all specialisms.</li>
                  <li><strong className="text-white block mb-1">Training & Capability Building:</strong> In-house training programmes to develop your organisation&apos;s internal medical writing capability.</li>
                  <li><strong className="text-white block mb-1">Quality Review & Editorial Services:</strong> Expert editorial review, fact-checking, and quality assurance for medical communications.</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-sm bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors hover:opacity-90">
                    Enquire About Consulting
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
