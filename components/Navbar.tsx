"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personal } = portfolioConfig;

  // Handle navbar styling shift on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-200">
            DM
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-violet-400 transition-colors">
            {personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white font-medium text-sm transition-colors relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Download CV CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={personal.resumeUrl}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-violet-500/50 bg-white/[0.02] hover:bg-violet-500/5 text-sm font-semibold transition-all duration-200 group shadow-sm hover:shadow-violet-500/10"
          >
            <ArrowDownToLine
              size={16}
              className="text-violet-400 group-hover:translate-y-0.5 transition-transform"
            />
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-navbar overflow-hidden border-b border-white/5 bg-[#030014]/95"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white font-semibold text-lg transition-colors py-1 border-b border-white/[0.02]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personal.resumeUrl}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-base font-bold transition-all duration-200 shadow-lg shadow-violet-500/25"
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
