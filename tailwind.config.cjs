/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      sm: "280px",
      md: "850px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      primary: "#252525",
      secondary: "#fafbfe",
      accent: "#e0c091",
      text: "#fff",
    },
    fontFamily: {
      sans: ["Hind", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
