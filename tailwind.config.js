/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand_yellow:'#FAF1E5',
        dust_green:'#BCC1BF',
        brick_red:'#A8493D',
        forest_green:'#384C43',
        midnight_black:'#101011',
        grey:{
          1:'#585A60',
          2:'#8C9098',
          3:'#B6B8C0',
          4:'#F2F4F7',
        }
      },
      fontSize:{
        p1:[
          '12px',{
            lineHeight:'18px',
          }
        ],
        p2:[
          '14px',{
            lineHeight:'26px',
          }
        ],
        p3:[
          '16px',{
            lineHeight:'28px',
          }
        ],
        p4:[
          '18px',{
            lineHeight:'30px',
          }
        ],
        h1:[
          '24px',{
            lineHeight:'34px',
          }
        ]
      }
    },
  },
  plugins: [],
}
