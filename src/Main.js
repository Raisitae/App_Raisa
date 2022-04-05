import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import Formulario from "./components/Formulario";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/category/:idCategoria" element={<ItemListContainer />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Formulario />} />
      </Routes>
    </main>
  );
};

export default Main;
