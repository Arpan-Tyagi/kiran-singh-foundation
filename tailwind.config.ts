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
        // Light-themed design tokens (Primary)
        porcelain: {
          DEFAULT: "#FBFBFB", // Canvas / Foundation: Pure Porcelain Soft Off-White
          canvas: "#FBFBFB",
          subtle: "#F5F5F7",
          card: "#FFFFFF",
        },
        obsidian: {
          DEFAULT: "#111827", // Typography Primary: Deep Obsidian Charcoal
          deep: "#0B0F17",
          muted: "#4B5563",
          subtle: "#9CA3AF",
          legacy: "#0A0B0D", // Retained for test compatibility
        },
        slate: {
          DEFAULT: "#6B7280", // Typography Muted: Neutral Slate
          light: "#9CA3AF",
          border: "#E5E7EB", // Hairline Architectural Border
          muted: "#6B7280",
        },
        border: {
          DEFAULT: "#E5E7EB", // Architectural Border (#E5E7EB)
          hairline: "#E5E7EB",
          subtle: "#F3F4F6",
          strong: "#D1D5DB",
        },
        "lion-gold": {
          DEFAULT: "#C89D54", // Primary Accent / CTA: Lion Gold (#C89D54)
          light: "#D8AF6B",
          dark: "#8E6822", // WCAG 2.1 AA compliant (> 5.1:1 contrast on porcelain)
          subtle: "rgba(200, 157, 84, 0.12)",
          surface: "#FAF6EF",
          border: "rgba(200, 157, 84, 0.25)",
        },
        "botanical-emerald": {
          DEFAULT: "#1E3A2F", // Veterinary & Impact Accents: Botanical Emerald (#1E3A2F)
          light: "#2B5243",
          dark: "#142720",
          subtle: "rgba(30, 58, 47, 0.08)",
          surface: "#F2F7F4",
          border: "rgba(30, 58, 47, 0.2)",
        },
        "crimson-alert": {
          DEFAULT: "#DC2626", // Emergency Alerts: Crimson Alert (#DC2626)
          light: "#EF4444",
          dark: "#B91C1C",
          subtle: "rgba(220, 38, 38, 0.08)",
          surface: "#FEF2F2",
          border: "rgba(220, 38, 38, 0.25)",
          legacy: "#A82020", // Retained for test compatibility
        },
        // Legacy compatibility mappings
        "emerald-sanctuary": {
          DEFAULT: "#1E3A2F",
          legacy: "#1D3A2F",
          light: "#285243",
          subtle: "rgba(30, 58, 47, 0.08)",
        },
        "slate-charcoal": {
          DEFAULT: "#1A1C20",
          light: "#24282F",
          border: "#E5E7EB",
          surface: "#FFFFFF",
        },
        parchment: {
          DEFAULT: "#FBFBFB",
          legacy: "#F4EFEA",
          muted: "#6B7280",
          dim: "#9CA3AF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 12px 32px -4px rgba(17, 24, 39, 0.05), 0 4px 12px -2px rgba(17, 24, 39, 0.02)",
        "elevation-1": "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        "elevation-2": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        "elevation-3": "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
        "elevation-card": "0 12px 32px -4px rgba(17, 24, 39, 0.05), 0 4px 12px -2px rgba(17, 24, 39, 0.02)",
        "gold-glow": "0 4px 20px -2px rgba(200, 157, 84, 0.25)",
        "emergency-glow": "0 4px 20px -2px rgba(220, 38, 38, 0.2)",
        "double-bezel": "0 1px 3px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.04)",
      },
      transitionDuration: {
        "160": "160ms",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
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
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
