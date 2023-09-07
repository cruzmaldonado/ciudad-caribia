/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'yosemite':"url('../../img/yosemite.jpg')",
        'sydney':"url('../../img/sydney.jpg')",
        'switzerland':"url('../../img/switzerland.jpg')",
        'seattle':"url('../../img/seattle.jpg')",
        'norway':"url('../../img/norway.jpg')",
        'sanFranciscoDesktop':"url('../../img/sanFranciscoDesktop.jpg')",
        'sanFrancisco':"url('../../img/sanFrancisco.jpg')",
        'new_york':"url('../../img/new_york.jpg')",
        'miami':"url('../../img/miami.jpg')",
        'LA':"url('../../img/LA.jpg')",
        'iceland':"url('../../img/iceland.jpg')",
        'europe':"url('../../img/europe.jpg')",
        'chicago':"url('../../img/chicago.jpg')",
        'bali':"url('../../img/bali.jpg')",
        'imgPortada':"url('../../img/imgPortada.jpg')",
        'img1':"url('../../img/img1.jpg')",
        'img2':"url('../../img/img2.jpg')",
        'img3':"url('../../img/img3.jpg')",
        'img4':"url('../../img/img4.jpg')",
        'img5':"url('../../img/img5.jpg')",
        'img6':"url('../../img/img6.jpg')",
        'img7':"url('../../img/img7.jpg')",
        'img8':"url('../../img/img8.jpg')",
        'img9':"url('../../img/img9.jpg')",
        'img10':"url('../../img/img10.jpg')",
        'img11':"url('../../img/img11.jpg')",
        'img12':"url('../../img/img12.jpg')",
        'img13':"url('../../img/img13.jpg')",


      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secondary':'#8FA206',
        'tertiary':'#61AEC9'
      }),
      textColor:{
        'primary':'#CC2D4A',
        'secondary':'#8FA206',
        'tertiary':'#61AEC9'
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      },
      height:{
        '80':'20rem',
        '100':'25rem',
        '120':'30rem'

      }

    },
  },
  variants:{
    width:["responsive","hover","focus","shadow"],
    extend:{},
  },
  plugins: [],
}

