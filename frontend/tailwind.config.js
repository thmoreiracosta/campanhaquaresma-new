/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "1030px", // breakpoint customizado para tablets
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInUpSlow: "fadeInUp 1.2s ease-out forwards",
      },
      colors: {
        purple: {
          950: "#2a0a3a",
          900: "#4A1A6B",
          700: "#6B2D8A",
          200: "#E8D5E8",
          100: "#F5F0F8",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        rose: {
          500: "#D4789C",
          400: "#E89BAC",
          300: "#E8A4BC",
          600: "#C05678",
        },
        gold: {
          400: "#C9A227",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        crimson: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [],
};