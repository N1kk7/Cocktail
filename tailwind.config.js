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
            '1.5' : '1.5cqw',
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
            '25cqw' : '25cqw',
            '30cqw' : '30cqw',
            '40cqw' : '40cqw',
            '45cqw' : '45cqw',
            '47cqw' : '47cqw',
            '50cqw' : '50cqw',
            '55cqw' : '55cqw',
            '65cqw' : '65cqw',
            '70cqw' : '70cqw',
            '85cqw' : '85cqw',
            '100cqw' : '100cqw',
            'webkit' : '-webkit-fill-available',


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
          '10cqh' : '10cqh',
          '12cqh' : '12cqh',
          '15cqh' : '15cqh',
          '22cqh' : '22cqh',
          '35cqh' : '35cqh',
          '40cqh' : '40cqh',
          '45cqh' : '45cqh',
          '70cqh' : '70cqh',
          '100cqh' : '100cqh',
          '100cqh' : '100cqh',
          'webkit' : '-webkit-fill-available',
          'inherit' : 'inherit',


        },
        minHeight:{
            '20cqh' : '20cqh',
            '40cqh' : '40cqh',
            '100cqh' : '100cqh',
            'inherit' : 'inherit',
        },
        maxHeight:{
          '10cqh' : '10cqh',
          '20cqh' : '20cqh',
      },
      maxWidth:{
        'customFitCont' : 'fit-content',
      },
      top: {
        '7cqh' : '7cqh',
        '10cqh' : '10cqh',

      },
        boxShadow:{
          'custom-shadow' : '10px 10px 22px rgb(160, 160, 160)' ,
        },
        backgroundColor:{
          'customTextBg' : 'rgba(0,0,0, 0.6)',
          'custom-transp' : 'rgba(255, 255, 255, 0.4)',
          'whiteBlur' : 'rgba(255, 255, 255, 0.3)',
          'customDark' : '#060310',
          'unsetImp' : 'unset !important',

        },
        textColor: {
          'bisque' : 'bisque',

        },
        borderBottom: {
          'custom-1' : '1px solid black',
        },
        padding: {
          'py-1cqh' : '1cqh 0',
          'px-1cqw' : '0 1cqw',
          '1cqw' : '1cqw',
          '2cqw' : '2cqw',
          '3cqw' : '3cqw',
          '4cqw' : '4cqw',
          '5cqw' : '5cqw'

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
          'raleway' : 'Raleway'
        },
        display: {
          'd-unset' : 'unset',
          'dInherit' : 'inherit',

        },
        // borderBottomLeftRadius: {
        //   'b-b-l-r' : '0'
        // },
        // borderTopLeftRadius: {
        //   'b-t-l-r' : '0'

        // },
        // borderTopRightRadius: {
        //   'b-t-r-r' : '0'

        // },
        // borderBottomRightRadius: {
        //   'b-b-r-r' : '0'

        // },

      },
    },
    plugins: [],
  } 