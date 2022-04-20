import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexto/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
