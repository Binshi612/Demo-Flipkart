import React, { useState } from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slider() {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img
          src="https://i.ytimg.com/vi/HBXANI35Xlg/maxresdefault.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://hungamadeal.co.in/wp-content/uploads/2019/02/flipkart-2.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/media/CKmOzB0VEAAAm6U.jpg:large"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://rukminim2.flixcart.com/flap/1688/280/image/373ff2636d16f466.jpg?q=50"
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default Slider;
