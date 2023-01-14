/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "semi-dark-blue": "#161D2F",
        "dark-blue": "#10141E",
        "greyish-blue": "#5A698F",
        "own-red": "#FC4747",
      },
    },
  },
  plugins: [],
}