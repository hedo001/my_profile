"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import { Briefcase, MapPin, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Clean, high-performance self-animating counter component
function Counter({ value, label }: { value: string; label: string }) {
  const [displayVal, setDisplayVal] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract numerical base (e.g. "3+" -> 3, "99%" -> 99)
  const targetNum = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, ""); // captures "+" or "%"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = targetNum;
          if (end === 0) return;
          const duration = 1500; // Total counter roll duration
          const increment = Math.max(Math.ceil(end / 40), 1);
          const stepTime = Math.max(
            Math.floor(duration / (end / increment)),
            20,
          );

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setDisplayVal(end);
              clearInterval(timer);
            } else {
              setDisplayVal(start);
            }
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [targetNum]);

  return (
    <div
      ref={elementRef}
      className="p-6 rounded-2xl glass-card glow-border flex flex-col items-center justify-center text-center shadow-lg hover:shadow-[#7F1D3A]/10 hover:-translate-y-1 transition-all duration-300"
    >
      <span className="text-4xl md:text-5xl font-extrabold text-gradient-purple-cyan mb-2">
        {displayVal}
        {suffix}
      </span>
      <span className="text-xs md:text-sm font-semibold text-muted uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const { personal, stats } = portfolioConfig;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-fg mb-3">
            Biography
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            About <span className="text-gradient-purple-cyan">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7F1D3A] to-[#E8D5D2] rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stats & Meta Data Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <Counter key={idx} value={stat.value} label={stat.label} />
            ))}

            {/* Core Info Cards */}
            <div className="col-span-2 mt-4 p-6 rounded-2xl glass-card border border-panel-border flex flex-col gap-4 text-sm text-foreground">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent-fg" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-accent-fg" />
                <span>{personal.title}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center text-left">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2.5">
              <User size={22} className="text-accent-fg" />
              Professional Biography
            </h3>
            <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
              {personal.bioLong}
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
              My engineering philosophy revolves around building clean,
              performant React apps with structured TypeScript interfaces. I
              focus deeply on optimization, ensuring fast First Contentful Paint
              times and creating delightful user journeys through polished
              interface animations and logical accessibility design.
            </p>

            {/* Quick Core Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-panel-subtle border border-panel-border flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent-fg shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Performance First
                  </h4>
                  <p className="text-xs text-muted">
                    Strict asset loading rules, lightweight modules, clean
                    styling.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-panel-subtle border border-panel-border flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent-fg shrink-0">
                  🎨
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Pixel-Perfect Dev
                  </h4>
                  <p className="text-xs text-muted">
                    Matching visual design guides to semantic, responsive
                    layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
