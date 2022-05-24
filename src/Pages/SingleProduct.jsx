import React from "react";
import Navbar from "../Components/Navbar";
import SubSlider from "../Components/SubSlider";
import "./SingleProduct";
function SingleProduct() {
  return (
    <div className="Single-product">
      <Navbar />
      <SubSlider />
      <div className="page">
        <div className="left">
          <img src="" alt="" />
        </div>
        <div className="right">
          <h1>Title</h1>
          <h1>price</h1>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
