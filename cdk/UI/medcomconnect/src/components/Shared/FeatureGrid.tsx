"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  href?: string;
  ctaText?: string;
  step?: string; // For numbered step cards
}

export function FeatureCard({ icon, title, text, href, ctaText = "Learn more", step, index = 0 }: FeatureCardProps & { index?: number }) {
  const cardContent = (
    <>
      {step && (
        <span className="absolute top-5 right-6 text-[4rem] font-display text-[#EAF4F9] leading-none select-none z-0">
          {step}
        </span>
      )}
      {icon && (
        <div className="w-16 h-16 bg-[var(--warm-card)] rounded-2xl flex items-center justify-center text-[var(--brown-mid)] mb-6 border border-[var(--cream-dark)] relative z-10 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-[var(--brown-dark)] text-xl mb-4 relative z-10">{title}</h3>
      <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] flex-grow relative z-10">{text}</p>
      
      {href && (
        <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[var(--brown-mid)] font-semibold text-sm group-hover:gap-2.5 transition-all cursor-pointer relative z-10">
          {ctaText} <ChevronRight size={15} />
        </div>
      )}
    </>
  );

  const wrapperClass = "relative group flex flex-col items-center text-center bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--cream-dark)] hover:shadow-[0_16px_48px_rgba(6,78,59,0.1)] hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full";

  return (
    <motion.div {...fadeUp(index * 0.1)} className={wrapperClass}>
      {href ? (
        <Link href={href} className="flex flex-col h-full w-full items-center text-center">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export function FeatureGrid({ items, columns = 3 }: { items: FeatureCardProps[], columns?: 2 | 3 | 4 }) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-8`}>
      {items.map((item, i) => (
        <FeatureCard key={i} {...item} index={i} />
      ))}
    </div>
  );
}
