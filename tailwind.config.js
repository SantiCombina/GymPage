/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-main":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/bghero.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      textColor: {
        primary: "rgba(0, 200, 250)",
      },
      backgroundColor: {
        primary: "#111111",
        secondary: "#151515",
      },
      maxWidth: {
        notebook: "1440px",
      },
    },
  },
  plugins: [],
};
