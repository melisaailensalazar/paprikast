import React, { useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { useState } from "react";

export const PaginaFirebase = () => {
  const [arregloProductos, setArregloProductos] = useState([]);

  useEffect(() => {
    const getDocumento = async () => {
      const query = doc(db, "items", "9Xxo07Mmt7ifo0Et6RMH");
      const response = await getDoc(query);
      const producto = {
        ...response.data(),
        id: response.id,
      };
      console.log("productos", producto);
    };
    getDocumento();
  }, []);

  return <div>PaginaFirebase</div>;
};
