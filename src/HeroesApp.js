import React, { useEffect, useReducer } from 'react'
import { LoginReducer } from './reducer/LoginReducer'
import { AppRouter } from './routers/AppRouter'
import {LoginContext} from './context/LoginContext'

const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false}
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(LoginReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <>
            <LoginContext.Provider value={{user,dispatch}}>
                <AppRouter />
            </LoginContext.Provider>
        </>
    )
}
