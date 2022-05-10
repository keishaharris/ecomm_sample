import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './SignupButton.css'

const SignupButton = () => {
    const {loginWithRedirect} = useAuth0();
    
    return (
        <div>
           <button className="signup__button"
            onClick={()=> loginWithRedirect({
            })}>
                Sign In
            </button>
        </div>
    )
}

export default SignupButton
