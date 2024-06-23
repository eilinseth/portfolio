/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px'
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
        '2xl' : '12000px'
      }
    },
  },
  plugins: [],
}

