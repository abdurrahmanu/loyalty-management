/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        mobile: "500px",
      },
      colors: {
        primary_bg: "#121b27",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
