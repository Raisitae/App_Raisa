import { useState } from "react";
import React from "react";
export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    isOnCart(item.id)
      ? sumarCantidad(item, cantidad)
      : setCart([...cart, { ...item, cantidad }]);
  };

  const isOnCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const sumarCantidad = (item, cantidad) => {
    const newProducts = cart.map((prod) => {
      if (prod.id === item.id) {
        const newProduct = {
          ...prod,
          cantidad: prod.cantidad + cantidad,
        };
        return newProduct;
      } else {
        return prod;
      }
    });
    setCart(newProducts);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const calcularTotal = () => {
    let totalCarrito = 0;
    cart.forEach((prod) => {
      totalCarrito += prod.price * prod.cantidad;
    });
    return totalCarrito;
  };

  const cantProductos = () => {
    let cantidadProductos = 0;
    cart.forEach((prod) => {
      cantidadProductos += prod.cantidad;
    });
    return cantidadProductos;
  };

  const borrarProd = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        vaciarCarrito,
        calcularTotal,
        borrarProd,
        cantProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
