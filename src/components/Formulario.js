import React from "react";
import { db } from "./firebase";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import { CartContext } from "../contexto/CartContext";
import { useContext } from "react";

function Form() {
  const { cart, calcularTotal } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleNombre = (e) => {
    setNombre(e.target.value);
    setEnviado(false);
  };

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
    setEnviado(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEnviado(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (nombre === "" || email === "" || telefono === "") {
      setError(true);
      toast.error("Por favor, debe rellenar todos los datos");
    } else {
      setEnviado(true);
      setError(false);
      terminarCompra();
    }
  };

  const terminarCompra = () => {
    const order = {
      buyer: {
        nombre: nombre,
        telefono: telefono,
        email: email,
      },
      items: cart,
      date: serverTimestamp(),
      total: calcularTotal(),
    };
    console.log(order);
    const ventasCollection = collection(db, "orders");
    const pedido = addDoc(ventasCollection, order);

    pedido
      .then((res) => {
        console.log(res);
        toast.success("Finalizo la compra exitosamente");
      })
      .catch((error) => {
        toast.error("Ups, se ha producido un error");
      });
  };

  return (
    <div className="div__formulario">
      <form className="form__terminarCompra">
        <h2>Datos del cliente</h2>
        <h3>Nombre</h3>
        <input
          className="input__formulario"
          name="nombre"
          placeholder="Nombre"
          type="text"
          onChange={handleNombre}
          value={nombre}
        />
        <h3>Teléfono</h3>
        <input
          className="input__formulario"
          name="telefono"
          placeholder="Teléfono"
          type="number"
          onChange={handleTelefono}
          value={telefono}
        />
        <h3>Email</h3>
        <input
          className="input__formulario"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleEmail}
          value={email}
        />
        <button className="button__carrito-producto" onClick={handleSubmit}>
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}

export default Form;
