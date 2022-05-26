import React from "react";
import Navbar from "../Components/Navbar";
import SubSlider from "../Components/SubSlider";
import "./SingleProduct.css";
function SingleProduct() {
  return (
    <div className="Single-product">
      <Navbar />
      <SubSlider />

      <div className="page">
        <div className="left">
          <img
            src="https://rukminim2.flixcart.com/image/800/960/k226oi80/kurti/e/t/p/3xl-ku233-mahageeta-original-imafhhyy5k5zhhwe.jpeg?q=50"
            alt=""
          />

          <div className="footer">
            <button className="btn1">Add to Cart</button>

            <button className="btn2">Buy Now</button>
          </div>
        </div>

        <div className="right">
          <div className="theme">
            <h1>Women Printed Cambric Flared Kurta (Orange)</h1>

            <h2>Special price</h2>
            <br />
            <h3>
              ₹359 <span className="old"> ₹789 </span>{" "}
              <span className="off">83% off</span>
            </h3>
            <br />
            <h4>Available Offers</h4>
            <br />
            <p>
              <span>Special Price</span> Get extra 10% off(price inclusive of
              discount)
            </p>
            <p>
              <span>Bank Offer</span> 5% cashback on Flipkart Axis Bank card
            </p>
            <p>
              <span>Partner Offer</span> Sign up for Flipkart Pay Later and get
              Flipkart Card worth ₹100
            </p>
          </div>
          <div className="service">
            <h1>Services</h1>
            <p>14 days Return policy</p>
            <p>Cash on delivery available</p>
          </div>
          <div className="size">
            <p>Size available</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
