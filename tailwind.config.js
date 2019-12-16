/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      'display': ['Roboto', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    inset: {
      '0': '0',
      'auto': 'auto',
      '50px':'50px',
      '200px': '200px',
      '10': '10px'
    },
    height: {
      '200px':  '200px',
      '450px':  '450px',
      '600px': '600px',
      'h-0':  '0',
      'h-1':  '0.25rem',
      'h-2':  '0.5rem',
      'h-3':  '0.75rem',
      'h-4':  '1rem',
      'h-5':  '1.25rem',
      'h-6':  '1.5rem',
      'h-8':  '2rem',
      'h-10':	'2.5rem',
      'h-12':	'3rem',
      'h-16':	'4rem',
      'h-20':	'5rem',
      'h-24':	'6rem',
      'h-32':	'8rem',
      'h-40':	'10rem',
      'h-48':	'12rem',
      'h-56':	'14rem',
      'h-64':	'16rem',
      'h-auto':	'auto',
      'h-px':	'1px',
      'h-full':	'100%',
      'h-screen':	'100vh',
    },
    maxHeight: {
      '0': '0',
      '310' : '310px',
      '600': '600px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '700px' : '700px',
      '1/2': '50%',
    },
    extend: {
      screens: {
        '2xl': '1600px',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: theme => {
        return {
          'screen-2xl': theme('screens.2xl'),
        }
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}