const colors = require('tailwindcss/colors');
module.exports = {
  purge: [
    './src/**.pug',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      black: colors.coolBlack,
      red: colors.rose,
      pink: colors.fuchsia,
      indigo: colors.indigo,
      white: colors.white,
      transparent: colors.transparent,
      themeColor: '#daf196',
      themeColorHover: '#c9dc90'
    },
    fontFamily: {
      sans: ['Be Vietnam', 'sans-serif']
    },
    extend: {
       fontSize: {
      'navFont': '24px',
      'h1heading': '46px',
      'h2heading': '38px',
      'h3heading': '26px',
      'h4heading': '18px',
     },
     lineHeight: {
      'lheading': '90px',
      '2lheading': '72px',
      '4lheading': '64px',
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}