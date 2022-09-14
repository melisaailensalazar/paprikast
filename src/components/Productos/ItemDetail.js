import React, { useState, useContext } from "react";
import { CartContext } from "../../context/useContext";
import ItemCount from "./ItemCount";

import "../styles/ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false);
  const { addItem } = useContext(CartContext);

  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Nombre:</li>
          <li>{item.name}</li>
          <li>Precio:</li>
          <li>${item.price}</li>
          <li>Stock:</li>
          <li>{item.stock}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={addItem} />
      </div>
    </article>
  );
};
export default ItemDetail;
