import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/Productos/ItemCount";

function App() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };
  return (
    <>
      <NavBar />
      <ItemCount onAdd={onAdd} initial={1} stock={7} />
    </>
  );
}

export default App;
