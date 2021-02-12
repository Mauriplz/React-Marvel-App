import React, { useContext } from 'react'
import {
Link,
NavLink,
useHistory
} from 'react-router-dom'

import icono from '../../assets/icono.png'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = () => {

    const history = useHistory()

    const {user, dispatch} = useContext(LoginContext)

    const handleLogout = () =>{
        dispatch({
            type: 'logout'
        })

        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link 
                className="navbar-brand"
                to="/"
            >
                <img src={icono} alt="" width="50" height="24" className="d-inline-block align-top" />
                HeroesApp
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink 
                            className="nav-item nav-link"
                            to="/marvel"
                            exact
                            activeClassName="active"
                        >
                            Marvel
                        </NavLink>
                        <NavLink 
                            className="nav-item nav-link"
                            to="/dc"
                            exact
                            activeClassName="active"
                        >
                            Dc
                        </NavLink>
                        <NavLink 
                            className="nav-item nav-link"
                            to="/search"
                            exact
                            activeClassName="active"
                        >
                            Search
                        </NavLink>
                        
                    </ul>
                    <span>{user.username}</span>
                    <button className="btn btn-outline-danger" onClick={handleLogout} type="submit">Log Out</button>
                    
                </div>
            </div>
        </nav>
    )
}
