/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', "Roboto", "sans-serif"],
        mono: ["Menlo", "monospace"],
      },
      colors: {
        primary: "#2563eb", // blue-600
        dark: "#0a0a0a",
        light: "#ededed",
      },
      animation: {
        slideIn: "slideIn 0.3s ease forwards",
        fadeIn: "fadeIn 0.3s ease forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
