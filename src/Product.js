import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

 function Product({id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue(); 
    
    const addToBasket = () => {
    // Add item to basket
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });
};
     
 

  return (
  <div className="product" data-aos="zoom-in-up" data-aos="fade-up" data-aos-duration="1500">
    <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
            <small>€</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating)
                .fill()
                .map((_) => (
                    <p> ⭐ </p> 	
                ))}
        </div>
    </div>
    
    <img src={image} alt="" />
    
    <button onClick={addToBasket}>Add to basket
    <span></span><span></span><span></span><span></span>
    </button>
    
  </div>
  );
  
}



export default Product;
