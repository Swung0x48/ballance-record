module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'game': ['Squarish Sans CT Regular SC']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#6828285c',
      secondary: '#27272799'
    }),
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
