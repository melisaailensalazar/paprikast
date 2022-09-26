import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "firebase/firestore";
import getCategories, { getCategory } from "../services/getData";
import { getFirestore } from "./../firebase";
import "./styles/Cart.css";
import UserForm from "./UserForm";

export default function LoadProduct() {
  const [subirButtonClass, setSubirButtonClass] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [user, setUser] = useState({});
  const history = useHistory();
  const db = getFirestore();

  // Obtener todos los nombres de las categorias
  let categories = [];
  getCategories().then((res) => {
    categories = res.map((cat) => cat.name);
  });

  // Refs para los campos
  const titleRef = {
    ref: useRef(),
    id: "title",
    title: "Nombre del producto",
    type: "text",
  };
  const descriptionRef = {
    ref: useRef(),
    id: "description",
    title: "Descripcion",
    type: "text",
  };
  const pictureUrlRef = {
    ref: useRef(),
    id: "pictureUrl",
    title: "Imagen (url)",
    type: "url",
  };
  const stockRef = {
    ref: useRef(),
    id: "stock",
    title: "Stock",
    type: "number",
  };
  const priceRef = {
    ref: useRef(),
    id: "price",
    title: "Precio",
    type: "number",
  };

  const generarItem = () => {
    const itemsCol = db.collection("products");

    // Arma el item con el usuario y los datos
    let item = {};
    item.owner = user;
    item.title = titleRef.ref.current.value;
    item.description = descriptionRef.ref.current.value;
    item.categoryId = categoryId;
    item.pictureUrl = pictureUrlRef.ref.current.value;
    item.stock = stockRef.ref.current.value;
    item.price = priceRef.ref.current.value;

    console.log(item);
    // Agrega un nuevo documento de item y redirecciona
    itemsCol
      .add(item)
      .then(({ id }) => {
        history.push("item/" + id);
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        console.log("subido");
      });
  };

  // Buscar categoria seleccionada en el 'selector de categoria'
  const searchCategory = (keyword, event) => {
    event.preventDefault();
    console.log(keyword);
    getCategory(keyword)
      .then((res) => {
        setCategoryId(res.id);
      })
      .catch((err) => console.err(err));
  };

  // Seleccion de categoria
  const CategorySelector = () => {
    const [suggestion, setSuggestion] = useState("");
    const existsClass = useRef("");

    const handleChange = ({ target: { value: input } }) => {
      setSuggestion("");
      existsClass.current = "";

      if (input) {
        // Buscar el nombre de la categoria
        const found =
          categories.find((cat) => cat.startsWith(input.toLowerCase())) || "";

        const capitalizedInput =
          input.charAt(0) === input.charAt(0).toUpperCase();

        setSuggestion(
          // La sugerencia se adhiere al estado de la primera letra del input
          capitalizedInput
            ? found.charAt(0).toUpperCase() + found.slice(1)
            : found
        );

        // Decide que icono mostrar
        existsClass.current = found ? "active" : "not";
      }
    };

    return (
      <>
        <form
          autoComplete="off"
          onSubmit={(e) => searchCategory(suggestion.toLowerCase(), e)}
          className="category-form"
        >
          <div className={"category-finder " + existsClass.current}>
            <span className="suggestion">{suggestion}</span>
            <input
              type="text"
              name="category"
              placeholder="Categoria"
              onChange={handleChange}
            />
          </div>
          <div className="total">
            <button
              onClick={(e) => searchCategory(suggestion.toLowerCase(), e)}
              disabled={existsClass.current !== "active"}
              className={"subir-producto " + existsClass.current}
            >
              Siguiente
            </button>
          </div>
        </form>
      </>
    );
  };

  if (!categoryId) return <CategorySelector />;

  // Render
  return (
    <>
      <div className="🛒">
        <div className="total" style={{ height: "auto" }}>
          <UserForm
            setUser={setUser}
            setButtonClass={setSubirButtonClass}
            preTitle="Datos del producto"
            preFields={[
              titleRef,
              descriptionRef,
              pictureUrlRef,
              stockRef,
              priceRef,
            ]}
          />
        </div>
        <div className="total">
          <button
            className={"subir-producto " + subirButtonClass}
            disabled={subirButtonClass.length === 0}
            onClick={generarItem}
          >
            Subir Producto
          </button>
        </div>
      </div>
    </>
  );
}
