import React, { useContext } from 'react'
import {

BrowserRouter as Router,
Switch

} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { Navbar } from '../components/shared/Navbar'
import { LoginContext } from '../context/LoginContext'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () =>{

    const {user} = useContext(LoginContext)

    return (
        <Router>
            <Navbar />
            <div className="main__section">
                <Switch>
                    
                    <PublicRoute exact path="/login" component={LoginScreen} isLogged={user.logged} />

                    <PrivateRouter path="/" component={DashboardRouter} isLogged={user.logged} />

                </Switch>
            </div>
        </Router>
    )
}