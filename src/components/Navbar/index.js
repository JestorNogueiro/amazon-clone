import React from "react";
// import Logo from "./images/logo.79d0180e.png";
import './navbar.css'
import {FaSearch} from 'react-icons/fa'
import {TiShoppingCart} from 'react-icons/ti'
const Navbar = () => {
  return (
    <div className="header">
      <img
        className="amazon-logo"
        src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
        alt="amazon logo"
      />

      <div className="search">
        <input type="text" className="search-input" />
        <FaSearch className="search-icon"/>
      </div>

      <div className="nav">
        <div className="option">
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>

        <div className="option">
          <span>Return</span>
          <span>& Order</span>
        </div>

        <div className="option">
          <span>Your</span>
          <span>Prime</span>
        </div>
<div className="basket-icon">
 <TiShoppingCart/>
 <span className="basket-count">0</span>
 {/* <span className="shopping-cart">cart</span> */}
</div>

      </div>
    </div>
  );
};

export default Navbar;
