import React from "react";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__title">
        <ul> Erlich </ul>
      </div>
      <div className="navBar__items">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Catálogo de productos</a>
        </li>
        <li>
          <a href="#">Contáctanos</a>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
