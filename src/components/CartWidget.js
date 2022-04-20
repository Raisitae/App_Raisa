import React, { useContext } from "react";
import { CartContext } from "../contexto/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { cantProductos } = useContext(CartContext);
  return (
    <NavLink to="/carrito ">
      <div className="icon">
        <span className="material-icons">shopping_cart</span>
        <p>{cantProductos()}</p>
      </div>
    </NavLink>
  );
};

export default CartWidget;
