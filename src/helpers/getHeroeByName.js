import { heroes } from "../data/superHeroes"

export const getHeroeByName = (name ="") =>{

    const nombreBusqueda = name.toLocaleLowerCase()

    if(name === ''){
        return []
    }

    const h = heroes.filter((hero)=>{
        if(hero.superhero.toLocaleLowerCase().includes(nombreBusqueda)){
            return hero
        }
    })

    return h

}