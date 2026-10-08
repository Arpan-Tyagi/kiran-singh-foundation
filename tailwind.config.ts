import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0B0D",
          deep: "#050607",
          muted: "#121418",
        },
        parchment: {
          DEFAULT: "#F4EFEA",
          muted: "#D6CFC7",
          dim: "#A39E96",
        },
        "lion-gold": {
          DEFAULT: "#C89D54",
          light: "#E0B774",
          dark: "#967234",
          subtle: "rgba(200, 157, 84, 0.15)",
        },
        "slate-charcoal": {
          DEFAULT: "#1A1C20",
          light: "#24282F",
          border: "#2E333C",
          surface: "rgba(26, 28, 32, 0.8)",
        },
        "emerald-sanctuary": {
          DEFAULT: "#1D3A2F",
          light: "#285243",
          border: "#346855",
          subtle: "rgba(29, 58, 47, 0.25)",
        },
        "crimson-alert": {
          DEFAULT: "#A82020",
          light: "#C82C2C",
          border: "#821616",
          subtle: "rgba(168, 32, 32, 0.2)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "double-bezel": "inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "gold-glow": "0 0 35px -5px rgba(200, 157, 84, 0.35)",
        "emergency-glow": "0 0 35px -5px rgba(168, 32, 32, 0.45)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
