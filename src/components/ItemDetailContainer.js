import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);
  const { idProducto } = useParams();

  useEffect(() => {
    toast.info("Cargando detalle...");

    fetch(`https://fakestoreapi.com/products/${idProducto}`)
      .then((response) => {
        setTimeout(2000);
        toast.dismiss();
        return response.json();
      })
      .then((resultado) => {
        setProducto(resultado);
      })
      .catch(() => {
        toast.error("Error al traer el detalle, intente nuevamente");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemDetail producto={producto} />;
  }
};

export default ItemDetailContainer;
