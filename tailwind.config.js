const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100": "#9cdbdd",
        },
        red: {
          ...colors.red,
          '300': "#FF7048"
        }
      },
      fontFamily: {
        'serif': ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
