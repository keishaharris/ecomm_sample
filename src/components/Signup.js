import React, { useState } from 'react'
import './Signup.css'
import {useNavigate} from 'react-router-dom'
import { auth } from './firebase-config';

const Signup = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = e => {
        e.preventDefault();

       auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                navigate('/login')
                alert('Sign Up Successful')
            }
        })
        .catch(err => alert(err.message))
       
    }

    return (
        <div className="signup">
        <div className="signup__container">
            <h1 className="signup__header">SIGN UP</h1>
        <form>
            <h2> Name </h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <h2> Email</h2>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <h2> Password </h2>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
     
        <button type="submit" onClick={signUp}>SIGN UP</button>
           </form>
        </div>
    </div>
    )
}

export default Signup
