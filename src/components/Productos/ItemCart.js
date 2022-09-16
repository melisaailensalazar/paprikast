import React, { useContext } from "react";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext();

  return (
    <div className="itemCart">
      <img src={product.thumbnail} />
      <div>
        <p>Título: {product.title}</p>
        <p>Cantidad: {product.qty}</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: {product.qty * product.price}</p>
        <button onClick={() => removeItem()}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
