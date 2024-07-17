import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Product_Detail from "./Components/Product_Detail";
import Related_Product from "./Components/Related_Product";
import Search_Product from "./Components/Search_Product";
import { items } from "./data";
import Card from "./Components/Card"

const App = () => {
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("My Cart", cart);
  };
  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Products data={data} addToCart={addToCart} />}
          />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path="/search/:term" element={<Search_Product />} />
          <Route path="/card" element={<Card cart={cart}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
