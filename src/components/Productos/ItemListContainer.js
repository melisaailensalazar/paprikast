/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../styles/ItemListContainer.css";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
  const { categoria } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let queryRef = !categoria
          ? collection(db, "items")
          : query(collection(db, "items"), where("categoria", "==", categoria));
        const response = await getDocs(queryRef);
        const datos = response.docs.map((doc) => {
          const newDoc = {
            ...doc.data(),
            id: doc.id,
          };
          return newDoc;
        });
        setProductos(datos);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [categoria]);

  return (
    <div className="item-list-container">
      <ItemList items={productos} />
    </div>
  );
};
