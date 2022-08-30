import React from "react";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <section>
      <h2 className="item-list-container__title">DESTACADOS</h2>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
