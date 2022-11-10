/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grape": "#9480B3",
        "moss": "#8DAC86",
        "blue": "#5C8EAD",
        "timberwolf": "#E4DFDA",
        "alabaster":"#F9F6F1",
        "space":"#283044",
        "isabelline":"#f1f1f1",
      },
      backgroundImage: {
        "yellow": "url('/public/yellow.jpg')",
        "geometric": "url('/public/geometric.jpg')",
      }
    },
  },
  plugins: [],
}
