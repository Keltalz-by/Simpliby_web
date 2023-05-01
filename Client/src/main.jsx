import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/fonts/Eina01-Bold.woff2";
import "./assets/fonts/Eina01-Regular.woff2";
import "./assets/fonts/Eina01-SemiBold.woff2";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
