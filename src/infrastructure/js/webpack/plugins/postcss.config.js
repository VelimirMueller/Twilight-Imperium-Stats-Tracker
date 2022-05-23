/*eslint no-undef: 0*/

let tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('src/infrastructure/js/webpack/plugins/tailwind.config.js'),
    require('postcss-import'),
    require('autoprefixer')
  ]
}