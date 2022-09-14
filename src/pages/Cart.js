import React, { useContext } from "react";
import { CartContext } from "../context/useContext";

const Cart = () => {
  const { items, removeItem, clearItems } = useContext(CartContext);

  return (
    <div className="container">
      <div className="contain">
        {items.map((item) => (
          <div key={item.id}>
            <br />
            <h3>
              {item.name} - {item.qty}
            </h3>
            <h6 onClick={() => removeItem(item.id)}>Borrar producto</h6>
          </div>
        ))}
        <h5 onClick={() => clearItems()}>Vaciar carrito</h5>
      </div>
    </div>
  );
};

export default Cart;
