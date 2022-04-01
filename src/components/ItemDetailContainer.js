import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);
  const { idProducto } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "Productos");
    const filtro = query(
      productosCollection,
      where("id", "==", Number(idProducto))
    );
    const pedido = getDocs(filtro);
    toast.info("Cargando producto...");
    pedido
      .then((res) => setProducto(res.docs[0].data()))
      .catch((err) =>
        toast.error("Error al traer el producto, intente nuevamente")
      )
      .finally(() =>
        setTimeout(() => {
          toast.dismiss();
          setLoading(false);
        }, 500)
      );
  }, [idProducto]);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemDetail producto={producto} />;
  }
};

export default ItemDetailContainer;
