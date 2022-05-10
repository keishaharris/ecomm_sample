import React from 'react'
import { useStateValue } from "./StateProvider"
import StarRateIcon from '@material-ui/icons/StarRate';
import './CheckoutProduct.css'


const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
                <img 
                 className="checkoutProduct__image"
                src={image} 
                alt=""/>
        <div className="checkoutProduct__info">
         <h3>{title}</h3>
         <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating).fill().map((_)=> (<p><StarRateIcon /></p>))}
        </div>

        <button onClick={removeFromCart}>Remove from Basket</button>
        </div>
</div>
    )
}

export default CheckoutProduct
