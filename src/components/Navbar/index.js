import React from "react";
// import Logo from "./images/logo.79d0180e.png";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
const Navbar = () => {
  const [{cart}] = useStateValue();
  return (
    <div className="header">
  
        <Link to="/">
          <img
            className="amazon-logo"
            src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
            alt="amazon logo"
          />
        </Link>
      

      <div className="search">
        <input type="text" className="search-input" />
        <FaSearch className="search-icon" />
      </div>

      <div className="nav">
        <Link to="/" className="header__link">
          <div className="option">
            <span>Hello Guest</span>
            <span>Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="option">
            <span>Return</span>
            <span>& Order</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
        <div className="basket-icon">
          <TiShoppingCart />
          <span className="basket-count">{cart.length}</span>
          {/* <span className="shopping-cart">cart</span> */}
        </div>
        </Link>
      </div>
      
    </div>

  );
};

export default Navbar;
