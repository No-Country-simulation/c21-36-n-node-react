import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importar JS de Bootstrap
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
