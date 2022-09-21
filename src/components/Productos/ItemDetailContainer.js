import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import "../styles/ItemDetailContainer.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { detalleId } = useParams();

  useEffect(() => {
    getDoc(doc(getFirestore(), "products", "detalleId")).then((res) =>
      setProduct({ id: res.id, ...res.product() })
    );
  }, []);

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
