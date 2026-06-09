/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d81610",
        secondary: "#ffffff",
        dark: "#000000",
        gray: {
          50: "#f9f9f9",
          100: "#f3f3f3",
          200: "#e8e8e8",
          300: "#d4d4d4",
          400: "#a1a1a1",
          500: "#808080",
          600: "#666666",
          700: "#444444",
          800: "#222222",
          900: "#111111",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
