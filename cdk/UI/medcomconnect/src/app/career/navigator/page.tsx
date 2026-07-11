"use client";
import SectionLayout from "@/components/Shared/SectionLayout";
import PageHero from "@/components/Shared/PageHero";
import { BookOpen, LineChart, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareerNavigatorPage() {
  return (
    <main className="min-h-screen bg-[var(--warm-bg)] pb-24">
      <PageHero
        badge="Career Navigator"
        title="Practical guidance for the decisions that shape a career."
        description="Turn a broad question into a clear next step. Start with the guide that matches the decision you're making right now."
      >
        <Link href="#" className="btn-primary" style={{ background: "var(--teal)", borderColor: "var(--teal)", color: "white" }}>
          Take the self-assessment <ArrowRight size={18} className="ml-1" />
        </Link>
        <Link href="#" className="btn-secondary" style={{ background: "transparent", borderColor: "var(--cream-dark)", color: "var(--brown-dark)" }}>
          Browse all guides
        </Link>
      </PageHero>

      <div className="flex flex-col gap-8 md:gap-16">
        {/* Guide categories Module */}
        <SectionLayout 
          badge="01 — GUIDE CATEGORIES" 
          title="Find the stage that matches you" 
          description="Every path through medical communications looks different. Choose the category closest to where you stand today."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0}} className="relative group flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[var(--warm-card)] rounded-lg flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Starting out</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow">
                  For students and early-career writers exploring medical communications for the first time — what the roles actually involve and how to get in.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm group cursor-pointer hover:text-[var(--brown-mid)] transition-colors mt-auto">
                  Explore starting guides <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0.1}} className="relative group flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[var(--warm-card)] rounded-lg flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                  <LineChart size={20} />
                </div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Growing your practice</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow">
                  For mid-career professionals building specialization, expanding a client base, or deciding between agency, freelance, and in-house work.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm group cursor-pointer hover:text-[var(--brown-mid)] transition-colors mt-auto">
                  Explore growth guides <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0.2}} className="relative group flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[var(--warm-card)] rounded-lg flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Leading and mentoring</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow">
                  For senior professionals stepping into leadership, governance, or teaching — and shaping the next generation of the profession.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm group cursor-pointer hover:text-[var(--brown-mid)] transition-colors mt-auto">
                  Explore leadership guides <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
        </SectionLayout>

        {/* Featured guide Module */}
        <SectionLayout 
          badge="02 — FEATURED GUIDE"
          title="This month's guide"
          description="A deeper read, chosen by our career advisory panel for where most members are right now."
        >
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="flex flex-col lg:flex-row bg-[#F7F5F0] rounded-xl overflow-hidden border border-[var(--cream-dark)]">
              {/* Left Side (Dark) */}
              <div className="lg:w-5/12 bg-[var(--brown-dark)] p-10 flex flex-col justify-between">
                <span className="text-[#86A795] text-xs font-semibold tracking-widest uppercase mb-12">Career Transition</span>
                <p className="text-white text-3xl font-display leading-tight opacity-90">
                  "The hardest part wasn't the writing — it was pricing my time like a business."
                </p>
              </div>
              {/* Right Side (Light) */}
              <div className="lg:w-7/12 p-10 flex flex-col justify-center bg-[#FDFCFB]">
                <span className="text-[var(--text-muted)] text-xs font-medium mb-4">12 min read · Updated June 2026 · Written with three member reviewers</span>
                <h3 className="text-3xl font-display text-[var(--brown-dark)] mb-4">Freelance to full-time: making the switch</h3>
                <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed mb-8 max-w-xl">
                  A step-by-step look at leaving agency life for independent practice — rate-setting, contracts, and the first ninety days on your own.
                </p>
                <div>
                  <Link href="#" className="inline-flex items-center justify-center border border-[var(--cream-dark)] px-6 py-3 rounded-lg text-sm font-semibold text-[var(--brown-dark)] hover:bg-[var(--warm-card)] transition-colors">
                    Read the guide
                  </Link>
                </div>
              </div>
            </motion.div>
        </SectionLayout>

        {/* Downloadable tools Module */}
        <SectionLayout 
          badge="03 — DOWNLOADABLE TOOLS"
          title="Take it away with you"
          description="Printable and editable tools members use alongside the guides above."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="relative flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-transform">
                <div className="mb-4">
                  <span className="inline-block bg-[var(--warm-bg-2)] text-[var(--teal)] px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase rounded-md border border-[var(--cream-dark)]">PDF · 2 PAGES</span>
                </div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Career pathway map</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow">
                  A visual map of the routes between roles, so you can see what's next.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm hover:text-[var(--brown-mid)] transition-colors mt-auto">
                  Download <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0.1}} className="relative flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-transform">
                <div className="mb-4">
                  <span className="inline-block bg-[var(--warm-bg-2)] text-[var(--teal)] px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase rounded-md border border-[var(--cream-dark)]">SHEET</span>
                </div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Rate benchmarking tool</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow">
                  Compare freelance day rates by specialism, region, and experience.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm hover:text-[var(--brown-mid)] transition-colors mt-auto">
                  Download <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0.2}} className="relative flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-transform">
                <div className="mb-4">
                  <span className="inline-block bg-[var(--warm-bg-2)] text-[var(--teal)] px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase rounded-md border border-[var(--cream-dark)]">CHECKLIST</span>
                </div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Certification planner</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow">
                  Map out which credentials matter for the path you're choosing.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm hover:text-[var(--brown-mid)] transition-colors mt-auto">
                  Download <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>
        </SectionLayout>

        {/* Recommended next steps Module */}
        <SectionLayout 
          badge="04 — RECOMMENDED NEXT STEPS"
          title="Where to go from here"
        >
          <div className="flex flex-col">
            {/* Step 1 */}
            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex items-start gap-6 py-8 border-b border-[var(--cream-dark)]">
              <div className="w-10 h-10 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-2">Take the two-minute self-assessment</h3>
                <p className="text-[var(--text-muted)] mb-4 text-[1.05rem]">
                  A short set of questions that points you to the right guide category above, based on where you are now.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm hover:text-[var(--brown-mid)] transition-colors">
                  Start the assessment <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex items-start gap-6 py-8 border-b border-[var(--cream-dark)]">
              <div className="w-10 h-10 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-2">Compare the pathways that match your goals</h3>
                <p className="text-[var(--text-muted)] mb-4 text-[1.05rem]">
                  Sit with the guides that apply to you — there's no need to decide everything today.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm hover:text-[var(--brown-mid)] transition-colors">
                  Compare pathways <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex items-start gap-6 py-8">
              <div className="w-10 h-10 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-display text-[var(--brown-dark)] mb-2">Book a call with a career advisor</h3>
                <p className="text-[var(--text-muted)] mb-4 text-[1.05rem]">
                  Twenty minutes with a member of our advisory panel, free for all members.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm hover:text-[var(--brown-mid)] transition-colors">
                  Book a call <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionLayout>
      </div>
    </main>
  );
}
