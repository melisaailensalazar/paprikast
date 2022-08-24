import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="cart">
      <FontAwesomeIcon name="cart" icon={faCartShopping} />
      <span class="item__total">0</span>
    </div>
  );
};

export default CartWidget;
