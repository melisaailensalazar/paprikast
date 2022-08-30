import React, { useEffect, useState } from "react";
import { getProductById } from "../../helpers/getData.js";
import ItemDetail from "./ItemDetail";
import "../styles/ItemDetailContainer.css";

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(Number(id), setProduct);
    console.log(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
