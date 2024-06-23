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
      }
    },
  },
  plugins: [],
}

