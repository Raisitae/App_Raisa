import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

const Main = () => {
  return (
    <main className="main">
      <ItemListContainer persona="Santiago" />
      <ItemCount stock="10" initial="1" />
    </main>
  );
};

export default Main;
