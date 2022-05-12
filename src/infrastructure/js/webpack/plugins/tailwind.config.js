/*eslint no-undef: 0*/

module.exports = {
  content: [
    'components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}