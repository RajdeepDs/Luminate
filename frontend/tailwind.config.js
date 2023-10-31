/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#00001C",
        gray: "#A1A0AB",
        purple: {
          DEFAULT: "#552AFF",
          light: "#9382FF",
        },
        blue: {
          DEFAULT: "#0000EE",
          light: "#8CAEF2",
        },
        green: {
          DEFAULT: "#00FF89",
          light: "#ACFED8",
        },
        crimson: {
          DEFAULT: "#F92672",
          light: "#D1AAD7",
        },
        red: {
          DEFAULT: "#F92626",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
