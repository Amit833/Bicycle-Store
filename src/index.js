import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import MyProvider from "./context/MyProvider";

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById("root")
);
