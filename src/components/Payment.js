import React, { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    const navigate = useNavigate();

    useEffect (() => {
        const getClientSecret = async () => {
         const response = await axios ({
             method: "POST",
             url: `/payments/create?total=${getCartTotal(cart) * 100}`,
         });
         setClientSecret(response.data.clientSecret)
        }
 
        getClientSecret();
     }, [cart])

    const handleChange = e => {
        //Listen for any changes in CardElement 
        // & Display any errors 
        setDisabled(e.empty)
        setError( e.error ? e.error.message : "");
    }

    console.log('The secret is', clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement),
            }
        }).then(({paymentIntent}) => {
           
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/')

        })
        // if (payload.error){
        //     setError(`Payment Error ${payload.error.message}`)
        //     setProcessing(false);

        // }
        
    }

  return (
    <div className="payment__container">
        
        <div className="payment__title">Order Review</div>
        <div className="payment__address">
            <div className="payment__header">Delivery Address </div>
            <p>{user?.email}</p>
            <p>101 Circle Drive</p>
            <p>New York, NY</p>
            <p>11206</p>
        </div>

        <div className="payment__order">
            <div className="payment__header">Item Review</div>
            {cart.map(item => (

                <CheckoutProduct 
                id={item.id}
                image={item.image}
                title={item.title} 
                price={item.price}
                rating={item.rating} />
            ))}
        </div>
        <div className="payment__method">
            <div className="payment__header">Payment Method </div>
            <div className="payment__detail">
            <form onSubmit={handleSubmit}>
                <CardElement id="card-element" onChange={handleChange} />
                
                <div className="payment__priceContainer">
                <CurrencyFormat 

                    renderText={value => (

                    <div>
                        <span className="subtotal__title">
                        Order Total - {cart.length} items:

                    </span>
                    <p>{value}</p>
                    </div>
                    )}

                    thousandSeparator = {true}
                    value = {getCartTotal(cart)}
                    displayType = {'text'}
                    prefix = {'$'}
                    decimalScale = {2}
                />
                <button disabled = {processing || disabled || succeeded}> 
                <span>
                    {processing ? <p>Processing</p> : 'Buy Now'}
                </span>
                 </button>
                 {error && 
                    <div>
                    {error}
                     </div>
                }
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}

export default Payment
