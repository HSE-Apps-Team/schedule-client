import { extendTheme, defineStyle, defineStyleConfig, CircularProgress } from '@chakra-ui/react'
import { bg } from 'date-fns/locale'

const fallTheme = extendTheme({
  config: {},
  semanticTokens: {
    colors: {
      // accent semantic tokens
      accent: { default: 'orange.500', _dark: 'orange.300' },
      'accent-emphasis': { default: 'orange.700', _dark: 'orange.200' },
      'accent-static': 'orange.500',
      'accent-muted': { default: 'orange.300', _dark: 'orange.200' },
      'accent-subtle': { default: 'orange.50', _dark: 'orange.800' },
      // foreground semantic tokens
      fg: { default: 'orange.700', _dark: 'orange.100' },
      'fg-emphasis': { default: 'orange.900', _dark: 'orange.200' },
      'fg-muted': { default: 'orange.600', _dark: 'orange.400' },
      'fg-subtle': { default: 'orange.500', _dark: 'orange.300' },
      'fg-on-accent': { default: 'orange', _dark: 'orange' },
      // background semantic tokens
      bg: { default: 'orange.100', _dark: 'orange.900' },
      'bg-subtle': { default: 'orange.200', _dark: 'orange.800' },
      'bg-muted': { default: 'orange.300', _dark: 'orange.700' },
      'bg-emphasis': { default: 'orange.400', _dark: 'orange.600' },
      'bg-selected': { default: 'orange.100', _dark: 'orange.700' },
      // misc semantic tokens
      'focus-ring': { default: 'rgba(255, 255, 255, 0.2)', _dark: 'rgba(255, 255, 255, 0.2)' },
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        color: 'fg',
        bg: 'bg',
        '.container': {
          bg: 'bg-subtle',
          color: 'fg-emphasis',
          boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
        },
        '.selected': {
          color: 'fg',
          bg: 'bg-selected',
          boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
        },
        '.component': {
          color: 'fg',
          bg: 'bg-subtle',
          boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
        },
        '.current': {
          color: 'fg',
          bg: 'bg-muted',
          boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
        },
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
        '.button': {
          bg: 'bg-subtle',
          color: 'fg',
          boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
          _hover: {
            bg: 'bg-emphasis',
            color: 'fg-emphasis',
          },
          _active: {
            bg: 'bg-muted',
            color: 'fg-muted',
          },
          _focus: {
            boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.2)',
          }
        },
        '.progress': {
          color: 'fg',
          trackColor: 'bg-subtle',
        },
        '.tick-flip-panel': {
          bg: 'bg-subtle',
          color: 'fg',
        }
      },
    },
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2rem', md: '3.5rem' },
    },
    'heading-2': {
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '1.75rem', md: '2.75rem' },
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold',
    },
  },
  mdx: {
    h1: {
      mt: '2rem',
      mb: '.25rem',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: '1.875rem',
      letterSpacing: '-.025em',
    },
    h2: {
      mt: '4rem',
      mb: '0.5rem',
      lineHeight: 1.3,
      fontWeight: 'semibold',
      fontSize: '1.5rem',
      letterSpacing: '-.025em',
      '& + h3': {
        mt: '1.5rem',
      },
    },
    h3: {
      mt: '3rem',
      lineHeight: 1.25,
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      letterSpacing: '-.025em',
    },
    h4: {
      mt: '3rem',
      lineHeight: 1.375,
      fontWeight: 'semibold',
      fontSize: '1.125rem',
    },
    a: {
      color: 'accent',
      fontWeight: 'semibold',
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: 'accent-emphasis',
      },
    },
    p: {
      mt: '1.25rem',
      lineHeight: 1.7,
      'blockquote &': {
        mt: 0,
      },
    },
    hr: {
      my: '4rem',
    },
    blockquote: {
      bg: 'accent-subtle',
      borderWidth: '1px',
      borderColor: 'accent',
      rounded: 'lg',
      px: '1.25rem',
      py: '1rem',
      my: '1.5rem',
    },
    ul: {
      mt: '0.5rem',
      ml: '1.25rem',
      'blockquote &': { mt: 0 },
      '& > * + *': {
        mt: '0.25rem',
      },
    },
    code: {
      rounded: 'sm',
      px: '1',
      fontSize: '0.875em',
      py: '2px',
      lineHeight: 'normal',
    },
    button: {
      fontWeight: 'semibold',
      rounded: 'sm',
      bg: 'accent',
      color: 'fg-on-accent',
      _hover: {
        bg: 'accent-emphasis',
        color: 'fg-on-accent-emphasis',
      },
      _active: {
        bg: 'accent-muted',
        color: 'fg-on-accent-muted',
      },

    },
  },
})

export default fallTheme