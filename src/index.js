import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import Maket from "../src/component/Maket";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Maket />
  </React.StrictMode>
);

reportWebVitals();
