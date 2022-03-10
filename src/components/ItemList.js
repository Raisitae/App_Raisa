import React from "react";

import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <section className="section__productos">
      {productos.map((item) => (
        <Item key={item.id} productos={item} />
      ))}
    </section>
  );
};

export default ItemList;
