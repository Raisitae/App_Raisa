import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    toast.info("Cargando productos...");

    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((resultado) => {
        toast.dismiss();
        setProductos(resultado);
      })
      .catch(() => {
        toast.error("Error al traer los productos, intente nuevamente");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    if ((idCategoria != "productos") & (idCategoria != undefined)) {
      let productosFiltrados = productos.filter(function (obj) {
        return obj.category === `${idCategoria}`;
      });
      return <ItemList productos={productosFiltrados} />;
    } else {
      return <ItemList productos={productos} />;
    }
  }
};

export default ItemListContainer;
