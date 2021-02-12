import { heroes } from "../data/superHeroes"


export const getHeroesByPublisher = ( publisher ) =>{
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher ${publisher} not correct`)
    }

    const data = heroes.filter((hero)=> hero.publisher === publisher)

    return data
}