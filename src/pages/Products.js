import React from "react";
import ItemListContainer from "../components/Productos/ItemListContainer";

const Products = () => {
  console.log("products");
  return (
    <main className={"product-page-container"}>
      <ItemListContainer />
    </main>
  );
};

export default Products;
