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
          <NavLink to="/category/productos">Catálogo de productos</NavLink>
        </li>
        <li>
          <NavLink to="/category/electronics">Electronica</NavLink>
        </li>
        <li>
          <NavLink to="/category/jewelery">Joyería</NavLink>
        </li>
        <li>
          <NavLink to="/category/women's clothing">Ropa femenina</NavLink>
        </li>
        <li>
          <NavLink to="/category/men's clothing">Ropa masculina</NavLink>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
