import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SingleProduct from "./Pages/SingleProduct";
import LogPage from "./Pages/LogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product" element={<SingleProduct />} />

        <Route path="/login" element={<LogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
