module.exports = {
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'landscape': { 'raw': '(orientation: landscape)' },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#111111',
        white: '#fefefe',
        primary: {
          50: '#f6f8f8',
          100: '#eaf0f2',
          200: '#cee6ec',
          300: '#9bdaec',
          400: '#2bc0e6',
          500: '#0487b3',
          600: '#005d7f',
          700: '#00435b',
          800: '#002431',
          900: '#00151c'
        },
        secondary: {
          50: '#f9f7f7',
          100: '#f2eaea',
          200: '#eccdcc',
          300: '#ec9f9d',
          400: '#ff322c',
          500: '#fe0a08',
          600: '#cb0101',
          700: '#a60000',
          800: '#3a0000',
          900: '#150000'
        }, 
        gray: {
          50: '#f9fbfb',
          100: '#f3f3f6',
          200: '#e5e8eb',
          300: '#d1d6db',
          400: '#9ca5af',
          500: '#6b7380',
          600: '#4b5863',
          700: '#374451',
          800: '#1f2c37',
          900: '#111a27'
        }
      },
      fontFamily: {
        sans: [
          // 'Arial',
          'IBM Plex Sans',
        ],
        serif: [
          // 'IBM Plex Serif',
          'PT Serif',
        ],
        mono: [
          // 'PT Serif',
          'IBM Plex Mono'
        ],
      },
      spacing: {
        px1: '1px',
        px2: '2px',
        px3: '3px',
        px4: '4px',
        px5: '5px',
        px6: '6px',
        px7: '7px',
        px8: '8px',
        px9: '9px',
        px10: '10px',
        px50: '50px',
        px66: '66px',
        px100: '100px',
        '0': '0',
        '1': '0.236rem',
        '2': '0.618rem',
        '3': '0.764rem',
        '4': '1rem',
        '5': '1.236rem',
        '6': '1.618rem',
        '8': '2rem',
        '10': '2.618rem',
        '12': '3.236rem',
        '16': '4.235rem',
        '20': '5.235rem',
        '24': '6.852rem',
        '32': '8.47rem',
        '40': '11.08rem',
        '48': '13.704rem',
        '56': '17.92rem',
        '64': '22.173rem',
        '128': '35.8759rem',
        '256': '58.0472rem',
        '508': ''
      },
      fontSize: {
        xxs: '0.7683rem',
        xs: '0.8841rem',
        sm: '1rem',
        base: '1.2318rem',
        lg: '1.4183rem',
        xl: '1.6063rem',
        '2xl': '1.9813rem',
        '3xl': '2.2843rem',
        '4xl': '2.5873rem',
        '5xl': '3.1943rem',
        '6xl': '3.6843rem',
        '7xl': '4.1743rem',
        '8xl': '5.157rem',
        '9xl': '5.9503rem',
        '10xl': '6.7423rem',
        '11xl': '8.3323rem',
        '12xl': '9.6163rem',
      },
      letterSpacing: {
        tight2: '-0.0241em',
        tight1: '-0.01458em',
        normal: '0em',
        wide1: '0.0236em',
        wide2: '0.0427em',
        wide3: '0.0618em',
        wide4: '0.0927em',
        wide5: '0.1236em',
        wide6: '0.1736em',
        wide7: '0.2236em',
        wide8: '0.3045em',
        wide9: '0.3854em',
        wide10: '0.5163em',
        wide11: '0.6472em',
        wide12: '0.85895em',
        wide13: '1.0707em',
        wide14: '1.4134em',
        wide15: '1.7561em',
      },
      lineHeight: {
        none: '1',
        normal: '1.6063',
        '1': '.7683',
        '2': '0.8841',
        '3': '1',
        '4': '1.2318',
        '5': '1.6363',
        '6': '1.9813',
        '7': '2.5873',
        '8': '3.1943',
      },
      opacity: {
        '0': '0',
        '25': '.25',
        '75': '.75',
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
      scale: {
        '0': '0',
       '25': '.25',
        '50': '.5',
        '66': '.66',
        '75': '.75',
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '150': '1.5',
       '200': '2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
