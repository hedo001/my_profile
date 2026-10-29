import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        panel: "var(--panel)",
        "panel-surface": "var(--panel-surface)",
        "panel-subtle": "var(--panel-subtle)",
        "panel-border": "var(--panel-border)",
        accent: "var(--accent)",
        "accent-fg": "var(--accent-text)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};
export default config;
