import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";

export const ItemListContainer = () => {
  let { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");

    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", "categoryId")
      );
      getDocs(queryFilter).then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      const queryFilter = query(
        queryCollection,
        where("category", "==", "categoryId")
      );
      getDocs(queryCollection).then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Productos destacados</h2>

      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
