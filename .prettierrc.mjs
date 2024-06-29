/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: 'none',
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
