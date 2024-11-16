/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main-pink':'#ED2289',
      'white':'#FFFFFF',
      'black':'#000000',
      'main-blue':'#194A96',
      'dark-blue':'#002B43',
      'new-gray':'#F2F2F2',
      'light-gray':'#F2F2F2BD',
      'too-light':'#FAFAFABD',
      'lightbg':'#FAFAFA',
      'dark-gray':'#171717',
      'gray-bg':'#F5F5F5',
      'dark3':'#636466',
      'dark2':'#111111',
      'gray2':'#A9A9A9',
      'darkBlue':'#002B43',
      'mainBlue':'#194A96',
      'yallow':'#FFCB05',
      'pink':'#ED2289',
        'gray3':'#828282'
    },
    fontFamily: {
      'IRANSansWeb(FaNum)700': ['IRANSansWeb(FaNum)700', 'IRANSansWeb(FaNum)700'],
      'IRANSansWeb300': ['IRANSansWeb300', 'IRANSansWeb300'],
      'IRANSansWeb400': ['IRANSansWeb400', 'IRANSansWeb400'],
      'IRANSansWeb500': ['IRANSansWeb500', 'IRANSansWeb500'],
      'IRANSansWeb700': ['IRANSansWeb700', 'IRANSansWeb700'],
      'IRANSansWeb900': ['IRANSansWeb900', 'IRANSansWeb900'],
      'IRANSansWeb(FaNum)700': ['"IRANSansWeb(FaNum)700"'],
      'IRANSansWeb(FaNum)400': ['"IRANSansWeb(FaNum)400"'],
      'Anton400': ['"Anton400"'],
      'Battambang700': ['"Battambang700"'],
      'BaiJamjuree700': ['"BaiJamjuree700"'],

    },
    extend: {
      borderRadius:{
        'rounded-md':'5px'
      },
      content:{
  'content1':' '
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '37.57':'37.57px',
        '31.03':'31.03px',
        '28.17':'28.17px',
        '18.78':'18.78px',
         '20.25':'20.25px',
         '24':'24px',
         '46.96':'46.96px',
         '16.41':'16.41px',
         '14.06':'14.06px',
         '18.75':'18.75px',
         '31':'31px',
         '43.4':'43.4px',
         '17.05':'17.05px',
         '21':'21px',
         '24.18':'24.18px',
         '27.09':'27.09px',
         '20.15':'20.15px',
       

      },

      width:{
        '85p':'85%',
        '90p':'90%',
      },
      maxWidth: {
        'x100': '100%',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      }
    },
    translate: {
      '100': '-100%',
    }
  },
  
  
}