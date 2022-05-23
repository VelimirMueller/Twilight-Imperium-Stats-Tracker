/*eslint no-undef: 0*/

module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'templates/**/*.html.twig'
  ],
  theme: {
    extend: {

    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}