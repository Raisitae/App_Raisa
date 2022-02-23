//Necesitamos la variable react en scope
import React from "react";

//necesitamos la cariable reactDOM en scope
import ReactDOM from "react-dom";

//Necesitamos un componente en scope
import App from "./App";
import "./style.css";

//Necesitamos poner el componente en el DOM
ReactDOM.render(<App />, document.getElementById("root"));
