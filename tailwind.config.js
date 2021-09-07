const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "teal-grey": "#1aa8ad",
        "medium-grey": "#535D5C",
        "off-white": "#FBFBFB",
        "light-grey": "#F5F5F5",
        "dark-grey": "#101010",
        "pale-yellow": "#FEDBB1",
        "dark-yellow": "#E9AE8C",
        "smooth-black": "#151515",
        "code-block": "#161B22",
      },
      fontFamily: {
        sans: ["iA Writer Quattro V", ...fontFamily.sans],
      },
      stroke: (theme) => ({
        "dark-yellow": theme("#E9AE8C"),
      }),
      screens: {
        portrait: { raw: "(orientation: portrait)" },
      },
      typography: (theme) => ({
        light: {
          css: {
            color: theme("colors.gray.400"),
            '[class~="lead"]': {
              color: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.white"),
            },
            strong: {
              color: theme("colors.white"),
            },
            "ol > li::before": {
              color: theme("colors.gray.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.600"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
              borderLeftColor: "#1aa8ad",
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.white"),
            },
            "a code": {
              color: theme("colors.white"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "#161B22",
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
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
};
