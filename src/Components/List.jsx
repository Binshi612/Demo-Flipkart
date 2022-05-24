import React from "react";
import "./List.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
function List(props) {
  return (
    <div className="list">
      <h1>{props.title}</h1>
      <br />
      <hr />
      <div className="offers">
        <Carousel responsive={responsive}>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/150/150/km2clu80/shoe/z/r/j/9-ca40273-9-kraasa-brown-original-imagffy5p3nprntt.jpeg?q=70"
              alt=""
            />
            <p>Casual shoes</p>
            <p className="p2">Extra 105 Off</p>
            <p className="p3">Buy Now!</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/150/150/k66sh3k0/sari/5/t/8/free-pari-24-maroon-dharm-enterprises-original-imafbb2hvzxqhs3x.jpeg?q=70"
              alt=""
            />
            <p>Women's Sarees</p>
            <p className="p2">Extra 10% Off</p>
            <p className="p3">Hurry, Don't Miss Out</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/300/300/jvgzl3k0/jewellery-set/8/6/9/cb73381-d2-sukkhi-original-imaf7yphyhcuc7sf.jpeg?q=70"
              alt=""
            />
            <p>Jewellary Sets</p>
            <p className="p2">Extra 5%</p>
            <p className="p3">Great Savings</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/150/150/km0x5zk0/top/j/z/o/m-178tkr2901-selvia-original-imagfyqfytkkfpkn.jpeg?q=70"
              alt=""
            />
            <p>Women's Tops</p>
            <p className="p2">Special Offer</p>
            <p className="p3">Buy Now!</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/300/300/l3hmwsw0/watch/w/i/u/1-boys-and-men-s-exclusive-men101-blue-daniel-jubile-boys-original-imagehkrqfvwfn4e.jpeg?q=70"
              alt=""
            />
            <p>Wrist Watches</p>
            <p className="p2">Extra 10% Off</p>
            <p className="p3">Shop Now!</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/300/300/ko62xzk0/slipper-flip-flop/w/f/u/12-sl51005-kraasa-camel-black-original-imag2zxz25j52c4p.jpeg?q=70"
              alt=""
            />
            <p>Slippers & Flip flops</p>
            <p className="p2">Extra 10% Off</p>
            <p className="p3">Buy Now!</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/300/300/kx7vc7k0/fabric/c/v/v/yes-2-25-m-unstitched-2-2-m-kirti-tryzon-original-imag9q2jggttqyap.jpeg?q=70"
              alt=""
            />
            <p>Women's Dress Materials</p>
            <p className="p2">Extra 10% Off</p>
            <p className="p3">Great Savings!</p>
          </div>
          <div className="product">
            <img
              className="img1"
              src="https://rukminim2.flixcart.com/image/300/300/kubk70w0/key-holder/d/9/h/6-cak-line-capio-art-original-imag7hfg5ztjbkkn.jpeg?q=70"
              alt=""
            />
            <p>Key Holders</p>
            <p className="p2">Special Offer</p>
            <p className="p3">Discover Now!</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default List;
