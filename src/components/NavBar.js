import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__title">
        <ul>
          <NavLink to="/">Erlich</NavLink>
        </ul>
      </div>
      <div className="navBar__items">
        <CartWidget />
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/category/productos">Todos los productos</NavLink>
        </li>
        <li>
          <NavLink to="/category/tazas">Tazas</NavLink>
        </li>
        <li>
          <NavLink to="/category/pines">Pines</NavLink>
        </li>
        <li>
          <NavLink to="/category/cuadernos">Cuadernos</NavLink>
        </li>
        <li>
          <NavLink to="/category/posters'">Posters</NavLink>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
