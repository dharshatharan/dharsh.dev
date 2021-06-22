module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'teal-grey': '#729D9E',
        'medium-grey': '#535D5C',
        'off-white': '#FBFBFB',
        'dark-grey': '#323635',
        'pale-yellow': '#FEDBB1',
        'dark-yellow': '#E9AE8C',
        'smooth-black': '#040404'
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
