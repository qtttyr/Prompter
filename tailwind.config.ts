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
        cosmic: {
          black: "#020202",
          violet: "#2d0b5a",
          blue: "#0a84ff",
          dark: "#0b0b0f",
          border: "#1c1c28",
        }
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
