/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:"7%"
    },
    extend: {
      colors:{
        primer : "slateblue",
        gelap :  "#020617"
      },
      fontFamily:{
        poppins : "Poppins"
      },
      screens:{
        '2xl' : '1200px'
      },
      margin: {
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
      },
    },
  },
  plugins: [],
}

