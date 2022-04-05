import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexto/CartContext";

import { Link } from "react-router-dom";
import Form from "./Formulario";

const Carrito = () => {
  const { cart, calcularTotal, vaciarCarrito, borrarProd } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div className="div__link-home">
          <Link className="link__home" to="/">
            Home
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((prod) => (
            <div className="div__carrito" key={prod.id}>
              <img className="img__carrito" src={prod.image} alt={prod.title} />
              <div className="div__carrito-data">
                <h3>Nombre: {prod.title}</h3>
                <h4>Cant: {prod.cantidad}</h4>
                <h4>Precio unitario: $ {prod.price}</h4>
              </div>
              <h4>Subtotal: $ {prod.price * prod.cantidad}</h4>
              <button
                className="button__carrito-producto"
                onClick={() => borrarProd(prod.id)}
              >
                Eliminar producto
              </button>
            </div>
          ))}
          <div className="div__total-carrito">
            <h2>Total: ${calcularTotal()}</h2>
            <button className="button__carrito-all" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <Link className="button__carrito-producto" to="/checkout">
              Finalizar compra
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrito;
