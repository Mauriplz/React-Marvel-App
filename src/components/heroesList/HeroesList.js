import React from 'react'
import PropTypes from 'prop-types'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroesCard } from './HeroesCard'

export const HeroesList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 main__heroes">
           {
               heroes.map((heroe)=>(
                   <HeroesCard key={heroe.id} {...heroe} />
               ))
           }
        </div>
    )
}

HeroesList.propTypes = {
publisher: PropTypes.string.isRequired
}
