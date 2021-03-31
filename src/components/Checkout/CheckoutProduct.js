import React from "react";
import { useStateValue } from "../Context/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
 const [{cart},dispatch]= useStateValue();
const handleRemoveItems= ()=>{
dispatch({
 type:"REMOVE_FROM_CART",
 id:id,
})
}

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>✨</p>
            ))}
        </div>
        <p className="checkoutProduct__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        
        <button className="checkoutProduct__button" onClick={handleRemoveItems}>Remove From Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
