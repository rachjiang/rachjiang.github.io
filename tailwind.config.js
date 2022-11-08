/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grape": "#9480B3",
        "moss": "#8DAC86",
        "blue": "#5C8EAD",
        "desert": "#AE847E",
        "alabaster":"#F9F6F1",
        "space":"#283044",
        "onyx":"#373E40",
      },
      backgroundImage: {
        "wildflower": "url('/public/wildflower.jpg')",
      }
    },
  },
  plugins: [],
}
