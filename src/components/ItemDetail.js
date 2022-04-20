import React from "react";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexto/CartContext";

const ItemDetail = ({ producto }) => {
  let [cantidad, setCantidad] = useState(0);
  const [disabled, setDisabled] = useState(false);
  let navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(producto, cantidad);
    console.log(cantidad);
    setTimeout(() => {
      navigate("/carrito");
    }, 1500);
  };

  return (
    <article className="article__center">
      <article className="article__itemDetail">
        <img className="img__productoDetalle" src={producto.image} alt="" />
        <div className="article__itemDetail-item">
          <h3>{producto.title}</h3>
          <p>${producto.price}</p>
          <p className="itemDetail__descripcion">{producto.description}</p>
          {cantidad === 0 ? (
            <ItemCount
              disabled={disabled}
              stock={5}
              initial={0}
              onAdd={onAdd}
            />
          ) : (
            <ItemCount disabled={true} stock={5} initial={1} onAdd={onAdd} />
          )}
        </div>
      </article>
    </article>
  );
};

export default ItemDetail;
