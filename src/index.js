import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Context } from "./context";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/globals.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
