import img from '../assets/heroes/dc-batman.jpg'
import img2 from '../assets/heroes/dc-superman.jpg'
import img3 from '../assets/heroes/dc-flash.jpg'
import img4 from '../assets/heroes/dc-green.jpg'
import img5 from '../assets/heroes/dc-arrow.jpg'
import img6 from '../assets/heroes/dc-wonder.jpg'
import img7 from '../assets/heroes/dc-martian.jpg'
import img8 from '../assets/heroes/dc-robin.jpg'
import img9 from '../assets/heroes/dc-blue.jpg'
import img10 from '../assets/heroes/dc-black.jpg'
import img11 from '../assets/heroes/marvel-spider.jpg'
import img12 from '../assets/heroes/marvel-captain.jpg'
import img13 from '../assets/heroes/marvel-iron.jpg'
import img14 from '../assets/heroes/marvel-thor.jpg'
import img15 from '../assets/heroes/marvel-hulk.jpg'
import img16 from '../assets/heroes/marvel-wolverine.jpg'
import img17 from '../assets/heroes/marvel-daredevil.jpg'
import img18 from '../assets/heroes/marvel-hawkeye.jpg'
import img19 from '../assets/heroes/marvel-cyclops.jpg'
import img20 from '../assets/heroes/marvel-silver.jpg'

export const getImgHeroes = (heroe) =>{

    const imgs = [img,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20]

    const ImgHeroe = imgs.filter((h)=> h.includes(heroe))

    return ImgHeroe
}