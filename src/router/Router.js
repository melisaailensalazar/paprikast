import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Products from "../pages/Products";
import NavBar from "../components/NavBar/NavBar";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path=":category" element={<Products />} />
        </Route>
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
