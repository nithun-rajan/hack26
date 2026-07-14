import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deck: "#0b0516",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        pixel: ["var(--font-pixel)", "var(--font-mono)", "ui-monospace", "monospace"],
        "pixel-circle": ["var(--font-pixel-circle)", "var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        sail: {
          "0%": { transform: "translateX(-140px)" },
          "100%": { transform: "translateX(100vw)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        fall: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(220deg)", opacity: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.10" },
          "48%": { opacity: "0.10" },
          "50%": { opacity: "0.16" },
          "52%": { opacity: "0.10" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        bob: "bob 5s ease-in-out infinite",
        sail: "sail 38s linear infinite",
        drift: "sail 150s linear infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        fall: "fall linear forwards",
      },
    },
  },
  plugins: [],
};

export default config;
