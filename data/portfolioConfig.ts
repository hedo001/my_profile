export interface Skill {
  name: string;
  category: "frontend" | "frameworks" | "tools" | "others";
  iconName: string;
  glowColor: string; // Tailored glow for each skill
}

export interface Experience {
  company: string;
  position: string;
  date: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

export interface FeaturedProject {
  title: string;
  label: string;
  description: string;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  gradient: string;
}

export const portfolioConfig = {
  personal: {
    name: "Dilafruzkhon Mukhtorova",
    title: "Mid-Level Frontend Engineer & Creative Developer",
    availability: "Available for opportunities",
    resumeUrl: "#", // Standard CV download anchor
    email: "dilafruzkhon.mukhtorova@gmail.com",
    github: "https://github.com/hedo001",
    linkedin: "https://www.linkedin.com/in/dilafruzkhon-mukhtorova-245328223",
    location: "Remote",
    bioShort:
      "I build modern, scalable, and beautiful web experiences with React, Next.js, and TypeScript.",
    bioLong:
      "I am a passionate software engineer specializing in frontend architecture, user experience design, and interactive web graphics. Over the past 3+ years, I have collaborated with design agencies, fast-growing startups, and enterprise clients to transform complex ideas into polished, high-performance web applications that run flawlessly across all viewports.",
  },

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "12+", label: "Technologies Mastered" },
    { value: "99%", label: "LCP Optimization" },
  ],

  terminal: {
    userName: "dilafruzkhon",
    hostName: "portfolio-os",
    initialLines: [
      "Initializing PortfolioOS v2.6.0...",
      "Loading developer profile: Dilafruzkhon Mukhtorova",
      "Checking environment: Production Mode [OK]",
      "Loading core technology stacks...",
      "Status: ACTIVE - Ready to compile.",
    ],
    codeSnippet: `// TypeScript profile compilation
import { Developer } from 'alexrivera-profile';

const developer = new Developer({
  name: 'Dilafruzkhon Mukhtorova',
  role: 'Frontend Engineer',
  location: 'Remote',
  skills: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']
});

await developer.compileExperience();
console.log('✨ Portfolio compiles successfully!');`,
  },

  skills: [
    // Frontend
    {
      name: "HTML5 & CSS3",
      category: "frontend",
      iconName: "Html5",
      glowColor: "rgba(239, 68, 68, 0.15)",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      iconName: "FileJson",
      glowColor: "rgba(234, 179, 8, 0.15)",
    },
    {
      name: "TypeScript",
      category: "frontend",
      iconName: "Code",
      glowColor: "rgba(59, 130, 246, 0.15)",
    },
    {
      name: "React.js",
      category: "frontend",
      iconName: "Atom",
      glowColor: "rgba(6, 182, 212, 0.15)",
    },

    // Frameworks
    {
      name: "Next.js (App Router)",
      category: "frameworks",
      iconName: "Layers",
      glowColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      name: "Tailwind CSS",
      category: "frameworks",
      iconName: "Palette",
      glowColor: "rgba(14, 165, 233, 0.15)",
    },
    {
      name: "Chakra UI",
      category: "frameworks",
      iconName: "Sparkles",
      glowColor: "rgba(49, 151, 149, 0.15)",
    },
    {
      name: "Material UI",
      category: "frameworks",
      iconName: "Compass",
      glowColor: "rgba(0, 129, 203, 0.15)",
    },

    // Tools
    {
      name: "Git",
      category: "tools",
      iconName: "GitBranch",
      glowColor: "rgba(240, 80, 50, 0.15)",
    },
    {
      name: "GitHub",
      category: "tools",
      iconName: "Github",
      glowColor: "rgba(255, 255, 255, 0.15)",
    },
    {
      name: "REST APIs",
      category: "tools",
      iconName: "Server",
      glowColor: "rgba(16, 185, 129, 0.15)",
    },
    {
      name: "Framer Motion",
      category: "tools",
      iconName: "Activity",
      glowColor: "rgba(217, 70, 239, 0.15)",
    },
  ] as Skill[],

  experiences: [
    {
      company: "Osnova",
      position: "Mid-Level Frontend Engineer",
      date: "2026 - Present",
      description: [
        "Architected and migrated legacy dashboards to Next.js 14 App Router, resulting in a 40% improvement in Initial Page Load speeds.",
        "Created a unified company-wide React component library powered by Tailwind CSS and Radix UI, optimizing accessibility and UI consistency.",
        "Mentored junior engineers and led code review processes to maintain type safety and strict ESLint compliance.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React Query",
      ],
    },
    {
      company: "Udevs",
      position: "Frontend Developer",
      date: "2023 - 2024",
      description: [
        "Developed custom high-performance e-commerce platforms and SaaS websites using React and Tailwind CSS.",
        "Integrated intricate visual micro-interactions and scroll-driven page flows utilizing Framer Motion.",
        "Collaborated closely with visual designers to implement pixel-perfect Figma prototypes into responsive components.",
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "REST APIs",
        "Chakra UI",
      ],
    },
  ] as Experience[],

  projects: [
    {
      title: "Insurance Platform",
      description:
        "A premium insurance web application with multi-tier quote calculators, real-time claim tracking, and interactive slider forms. Engineered with React Query for snappy API sync.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Chakra UI",
        "React Query",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/alexrivera-dev/insurance-app-demo",
      demoUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Analytics Dashboard",
      description:
        "An interactive, ultra-responsive business intelligence dashboard. Features beautiful visual graphics (charts, circles, flows) with multi-dimensional filtering, and seamless CSV data exports.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/alexrivera-dev/analytics-dashboard-demo",
      demoUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Experience",
      description:
        "A futuristic shopping experience featuring secure user authentication, instant search indexing, seamless cart transitions, and elegant glassmorphic checkout drawers.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand State",
        "Stripe API",
      ],
      githubUrl: "https://github.com/alexrivera-dev/ecommerce-platform-demo",
      demoUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
  ] as Project[],

  featuredProject: {
    title: "NeuroSync SaaS Interface",
    label: "FEATURED PROJECT",
    description:
      "An advanced, high-performance artificial intelligence workspace application. NeuroSync bridges scattered LLMs and custom agent databases into a singular workspace. Engineered from scratch with performance-first principles, achieving extreme rendering speed and accessibility standards.",
    metrics: [
      { label: "PageSpeed Score", value: "98/100" },
      { label: "Checkouts Speedup", value: "42%" },
      { label: "Bundle Size Saved", value: "65KB" },
    ],
    keyFeatures: [
      "Custom vector database lookup visual charts",
      "Extremely robust dark theme with translucent glass containers",
      "Dynamic prompt orchestration templates",
      "Fully keyboard navigable accessibility layouts",
    ],
    technologies: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
      "Radix UI Primitive",
    ],
    githubUrl: "https://github.com/alexrivera-dev/neurosync-ai-saas",
    demoUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop",
  } as FeaturedProject,

  services: [
    {
      title: "Frontend Development",
      description:
        "Building exceptionally fast, fully responsive, and robustly structured interfaces using standard React, Next.js, and typescript configurations.",
      iconName: "Cpu",
      gradient: "from-violet-600 via-indigo-600 to-blue-500",
    },
    {
      title: "Web App Design",
      description:
        "Developing robust, modern single-page applications and serverside-rendered architectures, integrating custom global store management solutions.",
      iconName: "Monitor",
      gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Transforming high-fidelity Figma designs into pixel-perfect responsive components, ensuring complete structural matches across all screen sizes.",
      iconName: "Layers",
      gradient: "from-blue-600 via-cyan-600 to-teal-500",
    },
    {
      title: "Performance Audits",
      description:
        "Optimizing overall rendering speeds, core web vitals (LCP, INP, CLS), asset loading processes, and achieving WCAG 2.1 AA accessibility guidelines.",
      iconName: "Zap",
      gradient: "from-cyan-600 via-teal-600 to-emerald-500",
    },
  ] as Service[],
};
