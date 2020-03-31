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
      'display': ['Source Sans Pro', 'sans-serif'],
      'body': ['Source Sans Pro', 'sans-serif'],
      'special': ['Montserrat', 'sans-serif'],
    },
    extend: {
      inset: {
        '50px':'50px',
        '200px': '200px',
        '10': '10px',
        '35': '35px',
        '1/3': '33%',
      },
      height: {
        '200px':  '200px',
        '450px':  '450px',
        '600px': '600px',
      },
      maxHeight: {
        '0': '0',
        '310' : '310px',
        '600': '600px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
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
          '700px' : '700px',
          '1/2': '50%',
          'screen-2xl': theme('screens.2xl'),
        }
      },
      fontSize: {
        '2.7xl': '1.75rem',
        '3.2xl': '2rem',
        '5.5xl': '3.5rem',
      },
      colors: {
        primary: '#363636',
        secondary: '#A1A1A1',
        lightGray: '#FAFAFA',
        lightGraphite: '#363636',
        darkGraphite: '#262626',
        beige: '#fbf2ed',
        gray: false,
        red: false,
        orange: false,
        yellow: false,
        green: false,
        teal: false,
        blue: false,
        indigo: false,
        purple: false,
        pink: false
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}