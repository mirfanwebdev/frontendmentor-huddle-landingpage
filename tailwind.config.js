/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        lightPink: "hsl(321,100%,78%)",
        lightRed: "hsl(0,100%,63%)",
        darkCyan: "hsl(192,100%,9%)",
        paleBlue: "hsl(207,100%,98%)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
