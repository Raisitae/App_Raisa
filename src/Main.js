import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/category/:idCategoria" element={<ItemListContainer />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
