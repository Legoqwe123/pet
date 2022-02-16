const rules = require('../common/eslint.rules.cjs');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // add the TypeScript parser
  plugins: [
    '@typescript-eslint' // add the TypeScript plugin
  ],
  rules,
};