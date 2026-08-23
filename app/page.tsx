import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/Experience";
import Projects from "@/components/Projects";
import FeaturedProjectSection from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-gray-100 overflow-x-hidden relative selection:bg-violet-500/20 selection:text-white">
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />

      {/* Persistent Global Navigation */}
      <Navbar />

      {/* Main Single Page Scrollable Wrapper */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <FeaturedProjectSection />
        <Projects />
        <Services />
        <Contact />
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
