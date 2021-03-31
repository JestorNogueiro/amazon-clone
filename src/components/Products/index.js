import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "./product.css";

const Product = ({ id, title, price, rating, image }) => {
  const [{cart},dispatch] = useStateValue();
  const addTocart = () => {
    //Adding Items to Cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image, 
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__title">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>✨</p>
            ))}
        </div>
        <div className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </div>

        <img src={image} alt="laptop" className="product__image" />
      </div>
      <button onClick={addTocart} className="product__button">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
