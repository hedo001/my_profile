import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";

export default function Footer() {
  const { personal } = portfolioConfig;
  const currentYear = new Date().getFullYear(); // Dynamic calculation

  const socials = [
    {
      icon: Github,
      href: personal.github.startsWith("http")
        ? personal.github
        : `https://${personal.github}`,
      title: "GitHub",
    },
    {
      icon: Linkedin,
      href: personal.linkedin.startsWith("http")
        ? personal.linkedin
        : `https://${personal.linkedin}`,
      title: "LinkedIn",
    },
    { icon: Mail, href: `mailto:${personal.email}`, title: "Email" },
  ];

  return (
    <footer className="border-t border-panel-border bg-background py-12 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Author details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7F1D3A] to-[#4A1022] flex items-center justify-center font-bold text-xs text-[#FAF7F2]">
              DM
            </div>
            <span className="font-extrabold text-foreground text-base tracking-tight hover:text-accent-fg transition-colors">
              {personal.name}
            </span>
          </a>
          <span className="text-xs text-muted font-semibold tracking-wider uppercase mt-1">
            Frontend Developer &amp; Data Analyst
          </span>
        </div>

        {/* Quick jump to top anchor */}
        <div className="order-3 md:order-2">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-panel-border hover:border-accent bg-panel-subtle hover:bg-panel-surface flex items-center justify-center text-muted hover:text-foreground transition-all duration-300 hover:scale-105"
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
                  className="text-muted hover:text-accent-fg hover:scale-110 transition-all"
                  title={soc.title}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <span className="text-[11px] font-semibold text-muted tracking-wide">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
