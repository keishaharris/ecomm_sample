import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
import Payment  from './components/Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout';
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
import { auth } from './components/firebase-config';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Jxa0nAmNvnYROhCrIOuFRm9pOeACYC5J2uMrln0TRCh2C3gEfN0vjFYmBWTusU0yV4ew3xkciFTPme3WxnJoyvq00HB8zNheu')

function App() {

  const[{cart}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is signed in.
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      }
      else {
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes> 
        <Route path="checkout" element={<Checkout/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
            <Payment />
            </Elements>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
