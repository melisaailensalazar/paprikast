import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "../../context/useContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { item, totalPrice } = useContext();

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
    </>
  );
};

export default Cart;
