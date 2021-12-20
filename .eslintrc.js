"use strict";

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["gridsome"],
  extends: [
    "eslint:recommended",
    "plugin:gridsome/recommended"
  ]
};