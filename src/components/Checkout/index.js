import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        <img
          className="checkout__image"
          src="https://www.paisebachaoindia.com/wp-content/uploads/2016/01/banner.png"
          alt="CheckOut Image"
        />
        {cart?.length === 0 ? (
          <div className="checkout__title">
            <h2>Your Cart is Impty</h2>
            <p>Please Add the items into the cart</p>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>Your Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__subTotal">
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
