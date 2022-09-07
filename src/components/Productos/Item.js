import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import Card from "react-bootstrap/Card";

const Item = (item) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} producto/s 🍃`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.thumbnail} alt="" />
      <Card.Body>
        <Link to={`/detail/${item.id}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Card.Text>${item.price}</Card.Text>
        <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
      </Card.Body>
    </Card>
  );
};

export default Item;
