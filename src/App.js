import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SingleProduct from "./Pages/SingleProduct";
import LogPage from "./Pages/LogPage";
import Cart from "./Pages/Cart";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
