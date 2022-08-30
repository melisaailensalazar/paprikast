import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getAllProductsFromDB } from "../../helpers/getData.js";

import "../styles/ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsFromDB(setProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <Item
                key={product.id}
                name={product.name}
                thumbnail={product.thumbnail}
                price={product.price}
                stock={product.stock}
                id={product.id}
              />
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;
