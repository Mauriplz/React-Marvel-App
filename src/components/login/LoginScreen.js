import React, { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(LoginContext)

    const lastpath = localStorage.getItem('lastPath')

    const {fromValues, handleInputChange, handleReset} = useForm({
        username:''
    })

    const {username} = fromValues

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({
            type:'login',
            payload: username
        })

        history.push(lastpath)

    }

    return (
        <div>
            LoginScreen
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="UserName..."
                    name="username"
                    autoComplete="off"
                    value={username}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-danger"> Login </button>
            </form>
        </div>
    )
}
