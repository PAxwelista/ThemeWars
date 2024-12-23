/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/images/background-light.jpg')",
        dark: "url('/images/background-dark.jpg')",
      },
    },
    fontFamily: {
      starjedi: ["Starjedi", "Georgia", "sans-serif"],
    },
  },
  plugins: [],
};
