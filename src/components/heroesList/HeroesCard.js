import React from 'react'
import { useHistory } from 'react-router-dom'
import { getImgHeroes } from '../../helpers/getImgHeroes'


export const HeroesCard = ({
    alter_ego,
    characters,
    first_appearance,
    id,
    publisher,
    superhero
}) => {

    const img_heroe = getImgHeroes(id)

    const history = useHistory()

    const handleGoHero = () =>{
        history.push(`/hero/${id}`) 
    }



    return (
        <div className="col">
            <div className="card h-100">
            <img src={img_heroe} className="card-img-top main__pointer" height="500" alt="superhero_img" onClick={handleGoHero} />
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{superhero}</h5>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <small className="text-muted">{first_appearance}</small>
            </div>
            </div>
        </div>
    )
}
