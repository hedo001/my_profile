"use client";

import { Github, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";

export default function FeaturedProjectSection() {
  const { featuredProject } = portfolioConfig;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-panel-subtle">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#7F1D3A]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Label (Featured Tag) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px w-8 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-widest text-gradient-purple-cyan animate-pulse">
            {featuredProject.label}
          </span>
        </div>

        {/* Large Split Panel */}
        <div className="w-full glass-card border border-panel-border rounded-3xl overflow-hidden shadow-2xl shadow-black/20 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Rich Mockup / Image view */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[480px] overflow-hidden group border-b lg:border-b-0 lg:border-r border-panel-border">
            <img
              src={featuredProject.imageUrl}
              alt={featuredProject.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Aesthetic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/40 to-[#080D18]/10 pointer-events-none" />
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/90 border border-panel-border backdrop-blur-md text-[10px] font-bold text-accent-fg uppercase tracking-widest">
              <ShieldCheck size={12} className="text-accent-fg" />
              Live Production App
            </div>
          </div>

          {/* Right Column: Narrative detail content */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between text-left">
            
            {/* Description Area */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-5 tracking-tight group-hover:text-accent-fg">
                {featuredProject.title}
              </h3>
              <p className="text-foreground text-sm md:text-base leading-relaxed mb-8">
                {featuredProject.description}
              </p>

              {/* Performance Key Metrics (Pills / Counters) */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featuredProject.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-panel-subtle border border-panel-border rounded-xl flex flex-col items-center justify-center text-center">
                    <span className="text-base md:text-lg font-bold text-accent-fg">{metric.value}</span>
                    <span className="text-[9px] font-semibold text-muted uppercase mt-0.5 tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Features Checklist */}
              <div className="space-y-3 mb-8">
                {featuredProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle size={16} className="text-accent-fg shrink-0" />
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
                    className="px-2.5 py-1 rounded-lg bg-accent/10 border border-panel-border text-[10px] font-bold text-accent-fg tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredProject.demoUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-[#681830] text-[#FAF7F2] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#7F1D3A]/20 hover:scale-[1.01]"
                >
                  <ExternalLink size={16} />
                  Launch Live App
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-panel-border hover:border-accent bg-panel-subtle hover:bg-panel-surface text-foreground font-semibold text-sm transition-all duration-200"
                >
                  <Github size={16} className="text-accent-fg" />
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
