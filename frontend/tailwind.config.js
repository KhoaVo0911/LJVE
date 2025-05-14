/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oneFtV: ["VIPTrends", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        gilroyLight: ["Gilroy-Light", "sans-serif"],
        neoBold: ["Neogrotesk-Bold", "sans-serif"],
        neoAltBold: ["Neogrotesk-AltBold", "sans-serif"],
        neoSCBlack: ["Neogrotesk-NeoSCBlack", "sans-serif"],
        beauSans: ["BeauSans", "sans-serif"],
        beauSans: ["BeauSansBold", "sans-serif"],
        beauSansItalic: ["BeauSansItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
