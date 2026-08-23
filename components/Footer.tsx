import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";

export default function Footer() {
  const { personal } = portfolioConfig;
  const currentYear = new Date().getFullYear(); // Dynamic calculation

  const socials = [
    { icon: Github, href: `https://${personal.github}`, title: "GitHub" },
    { icon: Linkedin, href: `https://${personal.linkedin}`, title: "LinkedIn" },
    { icon: Mail, href: `mailto:${personal.email}`, title: "Email" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#030014] py-12 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Author details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400 flex items-center justify-center font-bold text-xs text-white">
              AR
            </div>
            <span className="font-extrabold text-white text-base tracking-tight hover:text-violet-400 transition-colors">
              {personal.name}
            </span>
          </a>
          <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-1">
            Frontend Developer & Architect
          </span>
        </div>

        {/* Quick jump to top anchor */}
        <div className="order-3 md:order-2">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-white/10 hover:border-violet-500/50 bg-white/[0.02] hover:bg-violet-500/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

        {/* Social interactions and copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3 order-2 md:order-3">
          
          {/* Social Pills */}
          <div className="flex items-center gap-4">
            {socials.map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                  title={soc.title}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <span className="text-[11px] font-semibold text-gray-600 tracking-wide">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
