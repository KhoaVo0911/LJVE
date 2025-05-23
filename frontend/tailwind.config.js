/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
