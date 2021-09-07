module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "npm run type-check",

  // Run ESLint & Prettier on changes to JavaScript/TypeScript/CSS files
  "**/*.((ts|js)?(x)|css)": [
    (filenames) => `npm run lint . ${filenames.join(" ")}`,
    () => "npm run prettier",
  ],
};
