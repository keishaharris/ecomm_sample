import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{cart}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__products">

            <h1>Order Review</h1>

            {cart.map(item => (

                <CheckoutProduct 
                id={item.id}
                image={item.image}
                title={item.title} 
                price={item.price}
                rating={item.rating} />

            ))}

            </div>
            <div className="checkout__total">
                <div className="checkout__title">
                    <h1>Subtotal</h1>
                </div>
                
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
