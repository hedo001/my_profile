"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { portfolioConfig, Skill } from "@/data/portfolioConfig";
import { motion, Variants } from "framer-motion";

// High-fidelity icon mapper to ensure compile-time and runtime safety
function SkillIcon({ name, className }: { name: string; className?: string }) {
  let IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: string | number }>>)[name];
  
  // Custom redirects for specialized cases
  if (name === "Html5") IconComponent = Icons.Code2;
  if (!IconComponent) IconComponent = Icons.Code; // Robust fallback

  return <IconComponent className={className} size={28} />;
}

export default function Skills() {
  const { skills } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "frameworks", label: "Frameworks & UI" },
    { id: "tools", label: "Tools & Core" },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  // Stagger container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#060320]/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-purple-cyan">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent shadow-lg shadow-violet-500/25 scale-[1.03]"
                  : "bg-white/[0.02] text-gray-400 hover:text-white border-white/[0.05] hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredSkills.map((skill: Skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-5 md:p-6 rounded-2xl glass-card glow-border hover:shadow-2xl flex flex-col items-start gap-4 transition-all duration-300 relative overflow-hidden group"
              style={{
                // Set the custom glow shadow behind the card on hover using custom css vars or standard style tag
                boxShadow: `0 0 0px transparent`,
              }}
            >
              {/* Dynamic Glow Overlay inside card */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${skill.glowColor}, transparent 60%)`,
                }}
              />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-violet-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 relative z-10">
                <SkillIcon name={skill.iconName} />
              </div>

              {/* Title & Level */}
              <div className="relative z-10 mt-1">
                <h3 className="font-bold text-base md:text-lg text-white group-hover:text-violet-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase mt-1 block">
                  {skill.category === "frontend"
                    ? "Frontend UI"
                    : skill.category === "frameworks"
                    ? "Framework / CSS"
                    : "Development Tool"}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
