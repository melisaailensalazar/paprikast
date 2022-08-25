import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../Productos/ItemCount";

function BasicExample() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.elmueble.com/medio/2020/07/13/detalle-de-cactus_b426a518_1000x1177.jpg"
      />
      <Card.Body>
        <Card.Title>Cactus</Card.Title>
        <Card.Text>
          <ItemCount onAdd={onAdd} initial={1} stock={7} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
