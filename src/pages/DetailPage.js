import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetailContainer from "../components/Productos/ItemDetailContainer.js";

const DetailPage = () => {
  let { id } = useParams();

  return (
    <main>
      <ItemDetailContainer id={id} />
      <Link to="/">Volver a home</Link>
    </main>
  );
};

export default DetailPage;
