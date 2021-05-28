module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal-grey': '#8DAAA6',
        'off-white': '#FBEEE6',
        'dark-grey': '#61726F',
        'pale-yellow': '#FEDBB1'
      },
      fontFamily: {
        main: 'Hind'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
