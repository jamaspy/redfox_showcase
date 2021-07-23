module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "fox-blue": "#154468",
        "fox-orange": "#CF5B2E",
        "fox-yellow": "#C38737",
        "fox-green": "#26865D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
