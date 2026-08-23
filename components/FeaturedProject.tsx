"use client";

import { Github, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";

export default function FeaturedProjectSection() {
  const { featuredProject } = portfolioConfig;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#060320]/10">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Label (Featured Tag) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-8 bg-violet-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-gradient-purple-cyan animate-pulse">
            {featuredProject.label}
          </span>
        </div>

        {/* Large Split Panel */}
        <div className="w-full glass-card border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Rich Mockup / Image view */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[480px] overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/[0.08]">
            <img
              src={featuredProject.imageUrl}
              alt={featuredProject.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Dark aesthetic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030014]/40 to-[#030014]/10 pointer-events-none" />
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-violet-500/30 backdrop-blur-md text-[10px] font-bold text-violet-300 uppercase tracking-widest">
              <ShieldCheck size={12} className="text-violet-400" />
              Live Production App
            </div>
          </div>

          {/* Right Column: Narrative detail content */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between text-left">
            
            {/* Description Area */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5 tracking-tight group-hover:text-violet-300">
                {featuredProject.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                {featuredProject.description}
              </p>

              {/* Performance Key Metrics (Pills / Counters) */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featuredProject.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl flex flex-col items-center justify-center text-center">
                    <span className="text-base md:text-lg font-bold text-cyan-400">{metric.value}</span>
                    <span className="text-[9px] font-semibold text-gray-500 uppercase mt-0.5 tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Features Checklist */}
              <div className="space-y-3 mb-8">
                {featuredProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Area: Tech and Links */}
            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-violet-500/5 border border-violet-500/10 text-[10px] font-bold text-violet-300 tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredProject.demoUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-violet-500/10 hover:scale-[1.01]"
                >
                  <ExternalLink size={16} />
                  Launch Live App
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-violet-500/50 bg-white/[0.02] hover:bg-violet-500/5 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  <Github size={16} className="text-violet-400" />
                  Source Code
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
