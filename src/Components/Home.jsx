import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import List from "./List";
import Slider from "./Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Slider />
      <List title="Deal of the Day" />
      <List title="Trending Offers" />
      <List title="Shop student Essentials" />
      <List title="Recently viewed" />
    </div>
  );
}

export default Home;
