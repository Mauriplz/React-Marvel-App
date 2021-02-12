import { parse } from 'query-string'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRouter = ({
    isLogged,
    component : Component,
    ...rest
}) => {

    if(localStorage.getItem('lastPath') === '/search'){
        localStorage.setItem('lastPath', `${rest.location.pathname}${rest.location.search}`)
    }else{
        localStorage.setItem('lastPath', rest.location.pathname)
    }
    
    return (
        <Route
            {...rest}
            component = {(props)=>(
                (isLogged)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}
