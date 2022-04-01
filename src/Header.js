import React from "react";
import NavBar from "./components/NavBar";
import { contexto } from "./contexto/CartContext";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

export default Header;
