import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log("Añadir al carrito", cantidadSeleccionada);
  };

  return (
    <article className="article__center">
      <article className="article__itemDetail">
        <img className="img__productoDetalle" src={producto.image} alt="" />
        <div className="article__itemDetail-item">
          <h3>{producto.title}</h3>
          <p>${producto.price}</p>
          <p className="itemDetail__descripcion">{producto.description}</p>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </article>
    </article>
  );
};

export default ItemDetail;
