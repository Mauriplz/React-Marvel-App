import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../helpers/getHeroeById'
import { getImgHeroes } from '../../helpers/getImgHeroes'

import iconoMarvel from '../../assets/marvel.png'
import iconoDc from '../../assets/dc.png'

export const HeroScreen = ({history}) => {

    const {idHero} = useParams()
    
    const heroe = getHeroeById(idHero)

    if(!heroe){
       return <Redirect to="/" />
    }

    const imgHero = getImgHeroes(heroe.id)

    const handleBack = () =>{
        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack()
        }
    }

    return (
        <>
            <h1>{heroe.superhero}</h1>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <img src={imgHero} className="img-fluid" height="500" />
                </div>
                <div className="col-sm-4">
                    <h3>{heroe.superhero}</h3>
                    <p>First Appearance: {heroe.first_appearance}</p>
                    <p>Alter Ego: {heroe.alter_ego}</p>
                    {
                        (heroe.alter_ego !== heroe.characters) && <p>Otros Nombres: {heroe.characters}</p>
                    }
                    {
                        (heroe.publisher === 'DC Comics')
                        ? (<>
                                <img src={iconoDc} height="100" width="150"  />
                                <br/>
                                <div className="mt-3">
                                    <button onClick={handleBack} className="btn btn-outline-primary">Atras</button>
                                </div>
                            </>
                        )
                        : (<>
                                <img src={iconoMarvel} height="100" width="250"  />
                                <br/>
                                <div className="mt-3">
                                    <button onClick={handleBack} className="btn btn-outline-danger">Atras</button>
                                </div>
                            </>
                        )
                    }

                    
                </div>

            </div>
        </>
    )
}
