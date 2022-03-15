import React from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemCount";

const Item = ({ productos }) => {
  return (
    <div className="div__producto">
      <h3>{productos.title}</h3>
      <img className="img__productoListado" src={productos.image} />
      <p>${productos.price}</p>
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
