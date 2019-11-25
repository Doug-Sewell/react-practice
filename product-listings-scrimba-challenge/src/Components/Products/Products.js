import React from 'react';
import Product from '../product/Product';
import productData from '../../Data/productData';
import './products.css';

const Products = () => {
    const displayProducts = () => {
        const productComponents = productData.map(product => <Product   className="product"
                                                                        key={product.id} 
                                                                        productDetails={{
                                                                            name: product.name,
                                                                            price: product.price,
                                                                            description: product.description
                                                                        }} />);
        return productComponents;
    }

    return (
       <section className="productsParent">
           {displayProducts()}
       </section>
    )
}

export default Products;