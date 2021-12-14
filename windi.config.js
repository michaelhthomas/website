// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typographyPlugin from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.pug',
      './src/**/*.md'
    ],
  },
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': colors.blue,
      },
    },
  },
  plugins: [
    typographyPlugin
  ]
});
