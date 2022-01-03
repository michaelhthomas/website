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
      typography: {
        DEFAULT: {
          css: {
            a: {
              'text-decoration': 'none',
              'background': `linear-gradient(${colors.blue[300]}, ${colors.blue[300]})`,
              'background-repeat': 'no-repeat',
              'background-size': '120% 0.2em',
              'background-position': '0 100%',
              'transition': 'all 200ms',

              '&:hover': {
                'background-size': '100% 100%',
              },
              '&:focus': {
                'background-size': '100% 100%',
              }
            }
          },
        },
        DARK: {
          css: {
            'a': {
              'background': `linear-gradient(${colors.blue[700]}, ${colors.blue[700]})`,
              'text-decoration': 'none',
              'background-repeat': 'no-repeat',
              'background-size': '120% 0.2em',
              'background-position': '0 100%',
              'transition': 'all 200ms',

              '&:hover': {
                'background-size': '100% 100%',
              },
              '&:focus': {
                'background-size': '100% 100%',
              }
            }
          }
        }
      }
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
