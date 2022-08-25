import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart">
      <FontAwesomeIcon name="cart" icon={faCartShopping} />
      <span class="qty-display">0</span>
    </div>
  );
};

export default CartWidget;
