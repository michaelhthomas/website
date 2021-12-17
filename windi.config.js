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
    extend: {
      // Primary Color
      colors: {
        'primary': colors.blue,
      },
    },
  },
  plugins: [
    typographyPlugin({
      dark: true,
    })
  ],
  variants: {
    typography: ["dark"],
  },
});
