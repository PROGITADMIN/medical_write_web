"use client";
import PageHero from "@/components/Shared/PageHero";
import SectionLayout from "@/components/Shared/SectionLayout";
import CallToAction from "@/components/Shared/CallToAction";
import { FileText, Stethoscope, Microscope, Brain, Users, LineChart, Shield, Target, BookOpen, Presentation, Calendar, Award, Globe, Heart, Briefcase, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CommunityHubPage() {
  return (
    <main className="min-h-screen bg-[var(--warm-bg)]">
      <PageHero
        badge="Community Hub"
        title="Find the people who make your work feel less solitary."
        description="The best professional learning often starts with a useful conversation. Find a group that understands your questions, your role and the work you are trying to do next."
      />

      <div className="flex flex-col">
        <SectionLayout badge="01 — FOUR WAYS TO CONNECT" title="Four ways to connect" bg="white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                <FileText size={20} />
              </div>
              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Four ways to</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">
                Four ways to connect should make the next professional choice easier. Explore the available options, understand what each one is designed for and choose the route that best fits the work you are doing now.
              </p>
              <div className="mt-auto">
                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                  Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.1}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                <Stethoscope size={20} />
              </div>
              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">You do not</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">
                You do not need to work everything out at once. Start with the information that is relevant to you, compare the choices available and return whenever you are ready to take the next step.
              </p>
              <div className="mt-auto">
                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                  Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.2}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                <Microscope size={20} />
              </div>
              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Need a little</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">
                Need a little more context before you decide? Explore the related guidance, save this for later or contact the team for help choosing the right route.
              </p>
              <div className="mt-auto">
                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                  Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </SectionLayout>

        <SectionLayout badge="02 — COMMUNITY FINDER" title="Community finder" bg="alternate">
          <div className="flex flex-col max-w-4xl mx-auto">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                1
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">
                  Community finder should make the next professional choice easier. Explore the available options, understand what each one is designed for and choose the route that best fits the work you are doing now.
                </p>
                <div className="mt-4">
                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                    Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.1}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                2
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">
                  You do not need to work everything out at once. Start with the information that is relevant to you, compare the choices available and return whenever you are ready to take the next step.
                </p>
                <div className="mt-4">
                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                    Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.2}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                3
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">
                  Need a little more context before you decide? Explore the related guidance, save this for later or contact the team for help choosing the right route.
                </p>
                <div className="mt-4">
                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                    Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionLayout>

        <SectionLayout badge="03 — PARTICIPATION AT YOUR PACE" title="Participation at your pace" bg="white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                <Calendar size={20} />
              </div>
              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Participation at your</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">
                Participation at your pace should make the next professional choice easier. Explore the available options, understand what each one is designed for and choose the route that best fits the work you are doing now.
              </p>
              <div className="mt-auto">
                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                  Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.1}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">You do not</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">
                You do not need to work everything out at once. Start with the information that is relevant to you, compare the choices available and return whenever you are ready to take the next step.
              </p>
              <div className="mt-auto">
                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                  Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.2}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">Need a little</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">
                Need a little more context before you decide? Explore the related guidance, save this for later or contact the team for help choosing the right route.
              </p>
              <div className="mt-auto">
                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                  Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </SectionLayout>

        <SectionLayout badge="04 — COMMUNITY STANDARDS" title="Community standards" bg="alternate">
          <div className="flex flex-col max-w-4xl mx-auto">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                1
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">
                  Community standards should make the next professional choice easier. Explore the available options, understand what each one is designed for and choose the route that best fits the work you are doing now.
                </p>
                <div className="mt-4">
                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                    Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.1}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                2
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">
                  You do not need to work everything out at once. Start with the information that is relevant to you, compare the choices available and return whenever you are ready to take the next step.
                </p>
                <div className="mt-4">
                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                    Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: 0.2}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                3
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-grow">
                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">
                  Need a little more context before you decide? Explore the related guidance, save this for later or contact the team for help choosing the right route.
                </p>
                <div className="mt-4">
                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">
                    Find a community <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionLayout>

      </div>
    </main>
  );
}
