import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer id={3} />
    </>
  );
}

export default App;
