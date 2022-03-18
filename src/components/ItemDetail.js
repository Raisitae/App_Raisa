import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const ItemDetail = ({ producto }) => {
  let [stock, setStock] = useState(5);

  const [disabled, setDisabled] = useState(false);

  const onAdd = (cantidadSeleccionada) => {
    console.log("Añadir al carrito", cantidadSeleccionada);
    if ((typeof cantidadSeleccionada === "number") & (stock != 0)) {
      setStock(stock - cantidadSeleccionada);
    } else if ((stock <= 0) & (stock === 0)) {
      setDisabled(true);
    }
  };

  return (
    <article className="article__center">
      <article className="article__itemDetail">
        <img className="img__productoDetalle" src={producto.image} alt="" />
        <div className="article__itemDetail-item">
          <h3>{producto.title}</h3>
          <p>${producto.price}</p>
          <p className="itemDetail__descripcion">{producto.description}</p>
          <ItemCount
            disabled={disabled}
            stock={stock}
            initial={1}
            onAdd={onAdd}
          />
        </div>
      </article>
    </article>
  );
};

export default ItemDetail;
