module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal-grey': '#729D9E',
        'medium-grey': '#535D5C',
        'off-white': '#FBFBFB',
        'dark-grey': '#323635',
        'pale-yellow': '#FEDBB1',
        'dark-yellow': '#E9AE8C'
      },
      fontFamily: {
        main: 'Hind'
      },
      stroke: theme => ({
        'dark-yellow': theme('#E9AE8C'),
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
