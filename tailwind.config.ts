import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: { marginTop: '1em', marginBottom: '1em', lineHeight: '1.75' },
            h1: { fontSize: '2.25em', marginTop: '1rem', marginBottom: '1rem' },
            h2: {
              fontSize: '1.75em',
              marginTop: '1.75em',
              marginBottom: '0.5em'
            },
            h3: {
              fontSize: '1.375em',
              marginTop: '1.5em',
              marginBottom: '0.5em'
            },
            h4: { fontSize: '1.125em', marginTop: '1em', marginBottom: '1em' },
            pre: {
              fontSize: '1em',
              lineHeight: '1.75',
              marginTop: '1em',
              marginBottom: '1em',
              paddingTop: '1.25rem',
              paddingBottom: '1.25rem',
              paddingInlineStart: '1.5rem',
              paddingInlineEnd: '1.5rem'
            },
            'pre code': { fontSize: '0.875em' },
            strong: { fontWeight: 'bolder' },
            figure: { marginTop: '1em', marginBottom: '1em' },
            blockquote: {
              marginTop: '1em',
              marginBottom: '1em',
              paddingInlineStart: '1em',
              borderInlineStartWidth: '0',
              fontWeight: '400',
              color: 'inherit'
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            ul: {
              marginTop: '1em',
              marginBottom: '1em',
              lineHeight: '1.75',
              paddingInlineStart: '1.25em'
            },
            ol: {
              marginTop: '1em',
              marginBottom: '1em',
              lineHeight: '1.75',
              paddingInlineStart: '1.25em'
            },
            li: { marginTop: '0', marginBottom: '0' },
            'ul > li': { paddingInlineStart: '0' },
            'ol > li': { paddingInlineStart: '0' },
            'ul > li::marker': { color: 'inherit' },
            'ol > li::marker': { color: 'inherit' },
            img: { marginTop: '0', marginBottom: '0' },
            code: { whiteSpace: 'pre', color: 'inherit' },
            'h3 code': { fontSize: '0.875em' },
            // Tailwind collapses margins after headings/rules and at the edges
            // of the block; presetTypography had no such rules. These keys are
            // new, so the plugin emits them after the ones they undo.
            ':is(h1, h2, h3, h4, hr) + :is(p, ul, ol, pre, figure, blockquote)': {
              marginTop: '1em',
              marginBottom: '1em'
            },
            ':is(h1, h2, h3, h4, hr) + h2': { marginTop: '1.75em' },
            ':is(h1, h2, h3, h4, hr) + h3': { marginTop: '1.5em' },
            ':is(h1, h2, h3, h4, hr) + h4': { marginTop: '1em' },
            '> :is(p, ul, ol, pre, figure, blockquote):first-child': {
              marginTop: '1em'
            },
            '> :is(p, ul, ol, pre, figure, blockquote):last-child': {
              marginBottom: '1em'
            },
            '> h1:first-child': { marginTop: '1rem' },
            '> h2:first-child': { marginTop: '1.75em' },
            '> h3:first-child': { marginTop: '1.5em' },
            '> h4:first-child': { marginTop: '1em' },
            '> h1:last-child': { marginBottom: '1rem' },
            '> h2:last-child': { marginBottom: '0.5em' },
            '> h3:last-child': { marginBottom: '0.5em' },
            '> h4:last-child': { marginBottom: '1em' }
          }
        }
      }
    }
  }
} satisfies Config;
