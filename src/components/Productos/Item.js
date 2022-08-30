import React from "react";
import ItemCount from "./ItemCount.js";
import Card from "react-bootstrap/Card";

const Item = ({ name, thumbnail, price, id, stock, description }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} producto/s 🍃`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} alt="" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
      </Card.Body>
    </Card>
  );
};

export default Item;
