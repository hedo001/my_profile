"use client";

import * as Icons from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";
import { motion } from "framer-motion";

// High-fidelity icon mapper to ensure compile-time and runtime safety
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  let IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: string | number }>>)[name];
  if (!IconComponent) IconComponent = Icons.Code; // Fallback to generic Code icon

  return <IconComponent className={className} size={30} />;
}

export default function Services() {
  const { services } = portfolioConfig;

  // Animating components on scroll
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#060320]/15">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Service Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Core <span className="text-gradient-purple-cyan">Offerings</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl glass-card border border-white/[0.06] hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 flex flex-col items-start text-left transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner Glowing Highlight */}
              <div
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-violet-600/10 group-hover:bg-violet-600/20 blur-xl transition-colors pointer-events-none"
              />

              {/* Icon area with customized gradients */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <ServiceIcon name={service.iconName} />
              </div>

              {/* Title & Detail */}
              <h3 className="text-lg md:text-xl font-extrabold text-white group-hover:text-violet-300 transition-colors mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
