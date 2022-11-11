/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "teal": "#459b98",
        "blue": "#5C8EAD",
        "timberwolf": "#E4DFDA",
        "alabaster":"#F9F6F1",
        "space":"#283044",
        "sapphire":"#2A5B75",
        "thistle": "#D1B3C4",
        "snow": "#FFFCF2",
        "lilac": "#7A8BBD",
      },
      backgroundImage: {
        "watercolor": "url('/public/watercolor.jpg')",
      }
    },
  },
  plugins: [],
}
