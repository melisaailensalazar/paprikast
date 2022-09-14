import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/CartWidget.css";
import { CartContext } from "../../context/useContext";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  items.map((item) => {
    itemsInCart = itemsInCart + item.qty;
  });

  return (
    <div className="cart">
      <FontAwesomeIcon name="cart" icon={faCartShopping} />
      <span class="qty-display">0</span>
    </div>
  );
};

export default CartWidget;
