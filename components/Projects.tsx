"use client";

import { Github, ExternalLink } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";
import { motion } from "framer-motion";

export default function Projects() {
  const { projects } = portfolioConfig;

  // Animating grid elements
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-fg mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Selected <span className="text-gradient-purple-cyan">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7F1D3A] to-[#E8D5D2] rounded-full mt-4" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl overflow-hidden glass-card border border-panel-border hover:border-accent/50 hover:shadow-2xl hover:shadow-[#7F1D3A]/10 flex flex-col h-full relative"
            >
              {/* Card Image Area */}
              <div className="relative h-56 w-full overflow-hidden border-b border-panel-border shrink-0">
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Tech Overlays / Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[#7F1D3A]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Floating link controls (Reveal on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#080D18]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E8D5D2] flex items-center justify-center text-[#30252A] hover:text-[#7F1D3A] hover:border-[#7F1D3A] hover:scale-110 transition-all duration-200"
                    title="View GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={proj.demoUrl}
                    className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-[#FAF7F2] hover:bg-[#681830] hover:scale-110 transition-all duration-200"
                    title="View Live Demonstration"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-extrabold text-foreground group-hover:text-accent-fg transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-panel-subtle border border-panel-border text-[10px] font-bold text-muted group-hover:text-accent-fg group-hover:border-accent/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
