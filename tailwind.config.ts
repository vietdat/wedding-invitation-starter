import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fdf7f5",
          100: "#fae9e4",
          200: "#f5d3c8",
          300: "#ecb3a0",
          400: "#df8f73",
          500: "#c96f52",
        },
        gold: {
          400: "#c9a96a",
          500: "#b8934a",
          600: "#9a7a38",
        },
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
