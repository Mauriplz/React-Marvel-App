import { heroes } from "../data/superHeroes"

export const getHeroeById = (id) =>{

    const data = heroes.find((heroe)=>heroe.id === id)

    return data

}
