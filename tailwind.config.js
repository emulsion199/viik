const defaultTheme = require('tailwindcss/defaultTheme');

const COLORS = {
   white: '#FFF',
   black: '#101011',
   transparent: 'transparent',
   bg: {
      default: '#FAF1E5',
      hover: '#EAE4D8',
   },
   primary: '#384C43',
   accent: '#A8493D',
   error: '#E84646',
   gray: {
      1: '#585A60',
      2: '#8C9098',
      3: '#B6B8C0',
      4: '#F2F4F8',
   },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      fontFamily: {
         sans: ['Pretendard'],
      },
      colors: COLORS,
      extend: {
         fontSize: {
            p1: [
               '12px',
               {
                  lineHeight: '18px',
               },
            ],
            p2: [
               '14px',
               {
                  lineHeight: '26px',
               },
            ],
            p3: [
               '16px',
               {
                  lineHeight: '28px',
               },
            ],
            p4: [
               '18px',
               {
                  lineHeight: '30px',
               },
            ],
            h1: [
               '24px',
               {
                  lineHeight: '34px',
               },
            ],
         },
      },
   },

   plugins: [require('@headlessui/tailwindcss')({ prefix: 'hui' })],
};
