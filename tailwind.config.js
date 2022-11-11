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
        "sapphire":"#2A5B75",
        "blush": "#F9F0F2",
      },
      backgroundImage: {
        "watercolor": "url('/public/watercolor.jpg')",
      }
    },
  },
  plugins: [],
}
