import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <NavLink to="/carrito">
      <div className="icon">
        <span className="material-icons">shopping_cart</span>
        <p>0</p>
      </div>
    </NavLink>
  );
};

export default CartWidget;
