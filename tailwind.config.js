/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        serif: ['IBM Plex Serif'],
        display: ['Playfair Display'],
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('~@/assets/images/lights.png')",
        'footer-pattern': "url('~@/assets/images/footer.jpg')",
      }),
    },
  },
}
