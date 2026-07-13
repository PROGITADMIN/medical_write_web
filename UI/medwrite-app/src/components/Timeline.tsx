"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "Year 1",
    title: "Foundation & Global Launch",
    description: "MedWrite Global Solutions founded. Initial membership drive launched globally."
  },
  {
    year: "Year 2",
    title: "Professional Development Programme",
    description: "First Professional Development Programme launched with 30 core workshops."
  },
  {
    year: "Year 3",
    title: "MedWrite Global Journal",
    description: "Published for the first time — quarterly, peer-reviewed."
  },
  {
    year: "Year 4",
    title: "Annual Global Conference",
    description: "Held for the first time, attracting delegates from 20+ countries."
  },
  {
    year: "Year 5",
    title: "Certification Programme",
    description: "MedWrite Certified Medical Writer (MCMW) credential introduced."
  },
  {
    year: "Year 6",
    title: "Global Chapters Established",
    description: "Membership surpasses 5,000. Chapters established in Asia-Pacific, Africa, and Latin America."
  }
];

export default function Timeline() {
  return (
    <div className="relative py-10 w-full max-w-5xl mx-auto overflow-hidden flex flex-col gap-12 md:gap-24">
      {/* Animated Center Vertical Line */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] z-0">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full h-full bg-[var(--accent)] origin-top"
        />
      </div>

      {milestones.map((milestone, index) => {
        const isLeft = index % 2 !== 0;

        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
          >
            {/* Animated Dot (Centered on Desktop, Left on Mobile) */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3, type: "spring", bounce: 0.5 }}
                className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center" 
              >
                <div className="w-4 h-4 md:w-5 md:h-5 bg-white border-2 border-gray-100 rounded-full shadow-inner" />
              </motion.div>
            </div>
            
            {/* Content Container */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} relative z-10`}>
              {/* Huge Watermark Background */}
              <div className={`absolute -top-10 text-8xl md:text-9xl font-bold text-[var(--foreground)] opacity-[0.03] select-none z-0 pointer-events-none whitespace-nowrap ${isLeft ? 'right-16 md:right-16' : 'left-16 md:left-16'}`}>
                {milestone.year.replace('Year ', '')}
              </div>

              <div className="relative z-10">
                <span className="inline-block px-5 py-1.5 bg-[var(--accent)] text-white font-bold text-sm md:text-base rounded-full mb-4 shadow-md">
                  {milestone.year}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
                  {milestone.title}
                </h4>
                <p className={`text-base md:text-lg text-[var(--foreground)]/70 leading-relaxed max-w-md ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
