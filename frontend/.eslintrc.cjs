module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // add the TypeScript parser
  plugins: [
    'svelte3',
    '@typescript-eslint' // add the TypeScript plugin
  ],
  overrides: [ // this stays the same
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    "@typescript-eslint/no-unused-vars":  2,
  },
  settings: {
    'svelte3/typescript': true, // load TypeScript as peer dependency
  }
};