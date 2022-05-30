import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="lef">
        <h1>MY CART(1)</h1>
        <hr />
        <div className="product-detail">
          <div className="pro-img"></div>
          <div className="pro-content"></div>
          <div className="days"></div>
        </div>
        <div className="foots">
          <button className="btns">COUNTINUE SHOPPING</button>
          <button className="btns">PLACE ORDER</button>
        </div>
      </div>
      <div className="righ">
        <h1>PRICE DETAILS</h1>
        <br />
        <hr />
        <div className="Pay">
          <div>
            <h2>Price (1 item)</h2>
            <br />

            <h2>Delivery Charges</h2>
            <br />

            <h3>Amount Payable</h3>
          </div>
          <div className="price">
            <span>960</span>
            <br />
            <br />
            <span className="free">FREE</span>
            <br />
            <br />

            <span>960</span>
          </div>
        </div>
        <br />
        <hr />

        <h4>Your Total Savings on this order 1,089</h4>
      </div>
    </div>
  );
}

export default Cart;
