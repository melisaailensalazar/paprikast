import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/ItemCount.css";

const ItemCount = ({ onAdd, initial, stock }) => {
  const [qty, setQty] = useState(false);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock}
        >
          +
        </button>
      </div>

      <Button
        variant="success"
        onClick={() => {
          onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </Button>
    </div>
  );
};

export default ItemCount;
