module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'teal-grey': '#5e7f80',
        'medium-grey': '#535D5C',
        'off-white': '#FBFBFB',
        'dark-grey': '#040404',
        'pale-yellow': '#FEDBB1',
        'dark-yellow': '#E9AE8C',
        'smooth-black': '#111927'
      },
      fontFamily: {
        main: 'Inter'
      },
      stroke: theme => ({
        'dark-yellow': theme('#E9AE8C'),
      }),
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
