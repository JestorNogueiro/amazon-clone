import React from "react";
import Product from "../Products";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Home Image"
          />
          {/* <img className='home-image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Home Image" /> */}
        </div>
      </div>
      <div className="home__products">
        <Product
          id="10"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81wLTZye41L._AC_SX425_.jpg"
          }
          title="ASUS ROG Zephyrus Duo 15 Gaming Laptop, 15.6” , NVIDIA GeForce RTX 2070S, Intel Core i7-10875H, 32GB DDR4, 2TB RAID 0 SSD, "
          price={22000}
          rating={5}
        />
        {/* </div>
 < div className="home__products"> */}
        <Product
          id="10"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71aqNzEqj0L._SL1500_.jpg"
          }
          title="OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage) "
          price="27,999"
          rating={5}
        />
      </div>
      <div className="home__products">
        <Product
          id="10"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81wLTZye41L._AC_SX425_.jpg"
          }
          title="ASUS ROG Zephyrus Duo 15 Gaming Laptop, 15.6”  "
          price="23,100"
          rating={5}
        />
        {/* </div>P
 < div className="home__products"> */}
        <Product
          id="5"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg"
          }
          title="New Apple iPhone 12 Pro (128GB) - Pacific Blue"
          price=" 1,19,900"
          rating={4}
        />
        <Product
          id="10"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81wLTZye41L._AC_SX425_.jpg"
          }
          title="ASUS ROG Zephyrus Duo 15 Gaming Laptop"
          price="33,100"
          rating={4}
        />
      </div>
      <div className="home__fullImage">
        <Product
          id="10"
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81pv0g8bQhL._SL1500_.jpg"
          }
          title="LG 25-inch (63.5 cm) UltraWide Multitasking Monitor with Full HD  (2560 x 1080) IPS Panel, HDMI Port, AMD Freesync - 25UM58 (Black)"
          price="13,499"
          rating={3}
        />
      </div>
    </>
  );
};

export default Home;
