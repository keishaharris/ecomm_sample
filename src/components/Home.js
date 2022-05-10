import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
        
                <img 
                alt="" 
                src="https://thumbs.dreamstime.com/b/west-african-food-concept-traditional-wset-dishes-assortment-peanut-soup-jollof-rice-grilled-chicken-wings-dry-fried-bananas-136692445.jpg" />
           
                
                <div className="home__title">
                <h1>DISCOVER AFRICAN TREATS:<br />
                YOUR HIGHEST QUALITY FOR TRADITIONAL WEST AFRICAN SNACKS </h1>
                </div>
                <Link to="/products">
                <div className="home__shopNow">
                    Shop now
                </div>
                </Link>
            </div>
            
            <div className="home__rows">
                <Product 
                id="1"
                title="Nasco Cornflakes"
                image="https://cdn.shopify.com/s/files/1/0250/6208/0600/products/6CE12E4D-38DE-4E23-A01C-63410A89DD30_2048x.jpg"
                rating={3}
                price={2.99}
                />
                <Product 
                id="2"
                title="Golden Morn Cereal"
                image="https://cdn.shopify.com/s/files/1/0250/6208/0600/products/goldenmorn_3ca5f2cb-3d9f-4a46-aebc-0b3262b50650_2048x.jpg?v=1601562781"
                rating={3}
                price={7.99}
                />
                 <Product 
                id="3"
                title="Minimie Chin Chin"
                image="https://cdn.shopify.com/s/files/1/0250/6208/0600/products/072D66C4-CF15-4234-98F9-60C4CCA22C11_2048x.jpg?v=1637466083"
                rating={4}
                price={4.99}
                />
                <Product 
                id="4"
                title="Pure Bliss - Milk Cream Wafers"
                image="https://cdn.shopify.com/s/files/1/0250/6208/0600/products/purebliss_2048x.png?v=1601566217"
                rating={5}
                price={2.99}
                />
            </div>
            <Link to="/products" className="home__link">
                <div className="home__button">
                    Shop More Products . . .
                </div>
            </Link>
        
        </div>
    )
}

export default Home
