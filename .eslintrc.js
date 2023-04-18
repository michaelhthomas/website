'use strict';

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['gridsome', 'prettier'],
  extends: ['eslint:recommended', 'plugin:gridsome/recommended'],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['**/*.vue', '**/*.ts']
    }
  ]
};
