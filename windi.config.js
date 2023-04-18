// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import typographyPlugin from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      // Primary Color
      colors: {
        primary: colors.blue
      },
      fontSize: {
        '5xl': ['3rem', '1.15'],
        '6xl': ['4rem', '1.15'],
        '7xl': ['5rem', '1.15']
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              color: 'rgba(0, 0, 0, 0.75)'
            },
            a: {
              'text-decoration': 'none',
              background: `linear-gradient(${colors.blue[300]}, ${colors.blue[300]})`,
              'background-repeat': 'no-repeat',
              'background-size': '120% 0.2em',
              'background-position': '0 100%',
              transition: 'all 200ms',

              '&:hover': {
                'background-size': '100% 100%'
              },
              '&:focus': {
                'background-size': '100% 100%'
              }
            },
            code: {
              background: colors.trueGray[200],

              '&::before': {
                content: '"﻿" !important' // Use a zero width non-breaking space to fix some weird line break issues
              },
              '&::after': {
                content: '"" !important'
              }
            }
          }
        },
        lg: {
          css: {
            h1: {
              marginTop: '3rem',
              marginBottom: '0',
              fontSize: '2.5rem'
            },
            h2: {
              marginTop: '3rem',
              marginBottom: '1.5rem',
              fontSize: '1.5rem'
            }
          }
        },
        xl: {
          css: {
            h1: {
              marginTop: '3.5rem',
              marginBottom: '0',
              fontSize: '3rem'
            },
            h2: {
              marginTop: '3.5rem',
              marginBottom: '1.5rem',
              fontSize: '1.8rem'
            }
          }
        },
        DARK: {
          css: {
            p: {
              color: 'rgba(255, 255, 255, 0.75)'
            },
            a: {
              background: `linear-gradient(${colors.blue[700]}, ${colors.blue[700]})`,
              'text-decoration': 'none',
              'background-repeat': 'no-repeat',
              'background-size': '120% 0.2em',
              'background-position': '0 100%',
              transition: 'all 200ms',

              '&:hover': {
                'background-size': '100% 100%'
              },
              '&:focus': {
                'background-size': '100% 100%'
              }
            },
            code: {
              background: colors.trueGray[700]
            }
          }
        }
      }
    }
  },
  plugins: [
    typographyPlugin({
      dark: true
    })
  ],
  variants: {
    typography: ['dark']
  }
});
