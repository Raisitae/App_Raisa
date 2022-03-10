import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const ListadoProductos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
    {
      id: 5,
      nombre: "Producto 5",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
    {
      id: 6,
      nombre: "Producto 6",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
    {
      id: 7,
      nombre: "Producto 7",
      precio: 10,
      descripcion: "Esta es la descripción del producto",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    toast.info("Cargando productos...");

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(ListadoProductos);
      }, 2000);
    });

    pedido
      .then((resultado) => {
        toast.dismiss();
        setProductos(resultado);
      })
      .catch((error) => {
        toast.error("Error al traer los productos, intente nuevamente");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemList productos={productos} />;
  }
};

export default ItemListContainer;
