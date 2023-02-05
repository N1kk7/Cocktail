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
            '1cqw' : '1cqw',  // w-vjhtfvjgh
            '2cqw' : '2cqw',
            '3cqw' : '3cqw',
            '4cqw' : '4cqw',
            '5cqw' : '5cqw',
            '9cqw' : '9cqw',
            '10cqw' : '10cqw',
            '11cqw' : '11cqw',
            '20cqw' : '20cqw',
            '22cqw' : '22cqw',
            '40cqw' : '40cqw',
            '45cqw' : '45cqw',
            '70cqw' : '70cqw',

        },
        height:{
          '1cqh' : '1cqh',  
          '2cqh' : '2cqh',
          '3cqh' : '3cqh',
          '4cqh' : '4cqh',
          '5cqh' : '5cqh',
          '6cqh' : '6cqh',
          '7cqh' : '7cqh',
          '8cqh' : '8cqh',
          '9cqh' : '9cqh',
          '22cqh' : '22cqh',
          '40cqh' : '40cqh',
          '45cqh' : '45cqh',
          '70cqh' : '70cqh',
          '100cqh' : '100cqh',
          'webkit' : '-webkit-fill-available',


        },
        minHeight:{
            '40cqh' : '40cqh',
            '100cqh' : '100cqh',
        },
        // top:{
        //   '5cqw' : '5cqw',
        // },
        boxShadow:{
          'custom-shadow' : '10px 10px 22px rgb(160, 160, 160)' ,
        },
        backgroundColor:{
          'custom-transp' : 'rgba(255, 255, 255, 0.4)'
        },
        borderBottom: {
          'custom-1' : '1px solid black',
        },
        padding: {
          'py-1cqh' : '1cqh 0',
          '2cqw' : '2cqw'
        },
        margin: {
          'my-1cqh' : '1cqh 0',
          '2cqw' : '1cqw 2cqw',
          'left-item' : '0 0 0 auto'
        },
        // eslint-disable-next-line no-dupe-keys
        fontFamily: {
          'frederica' : 'Frederica the Great, cursive',
          'tangerine' : 'Tangerine',
        },
        display: {
          'd-unset' : 'unset',
        },

      },
    },
    plugins: [],
  }