import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"
import StarRateIcon from '@material-ui/icons/StarRate';

const Product = ({id, image, title, rating, price}) => {
    const [ {}, dispatch ] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }
    return (
        <div className="product">
                <img 
                src={image} 
                alt=""/>
                 <h3>{title}</h3>
                 <div className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </div>
                <div className="product__rating">
                {Array(rating).fill().map((_)=> (<p><StarRateIcon /></p>))}
                </div>
                <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
