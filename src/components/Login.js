import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {auth } from './firebase-config'

const Login = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                navigate('/')
                alert(`Sign In Successful! Welcome ${email}`)
            }
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1 className="login__header">SIGN IN</h1>
            <form>
                <h2> Email</h2>
                <input  type="text" value={email} onChange = {e => setEmail(e.target.value)}/>
                <h2> Password </h2>
                <input  type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                <button 
                type='submit'
                onClick={signIn}>
                    Login
                </button>
    

               </form>
               <span className="login__signup">
                   Don't have an account? <Link to="/signup">Sign Up</Link>
                </span>
         
            </div>
        </div>
    )
}

export default Login
