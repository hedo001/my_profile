"use client";

import { Briefcase, Calendar } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const { experiences } = portfolioConfig;

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#7F1D3A]/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-fg mb-3">
            Career Pathway
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Work <span className="text-gradient-purple-cyan">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7F1D3A] to-[#E8D5D2] rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-panel-border md:border-l-0 max-w-4xl mx-auto">
          
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7F1D3A] via-[#A63A5B] to-[#E8D5D2] opacity-70 shadow-lg shadow-[#7F1D3A]/20" />

          {/* Experience Nodes */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${idx}`}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Bullet (Mobile: absolute on left border; Desktop: centered relative node) */}
                  <div className="absolute md:relative left-[-17px] md:left-auto md:mx-auto z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 120 }}
                      className="w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-[#7F1D3A]/30"
                    >
                      <Briefcase size={12} className="text-accent-fg" />
                    </motion.div>
                  </div>

                  {/* Card Container (Offset to align with desktop layout) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-[calc(50%-2rem)] ml-6 md:ml-0 ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="glass-card glow-border p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#7F1D3A]/10 hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Meta Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-panel-border pb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent-fg transition-colors">
                            {exp.position}
                          </h3>
                          <span className="text-sm font-semibold text-accent-fg">
                            {exp.company}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-panel-subtle border border-panel-border text-xs font-semibold text-muted w-fit shrink-0">
                          <Calendar size={12} className="text-accent-fg" />
                          {exp.date}
                        </div>
                      </div>

                      {/* Detail points */}
                      <ul className="space-y-3 mb-6 text-foreground text-sm leading-relaxed">
                        {exp.description.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 animate-pulse" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-accent/10 hover:bg-accent/20 border border-panel-border text-[11px] font-bold text-accent-fg tracking-wide uppercase transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
