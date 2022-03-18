import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd, disabled }) {
  let [itemCount, setEstado] = useState(1);

  const HandleSumar = () => {
    if (itemCount >= stock) {
      alert("Nos quedamos sin stock");
    } else {
      setEstado(itemCount + 1);
    }
  };

  const HandleRestar = () => {
    if (itemCount <= initial) {
    } else {
      setEstado(itemCount - 1);
    }
  };

  const HandleAgregar = () => {
    onAdd(itemCount);
    setEstado(1);
  };

  return (
    <div className="div__itemcount">
      <div className="div__itemcount-botonera">
        <button className="button__restar" onClick={HandleRestar}></button>
        <p>{itemCount}</p>
        <button className="button__sumar" onClick={HandleSumar}></button>
      </div>
      <button
        disabled={disabled}
        className="button__agregar"
        onClick={HandleAgregar}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
