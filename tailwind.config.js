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
      padding: '0.5rem'
    },
    fontFamily: {
      'sans': 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      'display': ['Source Sans Pro', 'sans-serif'],
      'body': ['Source Sans Pro', 'sans-serif'],
      'header': ['Montserrat', 'sans-serif'],
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
        '200px': '200px',
        '300px': '300px',
        '450px': '450px',
        '500px': '500px',
        '600px': '600px',
        '800px': '800px',
      },
      minHeight: {
        '400': '400px',
        '900': '900px',
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
        '27xl': '1.75rem',
        '32xl': '2rem',
        '55xl': '3.5rem',
      },
      colors: {
        'primary': '#363636',
        'secondary': '#A1A1A1',
        'light-gray': '#FAFAFA',
        'light-graphite': '#363636',
        'graphite': '#262626',
        'beige': '#fbf2ed',
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          'width': '100%',
          'max-width': '100%',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '0.5rem',
          'padding-right': '0.5rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1368px',
          },
        }
      })
    }
  ]
}