import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
