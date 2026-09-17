import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        "background-secondary": "#0B0B0B",
        foreground: "#F5F2EA",
        "text-primary": "#F5F2EA",
        "text-secondary": "#A7A39A",
        "text-muted": "rgba(245, 242, 234, 0.45)",
        "border-subtle": "rgba(245, 242, 234, 0.12)",
        "border-highlight": "rgba(216, 179, 106, 0.35)",
        gold: {
          DEFAULT: "#D8B36A",
          bright: "#F0C978",
          subtle: "rgba(216, 179, 106, 0.15)",
          glow: "rgba(216, 179, 106, 0.35)",
        },
        echolance: {
          bg: "#080808",
          surface: "#0B0B0B",
          "surface-card": "rgba(245, 242, 234, 0.03)",
          "surface-hover": "rgba(245, 242, 234, 0.06)",
          border: "rgba(245, 242, 234, 0.12)",
          "border-light": "rgba(245, 242, 234, 0.20)",
          gold: "#D8B36A",
          "gold-bright": "#F0C978",
          "gold-subtle": "rgba(216, 179, 106, 0.15)",
          "gold-glow": "rgba(216, 179, 106, 0.35)",
          muted: "#A7A39A",
          secondary: "rgba(245, 242, 234, 0.65)",
        },
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 6s ease-in-out infinite alternate",
        "spin-very-slow": "spin 40s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

