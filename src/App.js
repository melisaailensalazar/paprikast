import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/Productos/ItemCount";
import Card from "./components/Productos/Card";

function App() {
  return (
    <>
      <NavBar />
      <Card />
    </>
  );
}

export default App;
