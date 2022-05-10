import React from 'react'
import {useStateValue} from './StateProvider'
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { useNavigate } from 'react-router-dom';



const Subtotal = () => {
    const[{cart}] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className="subtotal">
        
            <CurrencyFormat 

            renderText={value => (
            
            <div>
                 <span className="subtotal__title">
                Order Total - {cart.length} items:

            </span>
            <p>{value}</p>
            </div>
            )}
            
            thousandSeparator={true}
            value={getCartTotal(cart)}
            displayType={'text'}
            prefix={'$'}
            decimalScale={2}
            />

            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
            
        </div>

        
    )
}

export default Subtotal
