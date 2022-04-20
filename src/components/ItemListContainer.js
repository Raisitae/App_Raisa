import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (!idCategoria) {
      const productosCollection = collection(db, "productos");

      const pedido = getDocs(productosCollection);

      toast.info("Cargando productos...");
      pedido
        .then((res) => setProductos(res.docs.map((doc) => doc.data())))

        .catch((err) =>
          toast.error("Error al traer los productos, intente nuevamente")
        )
        .finally(() => toast.dismiss(), setLoading(false));
    } else {
      const productosCollection = collection(db, "productos");

      const pedido = getDocs(productosCollection);

      pedido
        .then((res) => setProductos(res.docs.map((doc) => doc.data())))

        .catch((error) => {
          console.error(error);
        })
        .finally(() =>
          setTimeout(() => {
            toast.dismiss();
            setLoading(false);
          }, 500)
        );
    }
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
