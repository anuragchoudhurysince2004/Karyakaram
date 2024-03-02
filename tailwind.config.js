/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        play: ["Play", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        teko: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
};
