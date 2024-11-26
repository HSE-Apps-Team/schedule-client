import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { colors } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { bg } from 'date-fns/locale'

const basicTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'blue', components: ['Switch'] }), // set colorScheme to accent color
  {
    blue: {
      '50': '',
      '100': '#B3E5FC',
      '200': '#81D4FA',
      '300': '#4FC3F7',
      '400': '#29B6F6',
      '500': '#0288D1',
      '600': '#0277BD',
      '700': '#01579B',
      '800': '#01428D',
      '900': '#013A63',
    },
    gray : {
      '50': 'red',
      '100': '#F5F5F5',
      '200': '#EEEEEE',
      '300': '#E0E0E0',
      '400': '#BDBDBD',
      '500': '#9E9E9E',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    },

    semanticTokens: {
      colors: {
        blue: { default: 'blue.500', _dark: 'blue.300' },
        gray: { default: 'gray.500', _dark: 'gray.300' },
        // accent semantic tokens
        accent: { default: 'blue.500', _dark: 'blue.300' },
        'accent-emphasis': { default: 'blue.700', _dark: 'blue.200' },
        'accent-static': 'blue.500',
        'accent-muted': { default: 'blue.300', _dark: 'blue.200' },
        'accent-subtle': { default: 'blue.50', _dark: 'blue.800' },
        // foreground semantic tokens
        fg: { default: 'gray.800', _dark: 'gray.100' },
        'fg-emphasis': { default: 'gray.900', _dark: 'gray.100' },
        'fg-muted': { default: 'gray.600', _dark: 'gray.400' },
        'fg-subtle': { default: 'gray.500', _dark: 'gray.300' },
        'fg-on-accent': { default: 'white', _dark: 'inherit' },
        // background semantic tokens
        bg: { default: 'yellow', _dark: 'gray.900' },
        'bg-subtle': { default: 'gray.100', _dark: 'gray.800' },
        'bg-muted': { default: 'gray.300', _dark: 'gray.700' },
        'bg-emphasis': { default: 'gray.400', _dark: 'gray.600' },
        'bg-selected': { default: 'gray.200', _dark: 'gray.700' },
        'bg-box' : { default: 'gray.50', _dark: 'gray.800' },
        // misc semantic tokens
        'focus-ring': { default: 'rgba(255, 255, 255, 0.5)', _dark: 'rgba(255, 255, 255, 0.5)' },
        'shadow': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px, inset 0 1px hsla(0,0%,100%,.05)',
      },
    },
    fonts: {
      heading: 'Segoe UI, sans-serif',
      body: 'Segoe UI, sans-serif',
    },
    styles: {
      global: {
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          color: 'fg',
          bg: 'bg',
          '.container': {
            bg: 'bg',
            color: 'fg-emphasis',
          },
          '.component': {
            color: 'fg',
            bg: 'bg-box',
          },
          '.selected': {
            color: 'fg',
            bg: 'bg-muted',
          },
          '.current': {
            color: 'fg',
            bg: 'bg-muted',
          },
          '.p': {
            color: 'fg-muted',
          },
          '.deleted': {
            color: '#ff8383 !important',
            fontStyle: 'normal !important',
          },
          '.inserted': {
            color: '#b5f4a5 !important',
            fontStyle: 'normal !important',
          },
          '.shadow': {
              boxShadow: "inset 0 1px hsla(0,0%,100%,.05), rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          },
          '.button': {
            bg: 'accent',
            color: 'bg',
            boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
            _hover: {
              bg: 'accent-muted',
              color: 'bg',
            },
            _active: {
              bg: 'accent-muted',
              color: 'bg',
            },
            _focus: {
              boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.3)',
            }
          },
          '.radio': {
            color: 'fg',
            borderColor: 'bg-muted',
            _checked: {
              bg: 'accent',
              borderColor: 'accent',
            },
            _focus: {
              boxShadow: '0 0 0 0',
            },
          },
          '.switch': {
            colorScheme: 'orange',
          },
          '.css-hvagwd, .css-zfuom8': { // progress bar color
            stroke: 'accent',
          },
          '.css-184qci1, .css-ol3i12': { // progress bar bg color
            stroke: 'bg-subtle',
          },
          '.tick-flip-panel': {
            bg: 'bg-box',
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
  }
)

export default basicTheme