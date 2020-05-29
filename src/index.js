import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./js/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
