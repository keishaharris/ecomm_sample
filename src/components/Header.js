import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import {auth } from './firebase-config'

const Header = () => {
   const [{cart, user}] = useStateValue();

   const handleAuth = () =>{
      if(auth){
         auth.signOut();
      }
   }
    return (
        <div className="header">
           <div className="welcome_login">
             <span>Welcome {user ? user.email : 'Guest'}!</span> 
           </div>
           <div className="header__navbar">
              HOME ABOUT CONTACT-US FAQ
           </div>

           <div className="header__navbar2">

           <Link to="/products" className="header__link">
                   <span >products</span>
                </Link>

              
             <Link to="/">
            <div className="header__info">
                
            <img 
            className="header__logo" 
            alt="logo"
            src="https://img.icons8.com/small/16/000000/africa.png"/>
           naijaWORLD 
            </div> 
            </Link>
           
                <Link to={!user && "/login"} className="header__link">
                   <span onClick={handleAuth}>{user ? 'Logout' : 'Login' }</span> 
                </Link>


                <Link to="/checkout" className="header__link">
                   <ShoppingCartIcon />
                   <span className="header__cart">{cart?.length}</span>
                </Link>
        </div>
      </div>
    )
}

export default Header
