import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './LoginButton.css'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <button className="login__button"
            onClick={()=> loginWithRedirect()}>
                Sign In
            </button>
        </div>
    )
}

export default LoginButton
