/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        gilroyLight: ['Gilroy-Light', 'sans-serif'],
        neoBold: ['Neogrotesk-Bold', 'sans-serif'],
        neoAltBold: ['Neogrotesk-AltBold', 'sans-serif'],
        beauSans: ['BeauSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}