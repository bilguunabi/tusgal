import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/scss/bootstrap.scss";
import "antd/dist/antd.css";
import "./global.scss";
// import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
