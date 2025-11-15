/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["'Rubik'", "sans-serif"],
      },
      colors: {
        midnight: "#0E0D39",
        coal: "#3E3D54",
        slate: "#6B6A85",
        cloud: "#FAFAFB",
        mist: "#E3E3EE",
        aqua: "#C1DCE2",
        teal: "#A6C9D3",
        accent: "#9057EC",
        accent2: "#6F33C8",
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(14,13,57,0.3)",
        glow: "0 20px 35px rgba(68,61,252,0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
