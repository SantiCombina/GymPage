/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-main":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/assets/hero.webp')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      textColor: {
        primary: "#F0160F",
      },
      backgroundColor: {
        primary: "#111111",
        secondary: "#151515",
      },
      borderColor: {
        primary: "#F0160F",
      },
      colors: {
        primary: "#F0160F",
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
