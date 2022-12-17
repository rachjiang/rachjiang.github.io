/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "teal": "#459b98",
        "blue": "#5C8EAD",
        "ghost": "#F8FEFF",
        "alabaster":"#F9F6F1",
        "space":"#283044",
        "sapphire":"#2A5B75",
        "thistle": "#D1B3C4",
        "linen": "#FCF8F4",
        "lilac": "#7A8BBD",
        "fuscia": "#9B547C",
        "ruby": "#D81E5B",
      },
    },
    screens: {
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}
