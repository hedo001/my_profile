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
    <section id="projects" className="py-20 md:py-28 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-purple-cyan">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full mt-4" />
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
              className="group rounded-2xl overflow-hidden glass-card border border-white/[0.06] hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 flex flex-col h-full relative"
            >
              {/* Card Image Area */}
              <div className="relative h-56 w-full overflow-hidden border-b border-white/[0.05] shrink-0">
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Tech Overlays / Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-violet-950/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Floating link controls (Reveal on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#030014]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white hover:text-violet-400 hover:border-violet-500/50 hover:scale-110 transition-all duration-200"
                    title="View GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={proj.demoUrl}
                    className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-all duration-200"
                    title="View Live Demonstration"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-extrabold text-white group-hover:text-violet-300 transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[10px] font-bold text-gray-400 group-hover:text-cyan-300 group-hover:border-cyan-500/10 transition-all"
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
