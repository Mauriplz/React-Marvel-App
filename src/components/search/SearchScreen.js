import React from 'react'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroeByName } from '../../helpers/getHeroeByName'
import { HeroesCard } from '../heroesList/HeroesCard'

export const SearchScreen = ({history, location}) => {

    const {q = ""} = queryString.parse(location.search)

    const busquedaHeroes = getHeroeByName(q)
    console.log(busquedaHeroes)

    const {fromValues,handleInputChange, handleReset} = useForm({
        search: q
    })

    const {search} = fromValues

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(search.trim().length === 0){
            return
        }

        history.push(`?q=${search}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <h3>Search your Hero</h3>
                    <form onSubmit={handleSubmit} >
                        <input
                            type="text"
                            name="search"
                            placeholder="Search..."
                            autoComplete="off"
                            value={search}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>

                <div className="col-md-3">
                    {
                        (q === '') && 
                        (
                        <div className="alert alert-primary" role="alert">
                            Search your favorite Superhero
                        </div>
                      )

                    }
                    {
                        (busquedaHeroes.length === 0 && q !== '') 
                        &&
                        (
                          <div className="alert alert-danger" role="alert">
                              Your hero doesnt exist
                          </div> 
                        )
                    }
                    {
                        busquedaHeroes.map((hero)=>(<div key={hero.id} className="mt-3 mb-3"><HeroesCard {...hero} /></div>))
                    }
                </div>

            </div>
        </>
    )
}
