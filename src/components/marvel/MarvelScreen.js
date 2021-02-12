import React from 'react'
import { HeroesList } from '../heroesList/HeroesList'

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel</h1>
            
            <hr />

            <HeroesList publisher="Marvel Comics" />
        </>
    )
}
