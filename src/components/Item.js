import React from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemCount";

const Item = ({ productos }) => {
  return (
    <div className="div__producto">
      <h3>{productos.nombre}</h3>
      <img src="https://picsum.photos/150" />
      <p>${productos.precio}</p>
      <Link
        to={`/producto/${productos.id}`}
        element={<ItemDetailContainer />}
        className="link__detalle"
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
