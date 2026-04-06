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
        win7: {
          'blue-light': '#2B7CD0',
          'blue': '#0066CC',
          'blue-dark': '#0052A3',
          'gloss-start': '#5BA3E0',
          'gloss-end': '#0066CC',
          'aero': '#DCE7F5',
          'glass': 'rgba(220, 231, 245, 0.85)',
          'taskbar': 'rgba(28, 48, 79, 0.95)',
          'chrome': '#D6E0F0',
          'border': '#8EACCD',
          'shadow': 'rgba(0, 0, 0, 0.3)',
          'title-start': '#4A90D9',
          'title-end': '#2B7CD0',
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
        sans: ["Segoe UI", "Inter", "system-ui", "sans-serif"],
        mono: ["Consolas", "Courier New", "monospace"],
      },
      borderRadius: {
        'win7': '3px',
        'window': '5px',
      },
      boxShadow: {
        'win7': '0 1px 3px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.3) inset',
        'window': '0 5px 15px rgba(0,0,0,0.35), 0 0 1px rgba(255,255,255,0.3) inset',
        'glass': '0 0 0 1px rgba(255,255,255,0.3) inset, 0 2px 6px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;