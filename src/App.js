import "./App.css";
import React from "react";

import { ItemListContainer } from "./components/Productos/ItemListContainer";
import Navbar from "./components/NavBar/NavBar.js";
import { ItemDetailContainer } from "./components/Productos/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContainer } from "./components/Productos/CartContainer";
import { CartProvider } from "./context/CartContext";
import { PaginaFirebase } from "./firebase/PaginaFirebase";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/productos/:categoria"
                element={<ItemListContainer />}
              />
              <Route
                path="/item/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<ItemListContainer />} />
              <Route path="/firebase" element={<PaginaFirebase />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
