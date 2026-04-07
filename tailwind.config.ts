import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        site: {
          bg: "#05070b",
          "bg-alt": "#090e15",
          panel: "#0d131c",
          "panel-strong": "#111a25",
          line: "#1b2433",
          "line-strong": "#273348",
          text: "#eef2ff",
          muted: "#9ca9c8",
          soft: "#7080a7",
          accent: "#5a85ff",
          "accent-soft": "#8cb5ff",
          warm: "#f3b562",
        },
        stitch: {
          primary: "#0f62fe",
          "surface-container": "#f4f4f4",
          "surface-container-low": "#f4f4f4",
          "on-surface-variant": "#525252",
          "outline-variant": "#e0e0e0",
          outline: "#8d8d8d",
          "surface-bright": "#ffffff",
          "on-secondary-container": "#525252",
          tertiary: "#198038",
          error: "#da1e28",
        },
        win7: {
          'blue-light': '#2B7CD0',
          'blue': '#0066CC',
          'blue-dark': '#0052A3',
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["Sora", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "Courier New", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        none: "0px",
        'win7': '3px',
        'window': '5px',
      },
      boxShadow: {
        win7: "0 1px 3px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.3) inset",
        window:
          "0 5px 15px rgba(0,0,0,0.35), 0 0 1px rgba(255,255,255,0.3) inset",
        glass:
          "0 0 0 1px rgba(255,255,255,0.3) inset, 0 2px 6px rgba(0,0,0,0.25)",
        site:
          "0 32px 100px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(140, 181, 255, 0.08)",
        "site-glow":
          "0 28px 80px rgba(17, 40, 87, 0.45), 0 0 0 1px rgba(140, 181, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
