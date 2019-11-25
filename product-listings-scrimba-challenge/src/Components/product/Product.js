import React from 'react';
import './product.css';
const Product = (props) => {
    return (
        <div className="product">
            <header>
                <h3>{props.productDetails.name}</h3>
            </header>
            <p>Description: {props.productDetails.description}</p>
            <p>Price: ${props.productDetails.price}</p>
        </div>
    )
}


export default Product;