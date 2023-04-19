import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
import { theme } from 'unocss/preset-mini';

const { colors } = theme;

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'a, h1, h2, h3, h4, h5, ol, ul, li': {
          color: colors.trueGray[900],
          'line-height': 1.8
        },
        '.dark a, .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark ol, .dark ul, .dark li':
          {
            color: colors.trueGray[100]
          },
        p: {
          color: 'rgba(0, 0, 0, 0.75)'
        },
        '.dark p': {
          color: 'rgba(255, 255, 255, 0.75)'
        },
        'h1, h2, h3, h4, h5, h6': {
          'font-weight': 800
        },
        a: {
          'text-decoration': 'none',
          background: `linear-gradient(${colors.blue[300]}, ${colors.blue[300]})`,
          'background-repeat': 'no-repeat',
          'background-size': '120% 0.2em',
          'background-position': '0 100%',
          transition: 'all 200ms'
        },
        'a:hover': {
          'background-size': '100% 100%'
        },
        'a:focus': {
          'background-size': '100% 100%'
        },
        '.dark a': {
          background: `linear-gradient(${colors.blue[700]}, ${colors.blue[700]})`,
          'background-repeat': 'no-repeat',
          'background-size': '120% 0.2em',
          'background-position': '0 100%'
        },
        ':root code': {
          background: colors.trueGray[200],
          'font-family': '"Roboto Mono", monospace',
          color: 'rgba(0, 0, 0, 0.75)'
        },
        'code::before': {
          content: '"﻿" !important'
        },
        'code::after': {
          content: '"" !important'
        },
        '.dark code': {
          background: colors.trueGray[700],
          color: 'rgba(255, 255, 255, 0.75)'
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  include: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.md'
  ],
  theme: {
    // Primary Color
    colors: {
      primary: colors.blue
    },
    fontSize: {
      '5xl': ['3rem', '1.15'],
      '6xl': ['4rem', '1.15'],
      '7xl': ['5rem', '1.15']
    }
  }
});
