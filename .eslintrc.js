'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['gridsome', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:gridsome/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: [
          'Layout',
          'g-image',
          'g-link',
          'VueRemarkContent',
          'MLink',
          'Icon',
          'giscus-widget'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['src/**/*.vue', 'src/**/*.ts'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint']
    }
  ]
};
