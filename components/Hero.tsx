"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, terminal } = portfolioConfig;
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [typingSnippet, setTypingSnippet] = useState("");

  // Simulate terminal boot and code compilation
  useEffect(() => {
    const startTyping = () => {
      let charIdx = 0;
      const typingInterval = setInterval(() => {
        if (charIdx < terminal.codeSnippet.length) {
          setTypingSnippet((prev) => prev + terminal.codeSnippet[charIdx]);
          charIdx++;
        } else {
          clearInterval(typingInterval);
        }
      }, 18);
    };

    // 1. Sequentially boot up initial terminal lines
    let lineIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx < terminal.initialLines.length) {
        setTerminalLines((prev) => [...prev, terminal.initialLines[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(interval);
        // Start typing code snippet after booting
        setTimeout(() => startTyping(), 500);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [terminal.initialLines, terminal.codeSnippet]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden">
      {/* Abstract background blobs (Glowing Orbs) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-float" style={{ animationDelay: "-3s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability Dot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personal.availability}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6 text-white"
          >
            Hi, I&apos;m <span className="text-gradient-purple-cyan">{personal.name}</span>
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              Frontend Developer
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
          >
            {personal.bioShort}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02]"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-violet-500/50 bg-white/[0.02] hover:bg-violet-500/5 font-semibold text-gray-300 hover:text-white transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right column: Interactive Terminal Simulator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-lg rounded-2xl glass-card border border-white/10 shadow-2xl shadow-black/50 overflow-hidden relative">
            
            {/* Terminal Header */}
            <div className="bg-white/[0.04] border-b border-white/[0.06] px-5 py-3.5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                <TerminalIcon size={14} className="text-violet-400" />
                bash — {terminal.hostName}
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-gray-300 h-[340px] overflow-y-auto scrollbar-thin">
              {/* Boot sequence logs */}
              {terminalLines.map((line, idx) => (
                <div key={idx} className="text-emerald-400/90 mb-1">
                  <span className="text-gray-500">➜</span> {line}
                </div>
              ))}

              {/* Typed snippet container */}
              {terminalLines.length >= terminal.initialLines.length && (
                <div className="mt-4 text-left">
                  <div className="text-violet-400/90 mb-2">
                    <span className="text-cyan-400 font-semibold">{terminal.userName}</span>
                    <span className="text-gray-400">@</span>
                    <span className="text-violet-400">{terminal.hostName}</span>
                    <span className="text-gray-400">:~$</span> nano profile.ts
                  </div>
                  <pre className="text-cyan-100 whitespace-pre-wrap font-mono leading-relaxed max-w-full">
                    <code>
                      {typingSnippet}
                      <span className="inline-block w-2 h-4 bg-white ml-0.5 animate-pulse" />
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
