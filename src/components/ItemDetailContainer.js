import ItemCount from "./ItemCount";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [detalle, setDetalle] = useState([]);
  const { idProducto } = useParams();

  useEffect(() => {
    toast.info("Cargando detalle...");

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    pedido
      .then((resultado) => {
        toast.dismiss();
        setDetalle(resultado);
      })
      .catch((error) => {
        toast.error("Error al traer el detalle, intente nuevamente");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <div className="div__detalle">
        <h1>Este será el detalle de los productos</h1>;
        <ItemCount />;
      </div>
    );
  }
};

export default ItemDetailContainer;
