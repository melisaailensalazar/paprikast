import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "../../context/useContext";
import ItemCart from "./ItemCart";
import { addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { item, totalPrice } = useContext();

  const order = {
    buyer: {
      name: "Melisa",
      email: "mel@gmail.com",
      phone: "12345678",
      adress: "abc 123",
    },
    items: item.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: product.qty,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (item.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {item.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
      <button onClick={handleClick}>Emitir compra</button>
    </>
  );
};

export default Cart;
