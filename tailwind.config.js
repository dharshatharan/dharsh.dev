const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'teal-grey': '#5e7f80',
        'medium-grey': '#535D5C',
        'off-white': '#FBFBFB',
        'dark-grey': '#101010',
        'pale-yellow': '#FEDBB1',
        'dark-yellow': '#E9AE8C',
        'smooth-black': '#151515'
      },
      fontFamily: {
        sans: ['iA Writer Quattro V', ...fontFamily.sans]
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
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}
