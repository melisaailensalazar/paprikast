import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { db } from "../../firebase/config";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const CartContainer = () => {
  const { productCartList, clearProductCartList, getTotalPrice } =
    useContext(CartContext);
  console.log(productCartList);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    //crear referencia en la base de datos de donde voy a guardar el documento
    const queryRef = collection(db, "orders");
    //agregamos el documento
    addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
    console.log(order);
  };

  const updateOrder = () => {
    const queryRef = doc(db, "products", "9Xxo07Mmt7ifo0Et6RMH");
    updateDoc(queryRef, {
      type: "planta",
      thumbnail:
        "https://www.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg",
      price: 900,
      title: "Planta 2",
    }).then(() => console.log("Producto actualizado"));
  };

  return (
    <div>
      <p>CartContainer</p>
      <div>
        {productCartList.length > 0 ? (
          <>
            {productCartList.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <hr />
            <button onClick={clearProductCartList}>Vaciar el carrito</button>
            <p>Precio total: {getTotalPrice()}</p>
            <form onSubmit={sendOrder}>
              <input type="text" placeholder="nombre" />
              <input type="text" placeholder="telefono" />
              <input type="email" placeholder="email" />
              <button type="submit">enviar orden</button>
            </form>
            <button onClick={updateOrder}>actualizar</button>
          </>
        ) : (
          <p>No has agregado productos</p>
        )}
      </div>
    </div>
  );
};
