/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'parchment': "url('/public/pink-watercolor.png')",
      }
    },
  },
  plugins: [],
}
