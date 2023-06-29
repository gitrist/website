/** @type {import('tailwindcss').Config} */
module.exports = {
  enable: process.env.NODE_ENV === 'production',
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        primary: {
          DEFAULT: '#0960bd'
          // dark: primaryColorDark,
        }
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px'
      }
    }
  },
  plugins: []
}
