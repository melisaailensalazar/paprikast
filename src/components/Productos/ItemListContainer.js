import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProductsFromDB,
  getProductsByCategory,
} from "../../helpers/getData.js";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  let { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      getProductsByCategory(setProducts, category);
    } else {
      getAllProductsFromDB(setProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Productos destacados</h2>

      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
