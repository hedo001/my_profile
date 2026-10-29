"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioConfig";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const { personal } = portfolioConfig;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Simulate standard asynchronous submit delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto return to idle after 4s
      setTimeout(() => setStatus("idle"), 4000);
    }, 1800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactDetails = [
    {
      label: "Email Direct",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
      color: "text-accent-fg border-panel-border bg-accent/10",
    },
    {
      label: "LinkedIn Professional",
      value: personal.linkedin,
      href: personal.linkedin.startsWith("http")
        ? personal.linkedin
        : `https://${personal.linkedin}`,
      icon: Linkedin,
      color: "text-accent-fg border-panel-border bg-accent/10",
    },
    {
      label: "GitHub Source",
      value: personal.github,
      href: personal.github.startsWith("http")
        ? personal.github
        : `https://${personal.github}`,
      icon: Github,
      color: "text-accent-fg border-panel-border bg-accent/10",
    },
    {
      label: "Office Location",
      value: personal.location,
      href: "#",
      icon: MapPin,
      color: "text-accent-fg border-panel-border bg-accent/10",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#7F1D3A]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-fg mb-3">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Contact <span className="text-gradient-purple-cyan">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7F1D3A] to-[#E8D5D2] rounded-full mt-4" />
        </div>

        {/* Form & Info Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct info nodes */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4 leading-tight">
                Let&apos;s build something <span className="text-gradient-purple-cyan">great</span> together.
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
                Have a project, opportunity, or idea? I&apos;d love to hear from you. Feel free to reach out via direct channels or leave a secure ping through the contact desk.
              </p>
            </div>

            {/* Structured details */}
            <div className="space-y-4">
              {contactDetails.map((node) => {
                const Icon = node.icon;
                return (
                  <a
                    key={node.label}
                    href={node.href}
                    target={node.href !== "#" ? "_blank" : undefined}
                    rel={node.href !== "#" ? "noopener noreferrer" : undefined}
                    className="p-4 rounded-xl glass-card hover:bg-panel-surface border border-panel-border hover:border-accent/50 flex items-center gap-4 transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 ${node.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-0.5">
                        {node.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-accent-fg transition-colors truncate block">
                        {node.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Custom Animated Form */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-panel-border p-8 rounded-3xl shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
              
              {/* Form container animation layer */}
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center text-accent-fg mb-6 shadow-lg shadow-[#7F1D3A]/20 animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm text-muted max-w-sm">
                      Thank you, Dilafruzkhon has received your transmission and will reply as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        placeholder="e.g. Sebastian Vance"
                        className="w-full px-5 py-3.5 rounded-xl bg-background/60 border border-panel-border hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent text-foreground placeholder-muted/60 text-sm focus:outline-none transition-all duration-300 shadow-inner"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        placeholder="e.g. sebastian@agency.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-background/60 border border-panel-border hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent text-foreground placeholder-muted/60 text-sm focus:outline-none transition-all duration-300 shadow-inner"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                        Message Content
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        placeholder="Detail your request, architecture needs, or opportunities..."
                        className="w-full px-5 py-3.5 rounded-xl bg-background/60 border border-panel-border hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent text-foreground placeholder-muted/60 text-sm focus:outline-none transition-all duration-300 resize-none shadow-inner leading-relaxed"
                      />
                    </div>

                    {/* CTA Send */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-accent hover:bg-[#681830] text-[#FAF7F2] font-bold text-sm transition-all duration-300 shadow-lg shadow-[#7F1D3A]/20 hover:shadow-[#7F1D3A]/35 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Transmitting Message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
