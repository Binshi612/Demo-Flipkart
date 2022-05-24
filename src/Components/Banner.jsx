import React from "react";
import "./Banner.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Banner() {
  return (
    <div className="main">
      <div className="Top-offer option">
        <img
          className="offer"
          src="https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          alt=""
        />
        <a href="">
          <h1>Top Offers</h1>
        </a>
      </div>
      <div className="Grocery option">
        <img
          className="offer"
          src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          alt=""
        />
        <a href="">
          <h1>Grocery</h1>
        </a>
      </div>

      <div className="mobile option">
        <img
          className="offer"
          src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          alt=""
        />
        <a href="">
          <h1>Mobiles</h1>
        </a>
      </div>
      <div className="Fasion option">
        <img
          className="offer"
          src="https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
          alt=""
        />
        <a href="">
          <h1>
            Fasion
            <ArrowDropDownIcon />
            <div className="sub">
              <span> WomenWestern</span>
              <span>Women Ethnic</span>
              <span>Men Footwear</span>
              <span>Men Formal</span>
            </div>
          </h1>
        </a>
      </div>
      <div className="Electronics option">
        <img
          className="offer"
          src="	https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=10"
          alt=""
        />
        <a href="">
          <h1>
            Electronics
            <ArrowDropDownIcon />
            <div className="sub">
              <span>Audio</span>
              <span>Gaming</span>
              <span>Laptop Accessories</span>
              <span>Computer Accessories</span>
            </div>
          </h1>
        </a>
      </div>
      <div className="home option">
        <img
          className="offer"
          src="	https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          alt=""
        />
        <a href="">
          <h1>Home</h1>
        </a>
      </div>
      <div className="appliance option">
        <img
          className="offer"
          src="	https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          alt=""
        />

        <h1>
          Appliances
          <ArrowDropDownIcon />
          <div className="sub">
            <span>Televisions</span>
            <span>Washing Machines</span>
            <span>Home Appliances</span>
            <span>Kitchen Appliance</span>
          </div>
        </h1>
      </div>
      <div className="travel option">
        <img
          className="offer"
          src="		https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          alt=""
        />
        <a href="">
          <h1>Travel</h1>
        </a>
      </div>
      <div className="beauty option">
        <img
          className="offer"
          src="		https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          alt=""
        />
        <a href="">
          <h1>Beauty ,Toys & More</h1>
        </a>
      </div>
    </div>
  );
}

export default Banner;
