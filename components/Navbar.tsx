"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { personal } = portfolioConfig;

  // Handle navbar styling shift on scroll & sync color scheme
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const resolveTheme = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("color-scheme");
      } catch {}
      if (stored === "dark") {
        setIsDark(true);
      } else if (stored === "light") {
        setIsDark(false);
      } else {
        setIsDark(mediaQuery.matches);
      }
    };

    resolveTheme();
    const handleMediaChange = () => resolveTheme();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "color-scheme") {
        const meta = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
        if (meta) {
          meta.content = e.newValue ?? "light dark";
        }
        resolveTheme();
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleColorScheme = () => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemScheme = systemDark ? "dark" : "light";
    const targetScheme = isDark ? "light" : "dark";

    const meta = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
    try {
      if (targetScheme === systemScheme) {
        localStorage.removeItem("color-scheme");
        if (meta) meta.content = "light dark";
      } else {
        localStorage.setItem("color-scheme", targetScheme);
        if (meta) meta.content = targetScheme;
      }
    } catch {
      if (meta) meta.content = targetScheme;
    }
    setIsDark(targetScheme === "dark");
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-navbar py-4 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7F1D3A] to-[#4A1022] flex items-center justify-center font-bold text-[#FAF7F2] shadow-md shadow-[#7F1D3A]/25 group-hover:scale-105 transition-transform duration-200">
            DM
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-accent-fg transition-colors">
            {personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-foreground font-medium text-sm transition-colors relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7F1D3A] to-[#E8D5D2] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Theme Toggle & Download CV CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleColorScheme}
            className="w-10 h-10 rounded-xl border border-panel-border bg-panel-subtle hover:bg-panel-surface text-foreground flex items-center justify-center transition-all duration-200"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={18} className="text-panel" /> : <Moon size={18} className="text-accent" />}
          </button>
          <a
            href={personal.resumeUrl}
            download="Dilafruzkhon_Mukhtorova_CV.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-panel-border hover:border-accent bg-panel-subtle hover:bg-accent hover:text-[#FAF7F2] text-foreground text-sm font-semibold transition-all duration-200 group shadow-sm hover:shadow-[#7F1D3A]/20"
          >
            <ArrowDownToLine
              size={16}
              className="text-accent-fg group-hover:text-[#FAF7F2] group-hover:translate-y-0.5 transition-all"
            />
            Download CV
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleColorScheme}
            className="w-10 h-10 rounded-xl border border-panel-border bg-panel-subtle text-foreground flex items-center justify-center transition-all duration-200"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={18} className="text-panel" /> : <Moon size={18} className="text-accent" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted hover:text-foreground p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-navbar overflow-hidden border-b border-panel-border bg-background/95"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-foreground font-semibold text-lg transition-colors py-1 border-b border-panel-border/40"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personal.resumeUrl}
                download="Dilafruzkhon_Mukhtorova_CV.pdf"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-[#681830] text-[#FAF7F2] text-base font-bold transition-all duration-200 shadow-lg shadow-[#7F1D3A]/25"
              >
                <ArrowDownToLine size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
