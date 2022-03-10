import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import Carrito from "./components/Carrito";
import Landing from "./components/Landing";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
