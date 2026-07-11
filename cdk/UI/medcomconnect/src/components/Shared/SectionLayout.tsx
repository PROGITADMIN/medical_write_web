"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

interface SectionLayoutProps {
  badge?: string;
  title: string;
  description?: string;
  bg?: "white" | "alternate"; // We'll keep the prop to not break compilation, but force white background.
  children: React.ReactNode;
  align?: "center" | "left";
  hideLine?: boolean;
}

export default function SectionLayout({ badge, title, description, bg = "white", children, align = "left", hideLine = true }: SectionLayoutProps) {
  // We force everything to have a clean, continuous pale background for the editorial look.
  return (
    <section className={`py-24 md:py-[120px] ${bg === "alternate" ? "bg-[var(--soft-green)]" : "bg-[var(--warm-bg)]"}`}>
      <div className="container-site">
        <motion.div {...fadeUp} className="mb-20 text-center mx-auto max-w-3xl flex flex-col items-center">
          {badge && (
            <span className="block text-[var(--teal)] text-xs font-semibold tracking-[0.2em] uppercase mb-4 font-mono text-center">
              {badge}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[var(--brown-dark)] mb-4 text-center">{title}</h2>
          {description && (
            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed max-w-[700px] mx-auto text-center">
              {description}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
}
