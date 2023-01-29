/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        /// здесь мы можем задавать любые кастомные уникальные стили которые не нашли в tailwindCss
        fontFamily: {
            //// это значение          : значение по которому будем применять стиль
            'Frederica The Great': 'frederica',
            'Raleway': 'raleway' ,
            'Tangerine': 'tangerine' ,
          },
        fontSize: {
            '1cqw' : '1cqw',
            '2cqw' : '2cqw',
            '3cqw' : '3cqw',
            '4cqw' : '4cqw',
            '5cqw' : '5cqw'
        },
        width: {
            '1cqw' : '1cqw',
            '2cqw' : '2cqw',
            '3cqw' : '3cqw',
            '4cqw' : '4cqw',
            '5cqw' : '5cqw'

        },
        minHeight:{
            '100cqh' : '100cqh',
        },
      },
    },
    plugins: [],
  }